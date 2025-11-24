# LiveKit

## Einführung

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
- **Chat-Integration**: Kommentare sind über [Matrix Synapse](synapse) sowohl auf Folien als auch im Chat sichtbar
- **API-Markierungen**: Markierte Texte werden über die [API](api) gespeichert und sind persistent verfügbar
- **Authentifizierung**: Streams werden über die [API](api) autorisiert und authentifiziert für kontrollierten Zugang
- **AI-Agent Integration**: [AI-Agents](ai) treten automatisch Räumen bei zur Stream-Analyse und -verarbeitung
- **WebRTC-Datenkanäle**: Koordination zwischen AI-Agents über Echtzeit-Datenübertragung

### Stream-Features

- **Slide-Erkennung**: Automatische Erkennung von Folienwechseln durch [AI-Agents](ai)
- **Screenshot-Aufnahme**: Automatische Speicherung von Folien-Screenshots in [MinIO](minio)
- **Real-time Annotation**: Live-Kommentare und Markierungen während der Übertragung
- **Metadaten-Tracking**: Erfassung von Zeitstempel, Stream-ID und Space-Informationen über die [API](api)

### Geplante Funktionen

Zukünftig soll LiveKit auch für Huddle-ähnliche Features (vergleichbar mit Slack) verwendet werden. Aktuell ist jedoch nur Bildschirmübertragung implementiert - direkte Video-/Voice-Calls über die Anwendung sind noch nicht möglich.

Die Autorisierung erfolgt zentral über [Keycloak](keycloak), während alle Stream-Metadaten und Teilnehmerdaten in der [MongoDB](mongodb) gespeichert werden.
