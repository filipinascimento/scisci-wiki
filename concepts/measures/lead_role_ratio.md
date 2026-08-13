# Lead-role ratio

## Summary

Lead-role ratio, or L-ratio, measures the share of authors on a paper who occupy lead roles rather than direct or indirect support roles.

## Canonical Form

- Unit of analysis: paper, author team, field-year cohort, journal, or inferred role table.
- Typical representation: scalar ratio from `1 / team_size` to `1.0`, where higher values indicate flatter distribution of leadership.
- Measurement target: internal team hierarchy, not just raw team size.
- Empirical signature: teams of the same size differ in novelty, development, short-term citations, long-term influence, and member productivity as L-ratio varies.

## Uses in Science of Science

- Provides the measure behind [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md).
- Translates [author contribution statements](../datasets/author_contribution_statements.md) and [contribution role vectors](../representations/contribution_role_vectors.md) into a paper-level hierarchy score.
- Separates role structure from [team size and disruption](../mechanisms/team_size_disruption.md).
- Supports longitudinal hierarchy measurement through [tall-team prevalence trend](tall_team_prevalence_trend.md) and descriptive role decomposition through [team role-size scaling](team_role_size_scaling.md).
- Connects to outcome-specific tests through [same-size team hierarchy contrast](../validations/same_size_team_hierarchy_contrast.md), [within-author L-ratio fixed-effect comparison](../validations/within_author_l_ratio_fixed_effect.md), [developmental index](developmental_index.md), and [citation-window impact split](citation_window_impact_split.md).

## Operationalization

- Classify each author on a paper as lead, direct support, or indirect support using contribution statements or an imputed role model.
- Count authors in lead roles and divide by total team size.
- Compare L-ratio within fixed team-size, field, year, journal, and author strata.
- Use [contributorship prediction models](../methods/contributorship_prediction_models.md) to estimate the measure in corpora without explicit statements.

## Evidence and Validations

- Verified full-text evidence from Xu, Wu, and Evans (2022) defines L-ratio as the fraction of authors playing lead roles among all team members.
- The paper states that L-ratio ranges from `1/n` for maximum hierarchy to `1.0` for flatness in a team of `n` authors.
- Xu et al. validate lead/support roles through author byline positions, imputed ideas and prior knowledge contributed to the paper, and scientists' cumulative contributions to science.
- The full text reports that lead authors are 10-20% more likely than average to introduce references, direct topics, initiate research as first author, and manage communication as corresponding author, while support authors are 5-10% less likely than average to do those tasks.
- Xu et al. report that high-L-ratio teams are more likely to produce top-novelty papers and long-term citation influence, while low-L-ratio teams receive more short-term citations.
- The same full text reports a role-prediction validation with precision 0.79, recall 0.793, and predicted-versus-observed L-ratio correlation of 0.66.
- Xu et al. also use the ratio to define tall teams below 0.5 and show that role composition changes systematically with team size.

## Caveats

- L-ratio depends on the role classifier and the availability or comparability of contribution statements.
- Flat leadership can correlate with team size, field, journal, seniority mix, and project type, so comparisons require controls.
- The ratio captures reported leadership distribution, not all power relations, mentoring, or hidden labor.

## Links

- [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [lead/direct/indirect support role taxonomy](../representations/lead_direct_indirect_support_taxonomy.md)
- [team role-size scaling](team_role_size_scaling.md)
- [tall-team prevalence trend](tall_team_prevalence_trend.md)
- [contributorship prediction models](../methods/contributorship_prediction_models.md)
- [lead/support role prediction validation](../validations/lead_support_role_prediction_validation.md)
- [same-size team hierarchy contrast](../validations/same_size_team_hierarchy_contrast.md)
- [within-author L-ratio fixed-effect comparison](../validations/within_author_l_ratio_fixed_effect.md)
- [developmental index](developmental_index.md)
- [citation-window impact split](citation_window_impact_split.md)
- [task specialization](../mechanisms/task_specialization.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)
- [disruption index](disruption_index.md)
- [responsible metrics](responsible_metrics.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]
- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; WoS: unknown]

## Metadata

- Concept ID: `lead_role_ratio`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: L-ratio; lead-ratio; flatness ratio; fraction of lead authors; team lead share
