# Milestone-event citation historiograph

## Summary

Milestone-event citation historiograph represents a field history as directed citation ties among curated milestone events rather than only among individual papers.

## Canonical Form

- Unit of analysis: scientific event, discovery, milestone paper group, citation tie, or field-history network.
- Typical representation: directed event graph, time-ordered citation historiograph, or event-level dependency network.
- Mechanism or measurement target: how later scientific achievements depend on earlier discoveries and productions.
- Empirical signature: curated historical events can be connected by citations and analyzed as a bounded developmental network.

## Uses in Science of Science

- Provides an event-level substrate for [main path analysis](../methods/main_path_analysis.md) and [citation DAG topological sort](../methods/citation_dag_topological_sort.md).
- Lets historians and bibliometricians combine narrative histories with citation evidence.
- Supports field-development studies where multiple publications belong to one discovery event.
- Makes small, expert-curated networks available for validation of larger automated citation-network methods.

## Operationalization

- Select a historical account, expert chronology, or curated discovery list.
- Group specific research productions into milestone events when appropriate.
- Encode citation or dependency links among milestone events.
- Preserve whether links are direct, strong indirect, weak indirect, or collapsed into one edge type.
- Assign subject-area codes, dates, or event labels that support interpretation.
- Apply [citation historiograph accuracy audit](../validations/citation_historiograph_accuracy_audit.md) before path analysis.
- Preserve component, terminal-event, and off-path breakthrough annotations when they affect interpretation.

## Evidence and Validations

- Verified full-text evidence from Hummon and Doreian (1989) analyzes a DNA citation network built from forty milestone events between 1820 and 1962.
- The paper describes these events as grouped research productions derived from an historical account and a citation-based historiograph.
- Hummon and Doreian note that the historiograph contains direct links and less direct links, but their analysis collapses direct and indirect citations.
- The event graph enables later steps: weak-component analysis, cycle handling, topological sorting, longest-path distances, traversal counts, and main-path extraction.
- Hummon and Doreian's full text now also supports split-out motifs for component-root selection, terminal capstone/dead-end labels, and off-main-path breakthrough caveats.

## Caveats

- Event grouping can hide disagreement about priority, parallel discoveries, and multi-paper contributions.
- Milestone selection is historically interpretive and may privilege well-known discoveries.
- Event-level citations can mix direct citations, indirect links, and narrative dependencies unless the coding scheme is explicit.

## Links

- [citation networks](citation_networks.md)
- [main path analysis](../methods/main_path_analysis.md)
- [citation DAG topological sort](../methods/citation_dag_topological_sort.md)
- [citation historiograph accuracy audit](../validations/citation_historiograph_accuracy_audit.md)
- [direct/indirect citation-tie collapse](../validations/direct_indirect_citation_tie_collapse.md)
- [link-focused citation connectivity](../methods/link_focused_citation_connectivity.md)
- [citation component root selection](../methods/citation_component_root_selection.md)
- [terminal-event capstone/dead-end distinction](terminal_event_capstone_deadend_distinction.md)
- [off-main-path breakthrough caveat](../validations/off_main_path_breakthrough_caveat.md)
- [research fronts](../mechanisms/research_fronts.md)
- [science maps](science_maps.md)

## References

- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; WoS: unknown]

## Metadata

- Concept ID: `milestone_event_citation_historiograph`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Hummon and Doreian (1989) (1989)
- Latest seen paper: Hummon and Doreian (1989) (1989)
- Primary reference DOI: `10.1016/0378-8733(89)90017-8`
- OpenAlex ID: `W2155046806`
- Dimensions ID: `pub.1012779197`
- SciSciNet ID: `W2155046806`
- Aliases: milestone historiograph; event-level citation network; citation-based historiograph; discovery event citation graph
