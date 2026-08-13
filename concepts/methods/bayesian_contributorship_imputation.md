# Bayesian contributorship imputation

## Summary

Bayesian contributorship imputation uses a probabilistic graphical model to infer author contribution probabilities for publications that lack explicit contribution statements.

## Canonical Form

- Unit of analysis: author-paper row, contribution role, bibliometric predictor, paper, or author career history.
- Typical representation: Bayesian network with bibliometric predictor nodes and contribution-probability output nodes.
- Method target: extrapolate observed contribution statements to larger publication histories.
- Empirical signature: predicted role probabilities recover observed contribution labels and scale to papers without statements.

## Uses in Science of Science

- Specializes [contributorship prediction models](contributorship_prediction_models.md) for role-aware career analysis.
- Produces imputed [contribution role vectors](../representations/contribution_role_vectors.md) for [career-stage contributorship panels](../representations/career_stage_contributorship_panel.md).
- Provides the input layer for [robust archetypal contribution profiles](robust_archetypal_contribution_profiles.md).
- Depends on the [PLOS contribution-statement training set](../datasets/plos_contribution_statement_training_set.md), so its outputs inherit [contribution-statement role-granularity limit](../validations/contribution_statement_role_granularity_limit.md).
- Complements Xu et al.'s [lead/support role prediction validation](../validations/lead_support_role_prediction_validation.md) by using a finer contribution-role basis.

## Operationalization

- Train on publications with observed contribution statements and linked bibliometric predictors.
- Use predictors such as author position, number of authors, document type, years since first publication, average publication rate, country count, and institution count.
- Constrain bibliometric predictors to influence contribution variables when learning the network structure.
- Validate with cross-validation and report role-level classification errors plus error for total number of contributions.
- Apply the fitted model to the broader author-publication history and retain predicted probabilities rather than hard labels where possible.

## Evidence and Validations

- Verified full-text evidence from Robinson-Garcia et al. (2020) trains on 70,694 PLOS papers authored by 347,136 scientists with contribution statements.
- The paper models five contribution types plus number of contributions using a Bayesian network with paper-level and author-level bibliometric variables.
- Robinson-Garcia et al. learn the network structure with a Max-Min Hill Climbing algorithm under constraints that arcs from bibliometric variables point toward contributorship variables.
- The full text reports bootstrap robustness checks with 50 repetitions and retains arcs present in 80% of repetitions.
- The paper reports 10-fold cross-validation with average classification error rates of 6-8% and mean squared error of 0.12 for predicted number of contributions, then imputes contribution probabilities for 222,925 authors across 6,236,239 publications.

## Caveats

- Author order and career-age predictors can encode field conventions and structural inequalities.
- Imputation quality can degrade outside the journals, fields, periods, or contribution-statement templates used for training.
- Probabilistic role outputs should not be treated as directly observed labor.

## Links

- [contributorship prediction models](contributorship_prediction_models.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [career-stage contributorship panel](../representations/career_stage_contributorship_panel.md)
- [PLOS contribution-statement training set](../datasets/plos_contribution_statement_training_set.md)
- [contribution-statement role-granularity limit](../validations/contribution_statement_role_granularity_limit.md)
- [robust archetypal contribution profiles](robust_archetypal_contribution_profiles.md)
- [task specialization](../mechanisms/task_specialization.md)
- [lead/support role prediction validation](../validations/lead_support_role_prediction_validation.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; WoS: unknown]

## Metadata

- Concept ID: `bayesian_contributorship_imputation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Robinson-Garcia et al. (2020) (2020)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: Bayesian contribution prediction; contribution probability imputation; BN contributorship model; role-probability imputation
