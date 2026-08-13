# Awakening-intensity panel plot

## Summary

Awakening-intensity panel plot displays sleeping-beauty candidate counts as a function of awakening intensity across paired sleep-depth and sleep-duration scenarios.

## Canonical Form

- Unit of analysis: threshold scenario, awakening-intensity class, candidate count, panel, or sleep-depth/duration combination.
- Typical representation: log-scale panel plot with separate panels for short/deep, short/less-deep, long/deep, and long/less-deep cases.
- Representation target: compare how candidate counts decline across awakening thresholds under different sleep definitions.
- Empirical signature: similar steep declines appear across panels, revealing tail behavior in delayed-recognition counts.

## Uses in Science of Science

- Visualizes the evidence behind [awakening probability function](../measures/awakening_probability_function.md).
- Helps compare [awakening intensity](../measures/awakening_intensity.md) with [sleep depth and length](../measures/sleep_depth_length.md).
- Provides a diagnostic companion to [sleeping-beauty count matrix](sleeping_beauty_count_matrix.md).

## Operationalization

- Define several sleep-depth and sleep-duration scenarios.
- Count candidates in awakening-intensity classes for each scenario.
- Plot candidate counts against awakening intensity, preferably on a logarithmic scale when counts are highly skewed.
- Use panels to compare scenarios without collapsing threshold dimensions.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) presents candidate counts as a function of four awakening-intensity classes.
- The figure compares short and long sleep periods, each split into deep and less-deep sleep.
- The panel structure supports the paper's claim that awakening-intensity tails decline steeply across threshold cases.

## Caveats

- Panel plots can be visually dominated by sparse extreme cells.
- Log scales require clear labeling to avoid overstating small-count differences.
- The plot reflects chosen threshold classes rather than all possible trajectories.

## Links

- [awakening probability function](../measures/awakening_probability_function.md)
- [awakening intensity](../measures/awakening_intensity.md)
- [sleep depth and length](../measures/sleep_depth_length.md)
- [sleeping-beauty count matrix](sleeping_beauty_count_matrix.md)
- [awakening-intensity tail invariance](../measures/awakening_intensity_tail_invariance.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; SciSciNet: W2159299749; WoS: unknown]

## Metadata

- Concept ID: `awakening_intensity_panel_plot`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: van Raan (2004) (2004)
- Primary reference DOI: `10.1023/B:SCIE.0000018543.82441.F1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: awakening panel plot; delayed-recognition intensity panels; sleep-depth awakening plot; sleeping-beauty tail panel
