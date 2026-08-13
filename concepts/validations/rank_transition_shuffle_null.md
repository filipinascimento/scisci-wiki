# Rank-transition shuffle null

## Summary

Rank-transition shuffle null compares observed institutional moves with a randomized transition baseline that preserves the total flow into and out of institutions or rank bins.

## Canonical Form

- Unit of analysis: origin institution, destination institution, rank bin, or move event.
- Typical representation: observed transition matrix `P(i,j)`, expected matrix `Pnull(i,j)`, and observed-to-expected ratio `M(i,j)`.
- Validation target: whether rank-stratified mobility is more structured than expected from marginal transition activity alone.
- Empirical signature: `M(i,j) > 1` for overrepresented transitions and `M(i,j) < 1` for underrepresented transitions.

## Uses in Science of Science

- Provides the null model behind [institutional rank transition likelihood](../measures/institutional_rank_transition_likelihood.md).
- Tests whether [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md) survives adjustment for institution-size and transition-volume heterogeneity.
- Complements simpler tier baselines such as [random tier matching baseline](random_tier_matching_baseline.md).
- Can be reused for faculty placement, collaboration mobility, and organization-to-organization flows where marginal activity is highly unequal.

## Operationalization

- Build an observed origin-destination rank matrix from inferred moves.
- Preserve total transition volume from each origin and into each destination or rank group.
- Randomize pairings under those margins to estimate `Pnull(i,j)`.
- Divide observed transition probabilities by null probabilities and inspect overrepresented and underrepresented matrix regions.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) defines `M(i,j)` as the observed transition probability divided by the probability expected when movements are shuffled.
- The null accounts for the fact that elite institutions have larger populations and therefore more observed moves.
- Deville et al. use the ratio matrix to show overrepresentation within elite institutions and within lower-ranked institutions, with cross-group moves underrepresented.
- The same framework supports conditioning on post-move performance sign to test robustness of the stratification pattern.

## Caveats

- Preserving different margins changes the baseline and therefore the observed-to-expected ratios.
- The null does not control for field specialization, geography, collaboration ties, or career stage unless explicitly stratified.
- Sparse rank bins can produce unstable ratios.

## Links

- [institutional rank transition likelihood](../measures/institutional_rank_transition_likelihood.md)
- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)
- [institution citation-rank proxy](../measures/institution_citation_rank_proxy.md)
- [performance-conditioned mobility stratification](performance_conditioned_mobility_stratification.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)
- [random tier matching baseline](random_tier_matching_baseline.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; WoS: unknown]

## Metadata

- Concept ID: `rank_transition_shuffle_null`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: mobility transition null; rank mobility shuffle; institutional transition expected baseline; M(i,j) null model
