# Knowledge-network search efficiency

## Summary

Knowledge-network search efficiency measures how many experiments or choices are required to discover new relationships in an evolving knowledge graph.

## Canonical Form

- Unit of analysis: experiment, candidate edge, knowledge graph, field, strategy, or simulated search policy.
- Typical representation: relative loss, experiments per new edge, discovery cost curve, or target-network coverage.
- Measurement target: collective efficiency of research choices, not only individual publication success.
- Empirical signature: a strategy discovers the same fraction of a target knowledge network with fewer tested edges or fewer redundant failures.

## Uses in Science of Science

- Converts [scientific problem choice](../mechanisms/scientific_problem_choice.md) into an explicit objective function.
- Compares observed search behavior with counterfactual strategies in [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md).
- Uses [optimal knowledge-network search simulation](../methods/optimal_knowledge_network_search_simulation.md) to search for low-loss alternatives.
- Supports policy experiments about funding, evaluation, coordination, and the publication of failures.
- Requires [novel-edge discovery objective boundary](../validations/novel_edge_discovery_objective_boundary.md) when relative loss is used as a policy metric rather than a narrow discovery-efficiency measure.

- A residual Rzhetsky et al. pass adds [individual-collective discovery objective mismatch](../mechanisms/individual_collective_discovery_objective_mismatch.md), [strategy-portfolio risk-spreading institution](../mechanisms/strategy_portfolio_risk_spreading_institution.md), [coordinated no-repeat discovery regime](../methods/coordinated_no_repeat_discovery_regime.md), [success-screened effort trace](../validations/success_screened_effort_trace.md), [discovery objective-function plurality](../validations/discovery_objective_function_plurality.md), [contextual chemical-link novelty boundary](../validations/contextual_chemical_link_novelty_boundary.md), [maturity-contingent optimal strategy shift](../mechanisms/maturity_contingent_optimal_strategy_shift.md), [recognition-exploration divergence signal](recognition_exploration_divergence_signal.md), [biomedical chemical-trace proxy](../validations/biomedical_chemical_trace_proxy.md), and [counterfactual strategy-search simulation](../methods/counterfactual_strategy_search_simulation.md).
## Operationalization

- Represent possible discoveries as candidate edges in an entity-relation graph.
- Use a content graph such as [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md) when the experiment space is chemical or biomedical.
- Define the target network and the portion of that network to be discovered.
- Simulate or observe a research strategy as a sequence of tested edges.
- Estimate observed strategies with [visible choice-set likelihood](../methods/visible_choice_set_likelihood.md) when the opportunity set changes over time.
- Compute relative loss as experiments performed divided by newly discovered edges, usually for fixed target coverage levels.
- Compare observed strategy curves against random, optimized, and policy-constrained alternatives.
- Treat [dyadic experiment-reduction caveat](../validations/dyadic_experiment_reduction_caveat.md) and [publication-success screening bias](../validations/publication_success_screening_bias.md) as scope checks before interpreting published edges as attempted experiments.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) defines efficiency as the total number of experiments required to discover a given portion of an unknown knowledge graph.
- The same paper defines relative loss as experiments performed per novel edge discovered, so larger relative loss indicates more redundant or failed search.
- Rzhetsky et al. simulate thousands of strategies on a MEDLINE-derived chemical-relation network and report that a MEDLINE-like strategy becomes more than three times as costly as the most efficient alternative for discovering much of the network.
- Their results distinguish career-friendly coherent local exploration from collectively efficient discovery of mature knowledge networks.
- Their coordinated-discovery counterfactual is split into [coordinated failure-publication regime](../methods/coordinated_failure_publication_regime.md).
- Rzhetsky et al. explicitly define efficiency around novel-edge discovery and note that alternative objectives such as robustness, error minimization, productive repetition, and individual publication or citation goals could imply different strategies.
- A further Rzhetsky et al. pass separates visible choice-set likelihood, dyadic experiment reduction, publication-success screening bias, and [knowledge-island overexploration](../mechanisms/knowledge_island_overexploration.md) as reusable inference and mechanism motifs.

## Caveats

- The target network is only a proxy for all possible true discoveries and depends on extraction quality.
- A search strategy that minimizes experiments per new edge may not optimize safety, cost, clinical value, social value, or theoretical importance.
- Missing negative results and unpublished failures can make observed efficiency look better than the real research process.
- The search simulation's simplest scenario assumes error-free success and failure labels, motivating [error-free experiment-outcome idealization](../validations/error_free_experiment_outcome_idealization.md).

## Links

- [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md)
- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [biomedical chemical-relationship network panel](../datasets/biomedical_chemical_relationship_network_panel.md)
- [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md)
- [visible choice-set likelihood](../methods/visible_choice_set_likelihood.md)
- [optimal knowledge-network search simulation](../methods/optimal_knowledge_network_search_simulation.md)
- [coordinated failure-publication regime](../methods/coordinated_failure_publication_regime.md)
- [novel-edge discovery objective boundary](../validations/novel_edge_discovery_objective_boundary.md)
- [error-free experiment-outcome idealization](../validations/error_free_experiment_outcome_idealization.md)
- [dyadic experiment-reduction caveat](../validations/dyadic_experiment_reduction_caveat.md)
- [publication-success screening bias](../validations/publication_success_screening_bias.md)
- [research strategy taxonomy](../methods/research_strategy_taxonomy.md)
- [scientific problem choice](../mechanisms/scientific_problem_choice.md)
- [central-nearby problem-choice bias](../mechanisms/central_nearby_problem_choice_bias.md)
- [mature-field exploration gap](../mechanisms/mature_field_exploration_gap.md)
- [knowledge-island overexploration](../mechanisms/knowledge_island_overexploration.md)
- [failed-experiment publication value](../mechanisms/failed_experiment_publication_value.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)
- [research strategy surprisal](research_strategy_surprisal.md)
- [scientific discovery prediction](../methods/scientific_discovery_prediction.md)

- [individual-collective discovery objective mismatch](../mechanisms/individual_collective_discovery_objective_mismatch.md)
- [coordinated no-repeat discovery regime](../methods/coordinated_no_repeat_discovery_regime.md)
- [counterfactual strategy-search simulation](../methods/counterfactual_strategy_search_simulation.md)
## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; WoS: unknown]
- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `knowledge_network_search_efficiency`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: relative loss; experiments per discovery; discovery cost; network search efficiency
