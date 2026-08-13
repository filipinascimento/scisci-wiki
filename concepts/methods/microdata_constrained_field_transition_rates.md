# Microdata-constrained field transition rates

## Summary

Microdata-constrained field transition rates use author-level and training-level evidence to estimate field-population transitions rather than relying only on aggregate growth-curve fits.

## Canonical Form

- Unit of analysis: author, publication history, dissertation, exposed-to-active transition, active-period duration, or recruitment event.
- Typical representation: transition-rate distribution, auxiliary-data calibration, publication-history panel, or PhD-thesis-linked model constraint.
- Method target: constrain SEIR-style field-growth parameters with microdata on careers and training.
- Empirical signature: latency, infectious-period, and recruitment-rate estimates are anchored in observed author histories instead of inferred solely from aggregate author counts.

## Uses in Science of Science

- Provides a data remedy for [field-growth model identifiability](../validations/field_growth_model_identifiability.md).
- Refines [scientific apprenticeship latency](../measures/scientific_apprenticeship_latency.md), [scientific field recruitment rate](../measures/scientific_field_recruitment_rate.md), and [scientific idea active period](../measures/scientific_idea_active_period.md).
- Connects [field author-publication time series](../datasets/field_author_publication_time_series.md) to dissertation, training, and career-history records.
- Helps distinguish recruitment of new susceptibles from conversion of an already prepared [scientific susceptible-author pool](../representations/scientific_susceptible_author_pool.md).

## Operationalization

- Build author-level publication histories for a field and adjacent fields.
- Link authors to PhD-thesis records, training institutions, cohorts, or career-stage proxies when available.
- Estimate distributions for latency, active-period length, recruitment rate, and exposed-to-active transitions.
- Use those distributions as constraints or priors in a field-population model.
- Report whether microdata constraints select among otherwise similar aggregate fits.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) proposes inferring infectious-period length, recruitment rates, and incubation times directly from publication data, PhD-thesis records, and related sources.
- The authors state that such distributions would constrain and improve field-growth models.
- They also argue that richer data could help distinguish whether growth comes from recruiting new susceptible authors or converting an already large susceptible population through higher contact rates.

## Caveats

- Publication histories and thesis records can miss informal exposure, failed entry attempts, or industry and government careers.
- Author disambiguation errors can bias transition-rate estimates.
- Microdata constraints reduce equifinality only if the auxiliary data measure the transitions implied by the model.

## Links

- [field population models](field_population_models.md)
- [field-growth model identifiability](../validations/field_growth_model_identifiability.md)
- [scientific apprenticeship latency](../measures/scientific_apprenticeship_latency.md)
- [scientific field recruitment rate](../measures/scientific_field_recruitment_rate.md)
- [scientific idea active period](../measures/scientific_idea_active_period.md)
- [field author-publication time series](../datasets/field_author_publication_time_series.md)
- [scientific susceptible-author pool](../representations/scientific_susceptible_author_pool.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; SciSciNet: W2143083489; WoS: unknown]

## Metadata

- Concept ID: `microdata_constrained_field_transition_rates`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Dimensions ID: `pub.1006988333`
- SciSciNet ID: `W2143083489`
- Aliases: microdata-constrained SEIR rates; publication-history transition calibration; PhD-record field-growth constraints; author-level transition-rate priors
