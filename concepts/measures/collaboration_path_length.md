# Collaboration path length

## Summary

Collaboration path length measures the shortest chain of coauthorship ties connecting two scientists in the same connected component of a coauthorship network.

## Canonical Form

- Unit of analysis: author pair, connected component, field, database, or time window.
- Typical representation: geodesic distance, mean vertex-vertex distance, average degrees of separation, or shortest-path distribution.
- Mechanism or measurement target: reachability, information diffusion, referral distance, and small-world social connectivity.
- Empirical signature: connected scientists are separated by a small number of coauthorship hops relative to the size of the scientific community.

## Uses in Science of Science

- Makes the path-length component of [small-world collaboration structure](../representations/small_world_collaboration_structure.md) explicit.
- Links [coauthorship networks](../representations/coauthorship_networks.md) to diffusion, information flow, job-market referrals, and invisible-college mechanisms.
- Complements [collaboration giant component](collaboration_giant_component.md), because path lengths are meaningful only among connected authors.
- Supports [focal collaboration distance profile](focal_collaboration_distance_profile.md) when the analytic target is one named scientist's reachability rather than a field-wide mean.
- Provides a social-network counterpart to citation-path measures such as [main path analysis](../methods/main_path_analysis.md) and [longest citation path distance](longest_citation_path_distance.md).

## Operationalization

- Build an author-disambiguated coauthorship network for a field and time window.
- Compute shortest paths between connected author pairs, typically within the largest component.
- Report mean distance, distance distribution, and sensitivity to database boundaries, author disambiguation, and large-team edges.
- Compare observed distances with random-graph, degree-preserving, or temporal null models.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) computes minimum distances between all connected pairs of scientists and reports typical distances of about six in large scientific collaboration networks.
- Newman (2001) compares observed distances with random-graph expectations and reports logarithmic growth of average distance with community size, supporting the small-world interpretation.
- That random-graph comparison is split out as [random-graph collaboration path benchmark](../validations/random_graph_collaboration_path_benchmark.md), while the communication implication is split out as [small-world scientific communication diffusion](../mechanisms/small_world_scientific_communication_diffusion.md).
- Verified full-text evidence from Newman (2004) defines network distance as the number of hops along coauthorship links and reports mean distances of 4.6, 5.9, and 7.6 for biology, physics, and mathematics respectively.
- Newman (2004) connects this measure to well-known ideas such as Erdos numbers and Doe numbers, making coauthorship distance an interpretable social-distance measure.

## Caveats

- Path length excludes disconnected author pairs unless a convention for infinity or component restriction is stated.
- Short paths in a coauthorship network do not prove active communication or acquaintance.
- Large-team papers can create short paths mechanically; weighted or filtered edge variants should be reported when relevant.

## Links

- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [coauthorship network diameter](coauthorship_network_diameter.md)
- [focal collaboration distance profile](focal_collaboration_distance_profile.md)
- [random-graph collaboration path benchmark](../validations/random_graph_collaboration_path_benchmark.md)
- [small-world scientific communication diffusion](../mechanisms/small_world_scientific_communication_diffusion.md)
- [collaboration giant component](collaboration_giant_component.md)
- [scientific brokerage centrality](scientific_brokerage_centrality.md)
- [collaborator-count distribution](collaborator_count_distribution.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [main path analysis](../methods/main_path_analysis.md)
- [longest citation path distance](longest_citation_path_distance.md)
- [invisible college](../mechanisms/invisible_college.md)

## References

- Newman, M. E. J. (2001). The structure of scientific collaboration networks. *Proceedings of the National Academy of Sciences*, 98(2), 404-409. https://doi.org/10.1073/pnas.98.2.404 [OpenAlex: W2125315567; Dimensions: pub.1018280471; WoS: unknown]
- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `collaboration_path_length`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.98.2.404`
- OpenAlex ID: `W2125315567`
- Dimensions ID: `pub.1018280471`
- SciSciNet ID: `W2125315567`
- Aliases: coauthorship path length; mean collaboration distance; degrees of separation in science; coauthor geodesic distance
