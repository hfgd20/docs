---
title: 2. Systemaufbau
hide_title: false
---

## 2.1 Überblick

Die Plattform hfg.design 2.0 basiert auf **Spaces** als zentrale Arbeitsbereiche. Jeder Space bildet einen eigenständigen Kontext für Kommunikation, Zusammenarbeit und Projektorganisation. Innerhalb der Spaces stehen fest integrierte Funktionen wie Chat, Streams, Dateien, Zeitplanung und Abgaben zur Verfügung. Nutzer:innen können alle relevanten Informationen und Aufgaben eines Kurses, Projektes oder einer Gruppe zentral verwalten.

Die Plattform ist so konzipiert, dass sie für Studierende und Lehrende gleichermaßen nutzbar ist. Alle Spaces folgen einem einheitlichen Layout und Interaktionsprinzip, sodass neue Nutzer:innen schnell produktiv arbeiten können.

## 2.2 Navigation & Benutzeroberfläche

### 2.2.1 Hauptnavigation (Sidebar)

Die Sidebar ist die zentrale Navigationsleiste. Sie enthält die Hauptbereiche Suche, Spaces und User Menu. Nutzer:innen können die Sidebar einklappen, sodass nur die Icons der Hauptfunktionen sichtbar bleiben. Im ausgeklappten Zustand erscheinen zusätzliche Informationen, darunter Filteroptionen für Spaces und Detailinformationen zum eigenen Profil.

### 2.2.2 Suche

Die Suche ermöglicht das Auffinden von Spaces, Nachrichten, Archiv-Projekten (HfG Archiv, archiv.hfg.design), Personen, Bildern und Dateien aus Nachrichten. Derzeit ist sie global ausgelegt. Eine gezielte Suche innerhalb einzelner Spaces ist geplant, aber noch nicht implementiert.

### 2.2.3 User Menu

Das User Menu bündelt alle Einstellungen und Optionen des eigenen Accounts.

- **Profil:** Zeigt das eigene Profil aus Sicht anderer Nutzer:innen.
- **Einstellungen:** Anpassung des Profils, Status, Zeitzone und „Über mich“-Sektion.
- **Menü ein-/ausklappen:** Minimiert oder maximiert die Sidebar.
- **Abmelden:** Leitet zur Startseite.
- **Mikrofon/Lautsprecher:** Bezieht sich auf den Voice Chat, aktuell noch nicht implementiert.

Feedback- und Fehler-Meldungen wurden nur zu Testzwecken eingebaut.

## 2.3 Spaces: Struktur & Typen

### 2.3.1 Was ist ein Space?

Ein Space ist ein eigenständiger Arbeitsbereich, der Kommunikation, Zusammenarbeit und Organisation von Projekten, Kursen oder Gruppen bündelt. Innerhalb eines Spaces können Nutzer:innen Nachrichten austauschen, Dateien ablegen, Streams verfolgen, Aufgaben planen und Abgaben einreichen.

### 2.3.2 Space-Typen

Die Plattform unterscheidet:

- **Kurse:** Automatisch erstellte Spaces für Vorlesungen, mit Dozent:in und Abgabefunktion.
- **Channels:** Allgemeine Spaces für Gruppen, Projekte oder Community-Zwecke.
- **Direktnachrichten (DM):** Privater Austausch zwischen zwei Personen.
- **Gruppen-DMs:** Privater Austausch zwischen mehreren Personen.
- **Projektgruppen:** Entstehen durch Verknüpfung zu einem Kurs oder werden direkt erstellt.
- **Hyperlinks:** Verlinkung zu externen Ressourcen.
- **Folder:** Zusammengeführte Spaces per Drag-and-Drop, auf- und zuklappbar.

### 2.3.3 Berechtigungen & Sichtbarkeit

Jede:r Nutzer:in kann Spaces erstellen. Studierende können keine Kurse, aber Tutorien erstellen, die wie Kurse funktionieren. Lehrende können Kurse, Channels und Projektgruppen erstellen. Ein Space kann **offen** oder **geschlossen** sein.

## 2.4 Space-Verwaltung

### 2.4.1 Space erstellen

Die Erstellung erfolgt in drei Schritten:

1. **Vorlage auswählen:** Direktnachricht, Gruppenchat, Projektgruppe, Channel, Tutorium/Kurs oder Beitritt über Link/Namen eines bestehenden Spaces.
2. **Space-Funktionen auswählen:** Nachrichten, Stream, Aufzeichnungen, Videos, Dateien, Zeitplan, Informationen, Abgabe (nur Dozenten). Vorlagen enthalten bereits vorausgewählte Funktionen.
3. **Metadaten festlegen:** Name, Beschreibung, Bild, Sichtbarkeit.

### 2.4.2 Filter, Ansicht & Sortierung

Spaces lassen sich nach Typ filtern. **Ansicht ändern** ist noch nicht implementiert.

Sortierung: automatisch nach Aktivität oder alphabetisch. Spaces mit Livestreams stehen oben, danach angepinnte Spaces, dann der Rest.

### 2.4.3 Weitere Optionen

Über das Kontextmenü eines Spaces können Aktionen wie Pinnen, Sortieren oder Gruppierung vorgenommen werden.

## 2.5 Kommunikation

### 2.5.1 Chat

Der Chat ist ein zentrales Element. Nachrichten werden chronologisch angezeigt. Textnachrichten, Links und Dateien können gesendet werden. Drag-and-Drop Upload mit Vorschau ist implementiert. Emojis und erweiterte Formatierungen sind vorgesehen, aber noch nicht implementiert.

Interaktionen:

- **Bereits implementiert:** Reaktionen, Threads, direkte Antworten, Text kopieren, Nachricht vorlesen.
- **Geplant:** Weiterleiten, als ungelesen markieren, Erinnerungen, Nachrichten pinnen, Nachrichtenlink kopieren, Erwähnungen.

### 2.5.2 Voice Chat

Der Bereich ist noch nicht implementiert.

## 2.6 Streaming & Medien

Streams unterscheiden zwischen Streamer- und Viewer-Ansicht. Präsentationsfolien werden als Kapitel in der Timeline gespeichert. Viewer können **Auswahl**, **Kommentieren** und **Markieren** nutzen. Weitere Funktionen wie Untertitel, Qualität, Untertitel Toggle und KI-Vorlesungszusammenfassungen sind noch nicht implementiert.

Der Bereich **Videos** für vergangene Streams ist noch nicht implementiert.

## 2.7 Organisation & Planung

Die Tabs **Zeitplan**, **Dateien**, **Informationen** und **Abgabe** sind noch nicht implementiert.

## 2.8 Benutzer & Profile

Das Profil zeigt detaillierte Informationen: Profilbild, vollständiger Name, Anzeigename, Pronomen, Aussprache, Rolle, Badges, Kontaktinformationen, Aktivitäten, Zeitzone, Fähigkeiten und „Über mich“-Sektion. Die Kategorie **Interessen** ist noch nicht implementiert.

## 2.9 Weitere Funktionen

- **Other Users:** Zeigt Mitglieder eines Spaces als Profilbilder, Klick öffnet Profilansicht.
- **Aktivitäten, Gepinnt/Favoriten/Später erinnern, Space-Informationen:** noch nicht implementiert.