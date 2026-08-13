# Scientific SEIR contact model

## Summary

Scientific SEIR contact model adapts susceptible-exposed-infected-recovered epidemic models to scientific fields, where exposure, apprenticeship, active publication, exit, recruitment, and contact shape field growth.

## Canonical Form

- Unit of analysis: scientific field, yearly author population, susceptible author, exposed author, active adopter, recovered or inactive author.
- Typical representation: S/E/I/R state variables, recruitment rate, contact rate, latency parameter, active-period parameter, and fitted author-count trajectory.
- Method target: model [field emergence](../mechanisms/field_emergence.md) as a population process driven by researcher recruitment and idea transmission.
- Empirical signature: fitted model reproduces author-count growth curves, including logistic, approximately linear, and delayed takeoff patterns.

## Uses in Science of Science

- Provides the dynamical core of [field population models](field_population_models.md).
- Estimates interpretable parameters such as [scientific field recruitment rate](../measures/scientific_field_recruitment_rate.md), [scientific apprenticeship latency](../measures/scientific_apprenticeship_latency.md), [scientific idea active period](../measures/scientific_idea_active_period.md), and [idea reproductive number](../measures/idea_reproductive_number.md).
- Uses [field author-publication time series](../datasets/field_author_publication_time_series.md) as the required data substrate.
- Helps distinguish whether field growth is driven by new recruitment, conversion of a large susceptible pool, contact intensity, or long active publication periods.
- Uses [stochastic ensemble parameter fitting](stochastic_ensemble_parameter_fitting.md) and [cross-field SEIR benchmark](../validations/cross_field_seir_benchmark.md) to document fit uncertainty and model generality.
- Treats [scientific susceptible-author pool](../representations/scientific_susceptible_author_pool.md), [competing-idea state extension](../representations/competing_idea_state_extension.md), and [field-growth model identifiability](../validations/field_growth_model_identifiability.md) as explicit interpretation boundaries for SEIR-style science models.

## Operationalization

- Build yearly author-count trajectories for a bounded field.
- Define susceptible, exposed, infected or active, and recovered or inactive author states.
- Fit recruitment, contact, latency, active-period, and optional repeated-contact parameters to observed author counts.
- Compare fitted trajectories with observed growth, confidence intervals, historical events, and field-specific case evidence.
- Report parameter uncertainty and alternative model specifications when multiple mechanisms fit similarly well.
- Split model interpretation into linked components such as [scientific inactive-author state](../representations/scientific_inactive_author_state.md), [repeated scientific-contact reinforcement](../mechanisms/repeated_scientific_contact_reinforcement.md), [contact effectiveness by research modality](../mechanisms/contact_effectiveness_by_research_modality.md), and [field saturation projection](../validations/field_saturation_projection.md) when fitted parameters carry substantive claims.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) uses a generalized SEIR model as the starting point for scientific field dynamics.
- The model treats exposed researchers as people who have encountered a new idea but do not yet manifest it in published research.
- Bettencourt et al. add recruitment and multiple-contact terms to capture social dynamics of scientific activity.
- The paper fits the model to six emerging fields: cosmological inflation, cosmic strings, prions and scrapie, H5N1 influenza, carbon nanotubes, and quantum computing.
- Their discussion notes that the model can fit both familiar logistic trajectories and departures such as linear or delayed growth, but that more detailed historical data are needed to validate some parameter interpretations.
- The same paper reports a stochastic ensemble fitting procedure and a six-field benchmark that are now split into linked method and validation pages.
- The paper also interprets recovered/inactive authors, repeated exposed-active contacts, modality-specific contact effectiveness, and saturation forecasts as field-specific model features.
- A later split from the same verified full text isolates the susceptible author stock, possible rival-idea state classes, and model-identifiability caveat as separate motifs.

## Caveats

- The epidemic analogy is structural; scientific contacts are prolonged, intentional, and mediated by training, labs, meetings, funding, and institutions.
- Several parameter regimes can fit the same aggregate author-count series.
- Field boundary choices and author-name disambiguation affect fitted states and rates.
- The model is best treated as a coarse-grained dynamical representation unless validated against independent training, hiring, funding, or collaboration data.

## Links

- [field population models](field_population_models.md)
- [field author-publication time series](../datasets/field_author_publication_time_series.md)
- [field query corpus construction](field_query_corpus_construction.md)
- [scientific susceptible-author pool](../representations/scientific_susceptible_author_pool.md)
- [competing-idea state extension](../representations/competing_idea_state_extension.md)
- [stochastic ensemble parameter fitting](stochastic_ensemble_parameter_fitting.md)
- [field-growth model identifiability](../validations/field_growth_model_identifiability.md)
- [scientific field recruitment rate](../measures/scientific_field_recruitment_rate.md)
- [scientific apprenticeship latency](../measures/scientific_apprenticeship_latency.md)
- [scientific idea active period](../measures/scientific_idea_active_period.md)
- [scientific inactive-author state](../representations/scientific_inactive_author_state.md)
- [repeated scientific-contact reinforcement](../mechanisms/repeated_scientific_contact_reinforcement.md)
- [contact effectiveness by research modality](../mechanisms/contact_effectiveness_by_research_modality.md)
- [field saturation projection](../validations/field_saturation_projection.md)
- [idea reproductive number](../measures/idea_reproductive_number.md)
- [publication-author scaling exponent](../measures/publication_author_scaling_exponent.md)
- [cross-field SEIR benchmark](../validations/cross_field_seir_benchmark.md)
- [field emergence](../mechanisms/field_emergence.md)
- [research fronts](../mechanisms/research_fronts.md)
- [topic prevalence dynamics](topic_prevalence_dynamics.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; WoS: unknown]

## Metadata

- Concept ID: `scientific_seir_contact_model`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Aliases: SEIR field growth model; scientific idea contagion model; susceptible-exposed-active field model; epidemic contact model of science
