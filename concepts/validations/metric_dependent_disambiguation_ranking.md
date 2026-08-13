# Metric-dependent disambiguation ranking

## Summary

Metric-dependent disambiguation ranking is the validation motif that author-disambiguation algorithms can change relative performance depending on whether evaluation emphasizes pairwise links or whole-cluster author usability.

## Canonical Form

- Unit of analysis: disambiguation algorithm, name block, author cluster, mention pair, gold-standard author, or benchmark.
- Typical representation: pairwise F1 rank, best-F1 rank, precision-recall tradeoff, or algorithm ranking reversal.
- Validation target: avoid declaring a single best disambiguation method without specifying the downstream metric.
- Empirical signature: one method ranks higher under pairwise precision/recall while another ranks higher under cluster-as-author metrics.

## Uses in Science of Science

- Refines [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md) by making ranking sensitivity explicit.
- Provides a benchmark caveat for [unsupervised author-disambiguation comparison](../methods/unsupervised_author_disambiguation_comparison.md).
- Helps downstream analyses choose metrics aligned with author-level productivity, collaboration, mobility, or paper-linkage tasks.
- Connects [name-only disambiguation baselines](name_only_disambiguation_baselines.md) to richer metadata approaches through metric-specific comparisons.

## Operationalization

- Evaluate each candidate algorithm on pairwise precision, pairwise recall, pairwise F1, best precision, best recall, and best F1.
- Rank algorithms under each metric and record reversals or near-ties.
- Stratify ranking sensitivity by block size and common-name frequency.
- Choose final method according to the downstream unit: mention-pair links, author profiles, career histories, or collaboration networks.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) shows that Schulz and Backes approaches can reverse relative ranking under pairwise F1 versus best F1.
- The same paper shows that simple name-only baselines look different depending on whether precision or recall is prioritized.
- This supports reporting metric-specific rankings rather than a single aggregate winner.

## Caveats

- Benchmark rankings can change with dataset composition, block-size distribution, and identifier coverage.
- A method that performs best for cluster-as-author use may not be best for edge-level coauthorship reconstruction.
- Metric choice should be stated before downstream inference when possible.

## Links

- [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md)
- [unsupervised author-disambiguation comparison](../methods/unsupervised_author_disambiguation_comparison.md)
- [name-only disambiguation baselines](name_only_disambiguation_baselines.md)
- [Schulz citation-overlap disambiguation](../methods/schulz_citation_overlap_disambiguation.md)
- [Backes specificity-weighted cluster disambiguation](../methods/backes_specificity_weighted_cluster_disambiguation.md)
- [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md)
- [common-name block bias](common_name_block_bias.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `metric_dependent_disambiguation_ranking`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: disambiguation metric ranking sensitivity; pairwise-best ranking reversal; author-disambiguation benchmark reversal; metric-specific disambiguation ranking
