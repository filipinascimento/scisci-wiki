# Stochastic ensemble parameter fitting

## Summary

Stochastic ensemble parameter fitting estimates field-population model parameters by evolving and scoring ensembles of candidate parameter vectors against observed time series.

## Canonical Form

- Unit of analysis: parameter vector, model trajectory, field time series, fit error, or uncertainty ensemble.
- Typical representation: candidate strings encoding initial state and dynamical parameters, repeated perturbation generations, and retained near-best fits.
- Method target: fit nonlinear scientific-field growth models while retaining uncertainty in plausible parameter regimes.
- Empirical signature: best-fit trajectory plus an ensemble of acceptable fits used to estimate confidence intervals or parameter ranges.

## Uses in Science of Science

- Provides the fitting workflow for [scientific SEIR contact model](scientific_seir_contact_model.md).
- Estimates parameters behind [scientific field recruitment rate](../measures/scientific_field_recruitment_rate.md), [scientific apprenticeship latency](../measures/scientific_apprenticeship_latency.md), [scientific idea active period](../measures/scientific_idea_active_period.md), and [idea reproductive number](../measures/idea_reproductive_number.md).
- Helps compare model identifiability across [cross-field SEIR benchmark](../validations/cross_field_seir_benchmark.md) cases.
- Offers a reusable uncertainty pattern for fitting coarse-grained field dynamics when closed-form inference is impractical.
- Links retained near-best ensembles to [field-growth model identifiability](../validations/field_growth_model_identifiability.md), because similar aggregate fits can imply different recruitment or contact mechanisms.

## Operationalization

- Encode initial conditions and dynamical parameters as a real-valued vector.
- Generate a population of perturbed candidate vectors from a progenitor vector.
- Score each candidate by the mismatch between model trajectory and observed field time series.
- Retain the best candidates to spawn the next generation until fit quality stops improving.
- Use the retained near-best ensemble to quantify uncertainty, not just a single best trajectory.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) estimates SEIR-style field-population parameters using a stochastic ensemble algorithm.
- The paper represents initial conditions and dynamical parameters as real-valued strings.
- Candidate strings are perturbed, scored against observed author-count data, and iteratively used to create later generations.
- Bettencourt et al. retain an ensemble of good strings within a user-specified tolerance, using it to quantify uncertainty in fitted trajectories and parameters.
- The same full-text discussion motivates separating fit uncertainty from causal interpretation: multiple acceptable parameter sets can reproduce field-level growth, so model identification needs independent historical or micro-level evidence.

## Caveats

- Multiple parameter regimes can fit aggregate author-count series similarly well.
- Fit tolerance choices affect uncertainty ranges.
- Aggregate fitting does not prove that the inferred contact, recruitment, or latency process is the true micro-mechanism.
- Independent historical or individual-level evidence is needed to validate parameter interpretations.

## Links

- [scientific SEIR contact model](scientific_seir_contact_model.md)
- [field population models](field_population_models.md)
- [field author-publication time series](../datasets/field_author_publication_time_series.md)
- [scientific field recruitment rate](../measures/scientific_field_recruitment_rate.md)
- [scientific apprenticeship latency](../measures/scientific_apprenticeship_latency.md)
- [scientific idea active period](../measures/scientific_idea_active_period.md)
- [idea reproductive number](../measures/idea_reproductive_number.md)
- [cross-field SEIR benchmark](../validations/cross_field_seir_benchmark.md)
- [field-growth model identifiability](../validations/field_growth_model_identifiability.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; WoS: unknown; SciSciNet: W2143083489]

## Metadata

- Concept ID: `stochastic_ensemble_parameter_fitting`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Dimensions ID: `pub.1006988333`
- SciSciNet ID: `W2143083489`
- Aliases: stochastic field-model fitting; ensemble parameter optimization; generational parameter search; field-growth uncertainty ensemble
