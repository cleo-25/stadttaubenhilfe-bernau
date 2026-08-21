const pages = [
  "",
  "projekte",
  "fundtiere",
  "wissen",
  "materialien",
  "galerie",
  "mitmachen",
  "spenden",
  "kontakt",
  "impressum",
  "datenschutz"
];

export const prerender = true;

export function GET({ site }: { site?: URL }) {
  const base = site ?? new URL("https://stadttaubenhilfe-bernau.de");
  const urls = pages
    .map((page) => {
      const loc = new URL(`/${page}`, base).toString();
      return `  <url><loc>${loc}</loc></url>`;
    })
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
