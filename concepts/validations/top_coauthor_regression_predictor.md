# Top-coauthor regression predictor

## Summary

Top-coauthor regression predictor validates whether early coauthorship with a top scientist predicts long-term career impact after controlling for early prestige, productivity, and citations.

## Canonical Form

- Unit of analysis: junior researcher, discipline-specific regression, early-career exposure, or 20-year career outcome.
- Typical representation: linear regression for later citations, logistic regression for later top-scientist status, coefficient plot, odds ratio, AUC, or confidence interval.
- Validation target: predictive value of early top-coauthor exposure beyond other early-career signals.
- Empirical signature: early top-coauthor exposure remains a statistically significant positive predictor when controls are included.

## Uses in Science of Science

- Validates [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md) as more than a descriptive group difference.
- Complements [matched career counterfactuals](../methods/matched_career_counterfactuals.md) with regression-based prediction.
- Links [early-career sponsorship by top scientists](../mechanisms/early_career_sponsorship.md) to prediction-oriented [scientific career impact dynamics](../mechanisms/scientific_career_impact.md).
- Helps separate top-coauthor exposure from [Nature Index institutional prestige score](../measures/nature_index_institutional_prestige_score.md), early productivity, and early citation controls.

## Operationalization

- Define early top-coauthor exposure as a binary regressor in the first-career-window data.
- Include controls for institutional prestige, early productivity, and early citations.
- Fit discipline-specific linear models for long-term citation totals and logistic models for top-scientist status in a later career year.
- Report coefficient estimates, confidence intervals, significance, model fit, and threshold-dependent metrics such as AUC.
- Interpret prediction separately from causal assignment.

## Evidence and Validations

- Verified full-text evidence from Li, Aste, Caccioli, and Livan (2019) fits discipline-specific linear and logistic regressions using early top-scientist coauthorship as a binary regressor.
- The linear outcome is citations accrued in the first 20 career years, and the logistic outcome is whether the junior researcher becomes a top scientist in the 20th career year.
- Li et al. control for institutional prestige, productivity, and citations in the first three career years.
- The paper reports statistically significant positive coefficients for early top-coauthor exposure in all four disciplines, with logistic odds ratios of 1.19 for Cell Biology, 1.15 for Chemistry, 1.14 for Neuroscience, and 1.14 for Physics.

## Caveats

- Predictive significance does not prove that the top coauthor caused later impact.
- Regression controls cannot remove unobserved ability, lab resources, topic choice, or senior-scientist selection.
- AUC and odds ratios depend on discipline-specific base rates and the top-scientist threshold.

## Links

- [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md)
- [top-cited scientist status](../measures/top_cited_scientist_status.md)
- [early-career excellence strata](../representations/early_career_excellence_strata.md)
- [Nature Index institutional prestige score](../measures/nature_index_institutional_prestige_score.md)
- [matched career counterfactuals](../methods/matched_career_counterfactuals.md)
- [top scientist selection confound](top_scientist_selection_confound.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [prediction feedback loops](prediction_feedback_loops.md)

## References

- Li, W., Aste, T., Caccioli, F., & Livan, G. (2019). Early coauthorship with top scientists predicts success in academic careers. *Nature Communications*, 10, 5170. https://doi.org/10.1038/s41467-019-13130-4 [OpenAlex: W2949684159; Dimensions: pub.1122584827; WoS: unknown]

## Metadata

- Concept ID: `top_coauthor_regression_predictor`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li et al. (2019) (2019)
- Latest seen paper: Li et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-13130-4`
- OpenAlex ID: `W2949684159`
- Dimensions ID: `pub.1122584827`
- SciSciNet ID: `W2949684159`
- Aliases: top coauthor predictive regression; elite coauthor regression validation; early top-collaboration predictor; top-coauthor odds ratio
