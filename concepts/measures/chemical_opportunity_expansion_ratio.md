# Chemical opportunity expansion ratio

## Summary

Chemical opportunity expansion ratio compares the number of possible unexplored entity relationships with the number of already known relationships in an evolving knowledge network.

## Canonical Form

- Unit of analysis: year, entity set, known edge set, possible new edge, strategy opportunity class, or knowledge cluster.
- Typical representation: possible-new-to-known edge ratio, bridge-opportunity growth ratio, candidate-edge expansion curve, or opportunity-denominator time series.
- Measurement target: how fast the search space for new or bridging work expands relative to the stock of known relationships.
- Empirical signature: possible new relationships grow faster than observed new-strategy choices.

## Uses in Science of Science

- Supplies the opportunity denominator behind [strategy-distribution stability](../validations/strategy_distribution_stability.md).
- Provides a compact diagnostic for [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md).
- Helps quantify [mature-field exploration gap](../mechanisms/mature_field_exploration_gap.md) and [central-nearby problem-choice bias](../mechanisms/central_nearby_problem_choice_bias.md).
- Can be adapted to citation, patent, topic, dataset, method, institution, or collaboration networks when the possible-pair universe is explicit.

## Operationalization

- At each time step, count known relationships in the cumulative network.
- Count possible new relationships among known entities, new entities, or cluster pairs under the chosen feasibility rule.
- Compute ratios such as possible new links divided by known links, or possible bridge links divided by possible consolidation links.
- Compare opportunity ratios with observed strategy frequencies and fitted attention-bias parameters.
- Report cluster-size and entity-count changes because they drive the denominator.

## Evidence and Validations

- Verified full-text evidence from Foster et al. (2015) reports that possible new chemical links were 22 times the known links in 1983 and 188 times the known links in 2008.
- The same passage reports that the largest knowledge cluster shrank from 27.5% of the network in 1983 to 12.8% in 2008, so possible bridging links grew faster than possible consolidating links.
- Foster et al. use these opportunity expansions to argue that stable strategy shares are not simply caused by a lack of new or bridging opportunities.
- This measure is the denominator-side complement to observed repeat-new and consolidation-bridge preference ratios.

## Caveats

- The possible-pair universe can include many infeasible, unsafe, or uninteresting combinations.
- Ratios depend on entity definitions, cluster assignments, edge persistence, and whether newly introduced entities are eligible.
- Large denominators can exaggerate opportunity if most candidate pairs are obviously impossible to domain experts.

## Links

- [strategy-distribution stability](../validations/strategy_distribution_stability.md)
- [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md)
- [repeat-new preference ratio](repeat_new_preference_ratio.md)
- [consolidation-bridge preference ratio](consolidation_bridge_preference_ratio.md)
- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [map-equation knowledge clusters](../methods/map_equation_knowledge_clusters.md)
- [mature-field exploration gap](../mechanisms/mature_field_exploration_gap.md)
- [central-nearby problem-choice bias](../mechanisms/central_nearby_problem_choice_bias.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `chemical_opportunity_expansion_ratio`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: possible-new-link ratio; new-to-known opportunity ratio; bridge opportunity expansion; candidate chemical link expansion
