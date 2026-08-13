# Citation DAG topological sort

## Summary

Citation DAG topological sort orders papers, events, or discoveries in a directed citation network so dependency relations run forward through the ordering.

## Canonical Form

- Unit of analysis: directed citation network, event historiograph, paper set, or field-history corpus.
- Typical representation: ordered node list after cycle handling, often on a transposed cited-by dependency graph.
- Mechanism or measurement target: chronological and dependency structure in scientific development.
- Empirical signature: most citation networks are nearly acyclic, but reciprocal or same-year links require explicit handling before topological sorting.

## Uses in Science of Science

- Prepares bounded [citation networks](../representations/citation_networks.md) for [main path analysis](main_path_analysis.md) and path-based field histories.
- Makes the dependency order in a citation historiograph explicit before computing [longest citation path distance](../measures/longest_citation_path_distance.md) or search-path traversal counts.
- Helps separate source, intermediate, terminal, and disconnected components in a research specialty.
- Depends on prior [citation historiograph accuracy audit](../validations/citation_historiograph_accuracy_audit.md) when event grouping or cycle removal is historically interpretive.

## Operationalization

- Construct a directed citation graph for a bounded topic, field, or historical corpus.
- Identify weakly connected components and strongly connected cycles.
- Resolve cycles by deleting a substantively justified edge, collapsing reciprocal events, or otherwise documenting a cycle-handling rule.
- Transpose the graph to cited-by direction when the intended interpretation is influence or dependency through time.
- Use [citation component root selection](citation_component_root_selection.md) before interpreting source nodes, terminal nodes, and unreachable path exceptions.
- Run a topological sort and report non-uniqueness where multiple dependency-consistent orders are possible.

## Evidence and Validations

- Verified full-text evidence from Hummon and Doreian (1989) treats citation networks as nearly directed acyclic graphs and notes that the DNA network had a single two-cycle.
- They remove one reciprocal link to transform the network into a DAG, transpose the graph to cited-by relations so links move forward through time, and then use depth-first search to generate a topological sort.
- The authors interpret the sorted order as a dependency structure for the core of the DNA research network, while noting that alternative dependency-consistent orders are possible.

## Caveats

- Cycle removal or node collapsing is a modeling decision, not a neutral preprocessing step.
- A topological sort can give many valid orders; it should not be overread as a unique historical chronology.
- Citation absence does not prove lack of dependence, and citation presence does not prove positive intellectual influence.

## Links

- [main path analysis](main_path_analysis.md)
- [citation networks](../representations/citation_networks.md)
- [milestone-event citation historiograph](../representations/milestone_event_citation_historiograph.md)
- [citation historiograph accuracy audit](../validations/citation_historiograph_accuracy_audit.md)
- [citation component root selection](citation_component_root_selection.md)
- [longest citation path distance](../measures/longest_citation_path_distance.md)
- [search path link count](../measures/search_path_link_count.md)
- [search path node pair count](../measures/search_path_node_pair_count.md)
- [node pair projection count](../measures/node_pair_projection_count.md)
- [main path convergence validation](../validations/main_path_convergence_validation.md)
- [research fronts](../mechanisms/research_fronts.md)

## References

- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; WoS: unknown]

## Metadata

- Concept ID: `citation_dag_topological_sort`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hummon and Doreian (1989) (1989)
- Latest seen paper: Hummon and Doreian (1989) (1989)
- Primary reference DOI: `10.1016/0378-8733(89)90017-8`
- OpenAlex ID: `W2155046806`
- Dimensions ID: `pub.1012779197`
- SciSciNet ID: `W2155046806`
- Aliases: topological citation sort; citation DAG ordering; dependency sort; cited-by dependency ordering
