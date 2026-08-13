# Author similarity clustering

## Summary

Author similarity clustering groups author mentions into inferred people by comparing metadata features within name blocks and merging sufficiently similar mentions or clusters.

## Canonical Form

- Unit of analysis: author mention pair, author cluster, name block, publication metadata vector, or clustering threshold.
- Typical representation: similarity score, metadata feature vector, threshold, connected component, single-link cluster, or average-link cluster.
- Mechanism or measurement target: infer identity from coauthors, affiliations, journals, titles, topics, subject categories, and other metadata.
- Empirical signature: author mentions inside a name block are linked or merged when feature-based similarity exceeds a threshold.

## Uses in Science of Science

- Provides the second-stage method after [author-name blocking](author_name_blocking.md).
- Turns [author name disambiguation](author_name_disambiguation.md) into an explicit model with features, thresholds, and clustering rules.
- Lets downstream studies audit whether collaboration, career, and mobility results are sensitive to similarity features or linkage strategy.

## Operationalization

- For each name block, construct [author metadata similarity features](../representations/author_metadata_similarity_features.md) from available metadata such as coauthors, affiliations, venues, titles, references, topics, and identifiers.
- Combine features into a pairwise or cluster-level similarity score.
- Choose global or [block-size-dependent disambiguation thresholds](block_size_dependent_disambiguation_thresholds.md) for linking mentions or clusters.
- Apply a clustering rule, often agglomerative clustering, single-link clustering, average-link clustering, or connected components over above-threshold links.
- Validate the resulting clusters with [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md).

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) states that disambiguation approaches assess similarity between author mentions using metadata such as coauthors, subject categories, and journals.
- The paper describes unsupervised approaches as explicitly specifying similarity functions from author-mention attributes rather than learning from supervised training labels.
- Tekles and Bornmann identify three major design choices: which attributes are combined into similarity measures, what threshold determines same-author links, and which clustering strategy groups mentions.
- The verified text describes single-link and average-link clustering as common agglomerative strategies, with different risks for heterogeneous author oeuvres and slightly different authors.
- The same full text benchmarks concrete clustering designs through [unsupervised author-disambiguation comparison](unsupervised_author_disambiguation_comparison.md), including [Caron-van Eck rule-score disambiguation](caron_van_eck_rule_score_disambiguation.md), threshold calibration, and attribute-set ablations.

## Caveats

- Feature availability differs by database, field, year, and document type.
- Single-link clustering can chain together different people through one high-similarity bridge, while average-link clustering can split heterogeneous careers.
- Thresholds that perform well for small name blocks may not perform well for large common-name blocks.

## Links

- [author name disambiguation](author_name_disambiguation.md)
- [author-name blocking](author_name_blocking.md)
- [author metadata similarity features](../representations/author_metadata_similarity_features.md)
- [name-block size complexity](../measures/name_block_size_complexity.md)
- [block-size-dependent disambiguation thresholds](block_size_dependent_disambiguation_thresholds.md)
- [Caron-van Eck rule-score disambiguation](caron_van_eck_rule_score_disambiguation.md)
- [unsupervised author-disambiguation comparison](unsupervised_author_disambiguation_comparison.md)
- [disambiguation threshold flexibility upper bound](../validations/disambiguation_threshold_flexibility_upper_bound.md)
- [disambiguation attribute-set ablation](../validations/disambiguation_attribute_set_ablation.md)
- [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md)
- [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `author_similarity_clustering`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Aliases: author mention clustering; author similarity features; unsupervised author clustering; author linkage thresholds
