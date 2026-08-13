# Scientific susceptible-author pool

## Summary

Scientific susceptible-author pool represents the researchers who could enter a scientific field but have not yet adopted the field's focal idea in their publications.

## Canonical Form

- Unit of analysis: field, specialty, author population, potential entrant, or SEIR state.
- Typical representation: susceptible state `S(t)`, initial susceptible population `S(t0)`, recruitment rate, or bounded potential-adopter pool.
- Representation target: the latent population from which a field can recruit future active authors.
- Empirical signature: fields with broader disciplinary reach have larger susceptible pools, while narrow specialties draw from smaller potential entrant populations.

## Uses in Science of Science

- Makes the latent entry pool explicit in [scientific SEIR contact model](../methods/scientific_seir_contact_model.md) and [field population models](../methods/field_population_models.md).
- Helps interpret [scientific field recruitment rate](../measures/scientific_field_recruitment_rate.md) as growth of the potential-author reservoir, not only observed author entry.
- Links field breadth and cross-disciplinary reach to [field emergence](../mechanisms/field_emergence.md).
- Provides a population-state counterpart to [scientific inactive-author state](scientific_inactive_author_state.md).

## Operationalization

- Define the field boundary and candidate feeder communities before fitting the model.
- Estimate `S(t0)` or a time-varying susceptible pool as part of an SEIR-style field-growth model.
- Compare susceptible-pool size across fields with different disciplinary breadths.
- Validate the inferred pool against adjacent fields, review histories, training records, or author-topic overlap where possible.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) defines `S(t)` as the susceptible population in a scientific field model.
- The paper treats the total model population as the sum of susceptible, exposed, active, and recovered author classes.
- Bettencourt et al. estimate initial susceptible populations for six emerging fields and argue that `S(t0)` often reflects field size and recruitment potential.
- Their cross-field comparison reports that narrowly defined theoretical specialties have small initial susceptible populations, while fields crossing disciplinary boundaries have larger susceptible pools.

## Caveats

- The susceptible pool is latent and inferred from model fit, not directly observed.
- A large susceptible pool can reflect broad topical appeal, vague field boundaries, or query over-inclusion.
- Several parameter regimes can imply different susceptible-pool interpretations for the same author-count curve.

## Links

- [scientific SEIR contact model](../methods/scientific_seir_contact_model.md)
- [field population models](../methods/field_population_models.md)
- [scientific field recruitment rate](../measures/scientific_field_recruitment_rate.md)
- [field author-publication time series](../datasets/field_author_publication_time_series.md)
- [field emergence](../mechanisms/field_emergence.md)
- [contact effectiveness by research modality](../mechanisms/contact_effectiveness_by_research_modality.md)
- [scientific inactive-author state](scientific_inactive_author_state.md)
- [field-growth model identifiability](../validations/field_growth_model_identifiability.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; SciSciNet: W2143083489]

## Metadata

- Concept ID: `scientific_susceptible_author_pool`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Dimensions ID: `pub.1006988333`
- SciSciNet ID: `W2143083489`
- Aliases: susceptible scientific population; potential field entrants; latent author pool; susceptible author state
