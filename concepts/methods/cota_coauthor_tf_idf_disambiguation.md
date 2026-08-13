# COTA coauthor TF-IDF disambiguation

## Summary

COTA coauthor TF-IDF disambiguation is an unsupervised author-name disambiguation method that first links mentions sharing coauthors and then merges clusters using title and journal-title TF-IDF similarity.

## Canonical Form

- Unit of analysis: author mention, name block, coauthor-linked cluster, title vector, journal-title vector, or merged author cluster.
- Typical representation: two-step clustering workflow, coauthor seed clusters, TF-IDF cosine similarity matrix, or thresholded cluster merge.
- Method target: resolve same-name author mentions without supervised training labels.
- Empirical signature: initial coauthor evidence creates candidate clusters that are later merged when text and journal metadata are sufficiently similar.

## Uses in Science of Science

- Provides a named method inside [unsupervised author-disambiguation comparison](unsupervised_author_disambiguation_comparison.md).
- Uses [author metadata similarity features](../representations/author_metadata_similarity_features.md) focused on coauthors, titles, and journals.
- Supplies a concrete algorithmic variant for [author similarity clustering](author_similarity_clustering.md).
- Can be benchmarked with [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md) and name-only baselines.

## Operationalization

- Block author mentions by a canonical name representation.
- Within each block, group mentions that share coauthor evidence.
- Compute TF-IDF vectors from publication titles and journal titles for candidate clusters.
- Merge clusters whose title and journal similarity exceed the method's threshold.
- Evaluate precision, recall, and cluster-level metrics against a labeled identifier source.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) includes COTA as one of the unsupervised author-disambiguation approaches in a common comparison.
- The paper describes COTA as a two-step approach using shared coauthors first and title/journal-title similarity after the coauthor step.
- In the Tekles and Bornmann benchmark, method rankings depend on the chosen metric and COTA does not dominate the comparison.
- The results show why coauthor-plus-TF-IDF rules should be evaluated against both pairwise and cluster-as-author metrics.

## Caveats

- Coauthor evidence is sparse for solo papers and can split authors who change collaborators.
- Title and journal similarity can merge different people working in the same field.
- Thresholds tuned on one labeled sample may not transfer to another database or field.
- The method is unsupervised but still depends on preprocessing choices and metadata coverage.

## Links

- [unsupervised author-disambiguation comparison](unsupervised_author_disambiguation_comparison.md)
- [author similarity clustering](author_similarity_clustering.md)
- [author metadata similarity features](../representations/author_metadata_similarity_features.md)
- [author-name blocking](author_name_blocking.md)
- [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md)
- [name-only disambiguation baselines](../validations/name_only_disambiguation_baselines.md)
- [ResearcherID disambiguation gold standard](../validations/researcherid_disambiguation_gold_standard.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `cota_coauthor_tf_idf_disambiguation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: COTA; coauthor TF-IDF author disambiguation; coauthor-title-journal clustering; COTA author-name disambiguation
