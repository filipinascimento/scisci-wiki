# Complex-system node-edge abstraction

## Summary

Complex-system node-edge abstraction represents heterogeneous systems as vertices connected by interaction edges so biological, social, web, citation, and scholarly systems can be compared with a shared graph vocabulary.

## Canonical Form

- Unit of analysis: system, node, edge, interaction, graph, or network layer.
- Typical representation: vertices plus links, with domain-specific meanings assigned to each.
- Representation target: make unlike empirical systems comparable before measuring topology.
- Empirical signature: systems are translated into graph form before degree, path, clustering, or component analysis.

## Uses in Science of Science

- Provides the common abstraction behind [science as multiscale network](science_as_multiscale_network.md).
- Connects [scholarly entity graphs](scholarly_entity_graphs.md), [citation networks](citation_networks.md), and [coauthorship networks](coauthorship_networks.md).
- Supplies the representation layer used by [scale-free degree distributions](../measures/scale_free_degree_distributions.md).
- Helps separate graph vocabulary from domain-specific interpretation.

## Operationalization

- Define what counts as a node in the focal system.
- Define which relations become edges and whether they are directed, weighted, temporal, or multilayer.
- Document whether multiple edge types are collapsed or kept separate.
- Only then compute graph measures and compare systems.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) frames diverse complex systems as networks of vertices and interactions.
- The paper uses this abstraction to compare movie actors, the World Wide Web, power grids, and citation networks.
- This shared representation supports the claim that topology can be studied across domains.

## Caveats

- Node and edge meanings differ sharply across systems.
- Collapsing interactions into one edge type can hide direction, strength, and mechanism.
- Cross-system comparison requires a separate semantics audit, not only the shared graph form.

## Links

- [science as multiscale network](science_as_multiscale_network.md)
- [scholarly entity graphs](scholarly_entity_graphs.md)
- [citation networks](citation_networks.md)
- [coauthorship networks](coauthorship_networks.md)
- [scale-free degree distributions](../measures/scale_free_degree_distributions.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; SciSciNet: W2008620264]

## Metadata

- Concept ID: `complex_system_node_edge_abstraction`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: node-edge complex-system representation; graph abstraction for complex systems; vertex-link system abstraction; cross-domain network abstraction
