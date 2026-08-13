# Coauthorship affiliation projection

## Summary

Coauthorship affiliation projection builds an author-author collaboration network by treating each paper as a group affiliation and adding ties among all coauthors on that paper.

## Canonical Form

- Unit of analysis: author, paper, author-paper incidence relation, projected author-author edge, source-domain panel, or time window.
- Typical representation: bipartite author-paper graph projected into a one-mode coauthorship graph.
- Method target: convert bibliographic bylines into a social-network trace of documented collaboration.
- Empirical signature: every multi-author paper creates a clique among its listed authors unless edges are weighted or discounted.

## Uses in Science of Science

- Supplies the construction step for [coauthorship networks](../representations/coauthorship_networks.md).
- Depends on [coauthorship affiliation-network validity](../validations/coauthorship_affiliation_network_validity.md) when the projected edge is interpreted as social or professional collaboration.
- Explains why [large-team triangle inflation](../validations/large_team_triangle_inflation.md) and [mega-collaboration degree inflation](../validations/mega_collaboration_degree_inflation.md) are projection artifacts, not separate data sources.
- Provides the unweighted baseline that can be replaced by [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md) or contribution-aware representations.
- Connects [author name disambiguation](author_name_disambiguation.md) to graph construction, because recurring names must be assigned to the same author node.

## Operationalization

- Parse paper records to extract author names and paper identifiers.
- Maintain a registry of observed author names or resolved author identities, using [ordered author-name indexing](ordered_author_name_indexing.md) for large source-domain panels.
- For every paper, add edges between every pair of listed authors.
- Optionally keep the bipartite author-paper layer so projected edges can later be weighted by team size, repeated collaboration count, or contribution role.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) explicitly frames scientific coauthorship as an affiliation network: authors are actors and the coauthor group of each paper is the group affiliation.
- Newman describes parsing computer files of paper records, assigning recurring names to existing vertices, and adding edges between each pair of authors on each paper.
- The paper emphasizes that coauthorship is a documented but imperfect social tie: most coauthors are acquainted, but very large collaborations may contain coauthors who have never met.

## Caveats

- Projection turns a paper with many authors into many author-author edges, which can inflate degree and clustering.
- Coauthorship does not prove equal contribution, acquaintance, mentorship, or knowledge exchange.
- Name disambiguation determines whether repeated bylines are treated as one author node or several nodes.

## Links

- [coauthorship networks](../representations/coauthorship_networks.md)
- [coauthorship affiliation-network validity](../validations/coauthorship_affiliation_network_validity.md)
- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [large-team triangle inflation](../validations/large_team_triangle_inflation.md)
- [mega-collaboration degree inflation](../validations/mega_collaboration_degree_inflation.md)
- [coauthorship name-resolution bounds](../validations/coauthorship_name_resolution_bounds.md)
- [ordered author-name indexing](ordered_author_name_indexing.md)
- [author name disambiguation](author_name_disambiguation.md)
- [author-name blocking](author_name_blocking.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; WoS: unknown]

## Metadata

- Concept ID: `coauthorship_affiliation_projection`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1103/PhysRevE.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: author-paper projection; coauthor affiliation network; byline clique projection; one-mode coauthorship projection
