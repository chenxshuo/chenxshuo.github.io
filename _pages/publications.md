---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 1
modern_publications: true
---

<section class="modern-publications-hero">
  <div>
    <h1>Publications</h1>
    <p>Research on robust, safe, and multimodal AI systems.</p>
  </div>
  <div class="modern-publications-tools">
    <label class="modern-publications-search" for="bibsearch">
      <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
      <input type="search" id="bibsearch" spellcheck="false" autocomplete="off" placeholder="Search">
    </label>
    <a class="modern-publications-scholar" href="https://scholar.google.com/citations?&user=BKvdGiwAAAAJ" target="_blank" rel="noopener">Google Scholar</a>
  </div>
</section>

<script src="{{ '/assets/js/bibsearch.js' | relative_url | bust_file_cache }}" type="module"></script>

<div class="modern-publications-table-head" aria-hidden="true">
  <span>Date</span>
  <span>Tags</span>
  <span>Title</span>
</div>

<div class="publications modern-publications-list">


{% bibliography -f {{ site.scholar.bibliography }} %}

</div>
