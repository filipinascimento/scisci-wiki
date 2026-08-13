# Name-block size complexity

## Summary

Name-block size complexity measures how difficult an author-disambiguation task is by the number of author mentions or real-world authors sharing the same canonical name block.

## Canonical Form

- Unit of analysis: canonical name block, author mention, real-world author, block-size class, or disambiguation sample.
- Typical representation: number of mentions per block, number of real authors per block, largest-block size, block-size distribution, or block-size-stratified F1.
- Measurement target: computational and statistical difficulty of resolving authors who share a canonical name representation.
- Empirical signature: larger blocks create more pairwise comparisons, more opportunities for false links, and lower or more variable disambiguation quality.

## Uses in Science of Science

- Quantifies a difficulty axis for [author-name blocking](../methods/author_name_blocking.md) and [author similarity clustering](../methods/author_similarity_clustering.md).
- Provides strata for [block-size-dependent disambiguation thresholds](../methods/block_size_dependent_disambiguation_thresholds.md).
- Helps evaluate [ResearcherID disambiguation gold standard](../validations/researcherid_disambiguation_gold_standard.md) samples and report [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md) beyond aggregate scores.

## Operationalization

- Normalize author mentions into canonical name blocks, such as first initial plus surname or all initials plus surname.
- Count author mentions and, where labels exist, real-world authors per block.
- Report block-size histograms, largest blocks, and the share of total mentions in large blocks.
- Evaluate precision, recall, and F1 by block-size bins.
- Treat block size as both a runtime driver and an error-risk driver when choosing thresholds and clustering methods.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) frames disambiguation complexity in terms of name block size.
- The paper explains that larger blocks increase computational complexity and create more risk of false links among author mentions.
- Tekles and Bornmann restrict their evaluation to name blocks containing at least five real-world authors to focus on difficult cases.
- Their ResearcherID-labeled evaluation set contains 1,057,978 author mentions in 2,484 name blocks, with the largest block, `y. wang`, containing 7,296 author mentions.
- The full text recommends evaluating results by block size because method performance and precision-recall tradeoffs depend on disambiguation-task complexity.
- The same evidence supports [disambiguation threshold flexibility upper bound](../validations/disambiguation_threshold_flexibility_upper_bound.md), where per-block thresholds expose how much large-block performance depends on calibration.

## Caveats

- Block size depends on the chosen name normalization and blocking representation.
- A small block can still be difficult if metadata are sparse or careers are heterogeneous.
- Real-author counts require a validation source; without labels, mention count is only a proxy for complexity.
- Cultural naming conventions, transliteration, and database coverage can make block-size distributions uneven across countries and fields.

## Links

- [author-name blocking](../methods/author_name_blocking.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [author similarity clustering](../methods/author_similarity_clustering.md)
- [block-size-dependent disambiguation thresholds](../methods/block_size_dependent_disambiguation_thresholds.md)
- [disambiguation threshold flexibility upper bound](../validations/disambiguation_threshold_flexibility_upper_bound.md)
- [ResearcherID disambiguation gold standard](../validations/researcherid_disambiguation_gold_standard.md)
- [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md)
- [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `name_block_size_complexity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: name block size; author block complexity; common-name block difficulty; block-size-stratified disambiguation
