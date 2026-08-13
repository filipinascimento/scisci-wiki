# Institutional rank transition likelihood

## Summary

Institutional rank transition likelihood measures whether observed career moves between origin and destination institution ranks occur more or less often than expected after accounting for origin and destination activity.

## Canonical Form

- Unit of analysis: institutional move, origin rank, destination rank, rank bin, or origin-destination transition.
- Typical representation: observed transition matrix `P(i,j)`, null transition matrix, and likelihood ratio `M(i,j)`.
- Measurement target: excess or suppressed mobility between institutional rank strata.
- Empirical signature: within-stratum transitions have `M(i,j) > 1`, while cross-stratum transitions have `M(i,j) < 1`.

## Uses in Science of Science

- Operationalizes [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md).
- Provides a rank-aware complement to [career move count distribution](career_move_count_distribution.md) and [career mobility distance decay](career_mobility_distance_decay.md).
- Helps compare mobility constraints across disciplines, cohorts, countries, and rank definitions.
- Supports analyses of whether career moves preserve, disrupt, or reproduce [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md).
- Depends on a documented [institution citation-rank proxy](institution_citation_rank_proxy.md) and is validated against a [rank-transition shuffle null](../validations/rank_transition_shuffle_null.md).

## Operationalization

- Rank institutions by a documented proxy such as cumulative citations, h-index, output, faculty prestige, or external rank.
- Build `P(i,j)`, the probability of a move from rank or rank-bin `i` to rank or rank-bin `j`.
- Construct a null model that preserves total transitions from and to each institution or rank group.
- Compute `M(i,j) = P(i,j) / Pnull(i,j)` and interpret values above one as overrepresented transitions and values below one as underrepresented transitions.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) ranks Physical Review institutions by cumulative citations and builds a transition probability matrix over origin and destination rank.
- The paper defines `M(i,j)` as the observed transition probability divided by a randomized expectation preserving transition totals.
- Deville et al. report two overrepresented clubs: moves within elite institutions and moves within lower-ranked institutions. Cross-group moves between elite and lower-ranked institutions are underrepresented.
- The same pattern remains when transitions are separated by positive and negative post-move citation-change score, suggesting that rank stratification is not just a byproduct of observed performance change.
- The underlying proxy, null, and outcome-conditioned validation are now split into linked pages for reuse across other mobility settings.

## Caveats

- Rank-transition patterns depend on the institution ranking proxy and binning scheme.
- Mobility likelihood is not a causal estimate of institutional barriers by itself.
- Null models that preserve different margins or institution sizes can produce different baselines.

## Links

- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [faculty placement rank change](faculty_placement_rank_change.md)
- [faculty hierarchy strength](faculty_hierarchy_strength.md)
- [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md)
- [institution citation-rank proxy](institution_citation_rank_proxy.md)
- [rank-transition shuffle null](../validations/rank_transition_shuffle_null.md)
- [performance-conditioned mobility stratification](../validations/performance_conditioned_mobility_stratification.md)
- [rank-difference performance curve](rank_difference_performance_curve.md)
- [post-move citation-change score](post_move_citation_change_score.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; WoS: unknown]

## Metadata

- Concept ID: `institutional_rank_transition_likelihood`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: M(i,j) rank mobility likelihood; institutional transition likelihood ratio; rank-stratified move matrix; career mobility transition matrix
