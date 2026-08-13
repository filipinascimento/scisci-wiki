# Strategy-distribution stability

## Summary

Strategy-distribution stability tests whether the relative mix of research strategies stays stable over time even when the underlying opportunity space changes dramatically.

## Canonical Form

- Unit of analysis: strategy-year cell, publication-year corpus, knowledge-network edge, or project strategy.
- Typical representation: time series of strategy shares, strategy mixture vector, or stability comparison against changing opportunity counts.
- Validation target: whether scientists' observed choices track available research opportunities or remain concentrated in established strategy classes.
- Empirical signature: strategy shares are stable while new, bridging, or exploratory opportunities expand.

## Uses in Science of Science

- Validates the descriptive input for [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md).
- Complements [research strategy taxonomy](../methods/research_strategy_taxonomy.md) by treating yearly strategy shares as a reusable time-series object.
- Provides evidence for [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md) and [mature-field exploration gap](../mechanisms/mature_field_exploration_gap.md).
- Helps distinguish stable scientific attention from a changing opportunity set in an evolving knowledge network.

## Operationalization

- Classify observed work into strategy classes such as repeat bridge, repeat consolidation, new bridge, new consolidation, and jump.
- Count strategy instances by year and compute relative frequencies.
- Compare strategy-frequency trends with opportunity-set growth, entity counts, possible new links, possible bridge links, and cluster-size changes.
- Use simultaneous intervals for strategy shares when comparing multi-class distributions across years or high-recognition subsets.
- Report whether stability survives indexing changes, annotation rules, and field-definition choices.

## Evidence and Validations

- Verified full-text evidence from Foster, Rzhetsky, and Evans (2015) reports that the distribution of biomedical chemistry strategies remains remarkably stable from 1983 to 2008.
- Their observed corpus contains many more repeats than new or jump statements: repeat statements account for 85.8% and new or jump statements for 14.2%.
- The same text reports that new bridges and new consolidations together are much more common than jumps, with shares of 12.4% versus 1.8%.
- Foster et al. treat the stability as surprising because the number of distinct chemicals increased by an order of magnitude, possible new links grew from 22 times known links in 1983 to 188 times in 2008, and possible bridge opportunities expanded as clusters became smaller relative to the whole network.
- These denominator diagnostics are split into [chemical opportunity expansion ratio](../measures/chemical_opportunity_expansion_ratio.md), and the uncertainty accounting for strategy shares is split into [strategy-share multinomial intervals](../methods/strategy_share_multinomial_intervals.md).

## Caveats

- Stability in the publication record may hide shifts in failed or unpublished attempted projects.
- Strategy shares depend on the representation of entities, links, clusters, and indexing history.
- Stable aggregate shares can mask subgroup, institution, topic, or career-stage differences.

## Links

- [research strategy taxonomy](../methods/research_strategy_taxonomy.md)
- [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md)
- [chemical opportunity expansion ratio](../measures/chemical_opportunity_expansion_ratio.md)
- [strategy-share multinomial intervals](../methods/strategy_share_multinomial_intervals.md)
- [repeat-new preference ratio](../measures/repeat_new_preference_ratio.md)
- [consolidation-bridge preference ratio](../measures/consolidation_bridge_preference_ratio.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)
- [mature-field exploration gap](../mechanisms/mature_field_exploration_gap.md)
- [unpublished-failure censoring](unpublished_failure_censoring.md)
- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `strategy_distribution_stability`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: stable strategy mix; research strategy share stability; stable scientific strategy distribution; strategy prevalence stability
