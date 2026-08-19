---
name: Stadttaubenhilfe Bernau
description: Urbane, menschliche Vereinswebsite fuer konkrete Stadttaubenhilfe in Bernau.
colors:
  bg: "#F6F8F6"
  surface: "#FFFFFF"
  text: "#0F172A"
  muted: "#607287"
  line: "#D9E3EA"
  green: "#0A8A4A"
  green-dark: "#005F35"
  blue: "#426F96"
  blue-dark: "#244362"
  accent: "#E96F3D"
  violet: "#6D5A90"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(2.55rem, 5.85vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.99
    letterSpacing: "0"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  xs: "12px"
  sm: "14px"
  md: "18px"
  panel: "24px"
  photo: "26px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "28px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  button-secondary:
    backgroundColor: "#E7F1FA"
    textColor: "{colors.blue-dark}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.panel}"
    padding: "clamp(22px, 3vw, 30px)"
---

# Design System: Stadttaubenhilfe Bernau

## 1. Overview

**Creative North Star: "Der helle Stadtraum mit echter Hilfe"**

Das System verbindet urbane Klarheit mit der Naehe echter Vereinsarbeit. Es soll nicht nach Naturpark, Vereinsbaukasten oder generischem Nonprofit-Template aussehen, sondern nach Bernau: Taubenhaus im Fahrradparkhaus, Infostand, Pflegestelle, Menschen, konkrete Handgriffe.

Die Seite ist image-led. Fotos sind nicht Dekoration, sondern Beweise: Sie zeigen, dass hier echte Tiere versorgt und echte Menschen aktiv werden. Typografie und Layout bleiben ruhig, damit Fundtier- und Kontaktwege auch unter Stress funktionieren.

**Key Characteristics:**
- Klare, helle Oberflaechen mit Taubenblau, Hilfsgruen und warmem Rost als Akzent.
- Echte Fotografie vor abstrakten Illustrationen.
- Grosse Einstiege, aber kompakte, scanbare Inhalte danach.
- Vertrauenswuerdige CTAs ohne Druck oder Marketing-Geschrei.

## 2. Colors

Die Palette ist ein urbanes Taubengefieder: kuehles Blau/Grau als Basis, Gruen als aktive Hilfe, Rostorange fuer Dringlichkeit und Spendenimpulse.

### Primary
- **Hilfsgruen** (#0A8A4A): Primaere CTAs, aktive Zustaende, positive Orientierung.
- **Tiefgruen** (#005F35): Hover, starke Labels und dunkle Akzente.

### Secondary
- **Taubenblau** (#426F96): ruhige Flaechen, sekundäre UI, lokale Urbanitaet.
- **Nachtblau** (#244362): Text auf blauen Flaechen und ruhige Betonung.

### Tertiary
- **Rostorange** (#E96F3D): Spenden, akute Hinweise, kleine energetische Akzente.
- **Violettgrau** (#6D5A90): sanfte Taubenfeder-Farbe fuer Varianz.

### Neutral
- **Stadtweiss** (#F6F8F6): Hintergrund.
- **Papierweiss** (#FFFFFF): Hauptflaechen.
- **Tinte** (#0F172A): Primaertext.
- **Schiefertext** (#607287): Sekundaertext, nur auf hellen Flaechen.
- **Linie** (#D9E3EA): Grenzen und Trenner.

### Named Rules
**Die echte-Arbeit-Regel.** Farbe darf fuehren, aber Fotos muessen den Beweis liefern.

## 3. Typography

**Display Font:** Inter mit System-Fallbacks
**Body Font:** Inter mit System-Fallbacks

**Character:** Klar, zugaenglich und lokal-professionell. Die Schrift ist bewusst unaufgeregt, damit Bild, Inhalt und Handlung im Vordergrund stehen.

### Hierarchy
- **Display** (850, `clamp(2.55rem, 5.85vw, 6rem)`, 0.99): Hero-H1s und grosse Kampagnenzeilen.
- **Headline** (800, `clamp(1.9rem, 3.2vw, 3.2rem)`, 1.08): Sektionsueberschriften.
- **Title** (800, 1.15rem, 1.08): Cards, Listen und kompakte Module.
- **Body** (400-650, 1rem, 1.6): Fliesstext mit 65-75ch Zielbreite.
- **Label** (800, 0.78rem, 0): kurze Kicker, Chips und Statuslabels. Sparsam verwenden.

### Named Rules
**Die Stresslese-Regel.** Fundtier- und Kontakttexte muessen in wenigen Sekunden erfassbar bleiben.

## 4. Elevation

Das System nutzt eine hybride Tiefe: leichte Schatten fuer grosse Fotoflaechen und wichtige Karten, klare Linien fuer ruhige Inhaltsbereiche. Schatten sollen Struktur geben, nicht alles schweben lassen.

### Shadow Vocabulary
- **Soft Lift** (`0 12px 30px rgba(28, 53, 76, 0.08)`): ruhige Inhaltscontainer.
- **Photo Lift** (`0 26px 64px rgba(28, 53, 76, 0.13)`): grosse Bild- und Hero-Flaechen.

### Named Rules
**Keine Ghost-Card-Flut.** Nicht jede Flaeche braucht Border plus grossen Schatten.

## 5. Components

### Buttons
- **Shape:** Pill fuer klare Handlungsziele.
- **Primary:** Hilfsgruen, weiss, kraeftig, fuer Spenden/Kontakt/Mitmachen.
- **Hover / Focus:** leichter Lift, dunkleres Gruen, sichtbare Fokuslinie.
- **Secondary:** Taubenblau-soft, dunkelblauer Text, ruhiger als Primary.

### Chips
- **Style:** helle, pillfoermige Labels mit Gruen- oder Blauakzent.
- **State:** Nur zur Orientierung, nicht als Schmuck in jeder Section.

### Cards / Containers
- **Corner Style:** 18-24px fuer Inhaltskarten, 26px fuer grosse Foto-Flaechen, Pill nur fuer Buttons/Chips.
- **Background:** weiss oder leicht getoentes Gruen/Blau.
- **Shadow Strategy:** sparsam, bei Bildkarten staerker als bei Textkarten.
- **Internal Padding:** 22-38px je nach Flaeche.

### Notfallstreifen
- **Purpose:** Auf der Startseite sofort den Fundtierpfad sichtbar machen.
- **Content:** Kurze Handlungskette: Karton, kein Wasser einflößen, Fundort/Foto/Telefon schicken.
- **Style:** Gruen getoente Flaeche mit kraeftigem ersten Label, keine Alarm-Ästhetik.

### Inputs / Fields
- **Style:** helle Flaechen, 1px Linie, 16px Radius.
- **Focus:** Gruener Fokus-Ring mit ausreichend Kontrast.
- **Error / Disabled:** klar textlich erklaeren; keine reine Farbcodierung.

### Navigation
- Sticky, kompakt, helle Pill-Navigation mit sichtbarem aktiven Zustand. Auf Mobile als klares Burger-Menue mit grossen Touchzielen.

## 6. Do's and Don'ts

### Do:
- **Do** echte Fotos aus Taubenhaus, Volieren, Pflegestellen und Vereinsarbeit priorisieren.
- **Do** Fundtier- und Kontaktwege kurz, sichtbar und mobilfreundlich halten.
- **Do** Gruen fuer Hilfe und Aktion verwenden; Blau/Grau fuer Ruhe und Urbanitaet.
- **Do** private Daten und sensible Motive konsequent schuetzen.

### Don't:
- **Don't** Stockfoto-Sprache, Bildmotiv-Untertitel oder erklaerende Platzhalter zeigen.
- **Don't** Dachboden-/Kind-Motive verwenden, wenn sie nicht freigegeben sind.
- **Don't** eine beige, trockene oder generische Vereinsseite bauen.
- **Don't** ueberall identische Card-Grids, ueberrundete Ghost-Cards oder dekorative Raster einsetzen.
- **Don't** private Anschriften erfinden oder veroeffentlichen.
