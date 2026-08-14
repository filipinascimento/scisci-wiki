import { readFile, writeFile, mkdir, rm, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { parse } from "csv-parse/sync";
import { marked } from "marked";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.resolve(repoRoot, process.env.SCISCI_SITE_OUTPUT || "_site");
const generatedOn = process.env.SCISCI_BUILD_DATE || new Date().toISOString().slice(0, 10);

const categoryMeta = {
  mechanisms: {
    label: "Mechanisms",
    description: "Processes that generate patterns in scientific careers, teams, attention, and discovery.",
    color: "#007f73",
  },
  measures: {
    label: "Measures",
    description: "Indicators and operational definitions used to make scientific dynamics observable.",
    color: "#cf4d32",
  },
  methods: {
    label: "Methods",
    description: "Analytical designs, models, and workflows for studying science as a system.",
    color: "#3568b8",
  },
  representations: {
    label: "Representations",
    description: "Networks, maps, embeddings, and other formal views of scholarly structure.",
    color: "#946200",
  },
  datasets: {
    label: "Datasets",
    description: "Scholarly data sources, linked layers, and research-ready corpora.",
    color: "#7b4ab4",
  },
  validations: {
    label: "Validations",
    description: "Robustness checks, audits, replications, and limits on interpretation.",
    color: "#bd3562",
  },
  hypotheses: {
    label: "Hypotheses",
    description: "Proposed explanations and testable mechanisms that remain open.",
    color: "#287f45",
  },
  consequences: {
    label: "Consequences",
    description: "Downstream implications for scientific institutions, policy, and progress.",
    color: "#9d3d20",
  },
};

const themes = [
  {
    slug: "impact-recognition",
    title: "Impact & recognition",
    description: "How attention accumulates, decays, and sometimes arrives late.",
    concepts: ["cumulative_advantage", "sleeping_beauty", "disruption_index", "beauty_coefficient"],
  },
  {
    slug: "collaboration-teams",
    title: "Collaboration & teams",
    description: "Team assembly, coauthorship structure, and collective advantage.",
    concepts: ["coauthorship_networks", "team_size_disruption", "team_impact_advantage", "international_collaboration_networks"],
  },
  {
    slug: "careers-inequality",
    title: "Careers & inequality",
    description: "Mobility, prestige, cumulative gaps, and unequal scientific opportunity.",
    concepts: ["scientific_mobility", "institutional_prestige_hierarchy", "gender_race_stratification", "hot_streaks"],
  },
  {
    slug: "novelty-discovery",
    title: "Novelty & discovery",
    description: "Search, recombination, disruption, and the conditions for new ideas.",
    concepts: ["disruption_index", "new_journal_pair_novelty", "funding_autonomy_exploration", "sleeping_beauty"],
  },
  {
    slug: "evaluation-funding",
    title: "Evaluation & funding",
    description: "Peer review, indicators, incentives, and resource allocation.",
    concepts: ["funding_autonomy_exploration", "reviewer_proposal_intellectual_distance", "journal_impact_factor", "disruption_index"],
  },
  {
    slug: "open-reproducible",
    title: "Open & reproducible science",
    description: "Preregistration, replication, retraction, and scientific self-correction.",
    concepts: ["preregistration_registered_reports", "retractions_self_correction", "retraction_notice_transparency", "direct_replication_protocol"],
  },
  {
    slug: "scholarly-infrastructure",
    title: "Scholarly infrastructure",
    description: "The databases, identifiers, and linkages behind science-of-science research.",
    concepts: ["openalex", "dimensions", "sciscinet_v2", "scholarly_data_lakes"],
  },
  {
    slug: "science-policy",
    title: "Science policy",
    description: "Evidence for designing institutions, incentives, and research portfolios.",
    concepts: ["active_science_policy_experimentation", "science_technology_diversity_governance", "funding_autonomy_exploration", "policy_document_attention"],
  },
];

marked.setOptions({ gfm: true, breaks: false });

function posix(value) {
  return value.split(path.sep).join("/");
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function stripMarkdown(value = "") {
  return value
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[`*_>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function splitAliases(value = "") {
  return value.split(";").map((item) => item.trim()).filter(Boolean);
}

function conceptOutput(row) {
  return `concepts/${row.category}/${row.concept_id}/index.html`;
}

function categoryOutput(category) {
  return `categories/${category}/index.html`;
}

function hrefFrom(currentOutput, targetOutput) {
  const fromDir = path.posix.dirname(currentOutput);
  let relative = path.posix.relative(fromDir, targetOutput);
  if (relative.endsWith("index.html")) relative = relative.slice(0, -"index.html".length);
  if (!relative) return "./";
  if (!relative.startsWith(".")) relative = `./${relative}`;
  return relative;
}

function rootFrom(currentOutput) {
  const depth = path.posix.dirname(currentOutput).split("/").filter((part) => part && part !== ".").length;
  return depth ? "../".repeat(depth) : "./";
}

function sectionId(title) {
  return title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function parseConceptMarkdown(markdown) {
  const title = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() || "Untitled concept";
  const headings = [...markdown.matchAll(/^##\s+(.+)$/gm)];
  const sections = headings.map((match, index) => {
    const bodyStart = match.index + match[0].length;
    const bodyEnd = headings[index + 1]?.index ?? markdown.length;
    return { title: match[1].trim(), body: markdown.slice(bodyStart, bodyEnd).trim() };
  });
  const byTitle = Object.fromEntries(sections.map((section) => [section.title, section.body]));
  return {
    title,
    sections,
    summary: stripMarkdown(byTitle.Summary || ""),
    references: byTitle.References || "",
  };
}

function referenceDoiUrl(doi) {
  return doi && doi !== "unknown" ? `https://doi.org/${doi}` : "";
}

function openAlexUrl(id) {
  return id && id !== "unknown" ? `https://openalex.org/${id}` : "";
}

function dimensionsUrl(id) {
  return id && id !== "unknown" ? `https://app.dimensions.ai/details/publication/${id}` : "";
}

async function writeOutput(relativePath, content) {
  const absolutePath = path.join(outputRoot, relativePath);
  await mkdir(path.dirname(absolutePath), { recursive: true });
  await writeFile(absolutePath, content, "utf8");
}

function rewriteInternalLinks(markdown, row, currentOutput, byPath) {
  return markdown.replace(/\[([^\]]+)\]\(([^)]+\.md)(#[^)]+)?\)/g, (full, label, target, hash = "") => {
    const sourceDir = path.posix.dirname(row.page_path);
    const normalizedTarget = path.posix.normalize(path.posix.join(sourceDir, target));
    const targetRow = byPath.get(normalizedTarget);
    if (!targetRow) return full;
    return `[${label}](${hrefFrom(currentOutput, conceptOutput(targetRow))}${hash})`;
  });
}

function renderMarkdown(markdown, row, currentOutput, byPath) {
  return marked.parse(rewriteInternalLinks(markdown, row, currentOutput, byPath));
}

function renderBadge(category) {
  const meta = categoryMeta[category];
  return `<span class="category-badge category-${escapeHtml(category)}">${escapeHtml(meta?.label || category)}</span>`;
}

function renderHead({ title, description, currentOutput, canonicalPath = "" }) {
  const root = rootFrom(currentOutput);
  const canonical = `https://filipinascimento.github.io/scisci-wiki/${canonicalPath}`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="theme-color" content="#f7f7f3">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="${root}assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="${root}assets/styles.css">
  <title>${escapeHtml(title)} · SciSci Wiki</title>
</head>`;
}

function renderHeader(currentOutput) {
  const root = rootFrom(currentOutput);
  return `<a class="skip-link" href="#main-content">Skip to content</a>
<header class="site-header">
  <a class="brand" href="${root}" aria-label="SciSci Wiki home">
    <span class="brand-mark" aria-hidden="true">S</span>
    <span>SciSci Wiki</span>
  </a>
  <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" data-nav-toggle><span aria-hidden="true">☰</span></button>
  <nav class="site-nav" aria-label="Primary navigation" data-site-nav>
    <a href="${root}browse/">Browse</a>
    <a href="${root}explore/">Explore</a>
    <a href="${root}about/">About</a>
    <a href="https://github.com/filipinascimento/scisci-wiki">GitHub</a>
  </nav>
  <button class="header-search-button" type="button" data-open-search aria-label="Open search">
    <span aria-hidden="true">⌕</span><span>Search</span><kbd>/</kbd>
  </button>
</header>`;
}

function renderSearchDialog(currentOutput) {
  const root = rootFrom(currentOutput);
  return `<dialog class="search-dialog" data-search-dialog data-root="${root}">
  <form method="dialog" class="search-dialog-head">
    <label for="global-search">Search all concepts</label>
    <button type="submit" aria-label="Close search">×</button>
  </form>
  <div class="search-field-wrap">
    <span aria-hidden="true">⌕</span>
    <input id="global-search" type="search" autocomplete="off" placeholder="Try ‘cumulative advantage’ or a DOI" data-global-search>
  </div>
  <div class="search-status" role="status" aria-live="polite" data-search-status>Type at least two characters.</div>
  <div class="search-results" data-search-results></div>
</dialog>`;
}

function renderFooter(currentOutput) {
  const root = rootFrom(currentOutput);
  return `<footer class="site-footer">
  <div><strong>SciSci Wiki</strong><span>A living map of how science works.</span></div>
  <nav aria-label="Footer navigation">
    <a href="${root}about/">Methodology</a>
    <a href="${root}browse/">All concepts</a>
    <a href="https://github.com/filipinascimento/scisci-wiki">Source on GitHub</a>
  </nav>
  <small>Built ${escapeHtml(generatedOn)} from full-text-grounded concept notes.</small>
</footer>
<script src="${root}assets/app.js" defer></script>`;
}

function renderPageShell({ title, description, currentOutput, canonicalPath, body, bodyClass = "" }) {
  return `${renderHead({ title, description, currentOutput, canonicalPath })}
<body class="${escapeHtml(bodyClass)}" data-root="${rootFrom(currentOutput)}">
${renderHeader(currentOutput)}
${body}
${renderFooter(currentOutput)}
${renderSearchDialog(currentOutput)}
</body>
</html>`;
}

function yearValue(value) {
  return /^\d{4}$/.test(value || "") ? value : "Unknown";
}

function renderExternalIdentifiers(row) {
  const links = [];
  const doiUrl = referenceDoiUrl(row.primary_reference_doi);
  const oaUrl = openAlexUrl(row.openalex_id);
  const dimUrl = dimensionsUrl(row.dimensions_id);
  if (doiUrl) links.push(`<a href="${doiUrl}" rel="noopener">DOI <span aria-hidden="true">↗</span></a>`);
  if (oaUrl) links.push(`<a href="${oaUrl}" rel="noopener">OpenAlex <span aria-hidden="true">↗</span></a>`);
  if (dimUrl) links.push(`<a href="${dimUrl}" rel="noopener">Dimensions <span aria-hidden="true">↗</span></a>`);
  return links.length ? `<div class="identifier-links">${links.join("")}</div>` : "";
}

function renderTitleMarkup(title) {
  return escapeHtml(title).replace(/\bSciSciNet\b/g, '<span class="title-accent">SciSci</span>Net');
}

function renderConceptCard(row, currentOutput, parsedById) {
  const parsed = parsedById.get(row.concept_id);
  return `<article class="concept-card" data-category="${escapeHtml(row.category)}">
    <div>${renderBadge(row.category)}<span class="concept-year">${escapeHtml(yearValue(row.first_seen_year))}</span></div>
    <h3><a href="${hrefFrom(currentOutput, conceptOutput(row))}">${escapeHtml(row.concept)}</a></h3>
    <p>${escapeHtml(parsed?.summary || "")}</p>
    <span class="text-link">Read concept <span aria-hidden="true">→</span></span>
  </article>`;
}

function validThemeConcepts(theme, byId) {
  return theme.concepts.map((id) => byId.get(id)).filter(Boolean);
}

function renderHome(rows, byId, parsedById) {
  const currentOutput = "index.html";
  const counts = Object.fromEntries(Object.keys(categoryMeta).map((category) => [category, rows.filter((row) => row.category === category).length]));
  const representedYears = rows.flatMap((row) => [row.first_seen_year, row.latest_seen_year]).map(Number).filter(Number.isFinite);
  const literatureSpan = `${Math.min(...representedYears)}–${Math.max(...representedYears)}`;
  const featured = ["cumulative_advantage", "disruption_index", "coauthorship_networks", "scientific_mobility", "preregistration_registered_reports", "openalex"]
    .map((id) => byId.get(id)).filter(Boolean);
  const body = `<main id="main-content">
  <section class="home-hero" aria-labelledby="hero-title">
    <canvas class="hero-network" data-network-canvas aria-hidden="true"></canvas>
    <div class="hero-content">
      <p class="eyebrow">A field guide to the science of science</p>
      <h1 id="hero-title">SciSci Wiki</h1>
      <p class="hero-lede">Explore ${rows.length.toLocaleString("en-US")} linked concepts about how science is organized, measured, evaluated, and changed.</p>
      <button class="hero-search" type="button" data-open-search>
        <span aria-hidden="true">⌕</span>
        <span>Search concepts, measures, papers, or identifiers</span>
        <kbd>/</kbd>
      </button>
      <div class="hero-facts" aria-label="Collection summary">
        <span><strong>${rows.length.toLocaleString("en-US")}</strong> concepts</span>
        <span><strong>${Object.keys(categoryMeta).length}</strong> categories</span>
        <span><strong>${literatureSpan}</strong> sources currently represented</span>
      </div>
    </div>
  </section>

  <section class="section-band category-band" aria-labelledby="category-title">
    <div class="section-heading">
      <div><p class="eyebrow">The building blocks</p><h2 id="category-title">Browse by concept type</h2></div>
      <a class="text-link" href="./browse/">View full directory <span aria-hidden="true">→</span></a>
    </div>
    <div class="category-grid">
      ${Object.entries(categoryMeta).map(([category, meta]) => `<a class="category-item category-${category}" href="${hrefFrom(currentOutput, categoryOutput(category))}">
        <span class="category-count">${counts[category].toLocaleString("en-US")}</span>
        <h3>${escapeHtml(meta.label)}</h3>
        <p>${escapeHtml(meta.description)}</p>
      </a>`).join("")}
    </div>
  </section>

  <section class="section-band themes-band" aria-labelledby="themes-title">
    <div class="section-heading"><div><p class="eyebrow">Curated paths</p><h2 id="themes-title">Enter through a question</h2></div></div>
    <div class="theme-list">
      ${themes.map((theme, index) => {
        const concepts = validThemeConcepts(theme, byId);
        return `<article class="theme-row">
          <span class="theme-number">${String(index + 1).padStart(2, "0")}</span>
          <div><h3>${escapeHtml(theme.title)}</h3><p>${escapeHtml(theme.description)}</p></div>
          <div class="theme-concepts">${concepts.map((row) => `<a href="${hrefFrom(currentOutput, conceptOutput(row))}">${escapeHtml(row.concept)}</a>`).join("")}</div>
        </article>`;
      }).join("")}
    </div>
  </section>

  <section class="section-band featured-band" aria-labelledby="featured-title">
    <div class="section-heading"><div><p class="eyebrow">Good places to begin</p><h2 id="featured-title">Foundational concepts</h2></div></div>
    <div class="concept-card-grid">${featured.map((row) => renderConceptCard(row, currentOutput, parsedById)).join("")}</div>
  </section>

  <section class="method-band">
    <div><p class="eyebrow">Built from the literature</p><h2>Evidence before abstraction.</h2></div>
    <p>Each page is grounded in verified full text and records operationalizations, empirical signatures, caveats, related concepts, and persistent scholarly identifiers.</p>
    <a class="button-link" href="./about/">Read the methodology <span aria-hidden="true">→</span></a>
  </section>
  </main>`;
  return renderPageShell({
    title: "A field guide to the science of science",
    description: "Explore linked, full-text-grounded concepts about how science works.",
    currentOutput,
    canonicalPath: "",
    body,
    bodyClass: "home-page",
  });
}

function renderBrowse(rows) {
  const currentOutput = "browse/index.html";
  const body = `<main id="main-content" class="directory-page">
  <header class="page-intro compact-intro">
    <p class="eyebrow">Concept directory</p>
    <h1>Browse the field</h1>
    <p>Filter ${rows.length.toLocaleString("en-US")} concepts by type, title, alias, paper, year, or identifier.</p>
  </header>
  <section class="directory-tools" data-directory data-root="${rootFrom(currentOutput)}">
    <div class="directory-search"><label for="directory-query">Search directory</label><input id="directory-query" type="search" placeholder="Filter concepts…" data-directory-query></div>
    <div class="filter-row" role="group" aria-label="Filter by category">
      <button type="button" class="active" data-category-filter="all">All <span>${rows.length.toLocaleString("en-US")}</span></button>
      ${Object.entries(categoryMeta).map(([category, meta]) => `<button type="button" data-category-filter="${category}">${escapeHtml(meta.label)} <span>${rows.filter((row) => row.category === category).length}</span></button>`).join("")}
    </div>
    <div class="directory-summary" aria-live="polite" data-directory-summary></div>
    <div class="directory-results" data-directory-results></div>
    <button class="load-more" type="button" data-load-more hidden>Show more</button>
    <noscript><p>JavaScript is required for the combined directory. Browse the category pages below.</p><ul>${Object.entries(categoryMeta).map(([category, meta]) => `<li><a href="${hrefFrom(currentOutput, categoryOutput(category))}">${meta.label}</a></li>`).join("")}</ul></noscript>
  </section>
  </main>`;
  return renderPageShell({ title: "Browse concepts", description: "Browse the complete SciSci Wiki concept directory.", currentOutput, canonicalPath: "browse/", body, bodyClass: "browse-page" });
}

function renderCategory(category, rows, parsedById) {
  const currentOutput = categoryOutput(category);
  const meta = categoryMeta[category];
  const sorted = [...rows].sort((a, b) => a.concept.localeCompare(b.concept));
  const body = `<main id="main-content" class="category-page category-${category}">
    <header class="page-intro category-intro">
      <a class="breadcrumb" href="${hrefFrom(currentOutput, "browse/index.html")}">Concept directory</a>
      <p class="eyebrow">Concept type</p>
      <h1>${escapeHtml(meta.label)}</h1>
      <p>${escapeHtml(meta.description)}</p>
      <span class="large-count">${rows.length.toLocaleString("en-US")} entries</span>
    </header>
    <section class="alphabetical-list" aria-label="${escapeHtml(meta.label)} concepts">
      ${sorted.map((row) => `<article class="list-entry">
        <span>${escapeHtml(yearValue(row.first_seen_year))}</span>
        <div><h2><a href="${hrefFrom(currentOutput, conceptOutput(row))}">${escapeHtml(row.concept)}</a></h2><p>${escapeHtml(parsedById.get(row.concept_id)?.summary || "")}</p></div>
        <span aria-hidden="true">→</span>
      </article>`).join("")}
    </section>
  </main>`;
  return renderPageShell({ title: meta.label, description: meta.description, currentOutput, canonicalPath: `categories/${category}/`, body, bodyClass: "category-list-page" });
}

function renderConcept(row, parsed, byPath, byId, backlinks, similarities) {
  const currentOutput = conceptOutput(row);
  const aliases = splitAliases(row.aliases);
  const visibleSections = parsed.sections.filter((section) => section.title !== "Summary" && section.title !== "Metadata");
  const inbound = (backlinks.get(row.concept_id) || []).slice(0, 12);
  const similar = (similarities.get(row.concept_id) || []).slice(0, 5);
  const body = `<main id="main-content" class="concept-page" data-pagefind-body>
    <div class="concept-layout">
      <aside class="concept-rail concept-context" aria-label="Concept context">
        <a class="breadcrumb" href="${hrefFrom(currentOutput, categoryOutput(row.category))}">${escapeHtml(categoryMeta[row.category].label)}</a>
        <dl class="metadata-list">
          <div><dt>First observed</dt><dd>${escapeHtml(row.first_seen_paper)} <span>${escapeHtml(yearValue(row.first_seen_year))}</span></dd></div>
          <div><dt>Latest observed</dt><dd>${escapeHtml(row.latest_seen_paper)} <span>${escapeHtml(yearValue(row.latest_seen_year))}</span></dd></div>
          ${aliases.length ? `<div><dt>Also known as</dt><dd>${aliases.map(escapeHtml).join("; ")}</dd></div>` : ""}
        </dl>
        ${renderExternalIdentifiers(row)}
        <button class="copy-link" type="button" data-copy-url>Copy page link</button>
      </aside>

      <article class="concept-article">
        <header class="concept-title-block">
          ${renderBadge(row.category)}
          <h1 data-pagefind-meta="title">${renderTitleMarkup(parsed.title)}</h1>
          <p class="concept-summary">${escapeHtml(parsed.summary)}</p>
          <span class="pagefind-meta" data-pagefind-meta="category">${escapeHtml(row.category)}</span>
          <span class="pagefind-meta" data-pagefind-meta="concept_id">${escapeHtml(row.concept_id)}</span>
        </header>
        ${visibleSections.map((section) => `<section id="${sectionId(section.title)}" class="article-section ${section.title === "Canonical Form" ? "canonical-section" : ""}">
          <h2>${escapeHtml(section.title)}</h2>
          <div class="prose">${renderMarkdown(section.body, row, currentOutput, byPath)}</div>
        </section>`).join("")}
      </article>

      <aside class="concept-rail concept-outline" aria-label="On this page">
        <strong>On this page</strong>
        <nav>${visibleSections.map((section) => `<a href="#${sectionId(section.title)}">${escapeHtml(section.title)}</a>`).join("")}</nav>
      </aside>
    </div>

    <section class="relationship-band" aria-labelledby="relationships-title">
      <div class="relationship-heading"><p class="eyebrow">Wiki connections</p><h2 id="relationships-title">Continue exploring</h2></div>
      <div class="relationship-columns">
        <div><h3>Pages that link here <span>${(backlinks.get(row.concept_id) || []).length}</span></h3>
          ${inbound.length ? `<ul>${inbound.map((sourceId) => { const source = byId.get(sourceId); return `<li>${renderBadge(source.category)}<a href="${hrefFrom(currentOutput, conceptOutput(source))}">${escapeHtml(source.concept)}</a></li>`; }).join("")}</ul>` : `<p>No inbound links have been recorded yet.</p>`}
        </div>
        <div><h3>Textually similar <span>${similar.length}</span></h3>
          ${similar.length ? `<ul>${similar.map((item) => { const target = byId.get(item.id); return `<li>${renderBadge(target.category)}<a href="${hrefFrom(currentOutput, conceptOutput(target))}">${escapeHtml(target.concept)}</a><small>${Math.round(item.score * 100)}% text similarity</small></li>`; }).join("")}</ul><p class="relationship-note">Similarity suggests reading paths; it is not evidence of a causal relationship.</p>` : `<p>No similarity suggestions are available.</p>`}
        </div>
      </div>
    </section>
  </main>`;
  return renderPageShell({ title: parsed.title, description: parsed.summary, currentOutput, canonicalPath: `concepts/${row.category}/${row.concept_id}/`, body, bodyClass: `concept-detail category-${row.category}` });
}

function renderExplore(rows, byId) {
  const currentOutput = "explore/index.html";
  const body = `<main id="main-content" class="explore-page">
    <header class="page-intro explore-intro"><p class="eyebrow">Curated reading paths</p><h1>Explore the knowledge map</h1><p>Start with a question, then move through linked mechanisms, measures, methods, data, and evidence.</p></header>
    <section class="theme-explorer">
      ${themes.map((theme, index) => {
        const concepts = validThemeConcepts(theme, byId);
        return `<article id="${theme.slug}" class="explore-theme">
          <div class="explore-theme-title"><span>${String(index + 1).padStart(2, "0")}</span><div><h2>${escapeHtml(theme.title)}</h2><p>${escapeHtml(theme.description)}</p></div></div>
          <ol>${concepts.map((row) => `<li><a href="${hrefFrom(currentOutput, conceptOutput(row))}">${escapeHtml(row.concept)}</a>${renderBadge(row.category)}</li>`).join("")}</ol>
        </article>`;
      }).join("")}
    </section>
    <section class="map-note"><div><p class="eyebrow">How to read the map</p><h2>Categories describe function. Links describe context.</h2></div><p>A concept can be a mechanism in one study and a validation target in another. The wiki uses a stable primary category for navigation while preserving cross-category links on every page.</p></section>
  </main>`;
  return renderPageShell({ title: "Explore", description: "Curated reading paths through the SciSci Wiki knowledge map.", currentOutput, canonicalPath: "explore/", body, bodyClass: "explore-page-body" });
}

function renderAbout(rows) {
  const currentOutput = "about/index.html";
  const body = `<main id="main-content" class="about-page">
    <header class="page-intro about-intro"><p class="eyebrow">About the project</p><h1>A living vocabulary for studying science.</h1><p>SciSci Wiki turns findings, mechanisms, measures, datasets, and validation practices from the science-of-science literature into linked, reusable concept pages.</p></header>
    <section class="about-grid">
      <article><span>01</span><h2>Full-text grounded</h2><p>Concepts are extracted from checked PDFs or verified HTML full text. Bibliographic identifiers are recorded only when verified.</p></article>
      <article><span>02</span><h2>Structured, not flattened</h2><p>Every page uses the same sections: definition, canonical form, uses, operationalization, evidence, caveats, links, and references.</p></article>
      <article><span>03</span><h2>Designed to evolve</h2><p>“First observed” and “latest observed” report the literature currently represented in the wiki. They are not claims of absolute priority and will change as coverage expands.</p></article>
    </section>
    <section class="prose-page">
      <h2>Collection scope</h2>
      <p>The current release contains ${rows.length.toLocaleString("en-US")} concepts across ${Object.keys(categoryMeta).length} functional categories. It includes adjacent work in network science, research policy, scholarly communication, innovation studies, and reproducibility when that work helps explain scientific systems.</p>
      <h2>Reference convention</h2>
      <p>References use a consistent APA-like format. DOI, OpenAlex, Dimensions, SciSciNet, and WoS identifiers are included when verified; unknown values are never guessed.</p>
      <h2>Public-data boundary</h2>
      <p>The public repository contains concept notes, compact indexes, source manifests, and reproducible build tools. Downloaded PDFs, subscription-derived full text, machine-specific paths, and local scholarly-data snapshots are excluded.</p>
      <h2>Interpretation</h2>
      <p>This is a research map, not a settled ontology. Category assignments help navigation, text-similarity links suggest possible reading paths, and all causal or evaluative claims should be interpreted through the evidence and caveats on the underlying concept page.</p>
      <h2>Contributing</h2>
      <p>Changes are tracked in Git. The source repository includes the concept template, validation scripts, progress ledger, and paper-ingestion workflow used to extend the collection.</p>
      <p><a class="button-link" href="https://github.com/filipinascimento/scisci-wiki">View the source repository <span aria-hidden="true">↗</span></a></p>
    </section>
  </main>`;
  return renderPageShell({ title: "About", description: "Methodology, scope, and interpretation guidance for SciSci Wiki.", currentOutput, canonicalPath: "about/", body, bodyClass: "about-page-body" });
}

function collectBacklinks(rows, markdownById, byPath) {
  const backlinks = new Map(rows.map((row) => [row.concept_id, []]));
  for (const row of rows) {
    const markdown = markdownById.get(row.concept_id);
    const linkPattern = /\[[^\]]+\]\(([^)]+\.md)(?:#[^)]+)?\)/g;
    let match;
    const targets = new Set();
    while ((match = linkPattern.exec(markdown)) !== null) {
      const normalized = path.posix.normalize(path.posix.join(path.posix.dirname(row.page_path), match[1]));
      const target = byPath.get(normalized);
      if (target && target.concept_id !== row.concept_id) targets.add(target.concept_id);
    }
    for (const targetId of targets) backlinks.get(targetId).push(row.concept_id);
  }
  return backlinks;
}

async function loadSimilarities(byId) {
  const similarityPath = path.join(repoRoot, "index", "concept_similarity.csv");
  if (!existsSync(similarityPath)) return new Map();
  const records = parse(await readFile(similarityPath, "utf8"), { columns: true, skip_empty_lines: true });
  const similarities = new Map();
  for (const record of records) {
    if (!byId.has(record.concept_id_a) || !byId.has(record.concept_id_b)) continue;
    const score = Number(record.cosine_similarity);
    for (const [source, target] of [[record.concept_id_a, record.concept_id_b], [record.concept_id_b, record.concept_id_a]]) {
      if (!similarities.has(source)) similarities.set(source, []);
      similarities.get(source).push({ id: target, score, sharedTerms: record.shared_terms });
    }
  }
  for (const items of similarities.values()) items.sort((a, b) => b.score - a.score);
  return similarities;
}

function buildGraph(rows, backlinks, markdownById, byPath) {
  const degree = new Map(rows.map((row) => [row.concept_id, (backlinks.get(row.concept_id) || []).length]));
  const outbound = new Map();
  for (const row of rows) {
    const links = new Set();
    const linkPattern = /\[[^\]]+\]\(([^)]+\.md)(?:#[^)]+)?\)/g;
    let match;
    while ((match = linkPattern.exec(markdownById.get(row.concept_id))) !== null) {
      const target = byPath.get(path.posix.normalize(path.posix.join(path.posix.dirname(row.page_path), match[1])));
      if (target && target.concept_id !== row.concept_id) links.add(target.concept_id);
    }
    outbound.set(row.concept_id, links);
    degree.set(row.concept_id, (degree.get(row.concept_id) || 0) + links.size);
  }
  const selected = new Set();
  for (const category of Object.keys(categoryMeta)) {
    rows.filter((row) => row.category === category)
      .sort((a, b) => (degree.get(b.concept_id) || 0) - (degree.get(a.concept_id) || 0))
      .slice(0, 15).forEach((row) => selected.add(row.concept_id));
  }
  const nodes = rows.filter((row) => selected.has(row.concept_id)).map((row) => ({
    id: row.concept_id,
    title: row.concept,
    category: row.category,
    degree: degree.get(row.concept_id) || 0,
    route: `concepts/${row.category}/${row.concept_id}/`,
  }));
  const edges = [];
  for (const source of nodes) {
    for (const target of outbound.get(source.id) || []) {
      if (selected.has(target) && source.id < target) edges.push([source.id, target]);
    }
  }
  return { nodes, edges, categories: categoryMeta };
}

function searchDocument(row, parsed) {
  return {
    id: row.concept_id,
    title: row.concept,
    category: row.category,
    categoryLabel: categoryMeta[row.category].label,
    summary: parsed.summary,
    aliases: splitAliases(row.aliases),
    firstPaper: row.first_seen_paper,
    firstYear: row.first_seen_year,
    latestPaper: row.latest_seen_paper,
    latestYear: row.latest_seen_year,
    doi: row.primary_reference_doi,
    openalex: row.openalex_id,
    dimensions: row.dimensions_id,
    route: `concepts/${row.category}/${row.concept_id}/`,
  };
}

async function main() {
  const rows = parse(await readFile(path.join(repoRoot, "index", "concepts.csv"), "utf8"), {
    columns: true,
    skip_empty_lines: true,
    relax_quotes: false,
  });
  const byId = new Map(rows.map((row) => [row.concept_id, row]));
  const byPath = new Map(rows.map((row) => [row.page_path, row]));
  const markdownById = new Map();
  const parsedById = new Map();

  for (const row of rows) {
    const markdown = await readFile(path.join(repoRoot, row.page_path), "utf8");
    markdownById.set(row.concept_id, markdown);
    parsedById.set(row.concept_id, parseConceptMarkdown(markdown));
  }

  const backlinks = collectBacklinks(rows, markdownById, byPath);
  const similarities = await loadSimilarities(byId);
  await rm(outputRoot, { recursive: true, force: true });
  await mkdir(outputRoot, { recursive: true });
  await cp(path.join(repoRoot, "site", "assets"), path.join(outputRoot, "assets"), { recursive: true });

  await writeOutput("index.html", renderHome(rows, byId, parsedById));
  await writeOutput("browse/index.html", renderBrowse(rows));
  await writeOutput("explore/index.html", renderExplore(rows, byId));
  await writeOutput("about/index.html", renderAbout(rows));

  for (const [category] of Object.entries(categoryMeta)) {
    const categoryRows = rows.filter((row) => row.category === category);
    await writeOutput(categoryOutput(category), renderCategory(category, categoryRows, parsedById));
  }

  for (const row of rows) {
    await writeOutput(conceptOutput(row), renderConcept(row, parsedById.get(row.concept_id), byPath, byId, backlinks, similarities));
  }

  const searchDocs = rows.map((row) => searchDocument(row, parsedById.get(row.concept_id)));
  await writeOutput("assets/concepts.json", JSON.stringify(searchDocs));
  await writeOutput("assets/graph.json", JSON.stringify(buildGraph(rows, backlinks, markdownById, byPath)));
  await writeOutput(".nojekyll", "");
  await writeOutput("robots.txt", "User-agent: *\nAllow: /\nSitemap: https://filipinascimento.github.io/scisci-wiki/sitemap.xml\n");

  const sitemapUrls = ["", "browse/", "explore/", "about/", ...Object.keys(categoryMeta).map((category) => `categories/${category}/`), ...rows.map((row) => `concepts/${row.category}/${row.concept_id}/`)];
  await writeOutput("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map((url) => `  <url><loc>https://filipinascimento.github.io/scisci-wiki/${url}</loc></url>`).join("\n")}\n</urlset>\n`);

  console.log(`Built ${rows.length} concept pages and ${Object.keys(categoryMeta).length} category pages in ${outputRoot}`);
}

await main();
