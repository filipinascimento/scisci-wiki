# Closest-cluster metric semantics boundary

## Summary

Closest-cluster metric semantics boundary is the validation motif that cluster-level author-disambiguation metrics can answer different downstream questions than pairwise link metrics.

## Canonical Form

- Unit of analysis: detected author cluster, true author set, closest matching cluster, profile completeness, or profile purity.
- Typical representation: closest-cluster precision, closest-cluster recall, best precision/recall, Jaccard overlap, or pairwise F1.
- Validation target: align evaluation metric semantics with the downstream task.
- Empirical signature: a cluster can be pure but incomplete, or complete but impure, and different metrics reward those cases differently.

## Uses in Science of Science

- Refines [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md) beyond generic precision and recall.
- Explains some cases of [metric-dependent disambiguation ranking](metric_dependent_disambiguation_ranking.md).
- Helps authors decide whether they need clean author profiles, correct pairwise links, or conservative author sets.

## Operationalization

- Report pairwise and closest-cluster metrics side by side when possible.
- State whether the application prioritizes author-profile completeness, author-profile purity, or pairwise relation accuracy.
- Inspect examples where metric rankings disagree.
- Avoid treating one F1 score as a universal validation summary.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) discusses closest-cluster Jaccard precision and recall and why pure but incomplete clusters can be penalized depending on the metric.
- The paper compares multiple metric families to show that disambiguation performance depends on evaluation semantics.
- This motif highlights the metric meaning rather than the algorithm being evaluated.

## Caveats

- Cluster-level metrics can be harder to interpret for very large name blocks.
- Downstream studies may need different error tolerances than benchmark papers.
- Metric choice does not solve benchmark coverage or label-error problems.

## Links

- [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md)
- [metric-dependent disambiguation ranking](metric_dependent_disambiguation_ranking.md)
- [identifier-covered evaluation denominator](identifier_covered_evaluation_denominator.md)
- [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `closest_cluster_metric_semantics_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: closest-cluster metric boundary; author-profile metric semantics; disambiguation cluster-metric caveat
