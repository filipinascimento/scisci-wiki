# Ordered author-name indexing

## Summary

Ordered author-name indexing is a scalable construction method for coauthorship networks in which parsed author-name strings are stored in an ordered lookup structure so recurring names can be assigned consistently to existing author nodes without scanning all prior names.

## Canonical Form

- Unit of analysis: author-name string, author node, publication record, lookup key, or coauthorship graph.
- Typical representation: ordered binary tree, sorted name index, keyed author table, blocking index, or hash-backed lookup.
- Method target: making author-node construction tractable for large bibliographic databases.
- Empirical signature: repeated author strings map to existing nodes, and network construction avoids an O(pn) scan over papers and names.

## Uses in Science of Science

- Supplies the data-engineering step beneath [coauthorship affiliation projection](coauthorship_affiliation_projection.md).
- Makes large-scale [coauthorship networks](../representations/coauthorship_networks.md) feasible before richer [author name disambiguation](author_name_disambiguation.md) is applied.
- Connects historical name-list construction to modern [author-name blocking](author_name_blocking.md) and entity-resolution pipelines.
- Helps reproduce older coauthorship-network studies from raw paper-author files.

## Operationalization

- Parse paper records to extract author-name strings.
- Normalize the chosen key, such as surname plus first initial or surname plus all initials.
- Look up each key in an indexed author table before creating a new node.
- Add coauthorship edges between all author nodes on the same paper.
- Record the keying rule and pair the index with [coauthorship name-resolution bounds](../validations/coauthorship_name_resolution_bounds.md) or modern disambiguation validation.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) describes parsing computer files of paper lists, maintaining a list of author names already seen, and assigning recurring names to existing vertices.
- Newman notes that storing names in a simple array would require O(pn) time, which is prohibitively slow when papers and authors number in the hundreds of thousands or millions.
- The paper instead stores author names in an ordered binary tree, reducing the running time to O(p log n) and making construction tractable for the largest studied databases.
- Newman immediately pairs this scalable lookup with surname-initial bounding rules, showing that indexing solves speed but not identity ambiguity.

## Caveats

- Name-string indexing is not author disambiguation; homonyms can merge people and synonyms can split one person.
- Keying rules can encode field-, country-, and database-specific biases.
- Modern systems may use hash tables, blocking indexes, ORCID links, or probabilistic clustering, but the same lookup-and-assign logic remains.

## Links

- [coauthorship affiliation projection](coauthorship_affiliation_projection.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [author name disambiguation](author_name_disambiguation.md)
- [author-name blocking](author_name_blocking.md)
- [coauthorship name-resolution bounds](../validations/coauthorship_name_resolution_bounds.md)
- [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md)
- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; WoS: unknown]

## Metadata

- Concept ID: `ordered_author_name_indexing`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1103/PhysRevE.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `pub.1060727007`
- SciSciNet ID: `unknown`
- Aliases: author-name lookup tree; scalable author-node indexing; ordered name table; coauthorship name index
