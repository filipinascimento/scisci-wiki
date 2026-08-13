# Counterfactual strategy-search simulation

## Summary

Large-scale simulation can evaluate thousands of possible research strategies against a sampled target knowledge network.

## Canonical Form

- Unit of analysis: knowledge-network sample, strategy parameter, simulation run, loss function, MCMC search, or discovery trajectory.
- Typical representation: counterfactual simulation over parameterized experiment-choice strategies.
- Mechanism, measurement, or validation target: policy-relevant search over alternative collective discovery strategies.
- Empirical signature: simulated alternatives can discover the target network with fewer experiments than inferred observed strategies..

## Uses in Science of Science

- Refines discovery-simulation method by linking it to [knowledge network search efficiency](../measures/knowledge_network_search_efficiency.md) and [visible choice set likelihood](visible_choice_set_likelihood.md).
- Useful as a reusable distinction when [strategy opportunity bias model](strategy_opportunity_bias_model.md) is analyzed in science-of-science data.
- Adds cross-links to [growth attachment null models](../validations/growth_attachment_null_models.md) so the motif is not read as an isolated result.

## Operationalization

- Sample a representative target network and simulate discovery under parameterized research strategies.
- Use simulated annealing, MCMC, or related search procedures to find lower-loss strategies.
- Compare inferred real-world strategies with random, optimized, and policy-constrained counterfactuals.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) simulates exploration of a MEDLINE-derived network sample, compares inferred MEDLINE, random, and optimized strategies, and reports much more efficient alternatives.
- The motif captures the simulation machinery behind the collective-discovery claims.

## Caveats

- No guarantee of global optimality; results depend on sampled networks and simplified success/failure assumptions.
- Strategy-search simulations can overstate policy tractability if institutions cannot implement the optimized rule.

## Links

- [Knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md)
- [Visible choice-set likelihood](visible_choice_set_likelihood.md)
- [Strategy opportunity-bias model](strategy_opportunity_bias_model.md)
- [Growth-attachment null models](../validations/growth_attachment_null_models.md)
- [Chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [Scientific discovery prediction](scientific_discovery_prediction.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; SciSciNet: W2130145803; WoS: unknown]

## Metadata

- Concept ID: `counterfactual_strategy_search_simulation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: simulated strategy counterfactual; optimal discovery search simulation; knowledge-network policy simulation
