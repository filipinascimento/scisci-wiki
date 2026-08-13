# Hot-streak duration distribution

## Summary

Hot-streak duration distribution measures how long fitted elevated-impact intervals last within careers.

## Canonical Form

- Unit of analysis: career, fitted hot-streak interval, onset, end, duration, or domain.
- Typical representation: distribution of `tauH = t_down - t_up`, often stratified by domain or career-stage onset.
- Measurement target: temporal scale of elevated-impact states relative to ordinary career length.
- Empirical signature: hot streaks occupy a localized interval that is shorter than the typical observed career.

## Uses in Science of Science

- Provides the temporal-scale measure for [hot streaks](../mechanisms/hot_streaks.md).
- Complements [hot-streak random-onset test](../validations/hot_streak_random_onset_test.md) by separating when hot streaks start from how long they last.
- Helps parameterize the [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md) and [hot-streak collective impact decomposition](../methods/hot_streak_collective_impact_decomposition.md).
- Supports evaluation caveats for career-stage assessment: a short interval can dominate long-term impact without implying permanent high performance.

## Operationalization

- Fit hot-streak onset and end for each career.
- Compute elapsed time or output-count duration between `t_up` and `t_down`.
- Estimate duration distributions by domain, career length, and onset stage.
- Compare duration with total career length and with randomized or alternative model intervals.
- Report whether duration is measured in calendar years, work counts, or both.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) estimates hot-streak duration as the interval between fitted onset and end.
- The paper reports duration distributions for artists, directors, and scientists, with peaks around 5.7 years, 5.2 years, and 3.7 years respectively.
- Liu et al. state that hot streaks are considerably shorter than the typical career lengths recorded in their database.
- The paper reports that duration is largely independent of whether the hot streak occurs early, in the middle, or late in a career.
- Extended analyses also represent hot-streak duration as a fraction of total career length.

## Caveats

- Duration estimates depend on the fitted model and allowed number of hot streaks.
- Publication and citation lags can make scientific hot-streak timing differ from the underlying research process.
- Calendar-year durations are not directly comparable with output-count durations when productivity varies strongly.

## Links

- [hot streaks](../mechanisms/hot_streaks.md)
- [hot-streak onset detection](hot_streak_onset_detection.md)
- [hot-streak random-onset test](../validations/hot_streak_random_onset_test.md)
- [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md)
- [hot-streak collective impact decomposition](../methods/hot_streak_collective_impact_decomposition.md)
- [single-hot-streak uniqueness](../validations/single_hot_streak_uniqueness.md)
- [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; SciSciNet: W2808505390; WoS: unknown]

## Metadata

- Concept ID: `hot_streak_duration_distribution`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2018) (2018)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: hot-streak length distribution; tauH distribution; career burst duration; elevated-impact interval length
