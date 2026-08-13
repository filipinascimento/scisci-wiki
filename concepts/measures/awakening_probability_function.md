# Awakening probability function

## Summary

Awakening probability functions model how often sleeping papers awaken as a function of sleep length, sleep depth, and awakening intensity.

## Canonical Form

- Unit of analysis: candidate sleeping-beauty class, publication-year cohort, sleep length, sleep-depth count, or awakening-intensity class.
- Typical representation: fitted count or probability function over sleeping-period length, sleep citations, and post-sleep citations.
- Measurement target: rarity of delayed recognition under different sleeping-beauty definitions.
- Empirical signature: the frequency of awakened papers declines systematically as sleep length and awakening intensity become more extreme.

## Uses in Science of Science

- Converts [sleeping-beauty detection](../methods/sleeping_beauty_detection.md) from a label into a distributional rarity question.
- Supports sensitivity analysis for [sleeping-beauty threshold grids](../methods/sleeping_beauty_threshold_grid.md).
- Helps compare delayed-recognition cases without treating every awakening as equally unlikely.
- Gives a baseline for distinguishing ordinary delayed uptake from extreme [sleeping beauty](../mechanisms/sleeping_beauty.md) cases.
- Needs [sleeping-beauty population rarity](sleeping_beauty_population_rarity.md) and source-corpus denominators to make probability language interpretable.

## Operationalization

- Count candidates in sleep-depth, sleep-length, and awakening-intensity cells.
- Normalize cohort counts for growth in cited and citing publications.
- Fit or tabulate the count function across cells.
- Report parameters, confidence intervals when available, and the range of thresholds used.
- Use the function as descriptive evidence, not a causal model of why awakening occurred.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) derives a "Grand Sleeping Beauty Equation" from threshold-grid measurements.
- The fitted relation reports that the number of sleeping beauties varies approximately with sleep length, sleep citations, and awakening intensity as `s^-2.7 * cs^2.5 * cw^-6.6`.
- van Raan emphasizes that the awakening-intensity term has an especially steep negative slope: very high-intensity awakenings are extremely rare.
- Follow-on split pages now isolate [sleep-depth duration interaction](sleep_depth_duration_interaction.md), [awakening-intensity tail invariance](awakening_intensity_tail_invariance.md), and the [awakening-intensity panel plot](../representations/awakening_intensity_panel_plot.md) behind that equation.
- The paper interprets the resulting function as an awakening probability pattern for sleeping-beauty classes.
- van Raan also reports raw annual-denominator examples, showing that even less prominent sleeping beauties are sparse within million-paper publication cohorts.

## Caveats

- The function is descriptive for the studied database, time period, and threshold design.
- Parameters can shift with field mix, citation indexing, self-citation treatment, and publication-growth normalization.
- Later continuous scores such as the [beauty coefficient](beauty_coefficient.md) avoid some arbitrary threshold choices.

## Links

- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [sleeping-beauty threshold grid](../methods/sleeping_beauty_threshold_grid.md)
- [sleeping-beauty population rarity](sleeping_beauty_population_rarity.md)
- [CWTS-ISI sleeping-beauty corpus](../datasets/cwts_isi_sleeping_beauty_corpus.md)
- [citation-volume growth normalization](../methods/citation_volume_growth_normalization.md)
- [sleep depth and length](sleep_depth_length.md)
- [awakening intensity](awakening_intensity.md)
- [sleep-depth duration interaction](sleep_depth_duration_interaction.md)
- [awakening-intensity tail invariance](awakening_intensity_tail_invariance.md)
- [awakening-intensity panel plot](../representations/awakening_intensity_panel_plot.md)
- [beauty coefficient](beauty_coefficient.md)
- [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md)
- [post-peak citation decay check](../validations/post_peak_citation_decay_check.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; WoS: unknown]

## Metadata

- Concept ID: `awakening_probability_function`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: van Raan (2004) (2004)
- Primary reference DOI: `10.1023/B:SCIE.0000018543.82441.F1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: Grand Sleeping Beauty Equation; awakening rarity function; delayed-recognition probability function; sleeping-beauty count model
