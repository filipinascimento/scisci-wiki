# Disambiguation attribute-set ablation

## Summary

Disambiguation attribute-set ablation validates author-name disambiguation methods by rerunning approaches with comparable metadata attribute sets to isolate the effect of feature availability, feature weights, and clustering design.

## Canonical Form

- Unit of analysis: disambiguation approach, metadata attribute set, author mention pair, name block, feature weight, or evaluation score.
- Typical representation: approach-by-attribute-set comparison table, feature-exclusion ablation, matched-feature benchmark, or F1 change.
- Validation target: determine whether performance differences come from the metadata fields used or from the similarity, weighting, and clustering machinery.
- Empirical signature: methods retain different performance after their input attributes are aligned, and adding more attributes does not always improve results.

## Uses in Science of Science

- Validates [author metadata similarity features](../representations/author_metadata_similarity_features.md) as a modeling layer distinct from [author similarity clustering](../methods/author_similarity_clustering.md).
- Helps database builders decide which metadata fields are worth cleaning or exposing for [author name disambiguation](../methods/author_name_disambiguation.md).
- Identifies whether failures in author-level analyses are due to sparse metadata, poor weights, thresholding, or clustering strategy.
- Complements [unsupervised author-disambiguation comparison](../methods/unsupervised_author_disambiguation_comparison.md) by separating feature-set effects from algorithm effects.

## Operationalization

- Choose a labeled disambiguation sample and several approaches that can be run with modified metadata inputs.
- Define matched attribute sets, such as coauthors/references/citations/self-citations versus broader sets including addresses, journals, subjects, emails, keywords, and titles.
- Refit thresholds for each approach and attribute-set condition when the evaluation design requires it.
- Compare pairwise and best F1 scores under original and matched-feature conditions.
- Interpret results alongside feature coverage and weighting, not just feature count.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) compares modified versions of the best-performing approaches after aligning their considered metadata attributes.
- The paper shows that differences between approaches remain even when attribute sets are made comparable, implying that similarity computation, clustering strategy, and weighting also matter.
- In their table, the Caron and van Eck approach outperforms Schulz et al. using a Schulz-like attribute set, while the Backes approach also performs strongly under that matched set.
- Tekles and Bornmann find that more attributes are not automatically better: the Backes implementation performs worse with the broader Caron/van Eck-like attribute set than with the narrower Schulz-like set, likely because uniform attribute weights overemphasize some fields.

## Caveats

- Attribute ablations depend on which features can be removed or added without redesigning the original algorithm.
- Missingness and metadata quality can make an attribute look weak in one database but useful in another.
- Refit thresholds can mix feature effects with calibration effects unless the design is explicit.
- Equal feature weights may be a poor default when attributes differ in specificity, sparsity, and error rates.

## Links

- [author metadata similarity features](../representations/author_metadata_similarity_features.md)
- [author similarity clustering](../methods/author_similarity_clustering.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [Caron-van Eck rule-score disambiguation](../methods/caron_van_eck_rule_score_disambiguation.md)
- [unsupervised author-disambiguation comparison](../methods/unsupervised_author_disambiguation_comparison.md)
- [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md)
- [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `disambiguation_attribute_set_ablation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: author-disambiguation feature ablation; metadata attribute ablation; disambiguation feature-set sensitivity; author-linkage attribute sensitivity
