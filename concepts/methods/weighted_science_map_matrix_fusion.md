# Weighted science-map matrix fusion

## Summary

Weighted science-map matrix fusion combines multiple journal-journal or paper-paper similarity matrices into one map input while preserving source, year, and feature-type provenance.

## Canonical Form

- Unit of analysis: journal pair, feature-specific similarity matrix, source-year matrix, fused matrix, or map-input edge.
- Typical representation: weighted sum or reduction of cited-reference, keyword, co-citation, inter-citation, and source-specific matrices.
- Method target: use complementary evidence sources without over-weighting missing or ambiguous features.
- Empirical signature: a single map-input matrix records contributions from multiple sources and feature types with explicit weights.

## Uses in Science of Science

- Extends [journal similarity mapping](journal_similarity_mapping.md) when a map draws on multiple data sources or feature types.
- Supplies input for [science map layout and reduction](science_map_layout_reduction.md), [top-N similarity edge filtering](top_n_similarity_edge_filtering.md), and [science map update workflows](science_map_update_workflows.md).
- Helps compare maps built from citation-only, text-only, keyword-only, or fused evidence.
- Provides a method response to [citation-linkage similarity bias](../validations/citation_linkage_similarity_bias.md) when citation-only proximity is too confounded for the intended map.
- Provides a reproducible bridge between [Web of Science](../datasets/web_of_science.md), Scopus-like source sets, [OpenAlex](../datasets/openalex.md), and [Dimensions](../datasets/dimensions.md) when multiple source layers are used.

## Operationalization

- Define each component matrix by source, year, entity type, feature type, and normalization rule.
- Compute matrix-level weights from documented rules such as total matrix sums or expected feature reliability.
- Fuse the matrices into a single relatedness matrix before layout.
- Record how missing pairwise evidence is handled so absent data are not mistaken for zero similarity.
- Validate the fused matrix against local and structural map-quality criteria.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) describes the UCSD map workflow as computing journal-journal matrices separately by source, year, and feature type.
- The paper reports that sums were computed for each matrix, those sums were used to create weighting factors, and 18 individual matrices were combined into a single journal-journal matrix.
- Borner et al. state that the matrix-weighting and reduction method was designed to use the best available information for each journal pair and avoid penalizing pairs when information was missing in a particular matrix.
- The same paper documents explicit feature-type weighting: cited references were weighted more heavily than keywords because of the authors' experience with the relative ambiguity of those feature types.
- In the discussion, Borner et al. argue that citation-only similarity is imperfect and that combining linkage and topical data is desirable.

## Caveats

- Fusion can hide disagreement among component matrices.
- Feature weights encode expert judgment and should be sensitivity-tested.
- Missing information, low coverage, and source-specific biases can still shape the fused map even when they are not treated as zero evidence.

## Links

- [journal similarity mapping](journal_similarity_mapping.md)
- [science map layout and reduction](science_map_layout_reduction.md)
- [top-N similarity edge filtering](top_n_similarity_edge_filtering.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)
- [citation-linkage similarity bias](../validations/citation_linkage_similarity_bias.md)
- [science map update workflows](science_map_update_workflows.md)
- [science maps](../representations/science_maps.md)
- [Web of Science](../datasets/web_of_science.md)
- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]
- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown]

## Metadata

- Concept ID: `weighted_science_map_matrix_fusion`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: matrix weighting and reduction; fused science-map matrix; weighted relatedness matrix; multi-source map fusion
