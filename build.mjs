import { cp, mkdir, rm, writeFile } from "node:fs/promises";

/**
 * Збірка статичного сайту у форматі Vercel Build Output API (.vercel/output).
 * Просто копіює index.html / styles.css / app.js / public у static + пише config.
 * Жодних залежностей — потрібен лише Node.
 */

await rm(".vercel/output", { recursive: true, force: true });
await mkdir(".vercel/output/static/public", { recursive: true });

await cp("index.html", ".vercel/output/static/index.html");
await cp("styles.css", ".vercel/output/static/styles.css");
await cp("app.js", ".vercel/output/static/app.js");
await cp("robots.txt", ".vercel/output/static/robots.txt");
await cp("sitemap.xml", ".vercel/output/static/sitemap.xml");
await cp("public/kvitka", ".vercel/output/static/public/kvitka", { recursive: true });

await writeFile(
  ".vercel/output/config.json",
  JSON.stringify(
    {
      version: 3,
      routes: [{ handle: "filesystem" }, { src: "/.*", dest: "/index.html" }],
      // фото не змінюються без зміни ?v= у коді → можна кешувати надовго
      headers: [
        {
          source: "/public/(.*)",
          headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }]
        }
      ]
    },
    null,
    2
  )
);

console.log("✓ .vercel/output готовий");
