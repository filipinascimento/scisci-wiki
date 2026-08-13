# Longest citation path distance

## Summary

Longest citation path distance measures the maximum directed path length between connected node pairs in a citation network.

## Canonical Form

- Unit of analysis: node pair, source node, directed citation network, or field-history corpus.
- Typical representation: maximum path length, detour distance, longest-path vector, or node distance from a root event.
- Mechanism or measurement target: depth of dependency chains and developmental distance through a research lineage.
- Empirical signature: nodes along a developmental backbone often appear at increasing longest-path distances from a root event.

## Uses in Science of Science

- Complements [main path analysis](../methods/main_path_analysis.md) by measuring path depth before selecting a single high-traversal route.
- Helps compare path-based maps with [citation DAG topological sort](../methods/citation_dag_topological_sort.md).
- Can be used to describe developmental depth in [research fronts](../mechanisms/research_fronts.md), field histories, and directed [citation networks](../representations/citation_networks.md).

## Operationalization

- Prepare a directed acyclic citation graph or document cycle-handling rules.
- Pick a source node, root event, or all directed node pairs.
- Enumerate possible search paths or use a DAG dynamic-programming equivalent.
- Record the maximum number of directed links for each reachable node pair.
- Compare the resulting distance vector with topological order, main path membership, or external historical accounts.

## Evidence and Validations

- Verified full-text evidence from Hummon and Doreian (1989) computes maximum path distance in the DNA citation network with an exhaustive search variant of depth-first search.
- They report that the maximum path distance in the DNA network is ten links and compare the longest-path vector with the topological sort order.
- The paper finds close agreement between longest-path distances and the dependency ordering, making longest-path distance a supporting diagnostic for path-based citation histories.

## Caveats

- Longest paths can be sensitive to corpus boundaries, indirect citation chains, and cycle handling.
- Maximum distance emphasizes depth, not necessarily influence, attention, or importance.
- In dense or noisy citation networks, the longest path may reflect incidental chains unless validated against domain knowledge.

## Links

- [main path analysis](../methods/main_path_analysis.md)
- [citation DAG topological sort](../methods/citation_dag_topological_sort.md)
- [citation networks](../representations/citation_networks.md)
- [search path link count](search_path_link_count.md)
- [search path node pair count](search_path_node_pair_count.md)
- [node pair projection count](node_pair_projection_count.md)
- [main path convergence validation](../validations/main_path_convergence_validation.md)
- [collaboration path length](collaboration_path_length.md)

## References

- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; WoS: unknown]

## Metadata

- Concept ID: `longest_citation_path_distance`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Hummon and Doreian (1989) (1989)
- Latest seen paper: Hummon and Doreian (1989) (1989)
- Primary reference DOI: `10.1016/0378-8733(89)90017-8`
- OpenAlex ID: `W2155046806`
- Dimensions ID: `pub.1012779197`
- SciSciNet ID: `W2155046806`
- Aliases: citation detour distance; maximum citation path; longest path vector; root-to-node citation depth
