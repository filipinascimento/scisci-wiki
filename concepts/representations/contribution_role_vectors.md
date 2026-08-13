# Contribution role vectors

## Summary

Contribution role vectors encode each author-paper observation as a structured profile of reported or inferred scientific activities, such as writing, conceptualization, analysis, experiments, resources, leadership, and support.

## Canonical Form

- Unit of analysis: author-paper row, paper team, scientist career window, contribution statement, or activity cluster.
- Typical representation: binary role indicators, probability vectors, author-activity matrices, or archetypal mixtures.
- Representation target: unequal division of labor inside papers and careers.
- Empirical signature: role-vector distributions cluster by author order, career stage, gender, team size, and team hierarchy.

## Uses in Science of Science

- Adds a role layer to [coauthorship networks](coauthorship_networks.md) and paper-author tables.
- Provides features for [contributorship prediction models](../methods/contributorship_prediction_models.md) and [lead-role ratio](../measures/lead_role_ratio.md).
- Converts [author contribution statements](../datasets/author_contribution_statements.md) into quantitative inputs for [task specialization](../mechanisms/task_specialization.md).
- Can use the [lead/direct/indirect support role taxonomy](lead_direct_indirect_support_taxonomy.md) as a compact role basis.
- Supports [team role-size scaling](../measures/team_role_size_scaling.md) when vectors are aggregated by team size.
- Depends on source-specific role taxonomies, so [contribution-statement role-granularity limit](../validations/contribution_statement_role_granularity_limit.md) is a required validity check.

## Operationalization

- Parse contribution text into standardized activities or role categories.
- Represent each author as a vector of binary labels, counts, probabilities, or normalized role weights.
- Aggregate vectors at paper, career-stage, institution, field, or gender strata when needed.
- Use dimensionality reduction, clustering, Bayesian networks, neural classifiers, or archetypal analysis to discover role profiles.

## Evidence and Validations

- Verified full-text evidence from Robinson-Garcia et al. (2020) represents authors through contribution variables for writing, analysis, conception/design, tools/resources, experiments, and total number of contributions.
- The paper predicts each author's probability of performing each contribution on each publication, then aggregates median predicted contributorships by career stage.
- Robinson-Garcia et al. use robust archetypal analysis on the multivariate contribution representation to identify leader, specialized, and supporting profiles.
- These steps are split into [career-stage contributorship panel](career_stage_contributorship_panel.md), [Bayesian contributorship imputation](../methods/bayesian_contributorship_imputation.md), [robust archetypal contribution profiles](../methods/robust_archetypal_contribution_profiles.md), and [leader-specialized-supporting archetypes](leader_specialized_supporting_archetypes.md).
- Verified full-text evidence from Xu, Wu, and Evans (2022) clusters the 25 most common contribution activities into lead, direct-support, and indirect-support roles.
- The Xu et al. full text identifies those role clusters through [contribution activity modularity clustering](../methods/contribution_activity_modularity_clustering.md).

## Caveats

- Role vectors are only as reliable as the source statements and role-normalization scheme.
- Binary role vectors can hide intensity, quality, duration, and informal mentoring labor.
- Cross-field comparisons require caution because journals and fields differ in statement policies and role vocabularies.

## Links

- [author contribution statements](../datasets/author_contribution_statements.md)
- [lead/direct/indirect support role taxonomy](lead_direct_indirect_support_taxonomy.md)
- [contributorship prediction models](../methods/contributorship_prediction_models.md)
- [contribution-statement role-granularity limit](../validations/contribution_statement_role_granularity_limit.md)
- [career-stage contributorship panel](career_stage_contributorship_panel.md)
- [Bayesian contributorship imputation](../methods/bayesian_contributorship_imputation.md)
- [robust archetypal contribution profiles](../methods/robust_archetypal_contribution_profiles.md)
- [leader-specialized-supporting archetypes](leader_specialized_supporting_archetypes.md)
- [contribution activity modularity clustering](../methods/contribution_activity_modularity_clustering.md)
- [lead-role ratio](../measures/lead_role_ratio.md)
- [team role-size scaling](../measures/team_role_size_scaling.md)
- [task specialization](../mechanisms/task_specialization.md)
- [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)
- [paper-author-affiliation linkages](paper_author_affiliation_linkages.md)
- [coauthorship networks](coauthorship_networks.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; WoS: unknown]
- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `contribution_role_vectors`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: author-role vectors; contributorship vectors; role profiles; contribution activity matrix
