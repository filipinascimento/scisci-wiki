# Coauthorship-citation network distinction

## Summary

Coauthorship-citation network distinction separates author-author collaboration networks from paper-paper citation networks, because they represent different entities and different relations in science.

## Canonical Form

- Unit of analysis: representation, node type, edge type, author, paper, coauthorship tie, or citation edge.
- Typical representation: author-author social graph versus paper-paper directed citation graph.
- Representation target: avoiding conceptual drift between social collaboration structure and knowledge-document linkage.
- Empirical signature: the same publication corpus can produce different network layers with different nodes, edges, mechanisms, and interpretations.

## Uses in Science of Science

- Clarifies the representation choice for [coauthorship networks](coauthorship_networks.md) and [citation networks](citation_networks.md).
- Supports [science as a multiscale network](science_as_multiscale_network.md), where papers, authors, institutions, and citations form coupled but distinct layers.
- Prevents applying citation-network mechanisms directly to collaboration networks without rechecking node and edge semantics.
- Helps specify data models for [scholarly entity graphs](scholarly_entity_graphs.md) and [paper-author-affiliation linkages](paper_author_affiliation_linkages.md).

## Operationalization

- State node type and edge semantics before computing any network measure.
- Keep paper-paper citation edges directed and author-author coauthorship edges undirected or weighted unless the analysis justifies another representation.
- Track when an author-paper bipartite graph is projected into an author-author network.
- Report which scholarly layer is being used for each mechanism, measure, and validation.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) states that citation networks have papers as nodes and citations as links.
- The same text distinguishes coauthorship networks, where nodes are authors and links document coauthorship.
- Newman argues that coauthorship networks depict academic society as well as the structure of knowledge, which explains why they answer different questions from citation networks.
- The distinction motivates separate measures for collaboration patterns, such as collaborator counts and path lengths, rather than reusing paper-citation measures without translation.

## Caveats

- Coauthorship and citation layers interact, but their edges should not be conflated.
- Projected author-author networks can obscure paper-level team structure.
- Citation networks also contain social signals, while coauthorship networks can reflect intellectual organization; the distinction is representational, not absolute.

## Links

- [coauthorship networks](coauthorship_networks.md)
- [citation networks](citation_networks.md)
- [science as a multiscale network](science_as_multiscale_network.md)
- [weighted coauthorship edges](weighted_coauthorship_edges.md)
- [paper-author-affiliation linkages](paper_author_affiliation_linkages.md)
- [scholarly entity graphs](scholarly_entity_graphs.md)
- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `coauthorship_citation_network_distinction`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: author-paper network distinction; collaboration citation layer distinction; coauthorship versus citation network; social intellectual network distinction
