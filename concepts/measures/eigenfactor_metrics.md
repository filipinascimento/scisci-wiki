# Eigenfactor metrics

## Summary

Eigenfactor metrics are journal-level citation-network indicators that rank journals by recursive influence and separate total journal influence from per-article influence.

## Canonical Form

- Unit of analysis: journal, citation edge, journal set, field, or collection bundle.
- Typical representation: Eigenfactor Score, Article Influence Score, random-walk centrality, or journal prestige rank.
- Mechanism or measurement target: journal influence through the structure of the journal citation network.
- Empirical signature: citations from influential journals carry more weight than citations from less influential journals.

## Uses in Science of Science

- Provides a journal-level analogue to [citation PageRank](citation_pagerank.md), [Google number](google_number.md), and [recursive citation weighting](../mechanisms/recursive_citation_weighting.md).
- Complements [journal impact factor](journal_impact_factor.md) by using citation-network structure instead of only local average citation counts.
- Contrasts with [source normalized impact per paper](source_normalized_impact_per_paper.md), which normalizes journal impact through citing-side citation density rather than recursive prestige.
- Splits into [Eigenfactor Score](eigenfactor_score.md) for total journal influence and [Article Influence Score](article_influence_score.md) for per-article influence.
- Supports journal comparison, library collection analysis, science-map overlays, and metric-governance discussions.

## Operationalization

- Construct a directed journal citation network from journal-to-journal citations.
- Run an iterative [journal citation random walk](../methods/journal_citation_random_walk.md) or eigenvector-like ranking over the network.
- Report Eigenfactor Score for total journal influence.
- Report Article Influence Score by normalizing Eigenfactor by article output so per-article influence is comparable across journals.
- Use [Eigenfactor bundle influence](eigenfactor_bundle_influence.md) and [Eigenfactor cost-effectiveness](eigenfactor_cost_effectiveness.md) only when the unit is a journal collection or subscription bundle.

## Evidence and Validations

- Verified full-text evidence from West, Bergstrom, and Bergstrom (2010) describes Eigenfactor Score and Article Influence Score as alternatives to journal impact factor based on the full scholarly citation network.
- The full text uses a random-walk model in which a researcher repeatedly follows citations between journal volumes; the Eigenfactor Score is the percentage of time the model researcher spends at each journal.
- West et al. explicitly link the method to PageRank-like iterative ranking and state that citations from top journals receive more weight than citations from lower-tier publications.
- The paper distinguishes total influence from per-article influence: Article Influence divides Eigenfactor by article count and normalizes the average article to 1.
- The same full text makes the collection-use case explicit: Eigenfactor Score is additive across journals, allowing journal bundles to be summed and compared with subscription costs.
- The paper also demonstrates metric comparison using a [metric rank crosswalk plot](../representations/metric_rank_crosswalk_plot.md), explains rank movements through [journal metric divergence decomposition](../methods/journal_metric_divergence_decomposition.md), and motivates citation-window choices with a [field citation tempo profile](../representations/field_citation_tempo_profile.md).
- Additional West et al. motifs split out the [JCR 2006 journal citation network](../datasets/jcr_2006_journal_citation_network.md), [citing-side fractional journal votes](../methods/citing_side_fractional_journal_votes.md), [Eigenfactor citation-window lag sensitivity](../validations/eigenfactor_citation_window_lag_sensitivity.md), [journal self-citation exclusion](../validations/journal_self_citation_exclusion.md), [review-journal Article Influence inflation](../validations/review_journal_article_influence_inflation.md), [journal-metric article-level misuse](../validations/journal_metric_article_level_misuse.md), and [journal-size total-influence effect](../validations/journal_size_total_influence_effect.md).

## Caveats

- Eigenfactor scores depend on the journal set, citation database, citation-window choices, and treatment of self-citations or dangling nodes.
- A journal-level prestige score should not be substituted for article-level, author-level, or societal value.
- Recursive prestige metrics can reinforce existing visibility hierarchies if used without field and context checks.

## Links

- [journal impact factor](journal_impact_factor.md)
- [Eigenfactor Score](eigenfactor_score.md)
- [Article Influence Score](article_influence_score.md)
- [journal citation random walk](../methods/journal_citation_random_walk.md)
- [JCR 2006 journal citation network](../datasets/jcr_2006_journal_citation_network.md)
- [citing-side fractional journal votes](../methods/citing_side_fractional_journal_votes.md)
- [Eigenfactor bundle influence](eigenfactor_bundle_influence.md)
- [Eigenfactor cost-effectiveness](eigenfactor_cost_effectiveness.md)
- [Article Influence versus impact-factor divergence](../validations/article_influence_impact_factor_divergence.md)
- [metric rank crosswalk plot](../representations/metric_rank_crosswalk_plot.md)
- [journal metric divergence decomposition](../methods/journal_metric_divergence_decomposition.md)
- [field citation tempo profile](../representations/field_citation_tempo_profile.md)
- [Eigenfactor citation-window lag sensitivity](../validations/eigenfactor_citation_window_lag_sensitivity.md)
- [journal self-citation exclusion](../validations/journal_self_citation_exclusion.md)
- [review-journal Article Influence inflation](../validations/review_journal_article_influence_inflation.md)
- [journal-metric article-level misuse](../validations/journal_metric_article_level_misuse.md)
- [journal-size total-influence effect](../validations/journal_size_total_influence_effect.md)
- [source normalized impact per paper](source_normalized_impact_per_paper.md)
- [citation PageRank](citation_pagerank.md)
- [Google number](google_number.md)
- [recursive citation weighting](../mechanisms/recursive_citation_weighting.md)
- [reference-list dilution](../mechanisms/reference_list_dilution.md)
- [citation impact indicators](citation_impact_indicators.md)
- [responsible metrics](responsible_metrics.md)
- [citation networks](../representations/citation_networks.md)
- [science maps](../representations/science_maps.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]
- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]
- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `eigenfactor_metrics`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Aliases: Eigenfactor Score; Article Influence Score; journal prestige; recursive journal influence
