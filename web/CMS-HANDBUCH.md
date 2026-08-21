# CMS-Handbuch

Die Website bleibt technisch eine schnelle statische Astro-Seite. Änderbare
Inhalte liegen aber jetzt in Daten-Dateien und können über Decap CMS gepflegt
werden.

## Admin-Oberfläche

Nach dem Deploy liegt das CMS unter:

`/admin/`

Bearbeitbar sind aktuell:

- Globale Website-Einstellungen
- Logo, Kontakt, Social Links
- Hauptnavigation und Footer-Links
- Neue Startseite / Entwurf
- Projekte
- Fundtier-Check
- Wissen-Hero und Wissens-Snacks
- Galerie-Kategorien und Galerie-Bilder

Die Daten liegen hier:

- `src/data/settings.json`
- `src/data/home-entwurf.json`
- `src/data/projects.json`
- `src/data/fundtiere.json`
- `src/data/wissen.json`
- `src/data/gallery.json`

Neue CMS-Bilder werden in diesen Ordner gelegt:

`public/images/uploads/`

## Live-Bearbeitung

Das CMS speichert Änderungen direkt im GitHub-Repository. Netlify erkennt den
Commit und veröffentlicht die Seite automatisch. Der Zugang läuft über GitHub
OAuth; Git Gateway wird nicht verwendet.

1. `/admin/` aufrufen.
2. Mit dem eigenen GitHub-Konto anmelden.
3. Inhalte oder Bilder bearbeiten und auf `Veröffentlichen` klicken.
4. Den kurzen Netlify-Deploy abwarten; die Änderung ist danach auf der Website
   sichtbar.

Damit eine Person Inhalte veröffentlichen kann, benötigt sie ein GitHub-Konto
und Schreibrechte für `cleo-25/stadttaubenhilfe-bernau`. Die Rechte werden in
GitHub unter `Settings > Collaborators` vergeben. Neue CMS-Editor:innen
brauchen keinen Netlify-Login.

Die Website und das CMS werden über Netlify ausgeliefert. Hostinger stellt in
dieser Konfiguration nur Domain, DNS und weitere Serverdienste bereit.

## Lokal testen

```bash
npm run dev
```

In einem zweiten Terminal im Ordner `web/`:

```bash
npx decap-server
```

Dann die Website öffnen und `/admin/` aufrufen:

`http://localhost:4321/admin/`

Wenn der Astro-Server auf einem anderen Port läuft, entsprechend diesen Port
verwenden. Der lokale Decap-Server erlaubt nur lokales Testen. Für echte
Bearbeitung durch mehrere Personen wird der Live-Login über GitHub verwendet.

## Was im CMS wo bearbeitet wird

- `Einstellungen`: Logo, Vereinsname, Kontakt, Social Links, Menü und Footer.
- `Landingpages > Neue Startseite / Entwurf`: Hero, Bilder, Mission, Arbeit,
  Notfallbereich, Zahlen, Geschichten, Unterstützen und Aktuelles.
- `Seiten > Projekte`: Projektseite mit Projektkarten und Bildern.
- `Seiten > Fundtiere`: Schnellhilfe, Checkliste und Situationen.
- `Seiten > Wissen`: Wissensseite, Mythen/Fakten und Infoboxen.
- `Seiten > Galerie`: Galerie-Kategorien und einzelne Galeriebilder.

## Nach manuellen Code-Änderungen deployen

```bash
npm run build
```

Danach die Änderungen nach `redesign-2026` pushen. Netlify baut und
veröffentlicht den Produktionsstand automatisch.
