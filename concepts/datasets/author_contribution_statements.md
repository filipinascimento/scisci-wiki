# Author contribution statements

## Summary

Author contribution statements are paper-level metadata that describe which listed authors performed activities such as writing, conceptualization, analysis, experiments, supervision, data collection, software, or resource provision.

## Canonical Form

- Unit of analysis: paper, author, contribution statement, research activity, journal, field, or time period.
- Typical representation: author-activity table, contribution text spans, CRediT-like role labels, or binary author-role indicators.
- Data target: observable contribution claims that add role information to ordinary authorship records.
- Empirical signature: contribution-role frequencies vary by author order, career stage, field, journal policy, and team size.

## Uses in Science of Science

- Makes [coauthorship networks](../representations/coauthorship_networks.md) role-aware rather than treating every edge as symmetric collaboration.
- Provides the observed data layer for [task specialization](../mechanisms/task_specialization.md), [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md), and [lead-role ratio](../measures/lead_role_ratio.md).
- Supports evaluation of contribution inequality, division of labor, and responsible credit assignment.
- Can be linked into larger panels through the [MAG contribution-statement linked panel](mag_contribution_statement_linked_panel.md).
- Has source-specific training-set and taxonomy caveats, including the [PLOS contribution-statement training set](plos_contribution_statement_training_set.md) and [contribution-statement role-granularity limit](../validations/contribution_statement_role_granularity_limit.md).
- Requires [contribution-statement role coverage caveat](../validations/contribution_statement_role_coverage_caveat.md) when statement-bearing journals train models for broader publication corpora.

## Operationalization

- Collect statement text from journals, XML metadata, publisher pages, or full-text articles.
- Normalize activities into role labels such as writing, conceptualization/design, analysis, experiments, resources/tools, leadership, direct support, or indirect support.
- Link each activity to author identifiers and author-order positions.
- Validate extracted roles against author bylines, manually coded samples, and journal-specific contribution templates.

## Evidence and Validations

- Verified full-text evidence from Robinson-Garcia et al. (2020) uses author contribution statements from 70,694 PLOS papers covering 347,136 distinct authors.
- The paper identifies five contribution types in the PLOS data: wrote the paper, conceived and designed the experiments, performed the experiments, analyzed the data, and contributed reagents/materials/analysis tools.
- The same full text cautions that the PLOS role vocabulary is coarser than CRediT and that contribution statements remain self-reported and field-dependent.
- Robinson-Garcia et al. show that reported contribution roles vary by career stage and author order, making statements an empirical basis for career-level task specialization.
- Their career-level workflow is split into [career-stage contributorship panel](../representations/career_stage_contributorship_panel.md), [Bayesian contributorship imputation](../methods/bayesian_contributorship_imputation.md), and [leader-specialized-supporting archetypes](../representations/leader_specialized_supporting_archetypes.md).
- Verified full-text evidence from Xu, Wu, and Evans (2022) expands the contribution-statement data layer to PNAS, Nature, Science, and PLOS ONE, covering 89,575 self-reported team-member activity statements.
- Xu et al. report that the 25 most common extracted research activities cover 94.6% of their contribution-statement data.
- Xu et al. use those activities to support [lead/direct/indirect support role taxonomy](../representations/lead_direct_indirect_support_taxonomy.md) and [contribution activity modularity clustering](../methods/contribution_activity_modularity_clustering.md).

## Caveats

- Contribution statements are unevenly available across journals, fields, and years.
- Statements may reflect negotiated credit, journal templates, and compliance norms rather than complete labor histories.
- Text extraction requires careful author-name matching and activity normalization.
- Role-imputation studies should record source journals and time windows before generalizing statements to all scientific teams.

## Links

- [contribution role vectors](../representations/contribution_role_vectors.md)
- [PLOS contribution-statement training set](plos_contribution_statement_training_set.md)
- [contribution-statement role-granularity limit](../validations/contribution_statement_role_granularity_limit.md)
- [contribution-statement role coverage caveat](../validations/contribution_statement_role_coverage_caveat.md)
- [lead/direct/indirect support role taxonomy](../representations/lead_direct_indirect_support_taxonomy.md)
- [MAG contribution-statement linked panel](mag_contribution_statement_linked_panel.md)
- [career-stage contributorship panel](../representations/career_stage_contributorship_panel.md)
- [Bayesian contributorship imputation](../methods/bayesian_contributorship_imputation.md)
- [leader-specialized-supporting archetypes](../representations/leader_specialized_supporting_archetypes.md)
- [contributorship prediction models](../methods/contributorship_prediction_models.md)
- [contribution activity modularity clustering](../methods/contribution_activity_modularity_clustering.md)
- [lead-role ratio](../measures/lead_role_ratio.md)
- [task specialization](../mechanisms/task_specialization.md)
- [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; WoS: unknown]
- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `author_contribution_statements`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: contributorship statements; author role statements; contribution disclosures; CRediT-like roles
