# Sleep-depth duration interaction

## Summary

Sleep-depth duration interaction measures how the effect of sleep length on awakening probability depends on how deeply a paper slept.

## Canonical Form

- Unit of analysis: threshold scenario, sleep-depth class, sleep duration, awakening class, or candidate count.
- Typical representation: interaction between sleep-depth threshold and sleep-length threshold in candidate counts or probabilities.
- Measurement target: determine whether longer sleep reduces awakening similarly for deep and less-deep sleepers.
- Empirical signature: duration reduces awakening probability more strongly for deeply sleeping papers than for less-deep sleepers.

## Uses in Science of Science

- Refines [sleep depth and length](sleep_depth_length.md) by treating depth and duration as interacting axes.
- Helps interpret parameters in [awakening probability function](awakening_probability_function.md).
- Makes [sleeping-beauty threshold grid](../methods/sleeping_beauty_threshold_grid.md) results more interpretable than separate depth and length summaries.

## Operationalization

- Estimate candidate counts across depth and duration threshold combinations.
- Compare how counts change with longer sleep within each depth class.
- Express the effect as an interaction term, ratio, or slope difference.
- Report whether the interaction survives publication-volume normalization.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) compares short and long sleep cases against deep and less-deep sleep cases.
- The paper concludes that awakening after deep sleep becomes less probable as sleep duration increases.
- It also reports that sleep length matters less for less-deep sleep.

## Caveats

- Interaction strength depends on threshold choices.
- Sparse extreme cells can make interaction estimates unstable.
- Citation database growth can mimic or suppress interaction patterns if not normalized.

## Links

- [sleep depth and length](sleep_depth_length.md)
- [awakening probability function](awakening_probability_function.md)
- [sleeping-beauty threshold grid](../methods/sleeping_beauty_threshold_grid.md)
- [awakening intensity](awakening_intensity.md)
- [citation-volume growth normalization](../methods/citation_volume_growth_normalization.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; SciSciNet: W2159299749; WoS: unknown]

## Metadata

- Concept ID: `sleep_depth_duration_interaction`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: van Raan (2004) (2004)
- Primary reference DOI: `10.1023/B:SCIE.0000018543.82441.F1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: sleep-depth length interaction; delayed-recognition depth-duration interaction; deep-sleep duration penalty; sleep-length depth coupling
