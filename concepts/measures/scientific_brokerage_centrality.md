# Scientific brokerage centrality

## Summary

Scientific brokerage centrality measures whether a researcher sits on many shortest paths through a collaboration network, making them a potential bridge for information flow between otherwise distant groups.

## Canonical Form

- Unit of analysis: author, institution, field, or collaboration tie.
- Typical representation: author-author coauthorship graph with shortest-path or flow-based centrality.
- Mechanism or measurement target: brokerage, gatekeeping, referral chains, interdisciplinary bridging, and network vulnerability.
- Empirical signature: a small number of nodes carry disproportionate shortest-path traffic or connect otherwise separated parts of the network.

## Uses in Science of Science

- Identifies scientists, institutions, or fields that bridge communities in [coauthorship networks](../representations/coauthorship_networks.md).
- Connects collaboration structure to [invisible colleges](../mechanisms/invisible_college.md), mobility, interdisciplinarity, and knowledge diffusion.
- Provides a network-level complement to simple collaborator counts.
- Can be validated with [coauthorship broker-removal fragility](../validations/coauthorship_broker_removal_fragility.md) and [brokerage assortativity check](../validations/brokerage_assortativity_check.md).

## Operationalization

- Build an author-disambiguated coauthorship graph.
- Compute betweenness centrality or related flow/brokerage measures.
- Compare centrality to degree, field, institution, and career-stage baselines.
- Test robustness to disconnected components, time windows, and weighted edges.
- Use [shortest-path funneling effect](shortest_path_funneling_effect.md) when the question is whether a focal scientist's reach depends on one or two gateway collaborators.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) describes betweenness centrality in coauthorship networks as the number of shortest paths between other pairs of nodes that pass through a focal scientist.
- Newman frames high-betweenness scientists as brokers for information flow and summarizes evidence that coauthorship networks contain a small number of highly central people and many peripheral actors.
- The same verified text links brokerage to network robustness: removing high-betweenness individuals can fracture collaboration networks into disconnected parts.
- Newman also summarizes evidence that collaborator betweenness scores are weakly correlated, motivating brokerage-specific assortativity checks rather than assuming that brokers mainly collaborate with brokers.
- The motif therefore separates "many collaborators" from "bridging collaborators"; high degree and high brokerage need not mean the same thing.

## Caveats

- Betweenness assumes shortest paths are meaningful channels for information flow.
- Centrality is unstable under missing affiliations, author-disambiguation errors, or narrow database coverage.
- Brokerage can indicate productive bridging, gatekeeping power, or measurement artifacts.

## Links

- [coauthorship networks](../representations/coauthorship_networks.md)
- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)
- [collaboration assortativity](collaboration_assortativity.md)
- [collaboration clustering coefficient](collaboration_clustering_coefficient.md)
- [referral-chain shortest paths](../methods/referral_chain_shortest_paths.md)
- [shortest-path funneling effect](shortest_path_funneling_effect.md)
- [coauthorship broker-removal fragility](../validations/coauthorship_broker_removal_fragility.md)
- [brokerage assortativity check](../validations/brokerage_assortativity_check.md)
- [interdisciplinarity](../mechanisms/interdisciplinarity.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [invisible college](../mechanisms/invisible_college.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `scientific_brokerage_centrality`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Aliases: betweenness centrality; brokerage; collaboration bridge; referral-chain centrality
