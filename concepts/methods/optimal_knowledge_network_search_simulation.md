# Optimal knowledge-network search simulation

## Summary

Optimal knowledge-network search simulation compares observed research strategies with simulated strategies that minimize experiment cost for discovering a target share of a knowledge graph.

## Canonical Form

- Unit of analysis: strategy parameter vector, target network, candidate edge, simulation run, or discovery-coverage level.
- Typical representation: simulated annealing/MCMC parameter search, relative-loss curve, or optimal strategy family for 10-100% network discovery.
- Method target: identify counterfactual research strategies that discover more relationships with fewer experiments.
- Empirical signature: observed strategies diverge from low-loss strategies as network maturity increases.

## Uses in Science of Science

- Turns [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md) into an optimization problem.
- Provides a simulation companion to [degree-distance problem-choice model](degree_distance_problem_choice_model.md).
- Generates evidence for [mature-field exploration gap](../mechanisms/mature_field_exploration_gap.md).
- Helps design [coordinated failure-publication regime](coordinated_failure_publication_regime.md) and other policy counterfactuals.

## Operationalization

- Sample or define a target knowledge graph and a candidate-edge universe.
- Simulate a sequence of experiments under a parameterized strategy.
- Count successes as edges present in the target graph and failures as tested candidate edges absent from it.
- Use simulated annealing and repeated stochastic simulations to search for strategy parameters that minimize relative loss at chosen coverage levels.
- Compare observed, random, and optimized strategies across the full discovery curve.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) draws a representative subsample from the empirical chemical network because full-network optimization was computationally infeasible.
- The paper simulates thousands of strategies on a supercomputer and uses simulated annealing to minimize relative loss.
- Rzhetsky et al. compare observed MEDLINE, random, 20% optimal, 50% optimal, and 100% optimal strategies.
- The article reports that the MEDLINE-like strategy becomes more than three times as costly as the most efficient alternative for discovering much of the network.
- Rzhetsky et al. state that the simplest simulation treats successes and failures as error free, a modeling idealization now separated as [error-free experiment-outcome idealization](../validations/error_free_experiment_outcome_idealization.md).

## Caveats

- The discovered strategies are heuristic optima; the paper does not claim formal global optimality.
- Target networks are observed proxies for truth and omit discoveries not represented by chemical co-mentions.
- Published target networks are subject to [unpublished-failure censoring](../validations/unpublished_failure_censoring.md), so risky failed attempts may be missing from the inferred search history.
- A low-loss strategy for edge discovery may not optimize robustness, safety, clinical value, or translational payoff.
- The objective function itself is bounded by [novel-edge discovery objective boundary](../validations/novel_edge_discovery_objective_boundary.md).

## Links

- [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md)
- [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md)
- [degree-distance problem-choice model](degree_distance_problem_choice_model.md)
- [biomedical chemical-relationship network panel](../datasets/biomedical_chemical_relationship_network_panel.md)
- [mature-field exploration gap](../mechanisms/mature_field_exploration_gap.md)
- [unpublished-failure censoring](../validations/unpublished_failure_censoring.md)
- [published-effort stationarity assumption](../validations/published_effort_stationarity_assumption.md)
- [novel-edge discovery objective boundary](../validations/novel_edge_discovery_objective_boundary.md)
- [error-free experiment-outcome idealization](../validations/error_free_experiment_outcome_idealization.md)
- [coordinated failure-publication regime](coordinated_failure_publication_regime.md)
- [scientific discovery prediction](scientific_discovery_prediction.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; WoS: unknown; SciSciNet: W2130145803]

## Metadata

- Concept ID: `optimal_knowledge_network_search_simulation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: optimal discovery simulation; relative-loss strategy optimization; simulated annealing discovery strategy; network search optimization
