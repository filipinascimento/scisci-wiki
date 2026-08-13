# Scientific inactive-author state

## Summary

Scientific inactive-author state represents researchers who previously participated in a field but no longer publish on the topic, analogous to the recovered class in SEIR field-population models.

## Canonical Form

- Unit of analysis: author, field, publication spell, topic-exit event, or recovered state in a population model.
- Typical representation: `R(t)` recovered class, inactive author count, exit rate, publication-spell ending, or topic churn state.
- Representation target: distinguish active field participation from prior adoption followed by exit or inactivity.
- Empirical signature: cumulative author counts exceed active-author counts because some adopters stop publishing in the field.

## Uses in Science of Science

- Makes the recovered state in [scientific SEIR contact model](../methods/scientific_seir_contact_model.md) explicit.
- Complements [scientific idea active period](../measures/scientific_idea_active_period.md), where exit from active publication is summarized by `gamma`.
- Supports field-churn analyses, topic-life-cycle studies, and validation of field-growth models against author-level publication spells.

## Operationalization

- Define a field corpus and identify authors over time.
- Mark authors as active when they publish in the field within a specified window.
- Move authors to an inactive or recovered state after no field publications are observed for a documented lag.
- Compare recovered-state dynamics with fitted `R(t)`, active-period estimates, and known historical shifts in the field.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) includes a recovered class `R(t)` for people no longer publishing on the topic.
- The paper interprets the active or infectious period as how long a scientist publishes on a topic and can teach others, after which researchers move out of active transmission.
- Bettencourt et al. note that the recovered population at the initial time was negligible in their six fitted cases, making later exits part of the modeled field trajectory.

## Caveats

- Publication inactivity is not the same as loss of expertise; researchers may mentor, review, cite, or return later.
- The inactive-state rule depends on publication lag, author disambiguation, field query design, and observation-window length.
- Recovered-state estimates can be unstable in young fields where few exit events have yet occurred.

## Links

- [scientific SEIR contact model](../methods/scientific_seir_contact_model.md)
- [scientific idea active period](../measures/scientific_idea_active_period.md)
- [field author-publication time series](../datasets/field_author_publication_time_series.md)
- [field population models](../methods/field_population_models.md)
- [scientific field recruitment rate](../measures/scientific_field_recruitment_rate.md)
- [field saturation projection](../validations/field_saturation_projection.md)
- [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md)
- [field emergence](../mechanisms/field_emergence.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; WoS: unknown; SciSciNet: W2143083489]

## Metadata

- Concept ID: `scientific_inactive_author_state`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Dimensions ID: `pub.1006988333`
- SciSciNet ID: `W2143083489`
- Aliases: recovered author class; inactive topic adopter; field exit state; recovered scientific population
