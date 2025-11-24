# setup hfgd2.0 quickly

1. create a new stack with the compose
2. add the `.env` sample and change the required fields
3. copy the `homeserver.yaml` to the synapse data folder and change the variables there
4. create the `.log.config` and `.signing.key` files and `media_store` folder
   > the synapse signing key can be generated using the `synapse-init` service using:
   >
   > ```
   > pip install matrix-synapse && \
   > python -m synapse.app.homeserver \
   > --generate-keys \
   > --config-path /data/homeserver.yaml \
   > --keys-directory /data \
   > --server-name <MATRIX DOMAIN>
   > ```
5. fix the file permissions for the signing key:
   > chown 991:991 _.signing.key
   > chmod 644 _.signing.key
6. remove the `synapse-init` service
7. create a synapse admin user with `register_new_matrix_user -c /data/homeserver.yaml`
8. create the ui config file `/usr/share/nginx/html/config/config.js`

## compose

```yml
services:
  ui:
    image: registry.hfg.gd:5050/hfgd20_dev/ui:main
    networks:
      - traefik_default
    depends_on:
      - api
    # ports:
    #   - 8080:80
    volumes:
      - ui_data:/usr/share/nginx/html/config
    deploy:
      mode: replicated
      replicas: 1
      update_config:
        parallelism: 1
        delay: 10s
      restart_policy:
        condition: on-failure
      labels:
        - 'traefik.enable=true'
        - 'traefik.port=80'
        - 'traefik.docker.network=traefik_default'
        - 'traefik.http.routers.${STACK_NAME}-ui.rule=Host(`${STACK_NAME}-ui.${DOMAIN}`)'
        - 'traefik.http.services.${STACK_NAME}-ui.loadbalancer.server.port=80'
        - 'traefik.http.services.${STACK_NAME}-ui.loadbalancer.server.scheme=http'

  api:
    image: registry.hfg.gd:5050/hfgd20_dev/slv-api:main
    networks:
      - traefik_default
      - mongo
    depends_on:
      - mongo
      - synapse
      - minio
    # ports:
    #   - 8081:80
    deploy:
      mode: replicated
      replicas: 1
      update_config:
        parallelism: 1
        delay: 10s
      restart_policy:
        condition: on-failure
      labels:
        - 'traefik.enable=true'
        - 'traefik.port=80'
        - 'traefik.docker.network=traefik_default'
        - 'traefik.http.routers.${STACK_NAME}-api.rule=Host(`${STACK_NAME}-api.${DOMAIN}`)'
        - 'traefik.http.services.${STACK_NAME}-api.loadbalancer.server.port=80'
        - 'traefik.http.services.${STACK_NAME}-api.loadbalancer.server.scheme=http'
    environment:
      - URL=${STACK_NAME}-api.${DOMAIN}
      - API_ENV=prod
      - PORT=$PORT
      - CORS_ORIGINS=$CORS_ORIGINS
      - MONGO_USER=$MONGO_USER
      - MONGO_PASSWORD=$MONGO_PASSWORD
      - MONGO_URL=$MONGO_URL
      - MONGO_DATABASE=$MONGO_DATABASE
      - S3_ACCESS_KEY=$MINIO_ROOT_USER
      - S3_SECRET_KEY=$MINIO_ROOT_PASSWORD
      - S3_BUCKET_SLIDES=$MINIO_BUCKET_SLIDES
      - S3_BUCKET_SPACE_ICONS=$MINIO_BUCKET_SPACE_ICONS
      - S3_BUCKET_AVATARS=$MINIO_BUCKET_AVATARS
      - S3_REGION=$MINIO_REGION
      - ALLOWED_PKCE_CLIENTS=$ALLOWED_PKCE_CLIENTS
      - ALLOWED_CLIENT_CLIENTS=$ALLOWED_CLIENT_CLIENTS
      - LIVEKIT_API_KEY=$LIVEKIT_API_KEY
      - LIVEKIT_API_SECRET=$LIVEKIT_API_SECRET
      - LIVEKIT_API_URL=$LIVEKIT_API_URL
      - MATRIX_BASE_URL=$MATRIX_BASE_URL
      - MATRIX_USER=$MATRIX_USER
      - MATRIX_PASSWORD=$MATRIX_PASSWORD
      - KEYCLOAK_URL=$KEYCLOAK_URL
      - KEYCLOAK_REALM=$KEYCLOAK_REALM
      - KEYCLOAK_CLIENT_ID=$KEYCLOAK_CLIENT_ID
      - KEYCLOAK_CLIENT_SECRET=$KEYCLOAK_CLIENT_SECRET
      - DISPATCH_ALL_AGENTS=$DISPATCH_ALL_AGENTS

  mongo:
    image: mongo:4.4.17-focal
    deploy:
      restart_policy:
        condition: any
      mode: replicated
      replicas: 1
    environment:
      MONGO_INITDB_ROOT_USERNAME: $MONGO_USER
      MONGO_INITDB_ROOT_PASSWORD: $MONGO_PASSWORD
    networks:
      - mongo
    # ports:
    #   - 27017:27017
    volumes:
      - mongo_data:/data/db

  # This service is used to initialize the Synapse homeserver configuration.
  # Remove it after the initial setup is done.
  synapse-init:
    image: python:3.11
    volumes:
      - synapse_data:/data
    working_dir: /data
    entrypoint: /bin/bash
    command: -c "tail -f /dev/null"
    # uncomment this after creating the initial homeserver.yaml
    # command: >
    #   -c "
    #   pip install matrix-synapse &&
    #   python -m synapse.app.homeserver
    #     --generate-keys
    #     --config-path /data/homeserver.yaml
    #     --keys-directory /data
    #     --server-name \${STACK_NAME}-synapse.\${DOMAIN}
    #   "

  synapse:
    image: matrixdotorg/synapse:latest
    volumes:
      - synapse_data:/data
    networks:
      - matrix
      - traefik_default
    environment:
      - SYNAPSE_SERVER_NAME=${STACK_NAME}-synapse.${DOMAIN}
      - SYNAPSE_REPORT_STATS=yes
    depends_on:
      - postgres
    # ports:
    #   - 8008:8008
    deploy:
      mode: replicated
      replicas: 1
      update_config:
        parallelism: 1
        delay: 10s
      restart_policy:
        condition: on-failure
      labels:
        - 'traefik.enable=true'
        - 'traefik.port=8008'
        - 'traefik.docker.network=traefik_default'
        - 'traefik.http.routers.${STACK_NAME}-synapse.rule=Host(`${STACK_NAME}-synapse.${DOMAIN}`)'
        - 'traefik.http.services.${STACK_NAME}-synapse.loadbalancer.server.port=8008'
        - 'traefik.http.services.${STACK_NAME}-synapse.loadbalancer.server.scheme=http'

  postgres:
    image: postgres:14
    container_name: matrix-db
    # ports:
    #   - 5432:5432
    restart: unless-stopped
    networks:
      - matrix
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=$POSTGRES_DB
      - POSTGRES_USER=$POSTGRES_USER
      - POSTGRES_PASSWORD=$POSTGRES_PASSWORD
      - POSTGRES_INITDB_ARGS= --encoding='UTF8' --lc-collate='C' --lc-ctype='C'

  minio:
    image: minio/minio:RELEASE.2022-09-25T15-44-53Z
    # ports:
    #   - 9000:9000
    deploy:
      mode: replicated
      replicas: 1
      update_config:
        parallelism: 1
        delay: 10s
      restart_policy:
        condition: on-failure
      labels:
        - 'traefik.enable=true'
        - 'traefik.port=9000'
        - 'traefik.docker.network=traefik_default'
        - 'traefik.http.routers.${STACK_NAME}-minio.rule=Host(`${STACK_NAME}-minio.${DOMAIN}`)'
        - 'traefik.http.services.${STACK_NAME}-minio.loadbalancer.server.port=9000'
        - 'traefik.http.services.${STACK_NAME}-minio.loadbalancer.server.scheme=http'
    command: server /data --console-address ":9001"
    volumes:
      - minio_data:/data
    networks:
      - traefik_default
    environment:
      MINIO_ROOT_USER: $S3_ACCESS_KEY
      MINIO_ROOT_PASSWORD: $S3_SECRET_KEY
      MINIO_SERVER_URL: https://${STACK_NAME}-minio.${DOMAIN}

volumes:
  ui_data:
  postgres_data:
  synapse_data:
  minio_data:
  mongo_data:

networks:
  matrix:
  mongo:
  traefik_default:
    external: true
```

…other docs will folllow
