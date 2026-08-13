# Scientific idea active period

## Summary

Scientific idea active period measures how long an active adopter continues publishing on a field or idea and remains able to transmit it to other researchers.

## Canonical Form

- Unit of analysis: active author, field, publication spell, fitted exit parameter, or transmission window.
- Typical representation: active-period duration `1/gamma`, exit rate `gamma`, or author topic-publication spell length.
- Measurement target: how long an idea remains actively developed and teachable through publication and interaction.
- Empirical signature: fields with longer active periods can have large reproductive numbers even without extreme contact rates.

## Uses in Science of Science

- Complements [scientific apprenticeship latency](scientific_apprenticeship_latency.md) by measuring active participation after adoption.
- Determines [idea reproductive number](idea_reproductive_number.md) together with contact effectiveness.
- Helps interpret fitted [scientific SEIR contact model](../methods/scientific_seir_contact_model.md) parameters.
- Connects field growth to topic persistence, turnover, and exit from research fronts.

## Operationalization

- Fit an SEIR-style field-population model and estimate `1/gamma`.
- Alternatively, measure author-level publication spells in a query-defined field.
- Compare active periods across fields, controlling for publication norms, career stage, and field boundaries.
- Validate with historical evidence about topic lifetime, lab formation, or continuing conference communities.
- Track movement into [scientific inactive-author state](../representations/scientific_inactive_author_state.md) when modeling field exit.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) interprets `1/gamma` as the duration of the infectious period, or how long a scientist publishes on a topic and can teach others.
- Across six case studies, the paper reports active periods ranging from about six months to about ten years.
- Bettencourt et al. argue that useful ideas can remain transmissible for years, producing large `R0` values even when contact rates are not especially high.
- The discussion contrasts this slow and sustained idea transmission with many infectious-disease processes.

## Caveats

- Publication spells are imperfect proxies for active mentoring, conference participation, or informal idea transmission.
- Exit from a topic can reflect field boundary changes rather than true loss of transmissibility.
- Aggregate `gamma` estimates can hide heterogeneous active periods across students, senior researchers, theorists, and experimentalists.

## Links

- [scientific SEIR contact model](../methods/scientific_seir_contact_model.md)
- [scientific apprenticeship latency](scientific_apprenticeship_latency.md)
- [scientific inactive-author state](../representations/scientific_inactive_author_state.md)
- [idea reproductive number](idea_reproductive_number.md)
- [scientific field recruitment rate](scientific_field_recruitment_rate.md)
- [field population models](../methods/field_population_models.md)
- [field author-publication time series](../datasets/field_author_publication_time_series.md)
- [research fronts](../mechanisms/research_fronts.md)
- [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; WoS: unknown; SciSciNet: W2143083489]

## Metadata

- Concept ID: `scientific_idea_active_period`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Dimensions ID: `pub.1006988333`
- SciSciNet ID: `W2143083489`
- Aliases: scientific infectious period; idea transmission duration; active topic publication spell; field active-period parameter
