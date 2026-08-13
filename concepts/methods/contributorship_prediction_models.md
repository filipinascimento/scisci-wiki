# Contributorship prediction models

## Summary

Contributorship prediction models infer author contribution roles for papers or career histories when contribution statements are missing, incomplete, or available only for a training subset.

## Canonical Form

- Unit of analysis: author-paper row, contribution role, paper, author career, journal, or team.
- Typical representation: Bayesian network, neural classifier, role-probability vector, or imputed author-role table.
- Method target: extrapolate role-aware science-of-science measures beyond papers with explicit contribution statements.
- Empirical signature: predicted role probabilities recover observed contribution labels and produce interpretable variation by author order, career age, team size, and productivity.

## Uses in Science of Science

- Extends [author contribution statements](../datasets/author_contribution_statements.md) to larger corpora where statements are not directly observed.
- Supplies imputed [contribution role vectors](../representations/contribution_role_vectors.md) for career, team, and field-level analyses.
- Enables role-aware versions of [coauthorship networks](../representations/coauthorship_networks.md), [lead-role ratio](../measures/lead_role_ratio.md), and [task specialization](../mechanisms/task_specialization.md).
- Requires dataset-specific source checks such as the [PLOS contribution-statement training set](../datasets/plos_contribution_statement_training_set.md) and [contribution-statement role-granularity limit](../validations/contribution_statement_role_granularity_limit.md).
- Requires explicit validation such as [lead/support role prediction validation](../validations/lead_support_role_prediction_validation.md) before extrapolating roles to larger corpora.
- Requires [contribution-statement role coverage caveat](../validations/contribution_statement_role_coverage_caveat.md) when the training journals and years differ from the target corpus.

## Operationalization

- Build a training set of papers with observed contribution statements and linked bibliometric variables.
- Choose predictors such as author order, team size, document type, number of institutions, number of countries, career age, productivity, prior topics, or prior citations.
- Train and validate a model to predict role labels or role probabilities.
- Apply the model to papers without statements and audit predictions across fields, years, team sizes, and author-order conventions.
- Use [Bayesian contributorship imputation](bayesian_contributorship_imputation.md) when the model is a probabilistic graphical network over bibliometric and contribution variables.

## Evidence and Validations

- Verified full-text evidence from Robinson-Garcia et al. (2020) trains a Bayesian-network model on 70,694 PLOS papers and predicts contribution probabilities for 222,925 authors across 6,236,239 publications.
- The paper uses bibliometric predictors including author position, number of authors, document type, country and institution counts, years since first publication, and average publications per year.
- Robinson-Garcia et al. report k-fold cross-validation with average classification error rates of 6-8% for contributorship labels and mean squared error of 0.12 for predicted number of contributions.
- Verified full-text evidence from Xu, Wu, and Evans (2022) uses contribution-statement activities to train a lead/support classifier with precision 0.79 and recall 0.793, then predicts L-ratio for papers without explicit statements.
- Xu et al. report that predicted and empirical L-ratios correlate at 0.66.
- Their role prediction workflow supports the [MAG contribution-statement linked panel](../datasets/mag_contribution_statement_linked_panel.md).

## Caveats

- Prediction models can reproduce field, journal, gender, and author-order biases present in the training statements.
- High predictive accuracy for coarse roles does not prove that unobserved labor or informal intellectual work is captured.
- Extrapolation outside the training journals and periods should be separately validated.
- MAG-based extrapolations should be treated as historical unless the publication spine is refreshed.

## Links

- [author contribution statements](../datasets/author_contribution_statements.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [PLOS contribution-statement training set](../datasets/plos_contribution_statement_training_set.md)
- [Bayesian contributorship imputation](bayesian_contributorship_imputation.md)
- [contribution-statement role-granularity limit](../validations/contribution_statement_role_granularity_limit.md)
- [contribution-statement role coverage caveat](../validations/contribution_statement_role_coverage_caveat.md)
- [robust archetypal contribution profiles](robust_archetypal_contribution_profiles.md)
- [lead/support role prediction validation](../validations/lead_support_role_prediction_validation.md)
- [lead-role ratio](../measures/lead_role_ratio.md)
- [task specialization](../mechanisms/task_specialization.md)
- [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)
- [author name disambiguation](author_name_disambiguation.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; WoS: unknown]
- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `contributorship_prediction_models`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: contribution-role imputation; author-role prediction; role probability model; lead-support classifier
