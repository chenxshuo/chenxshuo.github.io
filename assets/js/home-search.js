(() => {
  const initializeSearch = () => {
    const input = document.querySelector("[data-modern-home-search]");
    const status = document.querySelector("[data-modern-home-search-status]");
    const entries = Array.from(document.querySelectorAll(".modern-home-search-item"));

    if (!input || !status || entries.length === 0) return;

    const updateResults = () => {
      const query = input.value.trim().toLowerCase();
      let visibleCount = 0;

      entries.forEach((entry) => {
        const matches = !query || entry.textContent.toLowerCase().includes(query);
        entry.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      status.textContent = query
        ? `${visibleCount} ${visibleCount === 1 ? "entry" : "entries"} found`
        : `Showing ${entries.length} entries`;
    };

    input.addEventListener("input", updateResults);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeSearch, { once: true });
  } else {
    initializeSearch();
  }
})();
