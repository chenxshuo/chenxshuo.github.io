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
  <div class="modern-page-hero-copy">
    <h1>Publications</h1>
    <p>Research on robust, safe, and multimodal AI systems.</p>
    <a class="modern-publications-scholar" href="https://scholar.google.com/citations?&user=BKvdGiwAAAAJ" target="_blank" rel="noopener">Google Scholar</a>
  </div>
  <div class="modern-publications-tools">
    <div class="modern-page-visual modern-page-visual--publications" aria-hidden="true">
      <svg viewBox="0 0 320 220" role="img">
        <path class="visual-fill-a" d="M68 82 L188 42 L244 74 L128 116 Z" />
        <path class="visual-fill-b" d="M50 114 L182 86 L270 126 L132 160 Z" />
        <path class="visual-fill-c" d="M76 154 L200 134 L250 164 L126 190 Z" />
        <path class="visual-stroke" d="M104 96 C132 70 171 71 199 92" />
        <path class="visual-stroke" d="M94 134 C136 125 179 130 221 146" />
        <path class="visual-stroke" d="M114 167 C141 154 175 154 208 170" />
        <path class="visual-thread" d="M158 28 C147 68 206 82 169 118 C135 149 183 160 158 204" />
        <circle class="visual-dot" cx="158" cy="28" r="4" />
        <circle class="visual-dot" cx="158" cy="204" r="4" />
      </svg>
    </div>
  </div>
</section>

<script src="{{ '/assets/js/bibsearch.js' | relative_url | bust_file_cache }}" type="module"></script>

<div class="modern-publications-table-head">
  <span>Date</span>
  <span>Tags</span>
  <span>Title</span>
  <label class="modern-publications-search" for="bibsearch">
    <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
    <input type="search" id="bibsearch" spellcheck="false" autocomplete="off" placeholder="Search">
  </label>
</div>

<div class="publications modern-publications-list">


{% bibliography -f {{ site.scholar.bibliography }} %}

</div>
