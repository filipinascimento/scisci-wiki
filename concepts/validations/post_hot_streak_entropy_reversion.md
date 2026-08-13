# Post-hot-streak entropy reversion

## Summary

Post-hot-streak entropy reversion is the finding that topic or style entropy returns to randomized-career levels after a hot streak ends.

## Canonical Form

- Unit of analysis: career, post-hot-streak window, entropy time series, randomized-career baseline, or domain.
- Typical representation: entropy aligned around hot-streak end and compared with randomized-end baselines.
- Validation target: test whether exploration or exploitation signatures persist after the high-impact interval.
- Empirical signature: entropy after hot-streak end is statistically indistinguishable from randomized-career entropy.

## Uses in Science of Science

- Bounds [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md) as an onset-specific pattern rather than a permanent career state.
- Provides a post-event check for [career topic/style entropy](../measures/career_topic_style_entropy.md).
- Helps distinguish hot-streak exploitation from long-term specialization.
- Adds a lifecycle endpoint to [hot-streak onset detection](../measures/hot_streak_onset_detection.md).

## Operationalization

- Estimate hot-streak end for each career.
- Compute entropy in post-hot-streak windows and align careers by end time.
- Construct randomized-career baselines using random hot-streak timings or comparable nulls.
- Compare observed post-end entropy with randomized distributions using z-scores or distributional tests.
- Report whether reversion holds across domains and window sizes.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2021) measures average entropy after the end of hot streaks across artists, directors, and scientists.
- The paper reports that post-hot-streak entropy is statistically indistinguishable from randomized-career entropy.
- Liu et al. also align careers by hot-streak end and again find a lack of difference between real data and the null model.
- The authors interpret this as individuals returning to "normal" after hot streaks end, without exploration or exploitation patterns.

## Caveats

- Reversion in entropy does not mean all effects of the hot streak disappear.
- Post-event windows may be censored for careers ending soon after a hot streak.
- Normalized entropy can return to baseline even if the person remains in a different substantive field.

## Links

- [career topic/style entropy](../measures/career_topic_style_entropy.md)
- [hot-streak entropy randomization baseline](hot_streak_entropy_randomization_baseline.md)
- [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md)
- [hot-streak onset detection](../measures/hot_streak_onset_detection.md)
- [hot streaks](../mechanisms/hot_streaks.md)
- [exploration-exploitation robustness grid](exploration_exploitation_robustness_grid.md)

## References

- Liu, L., Dehmamy, N., Chown, J., Giles, C. L., & Wang, D. (2021). Understanding the onset of hot streaks across artistic, cultural, and scientific careers. *Nature Communications*, 12, 5392. https://doi.org/10.1038/s41467-021-25477-8 [OpenAlex: W3201257425; Dimensions: pub.1141075911; WoS: unknown]

## Metadata

- Concept ID: `post_hot_streak_entropy_reversion`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2021) (2021)
- Latest seen paper: Liu et al. (2021) (2021)
- Primary reference DOI: `10.1038/s41467-021-25477-8`
- OpenAlex ID: `W3201257425`
- Dimensions ID: `pub.1141075911`
- SciSciNet ID: `W3201257425`
- Aliases: post-streak entropy reversion; hot-streak end normalization; post-hot-streak normal phase; entropy return-to-baseline
