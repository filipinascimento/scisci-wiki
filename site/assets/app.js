(() => {
  const root = document.body.dataset.root || "./";
  const dialog = document.querySelector("[data-search-dialog]");
  const searchInput = document.querySelector("[data-global-search]");
  const searchResults = document.querySelector("[data-search-results]");
  const searchStatus = document.querySelector("[data-search-status]");
  let conceptPromise;
  let pagefindPromise;

  const escapeHtml = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const loadConcepts = () => {
    if (!conceptPromise) conceptPromise = fetch(`${root}assets/concepts.json`).then((response) => {
      if (!response.ok) throw new Error("Search index could not be loaded.");
      return response.json();
    });
    return conceptPromise;
  };

  const loadPagefind = () => {
    if (!pagefindPromise) {
      const pagefindUrl = new URL(`${root}pagefind/pagefind.js`, window.location.href).href;
      pagefindPromise = import(pagefindUrl).then(async (pagefind) => {
        await pagefind.init();
        return pagefind;
      });
    }
    return pagefindPromise;
  };

  const normalized = (value) => String(value || "").toLocaleLowerCase();
  const searchable = (item) => normalized([
    item.title,
    item.summary,
    item.aliases.join(" "),
    item.firstPaper,
    item.latestPaper,
    item.doi,
    item.openalex,
    item.dimensions,
    item.id,
  ].join(" "));

  const scoreItem = (item, terms) => {
    const title = normalized(item.title);
    const aliases = normalized(item.aliases.join(" "));
    const haystack = searchable(item);
    if (!terms.every((term) => haystack.includes(term))) return -1;
    return terms.reduce((score, term) => score + (title.startsWith(term) ? 12 : 0) + (title.includes(term) ? 7 : 0) + (aliases.includes(term) ? 4 : 0) + 1, 0);
  };

  const categoryLabel = (category) => category.charAt(0).toUpperCase() + category.slice(1);
  const resultHtml = (item) => `<a class="search-result" href="${root}${String(item.url).replace(/^\/+/, "")}">
    <div><span class="category-badge category-${escapeHtml(item.meta.category)}">${escapeHtml(categoryLabel(item.meta.category))}</span></div>
    <h3>${escapeHtml(item.meta.title)}</h3>
    <p>${item.excerpt}</p>
  </a>`;

  const openSearch = async () => {
    if (!dialog) return;
    dialog.showModal();
    document.body.classList.add("search-open");
    searchInput.focus();
    try { await loadPagefind(); } catch { searchStatus.textContent = "Search index could not be loaded."; }
  };

  document.querySelectorAll("[data-open-search]").forEach((button) => button.addEventListener("click", openSearch));
  dialog?.addEventListener("close", () => document.body.classList.remove("search-open"));
  dialog?.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  document.addEventListener("keydown", (event) => {
    const tag = document.activeElement?.tagName;
    if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(tag)) {
      event.preventDefault();
      openSearch();
    }
  });

  searchInput?.addEventListener("input", async () => {
    const query = searchInput.value.trim();
    if (query.length < 2) {
      searchStatus.textContent = "Type at least two characters.";
      searchResults.innerHTML = "";
      return;
    }
    try {
      const pagefind = await loadPagefind();
      const search = await pagefind.search(query);
      const matches = await Promise.all(search.results.slice(0, 12).map((result) => result.data()));
      const normalizedQuery = normalized(query);
      matches.sort((a, b) => {
        const aTitle = normalized(a.meta.title);
        const bTitle = normalized(b.meta.title);
        const aRank = aTitle === normalizedQuery ? 0 : aTitle.startsWith(normalizedQuery) ? 1 : 2;
        const bRank = bTitle === normalizedQuery ? 0 : bTitle.startsWith(normalizedQuery) ? 1 : 2;
        return aRank - bRank;
      });
      searchStatus.textContent = search.results.length ? `${search.results.length.toLocaleString()} matching concept${search.results.length === 1 ? "" : "s"}` : "No matching concepts.";
      searchResults.innerHTML = matches.map(resultHtml).join("");
    } catch {
      searchStatus.textContent = "Search is temporarily unavailable.";
      searchResults.innerHTML = "";
    }
  });

  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");
  navToggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelector("[data-copy-url]")?.addEventListener("click", async (event) => {
    await navigator.clipboard.writeText(window.location.href);
    const button = event.currentTarget;
    const previous = button.textContent;
    button.textContent = "Link copied";
    setTimeout(() => { button.textContent = previous; }, 1400);
  });

  const directory = document.querySelector("[data-directory]");
  if (directory) {
    const queryInput = directory.querySelector("[data-directory-query]");
    const results = directory.querySelector("[data-directory-results]");
    const summary = directory.querySelector("[data-directory-summary]");
    const loadMore = directory.querySelector("[data-load-more]");
    const filters = [...directory.querySelectorAll("[data-category-filter]")];
    let activeCategory = "all";
    let visible = 60;

    const renderDirectory = async () => {
      const concepts = await loadConcepts();
      const query = normalized(queryInput.value.trim());
      const terms = query.split(/\s+/).filter(Boolean);
      const filtered = concepts.filter((item) => (activeCategory === "all" || item.category === activeCategory) && (!terms.length || terms.every((term) => searchable(item).includes(term))));
      const shown = filtered.slice(0, visible);
      summary.textContent = `${filtered.length.toLocaleString()} concept${filtered.length === 1 ? "" : "s"}`;
      results.innerHTML = shown.map((item) => `<a class="directory-entry" href="${root}${item.route}">
        <span class="category-badge category-${escapeHtml(item.category)}">${escapeHtml(item.categoryLabel)}</span>
        <div><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.summary)}</p></div>
        <span>${escapeHtml(item.firstYear)}</span>
      </a>`).join("");
      loadMore.hidden = shown.length >= filtered.length;
    };

    filters.forEach((filter) => filter.addEventListener("click", () => {
      filters.forEach((button) => button.classList.remove("active"));
      filter.classList.add("active");
      activeCategory = filter.dataset.categoryFilter;
      visible = 60;
      renderDirectory();
    }));
    queryInput.addEventListener("input", () => { visible = 60; renderDirectory(); });
    loadMore.addEventListener("click", () => { visible += 60; renderDirectory(); });
    renderDirectory();
  }

  const canvas = document.querySelector("[data-network-canvas]");
  if (canvas && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const context = canvas.getContext("2d");
    let animationFrame;
    const nodes = Array.from({ length: 54 }, (_, index) => ({
      x: ((index * 47) % 101) / 100,
      y: ((index * 71) % 97) / 96,
      r: index % 9 === 0 ? 4 : index % 4 === 0 ? 2.5 : 1.5,
      vx: ((index % 5) - 2) * 0.000015,
      vy: (((index * 3) % 5) - 2) * 0.000012,
    }));
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * ratio);
      canvas.height = Math.round(rect.height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);
      nodes.forEach((node) => {
        node.x = (node.x + node.vx + 1) % 1;
        node.y = (node.y + node.vy + 1) % 1;
      });
      context.lineWidth = 0.7;
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = (nodes[i].x - nodes[j].x) * width;
          const dy = (nodes[i].y - nodes[j].y) * height;
          const distance = Math.hypot(dx, dy);
          if (distance < 145) {
            context.strokeStyle = `rgba(0, 127, 115, ${0.15 * (1 - distance / 145)})`;
            context.beginPath();
            context.moveTo(nodes[i].x * width, nodes[i].y * height);
            context.lineTo(nodes[j].x * width, nodes[j].y * height);
            context.stroke();
          }
        }
      }
      nodes.forEach((node, index) => {
        context.fillStyle = index % 5 === 0 ? "rgba(207,77,50,0.35)" : "rgba(0,127,115,0.3)";
        context.beginPath();
        context.arc(node.x * width, node.y * height, node.r, 0, Math.PI * 2);
        context.fill();
      });
      animationFrame = requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener("resize", resize);
    draw();
    window.addEventListener("pagehide", () => cancelAnimationFrame(animationFrame));
  }
})();
