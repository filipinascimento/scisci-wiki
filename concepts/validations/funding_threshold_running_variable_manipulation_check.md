# Funding-threshold running-variable manipulation check

## Summary

Funding-threshold running-variable manipulation check evaluates whether applicants can precisely manipulate their score around a funding cutoff, using institutional arguments and density-continuity diagnostics.

## Canonical Form

- Unit of analysis: proposal, normalized score, running variable, funding threshold, density test, or RD assumption.
- Typical representation: no-precise-manipulation argument, McCrary density test, or running-variable continuity check.
- Validation target: support regression-discontinuity designs by showing the cutoff is not strategically sorted.
- Empirical signature: the density of scores is continuous around the funding threshold and score assignment is plausibly outside applicant control.

## Uses in Science of Science

- Validates [fuzzy funding-threshold regression discontinuity](../methods/fuzzy_funding_threshold_regression_discontinuity.md).
- Provides an assumption check for [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md).
- Complements [near-threshold pretreatment balance panel](near_threshold_pretreatment_balance_panel.md) by testing the running variable rather than covariates.

## Operationalization

- Define the running variable, such as normalized proposal score relative to the payline.
- Explain who assigns the score and why applicants cannot precisely place themselves around the cutoff.
- Plot or test the score density around the threshold.
- Apply a McCrary-style test or equivalent density-continuity diagnostic.
- Report any local discontinuity or heaping that could threaten identification.

## Evidence and Validations

- Verified full-text evidence from Wang, Jones, and Wang (2019) argues that NIH applicants cannot precisely manipulate reviewer-assigned normalized scores around the payline.
- The paper uses the score being above or below the threshold as an instrument in a fuzzy RD design.
- Wang et al. report a McCrary density test supporting the continuity assumption around the threshold.

## Caveats

- No density discontinuity does not eliminate all forms of strategic proposal timing or institute choice.
- Administrative paylines can be fuzzy and institute-specific.
- Score normalization must be documented because manipulation checks apply to the constructed running variable.

## Links

- [fuzzy funding-threshold regression discontinuity](../methods/fuzzy_funding_threshold_regression_discontinuity.md)
- [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md)
- [near-threshold pretreatment balance panel](near_threshold_pretreatment_balance_panel.md)
- [junior NIH R01 near-threshold panel](../datasets/junior_nih_r01_near_threshold_panel.md)
- [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md)

## References

- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; SciSciNet: W3099970011; WoS: unknown]

## Metadata

- Concept ID: `funding_threshold_running_variable_manipulation_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2019) (2019)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-12189-3`
- OpenAlex ID: `W2977412048`
- Dimensions ID: `pub.1121403320`
- SciSciNet ID: `W3099970011`
- Aliases: RD manipulation check; McCrary funding threshold test; score-density continuity check; grant-running-variable audit
