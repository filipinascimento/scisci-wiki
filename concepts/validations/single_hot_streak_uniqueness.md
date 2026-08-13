# Single-hot-streak uniqueness

## Summary

Single-hot-streak uniqueness is the empirical pattern that most careers with a detected hot streak are best fit by one elevated-impact interval rather than multiple repeated intervals.

## Canonical Form

- Unit of analysis: individual career, fitted hot-streak count, model selection result, or domain.
- Typical representation: histogram of zero, one, two, or three fitted hot streaks.
- Validation target: determine whether hot streaks are common but usually not repeated many times in the same career.
- Empirical signature: one-hot-streak models dominate among careers where a hot streak is detected, and three-hot-streak cases are rare.

## Uses in Science of Science

- Qualifies [hot streaks](../mechanisms/hot_streaks.md) as a localized career phenomenon rather than a recurring high-output rhythm.
- Constrains [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md) designs by motivating one-streak baselines before adding extra intervals.
- Adds a validation companion to [hot-streak duration distribution](../measures/hot_streak_duration_distribution.md).
- Supports career-assessment caveats: a past hot streak may not imply that another elevated-impact interval is likely.

## Operationalization

- Fit each career under models that allow zero, one, two, or more hot streaks.
- Use consistent model-selection criteria to choose the best hot-streak count.
- Report counts by domain and by inclusion criteria.
- Compare ordinary career metrics for one-streak and multi-streak careers using [hot-streak metric orthogonality](hot_streak_metric_orthogonality.md).
- Test sensitivity to maximum allowed hot streaks and to impact-window choices.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) reports that most artists, film directors, and scientists have at least one hot streak.
- The paper relaxes the fitting algorithm to allow up to three hot streaks with different elevated-performance values.
- Among careers with a hot streak, Liu et al. report that 64% of artists, 80% of directors, and 68% of scientists are best captured by one hot streak only.
- The full text states that second acts are less likely and that more than two hot streaks are rare across all three career domains.
- Extended analyses compare individuals with one or more hot streaks on ordinary performance metrics.

## Caveats

- The result depends on the maximum number of hot streaks allowed and the model-selection criterion.
- Short or censored careers may hide additional elevated intervals.
- A single fitted interval can aggregate multiple causes or projects into one observed impact state.

## Links

- [hot streaks](../mechanisms/hot_streaks.md)
- [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md)
- [hot-streak duration distribution](../measures/hot_streak_duration_distribution.md)
- [hot-streak onset detection](../measures/hot_streak_onset_detection.md)
- [hot-streak model fit diagnostics](hot_streak_model_fit_diagnostics.md)
- [hot-streak metric orthogonality](hot_streak_metric_orthogonality.md)
- [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; SciSciNet: W2808505390; WoS: unknown]

## Metadata

- Concept ID: `single_hot_streak_uniqueness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2018) (2018)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: one-hot-streak careers; hot-streak count uniqueness; second-act rarity; single burst fit
