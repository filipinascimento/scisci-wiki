# Contribution taxonomy consistency filter

## Summary

Contribution taxonomy consistency filter removes contribution-statement categories that are too rare, source-specific, or semantically heterogeneous to support stable role modeling across a corpus.

## Canonical Form

- Unit of analysis: contribution statement, role category, journal template, author-paper row, or training corpus.
- Typical representation: retained role taxonomy after frequency and interpretability filtering.
- Method target: create a consistent contribution-role basis before prediction, vectorization, or archetype analysis.
- Empirical signature: rare or heterogeneous contribution labels are dropped or merged while stable categories are retained for modeling.

## Uses in Science of Science

- Prepares [author contribution statements](../datasets/author_contribution_statements.md) for [contribution role vectors](../representations/contribution_role_vectors.md).
- Refines the [PLOS contribution-statement training set](../datasets/plos_contribution_statement_training_set.md) before [contributorship prediction models](contributorship_prediction_models.md).
- Provides a concrete preprocessing response to the [contribution-statement role-granularity limit](../validations/contribution_statement_role_granularity_limit.md).
- Helps make [task specialization](../mechanisms/task_specialization.md) analyses comparable across journals and time.

## Operationalization

- Enumerate all contribution categories in the source corpus.
- Measure category frequency and coverage by journal, year, and field.
- Drop categories that are rare, not consistently recorded, or too heterogeneous to interpret.
- Document which categories were removed and why.
- Build role vectors and prediction models only from the retained contribution categories.

## Evidence and Validations

- Verified full-text evidence from Robinson-Garcia et al. (2020) reports that seven contribution types were originally included in the PLOS contribution dataset.
- The paper keeps five contribution types because only those were used consistently throughout the dataset.
- The authors exclude "Approved final version of the manuscript" because it appears in less than 5% of papers and exclude "Other contributions" because it is an aggregate containing nearly 20,000 different contribution types.
- This filtering step precedes the construction of contribution indicators used in the Bayesian network and archetype analysis.

## Caveats

- Dropping rare categories can remove important but underreported labor.
- Consistency filtering improves model stability but may make the taxonomy less complete.
- Decisions about merging or dropping categories should be reported because they shape downstream role profiles.

## Links

- [author contribution statements](../datasets/author_contribution_statements.md)
- [PLOS contribution-statement training set](../datasets/plos_contribution_statement_training_set.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [contribution-statement role-granularity limit](../validations/contribution_statement_role_granularity_limit.md)
- [contributorship prediction models](contributorship_prediction_models.md)
- [task specialization](../mechanisms/task_specialization.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; WoS: unknown]

## Metadata

- Concept ID: `contribution_taxonomy_consistency_filter`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Robinson-Garcia et al. (2020) (2020)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: role taxonomy pruning; contribution category consistency check; contribution-label filtering; stable contributorship taxonomy
