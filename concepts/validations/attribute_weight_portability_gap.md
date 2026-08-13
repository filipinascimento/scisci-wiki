# Attribute-weight portability gap

## Summary

Attribute-weight portability gap is the validation motif that author-disambiguation feature weights may not transfer cleanly when metadata fields, databases, or benchmark populations change.

## Canonical Form

- Unit of analysis: metadata field, feature weight, similarity score, algorithm configuration, or target corpus.
- Typical representation: fixed expert weights, learned weights, uniform weights, added attribute, or field-transfer audit.
- Validation target: test whether weighting assumptions remain valid after moving to a new corpus or adding metadata.
- Empirical signature: a new attribute is either impossible to integrate under fixed weights or is overemphasized under naive equal weighting.

## Uses in Science of Science

- Adds transferability scope to [author metadata similarity features](../representations/author_metadata_similarity_features.md).
- Complements [disambiguation attribute-set ablation](disambiguation_attribute_set_ablation.md), which tests whether attributes matter.
- Helps interpret named methods such as [Caron-van Eck rule-score disambiguation](../methods/caron_van_eck_rule_score_disambiguation.md) and [Backes specificity-weighted cluster disambiguation](../methods/backes_specificity_weighted_cluster_disambiguation.md).

## Operationalization

- Document whether weights are expert-set, learned, uniform, or recalibrated.
- Rerun benchmark scores after adding, removing, or reweighting metadata fields.
- Test portability across field, year, country, and database subsets.
- Report sensitivity to noisy or missing attributes.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) contrasts flexible and fixed-weight disambiguation approaches and discusses problems that arise when attributes are added or weighted uniformly.
- The paper's attribute comparisons show that feature inclusion is not enough; feature weighting governs portability.
- This motif separates weight transfer from raw metadata availability.

## Caveats

- Weight instability can reflect benchmark denominator changes rather than true algorithm failure.
- Strong expert weights may work well in the setting they were designed for.
- Equal weighting is not always naive if features have already been normalized and validated.

## Links

- [disambiguation attribute-set ablation](disambiguation_attribute_set_ablation.md)
- [author metadata similarity features](../representations/author_metadata_similarity_features.md)
- [Caron-van Eck rule-score disambiguation](../methods/caron_van_eck_rule_score_disambiguation.md)
- [Backes specificity-weighted cluster disambiguation](../methods/backes_specificity_weighted_cluster_disambiguation.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `attribute_weight_portability_gap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: disambiguation feature-weight portability; author-metadata weight transfer gap; attribute weighting sensitivity
