# Q-model prediction-envelope coverage

## Summary

Q-model prediction-envelope coverage validates Q-model career forecasts by checking whether observed future impact indicators fall inside stochastic prediction envelopes.

## Canonical Form

- Unit of analysis: scientist, publication prefix, future publication count, h-index, cumulative citations, prediction envelope, or z score.
- Typical representation: predicted impact trajectory with uncertainty bands and observed indicator location inside or outside the band.
- Validation target: evaluate whether Q-model forecasts are calibrated, not just correlated with future outcomes.
- Empirical signature: a substantial share of observed future h-index or citation values falls within the model's expected uncertainty envelope.

## Uses in Science of Science

- Adds a calibration layer to [Q-model career impact prediction](../methods/q_model_career_prediction.md).
- Makes the stochastic [project-potential distribution](../measures/project_potential_distribution.md) visible in forecast uncertainty.
- Supports [responsible metrics](../measures/responsible_metrics.md) by requiring prediction intervals rather than point forecasts for career assessment.
- Connects person-level career forecasting to broader [citation prediction envelope coverage](citation_prediction_envelope_coverage.md) at the paper level.

## Operationalization

- Estimate Q from the first `N0` papers of each scientist.
- Simulate or analytically derive future h-index, total citations, or related indicators at later publication counts.
- Compute an uncertainty envelope or z score comparing observed and most likely predicted values.
- Report envelope coverage by publication prefix length, field, career length, and indicator.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) estimates Q from early publication prefixes and predicts later h-index trajectories.
- The paper states that Q-estimation error drops below 10 percent after about 20 publications in their data.
- Sinatra et al. report stochastic uncertainty envelopes around the most likely h-index and compare observed outcomes with those envelopes.
- The paper reports that 71 percent of scientists have `z40 <= 2` when Q is estimated from the first 20 papers, improving to 81 percent for `z70` when Q is estimated from the first 50 papers.

## Caveats

- Coverage depends on the selected long-career sample and enough early publications to estimate Q.
- Envelopes can still be miscalibrated for fields, institutions, demographic groups, or collaboration regimes outside the training data.
- Career predictions can create feedback loops if used in hiring, funding, or promotion decisions.

## Links

- [Q-model career impact prediction](../methods/q_model_career_prediction.md)
- [individual Q parameter](../measures/individual_q_parameter.md)
- [project-potential distribution](../measures/project_potential_distribution.md)
- [Q parameter stability test](q_parameter_stability_test.md)
- [prediction feedback loops](prediction_feedback_loops.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [citation prediction envelope coverage](citation_prediction_envelope_coverage.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `q_model_prediction_envelope_coverage`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: Q-model forecast calibration; h-index envelope coverage; career-impact prediction interval; Q-model z-score coverage
