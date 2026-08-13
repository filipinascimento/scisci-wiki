# Hot-streak alternative-dynamics benchmark

## Summary

Hot-streak alternative-dynamics benchmarks compare the fitted hot-streak model against other plausible temporal-performance models such as gradual ramps, peaked curves, or Markovian dependence.

## Canonical Form

- Unit of analysis: career sequence, top-hit ordering, candidate temporal-performance function, model family, or goodness-of-fit criterion.
- Typical representation: model predictions compared with top-hit order distributions, colocation matrices, run-length distributions, or BIC scores.
- Validation target: determine whether simpler or alternative dynamics can reproduce observed career hot-streak signatures.
- Empirical signature: alternative models fail to match the observed relative ordering and clustering of top hits as well as the hot-streak model.

## Uses in Science of Science

- Strengthens [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md) by testing competing explanations.
- Distinguishes a localized elevated state from gradual career ramps, symmetric peaks, repeated-collaboration dynamics, and adjacent-work autocorrelation.
- Provides a benchmark pattern for model comparison in [scientific career impact dynamics](../mechanisms/scientific_career_impact.md).
- Prevents overinterpreting any single visual clustering pattern as sufficient model evidence.
- Complements [hot-streak model fit diagnostics](hot_streak_model_fit_diagnostics.md), which compares cumulative-impact fit against a null model using error and complexity penalties.

## Operationalization

- Define plausible alternative dynamics, such as sudden-onset gradual-decline trapezoids, gradual-rise gradual-decline trapezoids, inverted-U curves, tent functions, or sharp-cutoff opportunity windows.
- Generate or fit careers under each alternative using real productivity profiles.
- Compare predicted top-hit ordering, top-hit colocation, and longest-streak distributions with empirical patterns.
- Penalize model complexity using criteria such as BIC.
- Include Markovian variants that add adjacent-work impact correlations or hidden states.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) tests alternative temporal-performance hypotheses, including trapezoid, inverted-U, tent, and sharp-cutoff shapes.
- The paper compares these models against empirical patterns in the relative order of the top six hits within a career.
- Liu et al. report that the hot-streak model is the only model whose predictions are consistent with real careers across artists, directors, and scientists.
- The paper also tests Markovian hypotheses with adjacent-work correlations and hidden states, finding that these variants fail to capture observed hit colocation and longest-streak patterns.

## Caveats

- Rejecting benchmark alternatives does not prove the true causal origin of hot streaks.
- Model rankings depend on the chosen signatures, impact measure, and career inclusion thresholds.
- A good phenomenological fit can coexist with several unobserved causal mechanisms.

## Links

- [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md)
- [hot streaks](../mechanisms/hot_streaks.md)
- [top-hit colocation matrix](../representations/top_hit_colocation_matrix.md)
- [longest high-impact streak excess](longest_high_impact_streak_excess.md)
- [hot-streak productivity invariance](hot_streak_productivity_invariance.md)
- [hot-streak model fit diagnostics](hot_streak_model_fit_diagnostics.md)
- [random impact rule](../mechanisms/random_impact_rule.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [prediction-postdiction boundary](prediction_postdiction_boundary.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; WoS: unknown]

## Metadata

- Concept ID: `hot_streak_alternative_dynamics_benchmark`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2018) (2018)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: hot-streak model benchmark; alternative career dynamics test; Markov hot-streak benchmark; temporal-performance model comparison
