# Search path node pair count

## Summary

Search path node pair count weights citation edges by how many connected node pairs they help connect along all generated search paths.

## Canonical Form

- Unit of analysis: directed citation edge, connected node pair, search path, or bounded citation network.
- Typical representation: edge-weighted citation network where each edge receives an SPNP traversal count.
- Mechanism or measurement target: middle-of-path connective importance in a directed literature lineage.
- Empirical signature: edges in the interior of long developmental paths receive higher weights than comparable edges near starts or terminal nodes.

## Uses in Science of Science

- Provides a node-pair-aware traversal count for [main path analysis](../methods/main_path_analysis.md).
- Helps distinguish edges that merely occur on paths from edges that bridge many upstream-downstream node pairs.
- Complements [search path link count](search_path_link_count.md) and [node pair projection count](node_pair_projection_count.md) in path-based science maps.

## Operationalization

- Prepare a directed acyclic citation network and choose an origin or source set.
- Generate search paths through the network.
- For each path, identify the connected node pairs whose relationship is carried by each edge.
- Sum these node-pair contributions across paths to assign SPNP weights to edges.
- Use high-SPNP edges to extract a main path or compare against alternative traversal-count definitions.

## Evidence and Validations

- Verified full-text evidence from Hummon and Doreian (1989) defines the search path node pair method as a traversal-count measure over all search paths from a start node.
- The paper explains that an edge in the middle of a search path receives a higher count because it connects more node pairs than an edge at the beginning or end.
- In the DNA network, SPNP identifies link 22-27 as having the maximum traversal count and still produces the same main path as the other traversal-count methods.

## Caveats

- SPNP can privilege interior edges even when historically important initiating or terminal events are substantively central.
- Counts depend on start-node selection, path enumeration rules, and cycle handling.
- The measure should be interpreted as structural connectivity, not as direct evidence of credit or causal influence.

## Links

- [main path analysis](../methods/main_path_analysis.md)
- [search path link count](search_path_link_count.md)
- [node pair projection count](node_pair_projection_count.md)
- [longest citation path distance](longest_citation_path_distance.md)
- [citation DAG topological sort](../methods/citation_dag_topological_sort.md)
- [main path convergence validation](../validations/main_path_convergence_validation.md)
- [citation networks](../representations/citation_networks.md)

## References

- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; WoS: unknown]

## Metadata

- Concept ID: `search_path_node_pair_count`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Hummon and Doreian (1989) (1989)
- Latest seen paper: Hummon and Doreian (1989) (1989)
- Primary reference DOI: `10.1016/0378-8733(89)90017-8`
- OpenAlex ID: `W2155046806`
- Dimensions ID: `pub.1012779197`
- SciSciNet ID: `W2155046806`
- Aliases: SPNP; search path node-pair traversal count; node-pair search path count; interior-edge traversal count
