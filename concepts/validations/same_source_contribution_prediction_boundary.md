# Same-source contribution prediction boundary

## Summary

Same-source contribution prediction boundary is the caveat that low prediction error within one contribution-statement source does not prove role-imputation portability to different journals, fields, or reporting regimes.

## Canonical Form

- Unit of analysis: prediction model, training source, validation fold, journal, field, contribution taxonomy, or external dataset.
- Typical representation: in-domain cross-validation score, out-of-domain validation requirement, portability caveat, or source-boundary note.
- Validation target: separate same-source predictive accuracy from generalizable contribution-role inference.
- Empirical signature: a model performs well in k-fold validation but still needs testing on journals or fields outside the source corpus.

## Uses in Science of Science

- Qualifies [contributorship prediction models](../methods/contributorship_prediction_models.md).
- Connects [PLoS contribution-statement training set](../datasets/plos_contribution_statement_training_set.md) to external validity.
- Adds a source-portability layer to [Bayesian contributorship imputation](../methods/bayesian_contributorship_imputation.md).
- Complements [contribution-statement role-coverage caveat](contribution_statement_role_coverage_caveat.md), which focuses on where contribution statements exist.

## Operationalization

- Report whether validation folds are drawn from the same journal family, field, time window, and contribution taxonomy as the training data.
- Treat low in-domain error as evidence of internal fit, not external portability.
- Test on held-out journals, fields, or publishers when possible.
- Compare role distributions and prediction errors across contribution-taxonomy variants.
- Store source boundaries with imputed-role datasets.

## Evidence and Validations

- Verified full-text evidence from Robinson-Garcia et al. (2020) validates a Bayesian network using ten-fold cross-validation and converts predictive loss into classification error.
- The authors report low error rates but state that validation uses data of the same nature as the data used to quantify the model.
- They explicitly say that the extent to which contribution patterns can be inferred to other datasets should be investigated using different journals or fields, and later note that broader journal coverage would allow further testing of predictive performance.

## Caveats

- External validation can be limited by the uneven adoption of contribution statements.
- Portability may fail because of field norms, journal templates, language, or changes in reporting policy.
- A model can be useful for within-source analysis even if it is not portable.

## Links

- [contributorship prediction models](../methods/contributorship_prediction_models.md)
- [PLoS contribution-statement training set](../datasets/plos_contribution_statement_training_set.md)
- [Bayesian contributorship imputation](../methods/bayesian_contributorship_imputation.md)
- [contribution-statement role-coverage caveat](contribution_statement_role_coverage_caveat.md)
- [bibliometric contributorship predictor set](../representations/bibliometric_contributorship_predictor_set.md)
- [prediction-error propagated archetype uncertainty](prediction_error_propagated_archetype_uncertainty.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; SciSciNet: W3097159753; WoS: unknown]

## Metadata

- Concept ID: `same_source_contribution_prediction_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Robinson-Garcia et al. (2020) (2020)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: same-domain contributorship validation limit; contribution prediction portability boundary; in-domain role-imputation caveat; same-source BN validation boundary
