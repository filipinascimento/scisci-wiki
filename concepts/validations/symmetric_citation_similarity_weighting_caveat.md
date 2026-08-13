# Symmetric citation-similarity weighting caveat

## Summary

Symmetric citation-similarity weighting caveat is the limitation that symmetric journal similarity measures can treat citations from high-status and low-status sources as equivalent.

## Canonical Form

- Unit of analysis: journal pair, citation edge, similarity score, source prestige, or map input matrix.
- Typical representation: caveat attached to symmetric citation-based similarity measures.
- Validation target: avoid assuming every citation contributes equally to map similarity.
- Empirical signature: maps based only on symmetric citation similarity can miss directional or prestige-weighted differences in citation meaning.

## Uses in Science of Science

- Refines [citation-linkage similarity bias](citation_linkage_similarity_bias.md).
- Adds a weighting caveat to [weighted science-map matrix fusion](../methods/weighted_science_map_matrix_fusion.md).
- Applies to [journal similarity mapping](../methods/journal_similarity_mapping.md) and [science map accuracy validation](science_map_accuracy_validation.md).

## Operationalization

- Identify whether the similarity measure is symmetric.
- Assess whether citation source status, journal rank, or directional influence should matter.
- Compare symmetric measures with directional or weighted alternatives.
- Combine citation-linkage data with topical data when symmetric citation links are insufficient.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) notes that many citation-based similarity measures are symmetric.
- The discussion warns that symmetry is problematic because a citation from a high-profile journal may count differently from one from a lower-ranked journal.
- The paper argues that combining linkage and topical data is desirable because citation links alone are imperfect.

## Caveats

- Source prestige weighting can introduce its own hierarchy bias.
- Symmetric measures can still be useful for some structural mapping tasks.
- Directional weighting choices should be validated against paper-level or expert benchmarks.

## Links

- [citation-linkage similarity bias](citation_linkage_similarity_bias.md)
- [weighted science-map matrix fusion](../methods/weighted_science_map_matrix_fusion.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [science map accuracy validation](science_map_accuracy_validation.md)
- [journal-cluster science backbones](../representations/journal_cluster_science_backbones.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; SciSciNet: W2036137014; WoS: unknown]

## Metadata

- Concept ID: `symmetric_citation_similarity_weighting_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: symmetric citation similarity caveat; citation source-weighting caveat; journal-status similarity bias; symmetric linkage weighting risk
