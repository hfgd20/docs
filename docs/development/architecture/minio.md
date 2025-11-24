# MinIO

## Einführung

MinIO dient in unserem System als S3-kompatibles Object Storage für alle Mediendateien und statischen Assets. Es speichert primär Screenshots von Vorlesungsfolien, die von unseren [AI-Agents](ai) automatisch erfasst werden, sowie Space- und User-Avatare.

### Hauptmerkmale

- **S3-Kompatibilität**: Vollständige Kompatibilität mit Amazon S3 APIs für einfache Integration
- **Hohe Performance**: Optimiert für schnelle Uploads und Downloads von Mediendateien
- **Skalierbare Speicherung**: Wächst mit den Anforderungen unserer Plattform mit
- **Sichere Zugriffskontrolle**: Flexible Berechtigungen je nach Anwendungsfall
- **Direktlink-Unterstützung**: Ermöglicht sowohl öffentliche als auch beschränkte Dateizugriffe

### Rolle in unserem System

MinIO fungiert als zentraler Medienspeicher für hfg.design 2.0:

- **Slide-Screenshots**: Speichert automatisch erfasste Screenshots von [LiveKit](livekit)-Übertragungen durch [AI-Agents](ai)
- **Avatar-Speicher**: Verwaltet Space- und User-Avatare für die [UI](ui)
- **Zugriffskontrolle**: Objekte sind je nach Use Case zugriffslimitiert oder über Direktlinks frei zugänglich
- **API-Integration**: Metadaten-Referenzen werden über die [API](api) in der [MongoDB](mongodb) gespeichert
- **Slide-Metadaten**: Screenshots werden mit Zeitstempel, Stream-ID und Space-ID verknüpft
- **AI-Datenfluss**: [AI-Agents](ai) laden erkannte Folien-Screenshots direkt hoch

### Sicherheit & Zugriff

- **Beschränkte Bucket-Zugriffe**: Kein öffentlicher Zugriff auf gesamte Buckets
- **Flexible Berechtigung**: Je nach Use Case sind Objekte zugriffslimitiert oder frei einsehbar
- **Keycloak-Integration**: Authentifizierung über [Keycloak](keycloak) für sichere Datei-Uploads
- **Direkte Verlinkung**: Unterstützung für öffentliche Direktlinks bei freigegebenen Inhalten

### Datenfluss

1. [AI-Agents](ai) erkennen neue Folien in [LiveKit](livekit)-Streams
2. Screenshots werden via `/slide/store` API-Endpunkt in MinIO hochgeladen
3. S3-Metadaten werden in `imageMeta`-Feld der Slide-Dokumente gespeichert:
   - `bucket`, `key`, `location`, `etag`, `size`, `mimetype`
4. Space-Icons werden via `/space/uploadIcon` hochgeladen und später via `/space/updateIcon` verknüpft
5. User-Avatare werden via `/user/uploadAvatar` gespeichert
6. Die [UI](ui) kann Medien über `/slide/getImage`, `/space/getIcon`, `/user/getAvatar` abrufen
7. Automatische Bereinigung ungenutzter Icons via `/space/cleanUnusedIcons`

MinIO bildet damit das Rückgrat für alle Mediendateien in der Plattform und ermöglicht effiziente Speicherung und Abruf von Bildern und Dokumenten.
