# Faculty placement predictive validity

## Summary

Faculty placement predictive validity tests whether institutional prestige rankings or other network measures can predict observed faculty placements better than chance and better than external rankings.

## Canonical Form

- Unit of analysis: faculty placement edge, institution ranking, held-out placement, field-specific hiring network, or prediction task.
- Typical representation: AUC, held-out placement accuracy, true-positive ranking probability, comparison against U.S. News, NRC, centrality, or other ranking baselines.
- Validation target: whether a rank inferred from faculty flows carries predictive signal about hiring outcomes.
- Empirical signature: placement-derived prestige predicts faculty placement better than alternative single rankings, but predictive accuracy remains modest.

## Uses in Science of Science

- Validates [faculty prestige-rank inference](../methods/faculty_prestige_rank_inference.md) against observed hiring outcomes.
- Qualifies [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md) by separating predictive signal from deterministic explanation.
- Provides a model-checking layer for [faculty placement rank change](../measures/faculty_placement_rank_change.md), [faculty hierarchy strength](../measures/faculty_hierarchy_strength.md), and [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md).
- Helps compare placement-derived prestige with external rankings and centrality measures.

## Operationalization

- Build a faculty hiring network and infer or import candidate institution rankings.
- Define true placement outcomes and plausible false placement alternatives.
- Score whether the true placement is ranked above false alternatives under each ranking.
- Report AUC or a comparable held-out prediction metric by field.
- Interpret predictive validity together with [faculty prestige rank uncertainty](../measures/faculty_prestige_rank_uncertainty.md), field boundaries, and candidate-level omitted variables.
- Treat placement-derived rank as predictive status signal rather than merit, using [faculty prestige-merit conflation](faculty_prestige_merit_conflation.md) as a caveat.

## Evidence and Validations

- Verified full-text evidence from Clauset et al. (2015) evaluates placement prediction for assistant professors using AUC.
- The paper defines AUC as the probability that a uniformly random true placement is ranked above a uniformly random false placement, with 0.5 representing chance-level accuracy.
- Clauset et al. report that inferred prestige hierarchies make the most accurate single-measure predictions of faculty placement across computer science, business, and history, with AUCs from 0.58 to 0.67.
- The paper finds that U.S. News and NRC rankings have lower accuracies than the placement-derived prestige hierarchy, and that alternative measure orderings are not consistent across disciplines.
- Clauset et al. emphasize that AUC below 0.7 implies substantial roles for other factors such as department needs, field timing, preferences, and individual characteristics.
- This caveat motivates [upward faculty placement exception audits](upward_faculty_placement_exception_audit.md) for the minority of placements that move above doctoral prestige rank.
- Verified full-text evidence from Clauset, Larremore, and Sinatra (2017) adds a candidate-level prediction boundary: richer models using early productivity, postdoctoral training, geography, gender, and related variables can remain barely better than an academic-pedigree baseline.
- This secondary evidence is split out as [faculty-placement pedigree baseline](faculty_placement_pedigree_baseline.md).

## Caveats

- Predictive validity is not causal evidence that prestige alone determines hiring.
- Candidate preferences, job openings, subfield demand, geography, dual-career constraints, and search timing are usually unobserved.
- AUC can summarize ranking signal while hiding subgroup differences, including [gendered faculty placement gap](../mechanisms/gendered_faculty_placement_gap.md).
- External rankings may measure different institutional attributes than placement-derived prestige.

## Links

- [faculty prestige-rank inference](../methods/faculty_prestige_rank_inference.md)
- [faculty prestige rank uncertainty](../measures/faculty_prestige_rank_uncertainty.md)
- [faculty prestige-merit conflation](faculty_prestige_merit_conflation.md)
- [upward faculty placement exception audit](upward_faculty_placement_exception_audit.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [faculty placement rank change](../measures/faculty_placement_rank_change.md)
- [faculty hierarchy strength](../measures/faculty_hierarchy_strength.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md)
- [gendered faculty placement gap](../mechanisms/gendered_faculty_placement_gap.md)
- [faculty-placement pedigree baseline](faculty_placement_pedigree_baseline.md)
- [automated predictive-evaluation safeguards](automated_predictive_evaluation_safeguards.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Clauset, A., Arbesman, S., & Larremore, D. B. (2015). Systematic inequality and hierarchy in faculty hiring networks. *Science Advances*, 1(1), e1400005. https://doi.org/10.1126/sciadv.1400005 [OpenAlex: W2102017123; Dimensions: pub.1028625291; WoS: unknown]
- Clauset, A., Larremore, D. B., & Sinatra, R. (2017). Data-driven predictions in the science of science. *Science*, 355(6324), 477-480. https://doi.org/10.1126/science.aal4217 [OpenAlex: W2585057539; Dimensions: pub.1083524092; WoS: unknown]

## Metadata

- Concept ID: `faculty_placement_predictive_validity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2015) (2015)
- Latest seen paper: Clauset et al. (2017) (2017)
- Primary reference DOI: `10.1126/sciadv.1400005`
- OpenAlex ID: `W2102017123`
- Aliases: faculty placement AUC; prestige placement prediction; hiring rank predictive validity; placement-derived prestige validation
