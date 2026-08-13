# Field-year cited-SC overlay

## Summary

Field-year cited-SC overlay represents the subject categories cited by a field in a specific year as weighted nodes on a base map of science.

## Canonical Form

- Unit of analysis: field-year article set, cited subject category, node weight, macro-discipline region, or map overlay.
- Typical representation: base science map with node area proportional to citations from the focal field-year set.
- Representation target: where the knowledge sources of a field sit in the broader science map at a given time.
- Empirical signature: field-year overlays show concentration near a focal region, neighboring-field spread, and occasional distant-category links.

## Uses in Science of Science

- Makes [cited subject-category reference profiles](cited_subject_category_reference_profile.md) visually interpretable.
- Provides a time-comparison layer for [science map overlays](science_map_overlays.md) and [interdisciplinarity metric-map triangulation](../validations/interdisciplinarity_metric_map_triangulation.md).
- Helps diagnose [neighboring-field integration growth](../mechanisms/neighboring_field_integration_growth.md) by showing whether new citations spread locally or across distant map regions.
- Connects [macro-discipline factor aggregation](../methods/macro_discipline_factor_aggregation.md) to field-level citation behavior.

## Operationalization

- Select a field-year paper set and assign its cited references to subject categories.
- Compute each cited category's share or count in that field-year set.
- Place subject-category nodes on a documented base map and scale node area or color by the field-year citation profile.
- Compare overlays across years or fields using the same base map and scaling rules.

## Evidence and Validations

- Verified full-text evidence from Porter and Rafols (2009) overlays Biotechnology cited subject categories from 1975 and 2005 on a base science map.
- The paper states that node area is proportional to the number of citations to a subject category by articles in the focal field.
- Porter and Rafols also show 2005 overlays for Electrical and Electronic Engineering and Mathematics, using the maps to interpret scalar interdisciplinarity indicators.
- The overlays reveal that field broadening often occurs near the focal category's map neighborhood rather than through large jumps to distant macro-disciplines.

## Caveats

- A field-year overlay depends on the base map, journal-to-category assignments, and node-scaling choices.
- Small node weights can be visually underemphasized even when they represent important emerging cross-field links.
- Two-dimensional maps distort high-dimensional category relationships.
- Field-year overlays should be paired with scalar indicators and matrix-sensitivity checks.

## Links

- [science map overlays](science_map_overlays.md)
- [science maps](science_maps.md)
- [cited subject-category reference profile](cited_subject_category_reference_profile.md)
- [WoS subject-category co-citation matrix](wos_subject_category_cocitation_matrix.md)
- [macro-discipline factor aggregation](../methods/macro_discipline_factor_aggregation.md)
- [neighboring-field integration growth](../mechanisms/neighboring_field_integration_growth.md)
- [science mapping kit reuse](../methods/science_mapping_kit_reuse.md)
- [subject-category similarity matrix sensitivity](../validations/subject_category_similarity_matrix_sensitivity.md)

## References

- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]

## Metadata

- Concept ID: `field_year_cited_sc_overlay`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Porter and Rafols (2009) (2009)
- Latest seen paper: Porter and Rafols (2009) (2009)
- Primary reference DOI: `10.1007/s11192-008-2197-2`
- OpenAlex ID: `W2087238585`
- Dimensions ID: `pub.1024224648`
- SciSciNet ID: `W2087238585`
- Aliases: field-year science overlay; cited-SC field overlay; field citation overlay map; subject-category citation overlay
