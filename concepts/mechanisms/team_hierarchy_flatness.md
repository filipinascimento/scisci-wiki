# Team hierarchy and flatness

## Summary

Team hierarchy and flatness describe how leadership and support roles are distributed inside a scientific team, beyond the team's raw author count.

## Canonical Form

- Unit of analysis: author team, contribution statement, paper, field, or year cohort.
- Typical representation: lead-role ratio, author-contribution role network, or team-role composition by team size.
- Mechanism: when leadership roles are concentrated, teams may optimize short-term efficiency and credit capture; when leadership roles are distributed, more members shape concepts, topics, and references.
- Empirical signature: variation in novelty, disruption/development, long-term impact, and member productivity across teams of similar size but different role structures.

## Uses in Science of Science

- Refines [team size and disruption](team_size_disruption.md) by separating team size from internal hierarchy.
- Links [task specialization](task_specialization.md) and [coauthorship networks](../representations/coauthorship_networks.md) to contribution structure rather than only co-presence on a paper.
- Provides a mechanism for interpreting [team impact advantage](team_impact_advantage.md): larger or more cited teams can still differ sharply in who gets to lead.
- Operationalizes team flatness through [lead-role ratio](../measures/lead_role_ratio.md), which turns [contribution role vectors](../representations/contribution_role_vectors.md) into a paper-level hierarchy measure.
- Splits into lower-level motifs for [same-size team hierarchy contrast](../validations/same_size_team_hierarchy_contrast.md), [within-author L-ratio fixed-effect comparison](../validations/within_author_l_ratio_fixed_effect.md), [team role-size scaling](../measures/team_role_size_scaling.md), [tall-team prevalence trend](../measures/tall_team_prevalence_trend.md), [team hierarchy productivity redistribution](team_hierarchy_productivity_redistribution.md), [team hierarchy credit-risk hedge](team_hierarchy_credit_risk_hedge.md), [flat-leadership task reorganization](../methods/flat_leadership_task_reorganization.md), [developmental index](../measures/developmental_index.md), and [citation-window impact split](../measures/citation_window_impact_split.md).

- A residual Xu pass adds [contribution-unevenness L-ratio predictor](../methods/contribution_unevenness_l_ratio_predictor.md), [journal-specific L-ratio baseline](../measures/journal_specific_l_ratio_baseline.md), [role-specific same-year productivity](../measures/role_specific_same_year_productivity.md), [team career-age structure controls](../validations/team_career_age_structure_controls.md), [gender-unmeasured L-ratio confound](../validations/gender_unmeasured_l_ratio_confound.md), [reference/topic role-contribution signal](../validations/reference_topic_role_contribution_signal.md), [first/corresponding-author role alignment](../validations/first_corresponding_author_role_alignment.md), [top-decile L-ratio novelty response](../measures/top_decile_l_ratio_novelty_response.md), [L-ratio outcome battery](../methods/l_ratio_outcome_battery.md), and [bootstrapped L-ratio response curves](../validations/bootstrapped_l_ratio_response_curves.md).
## Operationalization

- Extract author contribution statements and classify roles into lead and support categories.
- Compute the lead-ratio or L-ratio as the fraction of team members playing lead roles.
- Compare papers with similar team size but different L-ratio on novelty, disruption/development, short-term citations, long-term citations, and author productivity.
- Use author fixed effects to reduce confounding from individual ability, seniority, and field.
- Use [contributorship prediction models](../methods/contributorship_prediction_models.md) to scale role measures to papers without explicit contribution statements.
- Measure innovation outputs with role-aware indicators such as [topic-keyword embedding novelty](../measures/topic_keyword_embedding_novelty.md) and [developmental index](../measures/developmental_index.md).

## Evidence and Validations

- Verified full-text evidence from Xu, Wu, and Evans (2022) builds a lead/support classifier from contribution statements and scales team L-ratio estimates to 16,397,750 multi-author papers from 1950 to 2020.
- Xu et al. report that team hierarchy is related to but not reducible to team size: smaller teams tend to be flatter, but substantial same-size variation in L-ratio allows hierarchy and size effects to be separated.
- Their full text reports that the probability of writing a novel paper increases with L-ratio, while developmental impact decreases with it; low-L-ratio teams receive more short-term citations, while high-L-ratio teams have greater long-term influence.
- The authors also report that tall teams grew over time: defining tall teams as L-ratio below 0.5, their share rose from about 50% in 1950 to about 70% in 2015.
- Xu et al. validate role extrapolation through [lead/support role prediction validation](../validations/lead_support_role_prediction_validation.md), reporting precision 0.79, recall 0.793, and predicted-versus-empirical L-ratio correlation of 0.66.
- The same full text supports a policy-facing intervention motif: task reorganization can broaden lead roles inside existing teams instead of changing team size or career-age composition.
- A later pass separates [focal-paper career role signal validation](../validations/focal_paper_career_role_signal_validation.md), [contribution-statement skill signaling](contribution_statement_skill_signaling.md), and the [big-science hierarchy innovation paradox](big_science_hierarchy_innovation_paradox.md) from the broader flat-teams mechanism.

## Caveats

- Contribution statements are incomplete, field-specific, and more common in recent biomedical and interdisciplinary journals.
- L-ratio captures formalized roles, not all informal power, mentoring, or intellectual contribution.
- Flatness can improve novelty without necessarily maximizing speed, coordination, or short-term credit.

## Links

- [team size and disruption](team_size_disruption.md)
- [team impact advantage](team_impact_advantage.md)
- [task specialization](task_specialization.md)
- [lead-role ratio](../measures/lead_role_ratio.md)
- [team role-size scaling](../measures/team_role_size_scaling.md)
- [tall-team prevalence trend](../measures/tall_team_prevalence_trend.md)
- [developmental index](../measures/developmental_index.md)
- [topic-keyword embedding novelty](../measures/topic_keyword_embedding_novelty.md)
- [citation-window impact split](../measures/citation_window_impact_split.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [MAG contribution-statement linked panel](../datasets/mag_contribution_statement_linked_panel.md)
- [lead/direct/indirect support role taxonomy](../representations/lead_direct_indirect_support_taxonomy.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [contributorship prediction models](../methods/contributorship_prediction_models.md)
- [lead/support role prediction validation](../validations/lead_support_role_prediction_validation.md)
- [focal-paper career role signal validation](../validations/focal_paper_career_role_signal_validation.md)
- [same-size team hierarchy contrast](../validations/same_size_team_hierarchy_contrast.md)
- [within-author L-ratio fixed-effect comparison](../validations/within_author_l_ratio_fixed_effect.md)
- [team hierarchy productivity redistribution](team_hierarchy_productivity_redistribution.md)
- [team hierarchy credit-risk hedge](team_hierarchy_credit_risk_hedge.md)
- [coordinated attention adaptability](coordinated_attention_adaptability.md)
- [hierarchy coordination-efficiency tradeoff](hierarchy_coordination_efficiency_tradeoff.md)
- [flat-leadership task reorganization](../methods/flat_leadership_task_reorganization.md)
- [contribution-statement NLP activity extraction](../methods/contribution_statement_nlp_activity_extraction.md)
- [observational hierarchy causality boundary](../validations/observational_hierarchy_causality_boundary.md)
- [contribution-statement skill signaling](contribution_statement_skill_signaling.md)
- [big-science hierarchy innovation paradox](big_science_hierarchy_innovation_paradox.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [novelty and conventionality](novelty_conventionality.md)
- [scientific career impact](scientific_career_impact.md)

- [contribution-unevenness L-ratio predictor](../methods/contribution_unevenness_l_ratio_predictor.md)
- [top-decile L-ratio novelty response](../measures/top_decile_l_ratio_novelty_response.md)
- [bootstrapped L-ratio response curves](../validations/bootstrapped_l_ratio_response_curves.md)
## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]
- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]
- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]

## Metadata

- Concept ID: `team_hierarchy_flatness`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: flat teams; team hierarchy; L-ratio; lead-role ratio; contribution hierarchy
