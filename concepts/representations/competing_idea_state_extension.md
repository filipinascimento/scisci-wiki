# Competing-idea state extension

## Summary

Competing-idea state extension adds an explicit rival-idea state to field-growth models so authors can convert to alternative, skeptical, or competing scientific positions.

## Canonical Form

- Unit of analysis: field, rival theory, author state, competing idea, or SEIR model extension.
- Typical representation: additional state `Z`, converts to competing ideas, skeptics, stiflers, or rival-field compartments.
- Representation target: model field growth when alternative ideas compete for overlapping author populations.
- Empirical signature: rival fields share authors or show coupled growth/decline that a single-idea SEIR model cannot represent cleanly.

## Uses in Science of Science

- Extends [scientific SEIR contact model](../methods/scientific_seir_contact_model.md) beyond a single focal idea.
- Provides a representation for [rival-field author overlap](../measures/rival_field_author_overlap.md).
- Helps address [field-growth model identifiability](../validations/field_growth_model_identifiability.md) when a missing rival-state mechanism could explain aggregate growth.
- Connects to [scientific inactive-author state](scientific_inactive_author_state.md) by distinguishing exit from conversion to a rival idea.

## Operationalization

- Identify rival or competing fields and construct comparable author-publication time series.
- Add an explicit state for authors converted to competing ideas, skeptics, stiflers, or alternative programs.
- Estimate transition rates between focal, rival, exposed, and inactive states where data permit.
- Validate model interpretation against author overlap, citations between rival fields, and historical accounts of field competition.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) proposes adding an explicit class of converts to competing ideas, labeled `Z`, to the basic SEIR model.
- The authors describe this state as representing skeptics or stiflers in an extension of scientific idea-spread modeling.
- They argue that such an extension could be useful for jointly modeling cosmological inflation and cosmic strings, two competing fields with overlapping authors.
- This proposal appears in a discussion of model improvements and should be treated as a suggested extension rather than a validated model in the paper.

## Caveats

- Competing-idea states require stronger data than aggregate field counts, especially transition histories for authors.
- The same author can work on rival ideas without converting away from the original field.
- Adding states can make models less identifiable unless historical or author-level evidence constrains transitions.

## Links

- [scientific SEIR contact model](../methods/scientific_seir_contact_model.md)
- [field population models](../methods/field_population_models.md)
- [rival-field author overlap](../measures/rival_field_author_overlap.md)
- [field-growth model identifiability](../validations/field_growth_model_identifiability.md)
- [scientific inactive-author state](scientific_inactive_author_state.md)
- [repeated scientific-contact reinforcement](../mechanisms/repeated_scientific_contact_reinforcement.md)
- [field emergence](../mechanisms/field_emergence.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; SciSciNet: W2143083489]

## Metadata

- Concept ID: `competing_idea_state_extension`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Dimensions ID: `pub.1006988333`
- SciSciNet ID: `W2143083489`
- Aliases: rival idea state; competing SEIR extension; skeptic state; scientific stifler class
