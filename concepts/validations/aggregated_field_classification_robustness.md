# Aggregated field-classification robustness

## Summary

Aggregated field-classification robustness checks whether interdisciplinarity or citation results persist when fine-grained subject categories are replaced by broader field classifications.

## Canonical Form

- Unit of analysis: paper, reference-list category profile, field taxonomy, journal assignment, or model coefficient.
- Typical representation: side-by-side estimates under fine and aggregated field schemes.
- Validation target: whether measurement conclusions depend on category granularity and multi-category journal assignments.
- Empirical signature: estimated effects or rankings remain substantively similar after switching to a broader classification that reduces multiple assignment artifacts.

## Uses in Science of Science

- Provides a robustness route for [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md).
- Complements [field-classification sensitivity](field_classification_sensitivity.md), [subject-category similarity matrix sensitivity](subject_category_similarity_matrix_sensitivity.md), and [multidisciplinary field-mix caveat](multidisciplinary_field_mix_caveat.md).
- Helps validate measures based on [cited subject-category reference profiles](../representations/cited_subject_category_reference_profile.md).
- Supports responsible use of field-based indicators in science policy and evaluation.

## Operationalization

- Recompute interdisciplinarity measures under the original fine-grained field taxonomy.
- Recompute the same measures under an aggregated classification scheme.
- Refit the main models or regenerate rankings under both schemes.
- Report whether direction, magnitude, and statistical conclusions are stable.
- Explain any changes caused by category coarsening, reduced multi-assignment, or broader field boundaries.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) notes that Web of Science journals can be assigned to multiple subject categories, which can create measurement problems.
- As a robustness check, they replace Web of Science subject categories with the more aggregated ECOOM discipline scheme containing 68 disciplines.
- They argue that aggregated fields reduce instances of journals having multiple field assignments.
- Their results remain consistent under the aggregated discipline classification.

## Caveats

- Aggregation can hide meaningful interdisciplinary differences by merging nearby or distinct specialties.
- Robustness under one alternative taxonomy does not prove robustness under all classification systems.
- Broader fields may reduce multiple assignment but can weaken the interpretation of cognitive distance.

## Links

- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [field-classification sensitivity](field_classification_sensitivity.md)
- [field classifications](../measures/field_classifications.md)
- [cited subject-category reference profile](../representations/cited_subject_category_reference_profile.md)
- [WoS subject-category co-citation matrix](../representations/wos_subject_category_cocitation_matrix.md)
- [subject-category similarity matrix sensitivity](subject_category_similarity_matrix_sensitivity.md)
- [multidisciplinary field-mix caveat](multidisciplinary_field_mix_caveat.md)
- [multidisciplinary category exclusion robustness](multidisciplinary_category_exclusion_robustness.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]

## Metadata

- Concept ID: `aggregated_field_classification_robustness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2015) (2015)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: aggregated discipline robustness; field aggregation robustness; ECOOM classification robustness; coarse field taxonomy check
