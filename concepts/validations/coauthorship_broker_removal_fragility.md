# Coauthorship broker-removal fragility

## Summary

Coauthorship broker-removal fragility tests whether removing a small number of high-betweenness scientists breaks a collaboration network into disconnected pieces.

## Canonical Form

- Unit of analysis: author node, coauthorship network, connected component, betweenness ranking, or removal step.
- Typical representation: targeted-removal curve, giant-component collapse, fragmentation profile, or high-betweenness attack simulation.
- Validation target: whether apparent collaboration-network cohesion depends heavily on a few broker scientists.
- Empirical signature: removing high-betweenness nodes rapidly shrinks the giant component or increases fragmentation.

## Uses in Science of Science

- Validates [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md) by testing whether brokers are structurally consequential.
- Adds a robustness layer to [small-world collaboration structure](../representations/small_world_collaboration_structure.md) and [collaboration giant component](../measures/collaboration_giant_component.md).
- Complements [second-largest component check](second_largest_component_check.md) by examining what happens after targeted node removal.
- Helps distinguish distributed field cohesion from cohesion dependent on a small set of bridge researchers.

## Operationalization

- Build an author-disambiguated coauthorship network and compute betweenness centrality.
- Remove authors in descending betweenness order, recomputing components after each removal or at fixed batches.
- Track largest-component share, number of components, second-largest component, and average path length among remaining connected nodes.
- Compare targeted high-betweenness removal with random removal and high-degree removal baselines.
- Report sensitivity to database boundaries, time windows, and large-team edge construction.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) summarizes work showing that coauthorship networks are highly susceptible to removing the individuals with highest betweenness scores.
- Newman reports that removing only a few high-betweenness individuals can break connections between others and fragment the network into disconnected parts.
- The paper frames this fragility as evidence that a small number of scientists can act as important brokers for information flow in collaboration networks.
- This validation separates simply having a large connected component from having a robust connected component.

## Caveats

- Removing a node from a graph is a counterfactual exercise; it does not prove that real communication would stop.
- Betweenness depends on shortest-path assumptions and can be unstable under missing edges or author-disambiguation errors.
- Large-team papers and source coverage can create or hide apparent brokers.

## Links

- [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md)
- [collaboration giant component](../measures/collaboration_giant_component.md)
- [second-largest component check](second_largest_component_check.md)
- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [referral-chain shortest paths](../methods/referral_chain_shortest_paths.md)
- [collaboration source coverage bias](collaboration_source_coverage_bias.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `coauthorship_broker_removal_fragility`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: high-betweenness removal fragility; collaboration broker attack; targeted broker removal; coauthorship network vulnerability
