# Prediction-error propagated archetype uncertainty

## Summary

Prediction-error propagated archetype uncertainty uses prediction error rates from contribution-role imputation to perturb role probabilities and rerun archetype analysis, producing uncertainty intervals for archetype coefficients.

## Canonical Form

- Unit of analysis: predicted contribution probability, classification error rate, archetype coefficient, career stage, or robust archetypal analysis run.
- Typical representation: upper and lower predicted-role datasets used to form uncertainty intervals around archetype coefficients.
- Validation target: quantify downstream uncertainty when role archetypes are built from predicted rather than observed contribution vectors.
- Empirical signature: archetype coefficients are reported with intervals derived from prediction-error perturbations or another uncertainty propagation method.

## Uses in Science of Science

- Validates [robust archetypal contribution profiles](../methods/robust_archetypal_contribution_profiles.md) when inputs come from predicted contributions.
- Connects [whitelisted bootstrap contributorship BN](../methods/whitelisted_bootstrap_contributorship_bn.md) to downstream role-profile uncertainty.
- Qualifies [contribution role vectors](../representations/contribution_role_vectors.md) and [career-stage contributorship panels](../representations/career_stage_contributorship_panel.md).
- Supports [responsible metrics](../measures/responsible_metrics.md) by preventing imputed contribution profiles from appearing overprecise.

## Operationalization

- Estimate role-specific prediction error rates by cross-validation.
- Add and subtract the error rate from predicted role probabilities to form upper and lower perturbation datasets.
- Rerun robust archetypal analysis separately on the perturbed datasets for each career stage.
- Report the resulting archetype coefficient ranges as uncertainty intervals.
- Consider probabilistic archetypal analysis or bootstrap procedures when available.

## Evidence and Validations

- Verified full-text evidence from Robinson-Garcia et al. (2020) reports cross-validation error rates for contribution predictions.
- The paper states that neither Bayesian-network predictions nor robust archetypal analysis coefficients directly provide confidence intervals.
- The authors therefore use classification error rates as uncertainty bounds for predicted contribution probabilities, create upper and lower datasets, and rerun robust archetypal analysis for each career stage.
- Robinson-Garcia et al. report the resulting upper and lower coefficient values as uncertainty intervals and identify probabilistic archetypal analysis as a possible future method.

## Caveats

- Adding or subtracting mean error rates is an approximation and may not capture correlated errors across roles.
- Perturbed probabilities can require clipping or normalization in other implementations.
- This validation describes uncertainty in archetype coefficients, not causal uncertainty in career mechanisms.

## Links

- [robust archetypal contribution profiles](../methods/robust_archetypal_contribution_profiles.md)
- [whitelisted bootstrap contributorship BN](../methods/whitelisted_bootstrap_contributorship_bn.md)
- [Bayesian contributorship imputation](../methods/bayesian_contributorship_imputation.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [career-stage contributorship panel](../representations/career_stage_contributorship_panel.md)
- [contribution-statement role-granularity limit](contribution_statement_role_granularity_limit.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; WoS: unknown]

## Metadata

- Concept ID: `prediction_error_propagated_archetype_uncertainty`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Robinson-Garcia et al. (2020) (2020)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: archetype uncertainty propagation; predicted-role uncertainty interval; contribution prediction error propagation; RAA uncertainty workaround
