# Repeat-new preference ratio

## Summary

Repeat-new preference ratio measures opportunity-adjusted preference for repeating known relationships rather than exploring new relationships in an evolving knowledge network.

## Canonical Form

- Unit of analysis: strategy-choice model, year, bias parameter, possible link set, or observed strategy count.
- Typical representation: ratio of repeat bias to new-relationship bias, repeat/new attention ratio, or time series of opportunity-adjusted conservatism.
- Measurement target: how strongly researchers favor established knowledge after accounting for available repeat and new opportunities.
- Empirical signature: the repeat-over-new preference rises even as new opportunities become much more numerous.

## Uses in Science of Science

- Converts [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md) parameters into an interpretable measure of attention narrowing.
- Provides a quantitative companion to [strategy-distribution stability](../validations/strategy_distribution_stability.md).
- Supports [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md), [central-nearby problem-choice bias](../mechanisms/central_nearby_problem_choice_bias.md), and [mature-field exploration gap](../mechanisms/mature_field_exploration_gap.md).
- Helps compare observed science with counterfactual opportunity-weighted strategy choice.

## Operationalization

- Fit a strategy-choice model with separate bias parameters for repeat and new relationships.
- Compute the ratio of repeat bias to new bias for each estimated time point.
- Plot the ratio through time with uncertainty intervals.
- Interpret increases as opportunity-adjusted concentration on established links, not as raw repeat-share growth alone.

## Evidence and Validations

- Verified full-text evidence from Foster, Rzhetsky, and Evans (2015) defines bias parameters for new and repeat relationships in a generative model of strategy selection.
- The paper reports that the model fits observed behavior well, with a Pearson correlation of 0.983 between observed and predicted strategy distributions.
- Foster et al. interpret the parameter trend as scientists filtering out more new opportunities as chemical knowledge grows.
- Their Figure 2B is described as showing a sharply increasing preference for repeating known links instead of exploring new ones.

## Caveats

- The ratio compresses many causes of conservatism, including incentives, feasibility, training, tools, funding, and peer review.
- It depends on the estimated opportunity set, strategy taxonomy, and assumptions of the representative-agent model.
- The measure describes published work, so unpublished failed attempts may shift the true attempted-strategy ratio.

## Links

- [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md)
- [strategy-distribution stability](../validations/strategy_distribution_stability.md)
- [consolidation-bridge preference ratio](consolidation_bridge_preference_ratio.md)
- [research strategy taxonomy](../methods/research_strategy_taxonomy.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)
- [central-nearby problem-choice bias](../mechanisms/central_nearby_problem_choice_bias.md)
- [mature-field exploration gap](../mechanisms/mature_field_exploration_gap.md)
- [research strategy surprisal](research_strategy_surprisal.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `repeat_new_preference_ratio`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: repeat-over-new preference; opportunity-adjusted repeat bias; established-knowledge preference ratio; repeat/new strategy bias
