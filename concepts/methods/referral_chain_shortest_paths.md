# Referral-chain shortest paths

## Summary

Referral-chain shortest paths use the shortest coauthorship path between two scientists as a possible introduction route or social-navigation chain through a collaboration network.

## Canonical Form

- Unit of analysis: source scientist, target scientist, coauthorship path, collaborator chain, or connected component.
- Typical representation: shortest path, set of tied shortest paths, breadth-first search output, or referral chain.
- Method target: using coauthorship topology to identify plausible social routes between researchers.
- Empirical signature: two scientists are connected by one or more short paths through intermediate collaborators.

## Uses in Science of Science

- Converts [collaboration path length](../measures/collaboration_path_length.md) from a summary statistic into a navigational method.
- Supports [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md), because brokers appear on many referral-chain paths.
- Uses [focal collaboration distance profile](../measures/focal_collaboration_distance_profile.md) when the target is one scientist's reachable neighborhood rather than a pairwise route.
- Provides an applied interpretation of [small-world collaboration structure](../representations/small_world_collaboration_structure.md).
- Helps connect coauthorship networks to search, introductions, recruitment, and knowledge diffusion.

## Operationalization

- Build an author-disambiguated coauthorship graph.
- Restrict to the relevant connected component or report when no path exists.
- Use breadth-first search or another shortest-path algorithm to find one or all shortest paths between two scientists.
- Report path length, intermediate authors, tie weights, field overlap, and whether multiple equally short paths exist.
- Treat the resulting chain as a hypothesis about social reachability, not proof of communication.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) defines network distance as the number of hops along coauthorship links needed to move from one scientist to another.
- The paper states that it is straightforward to create a computer algorithm using breadth-first search to find shortest paths between particular scientists.
- Newman notes that such algorithms could provide referral chains, or links of acquaintances that help individuals establish contact with other scientists.
- The paper illustrates multiple shortest paths of equal length between Newman and Barabasi in the physics coauthorship network.

## Caveats

- A coauthorship path is only a proxy for acquaintance or willingness to make an introduction.
- Shortest paths may be stale, weak, or created by large-team papers.
- Multiple equally short paths can exist, and weighted paths may be more meaningful than unweighted paths.
- Author-disambiguation errors can create false chains or hide real ones.

## Links

- [collaboration path length](../measures/collaboration_path_length.md)
- [focal collaboration distance profile](../measures/focal_collaboration_distance_profile.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)
- [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md)
- [shortest-path funneling effect](../measures/shortest_path_funneling_effect.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [author name disambiguation](author_name_disambiguation.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `referral_chain_shortest_paths`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: coauthorship referral chains; shortest collaboration path search; collaborator introduction chain; coauthor path navigation
