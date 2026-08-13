# Performance-conditioned mobility stratification

## Summary

Performance-conditioned mobility stratification tests whether rank-stratified institutional movement remains visible after separating moves by whether post-move impact rises or falls.

## Canonical Form

- Unit of analysis: career move, rank transition, post-move performance-change sign, or transition matrix cell.
- Typical representation: separate observed-to-expected transition matrices for positive and negative post-move citation-change cases.
- Validation target: distinguish structural mobility stratification from an artifact of observed impact change.
- Empirical signature: similar within-stratum overrepresentation appears in both positive- and negative-performance subsets.

## Uses in Science of Science

- Validates [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md) against one obvious outcome-based confound.
- Connects [institutional rank transition likelihood](../measures/institutional_rank_transition_likelihood.md) with [post-move citation-change score](../measures/post_move_citation_change_score.md).
- Helps separate selection into rank strata from simple performance gains or losses after a move.
- Provides a template for conditioning mobility networks on career outcomes.

## Operationalization

- Compute a post-move performance-change statistic for each move.
- Split moves into positive and negative performance-change groups.
- Recompute the rank-transition observed-to-expected matrix inside each group.
- Compare whether the same rank-stratified blocks appear across outcome-conditioned matrices.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) divides moves by positive and negative `Dc*`, the normalized post-move citation-change score.
- The paper recomputes rank-transition likelihood matrices for both subsets.
- Deville et al. report that the two-club stratification pattern appears in both positive- and negative-performance cases.
- This supports the interpretation that rank stratification is not simply a byproduct of whether a scientist's impact improved after moving.

## Caveats

- Conditioning on post-move impact does not eliminate selection bias, topic shifts, cohort effects, or collaboration changes.
- Positive and negative subsets can differ in sample size and rank-bin sparsity.
- Citation-change signs depend on the citation window and internal database coverage.

## Links

- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)
- [institutional rank transition likelihood](../measures/institutional_rank_transition_likelihood.md)
- [post-move citation-change score](../measures/post_move_citation_change_score.md)
- [rank-transition shuffle null](rank_transition_shuffle_null.md)
- [rank-difference performance curve](../measures/rank_difference_performance_curve.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; WoS: unknown]

## Metadata

- Concept ID: `performance_conditioned_mobility_stratification`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: outcome-conditioned mobility stratification; performance-split rank mobility; Dc*-conditioned transition matrix; impact-conditioned career mobility
