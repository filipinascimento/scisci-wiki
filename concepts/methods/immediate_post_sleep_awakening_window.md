# Immediate post-sleep awakening window

## Summary

Immediate post-sleep awakening window defines awakening intensity using citations in a fixed period directly after the sleep interval.

## Canonical Form

- Unit of analysis: paper, sleep interval, post-sleep interval, annual citation count, or awakening class.
- Typical representation: fixed-length citation window immediately following a low-citation sleep period.
- Method target: measure awakening as a near-term response after sleep rather than as an arbitrary later peak.
- Empirical signature: the candidate paper receives enough citations in the immediate post-sleep window to enter an awakening class.

## Uses in Science of Science

- Converts [awakening intensity](../measures/awakening_intensity.md) into a reproducible windowed measurement.
- Complements [citation window selection](citation_window_selection.md) for delayed-recognition studies.
- Provides a local design rule for [sleeping-beauty threshold grid](sleeping_beauty_threshold_grid.md) methods.

## Operationalization

- Choose a sleep duration and low-citation threshold.
- Define a fixed window directly after the sleep period.
- Count citations in that immediate post-sleep window, after any self-citation exclusions.
- Assign the candidate to awakening-intensity classes using the post-sleep count.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) defines awake intensity as the number of citations per year during the four years following the sleeping period.
- The paper applies this immediate four-year window to all sleep-period and sleep-depth combinations.
- This rule makes awakening a direct continuation of the candidate's measured sleep interval.

## Caveats

- A fixed four-year window can miss delayed or multi-stage awakenings.
- The same window may not be equally appropriate across fields with different citation tempos.
- Window placement should be reported because moving the window can change candidate classification.

## Links

- [awakening intensity](../measures/awakening_intensity.md)
- [citation window selection](citation_window_selection.md)
- [sleeping-beauty threshold grid](sleeping_beauty_threshold_grid.md)
- [sleeping-beauty detection](sleeping_beauty_detection.md)
- [self-citation-excluded awakening screen](../validations/self_citation_excluded_awakening_screen.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; SciSciNet: W2159299749; WoS: unknown]

## Metadata

- Concept ID: `immediate_post_sleep_awakening_window`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: van Raan (2004) (2004)
- Primary reference DOI: `10.1023/B:SCIE.0000018543.82441.F1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: four-year awakening window; post-sleep citation window; immediate awakening window; delayed-recognition response window
