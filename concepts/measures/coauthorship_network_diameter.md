# Coauthorship network diameter

## Summary

Coauthorship network diameter is the largest shortest-path distance between connected scientists in a coauthorship network or its largest component.

## Canonical Form

- Unit of analysis: coauthorship graph, connected component, field, database, or time window.
- Typical representation: maximum geodesic distance, largest distance, graph diameter, or upper bound on connected author separation.
- Mechanism or measurement target: worst-case reachability and field-level connectedness.
- Empirical signature: even the longest finite paths in large collaboration networks are small relative to the number of scientists in the network.

## Uses in Science of Science

- Complements [collaboration path length](collaboration_path_length.md) by measuring the tail of connected-pair distances rather than the mean.
- Helps characterize [small-world collaboration structure](../representations/small_world_collaboration_structure.md) and the reachability of a scientific community.
- Provides a compact indicator of whether a [collaboration giant component](collaboration_giant_component.md) is not only large but also navigable.
- Can be compared across fields, databases, and time windows to detect fragmentation or integration.

## Operationalization

- Define the component over which diameter is measured, usually the largest connected component.
- Compute shortest paths between connected pairs and take the maximum finite path length.
- Report whether isolates and disconnected components are excluded, assigned infinity, or summarized separately.
- Check robustness to author disambiguation, large-team edge construction, time-window length, and edge weighting.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) reports maximum separation figures for scientific collaboration networks and identifies this maximum finite distance as the network diameter.
- Newman (2001) finds that the diameter is on the order of about 20 in the studied networks, excluding disconnected pairs outside the giant component.
- Verified full-text evidence from Newman (2004) reports largest distances of 24, 20, and 27 in biology, physics, and mathematics coauthorship networks.
- Newman (2004) notes that the largest distance, or diameter, is occasionally of interest alongside mean distance and Erdos-number style distances.

## Caveats

- Diameter is extremely sensitive to data errors, isolated bridges, and peripheral nodes.
- Reporting diameter without component-size context can be misleading.
- Large-team papers can shorten diameter by adding many coauthorship edges at once.

## Links

- [collaboration path length](collaboration_path_length.md)
- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [collaboration giant component](collaboration_giant_component.md)
- [scientific brokerage centrality](scientific_brokerage_centrality.md)
- [collaborator-count distribution](collaborator_count_distribution.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

## References

- Newman, M. E. J. (2001). The structure of scientific collaboration networks. *Proceedings of the National Academy of Sciences*, 98(2), 404-409. https://doi.org/10.1073/pnas.98.2.404 [OpenAlex: W2125315567; Dimensions: pub.1018280471; WoS: unknown]
- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `coauthorship_network_diameter`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.98.2.404`
- OpenAlex ID: `W2125315567`
- Dimensions ID: `pub.1018280471`
- SciSciNet ID: `W2125315567`
- Aliases: collaboration diameter; largest coauthorship distance; maximum collaboration distance; network diameter in science
