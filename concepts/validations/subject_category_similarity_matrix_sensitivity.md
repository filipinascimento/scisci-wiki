# Subject-category similarity matrix sensitivity

## Summary

Subject-category similarity matrix sensitivity checks whether interdisciplinarity scores and map interpretations change when the field-distance matrix is rebuilt from a different citation sample or construction rule.

## Canonical Form

- Unit of analysis: subject-category pair, similarity matrix, field-year article set, diversity score, or overlay map.
- Typical representation: alternative matrix comparison, score correlation table, rank-shift audit, or map-stability check.
- Validation target: whether results depend on the chosen category-distance infrastructure.
- Empirical signature: scalar indicators or maps remain substantively similar under alternative matrices, or differences identify matrix-dependent cases.

## Uses in Science of Science

- Validates [Rao-Stirling diversity](../measures/rao_stirling_diversity.md) when category disparity is estimated from citation data.
- Tests the robustness of [WoS subject-category co-citation matrices](../representations/wos_subject_category_cocitation_matrix.md).
- Helps interpret [science map overlays](../representations/science_map_overlays.md), [macro-discipline factor aggregation](../methods/macro_discipline_factor_aggregation.md), and [interdisciplinarity metric-map triangulation](interdisciplinarity_metric_map_triangulation.md).
- Makes field-distance assumptions visible before using interdisciplinarity scores for evaluation.

## Operationalization

- Construct or obtain at least two subject-category similarity or distance matrices.
- Recompute integration, disparity, and map overlays with each matrix.
- Compare score levels, rank order, correlations with simpler indicators, and visible map differences.
- Report matrix source records, years, country filters, document types, normalization, and similarity metric.

## Evidence and Validations

- Verified full-text evidence from Porter and Rafols (2009) computes Integration scores using a subject-category similarity matrix from a 30,261-article U.S. Web of Science sample.
- The paper reports checking a second similarity matrix based on all 2007 ISI data following Leydesdorff and Rafols.
- Porter and Rafols state that similar results are obtained overall, while correlations between Integration and Shannon or Herfindahl indicators can drop into the 0.5-0.8 range for some highly integrative fields.
- They interpret this as evidence that matrix choice matters most where categories overlap strongly, especially in biomedical areas.

## Caveats

- Similar score trajectories do not guarantee that every field, institution, or narrow topic is robust.
- Alternative matrices may differ in years, coverage, country filters, and cited-reference matching quality at the same time.
- Sparse subject categories can create unstable distances.
- Score robustness should be paired with map inspection when using the results for policy or portfolio evaluation.

## Links

- [WoS subject-category co-citation matrix](../representations/wos_subject_category_cocitation_matrix.md)
- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [category disparity](../measures/category_disparity.md)
- [macro-discipline factor aggregation](../methods/macro_discipline_factor_aggregation.md)
- [science map overlays](../representations/science_map_overlays.md)
- [interdisciplinarity metric-map triangulation](interdisciplinarity_metric_map_triangulation.md)
- [journal subject-category thesaurus matching](../methods/journal_subject_category_thesaurus_matching.md)

## References

- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]

## Metadata

- Concept ID: `subject_category_similarity_matrix_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Porter and Rafols (2009) (2009)
- Latest seen paper: Porter and Rafols (2009) (2009)
- Primary reference DOI: `10.1007/s11192-008-2197-2`
- OpenAlex ID: `W2087238585`
- Dimensions ID: `pub.1024224648`
- SciSciNet ID: `W2087238585`
- Aliases: SC similarity sensitivity; interdisciplinarity distance-matrix robustness; category-distance matrix audit; Integration matrix sensitivity
