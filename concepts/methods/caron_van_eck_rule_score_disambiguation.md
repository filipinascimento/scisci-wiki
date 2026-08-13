# Caron-van Eck rule-score disambiguation

## Summary

Caron-van Eck rule-score disambiguation is an unsupervised author-name disambiguation approach that adds evidence-specific rule scores across author and publication metadata, then links author mentions whose score exceeds a block-size-dependent threshold.

## Canonical Form

- Unit of analysis: author mention pair, name block, metadata rule, score threshold, connected component, or inferred author oeuvre.
- Typical representation: rule-score table, summed similarity score, threshold by block-size class, or above-threshold author-mention graph.
- Method target: use interpretable metadata matches to decide whether two mentions in the same name block refer to the same author.
- Empirical signature: strong matches such as exact email, shared grant numbers, coauthors, self-citations, bibliographic coupling, and co-citation increase the same-author score.

## Uses in Science of Science

- Provides a concrete implementation of [author similarity clustering](author_similarity_clustering.md).
- Uses [author metadata similarity features](../representations/author_metadata_similarity_features.md) in an auditable weighted-rule form.
- Connects to [block-size-dependent disambiguation thresholds](block_size_dependent_disambiguation_thresholds.md) because the required rule-score threshold increases for larger name blocks.
- Offers a benchmark method for [unsupervised author-disambiguation comparison](unsupervised_author_disambiguation_comparison.md).

## Operationalization

- Begin with [author-name blocking](author_name_blocking.md), typically first initial plus surname.
- Score each pair of mentions using rules over email, initials, first names, linked addresses, coauthors, grant numbers, publication addresses, subject categories, journals, self-citations, bibliographic coupling, and co-citation.
- Sum matching rule scores into a similarity score.
- Link pairs above the relevant block-size-class threshold and treat connected components as author clusters.
- Evaluate with [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md) and block-size-stratified diagnostics.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) describes the Caron and van Eck approach as a rule-score method using author-level and paper-level attributes.
- The paper lists rule-score inputs including exact email matches, shared initials, shared first names, linked addresses, coauthors, grant numbers, subject categories, journals, self-citations, bibliographic coupling, and co-citation.
- In the Tekles and Bornmann comparison, this approach produced the best results among the examined approaches on both pairwise F1 and best F1.
- Their results show that its block-size-class thresholds improved performance relative to a constant threshold and that the approach remained relatively less sensitive to large name blocks.

## Caveats

- Rule weights may not transfer unchanged across databases, fields, publication years, or metadata-quality regimes.
- Strong precision-oriented rules can split heterogeneous careers when author metadata changes sharply.
- Some high-value features, such as email and grant numbers, can be sparse or inconsistently indexed.
- Connected-component linkage can still propagate a false high-scoring bridge into a larger merge error.

## Links

- [author name disambiguation](author_name_disambiguation.md)
- [author similarity clustering](author_similarity_clustering.md)
- [author metadata similarity features](../representations/author_metadata_similarity_features.md)
- [block-size-dependent disambiguation thresholds](block_size_dependent_disambiguation_thresholds.md)
- [disambiguation threshold flexibility upper bound](../validations/disambiguation_threshold_flexibility_upper_bound.md)
- [disambiguation attribute-set ablation](../validations/disambiguation_attribute_set_ablation.md)
- [unsupervised author-disambiguation comparison](unsupervised_author_disambiguation_comparison.md)
- [ResearcherID disambiguation gold standard](../validations/researcherid_disambiguation_gold_standard.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `caron_van_eck_rule_score_disambiguation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: Caron van Eck author disambiguation; rule-score author linkage; weighted-rule author disambiguation; block-threshold rule-score clustering
