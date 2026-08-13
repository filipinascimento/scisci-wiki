# Q-estimation sample-size threshold

## Summary

Makes explicit the minimum-publication rule needed before early-career `Q` estimates become operationally usable.

## Canonical Form

- Unit of analysis: author prefix, publication count, Q estimate, or prediction error.
- Typical representation: error curve of estimated Q against prefix length `N0`.
- Mechanism, measurement, or validation target: minimum sample size for reliable Q estimation.
- Empirical signature: Q estimation error falls below a practical threshold only after enough publications..

## Uses in Science of Science

- Adds a reporting guardrail to [Q-model career impact prediction](../methods/q_model_career_prediction.md).
- Useful for avoiding premature individual assessment with unstable early-career Q estimates.
- Connects prediction envelopes to responsible-metrics practice.

## Operationalization

- Estimate Q from prefixes `N0`, plot error against `N0`, and set field-specific reporting thresholds.
- Report uncertainty or suppress Q values below threshold.
- Validate thresholds separately for short-career and long-career samples.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) reports an early-prefix prediction setup and an approximate 20-paper threshold for reduced Q error.
- This motivates sample-size thresholds for operational Q use.

## Caveats

- The 20-paper benchmark comes from a long-career sample and should not be universalized.
- Thresholds can vary by field, author order, and publication pace.

## Links

- [Q-model career impact prediction](../methods/q_model_career_prediction.md)
- [Q-model prediction-envelope coverage](q_model_prediction_envelope_coverage.md)
- [Q parameter stability test](q_parameter_stability_test.md)
- [Career-length selection boundary](career_length_selection_boundary.md)
- [Responsible metrics](../measures/responsible_metrics.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `q_estimation_sample_size_threshold`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: Q sample-size threshold; Q early-career reporting threshold; Q estimate reliability threshold
