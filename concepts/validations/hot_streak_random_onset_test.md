# Hot-streak random-onset test

## Summary

Hot-streak random-onset tests evaluate whether the start of a fitted hot streak is distributed randomly across career sequence positions.

## Canonical Form

- Unit of analysis: individual career, hot-streak onset, ordered work index, normalized career position, or domain-specific career sequence.
- Typical representation: onset-position distribution compared with a uniform or random-work baseline.
- Validation target: determine whether hot streak timing is tied to early-, middle-, or late-career position.
- Empirical signature: fitted onsets are broadly distributed across the career sequence rather than concentrated at a specific career stage.

## Uses in Science of Science

- Reconciles [hot streaks](../mechanisms/hot_streaks.md) with the [random impact rule](../mechanisms/random_impact_rule.md): top works cluster, but the cluster can start at a random career position.
- Supplies a caveat for early-career evaluation and career-stage prediction.
- Provides a validation layer for [hot-streak onset detection](../measures/hot_streak_onset_detection.md).
- Helps separate temporary elevated-impact intervals from deterministic age-achievement curves.

## Operationalization

- Fit hot-streak onset for each career using the [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md) or another documented model.
- Convert onset to a normalized sequence position or career-stage bin.
- Compare the onset distribution with random-work or uniform baselines.
- Repeat by domain, career-length stratum, and number of allowed hot streaks.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) estimates the career position of the work produced when a hot streak starts.
- The paper reports that hot-streak onset is randomly distributed within the ordered career sequence for artists, film directors, and scientists.
- Liu et al. use this result to explain why the highest-impact work can still appear randomly in the career sequence even though top works cluster in a hot-streak interval.
- The random-onset result is paired with evidence that hot streaks are shorter than typical careers.

## Caveats

- Random onset does not prove that onset has no causes; it means career position alone does not explain timing.
- Onset estimates depend on the fitted model, impact measure, and career-boundary rules.
- Calendar age, institutional context, collaboration, or topic transitions may still influence onset even when sequence position appears random.

## Links

- [hot streaks](../mechanisms/hot_streaks.md)
- [hot-streak onset detection](../measures/hot_streak_onset_detection.md)
- [random impact rule](../mechanisms/random_impact_rule.md)
- [highest-impact sequence position](../measures/highest_impact_sequence_position.md)
- [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md)
- [hot-streak productivity invariance](hot_streak_productivity_invariance.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [lagging indicator prediction limits](lagging_indicator_prediction_limits.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; WoS: unknown]

## Metadata

- Concept ID: `hot_streak_random_onset_test`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2018) (2018)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: random hot-streak onset; onset-position uniformity test; random career-position onset; hot-streak timing null
