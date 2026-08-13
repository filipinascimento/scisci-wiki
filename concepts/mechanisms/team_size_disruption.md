# Team size and disruption

## Summary

The team-size disruption motif states that small teams are more likely to produce disruptive work, while large teams more often develop, scale, and consolidate existing directions.

## Canonical Form

- Unit of analysis: paper, patent, team, institution, field, or time cohort.
- Typical representation: author-team size linked to citation-network disruption and impact outcomes.
- Mechanism: small teams may search less conventionally, while large teams coordinate around established agendas and resource-intensive development.
- Empirical signature: disruption decreases with team size after field/year controls, while raw impact may increase with team size.

## Uses in Science of Science

- Used to reason about team science, funding portfolios, institutional incentives, and the balance between exploration and development.
- Connects collaboration networks to scientific change measures.
- Raises policy questions about portfolio diversity and support for small investigator teams.

- A residual Wu pass adds [team-scale risk-tolerance asymmetry](../hypotheses/team_scale_risk_tolerance_asymmetry.md), [large-group perspective suppression](../hypotheses/large_group_perspective_suppression.md), [large-team resource treadmill](large_team_resource_treadmill.md), [team-size attention-delay curve](../measures/team_size_attention_delay_curve.md), [disruption citation-window reversal](../validations/disruption_citation_window_reversal.md), [disruption upside-downside tail asymmetry](../validations/disruption_upside_downside_tail_asymmetry.md), [small-team population shrinkage](../consequences/small_team_population_shrinkage.md), [team-size field-era stability](../validations/team_size_field_era_stability.md), [conference-proceedings team-size coverage caveat](../validations/conference_proceedings_team_size_coverage_caveat.md), [disruption title-action-word diagnostic](../validations/disruption_title_action_word_diagnostic.md), and [artifact-population inference boundary](../validations/artifact_population_inference_boundary.md).
## Operationalization

- Link author counts and team histories to disruption/CD index, citations, fields, and time.
- Use [team-authorship share](../measures/team_authorship_share.md), [mean team-size growth](../measures/mean_team_size_growth.md), and [relative team-impact ratio](../measures/relative_team_impact_ratio.md) to separate team prevalence from team impact.
- Measure [reference-age search depth](../measures/reference_age_search_depth.md) and [reference-popularity search](../measures/reference_popularity_search.md) to distinguish older, less popular search from recent, visible development.
- Control for field, year, journal, funding, and institution.
- Compare papers, patents, and software repositories where possible, using domain-specific networks such as the [GitHub fork-citation network](../representations/github_fork_citation_network.md).
- Check whether the team-size gradient survives [disruption variant robustness grids](../validations/disruption_variant_robustness_grid.md).

## Evidence and Validations

- Wu et al. report systematic differences between small and large teams across papers and patents; Park et al. extend disruption trends over time.
- Verified full-text evidence from Wu et al. (2019): the paper analyzes papers, patents, and software repositories and reports a consistent negative association between team size and disruption, while larger teams are more likely to produce high-citation or developmental work.
- Wu et al. treat the small-team/large-team contrast as a search-behavior and organizational mechanism: smaller teams search deeper into older, less popular ideas, whereas larger teams build on more recent and visible developments.
- Wu et al. also identify a [team-size breadth-depth search tradeoff](team_size_breadth_depth_search_tradeoff.md): larger teams facilitate broader combinatorial search up to a point, but novelty gains show diminishing returns while small teams preserve deeper predecessor search.
- Wu et al. also show the team-size gradient across multiple disruption definitions and a GitHub fork-derived repository network, reducing dependence on one citation-only implementation.
- Additional Wu et al. residual motifs now split the result into [Doc2vec topic-control robustness](../methods/doc2vec_topic_control.md), [team-size distribution contrast tests](../validations/team_size_distribution_contrast_tests.md), [sparse team-size moving-average smoothing](../methods/sparse_team_size_moving_average_smoothing.md), [team-size reference-distribution scaling](../measures/team_size_reference_distribution_scaling.md), and the [small-team success ripple effect](small_team_success_ripple_effect.md).
- Fortunato et al. (2018), in the verified review PDF, frames this as a policy-relevant portfolio result: science needs both small teams that expand frontiers and large teams that rapidly develop them.
- Verified full-text evidence from Wuchty et al. (2007) provides the citation-impact baseline for this contrast: teams increasingly dominate production and high-citation work, so disruption analyses should separate citation advantage from disruptive novelty.
- Verified full-text evidence from Uzzi et al. (2013) adds a recombination nuance: teams are more likely to add unusual reference combinations without sacrificing conventional grounding, a different team-novelty channel from disruption.
- Verified full-text evidence from Xu et al. (2022) adds internal team structure: at similar team sizes, flatter teams are more likely to produce novel work and exert longer-term influence, while taller teams receive more short-term citations.
- Xu et al. support this with [same-size team hierarchy contrast](../validations/same_size_team_hierarchy_contrast.md), separating raw team size from role structure.
- Xu et al. also support [team role-size scaling](../measures/team_role_size_scaling.md) and [tall-team prevalence trend](../measures/tall_team_prevalence_trend.md), which show that the organizational meaning of team growth changes as support roles and hierarchy become more common.
- Verified full-text evidence from Guimera et al. (2005) adds a formation caveat: team size grows over time in several scientific fields, but team assembly through newcomers, incumbents, and repeat collaborators changes the network context in which team size operates.
- Guimera et al. also motivate [task-complexity team-size adaptation](task_complexity_team_size_adaptation.md): team size can grow because task specialization and coordination demands change, not only because larger teams seek more citations.
- Verified full-text evidence from Liu et al. (2021) adds a career-event pattern: scientists tend to work with smaller teams before hot streaks and larger teams during hot streaks.

## Caveats

- Team size is a crude proxy for coordination structure and resource scale.
- Authorship conventions differ by field and era.
- High citation impact and disruptive impact can move in different directions.

## Links

- [disruption consolidation](../mechanisms/disruption_consolidation.md)
- [team impact advantage](team_impact_advantage.md)
- [hot-streak team-size phase shift](../validations/hot_streak_team_size_phase_shift.md)
- [team-authorship share](../measures/team_authorship_share.md)
- [mean team-size growth](../measures/mean_team_size_growth.md)
- [relative team-impact ratio](../measures/relative_team_impact_ratio.md)
- [team high-citation tail dominance](team_high_citation_tail_dominance.md)
- [team-size disruption-impact tail divergence](../validations/team_size_disruption_impact_tail_divergence.md)
- [within-author team-size disruption test](../validations/within_author_team_size_disruption_test.md)
- [research-design team-size control](../validations/research_design_team_size_control.md)
- [small-team deep-search delay](small_team_deep_search_delay.md)
- [team-size breadth-depth search tradeoff](team_size_breadth_depth_search_tradeoff.md)
- [small-team success ripple effect](small_team_success_ripple_effect.md)
- [team-size reference-distribution scaling](../measures/team_size_reference_distribution_scaling.md)
- [team-size distribution contrast tests](../validations/team_size_distribution_contrast_tests.md)
- [sparse team-size moving-average smoothing](../methods/sparse_team_size_moving_average_smoothing.md)
- [Doc2vec topic-control robustness](../methods/doc2vec_topic_control.md)
- [large-team author-disambiguation bias](../validations/large_team_author_disambiguation_bias.md)
- [funding-award disruption contrast](../validations/funding_award_disruption_contrast.md)
- [team assembly mechanisms](team_assembly_mechanisms.md)
- [team core-turnover survival strategy](team_core_turnover_survival_strategy.md)
- [task-complexity team-size adaptation](task_complexity_team_size_adaptation.md)
- [newcomer-incumbent team mix](../measures/newcomer_incumbent_team_mix.md)
- [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md)
- [team hierarchy and flatness](team_hierarchy_flatness.md)
- [team role-size scaling](../measures/team_role_size_scaling.md)
- [tall-team prevalence trend](../measures/tall_team_prevalence_trend.md)
- [same-size team hierarchy contrast](../validations/same_size_team_hierarchy_contrast.md)
- [developmental index](../measures/developmental_index.md)
- [team tail-novelty advantage](team_tail_novelty_advantage.md)
- [burden of knowledge](burden_of_knowledge.md)
- [knowledge-use narrowing](knowledge_use_narrowing.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [disruption index](../measures/disruption_index.md)
- [disruption variant robustness grid](../validations/disruption_variant_robustness_grid.md)
- [reference-age search depth](../measures/reference_age_search_depth.md)
- [reference-popularity search](../measures/reference_popularity_search.md)
- [WOS-patent-GitHub disruption corpus](../datasets/wos_patent_github_disruption_corpus.md)
- [GitHub fork-citation network](../representations/github_fork_citation_network.md)
- [sciscinet v2](../datasets/sciscinet_v2.md)

- [team-scale risk-tolerance asymmetry](../hypotheses/team_scale_risk_tolerance_asymmetry.md)
- [large-team resource treadmill](large_team_resource_treadmill.md)
- [disruption citation-window reversal](../validations/disruption_citation_window_reversal.md)
- [small-team population shrinkage](../consequences/small_team_population_shrinkage.md)
## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]
- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]
- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; WoS: unknown]
- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; WoS: unknown]
- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]
- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]

## Metadata

- Concept ID: `team_size_disruption`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Aliases: small-team disruption; large-team development; team science
