# Career move count distribution

## Summary

Career move count distribution measures how many distinct institutions a scientist visits over an observed career trajectory.

## Canonical Form

- Unit of analysis: scientist, institution sequence, affiliation episode, or career.
- Typical representation: probability distribution `P(m)` over the number `m` of visited institutions.
- Measurement target: whether scientific careers are stationary, lightly mobile, or repeatedly mobile.
- Empirical signature: many careers involve one or two institutional moves, with the distribution decaying quickly for larger `m`.

## Uses in Science of Science

- Quantifies mobility prevalence before modeling where moves go or how they affect outcomes.
- Provides a denominator for [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md): rank-transition patterns are conditional on scientists who move.
- Helps compare mobility regimes across fields, countries, cohorts, career stages, and dataset snapshots.
- Complements [career move timing distribution](career_move_timing_distribution.md) by separating when moves occur from how many occur.

## Operationalization

- Reconstruct each scientist's affiliation trajectory after author and institution disambiguation.
- Count distinct institutions or filtered affiliation episodes, documenting whether repeat returns are collapsed.
- Estimate `P(m)` over scientists in a cohort and report the observation window.
- Separate no-move, one-move, two-move, and highly mobile tails rather than reporting only an average.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) computes `P(m)`, the probability that a scientist visited `m` different institutions over the observed career.
- The paper reports that only 14% of focal physicists never moved, while those who moved mostly moved once or twice.
- Deville et al. state that `P(m)` decays quickly as the number of visited institutions increases, making repeated institutional movement less common.

## Caveats

- Distinct-institution counts depend on affiliation normalization, campus grouping, and treatment of temporary affiliations.
- A scientist with many short visits and a scientist with several long appointments can have the same `m`.
- Publication-based records miss moves during non-publication periods.

## Links

- [scientific mobility](../mechanisms/scientific_mobility.md)
- [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)
- [career move timing distribution](career_move_timing_distribution.md)
- [institutional rank transition likelihood](institutional_rank_transition_likelihood.md)
- [post-move citation-change score](post_move_citation_change_score.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; WoS: unknown]

## Metadata

- Concept ID: `career_move_count_distribution`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: visited-institution count; P(m) career mobility; mobility frequency distribution; career institution count
