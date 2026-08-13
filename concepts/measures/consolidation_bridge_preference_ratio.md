# Consolidation-bridge preference ratio

## Summary

Consolidation-bridge preference ratio measures whether researchers prefer within-cluster consolidation over between-cluster bridging after accounting for available strategy opportunities.

## Canonical Form

- Unit of analysis: strategy-choice model, year, bias parameter, within-cluster opportunity, between-cluster opportunity, or observed strategy count.
- Typical representation: consolidation-over-bridge bias ratio, conditional strategy preference, or local-focus time series.
- Measurement target: opportunity-adjusted preference for deepening a knowledge cluster versus linking distinct clusters.
- Empirical signature: the preference for new consolidations over new bridges rises or remains high even as possible bridging opportunities expand.

## Uses in Science of Science

- Makes the local-focus part of [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md) explicit.
- Complements [repeat-new preference ratio](repeat_new_preference_ratio.md): one captures old-versus-new attention, the other captures local-versus-bridging attention.
- Connects [research strategy taxonomy](../methods/research_strategy_taxonomy.md) to [novelty and conventionality](../mechanisms/novelty_conventionality.md), interdisciplinarity, and research-front bridging.
- Provides a lower-level measure for [mature-field exploration gap](../mechanisms/mature_field_exploration_gap.md).

## Operationalization

- Define knowledge clusters in the evolving knowledge network.
- Count possible and observed new consolidations and new bridges by year.
- Fit a strategy-choice model with conditional bias parameters for consolidation versus bridge choices.
- Plot the consolidation-over-bridge ratio separately for new and repeat relationships when the model supports both.

## Evidence and Validations

- Verified full-text evidence from Foster, Rzhetsky, and Evans (2015) defines bias parameters for new and repeat consolidations after the model chooses among jump, new, and repeat links.
- The paper reports that the preference for new consolidation over bridging grows and may level off.
- Foster et al. interpret this trend as evidence of local focus in exploration of new chemical relationships.
- The same paper notes that possible bridging links grow faster than possible consolidating links because knowledge clusters become smaller relative to the entire chemical network.

## Caveats

- Bridges and consolidations depend on the chosen community-detection method and temporal network representation.
- A within-cluster consolidation can still be conceptually novel, and a between-cluster bridge can still be routine.
- This measure is about opportunity-adjusted attention, not directly about citation payoff or publication success.

## Links

- [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md)
- [repeat-new preference ratio](repeat_new_preference_ratio.md)
- [strategy-distribution stability](../validations/strategy_distribution_stability.md)
- [map-equation knowledge clusters](../methods/map_equation_knowledge_clusters.md)
- [research strategy taxonomy](../methods/research_strategy_taxonomy.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)
- [mature-field exploration gap](../mechanisms/mature_field_exploration_gap.md)
- [interdisciplinarity dimensions](interdisciplinarity_dimensions.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `consolidation_bridge_preference_ratio`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: consolidation-over-bridge bias; local-focus strategy ratio; bridge avoidance ratio; within-cluster preference ratio
