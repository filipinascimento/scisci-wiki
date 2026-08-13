# Normalized bidirectional subdiscipline assignment

## Summary

New journals can be assigned using normalized incoming and outgoing citation ties to existing subdisciplines.

## Canonical Form

- Unit of analysis: new source title, incoming citation, outgoing reference, subdiscipline, publication volume, or normalized tie strength.
- Typical representation: size-normalized incoming/outgoing citation profile over map subdisciplines.
- Mechanism, measurement, or validation target: bidirectional citation placement of journals in a map classification.
- Empirical signature: a new journal is placed in the subdiscipline with the strongest normalized two-way citation relation.

## Uses in Science of Science

- Refines science-map classification methods by linking it to [science map update workflows](science_map_update_workflows.md) and [field classifications](../measures/field_classifications.md).
- Useful as a reusable check when [citation networks](../representations/citation_networks.md) is used in science-of-science inference.
- Creates cross-links to [field normalized citation impact](../measures/field_normalized_citation_impact.md) so the motif is not interpreted in isolation.

## Operationalization

- Compute citations from each new journal to each original subdiscipline and from each subdiscipline to the new journal.
- Normalize those flows by subdiscipline publication volume.
- Choose the top subdiscipline while auditing small or young journals for noise amplification.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) states that the WoS update counted citations to and from each subdiscipline and normalized by papers published in those subdisciplines before assigning top categories.
- The method reduces raw size bias in journal placement.

## Caveats

- Normalization can amplify noise for small or young journals.
- Bidirectional citation flows still reflect citation culture, age, and indexing coverage.

## Links

- [Science map update workflows](science_map_update_workflows.md)
- [Field classifications](../measures/field_classifications.md)
- [Citation networks](../representations/citation_networks.md)
- [Field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [Disciplinary independence](../measures/disciplinary_independence.md)
- [Science map accuracy validation](../validations/science_map_accuracy_validation.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `normalized_bidirectional_subdiscipline_assignment`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: incoming-outgoing citation assignment; size-normalized journal classification; bidirectional citation placement
