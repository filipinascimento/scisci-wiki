# Central-nearby problem-choice bias

## Summary

Central-nearby problem-choice bias is the tendency for researchers to choose problems anchored in important, well-studied entities and nearby relationships in a knowledge network.

## Canonical Form

- Unit of analysis: experiment, candidate edge, chemical pair, topic pair, paper, or research program.
- Typical representation: degree preference, distance preference, local-neighborhood search, or central-entity anchoring.
- Mechanism: central and nearby problems are easier to justify, publish, interpret, and connect to existing audiences.
- Empirical signature: observed research choices overuse high-degree entities and short network distances relative to available alternatives.

## Uses in Science of Science

- Provides a concrete mechanism behind conservative [scientific problem choice](scientific_problem_choice.md).
- Links [research strategy risk-reward](research_strategy_risk_reward.md) to field-level search behavior.
- Splits high-degree anchoring into [famous-obscure pairing strategy](famous_obscure_pairing_strategy.md).
- Helps explain why [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md) can decline as a field matures.

## Operationalization

- Build an evolving knowledge graph where nodes are concepts, chemicals, topics, diseases, methods, or other entities.
- In biomedical chemistry, use [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md) to track chemical-entity degree and distance.
- For each observed problem choice, measure the degree centrality of selected entities and the network distance between them before the new edge appears.
- Compare observed choices with random, availability-weighted, or optimized search policies.
- Track whether preference for centrality and short distance grows or declines over time.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) maps qualitative ideas of problem importance and difficulty to degree centrality and network distance.
- The paper infers that biomedical scientists pursue conservative strategies in the local neighborhood of central molecules.
- Rzhetsky et al. report that the historical strategy focuses increasingly on central chemicals and nearby relationships over time.
- Their simulations show that this local, central search can be efficient early but becomes inefficient for discovering mature knowledge networks.
- The fitted strategy is formalized in [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md).

## Caveats

- Central and nearby choices are not necessarily bad; they can support reliable cumulative work, validation, and translation.
- Measured bias depends on the entity-resolution and relation-extraction pipeline used to build the network.
- Some distant combinations may be infeasible, unsafe, or scientifically meaningless, so the available edge set should not be treated as uniformly valuable.

## Links

- [scientific problem choice](scientific_problem_choice.md)
- [knowledge-network experiment search](knowledge_network_experiment_search.md)
- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md)
- [famous-obscure pairing strategy](famous_obscure_pairing_strategy.md)
- [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md)
- [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md)
- [mature-field exploration gap](mature_field_exploration_gap.md)
- [research strategy risk-reward](research_strategy_risk_reward.md)
- [novelty and conventionality](novelty_conventionality.md)
- [research strategy surprisal](../measures/research_strategy_surprisal.md)
- [funding incentives and exploration](funding_incentives_and_exploration.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; WoS: unknown]
- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `central_nearby_problem_choice_bias`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: centrality bias; nearby-search bias; local-neighborhood search; high-degree entity preference
