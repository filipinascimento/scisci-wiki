# Contribution-statement role-granularity limit

## Summary

Contribution-statement role-granularity limit is the validity problem that author contribution statements may use role categories that are too coarse, source-specific, or self-reported to capture the full division of labor in research teams.

## Canonical Form

- Unit of analysis: contribution statement, role taxonomy, journal template, author-paper row, field, or role-prediction model.
- Typical representation: role taxonomy comparison, missing-role audit, self-reporting caveat, or field-specific contribution vocabulary.
- Validation target: determine whether observed contribution categories are detailed enough for role-aware analysis.
- Empirical signature: broad role labels blur distinct tasks or produce ambiguous prediction distributions.

## Uses in Science of Science

- Qualifies [author contribution statements](../datasets/author_contribution_statements.md) before they are used as ground truth.
- Adds a source-validity check for [contribution role vectors](../representations/contribution_role_vectors.md).
- Constrains [Bayesian contributorship imputation](../methods/bayesian_contributorship_imputation.md) and [contributorship prediction models](../methods/contributorship_prediction_models.md).
- Helps [responsible metrics](../measures/responsible_metrics.md) avoid turning contribution labels into overprecise credit scores.

## Operationalization

- Compare the statement taxonomy used by a journal or dataset with richer taxonomies such as CRediT.
- Audit whether broad categories combine conceptually different tasks, such as drafting, revising, supervision, software, data curation, and project administration.
- Report field and journal coverage before treating contribution categories as portable.
- Validate self-reported contribution labels against protocols, lab records, acknowledgments, or qualitative audits when feasible.

## Evidence and Validations

- Verified full-text evidence from Robinson-Garcia et al. (2020) uses five contribution types obtained from the data: writing, analysis, conception/design, tools/resources, and experiments.
- The paper notes that these types are consistent with prior studies but differ from the CRediT initiative, which defines up to 14 contribution types.
- Robinson-Garcia et al. state that author self-reporting on contributorship is not exempt from limitations and that field-dependence of contribution types remains unresolved.
- The authors flag ambiguity in the writing category, noting that CRediT separates first-draft writing from revising and editing.

## Caveats

- More granular role taxonomies can increase burden and may still miss informal labor.
- Different fields may need different role vocabularies rather than a universal taxonomy.
- Self-reported contribution statements can reflect negotiation, template compliance, or credit politics as well as actual work.

## Links

- [author contribution statements](../datasets/author_contribution_statements.md)
- [PLOS contribution-statement training set](../datasets/plos_contribution_statement_training_set.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [career-stage contributorship panel](../representations/career_stage_contributorship_panel.md)
- [Bayesian contributorship imputation](../methods/bayesian_contributorship_imputation.md)
- [contributorship prediction models](../methods/contributorship_prediction_models.md)
- [author-order contribution-proxy limits](author_order_contribution_proxy_limits.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; WoS: unknown]

## Metadata

- Concept ID: `contribution_statement_role_granularity_limit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Robinson-Garcia et al. (2020) (2020)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: contribution taxonomy granularity; CRediT granularity caveat; role-label coarseness; contributorship self-report limitation
