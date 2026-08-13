# Coauthorship name-resolution bounds

## Summary

Coauthorship name-resolution bounds estimate how author-name ambiguity changes network statistics by constructing alternative graphs from coarse and fine name keys.

## Canonical Form

- Unit of analysis: author name string, name key, author node, coauthorship edge, field panel, or network statistic.
- Typical representation: lower and upper bounds from first-initial/surname versus all-initials/surname matching.
- Validation target: quantify the sensitivity of coauthorship results to homonym and synonym author errors.
- Empirical signature: author counts, component sizes, collaborator counts, and other measures shift between coarse-merge and fine-split name rules.

## Uses in Science of Science

- Provides an early, practical validation layer for [coauthorship networks](../representations/coauthorship_networks.md).
- Connects [homonym and synonym author errors](homonym_synonym_author_errors.md), [author-name blocking](../methods/author_name_blocking.md), and [name-block size complexity](../measures/name_block_size_complexity.md) to network statistics.
- Helps separate true field differences from artifacts created by common names, inconsistent initials, or institutional name variants.
- Supports [field collaboration-mode contrast](../measures/field_collaboration_mode_contrast.md) when cross-field name ambiguity differs.

## Operationalization

- Build one coauthorship graph using surname plus first initial, which tends to merge people who share a coarse name key.
- Build a second graph using surname plus all initials, which tends to split one person who appears with different initials.
- Treat the two graphs as plausible bounds on author count and related statistics.
- Report which network statistics are stable across the bounds and which are sensitive.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) states that the number of distinct author names is not the same as the number of authors because one person can publish under different name variants and multiple people can share a name.
- Newman constructs two versions of each collaboration network: one using surname and first initial, and one using surname and all initials.
- The paper interprets these two versions as upper and lower bounds on the number of authors and therefore on other coauthorship-network quantities.
- Newman also notes that common names can create implausibly productive apparent authors, making productivity tails and collaborator counts sensitive to name ambiguity.

## Caveats

- Initial-based bounds are a coarse validation strategy, not full author disambiguation.
- Cultural naming conventions, initials, transliteration, name changes, and database formatting can shift which bound is closer to reality.
- Modern identifiers and algorithmic disambiguation should still report residual uncertainty.

## Links

- [author name disambiguation](../methods/author_name_disambiguation.md)
- [author-name blocking](../methods/author_name_blocking.md)
- [homonym and synonym author errors](homonym_synonym_author_errors.md)
- [name-block size complexity](../measures/name_block_size_complexity.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [collaborator-count distribution](../measures/collaborator_count_distribution.md)
- [papers-per-author distribution](../measures/papers_per_author_distribution.md)
- [field collaboration-mode contrast](../measures/field_collaboration_mode_contrast.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; WoS: unknown]
- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `coauthorship_name_resolution_bounds`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1103/PhysRevE.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: author-name bound check; first-initial all-initial bounds; coauthor identity sensitivity; initial-based author ambiguity bounds
