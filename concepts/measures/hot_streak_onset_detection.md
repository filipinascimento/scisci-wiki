# Hot-streak onset detection

## Summary

Hot-streak onset detection estimates when a career enters a temporally localized high-impact state, making it possible to align pre-onset and post-onset career behavior.

## Canonical Form

- Unit of analysis: scientist, artist, director, career sequence, work index, or calendar year.
- Typical representation: fitted career timeline with baseline impact, elevated impact, onset, and end parameters.
- Mechanism or measurement target: the beginning of a high-impact interval within a career.
- Empirical signature: a contiguous interval has substantially higher impact than the individual's baseline and improves fit relative to random-impact nulls.

## Uses in Science of Science

- Provides the event anchor for studying [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md).
- Lets [hot streaks](../mechanisms/hot_streaks.md) be studied as timed career events rather than only as descriptive clusters of top works.
- Supports evaluation questions about early-career, mid-career, and late-career potential without assuming that high-impact timing is deterministic.
- Provides the event anchor for [hot-streak random-onset test](../validations/hot_streak_random_onset_test.md), [hot-streak productivity invariance](../validations/hot_streak_productivity_invariance.md), and [hot-streak impact prediction bias](../validations/hot_streak_impact_prediction_bias.md).
- Pairs onset estimates with [hot-streak duration distribution](hot_streak_duration_distribution.md) to define the full elevated-impact interval.

## Operationalization

- Build an ordered career sequence and assign each work an impact measure such as fixed-window citations.
- Fit a model with individual baseline impact, elevated hot-streak impact, onset, and end parameters, as in the [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md).
- Estimate the work position or calendar date at which the elevated state begins.
- Compare onset positions, durations, and productivity during the interval against randomized career baselines.
- Use the estimated onset to align content-space, entropy, collaboration, or funding histories around the transition.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) fits hot-streak parameters for real careers, including individual baseline impact, elevated hot-streak impact, onset, and end.
- Liu et al. find that the onset position is randomly distributed within career sequences across artists, film directors, and scientists.
- The same paper reports that hot streaks are shorter than typical careers and that productivity does not detectably increase during the hot-streak interval.
- Liu et al. also use onset timing to show how future hot streaks can lead to underestimation and early hot streaks can lead to overprojection of career impact.
- Verified full-text evidence from Liu et al. (2021) uses onset estimates to align entropy windows and finds exploration before onset followed by exploitation after onset.

## Caveats

- Onset estimates depend on career-boundary definitions, impact windows, author disambiguation, and the number of hot streaks allowed in the model.
- Random onset in observed careers does not mean onset is causeless; it means timing is not explained by career position alone.
- Citation-based onset may lag the cognitive or organizational change that produced the work.

## Links

- [hot streaks](../mechanisms/hot_streaks.md)
- [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md)
- [hot-streak duration distribution](hot_streak_duration_distribution.md)
- [hot-streak random-onset test](../validations/hot_streak_random_onset_test.md)
- [hot-streak productivity invariance](../validations/hot_streak_productivity_invariance.md)
- [hot-streak impact prediction bias](../validations/hot_streak_impact_prediction_bias.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md)
- [career topic/style entropy](career_topic_style_entropy.md)
- [exploration-exploitation sequence nulls](../validations/exploration_exploitation_sequence_nulls.md)
- [career work embedding trajectories](../methods/career_work_embedding_trajectories.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [paper fitness](paper_fitness.md)
- [citation impact indicators](citation_impact_indicators.md)
- [field normalized citation impact](field_normalized_citation_impact.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; WoS: unknown]
- Liu, L., Dehmamy, N., Chown, J., Giles, C. L., & Wang, D. (2021). Understanding the onset of hot streaks across artistic, cultural, and scientific careers. *Nature Communications*, 12, 5392. https://doi.org/10.1038/s41467-021-25477-8 [OpenAlex: W3201257425; Dimensions: pub.1141075911; WoS: unknown]
- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `hot_streak_onset_detection`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2021) (2021)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: hot streak onset; career burst timing; impact burst window; onset window
