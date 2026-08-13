# Mature-field exploration gap

## Summary

Mature-field exploration gap is the divergence between the riskier, more distant search strategies that would efficiently explore a mature knowledge network and the safer local strategies researchers tend to choose.

## Canonical Form

- Unit of analysis: field, knowledge network, experiment portfolio, candidate edge set, or research strategy.
- Typical representation: observed strategy trajectory versus optimal search trajectory as network coverage increases.
- Mechanism: as fields mature, remaining undiscovered relationships are more distant or disconnected, but career and publication incentives still favor central nearby work.
- Empirical signature: observed search becomes more conservative while simulations show that distant or disconnected combinations would discover more of the remaining network.

## Uses in Science of Science

- Extends [central-nearby problem-choice bias](central_nearby_problem_choice_bias.md) from individual choices to field life cycles.
- Provides a mechanism for declining novelty, narrowing search, and slower discovery in mature domains.
- Suggests experiments for science policy: fund riskier portfolios, publish failures, coordinate search, or reward distant combinations.
- Links policy failure to [collective discovery incentive misalignment](collective_discovery_incentive_misalignment.md).
- Links to [literature-based knowledge bridging](../methods/literature_based_knowledge_bridging.md) as one search intervention for finding underused cross-cluster opportunities.

## Operationalization

- Estimate field maturity as the fraction of a target knowledge network already discovered or as saturation in observed relation types.
- Compare observed strategy parameters over time with simulated strategies optimized for different target-coverage levels.
- Use [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md) to separate the expanding opportunity set from changing attention to new, repeat, bridge, and jump strategies.
- Measure whether remaining efficient strategies require more distance, disconnected-component bridging, or lower reliance on high-degree entities.
- Track whether funding, evaluation, or publication interventions reduce the gap.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) reports that observed biomedical chemistry choices become more conservative over time, focusing on central molecules.
- Their simulation results show that a MEDLINE-like strategy can work well for young knowledge networks but becomes increasingly inefficient as more of the network is discovered.
- Rzhetsky et al. find that efficient discovery of the full target network requires linking distant and disconnected chemicals, with degree centrality becoming less important.
- The paper concludes that efficient discovery of radically new knowledge in mature fields requires abandoning the current focus on important, nearby chemicals.
- The simulation procedure behind this contrast is stored in [optimal knowledge-network search simulation](../methods/optimal_knowledge_network_search_simulation.md).

## Caveats

- A field's true target network is unknown; maturity estimates depend on the observed graph and extraction method.
- More distant search can create more failures and may require coordination, infrastructure, or safety review.
- Mature fields may still need local consolidation, replication, and translation even when frontier discovery requires distant search.

## Links

- [central-nearby problem-choice bias](central_nearby_problem_choice_bias.md)
- [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md)
- [knowledge-network experiment search](knowledge_network_experiment_search.md)
- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md)
- [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md)
- [optimal knowledge-network search simulation](../methods/optimal_knowledge_network_search_simulation.md)
- [scientific problem choice](scientific_problem_choice.md)
- [knowledge-use narrowing](knowledge_use_narrowing.md)
- [research strategy risk-reward](research_strategy_risk_reward.md)
- [funding autonomy and exploration](funding_autonomy_exploration.md)
- [failed-experiment publication value](failed_experiment_publication_value.md)
- [coordinated failure-publication regime](../methods/coordinated_failure_publication_regime.md)
- [collective discovery incentive misalignment](collective_discovery_incentive_misalignment.md)
- [literature-based knowledge bridging](../methods/literature_based_knowledge_bridging.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; WoS: unknown]
- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `mature_field_exploration_gap`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: mature network search gap; field maturity exploration gap; mature-field risk gap; distant-search gap
