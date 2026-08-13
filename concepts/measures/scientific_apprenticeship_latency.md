# Scientific apprenticeship latency

## Summary

Scientific apprenticeship latency measures the time between exposure to a new field or idea and visible participation in publication, treating training and adaptation as a measurable delay in field growth.

## Canonical Form

- Unit of analysis: author, field, exposure event, first field publication, cohort, or fitted model parameter.
- Typical representation: latency period, exposed-to-active transition time, fitted `1/kappa`, time to first topic publication, or training-delay distribution.
- Measurement target: how long researchers take to become active contributors after encountering a new scientific idea or specialty.
- Empirical signature: field-growth models require a nonzero delay between exposure and publication, often aligning with graduate, postdoctoral, or specialty-transition timescales.

## Uses in Science of Science

- Splits the training-delay component out of [field population models](../methods/field_population_models.md) and [scientific SEIR contact models](../methods/scientific_seir_contact_model.md).
- Complements [scientific field recruitment rate](scientific_field_recruitment_rate.md) and [scientific idea active period](scientific_idea_active_period.md) in the same model.
- Connects field growth to [mentorship and chaperone effects](../mechanisms/mentorship_chaperone_effects.md), [venue chaperone effect](../mechanisms/venue_chaperone_effect.md), and [early-career sponsorship](../mechanisms/early_career_sponsorship.md).
- Helps compare theoretical, experimental, biomedical, and technological fields where the cost of becoming publishable differs.
- Offers a longitudinal alternative to static measures of [field emergence](../mechanisms/field_emergence.md).

## Operationalization

- Fit an SEIR-style field-population model and estimate `1/kappa` as the average exposed-to-active transition time.
- Alternatively, infer the delay between first observed exposure proxy and first publication in a field using author histories.
- Compare latency across fields, career stages, disciplines, and methods or infrastructure requirements.
- Validate fitted latency against training durations, lab setup requirements, conference participation, PhD/postdoc records, or historical case evidence.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) defines the exposed class as researchers who have encountered a new idea but do not yet show it in published research.
- The paper interprets `1/kappa` as the average apprenticeship time after exposure and before visible publication.
- Across six emerging fields, Bettencourt et al. report typical incubation times between about 1.4 and 5 years.
- Their discussion argues that scientific ideas spread slowly compared with infectious diseases because adoption is mediated by prolonged training and social structures such as PhD programs, postdocs, meetings, and workshops.
- The paper cautions that richer data such as PhD-thesis records could improve constraints on latency distributions.

## Caveats

- Exposure is often unobserved, so fitted latency can absorb field-boundary errors, publication delays, and author-disambiguation mistakes.
- First publication in a topic is not the same as first learning or first working on the topic.
- Aggregate model latency may hide heterogeneous pathways for students, established researchers, theorists, experimentalists, and industrial scientists.
- Publication lags and database indexing delays can inflate apparent apprenticeship time.

## Links

- [scientific SEIR contact model](../methods/scientific_seir_contact_model.md)
- [field population models](../methods/field_population_models.md)
- [field author-publication time series](../datasets/field_author_publication_time_series.md)
- [scientific field recruitment rate](scientific_field_recruitment_rate.md)
- [scientific idea active period](scientific_idea_active_period.md)
- [idea reproductive number](idea_reproductive_number.md)
- [publication-author scaling exponent](publication_author_scaling_exponent.md)
- [mentorship and chaperone effects](../mechanisms/mentorship_chaperone_effects.md)
- [venue chaperone effect](../mechanisms/venue_chaperone_effect.md)
- [field emergence](../mechanisms/field_emergence.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; WoS: unknown]

## Metadata

- Concept ID: `scientific_apprenticeship_latency`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Aliases: exposed-to-active latency; field apprenticeship time; scientific incubation time; topic adoption delay
