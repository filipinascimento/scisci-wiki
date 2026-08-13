# Hot-streak baseline-gain scaling

## Summary

Hot-streak baseline-gain scaling measures how the fitted gain from a hot streak relates to an individual's baseline performance level.

## Canonical Form

- Unit of analysis: career, fitted baseline performance, fitted hot-streak performance, gain parameter, or domain.
- Typical representation: `GammaH` versus `Gamma0` relationship, `DeltaGamma = GammaH - Gamma0`, binned gain curve, or domain-specific scaling plot.
- Measurement target: whether elevated-performance intervals add similar absolute gains across careers or scale with baseline status.
- Empirical signature: hot-streak magnitude is related to baseline performance, with incremental gain patterns that differ from ordinary productivity or career-length metrics.

## Uses in Science of Science

- Adds a parameter-level measure to [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md).
- Complements [hot-streak metric orthogonality](../validations/hot_streak_metric_orthogonality.md) by asking what fitted hot-streak parameters reveal beyond ordinary metrics.
- Supports comparisons between [hot streaks](../mechanisms/hot_streaks.md), [individual Q parameter](individual_q_parameter.md), and baseline career-impact heterogeneity.
- Helps evaluate whether hot-streak models imply proportional, additive, or diminishing gains.

## Operationalization

- Fit baseline performance `Gamma0` and hot-streak performance `GammaH` for each eligible career.
- Compute gain as `DeltaGamma` or a ratio such as `GammaH / Gamma0`.
- Plot gain against baseline performance by domain and career subgroup.
- Test whether gain scaling remains after controlling for career length, productivity, and impact-proxy scale.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) fits individual-specific baseline and hot-streak performance parameters across artists, directors, and scientists.
- The paper's extended results compare `GammaH` and `Gamma0` and examine the relationship between hot-streak gain and baseline performance.
- This supports treating hot-streak magnitude as an analyzable parameter, not only as a binary elevated-state interval.

## Caveats

- Parameter magnitudes are domain-specific because auction prices, ratings, and citations use different scales.
- Fitted gains depend on career inclusion filters, impact transformations, and the number of hot streaks allowed.
- Scaling patterns are descriptive unless linked to causal mechanisms or external interventions.

## Links

- [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md)
- [hot-streak metric orthogonality](../validations/hot_streak_metric_orthogonality.md)
- [hot streaks](../mechanisms/hot_streaks.md)
- [individual Q parameter](individual_q_parameter.md)
- [hot-streak duration distribution](hot_streak_duration_distribution.md)
- [domain-specific impact proxy alignment](../methods/domain_specific_impact_proxy_alignment.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; WoS: unknown]

## Metadata

- Concept ID: `hot_streak_baseline_gain_scaling`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2018) (2018)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: GammaH baseline scaling; hot-streak gain scaling; baseline-gain relation; DeltaGamma scaling
