# Multi-category measure eligibility boundary

## Summary

Multi-category measure eligibility boundary is the requirement that measures needing pairwise category comparisons declare and test the exclusion of records with fewer than two eligible categories.

## Canonical Form

- Unit of analysis: paper, reference list, subject category, category-pair measure, or analysis denominator.
- Typical representation: eligibility flag, excluded-record count, denominator note, or sensitivity check.
- Validation target: prevent pairwise-category measures from silently changing the analysis population.
- Empirical signature: records with fewer than two referenced categories are excluded for disparity or Rao-Stirling measures, while other measures can still use the full sample.

## Uses in Science of Science

- Qualifies [average subject-category dissimilarity](../measures/average_subject_category_dissimilarity.md).
- Applies to [Rao-Stirling diversity](../measures/rao_stirling_diversity.md) and other pairwise disparity measures.
- Complements [interdisciplinarity indicator-choice sensitivity](interdisciplinarity_indicator_choice_sensitivity.md).
- Helps keep [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md) comparable across variety, balance, and disparity measures.

## Operationalization

- Identify which measures require at least two categories or category pairs.
- Flag records that fail the measure-specific eligibility condition.
- Report the number and share of excluded records.
- Re-run models with the full sample for measures that do not require pairwise categories.
- Compare coefficient direction and magnitude across restricted and full denominators.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) states that average dissimilarity and Rao-Stirling diversity cannot be constructed when a focal article references fewer than two subject categories.
- The authors exclude those articles from the analysis for those measures, while noting that regressions using the whole dataset for other measures yielded consistent results.
- Their robustness section repeats the denominator issue and reports consistent results when using the whole sample for the remaining interdisciplinarity measures.

## Caveats

- Excluded single-category records can be substantively important, especially for disciplinary-core comparisons.
- Eligibility boundaries depend on the taxonomy and category-assignment method.
- Full-sample consistency for other measures does not validate the excluded pairwise-measure sample by itself.

## Links

- [average subject-category dissimilarity](../measures/average_subject_category_dissimilarity.md)
- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [interdisciplinarity indicator-choice sensitivity](interdisciplinarity_indicator_choice_sensitivity.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [category disparity](../measures/category_disparity.md)
- [field classifications](../measures/field_classifications.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; SciSciNet: W363554780; WoS: unknown]

## Metadata

- Concept ID: `multi_category_measure_eligibility_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2015) (2015)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: pairwise-category eligibility boundary; multi-category denominator check; disparity-measure sample boundary; two-category eligibility guard
