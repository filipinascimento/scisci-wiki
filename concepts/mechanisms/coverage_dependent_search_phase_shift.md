# Coverage-dependent search phase shift

## Summary

Coverage-dependent search phase shift is the idea that efficient discovery strategies change as a knowledge network becomes more completely explored.

## Canonical Form

- Unit of analysis: search strategy, network coverage level, candidate edge, or simulation step.
- Typical representation: strategy parameters compared across early, middle, and mature coverage regimes.
- Mechanism: local high-degree exploitation is useful early, while distant or disconnected exploration gains value after nearby opportunities are exhausted.
- Empirical signature: the optimal mix of degree preference, distance tolerance, and disconnected bridging changes with network coverage.

## Uses in Science of Science

- Refines [mature-field exploration gap](mature_field_exploration_gap.md).
- Adds a temporal phase rule to [optimal knowledge-network search simulation](../methods/optimal_knowledge_network_search_simulation.md).
- Helps interpret [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md).
- Connects problem choice to field maturity and opportunity depletion.

## Operationalization

- Define network coverage as the fraction of target relationships discovered or the share of reachable mature-network edges already observed.
- Simulate strategies across coverage levels.
- Estimate which degree, distance, and disconnected-bridging parameters minimize discovery loss at each stage.
- Compare observed historical choices with the coverage-specific efficient strategy.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) finds that historical biomedical choices focus on central and nearby chemical pairs.
- The paper's simulations show that more exploratory strategies become increasingly valuable as the discovered network approaches higher coverage.
- This supports a phase-shift interpretation: the individually attractive strategy can become collectively inefficient as easy local opportunities are depleted.

## Caveats

- The target mature network is observed only retrospectively and may omit failed or unpublished relationships.
- Efficient strategy depends on the assumed cost of failure and the objective function.
- Field maturity is not only coverage; theory, instrumentation, funding, and regulation also matter.

## Links

- [knowledge-network experiment search](knowledge_network_experiment_search.md)
- [mature-field exploration gap](mature_field_exploration_gap.md)
- [optimal knowledge-network search simulation](../methods/optimal_knowledge_network_search_simulation.md)
- [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md)
- [topological cognitive-distance proxy](../measures/topological_cognitive_distance_proxy.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; SciSciNet: W2130145803; WoS: unknown]

## Metadata

- Concept ID: `coverage_dependent_search_phase_shift`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: coverage-dependent exploration shift; search strategy phase shift; mature-network exploration transition
