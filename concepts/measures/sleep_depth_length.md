# Sleep depth and length

## Summary

Sleep depth and length measure how long a paper remains in low-attention status and how low its citation rate is during that sleeping period.

## Canonical Form

- Unit of analysis: paper, citation history, sleep interval, or delayed-recognition candidate.
- Typical representation: sleep duration, average citations during sleep, threshold class, or early-citation suppression score.
- Mechanism or measurement target: duration and severity of early neglect before later recognition.
- Empirical signature: a long interval with very low annual citations before later citation growth.

## Uses in Science of Science

- Decomposes [sleeping beauty](../mechanisms/sleeping_beauty.md) into interpretable components rather than a single label.
- Helps distinguish short delayed uptake from decades-long prematurity.
- Provides a threshold-based companion to continuous measures such as the [beauty coefficient](beauty_coefficient.md).
- Forms two axes of the original [sleeping-beauty threshold grid](../methods/sleeping_beauty_threshold_grid.md).

## Operationalization

- Choose a sleep-period length or estimate it from the citation trajectory.
- Measure annual or average citations during the sleep interval, usually excluding self-citations when possible.
- Classify depth using thresholds such as deep sleep versus less deep sleep, or treat depth as a continuous low-attention rate.
- Pair sleep depth and length with later [awakening intensity](awakening_intensity.md) to identify strong delayed-recognition cases.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) defines depth of sleep as citation scarcity during a specific period and length of sleep as the duration of that period.
- van Raan operationalizes deep sleep as at most one citation per year on average, with less deep sleep between one and two citations per year during the sleeping period.
- Verified full-text evidence from Ke et al. (2015) summarizes van Raan's three dimensions and then replaces fixed thresholds with a continuous beauty coefficient that increases with sleep length.

## Caveats

- Thresholds are corpus- and field-dependent; one citation per year may mean different things in different disciplines and eras.
- Very old papers can have incomplete early citation records.
- Low early citation counts do not prove that a paper was intellectually ignored; use citation contexts and historical evidence when making mechanism claims.

## Links

- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [sleeping-beauty threshold grid](../methods/sleeping_beauty_threshold_grid.md)
- [awakening probability function](awakening_probability_function.md)
- [beauty coefficient](beauty_coefficient.md)
- [awakening time](awakening_time.md)
- [awakening intensity](awakening_intensity.md)
- [sleeping-beauty detection](../methods/sleeping_beauty_detection.md)
- [delayed recognition](../mechanisms/delayed_recognition.md)
- [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation window selection](../methods/citation_window_selection.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; WoS: unknown]
- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `sleep_depth_length`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1023/B:SCIE.0000018543.82441.F1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: sleep length; depth of sleep; citation sleep duration; low-attention period
