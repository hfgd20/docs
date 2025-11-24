# Matrix Synapse

## Einführung

Matrix Synapse ist die Referenzimplementierung eines Matrix-Homeservers und dient in unserem System als Backend für die gesamte Chat-Funktionalität. Es bietet eine sichere, skalierbare Messaging-Infrastruktur, die nahtlos in die hfg.design 2.0 Plattform integriert ist.

### Hauptmerkmale

- **Dezentrale Architektur**: Kein Single Point of Failure durch verteiltes Homeserver-Netzwerk
- **Ende-zu-Ende-Verschlüsselung**: Vollständige E2E-Verschlüsselung für sichere Kommunikation
- **Echtzeit-Synchronisation**: Sofortige Nachrichtenzustellung und Synchronisation auf allen Geräten
- **Rich Media Unterstützung**: Dateifreigabe, Sprachnachrichten, Bilder und Multimedia-Inhalte
- **Persistenter Verlauf**: Nachrichten werden gespeichert und sind durchsuchbar
- **Raum-Management**: Flexible Verwaltung von Chat-Räumen und Gruppendiskussionen

### Rolle in unserem System

Matrix Synapse fungiert als spezialisiertes Messaging-Backend für hfg.design 2.0:

- **Chat-Backend**: Verwaltet alle Nachrichten und Medieninhalte aus unserer Chat-Funktion
- **Space-Integration**: Unterstützt die Chat-Komponente in allen Space-Typen der [UI](ui)
- **Stream-Kommentare**: Ermöglicht Live-Kommentare auf [LiveKit](livekit)-Folien, die sowohl auf Folien als auch im Chat sichtbar sind
- **Schlüsselverwaltung**: Standardmäßig synchronisieren wir Benutzer-Schlüssel über unsere [API](api) für bessere UX
- **Authentifizierung**: Integration mit [Keycloak](keycloak) für einheitliche Benutzerverwaltung
- **Media-Storage**: Speichert Chat-Medien direkt oder verweist auf [MinIO](minio) für größere Dateien

### E2E-Verschlüsselung

Unsere [UI](ui) unterstützt volle Ende-zu-Ende-Verschlüsselung. Aktuell synchronisieren wir standardmäßig die Benutzer-Schlüssel über unsere [API](api), um die Benutzererfahrung zu verbessern. Für die Zukunft ist geplant, den Nutzern die vollständige Kontrolle über ihre Schlüsselverwaltung zu überlassen, um echte E2E-Verschlüsselung ohne Kompromisse zu ermöglichen.

Alle Chat-Daten werden ausschließlich über Matrix Synapse verwaltet, während andere Systemdaten über die [API](api) und [MongoDB](mongodb) gespeichert werden.
