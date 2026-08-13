# Rival-field author overlap

## Summary

Rival-field author overlap measures how many researchers publish in two neighboring, competing, or alternative scientific fields.

## Canonical Form

- Unit of analysis: field pair, author, publication corpus, rival theory, or specialty community.
- Typical representation: pairwise author-overlap share, intersection count, overlap matrix, or cross-field author set.
- Measurement target: the degree to which two field populations are distinct or share a common author community.
- Empirical signature: competing fields may have different growth trajectories despite measurable overlap in their author pools.

## Uses in Science of Science

- Validates [field query corpus construction](../methods/field_query_corpus_construction.md) by checking whether nominally separate fields share authors.
- Adds an author-level bridge to [field author-publication time series](../datasets/field_author_publication_time_series.md).
- Helps interpret [field emergence](../mechanisms/field_emergence.md) when rival theories draw from the same scientific community.
- Supports [competing-idea state extension](../representations/competing_idea_state_extension.md), where authors can move between or participate in rival idea states.

## Operationalization

- Build author sets for each field with consistent name disambiguation and corpus rules.
- Compute the intersection share relative to the union or to each field's author population.
- Stratify overlap by period to see whether rivalry, convergence, or replacement changes author mixing.
- Compare overlap with citation overlap, topic overlap, and field growth trajectories.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) compares cosmological inflation and cosmic strings as rival theories in high-energy physics.
- The paper reports that the two author communities often mixed, with about 15% of authors publishing in either field also publishing in the other.
- Bettencourt et al. use this overlap to motivate comparing the temporal development of the two fields despite their different growth trajectories.
- The same discussion suggests that competing fields may need models that explicitly represent rival idea states when authors participate in both.

## Caveats

- Author overlap depends heavily on name disambiguation and field-query boundaries.
- Shared authorship can indicate methodological proximity, intellectual rivalry, broad field membership, or opportunistic publication rather than direct competition.
- Overlap shares can look small in absolute terms but be strategically important if the shared authors are central.

## Links

- [field query corpus construction](../methods/field_query_corpus_construction.md)
- [field author-publication time series](../datasets/field_author_publication_time_series.md)
- [field emergence](../mechanisms/field_emergence.md)
- [scientific SEIR contact model](../methods/scientific_seir_contact_model.md)
- [competing-idea state extension](../representations/competing_idea_state_extension.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [field classifications](field_classifications.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; SciSciNet: W2143083489]

## Metadata

- Concept ID: `rival_field_author_overlap`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Dimensions ID: `pub.1006988333`
- SciSciNet ID: `W2143083489`
- Aliases: competing-field author overlap; rival theory author overlap; field-pair author intersection; cross-field author mixing
