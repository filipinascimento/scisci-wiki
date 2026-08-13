# Interdisciplinarity metric-map triangulation

## Summary

Interdisciplinarity metric-map triangulation compares scalar interdisciplinarity indicators with science-map overlays to check whether a measured increase reflects nearby category growth, balanced spread, or distant integration.

## Canonical Form

- Unit of analysis: paper set, field-year cell, overlay map, scalar indicator, or benchmark comparison.
- Typical representation: cited-category counts, within-category shares, diversity indices, integration scores, and overlay maps interpreted together.
- Validation target: make interdisciplinarity claims robust to indicator choice and map interpretation.
- Empirical signature: maps explain why scalar metrics agree, diverge, saturate, or understate visible distant spread.

## Uses in Science of Science

- Validates [Rao-Stirling diversity](../measures/rao_stirling_diversity.md) and simpler [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md) against visual field structure.
- Turns [science map overlays](../representations/science_map_overlays.md) into an audit tool rather than only a display.
- Helps interpret [neighboring-field integration growth](../mechanisms/neighboring_field_integration_growth.md) and field benchmark results.
- Supports responsible use of interdisciplinarity metrics in program evaluation, portfolio analysis, and policy monitoring.
- Adds [science-map projection readability tradeoff](science_map_projection_readability_tradeoff.md) when a two-dimensional overlay is being used to interpret high-dimensional subject-category relations.

## Operationalization

- Compute multiple indicators for the same article set: within-category share, cited-category count, balance/concentration, disparity, and integration score.
- Overlay the cited-category distribution on a documented base science map.
- Compare scalar changes with visible spread, concentration, neighboring-region expansion, and distant-region links.
- Record cases where indicators disagree and inspect whether disagreement comes from reference-list growth, category similarity, map reduction, or classification artifacts.

## Evidence and Validations

- Verified full-text evidence from Porter and Rafols (2009) explicitly combines bibliometric indicators, the Integration score, and overlay science maps to characterize interdisciplinarity.
- They argue that multiple indicators can enrich and validate the Integration score because interdisciplinarity is multidimensional.
- Porter and Rafols use maps to show why cited-category counts grow faster than Integration scores: many new cited categories are nearby in the science map.
- They also state that the Integration score cannot fully capture some visible map changes, motivating a heuristic rather than black-box interpretation of diversity indices.
- Their map-based validation includes [field-year cited-SC overlays](../representations/field_year_cited_sc_overlay.md), [subject-category similarity matrix sensitivity](subject_category_similarity_matrix_sensitivity.md), and reusable [science mapping kit reuse](../methods/science_mapping_kit_reuse.md).
- The same full text warns that the visual map is a deliberately simplified projection, so readability and distortion must be documented when triangulating scalar and mapped evidence.

## Caveats

- Map interpretation can be subjective unless the base map, labels, thresholds, and layout method are documented.
- Visual overlays inherit layout distortions and classification errors.
- Triangulation can reveal disagreements but does not by itself determine which indicator is best for a given policy use.

## Links

- [interdisciplinarity](../mechanisms/interdisciplinarity.md)
- [interdisciplinarity benchmark field panel](../datasets/interdisciplinarity_benchmark_field_panel.md)
- [neighboring-field integration growth](../mechanisms/neighboring_field_integration_growth.md)
- [within-subject-category citation share](../measures/within_subject_category_citation_share.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [science map overlays](../representations/science_map_overlays.md)
- [field-year cited-SC overlay](../representations/field_year_cited_sc_overlay.md)
- [subject-category similarity matrix sensitivity](subject_category_similarity_matrix_sensitivity.md)
- [science mapping kit reuse](../methods/science_mapping_kit_reuse.md)
- [science map accuracy validation](science_map_accuracy_validation.md)
- [science-map projection readability tradeoff](science_map_projection_readability_tradeoff.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]

## Metadata

- Concept ID: `interdisciplinarity_metric_map_triangulation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Porter and Rafols (2009) (2009)
- Latest seen paper: Porter and Rafols (2009) (2009)
- Primary reference DOI: `10.1007/s11192-008-2197-2`
- OpenAlex ID: `W2087238585`
- Dimensions ID: `pub.1024224648`
- SciSciNet ID: `W2087238585`
- Aliases: metric-map triangulation; interdisciplinarity map validation; overlay-metric validation; diversity indicator triangulation
