# Prediction residuals as discovery diagnostics

## Summary

Prediction residuals as discovery diagnostics treats large model failures, citation outliers, and dormant successes as evidence about missing mechanisms rather than only as prediction errors.

## Canonical Form

- Unit of analysis: predicted outcome, observed outcome, residual, outlier paper, sleeping beauty, discovery, or model class.
- Typical representation: residual audit, exception set, false-negative analysis, or structured case review of prediction failures.
- Validation target: learn where a model's scope ends and which mechanisms are missing.
- Empirical signature: papers or careers that far exceed or fall below predictions reveal delayed recognition, hidden quality, field movement, or unmodeled social mechanisms.

## Uses in Science of Science

- Complements [scientific discovery prediction](../methods/scientific_discovery_prediction.md) by using failures as evidence.
- Links [expected-unexpected discovery spectrum](../representations/expected_unexpected_discovery_spectrum.md) and [novel-discovery out-of-distribution limit](novel_discovery_out_of_distribution_limit.md).
- Provides a validation practice for [long-term citation prediction](../methods/long_term_citation_prediction.md) and [citation trajectory models](../methods/citation_trajectory_models.md).
- Connects prediction work to [sleeping beauty](../mechanisms/sleeping_beauty.md) and [delayed recognition](../mechanisms/delayed_recognition.md).

## Operationalization

- Fit the prediction model using temporally valid training data.
- Identify residuals or rank errors, especially high-impact work assigned low predicted value.
- Categorize exceptions by mechanism: delayed recognition, field formation, novelty, data errors, strategic behavior, or unobserved quality.
- Compare exception classes across fields and cohorts.
- Feed residual diagnostics back into model-scope statements and policy safeguards.

## Evidence and Validations

- Verified full-text evidence from Clauset et al. (2017) states that citation-trajectory models can predict long-term citation evolution but that some discoveries do not follow those rules.
- The paper notes that some papers far exceed simple preferential-attachment predictions.
- Clauset et al. use sleeping beauties as examples of discoveries that can remain dormant before receiving major attention.
- The essay argues that such awakenings may be fundamentally unpredictable because science itself must advance before implications can unfold.

## Caveats

- Residuals can reflect data errors, source coverage, or poor model specification rather than meaningful discovery mechanisms.
- Not every prediction failure is a valuable outlier.
- Diagnostic residual analysis should use temporally honest validation to avoid learning from future knowledge.

## Links

- [scientific discovery prediction](../methods/scientific_discovery_prediction.md)
- [expected-unexpected discovery spectrum](../representations/expected_unexpected_discovery_spectrum.md)
- [novel-discovery out-of-distribution limit](novel_discovery_out_of_distribution_limit.md)
- [long-term citation prediction](../methods/long_term_citation_prediction.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [delayed recognition](../mechanisms/delayed_recognition.md)
- [lagging-indicator prediction limits](lagging_indicator_prediction_limits.md)

## References

- Clauset, A., Larremore, D. B., & Sinatra, R. (2017). Data-driven predictions in the science of science. *Science*, 355(6324), 477-480. https://doi.org/10.1126/science.aal4217 [OpenAlex: W2585057539; Dimensions: pub.1083524092; WoS: unknown]

## Metadata

- Concept ID: `prediction_residuals_as_discovery_diagnostics`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2017) (2017)
- Latest seen paper: Clauset et al. (2017) (2017)
- Primary reference DOI: `10.1126/science.aal4217`
- OpenAlex ID: `W2585057539`
- Dimensions ID: `pub.1083524092`
- SciSciNet ID: `W2585057539`
- Aliases: prediction failure diagnostics; discovery residual audit; outlier prediction diagnostics; citation residual discovery signal
