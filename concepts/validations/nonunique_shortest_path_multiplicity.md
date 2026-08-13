# Nonunique shortest-path multiplicity

## Summary

Nonunique shortest-path multiplicity is the validation caveat that referral-chain or brokerage analyses should preserve multiple equally short paths rather than reporting a single deterministic route.

## Canonical Form

- Unit of analysis: author pair, shortest path, referral chain, collaborator intermediary, or path ensemble.
- Typical representation: path multiplicity count, equal-length shortest-path set, or alternate referral-chain list.
- Validation target: avoid overinterpreting one arbitrary shortest path as the unique social bridge.
- Empirical signature: two scientists can be connected by several shortest paths of the same length through different collaborators.

## Uses in Science of Science

- Qualifies [referral-chain shortest paths](../methods/referral_chain_shortest_paths.md).
- Provides context for [shortest path funneling effect](../measures/shortest_path_funneling_effect.md).
- Links to [shortest path topic mismatch caveat](shortest_path_topic_mismatch_caveat.md).
- Supports [collaboration distance census BFS](../methods/collaboration_distance_census_bfs.md).

## Operationalization

- Enumerate all shortest paths or count shortest-path multiplicity for focal author pairs.
- Report when multiple equivalent paths exist.
- Avoid assigning all brokerage credit to one path if an algorithm selects arbitrarily among ties.
- Compare path multiplicity with funneling through highly connected collaborators.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) notes that shortest paths between two individuals need not be unique.
- The paper gives an example where multiple length-four paths connect two network scientists through different collaborators.
- It separately shows that many shortest paths can funnel through a small number of collaborators, making multiplicity relevant for interpretation.

## Caveats

- Enumerating all shortest paths can be expensive in large dense networks.
- Equal path length does not imply equal social feasibility or topical relevance.
- Missing data can remove alternate paths and exaggerate dependence on one intermediary.

## Links

- [referral-chain shortest paths](../methods/referral_chain_shortest_paths.md)
- [shortest path funneling effect](../measures/shortest_path_funneling_effect.md)
- [shortest path topic mismatch caveat](shortest_path_topic_mismatch_caveat.md)
- [collaboration distance census BFS](../methods/collaboration_distance_census_bfs.md)
- [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; SciSciNet: W2097777089; WoS: unknown]

## Metadata

- Concept ID: `nonunique_shortest_path_multiplicity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: shortest-path multiplicity; multiple referral chains; equal-length path caveat
