# Longest high-impact streak excess

## Summary

Longest high-impact streak excess validates whether real careers contain longer runs of above-threshold work than shuffled career sequences.

## Canonical Form

- Unit of analysis: individual career, ordered work sequence, above-threshold work, longest run length, or shuffled-career baseline.
- Typical representation: observed longest-streak distribution compared with shuffled longest-streak distribution.
- Validation target: test whether high-impact works cluster into contiguous runs beyond random ordering.
- Empirical signature: the real longest-streak distribution has a heavier tail than the shuffled distribution.

## Uses in Science of Science

- Provides a nonparametric validation for [hot streaks](../mechanisms/hot_streaks.md) before fitting a parametric state model.
- Complements [top-hit colocation matrix](../representations/top_hit_colocation_matrix.md) by testing runs of above-threshold works rather than only top-ranked pairs.
- Supplies a robustness check for [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md).
- Can be repeated under different impact thresholds and career-length restrictions.

## Operationalization

- Define an impact threshold within each career, such as median impact, mean impact, or top-ten-percent impact.
- Mark each career work as above or below threshold.
- Measure the longest consecutive run of above-threshold works.
- Shuffle work order within each career while preserving the same impact values, then recompute longest runs.
- Compare observed and shuffled distributions, and repeat under threshold and career-length sensitivity checks.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) measures the longest streak of consecutive works whose impact exceeds the career median.
- The paper reports that real careers have longer-tailed longest-streak distributions than shuffled careers across artists, directors, and scientists.
- Extended analyses repeat the test under mean-impact and top-ten-percent thresholds and under different career-length restrictions.
- The same patterns hold for artists from different eras, supporting the robustness of the streak-excess signature.

## Caveats

- A long run of above-threshold work does not by itself estimate hot-streak onset, duration, or magnitude.
- Threshold choice changes the run-length distribution and should be reported.
- Shuffling validates temporal dependence but does not identify the mechanism that produced it.

## Links

- [hot streaks](../mechanisms/hot_streaks.md)
- [top-hit colocation matrix](../representations/top_hit_colocation_matrix.md)
- [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md)
- [within-career impact shuffle null](within_career_impact_shuffle_null.md)
- [random impact rule](../mechanisms/random_impact_rule.md)
- [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md)
- [hot-streak alternative-dynamics benchmark](hot_streak_alternative_dynamics_benchmark.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; WoS: unknown]

## Metadata

- Concept ID: `longest_high_impact_streak_excess`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2018) (2018)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: longest streak excess; high-impact run-length validation; career streak shuffle test; above-threshold streak tail
