# PLOS contribution-statement training set

## Summary

The PLOS contribution-statement training set is a corpus of PLOS Medical and Life Sciences papers with machine-readable author contribution statements, used to train role-prediction models for larger publication histories.

## Canonical Form

- Unit of analysis: PLOS paper, author-paper row, contribution statement, contribution role, disambiguated author, or linked Web of Science record.
- Typical representation: author-paper table with binary contribution indicators and bibliometric predictors.
- Data target: observed contribution labels for training contributorship prediction models.
- Empirical signature: a seed corpus with explicit role statements is linked to a much larger publication-history panel.

## Uses in Science of Science

- Supplies the training data for [Bayesian contributorship imputation](../methods/bayesian_contributorship_imputation.md).
- Provides observed labels behind [contribution role vectors](../representations/contribution_role_vectors.md) and [career-stage contributorship panel](../representations/career_stage_contributorship_panel.md).
- Extends the broader [author contribution statements](author_contribution_statements.md) motif with a concrete source corpus.
- Supports role-aware evaluation under [responsible metrics](../measures/responsible_metrics.md).

## Operationalization

- Extract contribution statements from PLOS XML.
- Map contribution phrases to role indicators such as writing, analysis, conception/design, experiments, tools/resources, and number of contributions.
- Link author names to Web of Science publication histories after disambiguation.
- Restrict or stratify by field when contribution roles are expected to vary across disciplines.

## Evidence and Validations

- Verified full-text evidence from Robinson-Garcia et al. (2020) uses 70,694 PLOS publications with 347,136 distinct authors as the seed contribution-statement dataset.
- The paper restricts the seed to Medical and Life Sciences fields to reduce disciplinary differences in task distribution.
- Robinson-Garcia et al. report that the full publication-history dataset expands to 222,925 scientists and 6,236,239 publications for contribution prediction.
- The seed corpus is dominated by PLOS ONE but also includes PLOS Genetics, PLOS Pathogens, PLOS Computational Biology, PLOS Neglected Tropical Diseases, PLOS Biology, and PLOS Medicine.

## Caveats

- PLOS contribution statements are not representative of all journals, fields, years, or authorship cultures.
- The source roles are coarser than the CRediT taxonomy and depend on self-reported statements.
- XML availability makes the corpus computationally useful but also source-specific.

## Links

- [author contribution statements](author_contribution_statements.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [career-stage contributorship panel](../representations/career_stage_contributorship_panel.md)
- [Bayesian contributorship imputation](../methods/bayesian_contributorship_imputation.md)
- [contributorship prediction models](../methods/contributorship_prediction_models.md)
- [contribution-statement role-granularity limit](../validations/contribution_statement_role_granularity_limit.md)
- [task specialization](../mechanisms/task_specialization.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; WoS: unknown]

## Metadata

- Concept ID: `plos_contribution_statement_training_set`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Robinson-Garcia et al. (2020) (2020)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: PLOS contributorship training corpus; PLOS author contribution corpus; PLOS role-label training data; PLOS contribution XML dataset
