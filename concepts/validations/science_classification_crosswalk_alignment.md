# Science-classification crosswalk alignment

## Summary

Science-classification crosswalk alignment validates whether a science map or classification can be translated to other widely used classification systems and ontologies.

## Canonical Form

- Unit of analysis: source title, field label, subdiscipline, classification code, ontology node, or crosswalk edge.
- Typical representation: mapping table between a science map and external systems such as WoS, Scopus, Library of Congress, Universal Decimal Classification, or Science-Metrix.
- Validation target: make science-map overlays interoperable with existing classification systems.
- Empirical signature: categories can be translated without large unmapped regions or contradictory assignments.

## Uses in Science of Science

- Extends [science-map desiderata checklist](science_map_desiderata_checklist.md) with an explicit interoperability requirement.
- Connects [field classifications](../measures/field_classifications.md) to [science-location lookup tables](../methods/science_location_lookup_tables.md).
- Supports [science map accuracy validation](science_map_accuracy_validation.md) when users compare outputs across classification families.

## Operationalization

- Identify source and target classification systems.
- Match journals, papers, terms, or subject categories across systems.
- Record one-to-one, one-to-many, and unmapped cases.
- Validate the crosswalk with coverage, ambiguity, and user-task checks.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) lists alignment with commonly used science classifications as a desirable feature of a science map.
- The paper specifically mentions Thomson Reuters databases, Elsevier Scopus, Library of Congress, Universal Decimal Classification, and Science-Metrix.
- It also states that such alignment remains desirable but was not yet done for the UCSD map.

## Caveats

- Crosswalks can hide differences between journal-level, paper-level, and subject-category systems.
- Many classifications are purpose-built and should not be forced into exact equivalence.
- Multilingual and ontology translations introduce additional ambiguity.

## Links

- [science-map desiderata checklist](science_map_desiderata_checklist.md)
- [field classifications](../measures/field_classifications.md)
- [science map accuracy validation](science_map_accuracy_validation.md)
- [science-location lookup tables](../methods/science_location_lookup_tables.md)
- [science maps](../representations/science_maps.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; SciSciNet: W2036137014; WoS: unknown]

## Metadata

- Concept ID: `science_classification_crosswalk_alignment`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: science-map crosswalk; classification interoperability validation; field ontology alignment; source-title classification crosswalk
