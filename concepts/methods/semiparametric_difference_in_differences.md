# Semiparametric difference-in-differences

## Summary

Semiparametric difference-in-differences combines pre/post outcome changes with propensity reweighting so observational controls resemble treated units in observed selection factors and pre-treatment dynamics.

## Canonical Form

- Unit of analysis: scientist, institution, field, grant program, policy exposure, or event-time panel.
- Typical representation: pre/post outcome difference, treatment propensity, weighted control pseudo-population, and ATT estimate.
- Method target: estimate treatment effects when treated and control units differ in observed characteristics that could affect outcome trends.
- Empirical signature: the preferred estimate uses weighted outcome changes rather than raw levels or unweighted pre/post differences.

## Uses in Science of Science

- Provides a reusable method for non-random science-policy exposures with both baseline and follow-up outcomes.
- Supports [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md) by separating elite-program treatment effects from fixed scientist heterogeneity.
- Complements [superstar death event studies](superstar_death_event_study.md), [mobility policy shock evaluation](../validations/mobility_policy_shock_evaluation.md), and [fuzzy funding-threshold regression discontinuity](fuzzy_funding_threshold_regression_discontinuity.md).

## Operationalization

- Define pre-treatment and post-treatment periods.
- Estimate treatment propensities from baseline covariates.
- Compute outcome changes for each unit.
- Weight control-unit changes so the comparison group matches treated units on observed selection factors.
- Estimate the average treatment effect on the treated and report pretrend evidence, bootstrap or robust uncertainty, and sensitivity to time-varying unobservables.

## Evidence and Validations

- Verified full-text evidence from Azoulay et al. (2009) uses a semi-parametric difference-in-differences estimator based on Abadie (2005).
- The paper explains that the estimator applies propensity-score reweighting to post-minus-pre outcome changes rather than to outcome levels.
- Azoulay et al. interpret the weights as creating a pseudo-population of untreated scientists with dynamics similar to the treated group before appointment.
- Their preferred specification for HHMI effects is the semi-parametric difference-in-differences estimate because it adjusts for observed selection and purges time-invariant unobserved heterogeneity.

## Caveats

- The method still depends on a conditional parallel-trends assumption.
- Time-varying unobserved selection, such as latent exploratory tendencies emerging just before appointment, can still bias estimates.
- Treatment timing, exposure intensity, and pre/post window definitions should be stress-tested.

## Links

- [propensity-score weighted program evaluation](propensity_score_weighted_program_evaluation.md)
- [exploration-program pretrend check](../validations/exploration_program_pretrend_check.md)
- [common-support program comparison](../validations/common_support_program_comparison.md)
- [HHMI-NIH incentive contrast](hhmi_nih_incentive_contrast.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [superstar death event study](superstar_death_event_study.md)
- [mobility policy shock evaluation](../validations/mobility_policy_shock_evaluation.md)
- [SciSci quasi-experimental policy evaluation](../validations/scisci_quasi_experimental_policy_evaluation.md)

## References

- Abadie, A. (2005). Semiparametric difference-in-differences estimators. *The Review of Economic Studies*, 72(1), 1-19. https://doi.org/10.1111/0034-6527.00321 [OpenAlex: unknown; Dimensions: pub.1061833239; WoS: unknown]
- Azoulay, P., Graff Zivin, J. S., & Manso, G. (2009). Incentives and creativity: Evidence from the academic life sciences. *NBER Working Paper Series*, No. 15466. https://doi.org/10.3386/w15466 [OpenAlex: W3024332105; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `semiparametric_difference_in_differences`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2009) (2009)
- Latest seen paper: Azoulay et al. (2009) (2009)
- Primary reference DOI: `10.3386/w15466`
- OpenAlex ID: `W3024332105`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: SDD estimator; weighted difference-in-differences; propensity-weighted DiD; Abadie semiparametric DiD
