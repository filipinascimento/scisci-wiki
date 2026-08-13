# Sleeping-beauty threshold grid

## Summary

Sleeping-beauty threshold grids identify delayed-recognition papers by crossing fixed sleep-duration, sleep-depth, and awakening-intensity classes.

## Canonical Form

- Unit of analysis: paper, publication-year cohort, sleeping-period length, sleep-depth class, or awakening-intensity class.
- Typical representation: grid of citation-count thresholds before and after a sleep interval.
- Method target: operationalize sleeping beauties as candidate sets rather than anecdotes.
- Empirical signature: papers have low citation counts during a fixed early period and then exceed a post-sleep citation-intensity threshold.

## Uses in Science of Science

- Provides the original threshold version of [sleeping-beauty detection](sleeping_beauty_detection.md).
- Decomposes [sleeping beauty](../mechanisms/sleeping_beauty.md) into explicit [sleep depth and length](../measures/sleep_depth_length.md) and [awakening intensity](../measures/awakening_intensity.md) choices.
- Creates interpretable bins before applying continuous alternatives such as the [beauty coefficient](../measures/beauty_coefficient.md).
- Supports sensitivity checks over thresholds and observation windows.

## Operationalization

- Choose publication cohorts with long enough citation histories.
- Define sleep lengths, such as five through ten years after publication.
- Define deep and less-deep sleep by citations per year during the sleep interval.
- Define awakening classes by citations per year in a fixed post-sleep window.
- Exclude self-citations or report a separate sensitivity analysis when self-citations are retained.
- Report the source corpus and annual publication denominator, because [sleeping-beauty population rarity](../measures/sleeping_beauty_population_rarity.md) depends on threshold severity and corpus scale.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) studies six sleeping periods of length five through ten years.
- The paper defines deep sleep as at most one citation per year on average and less-deep sleep as one to two citations per year during the sleeping period.
- van Raan defines awake intensity as citations per year during the four years after sleep and groups it into five citation-count classes.
- The threshold grid yields candidate sleeping beauties and motivates later continuous measures.
- The original grid was run on the [CWTS-ISI sleeping-beauty corpus](../datasets/cwts_isi_sleeping_beauty_corpus.md), making source-index scope part of the method.

## Caveats

- Fixed thresholds can miss continuous delayed-recognition patterns or create arbitrary boundary cases.
- Short or recent cohorts cannot reveal long sleeping periods.
- Threshold grids should be normalized for publication and citation-volume growth before comparing cohorts.

## Links

- [sleeping-beauty detection](sleeping_beauty_detection.md)
- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [sleep depth and length](../measures/sleep_depth_length.md)
- [awakening intensity](../measures/awakening_intensity.md)
- [awakening probability function](../measures/awakening_probability_function.md)
- [sleeping-beauty population rarity](../measures/sleeping_beauty_population_rarity.md)
- [CWTS-ISI sleeping-beauty corpus](../datasets/cwts_isi_sleeping_beauty_corpus.md)
- [citation-volume growth normalization](citation_volume_growth_normalization.md)
- [sleeping-beauty/classic boundary](../validations/sleeping_beauty_classic_boundary.md)
- [beauty coefficient](../measures/beauty_coefficient.md)
- [citation window selection](citation_window_selection.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; WoS: unknown]

## Metadata

- Concept ID: `sleeping_beauty_threshold_grid`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: van Raan (2004) (2004)
- Primary reference DOI: `10.1023/B:SCIE.0000018543.82441.F1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: delayed-recognition threshold grid; sleep-depth awakening grid; van Raan sleeping-beauty thresholds; SB threshold classes
