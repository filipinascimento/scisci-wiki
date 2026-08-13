# Scientific problem choice

## Summary

Scientific problem choice is the motif that scientists choose only a tiny subset of possible questions, experiments, or combinations, and those choices shape the speed and direction of collective discovery.

## Canonical Form

- Unit of analysis: experiment, claim, paper, researcher, field, chemical pair, topic pair, or knowledge-network edge.
- Typical representation: evolving knowledge network, search trajectory, explored/unexplored edge set, or strategy parameters.
- Mechanism: local incentives and publication norms reward tractable, nearby, and publishable work, while field-level discovery may require riskier jumps into less explored regions.
- Empirical signature: observed search behavior concentrates around central or nearby knowledge entities and diverges from strategies that would explore the knowledge network more efficiently.

## Uses in Science of Science

- Generalizes [research strategy risk-reward](research_strategy_risk_reward.md) from papers to experiments and field-level search.
- Links [novelty and conventionality](novelty_conventionality.md), [funding incentives and exploration](funding_incentives_and_exploration.md), and [peer review gatekeeping](peer_review_gatekeeping.md).
- Connects individual and collective incentives through [collective discovery incentive misalignment](collective_discovery_incentive_misalignment.md).
- Provides a design space for suggested experiments: compare observed choices with counterfactual search policies.
- Connects to [elite problem-taste socialization](elite_problem_taste_socialization.md) when problem selection is learned through early training environments rather than inferred only from publication networks.

## Operationalization

- Define an evolving knowledge graph where nodes are scientific entities and edges are known relationships or claims.
- Encode possible experiments as candidate edges and observed publications as the subset selected by scientists.
- Estimate strategy parameters such as preference for central entities, nearby entities, disconnected components, or triadic closure.
- Simulate alternative strategies and compare discovery cost, failure rate, coverage, and time to discover a target fraction of the network.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) represents biomedical chemistry as an evolving network of chemical relationships extracted from MEDLINE and patent abstracts from 1976 to 2010.
- The paper infers that biomedical scientists increasingly prefer central chemicals and nearby relationships, producing a conservative strategy that exploits established neighborhoods.
- Their simulations show that the MEDLINE-like strategy is efficient early but becomes increasingly inefficient as the field matures; the full text reports it is more than three times as costly as the most efficient alternative for discovering much of the network.
- Rzhetsky et al. also report that more efficient mature-field discovery would involve more distant or disconnected combinations, more risk, and a more complete record of failed experiments.
- The Rzhetsky model is split into [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md), [optimal knowledge-network search simulation](../methods/optimal_knowledge_network_search_simulation.md), and [coordinated failure-publication regime](../methods/coordinated_failure_publication_regime.md).
- Verified full-text evidence from Azoulay, Fons-Rosen, and Graff Zivin (2019) adds a field-entry version of problem choice: after a dominant biomedical scientist dies, non-collaborating outsiders redirect effort into the star's subfield rather than simply expanding aggregate output.
- Their evidence links problem choice to [star-scientist entry deterrence](star_scientist_entry_deterrence.md), because the presence of a luminary can alter the perceived payoff of entering a field.
- Merton (1968) provides earlier qualitative evidence that elite training environments can transmit problem-finding taste and standards, now split as [elite problem-taste socialization](elite_problem_taste_socialization.md).

## Caveats

- The observed publication record undercounts failed experiments and unpublished negative results.
- A chemical-relation graph captures only one domain's representation of knowledge.
- Globally efficient search can be locally unattractive to individual researchers facing career, funding, and publication constraints.

## Links

- [research strategy risk-reward](research_strategy_risk_reward.md)
- [knowledge-network experiment search](knowledge_network_experiment_search.md)
- [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md)
- [optimal knowledge-network search simulation](../methods/optimal_knowledge_network_search_simulation.md)
- [central-nearby problem-choice bias](central_nearby_problem_choice_bias.md)
- [famous-obscure pairing strategy](famous_obscure_pairing_strategy.md)
- [mature-field exploration gap](mature_field_exploration_gap.md)
- [failed-experiment publication value](failed_experiment_publication_value.md)
- [coordinated failure-publication regime](../methods/coordinated_failure_publication_regime.md)
- [collective discovery incentive misalignment](collective_discovery_incentive_misalignment.md)
- [topic-choice privilege](topic_choice_privilege.md)
- [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md)
- [novelty and conventionality](novelty_conventionality.md)
- [funding incentives and exploration](funding_incentives_and_exploration.md)
- [peer review and gatekeeping](peer_review_gatekeeping.md)
- [scientific discovery prediction](../methods/scientific_discovery_prediction.md)
- [superstar death event study](../methods/superstar_death_event_study.md)
- [outsider entry after star death](outsider_entry_after_star_death.md)
- [star-scientist entry deterrence](star_scientist_entry_deterrence.md)
- [interdisciplinarity](interdisciplinarity.md)
- [elite problem-taste socialization](elite_problem_taste_socialization.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; WoS: unknown]
- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]
- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]
- Azoulay, P., Fons-Rosen, C., & Graff Zivin, J. S. (2019). Does Science Advance One Funeral at a Time? *American Economic Review*, 109(8), 2889-2920. https://doi.org/10.1257/aer.20161574 [OpenAlex: W2193631239; Dimensions: pub.1120042002; WoS: unknown]

## Metadata

- Concept ID: `scientific_problem_choice`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Azoulay et al. (2019) (2019)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Aliases: experiment choice; problem selection; knowledge-network search; research search strategy
