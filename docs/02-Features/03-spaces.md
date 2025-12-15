---
sidebar_position: 0
title: Spaces
hide_title: false
---
Spaces sind das **Kernkonzept** der Plattform und dienen als strukturierte Kommunikations- und Arbeitsräume. Ein Space lässt sich funktional mit einem Channel oder Arbeitsraum vergleichen und repräsentiert eine bestimmte inhaltliche oder organisatorische Einheit, zum Beispiel einen Kurs, ein Projekt oder eine Gruppenkommunikation.

Es gibt verschiedene **Space-Typen** mit jeweils spezifischen Eigenschaften:

**Kurs**
Wird automatisch erstellt, ist an eine Lehrveranstaltung gebunden und besitzt ein oder mehrere Dozierende. Kurse verfügen über Funktionen wie *Abgabe* und *Stream*.

**Channel**
Ein allgemeiner, frei konfigurierbarer Kommunikationsraum. Kann automatisch oder manuell erstellt werden, z. B. für den Community-Austausch.

**Direktnachricht (DM)**
Privater Chat zwischen zwei Personen.

**Gruppen-DM**
Nachrichtenraum mit mehreren Teilnehmenden.

**Projektgruppe**
Entsteht durch Verknüpfung eines Channels oder einer Gruppen-DM mit einem Kurs. So entsteht ein Projekt-Space mit direktem Bezug zu einer Lehrveranstaltung.

**Link**
Ein externer Verweis, z. B. auf eine Website oder ein Figma-Board. Beim Anklicken wird direkt zur verlinkten Ressource weitergeleitet.

**Ordner**
Ein Ordner zur strukturellen Organisation von Spaces. Er entsteht, wenn zwei Spaces per Drag-and-Drop übereinander gezogen werden, und kann anschließend aufgeklappt oder geschlossen werden.

Grundsätzlich können **alle Nutzer*innen Spaces erstellen**, mit Ausnahme von Kursen. Studierende dürfen keine Kurse anlegen, können aber **Tutorien** erstellen, die funktional einem Kurs ähneln.

### Space hinzufügen

Über den Button **„Neuen Space erstellen“** öffnet sich ein mehrstufiger Dialog, der den Erstellungsprozess strukturiert:

1. **Space-Typ wählen**

   Man kann entweder einen **individuellen („Custom“) Space** erstellen oder aus einer **Vorlage** wählen: *Direktnachricht, Gruppenchat, Projektgruppe, Channel oder Tutorium bzw. Kurs*. Alternativ kann man über einen Space-Link oder den Namen einem **bestehenden Space beitreten**.
2. **Funktionen festlegen**

   Je nach Vorlage sind bestimmte **Funktionen** standardmäßig aktiviert. Diese lassen sich manuell anpassen. Verfügbare Module sind: *Nachrichten, Stream, Aufzeichnungen (nur bei aktivem Stream), Videos, Dateien, Zeitplan, Informationen sowie *Abgabe* (nur für Dozierende sichtbar)*.
3. **Details eingeben**

   Im letzten Schritt können **Name, Beschreibung** und **Vorschaubild** gewählt werden. Zudem kann festgelegt werden, ob der Space **offen** (öffentlich für alle sichtbar) oder **geschlossen** (nur auf Anfrage zugänglich) ist.

### Spaces filtern

Die Space-Liste kann nach **Typen** gefiltert werden, um die Übersicht zu erleichtern.

Verfügbare Filterkategorien sind: *Kurse, Kanäle, Direktnachrichten, Gruppennachrichten, Projekte, Verlinkungen* und *Ordner*.

### Ansicht ändern

Der Bereich **Ansicht ändern** ist noch nicht implementiert.

### Weitere Space-Funktionen

Beim Rechtsklick auf einen Space öffnet sich ein Kontextmenü mit zusätzlichen Aktionen.

**Space anpinnen/lösen**
Spaces können „angepinnt“ werden, um sie dauerhaft am oberen Rand der Space-Liste anzuzeigen. So bleiben wichtige Kurse oder Projekte stets sichtbar, unabhängig von der Sortierung.

**Spaces sortieren**
Die Sortierung kann **automatisch** oder **alphabetisch** erfolgen. Bei der automatischen Sortierung werden Spaces nach **jüngster Aktivität** angeordnet. Spaces mit aktivem Livestream erscheinen immer ganz oben, gefolgt von angepinnten Spaces und anschließend allen übrigen – je nach gewähltem Sortiermodus.

**Gruppen erstellen**
Der Bereich **Gruppen erstellen** ist noch nicht implementiert.

<!-- ## Spaceview

Die **Space View** bildet die inhaltliche und kommunikative Ebene eines einzelnen Spaces ab. Je nach Typ (z. B. Kurs, Projektgruppe oder Channel) stehen unterschiedliche Funktionen zur Verfügung. Die wichtigsten Module innerhalb der Space View sind der Chat, der Stream sowie zukünftig ergänzende Bereiche wie Dateien, Zeitplan und Abgaben. -->

## Chat

Der Chat stellt eine der Hauptfunktionen von hfg.design 2.0 dar und bildet das kommunikative Zentrum innerhalb jedes Spaces. Er ermöglicht den schnellen, kontextbezogenen Austausch zwischen Nutzer:innen, das Teilen von Dateien sowie Reaktionen und strukturierte Diskussionsverläufe über Threads. Nachrichten werden chronologisch dargestellt, wobei die neueste Nachricht stets am unteren Ende erscheint.

### Nachricht schreiben

Über das Eingabefeld am unteren Rand des Chats können Textnachrichten verfasst und versendet werden. Neben einfachem Text können auch Dateien und Links geteilt werden. Dateien lassen sich per Drag-and-Drop direkt in das Eingabefeld ziehen, woraufhin eine Vorschau der hochgeladenen Datei angezeigt wird. Emojis, Erwähnungen anderer Nutzer:innen und erweiterte Formatierungsoptionen werden ebenfalls unterstützt.

### Mit Nachrichten interagieren

Nachrichten können über verschiedene Interaktionsoptionen bearbeitet oder hervorgehoben werden. 

**Reaktionen**  
Nutzer:innen können auf Nachrichten mit Emojis reagieren.

**Threads**  
Antworten auf einzelne Nachrichten werden in einem separaten Thread in einer Seitenleiste dargestellt.

**Antworten**  
Direkte Antworten erscheinen inline im Chatverlauf.

**Text kopieren**  
Der Inhalt einer Nachricht kann kopiert werden.

**Nachricht vorlesen**  
Nachrichten können automatisch per Text-to-Speech vorgelesen werden.

Weitere Interaktionen wie **Nachrichten weiterleiten**, **als ungelesen markieren**, **Erinnerungen setzen**, **Nachricht pinnen** und **Nachrichtenlink kopieren** sind bereits vorgesehen.

## Stream

Der Stream-Bereich dient der Durchführung und Wiedergabe von Live-Übertragungen und Vorlesungen. Er ermöglicht eine Echtzeitübertragung von Präsentationen, Diskussionen oder Workshops.

### Streamer Side

Für Lehrende oder Vortragende steht eine eigene Ansicht zur Verfügung, die die Steuerung der Übertragung ermöglicht. Die Bildschirmfreigabe dient dabei als zentrales Übertragungsmedium – typischerweise für Präsentationsfolien oder Interface-Demos.

Wird eine Präsentation geteilt, erkennt das System die Folien automatisch und speichert sie als einzelne Kapitel in der Stream-Timeline. Diese Kapitel können von den Zuschauenden einzeln angesteuert werden und zeigen beim Hover eine Folien-Vorschau.

### Viewer Side

Die Zuschauer:innen sehen den Stream direkt in der Plattform. Unterhalb der Übertragung stehen verschiedene Steuer- und Interaktionsoptionen zur Verfügung:

**Foliensprung**  
Vorherige Folie, Pause und nächste Folie.

**Folienanzeige**  
Zeigt die aktuell übertragene Folie an.

**Tools-Toggle**  
Blendet die verfügbaren Tools (Auswahl, Kommentieren, Markieren) ein oder aus.

**Einstellungen**  
Optionen für Untertitel und Videoqualität (noch nicht implementiert).

**Untertitel-Toggle**  
Aktiviert oder deaktiviert Untertitel (noch nicht implementiert).

**Fullscreen-Modus**  
Öffnet die Übertragung bildschirmfüllend, mit den Tools an der rechten Seite.

**Auswahl**  
Ermöglicht das einfache Navigieren und Interagieren innerhalb der Stream-Ansicht.

**Kommentieren**  
Über das Kommentar-Tool können Nutzer:innen direkt im Stream an einer beliebigen Stelle klicken, um dort einen Kommentar zu hinterlassen. Der Kommentar wird im Chat angezeigt und ist mit der entsprechenden Position im Stream verknüpft. Erwähnungen und Emojis sind für diese Funktion vorgesehen, jedoch noch nicht implementiert.

**Markieren**  
Das Markierungs-Tool erkennt Textinhalte innerhalb des Streams, die von Nutzer:innen direkt durch markieren hervorgehoben werden können. Der markierte Text wird im Feed des/der Nutzer:in angezeigt.

**Interaktionen ausblenden**  
Mit einem Toggle können alle Stream-Interaktionswerkzeuge ein- oder ausgeblendet werden.

**Einstellungen**  
Hier können Nutzer:innen die Wiedergabequalität sowie Untertitel-Optionen konfigurieren. Diese Funktionen sind vorgesehen, aber derzeit noch nicht implementiert.

**Untertitel Toggle**
Der Bereich Untertitel ist noch nicht implementiert.

### Vorlesungszusammenfassung

Nach einer Vorlesung wird automatisch eine KI-Zusammenfassung des Inhalts erstellt, die von der Lehrperson angepasst werden kann.

Der Bereich „Vorlesungszusammenfassung“ ist vorgesehen, aber aktuell noch nicht implementiert.

## Videos

Der Bereich *Videos* ist noch nicht implementiert.

## Zeitplan

Der Bereich *Zeitplan* ist noch nicht implementiert.

## Dateien

Der Bereich *Dateien* ist noch nicht implementiert.

## Infos

Der Bereich *Infos* ist noch nicht implementiert.

## Abgabe

Der Bereich *Abgabe* ist noch nicht implementiert.

## Weitere

Dieser Abschnitt bündelt zusätzliche Informationen und Kontextfunktionen eines Spaces.

### Andere User

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

### Aktivitäten

Der Bereich *Aktivitäten* ist noch nicht implementiert.

### Gepinnt, Favoriten, Später erinnern

Der Bereich *Gepinnt, Favoriten, Später erinnern* ist noch nicht implementiert.

### Space Informationen

Der Bereich *Space Informationen* ist noch nicht implementiert.
