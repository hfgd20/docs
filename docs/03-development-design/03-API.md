---
sidebar_position: 0
title: API
hide_title: false
---

# API

## Einführung

Die API ist unsere zentrale Schnittstelle für user-generated content und bildet das Herzstück der Backend-Infrastruktur von hfg.design 2.0. Sie verwaltet alle persistenten Daten des Systems (außer Chat-Nachrichten) und koordiniert die Kommunikation zwischen allen Services der Plattform.

### Hauptmerkmale

- **RESTful Architecture**: Standardisierte HTTP-Schnittstelle für alle Client-Anwendungen
- **Real-time Synchronisation**: Socket.io für Live-Updates an alle verbundenen Clients
- **Umfassendes Datenmanagement**: Verwaltung aller Spaces, Nutzereinstellungen und Metadaten
- **Multi-Service Integration**: Zentrale Koordination aller Backend-Services
- **Authentifizierung & Autorisierung**: Integration mit Keycloak für sichere API-Zugriffe
- **Skalierbare Architektur**: Optimiert für hohe Nutzerzahlen und Datenvolumen

### Rolle in der Architektur

Die API fungiert als zentraler Vermittler und Datenverwaltungsservice:

**Space-Management:**

- Erstellen, Aktualisieren und Verwalten von Spaces mit verschiedenen Typen:
  - COURSE, CHANNEL, DM_DIRECT, DM_GROUP, PROJECT_GROUP, HYPERLINK, FOLDER
- Capability-basierte Konfiguration: CHAT, STREAM, VOD, VIDEO, FILES, SCHEDULE, INFORMATION, SUBMISSION
- Space-Icons und Metadaten-Verwaltung über [MinIO](backend-services#minio)
- Benutzereinladungen und Ownership-Verwaltung
- Live-Streaming-Konfiguration und Berechtigungskontrolle

**Stream & Slide-Verwaltung:**

- Slide-Erstellung durch [AI-Agents](AI-Agents) mit `client credentials` Authentifizierung
- Screenshot-Upload und -Speicherung in [MinIO](backend-services#minio) mit Metadaten-Referenzen
- Live-Stream-Token-Generierung für [LiveKit](backend-services#livekit) Integration
- Aktuelle Slide-Metadaten für laufende Streams

**AI-Datenintegration:**

- OCR-Metadaten-Speicherung von erkannten Texten auf Folien
- YOLO-Objekterkennung-Ergebnisse für Slide-Inhalte
- AI-Agent-Authentifizierung über `client credentials` für automatisierte Uploads

**User-Features:**

- Highlight-System für markierte Textstellen auf Folien mit Indizes-Arrays
- User-Preferences-Synchronisation für UI-Einstellungen
- Avatar-Upload und -Verwaltung
- User-Discovery für Space-Einladungen

**Authentifizierung & Zugriff:**

- PKCE-Token für [UI](ui)-Benutzer (Endnutzer-Interaktionen)
- Client-Credentials für [AI-Agents](AI-Agents) und Backend-Services
- [Keycloak](backend-services#keycloak)-Integration für alle Authentifizierungsarten
- Routenspezifische Authentifizierungskontrolle

Alle Daten werden entweder direkt in der [MongoDB](backend-services#mongodb) oder als Medien-Referenzen in [MinIO](backend-services#minio) gespeichert, während die API als zentrale Koordinationsstelle für das gesamte System fungiert.
