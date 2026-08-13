# Team assembly mechanisms

## Summary

Team assembly mechanisms describe how scientific teams form from newcomers, incumbents, and repeat collaborators, and how those micro-choices shape collaboration networks and team performance.

## Canonical Form

- Unit of analysis: team, author, field, journal, collaboration episode, or projected coauthorship network.
- Typical representation: temporal team sequence, [team-agent bipartite projection](../representations/team_agent_bipartite_projection.md), [newcomer-incumbent team mix](../measures/newcomer_incumbent_team_mix.md), [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md), or collaboration-network component structure.
- Mechanism: teams balance incumbent expertise with newcomer variety; repeated ties improve coordination but can narrow access to fresh knowledge.
- Empirical signature: team performance and network structure vary with the fraction of incumbents and the tendency of incumbents to repeat prior collaborations.

## Uses in Science of Science

- Gives a formation mechanism for [coauthorship networks](../representations/coauthorship_networks.md), not only a static graph description.
- Decomposes into measurable motifs such as [newcomer-incumbent team mix](../measures/newcomer_incumbent_team_mix.md), [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md), and [team self-assembly models](../methods/team_self_assembly_models.md).
- Adds split mechanisms for [collaboration percolation transition](collaboration_percolation_transition.md) and [repeat collaboration lock-in](repeat_collaboration_lock_in.md).
- Adds a task-growth mechanism through [task-complexity team-size adaptation](task_complexity_team_size_adaptation.md) and a network-access mechanism through [collaboration knowledge reservoir](collaboration_knowledge_reservoir.md).
- Adds a complementary size-distribution view through [core-team Poisson mode](core_team_poisson_mode.md), [core+1 mentor component](core_plus_one_mentor_component.md), [extended-team cumulative-advantage mode](extended_team_cumulative_advantage_mode.md), and [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md).
- Connects assembly choices to persistence through [team core-turnover survival strategy](team_core_turnover_survival_strategy.md), which contrasts small-team core stability with large-team turnover.
- Connects [team impact advantage](team_impact_advantage.md), [team size and disruption](team_size_disruption.md), and [team hierarchy and flatness](team_hierarchy_flatness.md) to the way teams are assembled before output is produced.
- Provides a bridge between [invisible colleges](invisible_college.md) and observable collaboration networks.

## Operationalization

- Classify each team member as a newcomer or incumbent relative to prior participation in the field.
- Estimate team size, the probability that a team member is an incumbent, and the probability that incumbents repeat past collaborations.
- Build [team-agent bipartite projection](../representations/team_agent_bipartite_projection.md) records or coauthorship projections and track [collaboration giant component](../measures/collaboration_giant_component.md) size, repeated-tie fractions, and field-level connectivity.
- Compare assembly parameters with journal impact, citations, novelty, or other outcome proxies while accounting for field norms.

## Evidence and Validations

- Verified full-text evidence from Guimera et al. (2005) models team self-assembly with three parameters: team size, the fraction of newcomers versus incumbents, and incumbents' propensity to repeat previous collaborations.
- The paper applies the model to Broadway musicals plus scientific collaboration networks in social psychology, economics, ecology, and astronomy, showing that team size alone cannot capture how teams access knowledge.
- Guimera et al. report a network transition in which collaboration networks can move toward a large connected "invisible college"; four of five creative networks considered sit near this tipping line, while astronomy is an exception with stronger repeated incumbent ties.
- In economics, ecology, and social psychology, the full text reports that higher-impact journals have teams with more incumbents and less repeat collaboration among incumbents, suggesting a performance balance between expertise and diversity.
- The same paper motivates split pages for [team link-type composition](../measures/team_link_type_composition.md), [inactive-agent turnover rule](../methods/inactive_agent_turnover_rule.md), and [team assembly degree-distribution validation](../validations/team_assembly_degree_distribution_validation.md).
- Verified full-text evidence from Milojevic (2014) adds a team-size formation layer: small core teams form by a Poisson process, while extended teams grow through productivity-linked cumulative advantage and generate the large-team tail.

## Caveats

- Journal impact factor is an imperfect proxy for team performance.
- Newcomer/incumbent status captures prior participation, not skill, rank, demographic diversity, or contribution role.
- Field-specific authorship norms can change the meaning of repeat collaboration and team size.

## Links

- [team impact advantage](team_impact_advantage.md)
- [team size and disruption](team_size_disruption.md)
- [team hierarchy and flatness](team_hierarchy_flatness.md)
- [newcomer-incumbent team mix](../measures/newcomer_incumbent_team_mix.md)
- [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md)
- [team self-assembly models](../methods/team_self_assembly_models.md)
- [core-team Poisson mode](core_team_poisson_mode.md)
- [core+1 mentor component](core_plus_one_mentor_component.md)
- [extended-team cumulative-advantage mode](extended_team_cumulative_advantage_mode.md)
- [team core-turnover survival strategy](team_core_turnover_survival_strategy.md)
- [extended-team choice propensity](../measures/extended_team_choice_propensity.md)
- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)
- [authorship-mode contribution share](../measures/authorship_mode_contribution_share.md)
- [team-size distribution reproduction](../validations/team_size_distribution_reproduction.md)
- [creative team assembly panels](../datasets/creative_team_assembly_panels.md)
- [team-agent bipartite projection](../representations/team_agent_bipartite_projection.md)
- [task-complexity team-size adaptation](task_complexity_team_size_adaptation.md)
- [collaboration knowledge reservoir](collaboration_knowledge_reservoir.md)
- [team link-type composition](../measures/team_link_type_composition.md)
- [team assembly parameter space](../methods/team_assembly_parameter_space.md)
- [inactive-agent turnover rule](../methods/inactive_agent_turnover_rule.md)
- [team assembly degree-distribution validation](../validations/team_assembly_degree_distribution_validation.md)
- [collaboration percolation transition](collaboration_percolation_transition.md)
- [repeat collaboration lock-in](repeat_collaboration_lock_in.md)
- [team assembly performance gradient](../validations/team_assembly_performance_gradient.md)
- [disciplinary team-assembly regimes](../validations/disciplinary_team_assembly_regimes.md)
- [repeat-propensity saturation check](../validations/repeat_propensity_saturation_check.md)
- [collaboration fluidity regimes](collaboration_fluidity_regimes.md)
- [invisible-college knowledge sampling efficiency](invisible_college_knowledge_sampling_efficiency.md)
- [percolation-line distance](../measures/percolation_line_distance.md)
- [giant-component morphology gradient](../representations/giant_component_morphology_gradient.md)
- [collaboration giant component](../measures/collaboration_giant_component.md)
- [multi-university collaboration stratification](multi_university_collaboration.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [triadic closure in collaboration](triadic_closure_in_collaboration.md)
- [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md)
- [invisible college](invisible_college.md)
- [burden of knowledge](burden_of_knowledge.md)

## References

- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; WoS: unknown]
- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]
- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown]
- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `team_assembly_mechanisms`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Guimera et al. (2005) (2005)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1126/science.1106340`
- OpenAlex ID: `W2150443611`
- Aliases: team self-assembly; newcomer-incumbent mix; repeat collaboration; team formation
