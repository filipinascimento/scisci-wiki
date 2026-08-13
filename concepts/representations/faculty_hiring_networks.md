# Faculty hiring networks

## Summary

Faculty hiring networks represent institutions or departments as nodes and faculty placements as directed edges from doctoral-training institutions to employing faculty institutions.

## Canonical Form

- Unit of analysis: department, university, faculty member, doctoral institution, employing institution, field, or hiring cohort.
- Typical representation: directed weighted placement graph, institution-by-institution flow matrix, field-specific hiring network, or self-loop augmented hiring graph.
- Measurement target: institutional placement flows, prestige hierarchy, academic labor-market structure, and faculty mobility constraints.
- Empirical signature: heavy concentration of faculty production, steep directionality from high-prestige producers to lower-prestige employers, and nonrandom self-loops.

## Uses in Science of Science

- Provides the network layer for [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md).
- Supports [faculty prestige-rank inference](../methods/faculty_prestige_rank_inference.md), [faculty production inequality](../measures/faculty_production_inequality.md), [faculty self-hiring rates](../measures/faculty_self_hiring_rates.md), [self-hire attrition premium](../measures/self_hire_attrition_premium.md), and [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md).
- Provides the edge set for [faculty placement rank change](../measures/faculty_placement_rank_change.md) and randomized baselines in [faculty hiring null models](../methods/faculty_hiring_null_models.md).
- Supports compact structural summaries such as [faculty hierarchy strength](../measures/faculty_hierarchy_strength.md), [core-periphery faculty exchange](core_periphery_faculty_exchange.md), and [faculty prestige centrality-insularity coupling](../mechanisms/faculty_prestige_centrality_insularity.md).
- Connects academic labor markets to [scientific mobility](../mechanisms/scientific_mobility.md), [gender race stratification](../mechanisms/gender_race_stratification.md), and [attention inequality](../mechanisms/attention_inequality.md).
- Connects the placement graph to system-level, residual, and cross-field motifs: [faculty-market system leverage](../mechanisms/faculty_market_system_leverage.md), [placement residual contingency portfolio](../validations/placement_residual_contingency_portfolio.md), [origin-prestige steepness gradient](../measures/origin_prestige_steepness_gradient.md), and [cross-discipline hierarchy convergence](../validations/cross_discipline_hierarchy_convergence.md).

- A residual Wapman pass adds [faculty same-field unit collapse](../methods/faculty_same_field_unit_collapse.md), [doctoral-domain training-match heuristic](../methods/doctoral_domain_training_match_heuristic.md), [stale concurrent-employment record cleanup](../methods/stale_concurrent_employment_record_cleanup.md), [producing-university country annotation audit](../validations/producing_university_country_annotation_audit.md), [faculty analysis-denominator manifest](../methods/faculty_analysis_denominator_manifest.md), [roster attrition-event semantics](../validations/roster_attrition_event_semantics.md), [faculty-network rankability filter](../methods/faculty_network_rankability_filter.md), [self-loop-excluded configuration null](../methods/self_loop_excluded_configuration_null.md), [prestige-conditioned cohort-flow attenuation](../mechanisms/prestige_conditioned_cohort_flow_attenuation.md), [cross-field top-department slot concentration](../measures/cross_field_top_department_slot_concentration.md), and [individual pedigree nondeterminism boundary](../validations/individual_pedigree_nondeterminism_boundary.md).
## Operationalization

- Build directed edges `u -> v` where a faculty member received a doctorate from institution `u` and holds a faculty job at institution `v`.
- Weight edges by the number of faculty placements and preserve self-loops for self-hiring analyses.
- Construct separate networks by field, domain, cohort, or faculty rank when disciplinary labor markets differ.
- Use [faculty hiring network union aggregation](../methods/faculty_hiring_network_union_aggregation.md) when combining field networks into domains or academia-wide graphs.
- Attach node attributes such as faculty size, production count, hiring count, prestige rank, gender composition, country of doctorate, and attrition status from a [faculty roster panel](../datasets/faculty_roster_panel.md) when available.

## Evidence and Validations

- Verified full-text evidence from Clauset et al. (2015) constructs faculty hiring networks for nearly 19,000 regular faculty across 461 North American department or school units in computer science, business, and history.
- Clauset et al. define each directed edge as a placement from doctoral institution to faculty employer and infer prestige rankings from the directionality of those placements.
- The same network representation supports placement rank-change measurement and Monte Carlo null tests for whether prestige hierarchy exceeds production-rate inequality alone.
- A residual Clauset et al. pass separates faculty-market system leverage, placement residual contingencies, origin-prestige steepness, and cross-discipline hierarchy convergence from the broader hiring-network representation.
- Verified full-text evidence from Wapman et al. (2022) scales the representation to 295,089 tenure-track faculty in 10,612 departments at 368 U.S. PhD-granting universities across 107 fields.
- Wapman et al. explicitly include self-hires as self-loops and aggregate field networks carefully to avoid double-counting faculty assigned to multiple fields; the same field networks are rewired to test hierarchy, upward mobility, and self-hiring against null expectations.

## Caveats

- Faculty hiring networks exclude many non-tenure-track, industry, government, and international career paths.
- Institutional name resolution, department-field assignment, multiple appointments, and missing doctorate data can change edge weights.
- Network direction is an observed career flow, not direct evidence that prestige caused the hire.

## Links

- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [faculty-market system leverage](../mechanisms/faculty_market_system_leverage.md)
- [faculty prestige-rank inference](../methods/faculty_prestige_rank_inference.md)
- [faculty hiring network union aggregation](../methods/faculty_hiring_network_union_aggregation.md)
- [faculty placement predictive validity](../validations/faculty_placement_predictive_validity.md)
- [placement residual contingency portfolio](../validations/placement_residual_contingency_portfolio.md)
- [faculty hiring collective assessment](faculty_hiring_collective_assessment.md)
- [closed doctoral ecosystem sampling frame](../datasets/closed_doctoral_ecosystem_sampling_frame.md)
- [placement network manipulation resistance](../validations/placement_network_manipulation_resistance.md)
- [placement quality-production decoupling](../measures/placement_quality_production_decoupling.md)
- [faculty hiring null models](../methods/faculty_hiring_null_models.md)
- [faculty placement rank change](../measures/faculty_placement_rank_change.md)
- [origin-prestige steepness gradient](../measures/origin_prestige_steepness_gradient.md)
- [faculty hierarchy strength](../measures/faculty_hierarchy_strength.md)
- [cross-discipline hierarchy convergence](../validations/cross_discipline_hierarchy_convergence.md)
- [core-periphery faculty exchange](core_periphery_faculty_exchange.md)
- [faculty prestige centrality-insularity coupling](../mechanisms/faculty_prestige_centrality_insularity.md)
- [faculty roster panel](../datasets/faculty_roster_panel.md)
- [gendered faculty placement gap](../mechanisms/gendered_faculty_placement_gap.md)
- [faculty doctoral-origin composition](../measures/faculty_doctoral_origin_composition.md)
- [faculty production inequality](../measures/faculty_production_inequality.md)
- [faculty self-hiring rates](../measures/faculty_self_hiring_rates.md)
- [self-hire attrition premium](../measures/self_hire_attrition_premium.md)
- [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md)
- [faculty retention and attrition](../mechanisms/faculty_retention_attrition.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)

- [faculty same-field unit collapse](../methods/faculty_same_field_unit_collapse.md)
- [self-loop-excluded configuration null](../methods/self_loop_excluded_configuration_null.md)
- [cross-field top-department slot concentration](../measures/cross_field_top_department_slot_concentration.md)
## References

- Clauset, A., Arbesman, S., & Larremore, D. B. (2015). Systematic inequality and hierarchy in faculty hiring networks. *Science Advances*, 1(1), e1400005. https://doi.org/10.1126/sciadv.1400005 [OpenAlex: W2102017123; Dimensions: pub.1028625291; WoS: unknown]
- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `faculty_hiring_networks`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2015) (2015)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1126/sciadv.1400005`
- OpenAlex ID: `W2102017123`
- Aliases: placement network; faculty placement graph; academic hiring network; prestige flow network
