# Backend Services

## Überblick

Die hfg.design 2.0 Plattform basiert auf einer Microservice-Architektur mit spezialisierten Backend-Services. Jeder Service erfüllt eine klar definierte Aufgabe und arbeitet über die [API](API) mit den anderen Komponenten zusammen.

### Service-Übersicht

- **[Keycloak](#keycloak)**: Identity und Access Management
- **[MongoDB](#mongodb)**: Zentrale Datenbank
- **[Matrix Synapse](#matrix-synapse)**: Chat-Backend
- **[LiveKit](#livekit)**: WebRTC-Streaming-Infrastruktur
- **[MinIO](#minio)**: Object Storage für Medien

---

## Keycloak

### Einführung

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
- **API-Integration**: Die [API](API) authentifiziert sowohl Benutzer als auch Backend-Services über Keycloak
- **Service-Authentifizierung**: [AI-Agents](AI-Agents) und andere Backend-Services nutzen Client-Authentifizierung
- **Stream-Autorisierung**: [LiveKit](#livekit)-Streams werden über die [API](API) mit Keycloak-Token autorisiert
- **User-Discovery**: Ermöglicht Benutzerfindung beim Einladen in Spaces oder Channels

### Authentifizierungsarten

Unser System unterscheidet zwischen verschiedenen Authentifizierungstypen:

- **PKCE-Authentifizierung**: Für Endbenutzer über die [UI](ui)
- **Client-Authentifizierung**: Für Backend-Services wie [AI-Agents](AI-Agents)
- **Route-spezifische Kontrolle**: Die [API](API) unterscheidet je Route zwischen den erlaubten Authentifizierungsarten

### Integration im System

1. **UI-Integration**: Seamless SSO für alle Benutzerinteraktionen
2. **API-Schutz**: Alle [API](API)-Routen sind über Keycloak-Token geschützt
3. **Service-Koordination**: Automatisierte Authentifizierung für [AI-Agents](AI-Agents) und interne Services
4. **Chat-Integration**: Benutzer-Mapping für [Matrix Synapse](#matrix-synapse) über Keycloak-Identitäten
5. **Media-Zugriff**: Autorisierung für [MinIO](#minio)-Uploads und -Downloads

Keycloak stellt sicher, dass alle Systemkomponenten eine konsistente und sichere Authentifizierung verwenden, während gleichzeitig die Flexibilität für verschiedene Service-Arten erhalten bleibt.

---

## MongoDB

### Einführung

MongoDB ist die zentrale Datenbank für unsere [API](API) und speichert alle persistenten Daten des hfg.design 2.0 Systems. Als dokumentenorientierte NoSQL-Datenbank bietet sie die nötige Flexibilität für die vielfältigen Datenstrukturen unserer Lehr- und Lernplattform.

### Hauptmerkmale

- **Dokumentendatenbank**: Flexible JSON-ähnliche BSON-Dokumente für komplexe Datenstrukturen
- **Hohe Performance**: Optimiert für die Lese- und Schreiboperationen unserer API
- **Skalierbare Architektur**: Wächst mit den Anforderungen der Plattform mit
- **Flexible Schemas**: Ermöglicht schnelle Iteration und Weiterentwicklung der Datenmodelle
- **Rich Queries**: Mächtige Abfragefunktionen für komplexe Suchanfragen
- **ACID-Transaktionen**: Gewährleistet Datenkonsistenz bei kritischen Operationen

### Rolle in unserem System

MongoDB fungiert als zentrale Datenbank für alle Anwendungsdaten:

- **Space-Daten**: Speichert alle angelegten Spaces, Channels, Kurse und Projektgruppen
- **Benutzerdaten**: Verwaltet Nutzerprofile, Präferenzen, ausgewählte Themes und gepinnte Spaces
- **Stream-Metadaten**: Speichert markierte Texte auf Folien in Vorlesungsstreams und -aufzeichnungen
- **AI-Ergebnisse**: Verwaltet Daten von [AI-Agents](AI-Agents) wie erkannte Slides, OCR-Texte und YOLO-Objekterkennung
- **Slide-Metadaten**: Speichert Informationen zu Screenshots wie Uhrzeit, Stream-ID, Space-ID
- **Media-Referenzen**: Verwaltet Verweise auf in [MinIO](#minio) gespeicherte Screenshots und Avatare

### Datentypen & Struktur

In MongoDB werden folgende Hauptdatentypen gespeichert:

**Spaces:**

- `type` - COURSE, CHANNEL, DM_DIRECT, DM_GROUP, PROJECT_GROUP, HYPERLINK, FOLDER
- `owner`, `users[]` - Besitzer und Teilnehmer-Liste
- `capabilities[]` - CHAT, STREAM, VOD, VIDEO, FILES, SCHEDULE, INFORMATION, SUBMISSION
- `name`, `description`, `module`, `semester` - Space-Grundinformationen
- `lecturers[]` - Array von Dozierenden-IDs
- `lastActiveAt` - Aktivitätszeitstempel
- `public`, `archived` - Sichtbarkeits- und Archivstatus
- `live`, `allowAllParticipantsToStream` - Live-Streaming-Konfiguration
- `currentSlide` - Referenz zur aktuell angezeigten Folie
- `iconMeta` - [MinIO](#minio)-Metadaten für Space-Icon
- `disableStreamInteractions`, `disableStreamTimeline` - Stream-Konfiguration
- `hyperlinkUrl`, `hyperlinkIcon` - Für HYPERLINK-Spaces

**Slides:**

- `space` - Referenz zur Space-ID
- `startTs` - Zeitstempel des Slide-Beginns
- `streamId` - [LiveKit](#livekit)-Stream-Identifikator
- `hasLinks` - Boolean für erkannte Links
- `imageMeta` - [MinIO](#minio)-Metadaten für Screenshot
- `ocrMeta` - Eingebettete OCR-Ergebnisse (siehe unten)
- `yoloMeta` - Eingebettete YOLO-Objekterkennung

**Highlights:**

- `slide` - Referenz zur Slide-ID
- `author` - Benutzer-ID des Erstellers
- `data` - Flexible Highlight-Daten (OCR-Textindizes, etc.)

**OCR-Metadaten (eingebettet in Slides):**

- `slide`, `space` - Referenzen zu Slide und Space
- `slideTimestamp`, `stream` - Zeitstempel und Stream-ID
- `framesize` - Frame-Dimensionen (width, height)
- `result[]` - Array von erkannten Textbereichen mit:
  - `text`, `confidence` - Erkannter Text und Verlässlichkeit
  - `pos`, `norm_pos` - Pixel- und normalisierte Positionen
  - `pixel_bbox`, `normalized_bbox` - Bounding-Box-Koordinaten

**User & Profile:**

- Basis-Identitäten aus [Keycloak](#keycloak) erweitert um:
- `permissions` - BigInt für Berechtigungsflags
- `language` - Spracheinstellung
- `avatar` - [MinIO](#minio)-Metadaten für Avatar
- `matrixUserId` - Matrix-Integration für Chat
- `displayName`, `pronouns`, `pronounciation` - Anzeige-Präferenzen
- `skills[]`, `badges[]` - Fähigkeiten und Auszeichnungen
- `location`, `portfolioUrl`, `aboutMe` - Profil-Details
- `spokenLanguages`, `practicalSemester`, `engagement` - Studium-Details
- Slack-Integration: `slackId`, `color`, `tz`, `statusText`, etc.

### Integration mit anderen Services

MongoDB arbeitet eng mit anderen Systemkomponenten zusammen:

1. **[API](API)-Integration**: Direkte Anbindung für alle Datenbankoperationen
2. **[MinIO](#minio)-Referenzen**: Speichert Pfade und Metadaten zu Mediendateien
3. **[Keycloak](#keycloak)-Ergänzung**: Erweitert Keycloak-Identitäten um anwendungsspezifische Daten
4. **[LiveKit](#livekit)-Metadaten**: Verwaltet Session-Informationen und Teilnehmerdaten
5. **[AI-Agents](AI-Agents)-Daten**: Zentrale Speicherung aller AI-generierten Inhalte

Die flexible Dokumentenstruktur ermöglicht es, Datenmodelle schnell anzupassen und neue Features ohne Schema-Migrationen zu implementieren.

---

## Matrix Synapse

### Einführung

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
- **Stream-Kommentare**: Ermöglicht Live-Kommentare auf [LiveKit](#livekit)-Folien, die sowohl auf Folien als auch im Chat sichtbar sind
- **Schlüsselverwaltung**: Standardmäßig synchronisieren wir Benutzer-Schlüssel über unsere [API](API) für bessere UX
- **Authentifizierung**: Integration mit [Keycloak](#keycloak) für einheitliche Benutzerverwaltung
- **Media-Storage**: Speichert Chat-Medien direkt oder verweist auf [MinIO](#minio) für größere Dateien

### E2E-Verschlüsselung

Unsere [UI](ui) unterstützt volle Ende-zu-Ende-Verschlüsselung. Aktuell synchronisieren wir standardmäßig die Benutzer-Schlüssel über unsere [API](API), um die Benutzererfahrung zu verbessern. Für die Zukunft ist geplant, den Nutzern die vollständige Kontrolle über ihre Schlüsselverwaltung zu überlassen, um echte E2E-Verschlüsselung ohne Kompromisse zu ermöglichen.

Alle Chat-Daten werden ausschließlich über Matrix Synapse verwaltet, während andere Systemdaten über die [API](API) und [MongoDB](#mongodb) gespeichert werden.

---

## LiveKit

### Einführung

LiveKit ist unsere WebRTC-Infrastruktur-Plattform für Vorlesungsstreams und Echtzeit-Bildschirmübertragung. Es ermöglicht Dozierenden, ihre Präsentationen live an Studierende zu übertragen und dabei interaktive Funktionen wie Kommentare und Textmarkierungen zu nutzen.

### Hauptmerkmale

- **Bildschirmfreigabe**: Optimiert für die Übertragung von Präsentationsfolien
- **Skalierbare Infrastruktur**: Unterstützt große Vorlesungen mit vielen gleichzeitigen Teilnehmern
- **WebRTC-basiert**: Niedrige Latenz für interaktive Live-Streams
- **Datenkanäle**: Echtzeit-Kommunikation zwischen Clients und AI-Agents
- **Flexible Authentifizierung**: Integration mit unserem Berechtigungssystem
- **Agent-Integration**: Unterstützt automatisierte AI-Teilnehmer

### Rolle in unserem System

LiveKit dient speziell für Vorlesungsstreams und interaktive Lehrveranstaltungen:

- **Vorlesungsstreams**: Dozierende übertragen ihre Folien live über unsere [UI](ui) an alle Zuschauer
- **Interaktive Tools**: Zuschauer können direkt auf den Folien Kommentare erstellen und Text markieren
- **Chat-Integration**: Kommentare sind über [Matrix Synapse](#matrix-synapse) sowohl auf Folien als auch im Chat sichtbar
- **API-Markierungen**: Markierte Texte werden über die [API](API) gespeichert und sind persistent verfügbar
- **Authentifizierung**: Streams werden über die [API](API) autorisiert und authentifiziert für kontrollierten Zugang
- **AI-Agent Integration**: [AI-Agents](AI-Agents) treten automatisch Räumen bei zur Stream-Analyse und -verarbeitung
- **WebRTC-Datenkanäle**: Koordination zwischen AI-Agents über Echtzeit-Datenübertragung

### Stream-Features

- **Slide-Erkennung**: Automatische Erkennung von Folienwechseln durch [AI-Agents](AI-Agents)
- **Screenshot-Aufnahme**: Automatische Speicherung von Folien-Screenshots in [MinIO](#minio)
- **Real-time Annotation**: Live-Kommentare und Markierungen während der Übertragung
- **Metadaten-Tracking**: Erfassung von Zeitstempel, Stream-ID und Space-Informationen über die [API](API)

### Geplante Funktionen

Zukünftig soll LiveKit auch für Huddle-ähnliche Features (vergleichbar mit Slack) verwendet werden. Aktuell ist jedoch nur Bildschirmübertragung implementiert - direkte Video-/Voice-Calls über die Anwendung sind noch nicht möglich.

Die Autorisierung erfolgt zentral über [Keycloak](#keycloak), während alle Stream-Metadaten und Teilnehmerdaten in der [MongoDB](#mongodb) gespeichert werden.

---

## MinIO

### Einführung

MinIO dient in unserem System als S3-kompatibles Object Storage für alle Mediendateien und statischen Assets. Es speichert primär Screenshots von Vorlesungsfolien, die von unseren [AI-Agents](AI-Agents) automatisch erfasst werden, sowie Space- und User-Avatare.

### Hauptmerkmale

- **S3-Kompatibilität**: Vollständige Kompatibilität mit Amazon S3 APIs für einfache Integration
- **Hohe Performance**: Optimiert für schnelle Uploads und Downloads von Mediendateien
- **Skalierbare Speicherung**: Wächst mit den Anforderungen unserer Plattform mit
- **Sichere Zugriffskontrolle**: Flexible Berechtigungen je nach Anwendungsfall
- **Direktlink-Unterstützung**: Ermöglicht sowohl öffentliche als auch beschränkte Dateizugriffe

### Rolle in unserem System

MinIO fungiert als zentraler Medienspeicher für hfg.design 2.0:

- **Slide-Screenshots**: Speichert automatisch erfasste Screenshots von [LiveKit](#livekit)-Übertragungen durch [AI-Agents](AI-Agents)
- **Avatar-Speicher**: Verwaltet Space- und User-Avatare für die [UI](ui)
- **Zugriffskontrolle**: Objekte sind je nach Use Case zugriffslimitiert oder über Direktlinks frei zugänglich
- **API-Integration**: Metadaten-Referenzen werden über die [API](API) in der [MongoDB](#mongodb) gespeichert
- **Slide-Metadaten**: Screenshots werden mit Zeitstempel, Stream-ID und Space-ID verknüpft
- **AI-Datenfluss**: [AI-Agents](AI-Agents) laden erkannte Folien-Screenshots direkt hoch

### Sicherheit & Zugriff

- **Beschränkte Bucket-Zugriffe**: Kein öffentlicher Zugriff auf gesamte Buckets
- **Flexible Berechtigung**: Je nach Use Case sind Objekte zugriffslimitiert oder frei einsehbar
- **Keycloak-Integration**: Authentifizierung über [Keycloak](#keycloak) für sichere Datei-Uploads
- **Direkte Verlinkung**: Unterstützung für öffentliche Direktlinks bei freigegebenen Inhalten

### Datenfluss

1. [AI-Agents](AI-Agents) erkennen neue Folien in [LiveKit](#livekit)-Streams
2. Screenshots werden via `/slide/store` API-Endpunkt in MinIO hochgeladen
3. S3-Metadaten werden in `imageMeta`-Feld der Slide-Dokumente gespeichert:
   - `bucket`, `key`, `location`, `etag`, `size`, `mimetype`
4. Space-Icons werden via `/space/uploadIcon` hochgeladen und später via `/space/updateIcon` verknüpft
5. User-Avatare werden via `/user/uploadAvatar` gespeichert
6. Die [UI](ui) kann Medien über `/slide/getImage`, `/space/getIcon`, `/user/getAvatar` abrufen
7. Automatische Bereinigung ungenutzter Icons via `/space/cleanUnusedIcons`

MinIO bildet damit das Rückgrat für alle Mediendateien in der Plattform und ermöglicht effiziente Speicherung und Abruf von Bildern und Dokumenten.
