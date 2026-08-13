# Post-move citation-change score

## Summary

Post-move citation-change score measures how a scientist's paper impact changes after an institutional move, normalized against the scientist's own pre- and post-move citation distribution.

## Canonical Form

- Unit of analysis: scientist move, pre-move paper set, post-move paper set, institution rank transition, or career stage.
- Typical representation: normalized citation-change statistic such as `Dc*`.
- Measurement target: whether papers after a move receive higher or lower citation impact than papers before the move.
- Empirical signature: score distributions differ by rank direction, destination type, or career stage.

## Uses in Science of Science

- Supplies the outcome measure for testing whether [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md) is associated with performance changes.
- Helps separate mobility selection from post-move environment effects when paired with pre-move controls.
- Complements [mobile scholar citation premium](mobile_scholar_citation_premium.md) by measuring within-person change around a specific move.
- Provides a quantitative bridge between affiliation trajectories and [scientific career impact](../mechanisms/scientific_career_impact.md).
- Feeds the [rank-difference performance curve](rank_difference_performance_curve.md) and [performance-conditioned mobility stratification](../validations/performance_conditioned_mobility_stratification.md).

## Operationalization

- For each move, collect papers published before and after the transition.
- Measure each paper's citations within a fixed window and compute average pre- and post-move citation impact.
- Normalize the difference using a within-move or within-author citation variability term, preserving the move timing when constructing the random expectation.
- Stratify by rank direction, institution rank group, career age, field, and publication window.
- Relate the score to origin-destination rank gaps when estimating a rank-difference performance curve.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) defines `Dc*` as the normalized difference between average citations for papers published after and before an institutional move.
- The paper interprets positive `Dc*` as improved post-move scientific performance and negative `Dc*` as a decline.
- Deville et al. report that moving to lower-ranked institutions is associated with average performance decline, while moving into elite institutions shows no average performance gain.
- The same paper conditions rank-transition likelihood matrices on positive versus negative `Dc*` and finds that stratified mobility patterns remain robust.

## Caveats

- Citation changes around a move are observational and confounded by selection, career age, coauthors, topic shifts, and publication lag.
- Fixed citation windows can miss delayed recognition or field-specific citation timing.
- Internal database citation counts may understate impact when external citations are missing.

## Links

- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)
- [mobile scholar citation premium](mobile_scholar_citation_premium.md)
- [career move timing distribution](career_move_timing_distribution.md)
- [institutional rank transition likelihood](institutional_rank_transition_likelihood.md)
- [rank-difference performance curve](rank_difference_performance_curve.md)
- [performance-conditioned mobility stratification](../validations/performance_conditioned_mobility_stratification.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)
- [citation impact indicators](citation_impact_indicators.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; WoS: unknown]

## Metadata

- Concept ID: `post_move_citation_change_score`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: Dc* mobility score; normalized post-move impact change; pre-post move citation change; mobility performance-change score
