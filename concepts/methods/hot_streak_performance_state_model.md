# Hot-streak performance-state model

## Summary

The hot-streak performance-state model represents a career as a baseline impact state interrupted by a temporally localized higher-impact state, with fitted onset, end, baseline, and elevated-performance parameters.

## Canonical Form

- Unit of analysis: individual career, ordered work sequence, impact state, hot-streak interval, or fitted career trajectory.
- Typical representation: baseline performance `Gamma0`, elevated performance `GammaH`, onset `t_up`, end `t_down`, and optional career-impact decomposition.
- Method target: explain temporal clustering of high-impact works without assuming a productivity increase.
- Empirical signature: a simple elevated-state interval reproduces top-hit clustering and long streaks that a constant-performance null misses.

## Uses in Science of Science

- Provides the model behind [hot streaks](../mechanisms/hot_streaks.md) and [hot-streak onset detection](../measures/hot_streak_onset_detection.md).
- Reconciles [random impact rule](../mechanisms/random_impact_rule.md) with high-impact clustering: the hot-streak interval can occur randomly, while top works cluster inside it.
- Supports long-run [scientific career impact dynamics](../mechanisms/scientific_career_impact.md) by decomposing collective impact into baseline and hot-streak contributions.
- Supplies fitted event anchors for [career topic/style entropy](../measures/career_topic_style_entropy.md) and [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md).
- Is validated by [top-hit colocation matrix](../representations/top_hit_colocation_matrix.md), [longest high-impact streak excess](../validations/longest_high_impact_streak_excess.md), and [hot-streak alternative-dynamics benchmark](../validations/hot_streak_alternative_dynamics_benchmark.md).
- Splits additional diagnostics into [hot-streak duration distribution](../measures/hot_streak_duration_distribution.md), [single-hot-streak uniqueness](../validations/single_hot_streak_uniqueness.md), [hot-streak model fit diagnostics](../validations/hot_streak_model_fit_diagnostics.md), and [hot-streak metric orthogonality](../validations/hot_streak_metric_orthogonality.md).
- Adds parameter, null, and denominator motifs: [hot-streak baseline-gain scaling](../measures/hot_streak_baseline_gain_scaling.md), [constant-performance career null](constant_performance_career_null.md), [top-hit relative-order randomness](../validations/top_hit_relative_order_randomness.md), and [creative career minimum-observation filter](../validations/creative_career_minimum_observation_filter.md).
- Uses [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md) to test whether the same model applies beyond science.

## Operationalization

- Assign each career output an impact value such as log auction price, film rating, or ten-year citation count.
- Fit or simulate a constant individual baseline performance and a higher-performance interval.
- Estimate `Gamma0`, `GammaH`, `t_up`, and `t_down` for each career where the model improves fit.
- Compare against a null model in which each individual's work quality is drawn from a fixed distribution across the whole career.
- For scientific careers, combine fitted hot-streak parameters with paper citation-history models to decompose collective career impact into baseline and hot-streak terms.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) starts with a null model in which each individual's work quality is drawn from a fixed distribution, which can reproduce random top-hit timing but fails to capture temporal correlations.
- Liu et al. introduce a model where performance deviates from baseline `Gamma0` at `t_up`, rises to `GammaH`, and later falls back toward baseline at `t_down`.
- The paper reports that adding this simple temporal variation is sufficient to reproduce the empirical patterns in the real cross-domain career data.
- Liu et al. fit the model to real careers to obtain individual-specific `Gamma0`, `GammaH`, `t_up`, and `t_down`.
- For scientific careers, the paper derives collective impact `g(t)` as a baseline term plus a hot-streak contribution driven by hot-streak timing and magnitude.
- The methods report that the hot-streak model outperforms null and alternative dynamics under prediction envelopes, MAPE, BIC, top-hit ordering, and Markovian benchmark checks.
- A residual Liu pass makes the fixed-performance null, gain-scaling parameter check, and top-hit relative-order validation reusable beyond the original model summary.

## Caveats

- The model captures a phenomenological elevated-impact state; it does not identify the true origin of the hot streak.
- Fitted parameters depend on career boundaries, impact measures, citation windows, and the number of hot streaks allowed.
- A better fit than a constant-performance null does not mean all omitted mechanisms are irrelevant.
- Domain-specific impact measures may make parameter magnitudes non-comparable across art, film, and science.

## Links

- [hot streaks](../mechanisms/hot_streaks.md)
- [hot-streak onset detection](../measures/hot_streak_onset_detection.md)
- [hot-streak collective impact decomposition](hot_streak_collective_impact_decomposition.md)
- [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md)
- [domain-specific impact proxy alignment](domain_specific_impact_proxy_alignment.md)
- [hot-streak duration distribution](../measures/hot_streak_duration_distribution.md)
- [hot-streak baseline-gain scaling](../measures/hot_streak_baseline_gain_scaling.md)
- [constant-performance career null](constant_performance_career_null.md)
- [top-hit relative-order randomness](../validations/top_hit_relative_order_randomness.md)
- [creative career minimum-observation filter](../validations/creative_career_minimum_observation_filter.md)
- [single-hot-streak uniqueness](../validations/single_hot_streak_uniqueness.md)
- [top-hit colocation matrix](../representations/top_hit_colocation_matrix.md)
- [top-hit distance enrichment curve](../measures/top_hit_distance_enrichment_curve.md)
- [longest high-impact streak excess](../validations/longest_high_impact_streak_excess.md)
- [hot-streak random-onset test](../validations/hot_streak_random_onset_test.md)
- [hot-streak productivity invariance](../validations/hot_streak_productivity_invariance.md)
- [hot-streak alternative-dynamics benchmark](../validations/hot_streak_alternative_dynamics_benchmark.md)
- [hot-streak model fit diagnostics](../validations/hot_streak_model_fit_diagnostics.md)
- [hot-streak metric orthogonality](../validations/hot_streak_metric_orthogonality.md)
- [hot-streak impact prediction bias](../validations/hot_streak_impact_prediction_bias.md)
- [career topic/style entropy](../measures/career_topic_style_entropy.md)
- [exploration-exploitation sequence nulls](../validations/exploration_exploitation_sequence_nulls.md)
- [random impact rule](../mechanisms/random_impact_rule.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [citation trajectory models](citation_trajectory_models.md)
- [ultimate citation impact](../measures/ultimate_citation_impact.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; WoS: unknown]
- Liu, L., Dehmamy, N., Chown, J., Giles, C. L., & Wang, D. (2021). Understanding the onset of hot streaks across artistic, cultural, and scientific careers. *Nature Communications*, 12, 5392. https://doi.org/10.1038/s41467-021-25477-8 [OpenAlex: W3201257425; Dimensions: pub.1141075911; WoS: unknown]

## Metadata

- Concept ID: `hot_streak_performance_state_model`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2021) (2021)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: hot-streak model; elevated performance state; GammaH career model; baseline hot-streak decomposition
