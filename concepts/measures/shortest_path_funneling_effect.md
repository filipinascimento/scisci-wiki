# Shortest-path funneling effect

## Summary

Shortest-path funneling effect measures whether a scientist's shortest paths to the rest of a coauthorship network pass disproportionately through one or a few collaborators.

## Canonical Form

- Unit of analysis: focal scientist, collaborator, shortest path, connected component, or brokerage route.
- Typical representation: ranked collaborator share of shortest paths, path-through-collaborator distribution, or funneling curve.
- Measurement target: how concentrated a scientist's network reach is through specific collaborators.
- Empirical signature: most shortest paths from a focal scientist to others route through the best-connected one or two collaborators.

## Uses in Science of Science

- Refines [scientific brokerage centrality](scientific_brokerage_centrality.md) by measuring brokerage from the focal scientist's perspective.
- Gives a mechanism-sensitive summary for [referral-chain shortest paths](../methods/referral_chain_shortest_paths.md).
- Helps distinguish high degree from dependence on a small number of gateway collaborators.
- Connects [small-world collaboration structure](../representations/small_world_collaboration_structure.md) to local vulnerability and access concentration.

## Operationalization

- For a focal scientist, compute shortest paths from all reachable scientists to the focal scientist or from the focal scientist outward.
- Assign each path to the first collaborator through which it reaches the focal scientist; decide how to split ties among multiple shortest paths.
- Rank collaborators by the share of shortest paths they carry.
- Compare the concentration curve across fields, career stages, and weighted versus unweighted coauthorship graphs.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) reports a calculation suggested by Steven Strogatz asking how many shortest paths to a scientist pass through each collaborator.
- In the physics network, Newman reports that on average about 64% of an individual's shortest paths to others pass through their best-connected collaborator.
- The paper states that most of the remaining paths pass through the next-best connected collaborator.
- Newman interprets this as evidence that a small number of scientists may act as brokers for communication among others.

## Caveats

- Shortest-path funneling assumes that shortest paths are relevant channels for communication or access.
- Results can change when paths are weighted by tie strength or when large-team edges are discounted.
- Multiple equally short paths require a documented tie-splitting rule.
- Funneling can indicate useful access, dependency, or measurement bias.

## Links

- [scientific brokerage centrality](scientific_brokerage_centrality.md)
- [referral-chain shortest paths](../methods/referral_chain_shortest_paths.md)
- [collaboration path length](collaboration_path_length.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)
- [collaboration strength distribution](collaboration_strength_distribution.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `shortest_path_funneling_effect`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: path funneling; collaborator path concentration; shortest-path gateway share; referral path concentration
