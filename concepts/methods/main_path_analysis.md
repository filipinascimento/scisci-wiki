# Main path analysis

## Summary

Main path analysis extracts high-connectivity search paths through a directed citation network to identify a historical or developmental backbone of a research area.

## Canonical Form

- Unit of analysis: citation edge, search path, paper, event, or directed acyclic citation network.
- Typical representation: traversal counts on edges, selected main path, key-route path, or path-weighted subnetwork.
- Mechanism or measurement target: structural connectivity through a lineage of papers or events.
- Empirical signature: a small set of papers and edges carry many source-to-sink traversal paths and form a plausible intellectual development sequence.

## Uses in Science of Science

- Traces the development of theories, methods, fields, and research fronts.
- Complements clustering approaches by emphasizing sequential connectivity rather than only local similarity.
- Provides a historical backbone for [citation networks](../representations/citation_networks.md), [research fronts](../mechanisms/research_fronts.md), and [science maps](../representations/science_maps.md).
- Splits into adjacent motifs for [link-focused citation connectivity](link_focused_citation_connectivity.md), [clustering path complementarity](clustering_path_complementarity.md), and validation through [citation historiograph accuracy audit](../validations/citation_historiograph_accuracy_audit.md).
- A further Hummon and Doreian pass separates [citation face-value validity boundary](../validations/citation_face_value_validity_boundary.md), [citation node-metric structure boundary](citation_node_metric_structure_boundary.md), [citation network visual scaling limit](../validations/citation_network_visual_scaling_limit.md), [expert-curated historiograph coding precondition](../validations/expert_curated_historiograph_coding_precondition.md), [single-link clustering stringiness caveat](../validations/single_link_clustering_stringiness_caveat.md), and [structural equivalence citation-relation mapping](../representations/structural_equivalence_citation_relation_mapping.md).

## Operationalization

- Construct a directed citation network for a bounded topic or historical corpus.
- Convert cycles if needed so traversal algorithms operate on a directed acyclic graph.
- Use [citation DAG topological sort](citation_dag_topological_sort.md) or an equivalent cycle-handling step when the graph is not already acyclic.
- Compute traversal counts such as [search path link count](../measures/search_path_link_count.md), [search path node pair count](../measures/search_path_node_pair_count.md), or [node pair projection count](../measures/node_pair_projection_count.md).
- Select the path with [priority-first main-path extraction](priority_first_main_path_extraction.md), or use key-route variants to retain multiple important routes.
- Validate the extracted backbone with [main path convergence validation](../validations/main_path_convergence_validation.md) or independent historical evidence.

## Evidence and Validations

- Verified full-text evidence from Hummon and Doreian (1989) develops methods for analyzing connectivity in directed networks using depth-first search and exhaustive search.
- The paper applies the method to a citation network of DNA theory and identifies papers that played central roles through structural connectivity, not only citation count.
- Hummon and Doreian introduce traversal-count ideas over search paths and use them to define the main path through a citation network.
- The full text reports three traversal-count variants and shows that, in the DNA network, the resulting main path converges on a coherent historical stream.
- The same paper supports split-out operational motifs for topological citation sorting, longest path distance, SPLC, SPNP, NPPC, and all-start-node convergence checks.
- Additional Hummon and Doreian full-text evidence supports split-out motifs for milestone-event historiographs, link-focused connectivity, content-core validation, external nodal-weight corroboration, and cluster/path complementarity.
- A later split makes explicit the component-root selection step, the priority-first extraction rule, regular-equivalence generation clustering, terminal-event interpretation, and off-main-path breakthrough caveats.
- A further residual pass adds citation-edge construct-validity caveats, node-score versus structure framing, visual scaling limits, expert coding prerequisites, single-link clustering stringiness, and structural-equivalence mappings for co-citation and bibliographic coupling.

## Caveats

- Main paths depend on corpus boundaries, edge direction, cycle handling, and start/end node definitions.
- A single path can over-linearize scientific development; key-route or multi-path variants may better represent branching histories.
- Structural centrality should be checked against expert historical reading.
- Visual readability, citation-edge meaning, and expert curation are separate validation layers from traversal-count computation.

## Links

- [citation networks](../representations/citation_networks.md)
- [milestone-event citation historiograph](../representations/milestone_event_citation_historiograph.md)
- [link-focused citation connectivity](link_focused_citation_connectivity.md)
- [clustering path complementarity](clustering_path_complementarity.md)
- [citation component root selection](citation_component_root_selection.md)
- [priority-first main-path extraction](priority_first_main_path_extraction.md)
- [regular equivalence intellectual generations](regular_equivalence_intellectual_generations.md)
- [terminal-event capstone/dead-end distinction](../representations/terminal_event_capstone_deadend_distinction.md)
- [off-main-path breakthrough caveat](../validations/off_main_path_breakthrough_caveat.md)
- [citation face-value validity boundary](../validations/citation_face_value_validity_boundary.md)
- [citation node-metric structure boundary](citation_node_metric_structure_boundary.md)
- [citation network visual scaling limit](../validations/citation_network_visual_scaling_limit.md)
- [expert-curated historiograph coding precondition](../validations/expert_curated_historiograph_coding_precondition.md)
- [single-link clustering stringiness caveat](../validations/single_link_clustering_stringiness_caveat.md)
- [structural equivalence citation-relation mapping](../representations/structural_equivalence_citation_relation_mapping.md)
- [citation historiograph accuracy audit](../validations/citation_historiograph_accuracy_audit.md)
- [citation DAG topological sort](citation_dag_topological_sort.md)
- [longest citation path distance](../measures/longest_citation_path_distance.md)
- [search path link count](../measures/search_path_link_count.md)
- [search path node pair count](../measures/search_path_node_pair_count.md)
- [node pair projection count](../measures/node_pair_projection_count.md)
- [main path convergence validation](../validations/main_path_convergence_validation.md)
- [Q-analysis content-core validation](../validations/q_analysis_content_core_validation.md)
- [external nodal-weight main-path corroboration](../validations/external_nodal_weight_main_path_corroboration.md)
- [research fronts](../mechanisms/research_fronts.md)
- [science maps](../representations/science_maps.md)
- [co citation](../representations/co_citation.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [field emergence and specialty formation](../mechanisms/field_emergence.md)

## References

- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; WoS: unknown]

## Metadata

- Concept ID: `main_path_analysis`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hummon and Doreian (1989) (1989)
- Latest seen paper: Hummon and Doreian (1989) (1989)
- Primary reference DOI: `10.1016/0378-8733(89)90017-8`
- OpenAlex ID: `W2155046806`
- Aliases: main path; search path traversal; key-route analysis; citation backbone
