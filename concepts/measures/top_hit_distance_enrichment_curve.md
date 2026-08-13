# Top-hit distance enrichment curve

## Summary

Top-hit distance enrichment curves measure how much more often a career's highest-impact works occur near one another than expected under shuffled or random placement baselines.

## Canonical Form

- Unit of analysis: individual career, top-hit pair, ordered work sequence, normalized distance, or shuffled career.
- Typical representation: enrichment curve `R(DeltaN/N)` comparing observed top-hit distances with shuffled distances.
- Measurement target: local temporal clustering among top-ranked outputs.
- Empirical signature: enrichment peaks near zero distance and decays as top works are farther apart in the career sequence.

## Uses in Science of Science

- Turns the visual [top-hit colocation matrix](../representations/top_hit_colocation_matrix.md) into a one-dimensional curve for comparing domains and model predictions.
- Provides a direct signature for [hot streaks](../mechanisms/hot_streaks.md) before fitting the [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md).
- Complements [longest high-impact streak excess](../validations/longest_high_impact_streak_excess.md), which uses above-threshold runs rather than top-hit pairs.
- Helps reconcile [random impact rule](../mechanisms/random_impact_rule.md) with local clustering: top works can be randomly placed globally but enriched near each other locally.

## Operationalization

- Rank each individual's works by impact and select top pairs such as first-second, first-third, or second-third.
- Compute the sequence distance between the two top works and normalize by career length.
- Estimate the observed distance distribution across careers.
- Generate a shuffled-career distance distribution by permuting work order within each career.
- Report the observed-to-shuffled ratio as an enrichment curve and compare it with model-generated curves.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) computes the distance between the two highest-impact works in each career and compares real careers with shuffled careers.
- The paper defines an enrichment ratio for top-hit distances and reports a clear peak around zero for artists, directors, and scientists.
- Liu et al. find that the curve is mostly symmetric, meaning the biggest hit is about as likely to appear before the second-biggest hit as after it.
- The same distance-enrichment pattern holds for other top-hit pairs, including highest-third and second-third.
- The hot-streak model reproduces the observed enrichment curves, while shuffled careers do not.

## Caveats

- The curve is a temporal-clustering diagnostic, not a causal explanation.
- Top-hit ranks can be unstable for short careers, immature citation windows, or noisy impact proxies.
- Normalizing by career length makes curves comparable but can hide differences in absolute time between works.

## Links

- [top-hit colocation matrix](../representations/top_hit_colocation_matrix.md)
- [hot streaks](../mechanisms/hot_streaks.md)
- [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md)
- [longest high-impact streak excess](../validations/longest_high_impact_streak_excess.md)
- [within-career impact shuffle null](../validations/within_career_impact_shuffle_null.md)
- [random impact rule](../mechanisms/random_impact_rule.md)
- [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; SciSciNet: W2808505390; WoS: unknown]

## Metadata

- Concept ID: `top_hit_distance_enrichment_curve`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2018) (2018)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: top-hit distance ratio; R DeltaN curve; hit-distance enrichment; top-work proximity curve
