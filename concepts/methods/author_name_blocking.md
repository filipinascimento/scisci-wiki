# Author-name blocking

## Summary

Author-name blocking is the first-stage entity-resolution step that groups author mentions into name-based candidate sets before more expensive author disambiguation is applied.

## Canonical Form

- Unit of analysis: author mention, canonical name string, name block, publication-author record, or database shard.
- Typical representation: normalized surname plus initials, exact-match name block, block-size distribution, or block-level evaluation.
- Mechanism or measurement target: reduce the comparison space while preserving most mentions belonging to the same real author.
- Empirical signature: only author mentions within the same name block are compared or clustered in later disambiguation steps.

## Uses in Science of Science

- Makes large-scale [author name disambiguation](author_name_disambiguation.md) computationally feasible.
- Defines the first trade-off between [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md).
- Creates block-level strata for [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md), because common-name blocks are typically harder.

## Operationalization

- Normalize author names by casing, punctuation, whitespace, initials, particles, and surname/given-name parsing.
- Choose a canonical blocking representation, such as first initial plus surname or all initials plus surname.
- Assign author mentions with identical canonical representations to the same block.
- Record [name-block size complexity](../measures/name_block_size_complexity.md) so later thresholds and evaluation can be stratified by block difficulty.
- Run more expensive similarity and clustering only within blocks, then evaluate whether the blocking scheme has introduced uncorrectable false splits.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) describes name-based blocking as usually the first step in author-name disambiguation.
- The paper explains that blocking narrows the search space by assigning author mentions with identical canonical name representations to the same block.
- Tekles and Bornmann emphasize the trade-off: general representations such as first initial plus surname produce larger blocks and fewer splitting errors, while more specific representations such as all initials plus surname reduce computation but can split one author across blocks.
- The verified text notes that splitting errors introduced by blocking are especially consequential because later disambiguation steps cannot correct cross-block splits.

## Caveats

- Blocking is not only an engineering detail; it constrains the maximum recall possible downstream.
- Common names can create very large blocks with lower quality and higher runtime.
- Cross-script names, transliteration, name changes, and inconsistent initials can defeat exact-name blocking.

## Links

- [author name disambiguation](author_name_disambiguation.md)
- [author similarity clustering](author_similarity_clustering.md)
- [name-block size complexity](../measures/name_block_size_complexity.md)
- [block-size-dependent disambiguation thresholds](block_size_dependent_disambiguation_thresholds.md)
- [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md)
- [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [name-based demographic inference](name_based_demographic_inference.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `author_name_blocking`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Aliases: name blocking; canonical name blocks; first-initial surname blocking; author candidate generation
