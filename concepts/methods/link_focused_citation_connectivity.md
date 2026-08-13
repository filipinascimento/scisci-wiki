# Link-focused citation connectivity

## Summary

Link-focused citation connectivity is the method family that studies connective citation threads and edge traversal rather than treating papers as the primary units of centrality or clustering.

## Canonical Form

- Unit of analysis: citation edge, search path, connective thread, source-to-sink route, or directed citation network.
- Typical representation: edge-weighted path network, traversal-count matrix, selected link backbone, or priority-search path.
- Mechanism or measurement target: structural connectivity through sequences of links and nodes.
- Empirical signature: important edges are those that carry many developmental routes, even if the adjacent nodes are not simply the highest cited nodes.

## Uses in Science of Science

- Supplies the conceptual basis for [main path analysis](main_path_analysis.md) and traversal measures such as [search path link count](../measures/search_path_link_count.md).
- Complements paper-level citation counts, journal metrics, co-citation clustering, and bibliographic coupling.
- Has an explicit [link-node connectivity duality](link_node_connectivity_duality.md): high-traversal citation links can be interpreted as an edge-level counterpart to high-centrality papers.
- Helps reconstruct developmental strands in small or medium-size historical networks.
- Makes edge-level assumptions explicit in field-history and research-front studies.

## Operationalization

- Build a directed citation network or [milestone-event citation historiograph](../representations/milestone_event_citation_historiograph.md).
- Identify source nodes, terminal nodes, components, and cycles.
- Generate search paths or equivalent dynamic-programming traversal counts.
- Rank or select citation edges by their role in connecting upstream and downstream events.
- Use [priority-first main-path extraction](priority_first_main_path_extraction.md) when converting traversal counts into one selected main stream.
- Validate the resulting thread with convergence, content, and external-history checks.

## Evidence and Validations

- Verified full-text evidence from Hummon and Doreian (1989) contrasts their approach with clustering or scaling methods that focus on articles or partitions.
- They state that their method preserves connective threads through the network and focuses on links rather than nodes.
- The DNA case demonstrates how search paths and traversal counts can identify a mainstream of the literature based on structural connectivity.
- Hummon and Doreian state that traversal counts are analogous to geodesic-count centrality, but for links rather than nodes.

## Caveats

- Edge-focused analysis can underplay highly influential side branches that do not lie on the selected thread.
- Link weights depend on corpus boundaries, edge direction, and cycle handling.
- Search-path results should be checked against historical expertise and content evidence, not interpreted as automatic causal proof.

## Links

- [main path analysis](main_path_analysis.md)
- [search path link count](../measures/search_path_link_count.md)
- [link-node connectivity duality](link_node_connectivity_duality.md)
- [search path node pair count](../measures/search_path_node_pair_count.md)
- [node pair projection count](../measures/node_pair_projection_count.md)
- [priority-first main-path extraction](priority_first_main_path_extraction.md)
- [milestone-event citation historiograph](../representations/milestone_event_citation_historiograph.md)
- [citation networks](../representations/citation_networks.md)
- [citation historiograph accuracy audit](../validations/citation_historiograph_accuracy_audit.md)
- [clustering path complementarity](clustering_path_complementarity.md)

## References

- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; WoS: unknown]

## Metadata

- Concept ID: `link_focused_citation_connectivity`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hummon and Doreian (1989) (1989)
- Latest seen paper: Hummon and Doreian (1989) (1989)
- Primary reference DOI: `10.1016/0378-8733(89)90017-8`
- OpenAlex ID: `W2155046806`
- Dimensions ID: `pub.1012779197`
- SciSciNet ID: `W2155046806`
- Aliases: link connectivity analysis; connective-thread analysis; edge-focused citation analysis; citation link backbone
