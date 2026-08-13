# Fuzzy funding-threshold regression discontinuity

## Summary

Fuzzy funding-threshold regression discontinuity uses the side of a grant funding threshold as an instrument when crossing the threshold changes funding probability but does not perfectly determine funding.

## Canonical Form

- Unit of analysis: application, applicant, normalized score, threshold side, funding status, or later outcome.
- Typical representation: fuzzy regression discontinuity, threshold-side instrument, first-stage funding jump, local causal estimate, or two-stage model.
- Method target: estimate local causal effects of funding, setback, or near-miss status around a payline.
- Empirical signature: treatment probability changes sharply at the threshold while potential confounders vary smoothly with score.

## Uses in Science of Science

- Specializes [funding threshold quasi-experiments](funding_threshold_quasi_experiments.md) for imperfect grant-payline assignment.
- Provides causal leverage for [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md).
- Uses [near-miss and narrow-win applicant groups](../measures/near_miss_narrow_win_applicant_groups.md) and [junior NIH R01 near-threshold panel](../datasets/junior_nih_r01_near_threshold_panel.md).
- Complements [coarsened exact matching career comparison](coarsened_exact_matching_career_comparison.md), which addresses observed covariate imbalance but not all smooth unobserved confounding.
- Feeds [setback-effect robustness grid](../validations/setback_effect_robustness_grid.md) for bandwidth, covariate, and outcome sensitivity.

## Operationalization

- Construct a running variable such as normalized score relative to the funding threshold.
- Define threshold side as an instrument for funding or setback exposure.
- Estimate the first-stage change in funding probability at the threshold.
- Use local regression or two-stage least squares to estimate effects on outcomes such as hit-paper probability, average citations, or attrition.
- Check pre-treatment balance, bandwidth sensitivity, and smoothness assumptions.

## Evidence and Validations

- Verified full-text evidence from Wang, Jones, and Wang (2019) uses an indicator for whether the normalized score is above or below the funding threshold as an instrumental variable rather than using actual funding outcome directly.
- The paper argues that this approach mitigates observed and unobserved influences on funding outcome that vary smoothly with score.
- Wang et al. report that an early-career near miss increases the probability of publishing a hit paper in the next 10 years by 6.1% in their RD estimates.
- The same RD estimates indicate an increase in average citations per paper of 34%, or 9.67 citations within five years.
- The RD results are presented alongside matching and robustness checks to support a causal interpretation of the setback effect among active scientists.

## Caveats

- Fuzzy RD estimates a local effect near the threshold and may not generalize to clearly funded or clearly unfunded applicants.
- Threshold manipulation, score discontinuities, and institute-specific funding rules can weaken assumptions.
- The design estimates effects conditional on the observed applicant population and still needs attrition interpretation.
- Score normalization and bandwidth choice should be transparent.

## Links

- [funding threshold quasi-experiments](funding_threshold_quasi_experiments.md)
- [near-miss and narrow-win applicant groups](../measures/near_miss_narrow_win_applicant_groups.md)
- [junior NIH R01 near-threshold panel](../datasets/junior_nih_r01_near_threshold_panel.md)
- [coarsened exact matching career comparison](coarsened_exact_matching_career_comparison.md)
- [setback-effect robustness grid](../validations/setback_effect_robustness_grid.md)
- [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md)
- [hit-paper probability](../measures/hit_paper_probability.md)
- [SciSci quasi-experimental policy evaluation](../validations/scisci_quasi_experimental_policy_evaluation.md)

## References

- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]

## Metadata

- Concept ID: `fuzzy_funding_threshold_regression_discontinuity`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2019) (2019)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-12189-3`
- OpenAlex ID: `W2977412048`
- Dimensions ID: `pub.1121403320`
- SciSciNet ID: `W3099970011`
- Aliases: fuzzy grant RD; funding-threshold IV; payline regression discontinuity; grant cutoff instrumental variable
