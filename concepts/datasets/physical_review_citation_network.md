# Physical Review citation network

## Summary

The Physical Review citation network is a bounded citation graph of papers in the American Physical Society Physical Review journal family and their citations to other Physical Review papers.

## Canonical Form

- Unit of analysis: Physical Review paper, internal citation edge, journal family, publication year, or citation-rank benchmark.
- Typical representation: directed paper citation network with publication-year metadata and in-degree/out-degree distributions.
- Data target: a long-run, discipline-bounded citation graph for physics impact, aging, and network-ranking studies.
- Empirical signature: a large internal citation network that covers a substantial but incomplete fraction of total citations to highly cited Physical Review papers.

## Uses in Science of Science

- Serves as a benchmark corpus for [citation PageRank](../measures/citation_pagerank.md), [Google number](../measures/google_number.md), and recursive citation-ranking studies.
- Supports audits of [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md) and [Physical Review internal-citation coverage](../validations/physical_review_internal_citation_coverage.md) because it is an internal-journal-family graph, not a full scholarly citation universe.
- Provides a disciplinary comparison point for [citation networks](../representations/citation_networks.md), [citation distribution scaling](../measures/citation_distribution_scaling.md), and citation-aging work.
- Has a journal-specific citation-count predecessor in [Physical Review D citation-distribution panel](physical_review_d_citation_distribution_panel.md), which supports distribution and cohort-age diagnostics rather than a full directed citation network.
- Has a mobility-panel counterpart in [Physical Review mobility panel](physical_review_mobility_panel.md), where APS papers are linked to author affiliations and career moves.
- Also appears as a long citation-history corpus for [long-term citation prediction](../methods/long_term_citation_prediction.md), where the emphasis is paper-level temporal prediction rather than graph ranking.

## Operationalization

- Collect all papers in the Physical Review journal family over the chosen time span.
- Construct directed citation edges where Physical Review papers cite other Physical Review papers.
- Preserve publication year, citation count, reference-list length, and journal metadata.
- Report coverage limits, especially the distinction between internal APS citations and all citations received from outside the journal family.
- Inspect document-type and review-journal tails with [review-article out-degree-tail caveat](../validations/review_article_outdegree_tail_caveat.md) before using reference-list length in recursive metrics.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) uses a Physical Review citation network with 353,268 nodes covering articles from 1893 through June 2003.
- The same full text reports 3,110,839 links representing citations from Physical Review articles to other Physical Review articles.
- Chen et al. note that these internal citations represent only about one-fifth to one-third of all citations for highly cited papers, making coverage an explicit limitation of the benchmark.
- The same full text plots in-degree and out-degree distributions and notes that Reviews of Modern Physics creates a broad out-degree tail.
- Verified full-text evidence from Wang, Song, and Barabasi (2013) uses a Physical Review corpus of 463,348 papers published between 1893 and 2010 to study paper-level citation histories and long-term impact prediction.
- Wang et al. use this corpus to compare fitted citation envelopes, 30-year prediction accuracy, and second-act citation failures.

## Caveats

- The graph is discipline- and publisher-bounded; it should not be treated as all physics or all science.
- External citations into Physical Review papers are missing unless an outside source is merged.
- Citation practices, review articles, and journal-family boundaries can affect PageRank, citation counts, and age-bias diagnostics.

## Links

- [citation networks](../representations/citation_networks.md)
- [citation PageRank](../measures/citation_pagerank.md)
- [Google number](../measures/google_number.md)
- [Physical Review internal-citation coverage](../validations/physical_review_internal_citation_coverage.md)
- [review-article out-degree-tail caveat](../validations/review_article_outdegree_tail_caveat.md)
- [Google-number citation scaling check](../validations/google_number_citation_scaling_check.md)
- [PageRank-citation rank divergence](../measures/pagerank_citation_rank_divergence.md)
- [citation PageRank hidden gems](../validations/citation_pagerank_hidden_gems.md)
- [PageRank damping sensitivity](../validations/pagerank_damping_sensitivity.md)
- [PageRank age-bias check](../validations/pagerank_age_bias_check.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [Physical Review D citation-distribution panel](physical_review_d_citation_distribution_panel.md)
- [Physical Review mobility panel](physical_review_mobility_panel.md)
- [long-term citation prediction](../methods/long_term_citation_prediction.md)
- [exogenous second-act citation shock](../validations/exogenous_second_act_citation_shock.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]
- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]

## Metadata

- Concept ID: `physical_review_citation_network`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: Physical Review citation graph; APS citation network; PR citation benchmark; Physical Review internal citations
