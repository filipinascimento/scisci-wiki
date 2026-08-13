# Regular equivalence intellectual generations

## Summary

Regular equivalence intellectual generations use regular-equivalence clustering in a citation network to group events that occupy similar generational positions in a field's development.

## Canonical Form

- Unit of analysis: citation-network node, milestone event, generation cluster, source event, terminal event, or field-history map.
- Typical representation: regular-equivalence dendrogram, generation cluster labels, or cluster/path comparison.
- Method target: partition a citation history into source, intermediate, last-before-terminal, and terminal generations.
- Empirical signature: nodes at similar dependency positions cluster together even when they are distant in calendar time.

## Uses in Science of Science

- Adds the generation-clustering side of [clustering path complementarity](clustering_path_complementarity.md).
- Complements [main path analysis](main_path_analysis.md), which preserves connective strands rather than collapsing nodes into equivalent positions.
- Helps distinguish first-generation inputs, middle developments, capstones, and dead ends in a historical citation network.
- Provides an alternative to co-citation or bibliographic-coupling clusters when the graph is directed, nearly acyclic, and historically ordered.

## Operationalization

- Build a directed citation or cited-by dependency network.
- Resolve cycles or document them before applying equivalence analysis.
- Cluster nodes by regular equivalence, where nodes are similar if they connect in similar ways to equivalent nodes.
- Interpret clusters as intellectual generations only after checking dates, content, and path positions.
- Compare generation clusters with main paths, longest-path distances, and expert historical reading.

## Evidence and Validations

- Verified full-text evidence from Hummon and Doreian (1989) argues that regular equivalence is relevant for a nearly acyclic citation network with multiple start points.
- In the DNA network, their regular-equivalence dendrogram identifies first-generation events that bring new information, terminal events, and a last-before-terminal generation.
- The paper notes that regular equivalence can ignore calendar time, grouping Wilkins' 1953 X-ray diffraction work with Miescher's 1869 event because both occupy similar structural roles.
- The authors use this result to show that equivalence clustering identifies intellectual generations, while main-path analysis preserves developmental paths.

## Caveats

- Regular equivalence can group historically distant events, so generation labels require interpretation.
- Clustering collapses paths and may hide the connective sequence that path analysis was designed to preserve.
- Terminal clusters can mix dead ends and capstones unless outcomes after the observation window are inspected.

## Links

- [clustering path complementarity](clustering_path_complementarity.md)
- [main path analysis](main_path_analysis.md)
- [citation DAG topological sort](citation_dag_topological_sort.md)
- [milestone-event citation historiograph](../representations/milestone_event_citation_historiograph.md)
- [terminal-event capstone/dead-end distinction](../representations/terminal_event_capstone_deadend_distinction.md)
- [off-main-path breakthrough caveat](../validations/off_main_path_breakthrough_caveat.md)
- [co citation](../representations/co_citation.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)

## References

- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; WoS: unknown]

## Metadata

- Concept ID: `regular_equivalence_intellectual_generations`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hummon and Doreian (1989) (1989)
- Latest seen paper: Hummon and Doreian (1989) (1989)
- Primary reference DOI: `10.1016/0378-8733(89)90017-8`
- OpenAlex ID: `W2155046806`
- Dimensions ID: `pub.1012779197`
- SciSciNet ID: `W2155046806`
- Aliases: intellectual generation clustering; citation regular equivalence; generation-equivalence clusters; dependency-generation clustering
