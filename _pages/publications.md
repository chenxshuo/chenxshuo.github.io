---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 1
---

Please also check the [Google Scholar](https://scholar.google.com/citations?&user=BKvdGiwAAAAJ) for a comprehensive list.

{% include bib_search.liquid %}
<script src="{{ '/assets/js/bibsearch.js' | relative_url | bust_file_cache }}" type="module"></script>
<input type="text" id="bibsearch" spellcheck="false" autocomplete="off" class="search bibsearch-form-input" placeholder="Type to Filter">

<div class="publications">


{% bibliography -f {{ site.scholar.bibliography }} %}

</div>
