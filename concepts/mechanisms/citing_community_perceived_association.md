# Citing-community perceived association

## Summary

Citing-community perceived association is the mechanism by which later authors collectively make two earlier works appear related by repeatedly citing them together.

## Canonical Form

- Unit of analysis: pair of cited works, citing community, field, specialty, or time slice.
- Typical representation: co-citation edge interpreted as a community-assigned relationship.
- Mechanism or measurement target: retrospective perception of intellectual association by authors who cite both works.
- Empirical signature: many later authors independently include both earlier works in the same reference lists.

## Uses in Science of Science

- Provides the interpretive mechanism behind [co-citation](../representations/co_citation.md) and [co-citation strength](../measures/co_citation_strength.md).
- Explains why [temporal co-citation drift](temporal_co_citation_drift.md) is expected as field interests and intellectual patterns change.
- Distinguishes co-citation from [bibliographic coupling](../representations/bibliographic_coupling.md), which is fixed at publication time by the source documents' own reference lists.
- Supports validation with citation contexts, expert labels, and direct-citation overlap because the same edge can reflect similarity, method use, controversy, or canon formation.
- Connects citation-network measurement to mechanisms of research-front construction and specialty memory.

## Operationalization

- Build co-citation pairs with [citation-index co-citation intersection](../methods/citation_index_co_citation_intersection.md).
- Partition citing documents by field, author community, institution, time window, or topic to identify which community supplies the perceived association.
- Compare edge weights across communities or time slices to detect local interpretations and changing meanings.
- Read citation contexts or citing-paper abstracts for high-weight edges to distinguish topical similarity, method dependency, criticism, and canonical framing.

## Evidence and Validations

- Verified full-text evidence from Small (1973) states that strong co-citation requires many authors to cite two earlier works and therefore that co-citation is a relationship established by citing authors.
- Small explicitly interprets co-citation strength as the degree of relationship or association between papers as perceived by the population of citing authors.
- Because the relationship depends on citing authors, Small argues that co-citation patterns can change over time as field interests and intellectual patterns change.
- This mechanism underwrites the dynamic contrast between co-citation and fixed bibliographic coupling.

## Caveats

- Citing communities are not interchangeable with full scientific communities; indexed citing authors are a sampled and database-dependent subset.
- A perceived association may be positive, negative, methodological, historical, or rhetorical rather than evidence of conceptual similarity.
- Highly visible works can be co-cited because they are obligatory references, not because later authors view their claims as closely related.

## Links

- [co-citation](../representations/co_citation.md)
- [co-citation strength](../measures/co_citation_strength.md)
- [citation-index co-citation intersection](../methods/citation_index_co_citation_intersection.md)
- [relative co-citation frequency](../measures/relative_co_citation_frequency.md)
- [thresholded co-citation network](../representations/thresholded_co_citation_network.md)
- [temporal co-citation drift](temporal_co_citation_drift.md)
- [co-cited core literature](../representations/co_cited_core_literature.md)
- [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [citation contexts](../representations/citation_contexts.md)
- [direct-citation co-citation overlap](../validations/direct_citation_co_citation_overlap.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `citing_community_perceived_association`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: citing-author perceived association; community-assigned citation relation; perceived co-citation association; downstream relational perception
