# Science mapping kit reuse

## Summary

Science mapping kit reuse packages the matrices, category assignments, templates, and overlay instructions needed for other researchers to reproduce or extend a science-map overlay workflow.

## Canonical Form

- Unit of analysis: base map, category-position file, similarity matrix, factor-loading matrix, overlay template, or map-generation script.
- Typical representation: reusable map kit with lookup tables, base maps, labeled templates, and example overlays.
- Method target: make science-map overlays portable across topics, portfolios, institutions, and evaluation cases.
- Empirical signature: a new paper set can be mapped by joining its records to the published lookup and applying the documented overlay procedure.

## Uses in Science of Science

- Turns [science map overlays](../representations/science_map_overlays.md) from one-off figures into reusable infrastructure.
- Supports [science map update workflows](science_map_update_workflows.md) by separating base-map artifacts from focal overlay data.
- Reuses [WoS subject-category co-citation matrices](../representations/wos_subject_category_cocitation_matrix.md), [macro-discipline factor aggregation](macro_discipline_factor_aggregation.md), and map templates.
- Helps evaluation users compare new portfolios against [interdisciplinarity benchmark field panels](../datasets/interdisciplinarity_benchmark_field_panel.md).

## Operationalization

- Publish the subject-category similarity matrix, category-to-macro-discipline assignments, node coordinates, labels, and visualization thresholds.
- Include templates for unlabeled, labeled, and node-size variants of the base map.
- Provide examples showing how to convert a focal paper set into category shares and overlay node sizes.
- Version the kit so future updates to categories, matrices, or map layouts do not silently change comparisons.

## Evidence and Validations

- Verified full-text evidence from Porter and Rafols (2009) reports that the authors planned to provide science mapping kits enabling others to perform calculations and generate overlay maps for topics of interest.
- The paper's supplementary materials include a 244 by 244 subject-category cosine matrix, a 21-factor macro-discipline solution, 1975 and 2005 overlay maps for six subject categories, and map templates.
- Porter and Rafols frame these artifacts as useful for research intelligence and evaluation, including comparisons to National Academies Keck Futures Initiative participant research.
- This makes the method reusable beyond the six benchmark fields studied in the paper.

## Caveats

- A reusable kit can become stale when database coverage, subject categories, or journal assignments change.
- Portability depends on the focal dataset using compatible category labels or lookup tables.
- Reused maps should preserve warnings about layout distortion, ambiguous category assignments, and matrix sensitivity.
- Evaluation uses require more documentation than exploratory visualization.

## Links

- [science map overlays](../representations/science_map_overlays.md)
- [field-year cited-SC overlay](../representations/field_year_cited_sc_overlay.md)
- [WoS subject-category co-citation matrix](../representations/wos_subject_category_cocitation_matrix.md)
- [macro-discipline factor aggregation](macro_discipline_factor_aggregation.md)
- [science map update workflows](science_map_update_workflows.md)
- [science-location lookup tables](science_location_lookup_tables.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)

## References

- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]

## Metadata

- Concept ID: `science_mapping_kit_reuse`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Porter and Rafols (2009) (2009)
- Latest seen paper: Porter and Rafols (2009) (2009)
- Primary reference DOI: `10.1007/s11192-008-2197-2`
- OpenAlex ID: `W2087238585`
- Dimensions ID: `pub.1024224648`
- SciSciNet ID: `W2087238585`
- Aliases: science mapping kit; reusable overlay map kit; map template reuse; science map reproducibility kit
