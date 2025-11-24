# MongoDB

## Einführung

MongoDB ist die zentrale Datenbank für unsere [API](api) und speichert alle persistenten Daten des hfg.design 2.0 Systems. Als dokumentenorientierte NoSQL-Datenbank bietet sie die nötige Flexibilität für die vielfältigen Datenstrukturen unserer Lehr- und Lernplattform.

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
- **AI-Ergebnisse**: Verwaltet Daten von [AI-Agents](ai) wie erkannte Slides, OCR-Texte und YOLO-Objekterkennung
- **Slide-Metadaten**: Speichert Informationen zu Screenshots wie Uhrzeit, Stream-ID, Space-ID
- **Media-Referenzen**: Verwaltet Verweise auf in [MinIO](minio) gespeicherte Screenshots und Avatare

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
- `iconMeta` - [MinIO](minio)-Metadaten für Space-Icon
- `disableStreamInteractions`, `disableStreamTimeline` - Stream-Konfiguration
- `hyperlinkUrl`, `hyperlinkIcon` - Für HYPERLINK-Spaces

**Slides:**

- `space` - Referenz zur Space-ID
- `startTs` - Zeitstempel des Slide-Beginns
- `streamId` - [LiveKit](livekit)-Stream-Identifikator
- `hasLinks` - Boolean für erkannte Links
- `imageMeta` - [MinIO](minio)-Metadaten für Screenshot
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

- Basis-Identitäten aus [Keycloak](keycloak) erweitert um:
- `permissions` - BigInt für Berechtigungsflags
- `language` - Spracheinstellung
- `avatar` - [MinIO](minio)-Metadaten für Avatar
- `matrixUserId` - Matrix-Integration für Chat
- `displayName`, `pronouns`, `pronounciation` - Anzeige-Präferenzen
- `skills[]`, `badges[]` - Fähigkeiten und Auszeichnungen
- `location`, `portfolioUrl`, `aboutMe` - Profil-Details
- `spokenLanguages`, `practicalSemester`, `engagement` - Studium-Details
- Slack-Integration: `slackId`, `color`, `tz`, `statusText`, etc.

### Integration mit anderen Services

MongoDB arbeitet eng mit anderen Systemkomponenten zusammen:

1. **[API](api)-Integration**: Direkte Anbindung für alle Datenbankoperationen
2. **[MinIO](minio)-Referenzen**: Speichert Pfade und Metadaten zu Mediendateien
3. **[Keycloak](keycloak)-Ergänzung**: Erweitert Keycloak-Identitäten um anwendungsspezifische Daten
4. **[LiveKit](livekit)-Metadaten**: Verwaltet Session-Informationen und Teilnehmerdaten
5. **[AI-Agents](ai)-Daten**: Zentrale Speicherung aller AI-generierten Inhalte

Die flexible Dokumentenstruktur ermöglicht es, Datenmodelle schnell anzupassen und neue Features ohne Schema-Migrationen zu implementieren.
