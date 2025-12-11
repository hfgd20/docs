# AI-Agents

## Einführung

Unser AI-Agent-System besteht aus mehreren spezialisierten Agenten, die automatisch [LiveKit](backend-services#livekit)-Streams analysieren und verarbeiten. Jeder Agent übernimmt eine spezifische Rolle bei der Auswertung von Vorlesungsstreams und trägt zur intelligenten Erfassung und Verarbeitung von Lehrinhalten bei.

### Systemarchitektur

Alle AI-Agents sind hauptsächlich an unseren [LiveKit](backend-services#livekit)-Server angebunden und arbeiten koordiniert zusammen:

- **Selbst gehostete Modelle**: Alle AI-Modelle laufen auf unserem eigenen AI-Server mit NVIDIA Tesla-Karte
- **Koordinierte Zusammenarbeit**: Agents kommunizieren über WebRTC-Datenkanäle miteinander
- **API-Integration**: Ergebnisse werden über die [API](API) in [MongoDB](backend-services#mongodb) gespeichert
- **Automatisierte Workflows**: Agents starten und stoppen basierend auf Stream-Aktivität

## AI-Agent-Typen

### Agent-Coordinator

Der zentrale Koordinations-Agent für alle Stream-Räume:

- **Zentrale Steuerung**: Tritt in jeden [LiveKit](backend-services#livekit)-Raum bei und koordiniert andere Agents
- **Agent-Management**: Startet und stoppt andere Agents je nach Konfiguration und Stream-Aktivität
- **Ressourcen-Optimierung**: Verhindert unnötige Ressourcennutzung bei inaktiven Streams
- **Status-Überwachung**: Überwacht die Funktionsfähigkeit aller untergeordneten Agents

### Agent-Slidechange

Spezialisiert auf die Erkennung von Folienwechseln:

- **Bildschirmanalyse**: Empfängt Bildschirmübertragungen in [LiveKit](backend-services#livekit)-Räumen
- **Change Detection**: Erkennt automatisch, wenn Dozierende zur nächsten Folie wechseln
- **Slide-Erstellung**: Erstellt neue Slide-Einträge über die [API](API) in [MongoDB](backend-services#mongodb)
- **Screenshot-Upload**: Lädt automatisch Screenshots nach [MinIO](backend-services#minio) hoch
- **Agent-Benachrichtigung**: Informiert andere Agents über WebRTC-Datenkanäle über neue Folien

### Agent-OCR

Texterkennung auf Vorlesungsfolien:

- **Screenshot-Analyse**: Wertet Screenshots neuer Folien aus
- **Texterkennung**: Extrahiert alle sichtbaren Texte von den Folien
- **API-Integration**: Sendet OCR-Ergebnisse an die [API](API) zur Speicherung in [MongoDB](backend-services#mongodb)
- **Real-time Updates**: Übermittelt Ergebnisse über RTC-Datenkanäle an andere Agents

### Agent-YOLO

Objekterkennung auf Vorlesungsfolien:

- **Objekterkennung**: Analysiert Screenshots und identifiziert Objekte auf Folien
- **YOLO-Algorithmus**: Nutzt You Only Look Once für schnelle Objekterkennung
- **Metadaten-Speicherung**: Speichert erkannte Objekte über die [API](API) in [MongoDB](backend-services#mongodb)
- **Koordination**: Teilt Ergebnisse über RTC-Datenkanäle mit anderen Agents

### Agent-Summarize

LLM-basierte Inhaltszusammenfassung:

- **Content Analysis**: Nutzt Large Language Models zur Analyse von Slide-Inhalten
- **Intelligente Zusammenfassung**: Erstellt prägnante Zusammenfassungen der erkannten Inhalte
- **Kontextuelle Verarbeitung**: Berücksichtigt OCR-Texte und erkannte Objekte
- **Wissensbasis**: Trägt zur Erstellung durchsuchbarer Vorlesungsinhalte bei

### Agent-STT

Speech-to-Text für Audio-Untertitel:

- **Audio-Analyse**: Analysiert die Audiospur von [LiveKit](backend-services#livekit)-Streams
- **Sprache-zu-Text**: Erstellt automatische Untertitel für übertragene Inhalte
- **Real-time Processing**: Live-Untertitel während der Übertragung
- **Barrierefreiheit**: Unterstützt Accessibility für hörbeeinträchtigte Teilnehmer

## Datenfluss & Integration

### Workflow-Koordination

1. **Agent-Coordinator** tritt [LiveKit](backend-services#livekit)-Raum bei und koordiniert andere Agents
2. **Agent-Slidechange** erkennt Folienwechsel und erstellt neuen Slide via `/slide/create`
3. Screenshot wird via `/slide/store` mit Datei-Upload in [MinIO](backend-services#minio) gespeichert
4. **Agent-OCR** analysiert Screenshot und speichert Ergebnisse via `/ocrMeta/store` mit:
   - `slide`, `slideTimestamp`, `space`, `stream`, `framesize`, `meta`
5. **Agent-YOLO** analysiert parallel und speichert via `/yoloMeta/store`
6. **Agent-STT** verarbeitet Audio-Stream für Untertitel
7. **Agent-Summarize** erstellt Zusammenfassungen der erkannten Inhalte
8. Alle Ergebnisse werden in [MongoDB](backend-services#mongodb) gespeichert und via Socket.io an [UI](ui) übertragen

### System-Integration

- **Authentifizierung**: Alle Agents nutzen Client-Authentifizierung über [Keycloak](backend-services#keycloak)
- **Datenspeicherung**: Zentrale Speicherung aller AI-Ergebnisse in [MongoDB](backend-services#mongodb)
- **Media-Storage**: Screenshots und verarbeitete Medien in [MinIO](backend-services#minio)
- **Real-time Sync**: Live-Updates über Socket.io an die [UI](ui)

## Hardware & Hosting

- **Eigene Infrastruktur**: Alle AI-Agents und Modelle werden selbst gehostet
- **NVIDIA Tesla**: Spezialisierte GPU für AI-Workloads
- **Skalierbare Architektur**: Agents können je nach Bedarf gestartet/gestoppt werden
- **Ressourcen-Optimierung**: Intelligente Verteilung der Verarbeitungslast

Das AI-Agent-System ermöglicht es, Vorlesungsstreams automatisch zu analysieren, zu indexieren und durchsuchbar zu machen, wodurch eine intelligente Lehr- und Lernumgebung entsteht.
