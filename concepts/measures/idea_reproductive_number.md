# Idea reproductive number

## Summary

Idea reproductive number measures how many new researchers an active adopter is expected to recruit into a field, adapting the epidemic reproductive number to the spread of scientific ideas.

## Canonical Form

- Unit of analysis: field, active author, susceptible author pool, contact process, or fitted population model.
- Typical representation: `R0`, ratio of contact effectiveness to exit or active-period rate, reproduction estimate by field, and uncertainty interval.
- Measurement target: the capacity of active researchers to transmit an idea, technique, or specialty to additional practitioners.
- Empirical signature: high `R0` values indicate that useful ideas can be transmitted repeatedly over long active periods, even when contact rates are not extreme.

## Uses in Science of Science

- Quantifies the transmission component in [scientific SEIR contact models](../methods/scientific_seir_contact_model.md).
- Links [field emergence](../mechanisms/field_emergence.md) to recruitment, apprenticeship, sustained interaction, and author-pool growth.
- Complements [scientific apprenticeship latency](scientific_apprenticeship_latency.md) by separating adoption delay from eventual propagation.
- Depends on [scientific idea active period](scientific_idea_active_period.md), because long active publication spells can raise `R0` even when contact rates are moderate.
- Helps compare fields with different social organization, equipment needs, funding intensity, and theoretical or experimental character.

## Operationalization

- Fit an SEIR-style field-population model with contact and active-period parameters.
- Compute `R0 = beta / gamma` or the model-specific reproductive expression documented by the fitted system.
- Report field-specific estimates with confidence intervals and the fitted time window.
- Interpret `R0` together with recruitment rate, susceptible-pool size, apprenticeship latency, and field-boundary uncertainty.
- Validate high or low values with independent historical evidence about training, conferences, lab formation, or cross-field recruitment.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) defines the reproductive number in their model as the average number of new people infected by a given infected individual, with `R0 = beta/gamma`.
- The paper reports large reproductive numbers across its six field case studies, ranging from about 1.8 to 64.
- Bettencourt et al. argue these large values differ from many infectious diseases because useful ideas can remain transmissible for long periods and can be developed over several years.
- Their discussion connects high reproductive numbers to sustained scientific structures such as PhD programs, postdocs, meetings, and workshops.
- The paper also notes that repeated-contact terms were not essential in most fitted cases, suggesting that aggregate `R0` should be interpreted with care.

## Caveats

- `R0` in science does not mean biological contagion; it is a coarse transmission analogy.
- Estimates can be confounded by field-size growth, funding shocks, database coverage, and changing query definitions.
- High `R0` may reflect long active publication periods rather than intense direct contact.
- Different model structures can imply different reproductive-number formulas.

## Links

- [scientific SEIR contact model](../methods/scientific_seir_contact_model.md)
- [field population models](../methods/field_population_models.md)
- [scientific field recruitment rate](scientific_field_recruitment_rate.md)
- [scientific apprenticeship latency](scientific_apprenticeship_latency.md)
- [scientific idea active period](scientific_idea_active_period.md)
- [field author-publication time series](../datasets/field_author_publication_time_series.md)
- [field emergence](../mechanisms/field_emergence.md)
- [research fronts](../mechanisms/research_fronts.md)
- [collaboration clustering coefficient](collaboration_clustering_coefficient.md)
- [continuant collaborators](../mechanisms/continuant_collaborators.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; WoS: unknown]

## Metadata

- Concept ID: `idea_reproductive_number`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Aliases: scientific R0; idea reproduction number; field transmission number; adopter recruitment number
