# Citation component root selection

## Summary

Citation component root selection identifies the weakly connected component and source event from which a path-based citation-history analysis should start.

## Canonical Form

- Unit of analysis: citation network, weakly connected component, root node, source event, terminal node, or historical corpus.
- Typical representation: component inventory plus a justified root node for path, sort, or traversal analysis.
- Method target: keep main-path extraction focused on the connected historical stream rather than isolated fragments or unreachable terminal branches.
- Empirical signature: one component contains the substantive root and most later relevant events, while small components or terminal branches explain exceptions.

## Uses in Science of Science

- Provides a preprocessing and interpretation layer for [main path analysis](main_path_analysis.md).
- Supports [main path convergence validation](../validations/main_path_convergence_validation.md) by explaining why some start nodes cannot merge with the focal path.
- Helps distinguish disconnected corpus fragments from alternative substantive lineages.
- Adds a historical-corpus analogue to connected-component checks in larger collaboration or direct-citation classification systems.

## Operationalization

- Symmetrize the directed citation graph when computing weakly connected components.
- List component sizes, source nodes, terminal nodes, and whether each component is substantively part of the target history.
- Select a root node in the main component based on historical evidence, dependency direction, and reachability.
- Report paths that start outside the main component or cannot reach the root-defined backbone as exceptions rather than failures.
- Preserve the component and root-selection decision in downstream path-analysis metadata.

## Evidence and Validations

- Verified full-text evidence from Hummon and Doreian (1989) begins by checking weakly connected subgraphs in the DNA citation network.
- The paper finds four weakly connected subgraphs and identifies the main root as Miescher's nucleic-acid event, while the other subgraphs are small.
- Later all-start-node validation shows that exceptions to main-path convergence are explained by disconnected subgraphs or nodes that cannot reach the main path.

## Caveats

- Root selection is historically interpretive; an early source node is not always the only meaningful start.
- Small components may represent real parallel histories, not only noise.
- Symmetrizing for weak components helps find fragments but loses citation direction, so the directed graph must be restored before path analysis.

## Links

- [main path analysis](main_path_analysis.md)
- [main path convergence validation](../validations/main_path_convergence_validation.md)
- [citation DAG topological sort](citation_dag_topological_sort.md)
- [citation historiograph accuracy audit](../validations/citation_historiograph_accuracy_audit.md)
- [milestone-event citation historiograph](../representations/milestone_event_citation_historiograph.md)
- [pure citation-network disconnected residual](../validations/pure_citation_network_disconnected_residual.md)
- [sparse direct-citation exclusion](../validations/sparse_direct_citation_exclusion.md)

## References

- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; WoS: unknown]

## Metadata

- Concept ID: `citation_component_root_selection`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hummon and Doreian (1989) (1989)
- Latest seen paper: Hummon and Doreian (1989) (1989)
- Primary reference DOI: `10.1016/0378-8733(89)90017-8`
- OpenAlex ID: `W2155046806`
- Dimensions ID: `pub.1012779197`
- SciSciNet ID: `W2155046806`
- Aliases: weak-component root selection; main-path root choice; citation component inventory; historical root-node selection
