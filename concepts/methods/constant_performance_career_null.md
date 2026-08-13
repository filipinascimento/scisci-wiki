# Constant-performance career null

## Summary

The constant-performance career null models each individual's works as draws from a fixed personal impact distribution, testing whether temporal clustering of top works requires a time-varying performance state.

## Canonical Form

- Unit of analysis: career sequence, work impact value, individual baseline performance, null impact draw, or simulated career.
- Typical representation: fixed `Gamma_i` distribution, baseline-only career simulation, random top-hit timing, or null colocation matrix.
- Method target: separate random placement of high-impact works from temporal dependence among high-impact works.
- Empirical signature: the null can reproduce random top-hit positions but fails to reproduce clustered top-hit colocation and long high-impact streaks.

## Uses in Science of Science

- Provides the baseline contrast for [hot-streak performance-state model](hot_streak_performance_state_model.md).
- Connects [random impact rule](../mechanisms/random_impact_rule.md) with [within-career impact shuffle null](../validations/within_career_impact_shuffle_null.md).
- Supplies a reusable null for career-sequence studies using [top-hit colocation matrix](../representations/top_hit_colocation_matrix.md) and [longest high-impact streak excess](../validations/longest_high_impact_streak_excess.md).
- Helps show that random top-hit timing and clustered top-hit proximity can coexist.

## Operationalization

- Assign each individual a fixed impact distribution estimated from their observed outputs.
- Simulate ordered careers by drawing work impacts from that fixed distribution without a special elevated interval.
- Compare simulated and empirical top-hit positions, top-hit distances, colocation matrices, and longest high-impact runs.
- Use the null before adding time-varying performance states or mechanistic explanations.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) starts with a null model in which each individual's work quality is drawn from a fixed distribution.
- The paper reports that this null is consistent with the random placement of the highest-impact work within a career.
- Liu et al. then show that the same null fails to capture temporal correlations among the top works, motivating the hot-streak performance-state model.

## Caveats

- The null abstracts away collaboration changes, topic shifts, career stage, venue selection, and productivity timing.
- A failure of the null supports time-varying structure but does not identify the causal source of that structure.
- The estimated baseline distribution depends on impact proxy and career inclusion rules.

## Links

- [hot-streak performance-state model](hot_streak_performance_state_model.md)
- [random impact rule](../mechanisms/random_impact_rule.md)
- [within-career impact shuffle null](../validations/within_career_impact_shuffle_null.md)
- [top-hit colocation matrix](../representations/top_hit_colocation_matrix.md)
- [longest high-impact streak excess](../validations/longest_high_impact_streak_excess.md)
- [hot-streak alternative-dynamics benchmark](../validations/hot_streak_alternative_dynamics_benchmark.md)
- [hot streaks](../mechanisms/hot_streaks.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; WoS: unknown]

## Metadata

- Concept ID: `constant_performance_career_null`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2018) (2018)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: fixed-performance career null; baseline-only career model; constant Gamma null; random impact career baseline
