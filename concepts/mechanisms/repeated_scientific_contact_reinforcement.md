# Repeated scientific-contact reinforcement

## Summary

Repeated scientific-contact reinforcement is the mechanism by which sustained contact between exposed researchers and active adopters helps transmit a scientific idea, method, or specialty.

## Canonical Form

- Unit of analysis: exposed researcher, active adopter, mentor-apprentice pair, lab group, workshop, field, or contact process.
- Typical representation: repeated-contact parameter, exposed-infected interaction term, mentorship contact, training contact, or contact-rate modifier.
- Mechanism: repeated interactions make adoption more likely when a scientific idea requires tacit knowledge, apprenticeship, instruments, or sustained interpretation.
- Empirical signature: field growth requires more than one-off exposure, and model fits improve when exposed-active repeated contacts are included.

## Uses in Science of Science

- Refines the contact layer of [scientific SEIR contact model](../methods/scientific_seir_contact_model.md).
- Connects field emergence to mentorship, postdoctoral training, lab visits, conferences, and workshops as transmission infrastructure.
- Complements [scientific apprenticeship latency](../measures/scientific_apprenticeship_latency.md) by specifying the interaction process during the exposed period.

## Operationalization

- Represent repeated contacts between exposed and active field participants through coauthorship, advisor-student links, lab membership, conference attendance, citation paths, or collaboration histories.
- Include an exposed-active contact term in a field-population model and estimate whether it improves fit.
- Compare fields where adoption requires laboratory capability, technical training, or tacit practice with fields where one-off publication exposure may be sufficient.
- Validate model parameters against independent evidence about training pipelines and community institutions.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) adds a contact term between exposed and infected populations, denoted `rho`, to capture multiple effective contacts.
- The discussion states that long and repeated contacts between adopters and susceptible individuals may be typical when concepts or techniques are transmitted.
- In their six fitted cases, Bettencourt et al. find that this term is usually small except for prions and scrapie, suggesting either that persistent contacts were not essential in most cases or that a different modeling strategy is needed.

## Caveats

- A small fitted repeated-contact parameter does not prove repeated contact is unimportant; aggregate author-count data may be too coarse.
- Coauthorship and citation traces miss informal teaching, conferences, laboratory visits, and tacit training.
- Repeated contact can transmit skepticism, competing interpretations, or standards as well as adoption.

## Links

- [scientific SEIR contact model](../methods/scientific_seir_contact_model.md)
- [scientific apprenticeship latency](../measures/scientific_apprenticeship_latency.md)
- [contact effectiveness by research modality](contact_effectiveness_by_research_modality.md)
- [field population models](../methods/field_population_models.md)
- [field emergence](field_emergence.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [invisible college](invisible_college.md)
- [research fronts](research_fronts.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; WoS: unknown; SciSciNet: W2143083489]

## Metadata

- Concept ID: `repeated_scientific_contact_reinforcement`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Dimensions ID: `pub.1006988333`
- SciSciNet ID: `W2143083489`
- Aliases: repeated adoption contact; exposed-active contact reinforcement; scientific contact reinforcement; mentor-apprentice transmission contact
