# Direct-citation co-citation overlap

## Summary

Direct-citation co-citation overlap is a validation check that asks whether strong co-citation ties correspond to direct citation links between the paired papers.

## Canonical Form

- Unit of analysis: pair of cited papers, specialty co-citation network, direct citation edge, or validation table.
- Typical representation: cross-tabulation of co-citation strength against direct-citation presence, overlap rate, or edge-level comparison.
- Mechanism or measurement target: whether co-citation recovers intellectual relationships already visible through direct citations.
- Empirical signature: strongly co-cited paper pairs are disproportionately connected by one paper citing the other.

## Uses in Science of Science

- Validates [co-citation strength](../measures/co_citation_strength.md) against an independent citation-network relation.
- Helps interpret [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md) as more than a volume artifact.
- Separates direct intellectual acknowledgement from broader community-perceived association.
- Provides a reusable benchmark for co-citation maps, citation-context models, and paper-similarity embeddings.

## Operationalization

- Build a co-citation matrix among cited papers in a bounded specialty.
- Build a directed citation network among the same papers.
- Compare high co-citation edges with the presence or absence of direct citation links.
- Report overlap by threshold, average co-citation strength for directly linked versus unlinked pairs, and exceptions requiring full-text interpretation.
- Use [co-citation edge-context interpretation](../methods/co_citation_edge_context_interpretation.md) for strong co-citation edges that are not explained by direct citation.

## Evidence and Validations

- Verified full-text evidence from Small (1973) compares co-citation linkages in a particle-physics specialty with direct citation patterns among the same papers.
- Small reports that the strongest co-citation links are often between papers connected by direct citation, while also noting that direct citation does not explain all strong co-citation ties.
- In the example, the average co-citation frequency is 17.8 for directly connected paper pairs and 4.9 for pairs not connected by direct citation.
- Small reports that all direct-citation cases have co-citation strength of at least five, but some co-citation strengths of six or more occur without direct citation.
- This makes direct citation a partial validation anchor: it supports some co-citation ties but leaves room for community-recognized associations that are not direct-citation edges.

## Caveats

- Direct citation is asymmetric and constrained by publication date, while co-citation is symmetric and produced later.
- Strong co-citation without direct citation may still reflect a real intellectual connection.
- Direct-citation overlap can be inflated in small cores of canonical papers or deflated when citation norms are sparse.

## Links

- [co-citation](../representations/co_citation.md)
- [co-citation strength](../measures/co_citation_strength.md)
- [citation networks](../representations/citation_networks.md)
- [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md)
- [co-citation bibliographic-coupling divergence](co_citation_bibliographic_coupling_divergence.md)
- [co-citation edge-context interpretation](../methods/co_citation_edge_context_interpretation.md)
- [science map accuracy validation](science_map_accuracy_validation.md)
- [citation contexts and functions](../representations/citation_contexts.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `direct_citation_co_citation_overlap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: direct-citation overlap check; direct citation co-citation validation; co-citation direct-edge validation; direct-citation comparison
