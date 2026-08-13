# Science map measure selection grid

## Summary

Science map measure selection grid compares candidate similarity measures and map layouts across local accuracy, structural accuracy, computational scalability, and qualitative readability before selecting a base science map.

## Canonical Form

- Unit of analysis: candidate map, similarity measure, validation metric, layout algorithm, or decision criterion.
- Typical representation: comparison table, local-accuracy column, structural z-score column, scalability flag, and readability assessment.
- Validation target: selecting a science-map construction pipeline that is accurate enough, scalable enough, and interpretable enough for the intended use.
- Empirical signature: the selected map is not always the highest-scoring on one metric; it balances multiple criteria.

## Uses in Science of Science

- Provides a decision layer for [science map accuracy validation](science_map_accuracy_validation.md) and [journal similarity mapping](../methods/journal_similarity_mapping.md).
- Prevents choosing a measure solely because it maximizes one score while failing scalability or readability.
- Makes map-selection tradeoffs explicit for decision-support maps, portfolio overlays, and field-navigation tools.
- Links [K50 co-citation relatedness](../methods/k50_cocitation_relatedness.md), IC-Jaccard, IC-Cosine, and Pearson-style measures to a common evaluation frame.

## Operationalization

- Define candidate similarity measures and produce comparable map layouts.
- Measure local accuracy and structural accuracy against reference categories or expert labels.
- Record computational scalability for larger journal or paper-level maps.
- Assess qualitative readability, including whether clusters are too loose, too tight, or visually balanced.
- Select the map that best matches the target use case, and document why alternatives were rejected.

## Evidence and Validations

- Verified full-text evidence from Boyack et al. (2005) compares eight maps based on local accuracy, scalability, mutual-information z-score at 200 clusters, and qualitative clustering readability.
- The paper states that raw-count maps perform poorly on at least some criteria, especially raw co-citation.
- Boyack et al. choose CC-K50 as the co-citation map because it balances z-score, local accuracy, scalability, and visual readability better than CC-Pearson.
- For inter-citation maps, the paper selects IC-Jaccard while noting that IC-Cosine is statistically very close and IC-Pearson is weaker in local accuracy and scalability.

## Caveats

- Qualitative readability is necessary for map use but can introduce subjective preference.
- The chosen grid should match the intended map scale: journal-level, paper-level, institution-level, or portfolio overlay.
- A selection grid is only as good as its validation reference and candidate measures.

## Links

- [science map accuracy validation](science_map_accuracy_validation.md)
- [mutual-information map structural accuracy](mutual_information_map_structural_accuracy.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [science map layout and reduction](../methods/science_map_layout_reduction.md)
- [K50 co-citation relatedness](../methods/k50_cocitation_relatedness.md)
- [top-N similarity edge filtering](../methods/top_n_similarity_edge_filtering.md)
- [science maps](../representations/science_maps.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown]

## Metadata

- Concept ID: `science_map_measure_selection_grid`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Boyack et al. (2005) (2005)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Dimensions ID: `pub.1011403274`
- SciSciNet ID: `W2100484636`
- Aliases: map measure comparison grid; science-map selection criteria; local structural scalability readability grid; map pipeline selection grid
