# Longitudinal subject-category locking

## Summary

Longitudinal subject-category locking is the method of using one journal-to-subject-category assignment scheme across historical years to reduce classification-version drift in trend comparisons.

## Canonical Form

- Unit of analysis: journal, subject category, field-year, cited reference, or interdisciplinarity trend.
- Typical representation: fixed subject-category mapping applied to multiple publication years.
- Method target: improve comparability in longitudinal field or interdisciplinarity analysis.
- Empirical signature: changes in measured interdisciplinarity are less likely to be caused by changes in the classification scheme itself.

## Uses in Science of Science

- Refines [field classifications](../measures/field_classifications.md).
- Extends [journal subject-category thesaurus matching](journal_subject_category_thesaurus_matching.md).
- Complements [WoS longitudinal coverage drift](../validations/wos_longitudinal_coverage_drift.md).
- Supports trend analysis in [interdisciplinarity benchmark field panel](../datasets/interdisciplinarity_benchmark_field_panel.md).

## Operationalization

- Choose a reference-year journal-to-subject-category mapping.
- Apply that mapping consistently to older and newer publication records.
- Document journals missing from the locked mapping.
- Sensitivity-test results against alternative classification years when possible.

## Evidence and Validations

- Verified full-text evidence from Porter and Rafols (2009) uses a consistent journal subject-category assignment for historical comparisons.
- The approach helps interpret changes in interdisciplinarity over time without conflating them with category redefinitions.
- This makes subject-category locking a method-level guardrail for longitudinal mapping.

## Caveats

- Locking a classification can freeze present-day categories onto historical fields.
- New journals or reclassified journals may be hard to place.
- Stable categories do not solve all field-boundary problems.

## Links

- [field classifications](../measures/field_classifications.md)
- [journal subject-category thesaurus matching](journal_subject_category_thesaurus_matching.md)
- [WoS longitudinal coverage drift](../validations/wos_longitudinal_coverage_drift.md)
- [interdisciplinarity benchmark field panel](../datasets/interdisciplinarity_benchmark_field_panel.md)
- [field-year cited SC overlay](../representations/field_year_cited_sc_overlay.md)

## References

- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81(3), 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; SciSciNet: W2087238585]

## Metadata

- Concept ID: `longitudinal_subject_category_locking`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Porter and Rafols (2009) (2009)
- Latest seen paper: Porter and Rafols (2009) (2009)
- Primary reference DOI: `10.1007/s11192-008-2197-2`
- OpenAlex ID: `W2087238585`
- Dimensions ID: `pub.1024224648`
- SciSciNet ID: `W2087238585`
- Aliases: fixed subject-category mapping; locked WoS category scheme; longitudinal SC locking; fixed journal-category assignment
