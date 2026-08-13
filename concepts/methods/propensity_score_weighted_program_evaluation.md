# Propensity-score weighted program evaluation

## Summary

Propensity-score weighted program evaluation estimates science-policy treatment effects by reweighting treated and comparison units so observed selection factors no longer predict treatment status.

## Canonical Form

- Unit of analysis: scientist, institution, grant program, award, field, or policy exposure.
- Typical representation: estimated treatment propensity, inverse-probability weights, weighted outcome model, ATE, and ATT.
- Method target: adjust observational program comparisons for measured differences in baseline quality, resources, field, demographics, and career stage.
- Empirical signature: naive treated-control differences shrink, change, or stabilize after units are weighted by their estimated selection probability.

## Uses in Science of Science

- Provides a reusable method for selective programs such as elite fellowships, investigator awards, hiring interventions, mobility shocks, and grant reforms.
- Supports the [HHMI-NIH incentive contrast](hhmi_nih_incentive_contrast.md) by adjusting for baseline differences between HHMI investigators and early-career prize controls.
- Complements [matched career counterfactuals](matched_career_counterfactuals.md), [coarsened exact matching career comparison](coarsened_exact_matching_career_comparison.md), and [SciSci quasi-experimental policy evaluation](../validations/scisci_quasi_experimental_policy_evaluation.md).

## Operationalization

- Define treated and comparison units before outcome analysis.
- Estimate the probability of treatment from pre-treatment covariates that plausibly affect selection and later outcomes.
- Use inverse-probability weights to estimate average treatment effects or average treatment effects on the treated.
- Report balance, weight extremity, [common-support program comparison](../validations/common_support_program_comparison.md), and sensitivity to unobserved selection.
- When pre/post data are available, combine weighting with [semiparametric difference-in-differences](semiparametric_difference_in_differences.md).

## Evidence and Validations

- Verified full-text evidence from Azoulay et al. (2009) uses propensity-score weighting to compare HHMI investigators with similarly accomplished NIH-funded early-career prize winners.
- The paper defines weights for ATE and ATT and explains that weighting creates a pseudo-population in which observed covariates no longer predict treatment selection.
- Azoulay et al. model treatment selection using baseline achievement, NIH funding, gender, lab type, degree, and career age, reflecting knowledge of the HHMI appointment process.
- Their estimates show that naive cross-sectional HHMI effects are larger than propensity-weighted effects, illustrating why adjustment matters.

## Caveats

- Propensity weighting adjusts only for observed covariates.
- Extreme propensities can produce unstable weights and make results dependent on a few units.
- Selection into elite science programs may depend on latent promise, networks, or exploratory tendencies not captured in the data.

## Links

- [HHMI-NIH incentive contrast](hhmi_nih_incentive_contrast.md)
- [early-career prize control group](early_career_prize_control_group.md)
- [common-support program comparison](../validations/common_support_program_comparison.md)
- [semiparametric difference-in-differences](semiparametric_difference_in_differences.md)
- [exploration-program pretrend check](../validations/exploration_program_pretrend_check.md)
- [matched career counterfactuals](matched_career_counterfactuals.md)
- [coarsened exact matching career comparison](coarsened_exact_matching_career_comparison.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)

## References

- Azoulay, P., Graff Zivin, J. S., & Manso, G. (2009). Incentives and creativity: Evidence from the academic life sciences. *NBER Working Paper Series*, No. 15466. https://doi.org/10.3386/w15466 [OpenAlex: W3024332105; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `propensity_score_weighted_program_evaluation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2009) (2009)
- Latest seen paper: Azoulay et al. (2009) (2009)
- Primary reference DOI: `10.3386/w15466`
- OpenAlex ID: `W3024332105`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: inverse-probability program weighting; IPTW science-policy evaluation; propensity-weighted treatment effect; weighted observational program evaluation
