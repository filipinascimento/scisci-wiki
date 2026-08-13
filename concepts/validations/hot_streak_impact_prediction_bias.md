# Hot-streak impact prediction bias

## Summary

Hot-streak impact prediction bias is the forecasting failure that occurs when career-impact models ignore temporary elevated-impact intervals.

## Canonical Form

- Unit of analysis: scientist career, cumulative impact trajectory, prediction horizon, hot-streak onset class, or baseline-only forecast.
- Typical representation: baseline-only prediction versus hot-streak-aware prediction of cumulative career impact.
- Validation target: test whether ignoring hot streaks systematically overestimates or underestimates future impact.
- Empirical signature: late upcoming hot streaks lead to underprediction, while early hot streaks can lead to overprojection if impact is assumed to persist.

## Uses in Science of Science

- Adds a career-dynamics caveat to [long-term citation prediction](../methods/long_term_citation_prediction.md).
- Links [hot streaks](../mechanisms/hot_streaks.md) to practical evaluation risks in hiring, promotion, awards, and funding.
- Provides a validation target for [scientific career impact dynamics](../mechanisms/scientific_career_impact.md) models that use early cumulative impact.
- Complements [lagging indicator prediction limits](lagging_indicator_prediction_limits.md) by showing that career stage and hot-streak timing can mislead forecasts.

## Operationalization

- Fit or compare cumulative-impact forecasts with and without hot-streak terms.
- Stratify by early-, middle-, and late-onset hot streaks.
- Measure prediction error over future career windows.
- Report whether model error is asymmetric for individuals whose hot streaks have not yet occurred versus those whose hot streaks occurred early.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) states that works produced during hot streaks garner substantially more impact and fundamentally drive collective career impact.
- The paper argues that ignoring hot streaks can systematically overestimate or underestimate future career impact.
- In the methods, Liu et al. state that upcoming hot streaks can lead to underestimation, while early-onset hot streaks can produce high impact that may not be sustained unless another hot streak occurs.
- Extended analyses show larger model-improvement over the null for early-onset hot streaks.

## Caveats

- The bias is not a deterministic rule for individual careers; it depends on whether and when a hot streak occurs.
- Forecasting models should not treat fitted hot streaks as causal mechanisms without external evidence.
- Citation accumulation, collaboration, field growth, and author disambiguation can also distort career-impact forecasts.

## Links

- [hot streaks](../mechanisms/hot_streaks.md)
- [hot-streak collective impact decomposition](../methods/hot_streak_collective_impact_decomposition.md)
- [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md)
- [long-term citation prediction](../methods/long_term_citation_prediction.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [prediction-postdiction boundary](prediction_postdiction_boundary.md)
- [lagging indicator prediction limits](lagging_indicator_prediction_limits.md)
- [automated predictive-evaluation safeguards](automated_predictive_evaluation_safeguards.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; WoS: unknown]

## Metadata

- Concept ID: `hot_streak_impact_prediction_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2018) (2018)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: hot-streak forecast bias; career impact underprediction; career impact overprojection; hot-streak-aware prediction error
