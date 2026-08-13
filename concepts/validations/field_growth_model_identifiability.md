# Field-growth model identifiability

## Summary

Field-growth model identifiability is the validation problem that similar aggregate author-growth curves can be produced by different population-model parameter regimes.

## Canonical Form

- Unit of analysis: field time series, model trajectory, parameter vector, historical case, or fitted SEIR model.
- Typical representation: alternative fits, near-best parameter ensembles, sensitivity analysis, or model-comparison table.
- Validation target: avoid over-interpreting a field-growth parameter when other mechanisms fit the same observed curve.
- Empirical signature: multiple recruitment, contact, latency, or susceptible-pool assumptions reproduce the same author-count trajectory.

## Uses in Science of Science

- Provides an interpretation guardrail for [scientific SEIR contact model](../methods/scientific_seir_contact_model.md).
- Explains why [stochastic ensemble parameter fitting](../methods/stochastic_ensemble_parameter_fitting.md) should report uncertainty and not only one best trajectory.
- Connects [field saturation projection](field_saturation_projection.md) to model-choice risk.
- Helps separate recruitment-driven growth from conversion of a large [scientific susceptible-author pool](../representations/scientific_susceptible_author_pool.md).

## Operationalization

- Fit alternative model specifications to the same author-count time series.
- Report whether changes in recruitment, contact rate, latency, active period, or susceptible-pool growth preserve fit quality.
- Use historical evidence, funding records, training data, or author-level transitions to distinguish parameter interpretations.
- Flag projections as weak when the fitted mechanism is not identifiable from aggregate counts.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) reports cases where the SEIR-style model fits unusual field trajectories but parameter interpretation remains uncertain.
- The paper notes that cosmological inflation can be fit well despite a long linear growth pattern, with the solution especially sensitive to susceptible-population growth.
- For quantum computing, Bettencourt et al. model delayed takeoff by allowing susceptible population growth to start only after 1990, while acknowledging that longer exposed-class structures or time-varying contact rates could also fit.
- The authors argue that more detailed historical data would help guide these modeling choices and distinguish recruitment from conversion of an already large susceptible population.

## Caveats

- Good fit to aggregate author counts is not evidence that the inferred micro-process is true.
- Identifiability can differ across fields depending on curve shape, observation window, and data quality.
- Additional model states can improve fit while increasing overfitting risk.

## Links

- [scientific SEIR contact model](../methods/scientific_seir_contact_model.md)
- [stochastic ensemble parameter fitting](../methods/stochastic_ensemble_parameter_fitting.md)
- [cross-field SEIR benchmark](cross_field_seir_benchmark.md)
- [field saturation projection](field_saturation_projection.md)
- [scientific susceptible-author pool](../representations/scientific_susceptible_author_pool.md)
- [scientific field recruitment rate](../measures/scientific_field_recruitment_rate.md)
- [competing-idea state extension](../representations/competing_idea_state_extension.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; SciSciNet: W2143083489]

## Metadata

- Concept ID: `field_growth_model_identifiability`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Dimensions ID: `pub.1006988333`
- SciSciNet ID: `W2143083489`
- Aliases: field-model parameter identifiability; SEIR field-fit ambiguity; field-growth mechanism ambiguity; population-model equifinality
