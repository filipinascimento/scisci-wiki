# Unsupervised author-disambiguation comparison

## Summary

Unsupervised author-disambiguation comparison is a benchmarking method that applies multiple non-trained author-name disambiguation approaches to the same blocked, labeled author-mention sample.

## Canonical Form

- Unit of analysis: author mention, name block, disambiguation approach, baseline, evaluation metric, or labeled author cluster.
- Typical representation: common evaluation panel, approach-by-metric table, block-size-stratified performance curves, or precision-recall ranking.
- Method target: compare algorithm designs under controlled data conditions rather than relying on results from incompatible samples.
- Empirical signature: several unsupervised approaches and name-only baselines are run on the same Web of Science author mentions with the same ResearcherID labels.

## Uses in Science of Science

- Provides a benchmark layer for [author name disambiguation](author_name_disambiguation.md).
- Separates algorithm-design differences from differences in evaluation datasets, metrics, and blocking schemes.
- Helps downstream author-level studies choose between simple name baselines and richer [author similarity clustering](author_similarity_clustering.md).
- Supports sensitivity analysis for career, mobility, team, and inequality studies that depend on author identity resolution.

## Operationalization

- Build or reuse a labeled author-mention sample such as [ResearcherID disambiguation gold standard](../validations/researcherid_disambiguation_gold_standard.md).
- Apply the same [author-name blocking](author_name_blocking.md) to every method being compared.
- Include simple baselines, such as first-initial-plus-surname blocks and all-initials-plus-surname clusters, alongside richer unsupervised methods.
- Compare named approaches such as [COTA coauthor TF-IDF disambiguation](cota_coauthor_tf_idf_disambiguation.md), [Schulz citation-overlap disambiguation](schulz_citation_overlap_disambiguation.md), [Backes specificity-weighted cluster disambiguation](backes_specificity_weighted_cluster_disambiguation.md), and [Caron-van Eck rule-score disambiguation](caron_van_eck_rule_score_disambiguation.md).
- Tune or document thresholds, then score every method with common [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md).
- Report aggregate and [name-block size complexity](../measures/name_block_size_complexity.md)-stratified results.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) compares four elaborated unsupervised approaches plus two name-only baseline approaches under a common Web of Science/ResearcherID evaluation setup.
- The paper reports that all examined approaches outperform the first-initial-plus-surname baseline, but only three outperform the all-initials-plus-surname baseline.
- In their sample, the Caron and van Eck approach produced the best results on both pairwise F1 and best F1, while metric choice changed the ranking of Schulz et al. and Backes.
- The name-only comparison is split out as [name-only disambiguation baselines](../validations/name_only_disambiguation_baselines.md).
- The discussion cautions that the comparison does not recommend one approach for all situations; performance depends on name-block size, parameterization, metadata attributes, and the data to be disambiguated.

## Caveats

- Comparisons can overstate deployable performance if thresholds are fitted on the same labeled data used for evaluation.
- A ResearcherID-covered sample may not represent authors without persistent identifiers.
- Only unsupervised methods are compared in this motif; supervised and database-proprietary identifiers require separate validation.
- Algorithm rankings can change when field mix, metadata coverage, block size, or evaluation metric changes.

## Links

- [author name disambiguation](author_name_disambiguation.md)
- [author similarity clustering](author_similarity_clustering.md)
- [ResearcherID disambiguation gold standard](../validations/researcherid_disambiguation_gold_standard.md)
- [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md)
- [author-name blocking](author_name_blocking.md)
- [name-block size complexity](../measures/name_block_size_complexity.md)
- [Caron-van Eck rule-score disambiguation](caron_van_eck_rule_score_disambiguation.md)
- [COTA coauthor TF-IDF disambiguation](cota_coauthor_tf_idf_disambiguation.md)
- [Schulz citation-overlap disambiguation](schulz_citation_overlap_disambiguation.md)
- [Backes specificity-weighted cluster disambiguation](backes_specificity_weighted_cluster_disambiguation.md)
- [name-only disambiguation baselines](../validations/name_only_disambiguation_baselines.md)
- [disambiguation threshold flexibility upper bound](../validations/disambiguation_threshold_flexibility_upper_bound.md)
- [disambiguation attribute-set ablation](../validations/disambiguation_attribute_set_ablation.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `unsupervised_author_disambiguation_comparison`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: unsupervised disambiguation benchmark; author-disambiguation comparison panel; controlled author-disambiguation comparison; name-disambiguation algorithm benchmark
