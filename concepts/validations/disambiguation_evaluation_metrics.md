# Disambiguation evaluation metrics

## Summary

Disambiguation evaluation metrics quantify how well inferred author clusters separate different real people and merge all mentions belonging to the same real person.

## Canonical Form

- Unit of analysis: author mention pair, inferred author cluster, real-world author, name block, or evaluated dataset.
- Typical representation: pairwise precision, pairwise recall, pairwise F1, best precision, best recall, best F1, splitting error, or lumping error.
- Mechanism or measurement target: quality of author identity resolution under explicit precision-recall trade-offs.
- Empirical signature: an author disambiguation method achieves different scores depending on whether evaluation emphasizes mention-pair links or whole-cluster reliability.

## Uses in Science of Science

- Provides the validation layer for [author name disambiguation](../methods/author_name_disambiguation.md).
- Makes [homonym and synonym author errors](homonym_synonym_author_errors.md) measurable rather than only descriptive.
- Helps decide whether author-level analyses of careers, mobility, inequality, and collaboration are reliable enough for downstream inference.
- Splits residual validation risks into [blocking split-error ceiling](blocking_split_error_ceiling.md), [metric-dependent disambiguation ranking](metric_dependent_disambiguation_ranking.md), [common-name block bias](common_name_block_bias.md), and [identifier-covered evaluation denominator](identifier_covered_evaluation_denominator.md).

## Operationalization

- Assemble author mentions with gold or silver identifiers such as [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md), ORCID, curated CVs, or hand labels.
- Include [name-only disambiguation baselines](name_only_disambiguation_baselines.md) so richer methods are judged against transparent lower-bound rules.
- Compute pairwise precision as the share of within-cluster mention pairs that are truly same-author pairs.
- Compute pairwise recall as the share of true same-author mention pairs recovered within detected clusters.
- Compute F1 scores as harmonic means and report cluster-level metrics such as best precision, best recall, and best F1 when clusters are treated as author oeuvres.
- Report scores by name block, name frequency, field, and block size, not only as an aggregate.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) evaluates author-name disambiguation by precision and recall: discriminating different real-world authors and merging mentions of the same real-world author.
- The paper calculates pairwise precision, pairwise recall, and pairwise F1, where pairwise precision measures correct links inside detected clusters and pairwise recall measures true same-author links that were recovered.
- Tekles and Bornmann also define best precision, best recall, and best F1 for the cluster-as-author task, where each detected cluster is interpreted as an author's oeuvre.
- The verified results show that rankings can change by metric: one approach can perform better by pairwise F1 while another performs better by best F1.
- The residual Tekles/Bornmann pass separates this as [metric-dependent disambiguation ranking](metric_dependent_disambiguation_ranking.md) and links it to block-size and identifier-denominator validation.
- The same paper uses these metrics for [unsupervised author-disambiguation comparison](../methods/unsupervised_author_disambiguation_comparison.md), [disambiguation threshold flexibility upper bound](disambiguation_threshold_flexibility_upper_bound.md), and [disambiguation attribute-set ablation](disambiguation_attribute_set_ablation.md).
- The baseline layer is split out as [name-only disambiguation baselines](name_only_disambiguation_baselines.md).

## Caveats

- Gold-standard identifiers may be incomplete or non-representative.
- Pairwise metrics weight large clusters heavily, while cluster-oriented metrics answer a different downstream question.
- Aggregate scores can hide poor performance for common names or large name blocks.

## Links

- [author name disambiguation](../methods/author_name_disambiguation.md)
- [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md)
- [name-block size complexity](../measures/name_block_size_complexity.md)
- [homonym and synonym author errors](homonym_synonym_author_errors.md)
- [author-name blocking](../methods/author_name_blocking.md)
- [author similarity clustering](../methods/author_similarity_clustering.md)
- [unsupervised author-disambiguation comparison](../methods/unsupervised_author_disambiguation_comparison.md)
- [name-only disambiguation baselines](name_only_disambiguation_baselines.md)
- [COTA coauthor TF-IDF disambiguation](../methods/cota_coauthor_tf_idf_disambiguation.md)
- [Schulz citation-overlap disambiguation](../methods/schulz_citation_overlap_disambiguation.md)
- [Backes specificity-weighted cluster disambiguation](../methods/backes_specificity_weighted_cluster_disambiguation.md)
- [disambiguation threshold flexibility upper bound](disambiguation_threshold_flexibility_upper_bound.md)
- [disambiguation attribute-set ablation](disambiguation_attribute_set_ablation.md)
- [blocking split-error ceiling](blocking_split_error_ceiling.md)
- [metric-dependent disambiguation ranking](metric_dependent_disambiguation_ranking.md)
- [common-name block bias](common_name_block_bias.md)
- [identifier-covered evaluation denominator](identifier_covered_evaluation_denominator.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `disambiguation_evaluation_metrics`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Aliases: pairwise precision recall; best F1; splitting error; lumping error
