# Self-citation-excluded awakening screen

## Summary

Self-citation-excluded awakening screen removes author self-citations when identifying sleeping-beauty sleep and awakening periods, reducing false delayed-recognition signals created by the focal authors themselves.

## Canonical Form

- Unit of analysis: paper, annual citation count, sleep period, awakening period, or self-citation flag.
- Typical representation: citation trajectory with self-citations excluded before applying sleep and awakening thresholds.
- Validation target: ensure that apparent sleep or awakening reflects external attention.
- Empirical signature: candidate sleeping beauties still satisfy low-sleep and high-awakening thresholds after self-citations are removed.

## Uses in Science of Science

- Adds a self-citation validity layer to [sleeping-beauty detection](../methods/sleeping_beauty_detection.md).
- Connects delayed-recognition work to [author self-citation definition choice](../methods/author_self_citation_definition_choice.md).
- Makes [awakening intensity](../measures/awakening_intensity.md) less vulnerable to author-driven citation bursts.

## Operationalization

- Identify author self-citations in the citation history.
- Remove them before computing sleep-period and post-sleep citation totals.
- Apply the same [sleeping-beauty threshold grid](../methods/sleeping_beauty_threshold_grid.md) to the filtered trajectory.
- Report whether candidate status changes when self-citations are included.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) defines deep and less-deep sleep using citation counts with self-citations excluded.
- The same paper also excludes self-citations when calculating citations in the four-year awakening period.
- This screen supports the interpretation that awakening reflects attention from the scientific community rather than strategic self-reference.

## Caveats

- Author-name matching affects which citations are classified as self-citations.
- Group self-citations and institutional self-citations can require broader definitions than author overlap.
- Removing self-citations can understate legitimate cumulative research programs by the same authors.

## Links

- [sleeping-beauty detection](../methods/sleeping_beauty_detection.md)
- [sleeping-beauty threshold grid](../methods/sleeping_beauty_threshold_grid.md)
- [sleep depth and length](../measures/sleep_depth_length.md)
- [awakening intensity](../measures/awakening_intensity.md)
- [author self-citation definition choice](../methods/author_self_citation_definition_choice.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; SciSciNet: W2159299749; WoS: unknown]

## Metadata

- Concept ID: `self_citation_excluded_awakening_screen`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: van Raan (2004) (2004)
- Primary reference DOI: `10.1023/B:SCIE.0000018543.82441.F1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: self-citation-free sleeping beauty screen; external awakening validation; self-citation-excluded delayed recognition; author self-citation awakening audit
