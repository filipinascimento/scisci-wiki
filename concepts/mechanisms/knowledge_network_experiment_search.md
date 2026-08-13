# Knowledge-network experiment search

## Summary

Knowledge-network experiment search represents scientific experiments as choices of new links in an evolving knowledge graph, making exploration, exploitation, risk, and failure explicit.

## Canonical Form

- Unit of analysis: experiment, claim, entity pair, chemical pair, concept pair, or candidate knowledge-network edge.
- Typical representation: evolving graph where nodes are scientific entities and edges are known or hypothesized relations.
- Mechanism: scientists favor central, nearby, and publishable combinations even when more distant or disconnected combinations would discover the network faster.
- Empirical signature: observed choices concentrate around high-degree or nearby entities and differ from strategies that minimize discovery cost over the whole graph.

## Uses in Science of Science

- Provides a graph-search version of [scientific problem choice](scientific_problem_choice.md).
- Uses [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md) and the [biomedical chemical-relationship network panel](../datasets/biomedical_chemical_relationship_network_panel.md) as the content-level search space in biomedical chemistry.
- Can be classified through [research strategy taxonomy](../methods/research_strategy_taxonomy.md) and estimated through [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md).
- Can be estimated directly with [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md).
- Connects [research strategy risk-reward](research_strategy_risk_reward.md) to concrete experiment-level simulations.
- Gives policy experiments a representation: change incentives, permit publication of failures, or fund riskier edges, then test search efficiency.

## Operationalization

- Extract entities and observed relationships from papers, patents, databases, or curated ontologies.
- Treat possible experiments as candidate edges between entities.
- Estimate strategy parameters for degree preference, distance preference, triadic closure, and disconnected-component bridging.
- Simulate counterfactual strategies and compare relative loss, coverage, failure rates, and time to discover target portions of the graph.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) models biomedical chemistry as a growing network of chemical entities connected by experimentally studied relationships from MEDLINE and patents.
- The paper infers that historical choices focus on important, central, and nearby chemicals, and that this strategy becomes more conservative over time.
- Rzhetsky et al. simulate thousands of alternative strategies and find that more risk-taking, including attempts to connect distant or disconnected network regions, can discover mature networks more efficiently.
- The paper also identifies publication of experimental failures as a mechanism that would improve collective search because failed edges still provide information about the unknown graph.
- The paper's split-out submotifs include [optimal knowledge-network search simulation](../methods/optimal_knowledge_network_search_simulation.md), [MEDLINE-patent strategy convergence](../validations/medline_patent_strategy_convergence.md), and [collective discovery incentive misalignment](collective_discovery_incentive_misalignment.md).

## Caveats

- The graph only contains entities and relationships the extraction pipeline can observe.
- Efficient collective search may be individually unattractive under career and publication incentives.
- Failed experiments are usually missing, so [unpublished-failure censoring](../validations/unpublished_failure_censoring.md) can bias estimates of both risk and search efficiency.

## Links

- [scientific problem choice](scientific_problem_choice.md)
- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [biomedical chemical-relationship network panel](../datasets/biomedical_chemical_relationship_network_panel.md)
- [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md)
- [optimal knowledge-network search simulation](../methods/optimal_knowledge_network_search_simulation.md)
- [MEDLINE-patent strategy convergence](../validations/medline_patent_strategy_convergence.md)
- [research strategy taxonomy](../methods/research_strategy_taxonomy.md)
- [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md)
- [central-nearby problem-choice bias](central_nearby_problem_choice_bias.md)
- [topological cognitive-distance proxy](../measures/topological_cognitive_distance_proxy.md)
- [chemical triadic-closure search signal](chemical_triadic_closure_search_signal.md)
- [coverage-dependent search phase shift](coverage_dependent_search_phase_shift.md)
- [published trace feedback loop](published_trace_feedback_loop.md)
- [mature-field exploration gap](mature_field_exploration_gap.md)
- [failed-experiment publication value](failed_experiment_publication_value.md)
- [unpublished-failure censoring](../validations/unpublished_failure_censoring.md)
- [coordinated failure-publication regime](../methods/coordinated_failure_publication_regime.md)
- [collective discovery incentive misalignment](collective_discovery_incentive_misalignment.md)
- [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md)
- [research strategy risk-reward](research_strategy_risk_reward.md)
- [novelty and conventionality](novelty_conventionality.md)
- [funding autonomy and exploration](funding_autonomy_exploration.md)
- [prediction feedback loops](../validations/prediction_feedback_loops.md)
- [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; WoS: unknown]

## Metadata

- Concept ID: `knowledge_network_experiment_search`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Aliases: experiment search strategy; knowledge graph exploration; graph search in science; collective discovery search
