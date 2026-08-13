# Career-stage contributorship panel

## Summary

Career-stage contributorship panel represents author contribution roles by career stage, allowing division of labor to be compared across junior, early-career, mid-career, and late-career scientists.

## Canonical Form

- Unit of analysis: author-paper contribution, scientist, career stage, author order, or contribution role.
- Typical representation: panel table with author-paper rows, contribution indicators, years since first publication, and author-order variables.
- Representation target: career-level movement through scientific tasks rather than only publication counts or citations.
- Empirical signature: contribution-role shares differ by career stage and author order.

## Uses in Science of Science

- Provides the stage-structured data layer for [task specialization](../mechanisms/task_specialization.md).
- Converts [author contribution statements](../datasets/author_contribution_statements.md) into career-level role histories.
- Supplies inputs to [contribution role vectors](contribution_role_vectors.md), [Bayesian contributorship imputation](../methods/bayesian_contributorship_imputation.md), and [robust archetypal contribution profiles](../methods/robust_archetypal_contribution_profiles.md).
- Supports [author-order contribution-proxy limits](../validations/author_order_contribution_proxy_limits.md) by keeping byline position and contribution roles in the same panel.
- Helps interpret [scientific career impact](../mechanisms/scientific_career_impact.md) without assuming that all coauthorships indicate the same labor or leadership.

## Operationalization

- Define career stage by years since first publication or another reproducible career-age anchor.
- Attach contribution roles such as writing, analysis, conception/design, experiments, resources/tools, and number of contributions.
- Keep author order, team size, document type, field, country count, institution count, and productivity variables for modeling.
- Aggregate role shares by career stage and author order before fitting imputation or archetype models.

## Evidence and Validations

- Verified full-text evidence from Robinson-Garcia et al. (2020) defines four career stages: junior under 5 years since first publication, early-career 5 to under 15 years, mid-career 15 to under 30 years, and late-career at least 30 years.
- The paper analyzes five contribution types: wrote the paper, conceived and designed experiments, performed experiments, analyzed data, and contributed reagents/materials/analysis tools, plus total number of contributions.
- Robinson-Garcia et al. report that earlier stages are more associated with performing experiments and analyzing data, while writing and contributing resources increase with seniority before declining in late career.
- The same full text reports that first authors are broadly associated with most contributions, middle authors less with writing and conception/design but more with resources, and last authors mostly with design/conception and writing.

## Caveats

- Career-stage definitions can mix cohort, field, and survival effects.
- Contribution statements are unevenly available across journals and may encode reporting norms as well as labor.
- Author-order meanings differ across fields and can distort role comparisons.

## Links

- [task specialization](../mechanisms/task_specialization.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [contribution role vectors](contribution_role_vectors.md)
- [Bayesian contributorship imputation](../methods/bayesian_contributorship_imputation.md)
- [robust archetypal contribution profiles](../methods/robust_archetypal_contribution_profiles.md)
- [leader-specialized-supporting archetypes](leader_specialized_supporting_archetypes.md)
- [contribution archetype career progression](../mechanisms/contribution_archetype_career_progression.md)
- [PLOS contribution-statement training set](../datasets/plos_contribution_statement_training_set.md)
- [author-order contribution-proxy limits](../validations/author_order_contribution_proxy_limits.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; WoS: unknown]

## Metadata

- Concept ID: `career_stage_contributorship_panel`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Robinson-Garcia et al. (2020) (2020)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: career-stage contribution panel; contributorship career panel; role-by-career-stage table; contribution-stage panel
