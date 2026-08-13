# Hot-streak collective impact decomposition

## Summary

Hot-streak collective impact decomposition separates a scientist's cumulative career impact into baseline impact and the additional contribution of a fitted hot-streak interval.

## Canonical Form

- Unit of analysis: scientist career, paper citation trajectory, cumulative career impact, baseline impact term, or hot-streak contribution term.
- Typical representation: cumulative impact curve `g(t) = g0(t) + delta_g(t)` with parameters for baseline performance, hot-streak magnitude, and hot-streak timing.
- Method target: estimate how temporary elevated-impact states alter long-term career impact.
- Empirical signature: a model with hot-streak timing and magnitude better captures cumulative career impact than a baseline-only model.

## Uses in Science of Science

- Extends [hot-streak performance-state model](hot_streak_performance_state_model.md) from sequence-level clustering to long-term citation accumulation.
- Connects [hot streaks](../mechanisms/hot_streaks.md) to [ultimate citation impact](../measures/ultimate_citation_impact.md) and [long-term citation prediction](long_term_citation_prediction.md).
- Makes explicit how ignoring future or past hot streaks can overestimate or underestimate career trajectories.
- Provides a model-based warning for evaluation systems that extrapolate from early cumulative impact.
- Uses [hot-streak model fit diagnostics](../validations/hot_streak_model_fit_diagnostics.md) to check envelope coverage, error, and complexity-penalized fit.

## Operationalization

- Fit baseline and hot-streak performance parameters for an individual's publication sequence.
- Combine those parameters with a paper-level citation trajectory model.
- Rearrange or control productivity when the goal is to isolate impact dynamics from changing publication rate.
- Decompose cumulative impact into a no-hot-streak term and an incremental hot-streak term.
- Evaluate model accuracy with uncertainty envelopes, mean absolute percentage error, and complexity-penalized fit.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) focuses on scientific careers and defines collective impact as the total citations over time collected by all papers published by an individual.
- The paper combines the hot-streak model with a citation-dynamics model from Wang et al. (2013).
- Liu et al. derive a decomposition in which baseline impact `g0(t)` captures the career without a hot streak, while `delta_g(t)` captures the timing and magnitude of the hot-streak contribution.
- The methods report that hot-streak models outperform null models using prediction envelopes, mean absolute percentage error, and Bayesian information criterion.

## Caveats

- The decomposition is model-based and depends on assumed paper citation-life-cycle parameters.
- Rearranging productivity to a constant rate isolates impact dynamics but abstracts away real publication-timing variation.
- A better cumulative-impact fit does not identify the social or cognitive cause of the hot streak.

## Links

- [hot streaks](../mechanisms/hot_streaks.md)
- [hot-streak performance-state model](hot_streak_performance_state_model.md)
- [hot-streak impact prediction bias](../validations/hot_streak_impact_prediction_bias.md)
- [hot-streak model fit diagnostics](../validations/hot_streak_model_fit_diagnostics.md)
- [citation trajectory models](citation_trajectory_models.md)
- [ultimate citation impact](../measures/ultimate_citation_impact.md)
- [long-term citation prediction](long_term_citation_prediction.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [paper fitness](../measures/paper_fitness.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; WoS: unknown]
- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]

## Metadata

- Concept ID: `hot_streak_collective_impact_decomposition`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2018) (2018)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: baseline hot-streak impact decomposition; g(t) hot-streak decomposition; collective career impact decomposition; hot-streak citation trajectory model
