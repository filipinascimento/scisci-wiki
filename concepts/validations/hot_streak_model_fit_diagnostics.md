# Hot-streak model fit diagnostics

## Summary

Hot-streak model fit diagnostics evaluate whether hot-streak-aware career models better capture observed career-impact trajectories than baseline or null models after accounting for uncertainty and model complexity.

## Canonical Form

- Unit of analysis: scientist career, cumulative impact curve, fitted model, null model, error envelope, or model-comparison statistic.
- Typical representation: prediction-envelope coverage, mean absolute percentage error, Bayesian information criterion, or observed-versus-fitted trajectory.
- Validation target: determine whether the added hot-streak terms improve fit beyond a simpler career-impact model.
- Empirical signature: hot-streak-aware models produce higher envelope coverage, lower prediction error, and lower complexity-penalized information criteria than null models.

## Uses in Science of Science

- Validates [hot-streak collective impact decomposition](../methods/hot_streak_collective_impact_decomposition.md) as more than a descriptive curve.
- Provides model-comparison evidence for the [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md).
- Complements [hot-streak alternative-dynamics benchmark](hot_streak_alternative_dynamics_benchmark.md), which compares different temporal shapes and Markovian hypotheses.
- Links career-dynamics modeling to [long-term citation prediction](../methods/long_term_citation_prediction.md) and [hot-streak impact prediction bias](hot_streak_impact_prediction_bias.md).

## Operationalization

- Fit a hot-streak-aware cumulative-impact model and a baseline or null model to each career.
- Simulate predicted career-impact trajectories and construct uncertainty envelopes.
- Measure the fraction of observed cumulative impact inside the prediction envelope.
- Compare prediction errors using measures such as MAPE.
- Penalize extra parameters using information criteria such as BIC.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) simulates cumulative impact trajectories for 1,000 realizations per individual and constructs one-standard-deviation uncertainty envelopes.
- The paper reports that most career trajectories are well captured within the hot-streak model's predicted envelopes.
- Liu et al. compare mean absolute percentage error between the hot-streak model and a null model and report better performance for the hot-streak model.
- The paper also uses Bayesian information criterion to penalize model complexity and finds systematically smaller BIC values for the hot-streak model.
- Improvement is especially pronounced for careers with early-onset hot streaks.

## Caveats

- Better fit does not identify the cause of the elevated-impact interval.
- MAPE and envelope coverage can favor models differently, so diagnostics should be reported together.
- BIC comparisons depend on the likelihood specification, parameter count, and fitted sample.
- Fit diagnostics for cumulative citations inherit citation-window, author-disambiguation, and field-growth biases.

## Links

- [hot-streak collective impact decomposition](../methods/hot_streak_collective_impact_decomposition.md)
- [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md)
- [hot-streak alternative-dynamics benchmark](hot_streak_alternative_dynamics_benchmark.md)
- [hot-streak impact prediction bias](hot_streak_impact_prediction_bias.md)
- [long-term citation prediction](../methods/long_term_citation_prediction.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [paper fitness](../measures/paper_fitness.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; SciSciNet: W2808505390; WoS: unknown]

## Metadata

- Concept ID: `hot_streak_model_fit_diagnostics`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2018) (2018)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: hot-streak BIC check; hot-streak MAPE validation; career-impact envelope coverage; hot-streak model diagnostics
