---
sidebar_position: 0
title: Navigation
hide_title: false
---
# Navigation

### 2.2 Navigation Menu

Das Navigationsmenü bildet den zentralen Einstiegspunkt in die Plattform **hfg.design 2.0**. Es ermöglicht den Zugriff auf globale Funktionen wie Suche, Startseite, Spaces und Nutzereinstellungen. Die Navigation ist dauerhaft sichtbar und in zwei Zuständen nutzbar: **eingeklappt** (kompakte Symbolansicht) und **ausgeklappt** (erweiterte Darstellung mit Bezeichnungen, Filterfunktionen und zusätzlichen Optionen).

Im **eingeklappten Zustand** werden nur die Hauptfunktionen als Icons angezeigt – etwa Suche, Home, Knowledge Base und die Space-Liste. Unterhalb der Spaces befindet sich der eigene Nutzerbereich.

Im **ausgeklappten Zustand** werden zu den Icons ergänzende Beschriftungen, Space-Namen und Filteroptionen angezeigt. Außerdem erscheint unter dem eigenen Profilbild der vollständige Name, der Online-Status sowie Icons für Mute, Deafen und Einstellungen.

### 2.2.1 Search

Die globale Suche ermöglicht es, schnell und kontextübergreifend Inhalte auf der Plattform zu finden. Sie durchsucht **Spaces, Nachrichten, Personen, Dateien, Bilder** sowie **Archiv-Projekte** aus dem HfG-Archiv (archiv.hfg.design).

Die Suche ist aktuell **global** – sie durchsucht also alle Inhalte unabhängig vom aktuellen Kontext oder Space. Eine **lokale Space-Suche** ist bereits vorgesehen, jedoch noch nicht implementiert.

Suchvorschläge werden während der Eingabe automatisch angezeigt. Suchergebnisse sind nach Typ gruppiert, wodurch sich relevante Inhalte effizient filtern und öffnen lassen.

### 2.2.2 Home

Der Bereich **Home** ist derzeit in der Entwicklung.

Der Bereich **Home** ist noch nicht implementiert.

Geplant ist eine **personalisierte Startansicht**, die den Nutzer*innen eine Übersicht über aktuelle Kurse, aktive Spaces, anstehende Termine und Benachrichtigungen bietet. Ziel ist es, einen zentralen Einstiegspunkt in die eigene Lehr- und Lernumgebung zu schaffen.

### 2.2.3 Curriculum

Der Bereich **Curriculum** ist noch nicht implementiert.

### 2.2.4 Knowledge Base

Der Bereich **Knowledge Base** ist noch nicht implementiert.

### 2.2.5 Spaces

Spaces sind das **Kernkonzept** der Plattform und dienen als strukturierte Kommunikations- und Arbeitsräume. Ein Space lässt sich funktional mit einem Channel oder Arbeitsraum vergleichen und repräsentiert eine bestimmte inhaltliche oder organisatorische Einheit – z. B. einen Kurs, ein Projekt oder eine Gruppenkommunikation.

Es gibt verschiedene **Space-Typen** mit jeweils spezifischen Eigenschaften:

- **Kurs:** Wird automatisch erstellt, ist an eine Lehrveranstaltung gebunden und besitzt einen oder mehrere Dozierende. Kurse verfügen über Funktionen wie *Abgabe* und *Stream*.
- **Channel:** Ein allgemeiner, frei konfigurierbarer Kommunikationsraum. Kann automatisch oder manuell erstellt werden, z. B. für Community-Austausch.
- **DM (Direktnachricht):** Privater Chat zwischen zwei Personen.
- **Gruppen-DM:** Nachrichtenraum mit mehreren Teilnehmenden.
- **Projektgruppe:** Entsteht durch Verknüpfung eines Channels oder einer Gruppen-DM mit einem Kurs. So entsteht ein Projekt-Space mit direktem Bezug zu einer Lehrveranstaltung.
- **Hyperlink:** Ein externer Verweis, z. B. auf eine Website oder ein Figma-Board. Beim Anklicken wird direkt zur verlinkten Ressource weitergeleitet.
- **Folder:** Ein Ordner zur strukturellen Organisation von Spaces. Er entsteht, wenn zwei Spaces per Drag-and-Drop übereinander gezogen werden und kann anschließend aufgeklappt oder geschlossen werden.

Grundsätzlich können **alle Nutzer*innen Spaces erstellen**, mit Ausnahme von Kursen. Studierende dürfen keine Kurse anlegen, können aber **Tutorien** erstellen, die funktional einem Kurs ähneln.

### 2.2.5.1 Add Space

Über den Button **„Neuen Space erstellen“** öffnet sich ein mehrstufiger Dialog, der den Erstellungsprozess strukturiert:

1. **Space-Typ wählen:**
    
    Man kann entweder einen individuellen („Custom“) Space erstellen oder aus einer Vorlage wählen (Direktnachricht, Gruppenchat, Projektgruppe, Channel, Tutorium bzw. Kurs). Alternativ kann man über einen Space-Link oder den Namen einem bestehenden Space beitreten.
    
2. **Funktionen festlegen:**
    
    Je nach Vorlage sind bestimmte Funktionen standardmäßig aktiviert. Diese lassen sich manuell anpassen. Verfügbare Module sind: *Nachrichten, Stream, Aufzeichnungen (nur bei aktivem Stream), Videos, Dateien, Zeitplan, Informationen* sowie *Abgabe* (nur für Dozierende sichtbar).
    
3. **Details eingeben:**
    
    Im letzten Schritt können Name, Beschreibung und Vorschaubild gewählt werden. Zudem kann festgelegt werden, ob der Space **offen** (öffentlich für alle sichtbar) oder **geschlossen** (nur auf Anfrage zugänglich) ist.
    

### 2.2.5.2 Filter Spaces

Die Space-Liste kann nach **Typen** gefiltert werden, um die Übersicht zu erleichtern.

Verfügbare Filterkategorien sind: *Kurse, Kanäle, Direktnachrichten, Gruppennachrichten, Projekte, Verlinkungen* und *Ordner*.

### 2.2.5.3 Ansicht ändern

Der Bereich **Ansicht ändern** ist noch nicht implementiert.

### 2.2.5.4 Weitere Space-Funktionen

Beim Rechtsklick auf einen Space öffnet sich ein Kontextmenü mit zusätzlichen Aktionen.

### 2.2.5.4.1 Space anpinnen/lösen

Spaces können „angepinnt“ werden, um sie dauerhaft am oberen Rand der Space-Liste anzuzeigen. So bleiben wichtige Kurse oder Projekte stets sichtbar, unabhängig von der Sortierung.

### 2.2.5.4.2 Spaces sortieren

Die Sortierung kann **automatisch** oder **alphabetisch** erfolgen.

Bei der automatischen Sortierung werden Spaces nach **jüngster Aktivität** angeordnet.

Spaces mit aktivem Livestream erscheinen immer ganz oben, gefolgt von angepinnten Spaces und anschließend allen übrigen – je nach gewähltem Sortiermodus.

### 2.2.5.4.3 Gruppen erstellen

Der Bereich **Gruppen erstellen** ist noch nicht implementiert.

### 2.2.6 User Menu

Das **User-Menü** fasst alle persönlichen Optionen und Einstellungen zusammen, die den eigenen Account betreffen. Es befindet sich im unteren Bereich der Navigationsleiste und ermöglicht den Zugriff auf Profil, Kontoeinstellungen und Systemoptionen.

### 2.2.6.1 Profil

Der Bereich **Profil** zeigt die eigene Profilseite in der Ansicht, wie sie für andere Nutzer*innen sichtbar ist.

### 2.2.6.2 Einstellungen

In den **Einstellungen** können Nutzer*innen ihr Profil anpassen und persönliche Informationen pflegen.

Zu den wichtigsten Optionen gehören:

- **Profilbild:** frei wählbar
- **Name & Benutzername:** aus der Hochschuldatenbank importiert (nicht veränderbar)
- **Anzeigename:** frei wählbar (z. B. Vorname oder Spitzname)
- **Rolle:** Studiengang oder Arbeitsbereich
- **Pronomen:** frei definierbar
- **Namensaussprache:** per Lautschrift oder Audioaufnahme
- **Meine Fähigkeiten – So kann ich andere unterstützen:** individuelle Kompetenzen und Unterstützungsangebote
- **Kontaktoptionen:** bevorzugte Kommunikationswege (hfg.design, E-Mail, Telefon, Slack)
- **Status & Zeitzone:** Angabe von Erreichbarkeit und Zeitzone für Benachrichtigungen
- **Über mich:** strukturierte Angaben zu Sprachen, Praxissemester, Portfolio-URL, Bildungsweg, Wohnort, Auslandssemester, Engagement, Funfact und optional ein Freitext
- **Interessen:** (noch nicht implementiert)

### 2.2.6.3 Menü einklappen

Die Sidebar kann minimiert werden, um mehr Platz für den Arbeitsbereich zu schaffen. In der eingeklappten Ansicht werden nur Icons angezeigt, während die ausgeklappte Ansicht zusätzliche Informationen und Filter einblendet.

### 2.2.6.4 Abmelden

Über **Abmelden** wird die aktuelle Sitzung beendet, und der Nutzer kehrt zur Startseite mit dem Login-Button zurück.

### 2.2.6.5 Mikrofon/Lautsprecher ausschalten + Einstellungen

Der Bereich **Voice-Chat** ist aktuell noch nicht implementiert. Eine Geräteauswahl für Mikrofon oder Lautsprecher besteht derzeit nicht.