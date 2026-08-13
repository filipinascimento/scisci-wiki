# Citation-forecast quartile calibration

## Summary

Citation-forecast quartile calibration checks whether observed long-run citations fall within predicted quartile bands when forecasts are trained on shorter citation windows.

## Canonical Form

- Unit of analysis: paper, citation forecast, prediction interval, training window, or validation cohort.
- Typical representation: predicted-versus-observed plot, quartile band, identity-line check, or forecast calibration table.
- Validation target: whether a citation model's uncertainty bands contain observed outcomes at the expected rate.
- Empirical signature: observed long-run citation counts align with predicted median and interquartile ranges.

## Uses in Science of Science

- Extends [citation prediction envelope coverage](citation_prediction_envelope_coverage.md).
- Pairs with [citation forecast training-window sensitivity](citation_forecast_training_window_sensitivity.md).
- Validates [long-term citation prediction](../methods/long_term_citation_prediction.md).
- Complements [weighted KS citation-fit test](weighted_ks_citation_fit_test.md), which focuses on fitted curves.

## Operationalization

- Train citation forecasts using fixed early windows.
- Generate predicted long-run citation distributions.
- Plot or tabulate observed outcomes against 25th, 50th, and 75th percentile predictions.
- Compare calibration against alternative models.

## Evidence and Validations

- Verified full-text evidence from Wang et al. (2013) evaluates 30-year citation forecasts using five- and ten-year training windows.
- The paper reports that its model's predictions fall inside interquartile bands while alternatives miss more systematically.
- Its figure text describes prediction quartile error bars and identity-line checks.

## Caveats

- Quartile calibration does not assess tail risk beyond the 25-75% range.
- Forecast accuracy depends on training-window length and database completeness.
- Delayed recognition or exogenous shocks can defeat calibrated intervals.

## Links

- [citation prediction envelope coverage](citation_prediction_envelope_coverage.md)
- [citation forecast training-window sensitivity](citation_forecast_training_window_sensitivity.md)
- [long-term citation prediction](../methods/long_term_citation_prediction.md)
- [weighted KS citation-fit test](weighted_ks_citation_fit_test.md)
- [exogenous second-act citation shock](exogenous_second_act_citation_shock.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; SciSciNet: W2124689612; WoS: unknown]

## Metadata

- Concept ID: `citation_forecast_quartile_calibration`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: citation prediction quartile check; forecast interquartile calibration; predicted-observed citation bands
