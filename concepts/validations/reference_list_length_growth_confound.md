# Reference-list length growth confound

## Summary

Reference-list length growth confound is the risk that rising counts of cited fields or categories partly reflect longer reference lists rather than deeper or more distant knowledge integration.

## Canonical Form

- Unit of analysis: paper, field-year cell, reference list, cited-category profile, or interdisciplinarity indicator.
- Typical representation: references per paper alongside cited-category count, category shares, and disparity-aware diversity.
- Validation target: whether apparent interdisciplinarity growth survives adjustment for longer bibliographies.
- Empirical signature: cited-category counts rise, but newly cited categories hold small shares or contribute little to disparity-weighted diversity.

## Uses in Science of Science

- Guards interpretation of [category variety](../measures/category_variety.md) and cited-field counts.
- Explains part of [neighboring-field integration growth](../mechanisms/neighboring_field_integration_growth.md) when reference lists expand faster than citation shares shift.
- Complements [Rao-Stirling diversity](../measures/rao_stirling_diversity.md), which can deflate simple breadth increases when added categories are nearby or low-share.
- Helps [interdisciplinarity metric-map triangulation](interdisciplinarity_metric_map_triangulation.md) distinguish breadth from integration.

## Operationalization

- Track references per paper, cited-category count, within-category citation share, and diversity scores in the same field-year cells.
- Normalize or model cited-category count conditional on reference-list length where possible.
- Inspect whether newly added categories receive meaningful citation shares or appear mainly as sparse tail categories.
- Report whether growth in interdisciplinarity remains after accounting for bibliography-length norms.

## Evidence and Validations

- Verified full-text evidence from Porter and Rafols (2009) reports that references per article grew by more than 50% on average across six Web of Science subject-category benchmarks from 1975 to 2005.
- The same paper reports that the number of cited subject categories also grew by about 50%.
- Porter and Rafols caution that increased reference-list length means the proportions assigned to newly cited categories may remain small, limiting the increase in Integration scores.
- Their analysis uses this confound to explain why simple cited-category breadth grows faster than disparity-aware interdisciplinarity.

## Caveats

- Longer reference lists can reflect real epistemic broadening as well as changing citation norms.
- Fields differ in reference-list conventions, review-article prevalence, and database coverage.
- Normalizing by reference-list length can remove substantive changes if the research practice truly involves citing more sources.
- The confound is citation-based and does not address interdisciplinarity in methods, teams, or problem framings.

## Links

- [category variety](../measures/category_variety.md)
- [cited subject-category reference profile](../representations/cited_subject_category_reference_profile.md)
- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [neighboring-field integration growth](../mechanisms/neighboring_field_integration_growth.md)
- [interdisciplinarity metric-map triangulation](interdisciplinarity_metric_map_triangulation.md)
- [reference-citation balance](../representations/reference_citation_balance.md)
- [interdisciplinarity benchmark field panel](../datasets/interdisciplinarity_benchmark_field_panel.md)

## References

- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]

## Metadata

- Concept ID: `reference_list_length_growth_confound`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Porter and Rafols (2009) (2009)
- Latest seen paper: Porter and Rafols (2009) (2009)
- Primary reference DOI: `10.1007/s11192-008-2197-2`
- OpenAlex ID: `W2087238585`
- Dimensions ID: `pub.1024224648`
- SciSciNet ID: `W2087238585`
- Aliases: reference growth confound; bibliography-length confound; cited-category breadth confound; reference-list expansion bias
