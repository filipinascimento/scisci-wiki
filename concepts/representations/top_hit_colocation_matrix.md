# Top-hit colocation matrix

## Summary

Top-hit colocation matrices represent whether an individual's highest-impact works occur near one another in career sequence more often than expected under random placement.

## Canonical Form

- Unit of analysis: individual career, ordered work sequence, highest-impact work, second-highest-impact work, or normalized sequence position.
- Typical representation: joint probability matrix for top-hit positions, often normalized by the product of marginal position probabilities.
- Representation target: reveal temporal clustering among a career's largest hits without first fitting a career-state model.
- Empirical signature: probability mass is overrepresented near the diagonal, showing that top works are closer together than expected by chance.

## Uses in Science of Science

- Provides a visual and statistical bridge between the [random impact rule](../mechanisms/random_impact_rule.md) and [hot streaks](../mechanisms/hot_streaks.md).
- Supplies a diagnostic target for the [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md).
- Helps distinguish random top-hit sequence position from nonrandom temporal clustering among multiple top hits.
- Can be reused for other career-output sequences where top outcomes are ordered over time.
- Has a distance-compressed companion in [top-hit distance enrichment curve](../measures/top_hit_distance_enrichment_curve.md).

## Operationalization

- Rank each person's works by an impact measure such as auction price, film rating, or ten-year citations.
- Record normalized career positions for the top two or top three works.
- Estimate the joint probability of top-hit position pairs.
- Normalize the joint probability by the product of marginal position probabilities.
- Compare the observed matrix with within-career shuffled sequences.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) computes a normalized joint probability for the highest- and second-highest-impact works in each career.
- The paper reports overrepresentation along the diagonal across artists, film directors, and scientists, meaning the top two hits are more likely to colocate than expected from random timing.
- The diagonal pattern disappears when the order of works is shuffled within each career, breaking temporal correlations.
- Liu et al. find similar colocation patterns for other pairs of top works, including highest versus third-highest and second-highest versus third-highest.

## Caveats

- Colocation matrices show temporal clustering, not the cause of the clustering.
- Results depend on career-boundary definitions, impact proxies, and the number of works per career.
- Heavy-tailed impact distributions can make top-hit ranking unstable for short careers or immature citation windows.

## Links

- [hot streaks](../mechanisms/hot_streaks.md)
- [random impact rule](../mechanisms/random_impact_rule.md)
- [highest-impact sequence position](../measures/highest_impact_sequence_position.md)
- [top-hit distance enrichment curve](../measures/top_hit_distance_enrichment_curve.md)
- [within-career impact shuffle null](../validations/within_career_impact_shuffle_null.md)
- [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md)
- [longest high-impact streak excess](../validations/longest_high_impact_streak_excess.md)
- [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; WoS: unknown]

## Metadata

- Concept ID: `top_hit_colocation_matrix`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2018) (2018)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: top-hit joint-position matrix; hit colocation matrix; career top-work colocation; N-star colocation matrix
