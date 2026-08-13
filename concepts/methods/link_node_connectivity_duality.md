# Link-node connectivity duality

## Summary

Link-node connectivity duality is the method claim that edge traversal connectivity is the link-level counterpart to node centrality in citation-network histories.

## Canonical Form

- Unit of analysis: citation edge, node, search path, geodesic, traversal count, or directed citation network.
- Typical representation: edge traversal count compared with node centrality, link-connectivity score, or dual interpretation of paths and nodes.
- Method target: make links rather than papers the focal objects while retaining an analogy to familiar centrality measures.
- Empirical signature: edges that lie on many search paths are treated as connective backbones, analogous to nodes that lie on many shortest paths.

## Uses in Science of Science

- Extends [link-focused citation connectivity](link_focused_citation_connectivity.md) with an explicit relationship to node-centered network measures.
- Helps interpret [search path link count](../measures/search_path_link_count.md), [search path node pair count](../measures/search_path_node_pair_count.md), and [node pair projection count](../measures/node_pair_projection_count.md).
- Provides a bridge between [main path analysis](main_path_analysis.md) and centrality-based science maps.
- Useful when the substantive question is which citations carry developmental continuity, not only which papers are prominent.

## Operationalization

- Generate search paths or all source-to-sink paths through a directed citation network.
- Count how often each edge is traversed or how many node pairs it connects.
- Interpret high-traversal edges as link-level connectivity analogs to high-betweenness nodes.
- Compare edge-centered backbones with node-centered measures such as citation count, PageRank, or betweenness.
- Report whether the analysis uses all paths, shortest paths, priority paths, or component-restricted paths.

## Evidence and Validations

- Verified full-text evidence from Hummon and Doreian (1989) proposes link traversal counts as a new index of link connectivity based on search paths through a citation network.
- The paper develops three operationalizations: node-pair projection count, search path link count, and search path node-pair count.
- Hummon and Doreian explicitly state that these traversal counts are analogous to geodesic counts in Freeman's centrality measure, while their concern is link connectivity rather than node centrality.
- This motivates treating citation edges as first-class objects in historical network reconstruction.

## Caveats

- Edge-centered backbones can still depend heavily on node selection, component boundaries, and cycle handling.
- Link-node duality is an analogy; it does not make traversal counts equivalent to causal influence.
- Main paths derived from edge traversal should still be checked against content and historical evidence.

## Links

- [link-focused citation connectivity](link_focused_citation_connectivity.md)
- [main path analysis](main_path_analysis.md)
- [search path link count](../measures/search_path_link_count.md)
- [search path node pair count](../measures/search_path_node_pair_count.md)
- [node pair projection count](../measures/node_pair_projection_count.md)
- [citation networks](../representations/citation_networks.md)
- [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md)
- [citation PageRank](../measures/citation_pagerank.md)

## References

- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; WoS: unknown]

## Metadata

- Concept ID: `link_node_connectivity_duality`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hummon and Doreian (1989) (1989)
- Latest seen paper: Hummon and Doreian (1989) (1989)
- Primary reference DOI: `10.1016/0378-8733(89)90017-8`
- OpenAlex ID: `W2155046806`
- Dimensions ID: `pub.1012779197`
- SciSciNet ID: `W2155046806`
- Aliases: edge-node centrality duality; link connectivity centrality analogy; edge traversal centrality; citation link-node duality
