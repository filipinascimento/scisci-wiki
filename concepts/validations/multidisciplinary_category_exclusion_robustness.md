# Multidisciplinary category exclusion robustness

## Summary

Multidisciplinary category exclusion robustness checks whether results based on field or subject-category assignments survive excluding broad multidisciplinary categories whose article-level disciplinary meaning is unclear.

## Canonical Form

- Unit of analysis: reference, paper, journal subject category, multidisciplinary category, interdisciplinarity score, or citation model.
- Typical representation: model estimates with and without multidisciplinary category references.
- Validation target: whether broad multidisciplinary labels distort field-profile, interdisciplinarity, or citation-normalization measures.
- Empirical signature: substantive conclusions remain stable after excluding references assigned to a multidisciplinary sciences category.

## Uses in Science of Science

- Specializes [multidisciplinary field-mix caveat](multidisciplinary_field_mix_caveat.md) for reference-list interdisciplinarity measurement.
- Provides a robustness check for [cited subject-category reference profiles](../representations/cited_subject_category_reference_profile.md), [category variety](../measures/category_variety.md), and [category disparity](../measures/category_disparity.md).
- Complements [aggregated field-classification robustness](aggregated_field_classification_robustness.md) when testing sensitivity to field taxonomy.
- Helps avoid treating a general-science journal label as a meaningful disciplinary category.

## Operationalization

- Identify broad multidisciplinary categories in the source classification.
- Recompute reference profiles and interdisciplinarity measures after excluding references assigned to those categories.
- Refit impact, delay, or field-normalization models.
- Compare coefficient signs, magnitudes, ranks, or classifications with the baseline specification.
- Report how many references and papers are affected by the exclusion.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) notes that multidisciplinary journals have unclear disciplinary memberships.
- The authors exclude references in the Web of Science multidisciplinary sciences subject category from their interdisciplinarity measures as a robustness check.
- They report that the results remain consistent after this exclusion.
- This supports treating broad multidisciplinary categories as a classification-sensitivity issue rather than as ordinary field labels.

## Caveats

- Excluding multidisciplinary categories can remove genuinely interdisciplinary references.
- The appropriate handling of multidisciplinary journals may be article-level reassignment rather than exclusion.
- Robustness under exclusion does not solve ambiguity for analyses specifically focused on multidisciplinary venues.

## Links

- [multidisciplinary field-mix caveat](multidisciplinary_field_mix_caveat.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [cited subject-category reference profile](../representations/cited_subject_category_reference_profile.md)
- [category variety](../measures/category_variety.md)
- [category disparity](../measures/category_disparity.md)
- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [field-classification sensitivity](field_classification_sensitivity.md)
- [aggregated field-classification robustness](aggregated_field_classification_robustness.md)
- [reference set construction](../methods/reference_set_construction.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]

## Metadata

- Concept ID: `multidisciplinary_category_exclusion_robustness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2015) (2015)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: multidisciplinary SC exclusion; multidisciplinary category robustness; general-science category exclusion; multidisciplinary reference sensitivity
