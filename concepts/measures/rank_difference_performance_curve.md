# Rank-difference performance curve

## Summary

Rank-difference performance curve relates a scientist's post-move citation-change score to the rank difference between the origin and destination institutions.

## Canonical Form

- Unit of analysis: career move, origin rank, destination rank, rank difference, or pre/post citation window.
- Typical representation: average `Dc*` plotted against `Dr = i - j`, where `i` and `j` are origin and destination ranks.
- Measurement target: whether moving up or down an institutional hierarchy is associated with post-move impact change.
- Empirical signature: asymmetric curve, with downward moves associated with impact decline and upward moves showing weak or absent gains.

## Uses in Science of Science

- Extends [post-move citation-change score](post_move_citation_change_score.md) from a move-level outcome to a rank-gradient relationship.
- Provides a performance interpretation layer for [institutional rank transition likelihood](institutional_rank_transition_likelihood.md).
- Helps diagnose whether [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md) reflects selection, destination effects, or both.
- Links institutional mobility to career-impact and prestige-cumulative-advantage debates.

## Operationalization

- Rank institutions using a documented proxy.
- For each move, compute the rank difference between origin and destination.
- Compute the normalized pre/post citation-change score for the same move.
- Estimate average performance change by rank-difference bins, with confidence intervals or bootstrap uncertainty.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) defines rank difference `Dr_ij = i - j` for a transition from origin rank `i` to destination rank `j`.
- The paper interprets positive `Dr` as movement to a lower-ranked institution and negative `Dr` as movement into a higher-ranked institution.
- Deville et al. report that moving to lower-ranked institutions is associated with negative average citation-change, while moving into elite institutions shows no average performance gain.
- The result is interpreted cautiously as observational evidence consistent with strong selection into upward moves.

## Caveats

- Rank-difference curves are not causal destination effects without stronger controls or quasi-experimental variation.
- Rank differences depend on the selected institutional proxy and rank binning.
- Post-move citation windows can be contaminated by papers started before the move.

## Links

- [post-move citation-change score](post_move_citation_change_score.md)
- [institution citation-rank proxy](institution_citation_rank_proxy.md)
- [institutional rank transition likelihood](institutional_rank_transition_likelihood.md)
- [performance-conditioned mobility stratification](../validations/performance_conditioned_mobility_stratification.md)
- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; WoS: unknown]

## Metadata

- Concept ID: `rank_difference_performance_curve`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: rank-gap impact curve; mobility rank-difference outcome; Dr performance curve; institutional rank change impact curve
