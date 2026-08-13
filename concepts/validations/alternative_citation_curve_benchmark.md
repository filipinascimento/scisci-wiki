# Alternative citation curve benchmark

## Summary

Alternative citation curve benchmark compares a focal citation-history model against generic diffusion or growth curves to test whether the model captures empirical citation timing and long-run forecasts better than plausible alternatives.

## Canonical Form

- Unit of analysis: paper citation trajectory, model family, training window, fit statistic, or forecast horizon.
- Typical representation: model-comparison table, weighted KS statistic, forecast-quartile comparison, or out-of-envelope rate.
- Validation target: demonstrate that a citation model's fit and forecasts are not merely artifacts of flexible curve fitting.
- Empirical signature: the focal model fits observed trajectories and predicts held-out citations better than logistic, Bass, Gompertz, or simple lognormal alternatives.

## Uses in Science of Science

- Provides model-selection discipline for [citation trajectory models](../methods/citation_trajectory_models.md).
- Validates [long-term citation prediction](../methods/long_term_citation_prediction.md) and [citation prediction envelope coverage](citation_prediction_envelope_coverage.md).
- Helps decide whether [preferential attachment activation threshold](../mechanisms/preferential_attachment_activation_threshold.md) needs to be modeled for medium- and high-impact papers.
- Connects bibliometric forecasting to broader diffusion-model benchmarking.

## Operationalization

- Define a held-out citation horizon and one or more early training windows.
- Fit the focal citation-history model and candidate alternatives to the same paper trajectories.
- Compare in-sample fit with distribution-sensitive statistics such as weighted Kolmogorov-Smirnov distance.
- Compare out-of-sample forecasts against observed long-window citations and prediction quantiles.
- Diagnose systematic failures, such as too-fast decay or inability to represent asymmetric citation curves.

## Evidence and Validations

- Verified full-text evidence from Wang, Song, and Barabasi (2013) benchmarks its citation model against Logistic, Bass, and Gompertz models.
- The paper reports that the focal model has the lowest weighted KS distribution across most Physical Review papers.
- Wang et al. argue that logistic curves cannot capture asymmetric citation histories, while Bass and Gompertz imply citation decay faster than observed.
- In forecast comparisons with five- and ten-year training periods, the alternative models systematically underestimate 30-year citations, while the focal model remains within the central prediction quartiles.

## Caveats

- Benchmark results depend on the chosen alternatives, fitting procedure, citation horizon, and cohort maturity.
- A model can outperform named alternatives while still failing for specific fields, document types, or exogenous shocks.
- Fit statistics should be paired with interpretability and uncertainty checks.
- Stronger modern baselines may be needed when applying the workflow to current Dimensions or OpenAlex data.
- Benchmarking against smooth alternatives does not validate cases with discontinuous [exogenous second-act citation shock](exogenous_second_act_citation_shock.md).

## Links

- [citation trajectory models](../methods/citation_trajectory_models.md)
- [long-term citation prediction](../methods/long_term_citation_prediction.md)
- [citation prediction envelope coverage](citation_prediction_envelope_coverage.md)
- [preferential attachment activation threshold](../mechanisms/preferential_attachment_activation_threshold.md)
- [paper fitness](../measures/paper_fitness.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation decay model comparison](../methods/citation_decay_model_comparison.md)
- [exogenous second-act citation shock](exogenous_second_act_citation_shock.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]

## Metadata

- Concept ID: `alternative_citation_curve_benchmark`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: citation model benchmark; logistic Bass Gompertz citation benchmark; citation curve model comparison; long-term citation forecast benchmark
