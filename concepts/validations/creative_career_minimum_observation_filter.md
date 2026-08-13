# Creative career minimum-observation filter

## Summary

Creative career minimum-observation filter is the sample-construction rule that hot-streak detection requires enough works and enough career duration to estimate sequence-level clustering reliably.

## Canonical Form

- Unit of analysis: individual career, work count, career length, inclusion threshold, domain-specific corpus, or eligible career panel.
- Typical representation: minimum works threshold, minimum years threshold, domain eligibility table, or sample-denominator filter.
- Validation target: ensure career-sequence models are estimated on careers long enough to reveal top-hit timing and streak structure.
- Empirical signature: the analytic sample excludes short or sparse careers that cannot support hot-streak detection.

## Uses in Science of Science

- Adds denominator transparency to [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md).
- Complements [career length selection boundary](career_length_selection_boundary.md) and [domain-specific impact proxy alignment](../methods/domain_specific_impact_proxy_alignment.md).
- Provides a sample-quality prerequisite for [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md).
- Helps compare hot-streak findings across art, film, and science without hiding domain-specific inclusion thresholds.

## Operationalization

- Define the output unit for each domain and count career outputs in chronological order.
- Apply minimum work-count and career-duration thresholds before estimating top-hit clustering or hot-streak parameters.
- Report the number of included and excluded individuals by domain.
- Test robustness to stricter career-length thresholds when possible.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) reports domain-specific career inclusion rules.
- The paper analyzes artists and film directors with at least 15 works and at least 10 years of career length, and scientists with at least 15 papers and at least 20 years of career length.
- These thresholds make the career-sequence statistics interpretable but also define the population to which hot-streak estimates apply.

## Caveats

- Minimum-observation filters can select for productive, long-lived, or well-documented careers.
- Excluded short careers may have meaningful bursts that cannot be measured with the same sequence statistics.
- Domain-specific thresholds complicate direct comparison of prevalence across domains.

## Links

- [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md)
- [career length selection boundary](career_length_selection_boundary.md)
- [domain-specific impact proxy alignment](../methods/domain_specific_impact_proxy_alignment.md)
- [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md)
- [hot streaks](../mechanisms/hot_streaks.md)
- [top-hit relative-order randomness](top_hit_relative_order_randomness.md)
- [longest high-impact streak excess](longest_high_impact_streak_excess.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; WoS: unknown]

## Metadata

- Concept ID: `creative_career_minimum_observation_filter`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2018) (2018)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: hot-streak sample eligibility; career minimum works filter; minimum career observation rule; creative-career denominator filter
