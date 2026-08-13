# Node pair projection count

## Summary

Node pair projection count weights citation edges by projecting all directed node-pair subgraphs onto a common edge matrix and counting how often each edge participates.

## Canonical Form

- Unit of analysis: directed citation edge, connected node pair, subgraph, or bounded citation network.
- Typical representation: projected edge-count matrix over the original citation graph.
- Mechanism or measurement target: edge connectivity across the collection of reachable node-pair subgraphs.
- Empirical signature: edges that participate in many pair-connecting subgraphs receive high NPPC weights.

## Uses in Science of Science

- Supplies one of the traversal-count variants used in [main path analysis](../methods/main_path_analysis.md).
- Represents a pairwise subgraph projection alternative to path-enumeration counts such as [search path link count](search_path_link_count.md) and [search path node pair count](search_path_node_pair_count.md).
- Helps identify citation edges that are structurally important because many directed node-pair dependencies run through them.

## Operationalization

- Identify reachable directed node pairs in the bounded citation network.
- For each reachable pair, extract the subgraph connecting that pair.
- Construct adjacency matrices for these pair-connecting subgraphs.
- Stack or project the matrices onto the original edge set.
- Use projected edge frequencies as NPPC traversal counts.

## Evidence and Validations

- Verified full-text evidence from Hummon and Doreian (1989) defines node pair projection count as projecting the links connecting all directed node pairs onto a base matrix.
- In their simple example, they construct subgraphs for reachable node pairs, stack the corresponding adjacency matrices, and count how often each link is involved in connecting node pairs.
- In the DNA network, NPPC identifies link 27-32 as one of the maximum-traversal edges and converges with the other measures on the same main path.

## Caveats

- NPPC requires decisions about which node pairs count as reachable and how pair-connecting subgraphs are extracted.
- Projection can hide the ordering and multiplicity of individual search paths.
- Like other traversal counts, NPPC is sensitive to corpus boundaries and edge direction.

## Links

- [main path analysis](../methods/main_path_analysis.md)
- [search path link count](search_path_link_count.md)
- [search path node pair count](search_path_node_pair_count.md)
- [longest citation path distance](longest_citation_path_distance.md)
- [citation DAG topological sort](../methods/citation_dag_topological_sort.md)
- [main path convergence validation](../validations/main_path_convergence_validation.md)
- [citation networks](../representations/citation_networks.md)

## References

- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; WoS: unknown]

## Metadata

- Concept ID: `node_pair_projection_count`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Hummon and Doreian (1989) (1989)
- Latest seen paper: Hummon and Doreian (1989) (1989)
- Primary reference DOI: `10.1016/0378-8733(89)90017-8`
- OpenAlex ID: `W2155046806`
- Dimensions ID: `pub.1012779197`
- SciSciNet ID: `W2155046806`
- Aliases: NPPC; node-pair projection traversal count; projected node-pair edge count; pair-subgraph projection count
