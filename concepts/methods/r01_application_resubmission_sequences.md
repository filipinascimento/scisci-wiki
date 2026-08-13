# R01 application resubmission sequences

## Summary

R01 application resubmission sequences track an NIH grant idea across its initial submission and amended applications so that award probability, review outcomes, and applicant behavior can be analyzed at the application-family level.

## Canonical Form

- Unit of analysis: R01 application family, initial submission, amended application, applicant, review round, or eventual award.
- Typical representation: sequence of submission attempts with review score, funding status, elapsed time, and resubmission indicator.
- Method target: distinguish first-attempt evaluation from persistence, revision, and eventual award after repeated review.
- Empirical signature: award gaps or review-score patterns change when initial submissions and resubmitted applications are separated.

## Uses in Science of Science

- Adds a process layer to [NIH R01 award disparities](../validations/nih_r01_award_disparities.md), because demographic groups can differ in both review outcomes and willingness or ability to resubmit.
- Connects [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md) to applicant persistence after rejection.
- Complements [NIH study-section review process](nih_study_section_review_process.md) by modeling repeated encounters with the review system.
- Uses the [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md) as the administrative source for application histories.

## Operationalization

- Group initial R01 submissions with their amended applications into a grant-application family.
- Define a fixed observation window so that unfunded and funded applications have comparable resubmission opportunity.
- Record whether an application is funded on the first, second, or later attempt.
- When estimating application-family award probability, specify whether review characteristics come from the last observed submission, the first submission, or all submissions.
- Pair the sequence definition with an [R01 cohort comparability window](../validations/r01_cohort_comparability_window.md) so every application family has comparable opportunity to resubmit.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) studies Type 1 NIH R01 applications from fiscal years 2000 to 2006 and collapses original and revised applications within a two-year window into a single application unit for award-probability analysis.
- The paper reports that investigators submitted about three to four Type 1 R01 applications on average during the sample period, making repeated application behavior a material part of the funding process.
- In the verified text, Black and Asian applicants who eventually receive an award are reported as needing more submissions before award than white applicants, while Black and Hispanic applicants are less likely than white applicants to resubmit an unfunded application.
- The paper also reports that Black and Asian applicants are less likely than white applicants to receive R01 funding for grants submitted once or twice; for grants submitted three or more times, the Black-white difference is not statistically significant in the reported analysis.
- Ginther et al. exclude 2007 and 2008 new proposals from the main analysis because those cohorts lacked two additional years of follow-up for resubmission and because post-2008 scoring and ARRA funding changes would reduce comparability.

## Caveats

- Resubmission histories are right-censored if the observation window is too short.
- A resubmission is not a clean repeat of the same proposal, because applicants revise aims, framing, preliminary data, or study sections.
- Lower resubmission rates can reflect resources, mentoring, expectations, institutional support, topic sorting, or applicant exit, not just preference.
- NIH resubmission rules change over time, so historical sequence definitions need period-specific documentation.

## Links

- [NIH R01 award disparities](../validations/nih_r01_award_disparities.md)
- [R01 cohort comparability window](../validations/r01_cohort_comparability_window.md)
- [NIH study-section review process](nih_study_section_review_process.md)
- [priority score receipt](../measures/priority_score_receipt.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [funding threshold quasi-experiments](funding_threshold_quasi_experiments.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `r01_application_resubmission_sequences`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: NIH resubmission sequence; R01 amended application history; grant resubmission dynamics; R01 application family
