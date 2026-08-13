# ResearcherID disambiguation gold standard

## Summary

A ResearcherID disambiguation gold standard uses author mentions linked to researcher-maintained identifiers as validation labels for author-name disambiguation methods.

## Canonical Form

- Unit of analysis: author mention, publication-author record, ResearcherID, name block, real-world author, or evaluation sample.
- Typical representation: mention-to-identifier table, labeled author clusters, gold-standard name blocks, or validation split.
- Validation target: compare inferred author clusters against a labeled identity source while controlling the same input data across methods.
- Empirical signature: disambiguation methods are scored against identifiers maintained by researchers themselves, with coverage and selection caveats.

## Uses in Science of Science

- Provides validation data for [author name disambiguation](../methods/author_name_disambiguation.md).
- Supplies labels for [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md), [homonym and synonym author errors](homonym_synonym_author_errors.md), and [name-block size complexity](../measures/name_block_size_complexity.md).
- Helps audit author-level analyses in [Web of Science](../datasets/web_of_science.md), [Dimensions](../datasets/dimensions.md), [OpenAlex](../datasets/openalex.md), and [SciSciNet-v2](../datasets/sciscinet_v2.md).

## Operationalization

- Select author mentions that carry a ResearcherID or comparable self-maintained identifier.
- Filter out records likely to represent non-author entities or stale identifiers when the metadata allow it.
- Group mentions by identifier to define reference author identities.
- Evaluate inferred clusters within comparable [author-name blocking](../methods/author_name_blocking.md) units so every method faces the same candidate space.
- Report coverage, field, year, and self-selection limits rather than treating identifiers as universal ground truth.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) evaluates unsupervised author-name disambiguation approaches using author mentions annotated with ResearcherID.
- The paper treats ResearcherID as an identifier maintained by researchers themselves and uses it to define a gold standard of real-world authors.
- Tekles and Bornmann restrict the Web of Science sample to person records marked as authors with a ResearcherID linked to at least one paper from 2015 or later, reducing likely stale or non-author records.
- The resulting evaluation set contains 1,057,978 author mentions across 2,484 name blocks and 29,244 distinct ResearcherIDs.
- The full text also cautions that researcher-maintained identifiers have low coverage, which limits transferability to the full bibliometric database.
- The same ResearcherID-labeled sample underpins [unsupervised author-disambiguation comparison](../methods/unsupervised_author_disambiguation_comparison.md), [disambiguation threshold flexibility upper bound](disambiguation_threshold_flexibility_upper_bound.md), and [disambiguation attribute-set ablation](disambiguation_attribute_set_ablation.md).

## Caveats

- ResearcherID adoption is incomplete and likely selective by field, country, career stage, database use, and time.
- Self-maintained identifiers can still contain missing works, stale records, or user errors.
- A gold standard built only from identifier-covered authors may understate difficulty for authors without persistent IDs.
- Identifier labels validate clustering quality but do not prove that downstream career or mobility estimates are unbiased.

## Links

- [author name disambiguation](../methods/author_name_disambiguation.md)
- [author-name blocking](../methods/author_name_blocking.md)
- [author metadata similarity features](../representations/author_metadata_similarity_features.md)
- [name-block size complexity](../measures/name_block_size_complexity.md)
- [block-size-dependent disambiguation thresholds](../methods/block_size_dependent_disambiguation_thresholds.md)
- [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md)
- [unsupervised author-disambiguation comparison](../methods/unsupervised_author_disambiguation_comparison.md)
- [disambiguation threshold flexibility upper bound](disambiguation_threshold_flexibility_upper_bound.md)
- [disambiguation attribute-set ablation](disambiguation_attribute_set_ablation.md)
- [homonym and synonym author errors](homonym_synonym_author_errors.md)
- [Scopus author profile disambiguation audit](scopus_author_profile_disambiguation_audit.md)
- [Web of Science](../datasets/web_of_science.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `researcherid_disambiguation_gold_standard`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: ResearcherID gold standard; author identifier validation set; labeled author mentions; disambiguation gold standard
