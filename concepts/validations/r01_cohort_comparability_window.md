# R01 cohort comparability window

## Summary

R01 cohort comparability window is the validation rule that NIH grant-application cohorts should be bounded so every application has comparable time to resubmit and is observed under the same scoring and funding regime.

## Canonical Form

- Unit of analysis: grant application, application family, fiscal-year cohort, scoring regime, resubmission window, or policy shock.
- Typical representation: inclusion window, excluded cohort note, pre/post-policy boundary, or right-censoring sensitivity check.
- Validation target: prevent award-probability and disparity estimates from mixing applications with unequal follow-up or incomparable review rules.
- Empirical signature: later cohorts are excluded or analyzed separately because resubmission, scoring, or stimulus funding rules changed.

## Uses in Science of Science

- Sharpens [R01 application resubmission sequences](../methods/r01_application_resubmission_sequences.md) by making the observation window an explicit design choice.
- Supports [NIH R01 award disparities](nih_r01_award_disparities.md), because demographic gaps can be distorted if some groups have less time to resubmit.
- Connects funding-equity studies to [citation data census dates](../methods/citation_data_census_dates.md) and other temporal provenance checks.
- Gives policy evaluators a reusable boundary rule when NIH scoring systems, paylines, or unusual funding shocks change mid-sample.

## Operationalization

- Define the fiscal-year window and the minimum follow-up needed to observe resubmissions.
- Exclude or separately model cohorts whose resubmission opportunity is right-censored.
- Record scoring-system changes, institute-budget shocks, emergency programs, and other review-regime discontinuities.
- Report whether grant-review variables come from the first submission, the last observed submission, or the eventual funded submission.
- Run sensitivity checks around adjacent excluded years when data permit.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) studies Type 1 R01 applications from fiscal years 2000 through 2006.
- The paper states that new proposals submitted in 2007 and 2008 were not included because the authors could not observe them for the additional two years needed to account for resubmission.
- Ginther et al. also identify two post-2008 comparability breaks: a new NIH scoring system implemented in 2009 and funding from the American Recovery and Reinvestment Act.
- The same text reports that success-rate checks from fiscal years 2000 through 2008 showed only small year-to-year changes by race and ethnicity, which supports the chosen earlier analysis window.

## Caveats

- A clean window can reduce sample size and limit claims about later review regimes.
- Excluding policy-shock years avoids contamination but also removes substantively important variation.
- Right-censoring can differ by applicant group if resubmission behavior differs, so the window should be checked alongside resubmission rates.
- Comparable observation time does not remove unobserved proposal-quality or topic-selection differences.

## Links

- [R01 application resubmission sequences](../methods/r01_application_resubmission_sequences.md)
- [NIH R01 award disparities](nih_r01_award_disparities.md)
- [priority score receipt](../measures/priority_score_receipt.md)
- [NIH study-section review process](../methods/nih_study_section_review_process.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `r01_cohort_comparability_window`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: NIH R01 cohort window; resubmission follow-up window; scoring-regime comparability; grant cohort right-censoring check
