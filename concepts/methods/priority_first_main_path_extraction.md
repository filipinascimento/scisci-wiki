# Priority-first main-path extraction

## Summary

Priority-first main-path extraction selects a developmental path through a citation network by repeatedly following the outgoing edge with the highest traversal-count priority.

## Canonical Form

- Unit of analysis: source node, directed citation edge, traversal count, search path, or citation-network backbone.
- Typical representation: greedy edge sequence over a traversal-weighted directed network.
- Method target: convert edge traversal scores into a single interpretable main stream of literature.
- Empirical signature: the selected path follows high-traversal edges and can be compared across traversal-count definitions.

## Uses in Science of Science

- Makes the extraction rule inside [main path analysis](main_path_analysis.md) explicit.
- Turns [search path link count](../measures/search_path_link_count.md), [search path node pair count](../measures/search_path_node_pair_count.md), or [node pair projection count](../measures/node_pair_projection_count.md) into a concrete path.
- Clarifies how path selection differs from node ranking, clustering, and recursive prestige measures.
- Supports reproducible implementations where tie-breaking, start-node choice, and terminal-node handling must be documented.

## Operationalization

- Build a directed citation graph and perform any required cycle handling.
- Compute edge traversal counts using a stated search-path measure.
- Choose a start node or source-node set.
- At each current node, select the outgoing edge with the highest traversal count, apply a documented tie rule if needed, and continue until a terminal node is reached.
- Repeat under alternative traversal-count measures or start nodes and compare with [main path convergence validation](../validations/main_path_convergence_validation.md).

## Evidence and Validations

- Verified full-text evidence from Hummon and Doreian (1989) describes main-path extraction as choosing, at each node, the outgoing link with the highest traversal count.
- The paper identifies this link-selection rule as a priority-first search algorithm where priority is set by traversal counts.
- In the DNA citation network, applying this rule after three traversal-count variants yields the same main path through major DNA-theory events.

## Caveats

- A greedy highest-edge rule can suppress meaningful branches, especially when several routes have similar traversal weights.
- Results depend on start node, edge direction, cycle handling, and the traversal-count definition.
- Tie-breaking and terminal-node conventions should be preserved for reproducibility.

## Links

- [main path analysis](main_path_analysis.md)
- [link-focused citation connectivity](link_focused_citation_connectivity.md)
- [search path link count](../measures/search_path_link_count.md)
- [search path node pair count](../measures/search_path_node_pair_count.md)
- [node pair projection count](../measures/node_pair_projection_count.md)
- [citation DAG topological sort](citation_dag_topological_sort.md)
- [main path convergence validation](../validations/main_path_convergence_validation.md)
- [off-main-path breakthrough caveat](../validations/off_main_path_breakthrough_caveat.md)

## References

- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; WoS: unknown]

## Metadata

- Concept ID: `priority_first_main_path_extraction`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hummon and Doreian (1989) (1989)
- Latest seen paper: Hummon and Doreian (1989) (1989)
- Primary reference DOI: `10.1016/0378-8733(89)90017-8`
- OpenAlex ID: `W2155046806`
- Dimensions ID: `pub.1012779197`
- SciSciNet ID: `W2155046806`
- Aliases: traversal-priority path extraction; priority-first search path; greedy main-path extraction; highest-traversal edge path
