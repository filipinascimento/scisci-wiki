# Common-support program comparison

## Summary

Common-support program comparison validates whether treated and comparison scientists or institutions have overlapping treatment propensities before estimating observational science-policy effects.

## Canonical Form

- Unit of analysis: treated scientist, control scientist, institution, grant application, field, or program candidate.
- Typical representation: propensity-score overlap region, excluded high-propensity treated units, excluded low-propensity controls, and final estimation sample.
- Validation target: ensure treatment effects are estimated only where credible treated-control comparisons exist.
- Empirical signature: units without comparable counterparts are pruned before ATE, ATT, matching, or weighted estimates are interpreted.

## Uses in Science of Science

- Provides a design check for [propensity-score weighted program evaluation](../methods/propensity_score_weighted_program_evaluation.md).
- Helps avoid comparing elite awardees to generic controls when studying [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md).
- Supports [matched career counterfactuals](../methods/matched_career_counterfactuals.md) and [coarsened exact matching career comparison](../methods/coarsened_exact_matching_career_comparison.md).

## Operationalization

- Estimate treatment propensities from pre-treatment covariates.
- Plot or tabulate propensity-score distributions for treated and comparison units.
- Define a common-support region with overlap between groups.
- Exclude treated units too exceptional to match and controls too unlikely to receive treatment.
- Report how exclusions change the target population and whether ATE or ATT remains meaningful.

## Evidence and Validations

- Verified full-text evidence from Azoulay et al. (2009) estimates HHMI appointment propensities using baseline demographics, NIH funding, lab type, and pre-appointment achievement.
- The paper reports that common support excludes four HHMI investigators with superlative pre-appointment records and forty-five early-career prize winners with very low predicted appointment probabilities.
- Azoulay et al. then estimate effects on a final sample of 417 scientists, including 69 HHMI investigators and 348 controls.
- They explicitly connect the pruning step to the validity of ATE and ATT estimation using inverse-probability weighting.

## Caveats

- Common support on observed covariates does not remove unobserved selection.
- Pruning exceptional treated units can make estimates less relevant for the most elite cases.
- The support rule should be documented before outcome fishing, because different cutoffs can change conclusions.

## Links

- [propensity-score weighted program evaluation](../methods/propensity_score_weighted_program_evaluation.md)
- [early-career prize control group](../methods/early_career_prize_control_group.md)
- [HHMI-NIH incentive contrast](../methods/hhmi_nih_incentive_contrast.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [top-scientist selection confound](top_scientist_selection_confound.md)
- [matched career counterfactuals](../methods/matched_career_counterfactuals.md)
- [SciSci quasi-experimental policy evaluation](scisci_quasi_experimental_policy_evaluation.md)

## References

- Azoulay, P., Graff Zivin, J. S., & Manso, G. (2009). Incentives and creativity: Evidence from the academic life sciences. *NBER Working Paper Series*, No. 15466. https://doi.org/10.3386/w15466 [OpenAlex: W3024332105; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `common_support_program_comparison`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2009) (2009)
- Latest seen paper: Azoulay et al. (2009) (2009)
- Primary reference DOI: `10.3386/w15466`
- OpenAlex ID: `W3024332105`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: common-support science-policy sample; propensity overlap check; elite-program support restriction; treated-control overlap validation
