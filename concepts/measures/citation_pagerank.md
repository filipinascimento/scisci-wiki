# Citation PageRank

## Summary

Citation PageRank adapts random-walk or eigenvector centrality to citation networks so a paper receives more credit when it is cited by influential papers and less when citations come from long reference lists.

## Canonical Form

- Unit of analysis: paper, citation edge, journal, patent, or scholarly object.
- Typical representation: PageRank score, [Google number](google_number.md), eigenvector-like centrality, or rank over citation-network nodes.
- Mechanism or measurement target: recursive influence through citation paths, not just direct citation count.
- Empirical signature: scores correlate with citation counts on average but identify outliers with high network prestige relative to raw citations.

## Uses in Science of Science

- Provides a network-centrality complement to [citation impact indicators](citation_impact_indicators.md).
- Can identify influential [hidden gems](../validations/citation_pagerank_hidden_gems.md) with modest direct citation counts but important citing descendants.
- Links citation evaluation to [citation networks](../representations/citation_networks.md), [science maps](../representations/science_maps.md), and long-term impact analysis.
- Has a journal-level analogue in [journal citation random walk](../methods/journal_citation_random_walk.md) and [Eigenfactor Score](eigenfactor_score.md).
- A further Chen pass separates [PageRank teleportation regularizer](../methods/pagerank_teleportation_regularizer.md), [feed-forward reference triad rate](feed_forward_reference_triad_rate.md), [citation chain discovery search](../mechanisms/citation_chain_discovery_search.md), [metric outlier canonicality review](../validations/metric_outlier_canonicality_review.md), [citation quality context requirement](../validations/citation_quality_context_requirement.md), and [static citation edge lifecycle](../representations/static_citation_edge_lifecycle.md).

- A residual Chen et al. pass adds PageRank-specific refinements: [aging-aware CiteRank extension](../methods/aging_aware_citerank_extension.md), [damping rank-stability band](../validations/damping_rank_stability_band.md), [out-degree-dispersion rank-limit approximation](../methods/outdegree_dispersion_rank_limit_approximation.md), [oldest-cohort PageRank floor](../validations/oldest_cohort_pagerank_floor.md), [single-child fame leakage](../mechanisms/single_child_fame_leakage.md), [biographical landmark validation](../validations/biographical_landmark_validation.md), [citation-conditioned PageRank dispersion](citation_conditioned_pagerank_dispersion.md), [article-level PageRank transfer](../methods/article_level_pagerank_transfer.md), and [dual-rank publication table](../representations/dual_rank_publication_table.md).
## Operationalization

- Build a directed citation network with edges from citing papers to cited papers.
- Choose a damping or continuation parameter, document whether it is empirically calibrated through [citation-following damping calibration](../methods/citation_following_damping_calibration.md), and handle dangling nodes consistently.
- Compute PageRank or a related random-walk centrality over the graph.
- Compare PageRank rank with citation rank through [PageRank-citation rank divergence](pagerank_citation_rank_divergence.md) to identify outliers and inspect [recursive citation weighting](../mechanisms/recursive_citation_weighting.md) and [reference-list dilution](../mechanisms/reference_list_dilution.md).
- Decompose high-divergence cases with [citing-child PageRank contribution](citing_child_pagerank_contribution.md).
- Run [Google-number citation scaling checks](../validations/google_number_citation_scaling_check.md), [PageRank damping sensitivity](../validations/pagerank_damping_sensitivity.md), [PageRank citation-rank limit](../validations/pagerank_citation_rank_limit.md), [review-article out-degree-tail caveat](../validations/review_article_outdegree_tail_caveat.md), and [PageRank age-bias checks](../validations/pagerank_age_bias_check.md) before using recursive ranks as evaluation evidence.

## Evidence and Validations

- Verified full-text evidence from Chen, Xie, Maslov, and Redner (2007) applies Google's PageRank algorithm to the Physical Review citation network from 1893 to 2003.
- The paper defines the motivation clearly: raw citations are natural but incomplete, because citations from more important papers should count more and citations from long reference lists should count less.
- Chen et al. report that PageRank and citation counts are positively correlated on average, but PageRank highlights exceptional papers with much higher network rank than citation rank.
- The full text treats these outliers as "scientific gems" and shows that the mechanism can surface familiar influential papers that direct citation counts under-rank.
- The same paper provides robustness checks for damping-parameter choice and possible age bias in time-directed citation networks.
- Chen et al. also decompose outlier scores into child contributions, derive a citation-rank limiting case as `d -> 1`, and identify review-article out-degree tails and time-directed citation-walk drift as PageRank caveats.
- A residual Chen pass adds the teleportation term as an explicit regularizer, the feed-forward triad rate used to calibrate citation following, citation-chain discovery behavior, qualitative canonicality review for metric outliers, the need for contextual citation information to weight citation quality, and the static lifecycle of citation edges.
- Verified full-text evidence from West et al. (2010) shows the journal-level analogue: Eigenfactor metrics use a PageRank-like iterative ranking scheme over the journal citation network, modeled as a researcher walking through journals by following citations.

## Caveats

- PageRank depends on graph coverage, direction convention, damping parameter, and reference-list treatment.
- It can privilege older papers or papers embedded in dense citation pathways if age and field are not handled.
- A high recursive centrality score is still an attention metric, not a direct measure of truth, quality, or societal value.
- PageRank-style metrics should distinguish topology-based influence weighting from context-aware citation-quality interpretation.

## Links

- [citation impact indicators](citation_impact_indicators.md)
- [citation networks](../representations/citation_networks.md)
- [Google number](google_number.md)
- [recursive citation weighting](../mechanisms/recursive_citation_weighting.md)
- [reference-list dilution](../mechanisms/reference_list_dilution.md)
- [PageRank-citation rank divergence](pagerank_citation_rank_divergence.md)
- [citing-child PageRank contribution](citing_child_pagerank_contribution.md)
- [citation-following damping calibration](../methods/citation_following_damping_calibration.md)
- [Google-number citation scaling check](../validations/google_number_citation_scaling_check.md)
- [citation PageRank hidden gems](../validations/citation_pagerank_hidden_gems.md)
- [PageRank damping sensitivity](../validations/pagerank_damping_sensitivity.md)
- [PageRank citation-rank limit](../validations/pagerank_citation_rank_limit.md)
- [review-article out-degree-tail caveat](../validations/review_article_outdegree_tail_caveat.md)
- [PageRank age-bias check](../validations/pagerank_age_bias_check.md)
- [time-directed citation-walk drift](../mechanisms/time_directed_citation_walk_drift.md)
- [PageRank teleportation regularizer](../methods/pagerank_teleportation_regularizer.md)
- [feed-forward reference triad rate](feed_forward_reference_triad_rate.md)
- [citation chain discovery search](../mechanisms/citation_chain_discovery_search.md)
- [metric outlier canonicality review](../validations/metric_outlier_canonicality_review.md)
- [citation quality context requirement](../validations/citation_quality_context_requirement.md)
- [static citation edge lifecycle](../representations/static_citation_edge_lifecycle.md)
- [Physical Review citation network](../datasets/physical_review_citation_network.md)
- [Eigenfactor metrics](eigenfactor_metrics.md)
- [journal citation random walk](../methods/journal_citation_random_walk.md)
- [Eigenfactor Score](eigenfactor_score.md)
- [field normalized citation impact](field_normalized_citation_impact.md)
- [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [delayed recognition and prematurity](../mechanisms/delayed_recognition.md)
- [science maps](../representations/science_maps.md)
- [responsible metrics](responsible_metrics.md)

- [aging-aware CiteRank extension](../methods/aging_aware_citerank_extension.md)
- [single-child fame leakage](../mechanisms/single_child_fame_leakage.md)
- [dual-rank publication table](../representations/dual_rank_publication_table.md)
## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]
- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]

## Metadata

- Concept ID: `citation_pagerank`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Aliases: PageRank centrality; Google number; eigenvector citation impact; recursive citation rank
