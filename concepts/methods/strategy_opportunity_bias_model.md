# Strategy opportunity-bias model

## Summary

A strategy opportunity-bias model estimates how strongly scientists prefer different research strategies after accounting for how many opportunities of each type are available in the evolving knowledge network.

## Canonical Form

- Unit of analysis: strategy-year cell, possible knowledge-network edge, observed strategy count, bias parameter, or publication year.
- Typical representation: multinomial strategy-choice model, bias parameters for new/repeat and consolidation/bridge choices, likelihood model, or time-varying attention parameter.
- Method target: separate changes in available research opportunities from changes in attention, preference, or incentives toward particular strategies.
- Empirical signature: observed strategy frequencies remain stable or become more conservative even while the opportunity set for new or bridging work expands.

## Uses in Science of Science

- Provides the probability model behind [research strategy surprisal](../measures/research_strategy_surprisal.md).
- Converts [research strategy taxonomy](research_strategy_taxonomy.md) counts into estimates of attention narrowing or exploratory bias.
- Helps diagnose [central-nearby problem-choice bias](../mechanisms/central_nearby_problem_choice_bias.md), [mature-field exploration gap](../mechanisms/mature_field_exploration_gap.md), and [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md).

## Operationalization

- Count available opportunities for each strategy class at each time step in a [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md).
- Count observed strategy instances in papers or experiments for the same year or rolling window.
- Store denominator diagnostics such as [chemical opportunity expansion ratio](../measures/chemical_opportunity_expansion_ratio.md) so fitted attention parameters can be interpreted against the changing opportunity space.
- Specify a strategy-choice model that weights opportunity counts by bias parameters.
- Estimate parameters by maximum likelihood or Bayesian sampling, and track parameter trends over time.
- Use the fitted probabilities to compute [research strategy surprisal](../measures/research_strategy_surprisal.md) or to simulate counterfactual attention to new, repeat, bridge, or jump opportunities.
- Use [map-equation knowledge clusters](map_equation_knowledge_clusters.md) or another explicit community definition before interpreting consolidation/bridge bias parameters.

## Evidence and Validations

- Verified full-text evidence from Foster et al. (2015) models scientists as choosing among jump, new consolidation, new bridge, repeat consolidation, and repeat bridge strategies based on available links and bias parameters.
- Their model separates the choice among jump, new, and repeat links from the conditional choice between consolidation and bridge.
- Foster et al. estimate parameters by maximum likelihood and report that the model predicts observed strategy distributions well.
- The paper finds that scientists increasingly filter out new opportunities and become more locally focused as biomedical chemical knowledge grows.
- This method supports the claim that stable conservatism is not simply a consequence of the opportunity set; it reflects changing attention or bias relative to available opportunities.
- The main interpretable parameter summaries are split into [repeat-new preference ratio](../measures/repeat_new_preference_ratio.md) and [consolidation-bridge preference ratio](../measures/consolidation_bridge_preference_ratio.md).
- The denominator-side opportunity growth is split into [chemical opportunity expansion ratio](../measures/chemical_opportunity_expansion_ratio.md).

## Caveats

- The model assumes an abstract representative agent and treats strategy choices as independent draws, even though choices are clustered within papers and research programs.
- Bias parameters summarize many possible mechanisms: incentives, feasibility, funding, peer review, training, and available tools.
- Estimated probabilities depend on the strategy taxonomy, cluster definition, and completeness of the observed knowledge network.
- Unpublished failures are absent, so observed strategy-choice parameters describe published science rather than all attempted science.

## Links

- [research strategy taxonomy](research_strategy_taxonomy.md)
- [strategy-distribution stability](../validations/strategy_distribution_stability.md)
- [chemical opportunity expansion ratio](../measures/chemical_opportunity_expansion_ratio.md)
- [repeat-new preference ratio](../measures/repeat_new_preference_ratio.md)
- [consolidation-bridge preference ratio](../measures/consolidation_bridge_preference_ratio.md)
- [map-equation knowledge clusters](map_equation_knowledge_clusters.md)
- [project-level strategy labels](project_level_strategy_labels.md)
- [research strategy surprisal](../measures/research_strategy_surprisal.md)
- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)
- [central-nearby problem-choice bias](../mechanisms/central_nearby_problem_choice_bias.md)
- [mature-field exploration gap](../mechanisms/mature_field_exploration_gap.md)
- [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md)
- [risky-strategy compensation test](../validations/risky_strategy_compensation_test.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `strategy_opportunity_bias_model`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: strategy choice model; opportunity-normalized strategy bias; research attention model; strategy selection bias parameters
