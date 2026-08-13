# Collaboration distance census BFS

## Summary

Collaboration distance census BFS is an all-pairs breadth-first-search workflow for estimating mean collaboration distance, diameter, and cohesion within connected coauthorship components.

## Canonical Form

- Unit of analysis: coauthorship graph, connected author pair, path length, component, or field panel.
- Typical representation: breadth-first search distance census, burning algorithm, or all-pairs finite-distance summary.
- Method target: measure how many coauthorship hops separate scientists in a connected collaboration network.
- Empirical signature: mean distances are small relative to network size, supporting small-world collaboration claims.

## Uses in Science of Science

- Operationalizes [collaboration path length](../measures/collaboration_path_length.md).
- Supports [coauthorship network diameter](../measures/coauthorship_network_diameter.md).
- Provides evidence for [small-world collaboration structure](../representations/small_world_collaboration_structure.md).
- Requires [connected-pairs-only distance censoring](../validations/connected_pairs_only_distance_censoring.md).

## Operationalization

- Build a coauthorship graph and identify connected components.
- Run breadth-first search from each focal node or sampled nodes.
- Compute mean finite distances and largest finite distance.
- Report the connected-pair denominator and component membership alongside distance summaries.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) reports mean and largest collaboration distances for biology, physics, and mathematics networks.
- The paper defines network distance as the number of hops along coauthorship links.
- It states that distances were calculated with a breadth-first search or burning algorithm, yielding small mean distances compared with network size.

## Caveats

- All-pairs BFS can be computationally expensive for large networks.
- Results are sensitive to disconnected components, author disambiguation, and large-team edges.
- Short paths need not imply topical or social closeness.

## Links

- [collaboration path length](../measures/collaboration_path_length.md)
- [coauthorship network diameter](../measures/coauthorship_network_diameter.md)
- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)
- [connected-pairs-only distance censoring](../validations/connected_pairs_only_distance_censoring.md)
- [nonunique shortest-path multiplicity](../validations/nonunique_shortest_path_multiplicity.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; SciSciNet: W2097777089; WoS: unknown]

## Metadata

- Concept ID: `collaboration_distance_census_bfs`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: coauthorship BFS distance census; burning algorithm collaboration distance; all-pairs collaboration path census
