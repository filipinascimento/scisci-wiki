# Degree-distance problem-choice model

## Summary

The degree-distance problem-choice model estimates how likely scientists are to test an entity pair as a function of entity centrality and network distance.

## Canonical Form

- Unit of analysis: candidate entity pair, experiment, observed edge, knowledge-network snapshot, or strategy parameter.
- Typical representation: five-parameter choice model over centrality, finite distance, and disconnected-component bridging.
- Method target: infer a scientific search strategy from observed publication or patent choices.
- Empirical signature: fitted parameters reveal whether researchers prefer central, obscure, nearby, distant, or disconnected combinations.

## Uses in Science of Science

- Operationalizes [central-nearby problem-choice bias](../mechanisms/central_nearby_problem_choice_bias.md).
- Gives [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md) an estimable behavioral model.
- Supplies parameters for [optimal knowledge-network search simulation](optimal_knowledge_network_search_simulation.md).
- Links [famous-obscure pairing strategy](../mechanisms/famous_obscure_pairing_strategy.md) and [mature-field exploration gap](../mechanisms/mature_field_exploration_gap.md).

## Operationalization

- Build time-dependent snapshots of a knowledge graph before each observed experiment or edge.
- For each candidate pair, compute the degree of the more central entity, the degree of the less central entity, their finite network distance, and whether they lie in disconnected components.
- Estimate parameters for preferences over high-degree anchors, low-degree partners, short and long finite walks, and disconnected-component bridging.
- Compare fitted historical parameters with simulated or policy-relevant counterfactual strategies.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) defines a five-parameter model of biomedical chemical-pair selection.
- The parameters weight the degree of the more central chemical, the degree of the less central chemical, short and long finite network walks, and edges between disconnected components.
- The paper estimates the model on MEDLINE articles and U.S. patents using time-dependent network snapshots.
- Rzhetsky et al. use maximum likelihood with simulated annealing and Markov chain Monte Carlo to estimate parameters and credible intervals.

## Caveats

- Degree and distance compress many cognitive, technical, and institutional properties into two network quantities.
- The model approximates multi-entity experiments as dyadic pair choices.
- Parameters are sensitive to graph construction, relation extraction, and the missing denominator of unpublished failed attempts.

## Links

- [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md)
- [central-nearby problem-choice bias](../mechanisms/central_nearby_problem_choice_bias.md)
- [famous-obscure pairing strategy](../mechanisms/famous_obscure_pairing_strategy.md)
- [biomedical chemical-relationship network panel](../datasets/biomedical_chemical_relationship_network_panel.md)
- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [optimal knowledge-network search simulation](optimal_knowledge_network_search_simulation.md)
- [strategy opportunity-bias model](strategy_opportunity_bias_model.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; WoS: unknown; SciSciNet: W2130145803]

## Metadata

- Concept ID: `degree_distance_problem_choice_model`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: degree-distance strategy model; chemical-pair choice model; network problem-choice model; centrality distance search model
