# Citation prediction envelope coverage

## Summary

Citation prediction envelope coverage validates long-term citation forecasts by checking whether observed future citation counts fall inside model-derived uncertainty bands, not just near a point forecast.

## Canonical Form

- Unit of analysis: paper, training window, forecast horizon, prediction envelope, or observed citation count.
- Typical representation: forecast band, z-score deviation, envelope coverage rate, or out-of-envelope fraction.
- Validation target: quantify forecast uncertainty for [long-term citation prediction](../methods/long_term_citation_prediction.md).
- Empirical signature: most held-out future citation counts fall within the prediction envelope, and out-of-envelope deviations are rare.

## Uses in Science of Science

- Turns [citation trajectory models](../methods/citation_trajectory_models.md) into an auditable predictive workflow.
- Guards against deterministic use of [ultimate citation impact](../measures/ultimate_citation_impact.md) estimates in evaluation.
- Links model accuracy to [prediction feedback loops](prediction_feedback_loops.md) and responsible use of predictive indicators.
- Provides a benchmark for [alternative citation curve benchmark](alternative_citation_curve_benchmark.md).

## Operationalization

- Choose a training window after publication, such as five or ten years.
- Fit each paper's citation-history parameters using only the training-window data.
- Generate a future citation path and uncertainty envelope for a target horizon.
- Compute deviations between observed and predicted citations at the horizon, often as z-scores.
- Report the share of papers inside the envelope and inspect systematic misses by field, citation level, and delayed-recognition status.

## Evidence and Validations

- Verified full-text evidence from Wang, Song, and Barabasi (2013) assigns each paper a citation envelope to quantify uncertainty in future citation prediction.
- The paper evaluates Physical Review papers from the 1960s by comparing observed 30-year citations with the model prediction after a five-year training period.
- Wang et al. report that only 6.5% of papers fall outside the prediction envelope 30 years later, corresponding to 93.5% envelope coverage.
- The paper also reports that increasing the training period improves predictive accuracy.
- Wang et al. nevertheless flag exogenous second acts and delayed-impact cases as model failures that prediction envelopes should not hide.

## Caveats

- High envelope coverage can hide overly wide intervals; report both coverage and interval width when possible.
- Coverage estimates require mature cohorts with long observed follow-up.
- Exogenous shocks, delayed recognition, rediscovery, and database changes can create systematic out-of-envelope cases.
- Prediction envelopes can still be misused if treated as rankings or funding cutoffs.

## Links

- [long-term citation prediction](../methods/long_term_citation_prediction.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [ultimate citation impact](../measures/ultimate_citation_impact.md)
- [paper fitness](../measures/paper_fitness.md)
- [same-early-citation divergence](same_early_citation_divergence.md)
- [alternative citation curve benchmark](alternative_citation_curve_benchmark.md)
- [exogenous second-act citation shock](exogenous_second_act_citation_shock.md)
- [prediction feedback loops](prediction_feedback_loops.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]

## Metadata

- Concept ID: `citation_prediction_envelope_coverage`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: citation forecast interval coverage; prediction envelope validation; z30 citation deviation; forecast uncertainty coverage
