# Neighboring-field integration growth

## Summary

Neighboring-field integration growth is the pattern in which science becomes broader by adding nearby or related fields to reference lists rather than by rapidly connecting distant cognitive areas.

## Canonical Form

- Unit of analysis: field, paper set, reference-list category distribution, field-year panel, or science-map overlay.
- Typical representation: rising cited-category count with modest growth in disparity-aware integration scores.
- Mechanism target: incremental expansion of knowledge sources through adjacent fields.
- Empirical signature: variety increases, but new cited categories have small shares or high similarity to already cited categories.

## Uses in Science of Science

- Explains why [category variety](../measures/category_variety.md) can rise faster than [Rao-Stirling diversity](../measures/rao_stirling_diversity.md).
- Links [interdisciplinarity](interdisciplinarity.md) to [category disparity](../measures/category_disparity.md) and [science map overlays](../representations/science_map_overlays.md).
- Helps evaluate claims that a field, institution, or funding program became interdisciplinary: broadening may be real but mostly local.
- Provides a mechanism-level interpretation for [interdisciplinarity benchmark field panels](../datasets/interdisciplinarity_benchmark_field_panel.md).

## Operationalization

- Track cited-category count, reference-list length, within-category citation share, and Rao-Stirling or disparity-aware integration over time.
- Use a category similarity matrix or science-map distance to identify whether newly cited categories are nearby or distant.
- Compare the share of citations assigned to new categories against total reference-list growth.
- Visualize field-year citation profiles with overlays to see whether growth spreads across distant regions or adjacent neighborhoods.

## Evidence and Validations

- Verified full-text evidence from Porter and Rafols (2009) finds that cited subject categories and references per article increase substantially between 1975 and 2005.
- The same paper finds that the Integration score grows much more modestly, mostly around 5% outside Mathematics.
- Porter and Rafols explain this difference by showing that newly cited subject categories often have small citation shares and tend to be near the focal category in the subject-category similarity map.
- Their conclusion is that science is becoming more interdisciplinary in small steps, with citation-based knowledge transfer drawing mainly on neighboring fields.
- The interpretation also depends on [reference-list length growth confound](../validations/reference_list_length_growth_confound.md) and [interdisciplinarity diversity saturation effect](../validations/interdisciplinarity_diversity_saturation_effect.md), because longer bibliographies and high baseline diversity can dampen or inflate apparent growth.

## Caveats

- Neighboring-field growth can still be substantively important for discovery, translation, or method transfer.
- Map proximity depends on the chosen similarity matrix and classification system.
- The mechanism is citation-based and may miss interdisciplinarity visible in teams, methods, instruments, datasets, or problem framing.

## Links

- [interdisciplinarity](interdisciplinarity.md)
- [interdisciplinarity benchmark field panel](../datasets/interdisciplinarity_benchmark_field_panel.md)
- [category variety](../measures/category_variety.md)
- [category disparity](../measures/category_disparity.md)
- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [science map overlays](../representations/science_map_overlays.md)
- [field-year cited-SC overlay](../representations/field_year_cited_sc_overlay.md)
- [reference-list length growth confound](../validations/reference_list_length_growth_confound.md)
- [interdisciplinarity diversity saturation effect](../validations/interdisciplinarity_diversity_saturation_effect.md)
- [WoS subject-category co-citation matrix](../representations/wos_subject_category_cocitation_matrix.md)
- [interdisciplinarity metric-map triangulation](../validations/interdisciplinarity_metric_map_triangulation.md)
- [novelty and conventionality](novelty_conventionality.md)

## References

- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]

## Metadata

- Concept ID: `neighboring_field_integration_growth`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Porter and Rafols (2009) (2009)
- Latest seen paper: Porter and Rafols (2009) (2009)
- Primary reference DOI: `10.1007/s11192-008-2197-2`
- OpenAlex ID: `W2087238585`
- Dimensions ID: `pub.1024224648`
- SciSciNet ID: `W2087238585`
- Aliases: small-step interdisciplinarity; adjacent-field broadening; neighboring subject-category growth; local interdisciplinarity expansion
