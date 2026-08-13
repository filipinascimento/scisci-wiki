# Field population models

## Summary

Field population models treat the rise and maturation of a scientific field as a time-series process in which authors enter, participate, recruit others, and eventually leave or stop publishing in the topic.

## Canonical Form

- Unit of analysis: field, specialty, author population, publication stream, or topic cohort.
- Typical representation: author-count and publication-count time series, often fit with logistic or epidemic-style population models.
- Mechanism or measurement target: recruitment, apprenticeship, contact, saturation, and productivity scaling in emerging scientific communities.
- Empirical signature: growth curves, fitted recruitment/contact parameters, saturation or continued expansion, and scaling between authors and publications.

## Uses in Science of Science

- Gives [field emergence](../mechanisms/field_emergence.md) a quantitative population-dynamics representation.
- Supports early-warning and forecasting analyses for emerging specialties.
- Complements topic models and science maps by modeling field growth over time rather than only field boundaries.
- Organizes split measures such as [scientific field recruitment rate](../measures/scientific_field_recruitment_rate.md), [scientific apprenticeship latency](../measures/scientific_apprenticeship_latency.md), [scientific idea active period](../measures/scientific_idea_active_period.md), [idea reproductive number](../measures/idea_reproductive_number.md), and [publication-author scaling exponent](../measures/publication_author_scaling_exponent.md).
- Uses [stochastic ensemble parameter fitting](stochastic_ensemble_parameter_fitting.md) and [cross-field SEIR benchmark](../validations/cross_field_seir_benchmark.md) as validation and uncertainty layers.
- Separates latent entry pools, rival-field overlap, competing-idea extensions, and fit ambiguity through [scientific susceptible-author pool](../representations/scientific_susceptible_author_pool.md), [rival-field author overlap](../measures/rival_field_author_overlap.md), [competing-idea state extension](../representations/competing_idea_state_extension.md), and [field-growth model identifiability](../validations/field_growth_model_identifiability.md).
- Adds residual refinements around [microdata-constrained field transition rates](microdata_constrained_field_transition_rates.md), [incipient field takeoff latency](../measures/incipient_field_takeoff_latency.md), [serial exposure latency classes](../representations/serial_exposure_latency_classes.md), and [active-adopter recruitment feedback](../mechanisms/active_adopter_recruitment_feedback.md).

## Operationalization

- Define a field with keyword, citation, venue, classification, or expert-curated queries.
- Build yearly author and publication counts, with author disambiguation where possible.
- Fit logistic, epidemic-contact, or [scientific SEIR contact models](scientific_seir_contact_model.md) adapted to scientific participation.
- Compare fitted parameters and scaling laws across fields and validate against historical events, reviews, and funding/program changes.
- Use [field saturation projection](../validations/field_saturation_projection.md) when extrapolating a fitted trajectory beyond the observed period.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) models the emergence and development of six scientific fields with an epidemic-inspired population model adapted to scientists and publications.
- The paper treats field growth as movement among susceptible, exposed, active, and recovered author populations, with recruitment and contact parameters that vary by field.
- Bettencourt et al. show that some fields follow familiar logistic curves while others depart from simple S-shaped growth, yet can still be fit by the population model.
- The paper also reports scaling between number of publications and number of authors, making per-capita productivity a field-development diagnostic rather than only a bibliometric count.
- The same evidence now supports split pages for [field author-publication time series](../datasets/field_author_publication_time_series.md), [scientific SEIR contact model](scientific_seir_contact_model.md), [scientific apprenticeship latency](../measures/scientific_apprenticeship_latency.md), [idea reproductive number](../measures/idea_reproductive_number.md), and [publication-author scaling exponent](../measures/publication_author_scaling_exponent.md).
- Additional split pages now cover query-corpus construction, stochastic ensemble fitting, recruitment rate, active period, inactive-author states, repeated contacts, contact-effectiveness modality differences, field saturation projections, cross-field benchmarking, and productivity-regime shifts.
- A further full-text pass separates Bettencourt et al.'s susceptible author pool, cross-field author overlap checks, possible competing-idea state classes, and warnings that several parameterizations can fit the same aggregate field-growth curve.
- A residual pass separates microdata constraints for transition rates, field-level takeoff latency, serial exposed-state representations, and active-adopter recruitment feedback from the broader model.

## Caveats

- Field definitions from keywords or citations can create artificial growth patterns.
- Author disambiguation and changing publication norms affect the population time series.
- Population fits are descriptive unless tied to independent evidence about recruitment, training, funding, or institutionalization.

## Links

- [field emergence](../mechanisms/field_emergence.md)
- [field author-publication time series](../datasets/field_author_publication_time_series.md)
- [field query corpus construction](field_query_corpus_construction.md)
- [scientific SEIR contact model](scientific_seir_contact_model.md)
- [microdata-constrained field transition rates](microdata_constrained_field_transition_rates.md)
- [scientific susceptible-author pool](../representations/scientific_susceptible_author_pool.md)
- [serial exposure latency classes](../representations/serial_exposure_latency_classes.md)
- [stochastic ensemble parameter fitting](stochastic_ensemble_parameter_fitting.md)
- [field-growth model identifiability](../validations/field_growth_model_identifiability.md)
- [rival-field author overlap](../measures/rival_field_author_overlap.md)
- [competing-idea state extension](../representations/competing_idea_state_extension.md)
- [scientific field recruitment rate](../measures/scientific_field_recruitment_rate.md)
- [incipient field takeoff latency](../measures/incipient_field_takeoff_latency.md)
- [active-adopter recruitment feedback](../mechanisms/active_adopter_recruitment_feedback.md)
- [scientific apprenticeship latency](../measures/scientific_apprenticeship_latency.md)
- [scientific idea active period](../measures/scientific_idea_active_period.md)
- [scientific inactive-author state](../representations/scientific_inactive_author_state.md)
- [field saturation projection](../validations/field_saturation_projection.md)
- [contact effectiveness by research modality](../mechanisms/contact_effectiveness_by_research_modality.md)
- [idea reproductive number](../measures/idea_reproductive_number.md)
- [publication-author scaling exponent](../measures/publication_author_scaling_exponent.md)
- [cross-field SEIR benchmark](../validations/cross_field_seir_benchmark.md)
- [research fronts](../mechanisms/research_fronts.md)
- [topic prevalence dynamics](topic_prevalence_dynamics.md)
- [topic models](topic_models.md)
- [science maps](../representations/science_maps.md)
- [field classifications](../measures/field_classifications.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; WoS: unknown]

## Metadata

- Concept ID: `field_population_models`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Aliases: field growth model; epidemic model of field emergence; SEIR field model; specialty population dynamics
