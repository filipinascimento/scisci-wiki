# Scientific field recruitment rate

## Summary

Scientific field recruitment rate measures how quickly new potential participants enter the susceptible pool of an emerging scientific field.

## Canonical Form

- Unit of analysis: scientific field, susceptible author population, time interval, model fit, or recruitment shock.
- Typical representation: recruitment parameter `Lambda`, either constant, proportional to field population, or activated after a historical event.
- Measurement target: distinguish field growth driven by new entrant supply from growth driven by conversion of an existing susceptible pool.
- Empirical signature: fields differ in whether author-pool growth is constant, proportional, delayed, or event-triggered.

## Uses in Science of Science

- Splits the recruitment component out of [scientific SEIR contact model](../methods/scientific_seir_contact_model.md).
- Helps interpret [field emergence](../mechanisms/field_emergence.md) alongside [scientific apprenticeship latency](scientific_apprenticeship_latency.md), [scientific idea active period](scientific_idea_active_period.md), and [idea reproductive number](idea_reproductive_number.md).
- Links field growth to funding, public attention, institutional programs, and cross-disciplinary entry.
- Supports comparisons between theoretical, biomedical, and technological fields.

## Operationalization

- Fit a field-population model that includes a susceptible-pool recruitment term.
- Test whether recruitment is better represented as constant, proportional to population, or time-limited.
- Compare fitted recruitment patterns with historical events, funding programs, technical breakthroughs, and field institutionalization.
- Report uncertainty and alternative models when recruitment and contact rates are hard to distinguish.
- Pair recruitment estimates with [field saturation projection](../validations/field_saturation_projection.md) when asking whether an author pool is still expanding.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) includes a recruitment term in its SEIR-style field-population model.
- The paper reports that some fields are better fit by constant recruitment, while cosmological inflation, carbon nanotubes, and quantum computing are better fit by population-proportional or delayed recruitment dynamics.
- Bettencourt et al. interpret initial susceptible populations and recruitment rates as reflecting field size and the rate of infusion of new researchers.
- For quantum computing, the paper uses a recruitment term that starts in 1990, consistent with later rapid growth.

## Caveats

- Recruitment estimates can absorb database coverage changes, query-boundary shifts, and author-disambiguation errors.
- Recruitment and contact parameters may be weakly identified from aggregate author counts.
- A fitted recruitment switch should be validated against independent field history.

## Links

- [scientific SEIR contact model](../methods/scientific_seir_contact_model.md)
- [field population models](../methods/field_population_models.md)
- [field author-publication time series](../datasets/field_author_publication_time_series.md)
- [scientific apprenticeship latency](scientific_apprenticeship_latency.md)
- [scientific idea active period](scientific_idea_active_period.md)
- [field saturation projection](../validations/field_saturation_projection.md)
- [idea reproductive number](idea_reproductive_number.md)
- [productivity regime shift](../validations/productivity_regime_shift.md)
- [field emergence](../mechanisms/field_emergence.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; WoS: unknown; SciSciNet: W2143083489]

## Metadata

- Concept ID: `scientific_field_recruitment_rate`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Dimensions ID: `pub.1006988333`
- SciSciNet ID: `W2143083489`
- Aliases: field recruitment parameter; susceptible-pool growth rate; scientific entrant rate; Lambda field-growth parameter
