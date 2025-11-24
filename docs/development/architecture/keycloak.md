# Keycloak

## Einführung

Keycloak ist unser zentrales Identity und Access Management System für die gesamte hfg.design 2.0 Plattform. Es verwaltet alle Benutzer, authentifiziert sowohl Frontend-Nutzer als auch Backend-Services und stellt eine einheitliche Autorisierungsschicht für das gesamte System bereit.

### Hauptmerkmale

- **Single Sign-On (SSO)**: Einmalige Anmeldung für alle Systemkomponenten
- **Multi-Client-Authentifizierung**: Unterschiedliche Authentifizierungsmethoden für verschiedene Service-Typen
- **Benutzer-Discovery**: Integration für Benutzerfindung und Einladungsfunktionen
- **Standard-Protokolle**: OpenID Connect, OAuth 2.0 und PKCE-Unterstützung
- **Rollenbasierte Zugriffskontrolle**: Feingliedrige Berechtigungen für verschiedene Benutzergruppen
- **Client-Authentifizierung**: Sichere Authentifizierung für Backend-Services

### Rolle in unserem System

Keycloak bildet das Sicherheitsfundament für alle Systemkomponenten:

- **Zentrale Benutzerverwaltung**: Alle Nutzer des Systems werden über Keycloak verwaltet
- **UI-Authentifizierung**: Die [UI](ui) nutzt PKCE-Authentifizierung über Keycloak für Endbenutzer
- **API-Integration**: Die [API](api) authentifiziert sowohl Benutzer als auch Backend-Services über Keycloak
- **Service-Authentifizierung**: [AI-Agents](ai) und andere Backend-Services nutzen Client-Authentifizierung
- **Stream-Autorisierung**: [LiveKit](livekit)-Streams werden über die [API](api) mit Keycloak-Token autorisiert
- **User-Discovery**: Ermöglicht Benutzerfindung beim Einladen in Spaces oder Channels

### Authentifizierungsarten

Unser System unterscheidet zwischen verschiedenen Authentifizierungstypen:

- **PKCE-Authentifizierung**: Für Endbenutzer über die [UI](ui)
- **Client-Authentifizierung**: Für Backend-Services wie [AI-Agents](ai)
- **Route-spezifische Kontrolle**: Die [API](api) unterscheidet je Route zwischen den erlaubten Authentifizierungsarten

### Integration im System

1. **UI-Integration**: Seamless SSO für alle Benutzerinteraktionen
2. **API-Schutz**: Alle [API](api)-Routen sind über Keycloak-Token geschützt
3. **Service-Koordination**: Automatisierte Authentifizierung für [AI-Agents](ai) und interne Services
4. **Chat-Integration**: Benutzer-Mapping für [Matrix Synapse](synapse) über Keycloak-Identitäten
5. **Media-Zugriff**: Autorisierung für [MinIO](minio)-Uploads und -Downloads

Keycloak stellt sicher, dass alle Systemkomponenten eine konsistente und sichere Authentifizierung verwenden, während gleichzeitig die Flexibilität für verschiedene Service-Arten erhalten bleibt.
