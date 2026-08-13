# Institutional mobility stratification

## Summary

Institutional mobility stratification describes how scientists' career moves are structured by institutional rank, with movements concentrated within prestige strata and cross-stratum moves underrepresented.

## Canonical Form

- Unit of analysis: scientist move, origin institution, destination institution, rank group, or career stage.
- Typical representation: origin-destination transition matrix over institution ranks or rank strata.
- Mechanism: institutional status, hiring selectivity, resources, networks, and reputation constrain where scientists can move.
- Empirical signature: excess moves within elite institutions and within lower-ranked institutions relative to a null model, with fewer cross-group transitions.

## Uses in Science of Science

- Splits the mobility-specific mechanism from broader [institutional prestige hierarchy](institutional_prestige_hierarchy.md).
- Helps interpret post-move impact as selection plus environment rather than simple place effects.
- Links affiliation histories to cumulative advantage, career inequality, and institutional resource concentration.
- Depends on operational measures such as [institutional rank transition likelihood](../measures/institutional_rank_transition_likelihood.md), [career move timing distribution](../measures/career_move_timing_distribution.md), and [post-move citation-change score](../measures/post_move_citation_change_score.md).
- Uses explicit proxy and validation layers such as [institution citation-rank proxy](../measures/institution_citation_rank_proxy.md), [rank-transition shuffle null](../validations/rank_transition_shuffle_null.md), and [performance-conditioned mobility stratification](../validations/performance_conditioned_mobility_stratification.md).
- A further Deville pass separates [long-lived physicist cohort restriction](../validations/long_lived_physicist_cohort_restriction.md), [top-cited institution coverage gate](../methods/top_cited_institution_coverage_gate.md), [rank log binning for transition power](../methods/rank_log_binning_for_transition_power.md), [ambiguous massive-authorship exclusion](../validations/ambiguous_massive_authorship_exclusion.md), [geocoded affiliation name resolution](../methods/geocoded_affiliation_name_resolution.md), and [midrank mobility neutral zone](midrank_mobility_neutral_zone.md).

## Operationalization

- Reconstruct affiliation trajectories and rank institutions by a specified prestige or impact proxy.
- Build a transition matrix from origin ranks to destination ranks using [institutional rank transition likelihood](../measures/institutional_rank_transition_likelihood.md).
- Compare observed transitions with null models that preserve origin and destination totals or institution sizes.
- Estimate post-move publication and citation changes with [post-move citation-change score](../measures/post_move_citation_change_score.md) and [rank-difference performance curve](../measures/rank_difference_performance_curve.md) while accounting for pre-move performance and career stage.
- Document preprocessing choices such as [primary affiliation assignment rule](../methods/primary_affiliation_assignment_rule.md), because primary-affiliation choices can affect which moves are detected.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) reconstructs 5,915 institutional career movements in physics and ranks institutions by cumulative citation impact.
- The paper reports that career moves are highly stratified: transitions within elite institutions and within lower-ranked institutions are overrepresented, while cross-group moves are underrepresented.
- Deville et al. also estimate normalized post-move performance change and find that moving down the rank hierarchy is associated with a modest decline in impact, while moving into elite institutions does not produce an average performance gain.
- The same full text supports split-out mobility measures for timing, move count, distance decay, transition likelihood, pre/post citation change, rank-proxy construction, null baselines, and performance-conditioned robustness.
- This supports a selection-sensitive interpretation: elite placement may reflect already high-performing scientists rather than a simple causal boost from the destination.
- That selection-sensitive interpretation is split out as [elite upward mobility selection](elite_upward_mobility_selection.md).
- A residual Deville pass adds cohort-longevity restrictions, top-institution coverage gating, logarithmic rank binning, ambiguous/massive-authorship exclusions, geocoded affiliation resolution, and the random-like behavior of medium-ranked mobility.
- Verified full-text evidence from Clauset et al. (2015) and Wapman et al. (2022) extends the stratification motif to faculty placement: [prestige-constrained faculty mobility](prestige_constrained_faculty_mobility.md) shows that upward faculty moves from doctoral institution to faculty employer are rare across many fields.

## Caveats

- Institution rank is proxy-dependent and field-specific.
- Mobility effects are confounded by selection, career age, coauthor networks, and publication lags.
- The evidence from one discipline or database should not be generalized without replication.
- Cohort filters, institution coverage gates, rank binning, and affiliation resolution choices can change the observed mobility structure.

## Links

- [scientific mobility](scientific_mobility.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)
- [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md)
- [primary affiliation assignment rule](../methods/primary_affiliation_assignment_rule.md)
- [career move timing distribution](../measures/career_move_timing_distribution.md)
- [career move count distribution](../measures/career_move_count_distribution.md)
- [career mobility distance decay](../measures/career_mobility_distance_decay.md)
- [institutional rank transition likelihood](../measures/institutional_rank_transition_likelihood.md)
- [post-move citation-change score](../measures/post_move_citation_change_score.md)
- [institution citation-rank proxy](../measures/institution_citation_rank_proxy.md)
- [rank-transition shuffle null](../validations/rank_transition_shuffle_null.md)
- [performance-conditioned mobility stratification](../validations/performance_conditioned_mobility_stratification.md)
- [rank-difference performance curve](../measures/rank_difference_performance_curve.md)
- [elite upward mobility selection](elite_upward_mobility_selection.md)
- [long-lived physicist cohort restriction](../validations/long_lived_physicist_cohort_restriction.md)
- [top-cited institution coverage gate](../methods/top_cited_institution_coverage_gate.md)
- [rank log binning for transition power](../methods/rank_log_binning_for_transition_power.md)
- [ambiguous massive-authorship exclusion](../validations/ambiguous_massive_authorship_exclusion.md)
- [geocoded affiliation name resolution](../methods/geocoded_affiliation_name_resolution.md)
- [midrank mobility neutral zone](midrank_mobility_neutral_zone.md)
- [institutional prestige hierarchy](institutional_prestige_hierarchy.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [prestige-constrained faculty mobility](prestige_constrained_faculty_mobility.md)
- [faculty production inequality](../measures/faculty_production_inequality.md)
- [scientific career impact](scientific_career_impact.md)
- [reputation effects](reputation_effects.md)
- [cumulative advantage](cumulative_advantage.md)
- [multi-university collaboration stratification](multi_university_collaboration.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; WoS: unknown]
- Clauset, A., Arbesman, S., & Larremore, D. B. (2015). Systematic inequality and hierarchy in faculty hiring networks. *Science Advances*, 1(1), e1400005. https://doi.org/10.1126/sciadv.1400005 [OpenAlex: W2102017123; Dimensions: pub.1028625291; WoS: unknown]
- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `institutional_mobility_stratification`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Aliases: rank-stratified mobility; institutional move stratification; prestige mobility; career mobility strata
