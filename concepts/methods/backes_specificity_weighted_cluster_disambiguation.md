# Backes specificity-weighted cluster disambiguation

## Summary

Backes specificity-weighted cluster disambiguation is an agglomerative author-name disambiguation method that scores shared metadata by feature specificity and merges clusters above a block-size-linked quality limit.

## Canonical Form

- Unit of analysis: author mention, author cluster, metadata feature, feature specificity score, name block, or merge threshold.
- Typical representation: specificity-weighted similarity score, agglomerative clustering tree, quality-limit rule, or block-size-adjusted merge.
- Method target: give rare shared metadata stronger same-author evidence than common metadata.
- Empirical signature: cluster pairs sharing uncommon attributes receive higher linkage scores than pairs sharing only common fields or journals.

## Uses in Science of Science

- Provides a named specificity-weighted approach for [author similarity clustering](author_similarity_clustering.md).
- Operationalizes [author metadata similarity features](../representations/author_metadata_similarity_features.md) with feature-specific weights.
- Connects to [block-size-dependent disambiguation thresholds](block_size_dependent_disambiguation_thresholds.md) through a quality limit tied to name-block size.
- Supplies evidence for [disambiguation attribute-set ablation](../validations/disambiguation_attribute_set_ablation.md), because feature weighting can matter as much as feature inclusion.

## Operationalization

- Normalize author mentions and block them by canonical name.
- Compute metadata overlap across attributes such as journals, affiliations, categories, keywords, coauthors, and references.
- Weight shared attributes by specificity so rare matches contribute more than common matches.
- Agglomeratively merge clusters while the weighted score exceeds the quality limit for the block.
- Evaluate both pairwise and cluster-as-author metrics, especially in large name blocks.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) describes the Backes approach as an agglomerative method using shared metadata and a quality limit.
- The paper reports that the Backes method can perform strongly under some attribute sets, but its linear block-size threshold can be too strict for large blocks.
- Tekles and Bornmann also find that adding more attributes under uniform weights can hurt performance, making specificity and weighting choices central rather than incidental.
- The method therefore motivates separating feature selection, feature weighting, and threshold calibration in disambiguation audits.

## Caveats

- Specificity weights depend on the database and time window used to estimate feature frequencies.
- Rare metadata can be noisy, misspelled, or inconsistently recorded.
- A strict quality limit can protect precision while harming recall in large or heterogeneous name blocks.
- Equal weighting of many attributes can dilute strong evidence unless weighting is validated.

## Links

- [author similarity clustering](author_similarity_clustering.md)
- [author metadata similarity features](../representations/author_metadata_similarity_features.md)
- [block-size-dependent disambiguation thresholds](block_size_dependent_disambiguation_thresholds.md)
- [disambiguation attribute-set ablation](../validations/disambiguation_attribute_set_ablation.md)
- [disambiguation threshold flexibility upper bound](../validations/disambiguation_threshold_flexibility_upper_bound.md)
- [name-block size complexity](../measures/name_block_size_complexity.md)
- [unsupervised author-disambiguation comparison](unsupervised_author_disambiguation_comparison.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `backes_specificity_weighted_cluster_disambiguation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: Backes author disambiguation; specificity-weighted disambiguation; quality-limit author clustering; weighted metadata author clustering
