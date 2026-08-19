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

## Wichtig für Live-Bearbeitung

Auf einer reinen Hostinger-Static-Seite kann ein Browser keine Dateien auf dem
Server speichern. Dafür braucht das CMS eine Verbindung zu GitHub und einen
Auth-Dienst.

Empfohlener Weg:

1. Code in ein GitHub-Repository legen.
2. Netlify mit dem Repository verbinden.
3. Netlify Identity aktivieren.
4. Git Gateway aktivieren.
5. Benutzer einladen.
6. Änderungen im CMS speichern; Netlify baut die Website automatisch neu.

Wenn die Seite dauerhaft direkt auf dem Hostinger-VPS laufen soll, braucht es
statt Git Gateway ein eigenes Backend oder einen GitHub-Webhook/Deploy-Flow.

Kurz gesagt: Hostinger kann die fertige statische Website ausliefern. Das
bequeme Bearbeiten im Browser funktioniert am saubersten mit GitHub + Netlify
Identity/Git Gateway, weil Decap CMS die Änderungen dann als Git-Änderungen
speichert.

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
Bearbeitung durch mehrere Personen braucht es den Live-Login über Netlify
Identity/Git Gateway oder ein eigenes Backend.

## Was im CMS wo bearbeitet wird

- `Einstellungen`: Logo, Vereinsname, Kontakt, Social Links, Menü und Footer.
- `Landingpages > Neue Startseite / Entwurf`: Hero, Bilder, Mission, Arbeit,
  Notfallbereich, Zahlen, Geschichten, Unterstützen und Aktuelles.
- `Seiten > Projekte`: Projektseite mit Projektkarten und Bildern.
- `Seiten > Fundtiere`: Schnellhilfe, Checkliste und Situationen.
- `Seiten > Wissen`: Wissensseite, Mythen/Fakten und Infoboxen.
- `Seiten > Galerie`: Galerie-Kategorien und einzelne Galeriebilder.

## Nach manuellen Änderungen deployen

```bash
npm run build
```

Danach den Inhalt aus `dist/` auf den Webserver hochladen.
