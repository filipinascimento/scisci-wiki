# Macro-discipline factor aggregation

## Summary

Macro-discipline factor aggregation groups fine-grained subject categories into broader map regions by applying factor analysis to a subject-category similarity matrix.

## Canonical Form

- Unit of analysis: subject category, factor loading, macro-discipline, map region, or category-to-region assignment.
- Typical representation: subject-category by factor loading matrix plus a one-to-one or weighted assignment to macro-disciplines.
- Method target: reduce detailed field categories into interpretable regions for science-map visualization.
- Empirical signature: subject categories with similar co-citation profiles load on the same macro-discipline factor.

## Uses in Science of Science

- Turns [WoS subject-category co-citation matrices](../representations/wos_subject_category_cocitation_matrix.md) into interpretable regions for [science maps](../representations/science_maps.md).
- Supports [science map overlays](../representations/science_map_overlays.md) by making dense category maps legible.
- Helps diagnose whether named disciplines align with observed citation groupings in [field classifications](../measures/field_classifications.md).
- Provides a reduction step that should be tracked by [science map accuracy validation](../validations/science_map_accuracy_validation.md) and [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md).

## Operationalization

- Start from a subject-category similarity matrix.
- Run a factor analysis or related dimensionality-reduction/clustering method.
- Choose the number of macro-disciplines, rotation, and assignment rule, then document ambiguous loadings.
- Use macro-discipline labels for map readability while preserving the underlying fine-grained category assignments.

## Evidence and Validations

- Verified full-text evidence from Porter and Rafols (2009) applies principal components analysis to a 244 by 244 subject-category cosine matrix.
- They explore factor solutions and adopt a 20-factor Varimax-rotated solution, then add a 21st literature-and-arts grouping for categories without substantial loadings.
- Porter and Rafols assign each subject category to the factor on which it loads highest and use the resulting macro-disciplines to label science maps.
- The paper notes that some traditional discipline names do not coalesce cleanly into one macro-discipline, which warns against treating legacy labels as fixed field structure.

## Caveats

- Factor count, rotation, and assignment rules can change map regions.
- Single-factor assignments improve readability but can hide multidisciplinary subject categories.
- Macro-discipline labels are interpretive summaries of loadings, not natural kinds.

## Links

- [WoS subject-category co-citation matrix](../representations/wos_subject_category_cocitation_matrix.md)
- [science maps](../representations/science_maps.md)
- [science map overlays](../representations/science_map_overlays.md)
- [science map layout and reduction](science_map_layout_reduction.md)
- [field classifications](../measures/field_classifications.md)
- [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)

## References

- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]

## Metadata

- Concept ID: `macro_discipline_factor_aggregation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Porter and Rafols (2009) (2009)
- Latest seen paper: Porter and Rafols (2009) (2009)
- Primary reference DOI: `10.1007/s11192-008-2197-2`
- OpenAlex ID: `W2087238585`
- Dimensions ID: `pub.1024224648`
- SciSciNet ID: `W2087238585`
- Aliases: macro-discipline PCA; subject-category factor aggregation; map-region factor analysis; SC macro-discipline grouping
