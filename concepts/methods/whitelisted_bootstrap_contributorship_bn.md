# Whitelisted bootstrap contributorship BN

## Summary

Whitelisted bootstrap contributorship BN is a Bayesian-network structure-learning protocol that constrains bibliometric variables to point toward contribution variables and retains only bootstrap-stable arcs.

## Canonical Form

- Unit of analysis: author-paper row, bibliometric predictor, contribution variable, Bayesian-network arc, or bootstrap replicate.
- Typical representation: constrained Max-Min Hill Climbing Bayesian network with arc-retention threshold.
- Method target: infer contribution probabilities while enforcing a defensible direction from observed bibliometric features to contribution-role variables.
- Empirical signature: arcs from bibliometric variables to contribution variables are direction-constrained, and only arcs appearing in a high share of bootstrap structures are retained.

## Uses in Science of Science

- Specializes [Bayesian contributorship imputation](bayesian_contributorship_imputation.md) by separating structure-learning constraints from prediction.
- Provides the model-construction layer for [contributorship prediction models](contributorship_prediction_models.md).
- Produces role probabilities that feed [contribution role vectors](../representations/contribution_role_vectors.md) and [career-stage contributorship panels](../representations/career_stage_contributorship_panel.md).
- Pairs with [prediction-error propagated archetype uncertainty](../validations/prediction_error_propagated_archetype_uncertainty.md) when reporting downstream archetype uncertainty.

## Operationalization

- Define bibliometric variables and contribution variables before structure learning.
- Use a whitelist or direction constraint so any arc between bibliometric and contribution variables points to the contribution variable.
- Learn the Bayesian-network structure with a hybrid method such as Max-Min Hill Climbing.
- Bootstrap the training data many times and relearn structures.
- Retain arcs that appear in at least the chosen bootstrap threshold, such as 80% of repetitions.

## Evidence and Validations

- Verified full-text evidence from Robinson-Garcia et al. (2020) uses a Bayesian network to predict five contribution types plus number of contributions from seven bibliometric variables.
- The paper learns the network with Max-Min Hill Climbing while constraining bibliometric variables to influence contributorship variables.
- In the methods section, the authors describe a whitelist that imposes direct influences from bibliometric to contributorship variables while leaving remaining arcs data-driven.
- Robinson-Garcia et al. test arc strength with 50 bootstrap repetitions and retain only arcs present in at least 80% of structures.

## Caveats

- Direction constraints encode modeling assumptions and do not prove causal direction.
- Bootstrap-stable arcs can still reflect field conventions, author-order norms, or structural inequality.
- The retained network depends on the available predictors and the source corpus used for observed contribution labels.

## Links

- [Bayesian contributorship imputation](bayesian_contributorship_imputation.md)
- [contributorship prediction models](contributorship_prediction_models.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [career-stage contributorship panel](../representations/career_stage_contributorship_panel.md)
- [PLOS contribution-statement training set](../datasets/plos_contribution_statement_training_set.md)
- [prediction-error propagated archetype uncertainty](../validations/prediction_error_propagated_archetype_uncertainty.md)
- [task specialization](../mechanisms/task_specialization.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; WoS: unknown]

## Metadata

- Concept ID: `whitelisted_bootstrap_contributorship_bn`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Robinson-Garcia et al. (2020) (2020)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: constrained contributorship Bayesian network; bootstrap-stable BN arcs; whitelisted MMHC contribution model; arc-robust contributorship BN
