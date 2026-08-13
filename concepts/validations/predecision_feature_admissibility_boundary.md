# Predecision feature-admissibility boundary

## Summary

Forecast evaluation should distinguish features available before a decision from post-outcome traces that leak future success.

## Canonical Form

- Unit of analysis: feature, decision timestamp, manuscript, proposal, hiring decision, funding decision, or forecast model.
- Typical representation: decision-time feature audit with temporal leakage checks.
- Mechanism, measurement, or validation target: valid predictor availability at deployment time.
- Empirical signature: model performance falls when features unavailable at decision time are excluded..

## Uses in Science of Science

- Sharpens [lagging-indicator prediction limits](lagging_indicator_prediction_limits.md).
- Links [context-specific SciSci prediction data](../datasets/context_specific_scisci_prediction_data.md) to leakage control.
- Useful for predictive evaluation and peer-review models.

## Operationalization

- Timestamp candidate predictors relative to manuscript, grant, hiring, or funding decision time.
- Exclude or audit citation, publication, review, and social traces unavailable at deployment.
- Report performance with strictly predecision features.

## Evidence and Validations

- Verified full-text evidence from Clauset et al. (2017) contrasts lagging generic measures with timely sources such as preprints, workshops, team communication, rejected submissions, peer reviews, and social media.

## Caveats

- The paper motivates timely data but does not formalize a full admissibility protocol.
- Some features are technically available but socially unavailable to a decision maker.

## Links

- [Lagging-indicator prediction limits](lagging_indicator_prediction_limits.md)
- [Context-specific SciSci prediction data](../datasets/context_specific_scisci_prediction_data.md)
- [Predictive bibliographic platform traces](../datasets/predictive_bibliographic_platform_traces.md)
- [Test-time citation graph leakage control](test_time_citation_graph_leakage_control.md)
- [Publication-conditioned SciSci blind spot](publication_conditioned_scisci_blind_spot.md)

## References

- Clauset, A., Larremore, D. B., & Sinatra, R. (2017). Data-driven predictions in the science of science. *Science*, 355(6324), 477-480. https://doi.org/10.1126/science.aal4217 [OpenAlex: W2585057539; Dimensions: pub.1083524092; WoS: unknown]

## Metadata

- Concept ID: `predecision_feature_admissibility_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2017) (2017)
- Latest seen paper: Clauset et al. (2017) (2017)
- Primary reference DOI: `10.1126/science.aal4217`
- OpenAlex ID: `W2585057539`
- Dimensions ID: `pub.1083524092`
- SciSciNet ID: `W2585057539`
- Aliases: decision-time feature boundary; temporal leakage audit; pre-outcome feature screen
