---
sidebar_position: 0
title: Spaces
hide_title: false
---

# Spaces

Die *Space View* ist der zentrale Arbeitsbereich innerhalb von hfg.design 2.0. Sie bildet die inhaltliche und kommunikative Ebene eines einzelnen Spaces ab. Je nach Typ (z. B. Kurs, Projektgruppe oder Channel) stehen unterschiedliche Funktionen zur Verfügung. Die wichtigsten Module innerhalb der Space View sind der Chat, der Stream sowie zukünftig ergänzende Bereiche wie Dateien, Zeitplan und Abgaben.

### 2.3.1 Chat

Der Chat stellt eine der Hauptfunktionen von hfg.design 2.0 dar und bildet das kommunikative Zentrum innerhalb jedes Spaces. Er ermöglicht den schnellen, kontextbezogenen Austausch zwischen Nutzer:innen, das Teilen von Dateien sowie Reaktionen und strukturierte Diskussionsverläufe über Threads. Nachrichten werden chronologisch dargestellt, wobei die neueste Nachricht stets am unteren Ende erscheint.

### 2.3.1.1 Nachricht schreiben

Über das Eingabefeld am unteren Rand des Chats können Textnachrichten verfasst und versendet werden. Neben einfachem Text können auch Dateien und Links geteilt werden. Dateien lassen sich per Drag-and-Drop direkt in das Eingabefeld ziehen, woraufhin eine Vorschau der hochgeladenen Datei angezeigt wird.

Zukünftig sollen Emojis, Erwähnungen anderer Nutzer:innen und erweiterte Formatierungsoptionen (z. B. Code-Blöcke) unterstützt werden. Diese Funktionen sind aktuell noch nicht implementiert.

### 2.3.1.2 Mit Nachrichten interagieren

Nachrichten können über verschiedene Interaktionsoptionen bearbeitet oder hervorgehoben werden. Bereits implementiert sind:

- **Reaktionen** – Nutzer:innen können auf Nachrichten mit Emojis reagieren.
- **Threads** – Antworten auf einzelne Nachrichten werden in einem separaten Thread in einer Seitenleiste dargestellt.
- **Antworten** – Direkte Antworten erscheinen inline im Chatverlauf.
- **Text kopieren** – Der Inhalt einer Nachricht kann kopiert werden.
- **Nachricht vorlesen** – Nachrichten können automatisch per Text-to-Speech vorgelesen werden.

Weitere Interaktionen wie **Nachrichten weiterleiten**, **als ungelesen markieren**, **Erinnerungen setzen**, **Nachricht pinnen** und **Nachrichtenlink kopieren** sind bereits vorgesehen, aber derzeit noch nicht implementiert.

### 2.3.2 Stream

Der Stream-Bereich dient der Durchführung und Wiedergabe von Live-Übertragungen und Vorlesungen. Er basiert auf der Integration von **LiveKit** und ermöglicht eine Echtzeitübertragung von Präsentationen, Diskussionen oder Workshops.

### 2.3.2.1 Streamer Side

Für Lehrende oder Vortragende steht eine eigene Ansicht zur Verfügung, die die Steuerung der Übertragung ermöglicht. Die Bildschirmfreigabe dient dabei als zentrales Übertragungsmedium – typischerweise für Präsentationsfolien oder Interface-Demos.

Wird eine Präsentation geteilt, erkennt das System die Folien automatisch und speichert sie als einzelne Kapitel in der Stream-Timeline. Diese Kapitel können von den Zuschauenden einzeln angesteuert werden und zeigen beim Hover eine Folien-Vorschau.

### 2.3.2.2 Viewer Side

Die Zuschauer:innen sehen den Stream direkt in der Plattform. Unterhalb der Übertragung stehen verschiedene Steuer- und Interaktionsoptionen zur Verfügung:

- **Foliensprung** – Vorherige Folie, Pause und nächste Folie.
- **Folienanzeige** – Zeigt die aktuell übertragene Folie an.
- **Tools-Toggle** – Blendet die verfügbaren Tools (Auswahl, Kommentieren, Markieren) ein oder aus.
- **Einstellungen** – Optionen für Untertitel und Videoqualität (noch nicht implementiert).
- **Untertitel-Toggle** – Aktiviert oder deaktiviert Untertitel (noch nicht implementiert).
- **Fullscreen-Modus** – Öffnet die Übertragung bildschirmfüllend, mit den Tools an der rechten Seite.

### 2.3.2.2.1 Auswahl

Ermöglicht das einfache Navigieren und Interagieren innerhalb der Stream-Ansicht.

### 2.3.2.2.2 Kommentieren

Über das Kommentar-Tool können Nutzer:innen direkt im Stream an einer beliebigen Stelle klicken, um dort einen Kommentar zu hinterlassen. Der Kommentar wird im Chat angezeigt und ist mit der entsprechenden Position im Stream verknüpft. Erwähnungen und Emojis sind für diese Funktion vorgesehen, jedoch noch nicht implementiert.

### 2.3.2.2.3 Markieren

Das Markierungs-Tool erkennt Textinhalte innerhalb des Streams, die von Nutzer:innen direkt durch markieren hervorgehoben werden können. Der markierte Text wird im Feed des/der Nutzer:in angezeigt.

### 2.3.2.2.4 Interaktionen ausblenden

Mit einem Toggle können alle Stream-Interaktionswerkzeuge ein- oder ausgeblendet werden.

### 2.3.2.2.5 Einstellungen

Hier können Nutzer:innen die Wiedergabequalität sowie Untertitel-Optionen konfigurieren. Diese Funktionen sind vorgesehen, aber derzeit noch nicht implementiert.

### 2.3.2.2.7 Untertitel Toggle

Der Bereich Untertitel ist noch nicht implementiert.

### 2.3.2.2.8 Fullscreen

Im Vollbildmodus werden nur die drei Tools – Auswahl, Kommentieren und Markieren – am rechten Bildschirmrand angezeigt. Der Modus kann mit der *Escape*-Taste beendet werden.

### 2.3.2.2.9 Vorlesungszusammenfassung

Nach einer Vorlesung wird automatisch eine KI-Zusammenfassung des Inhalts erstellt, die von der Lehrperson angepasst werden kann.

Der Bereich „Vorlesungszusammenfassung“ ist vorgesehen, aber aktuell noch nicht implementiert.

### 2.3.3 Videos

Der Bereich *Videos* ist noch nicht implementiert.

### 2.3.4 Zeitplan

Der Bereich *Zeitplan* ist noch nicht implementiert.

### 2.3.5 Dateien

Der Bereich *Dateien* ist noch nicht implementiert.

### 2.3.6 Infos

Der Bereich *Infos* ist noch nicht implementiert.

### 2.3.7 Abgabe

Der Bereich *Abgabe* ist noch nicht implementiert.

### 2.3.8 Weitere

Der Abschnitt *Weitere* bündelt zusätzliche Informationen und Kontextfunktionen eines Spaces. Aktuell ist hier vor allem der Bereich **Other Users** funktionsfähig.

### 2.3.8.1 Other Users

Hier werden die Profilbilder der Mitglieder eines Spaces angezeigt. Bei einer großen Anzahl von Mitgliedern werden überzählige Nutzer:innen mit einer „+Anzahl“-Anzeige zusammengefasst.

Ein Klick auf ein Profilbild öffnet die Profilansicht der entsprechenden Person.

Das Profil ist wie folgt aufgebaut:

- **Profilbild** mit Statusanzeige
- **Name** und **Pronomen**
- **Aussprachehinweis**, geschrieben oder als Audioaufnahme
- **Badges** (z. B. Rollen oder Auszeichnungen)
- **Rolle** innerhalb der Hochschule
- **Kontaktinformationen** mit Direktlinks (E-Mail, Plattform, Telefon, Slack)
- **Aktivitätsstatus** und **Zeitzone**
- **Über [Name]** – Freitextbeschreibung der Person
- **Informationen** (z. B. Sprachen, Wohnort, Portfolio-Link, Praxissemester, Engagement, Funfact)
- **Fähigkeiten** – zeigt, wobei die Person andere unterstützen kann
- **Interessen** – dieser Bereich ist noch nicht implementiert
- **Gemeinsame Spaces** – listet alle Spaces auf, die man mit dieser Person teilt

### 2.3.8.2 Aktivitäten

Der Bereich *Aktivitäten* ist noch nicht implementiert.

### 2.3.8.3 Gepinnt, Favoriten, Später erinnern

Der Bereich *Gepinnt, Favoriten, Später erinnern* ist noch nicht implementiert.

### 2.3.8.4 Space Informationen

Der Bereich *Space Informationen* ist noch nicht implementiert.