# Long-term citation prediction

## Summary

Long-term citation prediction forecasts future and lifetime citations from an early citation history by fitting a mechanistic citation-trajectory model with uncertainty envelopes.

## Canonical Form

- Unit of analysis: paper, citation time series, early citation window, forecast horizon, or lifetime impact estimate.
- Typical representation: fitted citation path, prediction envelope, z-score deviation, forecasted future citations, or ultimate-impact estimate.
- Method target: predict long-window paper impact while quantifying uncertainty from noisy early trajectories.
- Empirical signature: a fitted model predicts future citation ranges better than short-window counts or generic logistic/Bass/Gompertz curves.

## Uses in Science of Science

- Gives [scientific discovery prediction](scientific_discovery_prediction.md) a paper-level forecasting method grounded in citation dynamics.
- Operationalizes [citation trajectory models](citation_trajectory_models.md) for prospective long-term-impact estimation.
- Uses [paper fitness](../measures/paper_fitness.md), [citation immediacy parameter](../measures/citation_immediacy_parameter.md), and [citation longevity parameter](../measures/citation_longevity_parameter.md) to forecast [ultimate citation impact](../measures/ultimate_citation_impact.md).
- Splits uncertainty and model-selection checks into [citation prediction envelope coverage](../validations/citation_prediction_envelope_coverage.md) and [alternative citation curve benchmark](../validations/alternative_citation_curve_benchmark.md).
- Provides a prediction task that should be audited alongside [prediction feedback loops](../validations/prediction_feedback_loops.md) before policy use.

## Operationalization

- Select a training window after publication, such as the first five or ten years of citations.
- Fit the citation-history model to estimate relative fitness, immediacy, and longevity.
- Extrapolate future cumulative citations and lifetime impact, while reporting a prediction envelope.
- Validate on older cohorts with observed long-window citations and compare against alternative models and short-window baselines.

## Evidence and Validations

- Verified full-text evidence from Wang, Song, and Barabasi (2013) uses a paper's citation history up to a training year to estimate fitness, immediacy, and longevity, then predicts future citations and ultimate impact.
- The paper explicitly assigns each paper a citation envelope to quantify prediction uncertainty rather than simply extrapolating one curve.
- Wang et al. report that with a five-year training period, 93.5% of Physical Review papers from the 1960s remained within the prediction envelope 25 years into the future.
- The paper compares its model against logistic, Bass, and Gompertz alternatives and reports better fit and less systematic underestimation of future citations.
- The envelope and alternative-model checks are split into [citation prediction envelope coverage](../validations/citation_prediction_envelope_coverage.md) and [alternative citation curve benchmark](../validations/alternative_citation_curve_benchmark.md).
- Wang et al. explicitly identify [exogenous second-act citation shock](../validations/exogenous_second_act_citation_shock.md) as a boundary condition for the model.

## Caveats

- Prediction can fail for exogenous shocks, rediscovery, delayed impact, and other second acts.
- A prediction envelope is necessary; point forecasts should not be used as deterministic evaluations.
- Forecasts can encode field, journal, language, and database-coverage biases and can create feedback loops if used in funding or hiring.

## Links

- [scientific discovery prediction](scientific_discovery_prediction.md)
- [citation trajectory models](citation_trajectory_models.md)
- [paper fitness](../measures/paper_fitness.md)
- [citation immediacy parameter](../measures/citation_immediacy_parameter.md)
- [citation longevity parameter](../measures/citation_longevity_parameter.md)
- [ultimate citation impact](../measures/ultimate_citation_impact.md)
- [universal citation-history rescaling](../validations/universal_citation_history_rescaling.md)
- [citation prediction envelope coverage](../validations/citation_prediction_envelope_coverage.md)
- [alternative citation curve benchmark](../validations/alternative_citation_curve_benchmark.md)
- [exogenous second-act citation shock](../validations/exogenous_second_act_citation_shock.md)
- [equal-fitness citation convergence](../validations/equal_fitness_citation_convergence.md)
- [same-early-citation divergence](../validations/same_early_citation_divergence.md)
- [prediction feedback loops](../validations/prediction_feedback_loops.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [sleeping beauty](../mechanisms/sleeping_beauty.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]

## Metadata

- Concept ID: `long_term_citation_prediction`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: future citation prediction; citation forecast; long-term impact prediction; citation prediction envelope
