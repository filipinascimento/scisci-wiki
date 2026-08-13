# Awakening intensity

## Summary

Awakening intensity measures how strongly a paper is cited after a sleeping period, capturing the scale of delayed attention once recognition begins.

## Canonical Form

- Unit of analysis: paper, post-sleep citation window, delayed-recognition candidate, or sleeping-beauty case.
- Typical representation: citations per year after sleep, citations in a fixed awakening window, or post-awakening burst class.
- Mechanism or measurement target: magnitude of attention after earlier neglect.
- Empirical signature: low early citations followed by a high post-sleep citation rate.

## Uses in Science of Science

- Separates papers that merely receive delayed trickle attention from papers that become high-impact after sleeping.
- Completes the threshold triad of [sleep depth and length](sleep_depth_length.md) plus post-sleep recognition.
- Anchors the steepest term in van Raan's [awakening probability function](awakening_probability_function.md).
- Helps evaluate short-window citation indicators by identifying papers whose value appears only after the evaluation window.

## Operationalization

- Define the sleep interval and the post-sleep awakening window.
- Count citations in the awakening window, often as citations per year and excluding self-citations when possible.
- Place papers into intensity classes or use the value as a continuous post-sleep burst measure.
- Interpret intensity together with sleep depth, sleep length, and [awakening time](awakening_time.md).

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) defines awake intensity as citations per year in the four years following a sleeping period.
- van Raan groups awakening intensity into classes and reports that higher awakening intensities become extremely rare.
- Verified full-text evidence from Ke et al. (2015) shows that the beauty coefficient increases with awakening intensity, integrating post-sleep burst strength into a continuous delayed-recognition score.

## Caveats

- Fixed post-sleep windows can miss slower awakenings or very sharp bursts outside the chosen interval.
- High intensity can be caused by reviews, methods becoming benchmarks, or community fashion, so it should be interpreted with citing-context evidence.
- Field size and citation inflation affect post-sleep citation rates.

## Links

- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [sleep depth and length](sleep_depth_length.md)
- [awakening probability function](awakening_probability_function.md)
- [sleeping-beauty threshold grid](../methods/sleeping_beauty_threshold_grid.md)
- [awakening time](awakening_time.md)
- [beauty coefficient](beauty_coefficient.md)
- [sleeping-beauty detection](../methods/sleeping_beauty_detection.md)
- [citation impact indicators](citation_impact_indicators.md)
- [citation window selection](../methods/citation_window_selection.md)
- [delayed recognition](../mechanisms/delayed_recognition.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; WoS: unknown]
- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `awakening_intensity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1023/B:SCIE.0000018543.82441.F1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: awake intensity; post-sleep citation burst; delayed recognition intensity; awakening citation rate
