# Disambiguation threshold flexibility upper bound

## Summary

The disambiguation threshold flexibility upper bound validates author-name disambiguation methods by comparing ordinary threshold rules with the best threshold obtainable separately for each name block.

## Canonical Form

- Unit of analysis: name block, threshold rule, disambiguation approach, labeled evaluation sample, or F1 score.
- Typical representation: constant-threshold baseline, block-size-class threshold, per-block optimal threshold, flexible-threshold curve, or deployability gap.
- Validation target: distinguish an algorithm's intrinsic similarity model from the performance loss caused by imperfect threshold specification.
- Empirical signature: per-block optimal thresholds produce better scores but require labeled data that are usually unavailable in real deployment.

## Uses in Science of Science

- Extends [block-size-dependent disambiguation thresholds](../methods/block_size_dependent_disambiguation_thresholds.md) with a validation benchmark.
- Helps compare [author similarity clustering](../methods/author_similarity_clustering.md) methods independently of arbitrary global thresholds.
- Diagnoses whether poor performance is mainly due to weak similarity features or to threshold calibration.
- Provides a caveat for author-level bibliometric studies that report only aggregate disambiguation scores.

## Operationalization

- Run a disambiguation method on a labeled sample such as [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md).
- Evaluate ordinary threshold schemes: constant thresholds, block-size classes, or parametric block-size rules.
- Recompute performance after choosing the best possible threshold separately within each name block.
- Interpret the flexible-threshold result as an upper bound, not a deployable estimate, unless equivalent labeled calibration data are available.
- Report the gap between ordinary and flexible thresholds by method and block size.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) uses flexible thresholds for each name block to estimate improvement potential over the thresholds proposed or fitted for each approach.
- Their results show that flexible thresholds improve some methods strongly, especially for large blocks, but require reliable disambiguated data before application.
- For the Caron and van Eck approach, the paper reports pairwise F1 of 0.714 with a constant threshold, 0.808 with block-size classes, and 0.878 with fully flexible per-block thresholds.
- Tekles and Bornmann also find that a linear block-size threshold rule for the Backes approach becomes too strict for large blocks, reducing recall despite high precision.

## Caveats

- Flexible per-block thresholds are an evaluation upper bound when labels are used to choose thresholds.
- Threshold flexibility can hide overfitting if calibration and evaluation are not separated.
- A small gap does not prove the method is optimal; it only means threshold tuning is not the main remaining bottleneck.
- A large gap can indicate either poor threshold functional form or strong heterogeneity across name blocks.

## Links

- [block-size-dependent disambiguation thresholds](../methods/block_size_dependent_disambiguation_thresholds.md)
- [author similarity clustering](../methods/author_similarity_clustering.md)
- [Caron-van Eck rule-score disambiguation](../methods/caron_van_eck_rule_score_disambiguation.md)
- [unsupervised author-disambiguation comparison](../methods/unsupervised_author_disambiguation_comparison.md)
- [name-block size complexity](../measures/name_block_size_complexity.md)
- [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md)
- [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `disambiguation_threshold_flexibility_upper_bound`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: flexible threshold upper bound; per-block threshold oracle; disambiguation threshold deployability gap; threshold calibration upper bound
