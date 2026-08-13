import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const siteRoot = path.join(repoRoot, process.env.SCISCI_SITE_OUTPUT || "_site");
const htmlFiles = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(target);
    else if (entry.name.endsWith(".html")) htmlFiles.push(target);
  }
}

await walk(siteRoot);
const errors = [];

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  if (!html.includes("<main")) errors.push(`${path.relative(siteRoot, file)}: missing main landmark`);
  if (!html.includes("<title>")) errors.push(`${path.relative(siteRoot, file)}: missing title`);
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (/^(https?:|mailto:|#)/.test(href)) continue;
    const clean = href.split("#")[0].split("?")[0];
    if (!clean) continue;
    const resolved = path.resolve(path.dirname(file), clean);
    const target = clean.endsWith("/") ? path.join(resolved, "index.html") : resolved;
    try {
      await readFile(target);
    } catch {
      errors.push(`${path.relative(siteRoot, file)}: broken href ${href}`);
    }
  }
}

const expectedMinimum = 2820 + 12;
if (htmlFiles.length < expectedMinimum) errors.push(`expected at least ${expectedMinimum} HTML files, found ${htmlFiles.length}`);

if (errors.length) {
  console.error(errors.slice(0, 100).join("\n"));
  console.error(`Site validation failed with ${errors.length} error(s).`);
  process.exit(1);
}

console.log(`Site validation OK: ${htmlFiles.length} HTML pages checked.`);
