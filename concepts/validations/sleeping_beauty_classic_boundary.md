# Sleeping-beauty/classic boundary

## Summary

The sleeping-beauty/classic boundary separates delayed-recognition papers from papers that were already cited early and later became long-lived classics.

## Canonical Form

- Unit of analysis: paper citation trajectory, early citation count, later citation increase, or candidate delayed-recognition case.
- Typical representation: exclusion rule, trajectory-class decision, or early-attention threshold paired with later growth.
- Validation target: avoid labeling already-recognized classics as sleeping beauties.
- Empirical signature: a true sleeping-beauty candidate has low early attention, while a classic has substantial early attention before later growth.

## Uses in Science of Science

- Improves [sleeping-beauty detection](../methods/sleeping_beauty_detection.md) by screening out non-sleeping high-impact papers.
- Connects delayed-recognition work to the [classic/ephemeral literature split](../mechanisms/classic_ephemeral_literature_split.md).
- Protects [citation impact indicators](../measures/citation_impact_indicators.md) from conflating early visibility with late awakening.
- Clarifies whether a paper is dormant, steadily durable, or continuously influential.

## Operationalization

- Require low early citation rates during the selected sleeping period.
- Compare the trajectory against papers with early substantial citation counts followed by later growth.
- Use field-year baselines and citation-window checks before deciding whether early attention was substantial.
- Report candidate exclusions so the boundary between sleeping beauties and classics is auditable.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) states that the search algorithm is not designed to detect papers that receive substantial citations immediately or soon after publication and then increase for a long time.
- van Raan argues that such papers are typical "Classics" rather than sleeping beauties.
- This boundary makes low early attention a necessary part of the sleeping-beauty construct, not just later high impact.

## Caveats

- Early citation thresholds are field and era dependent.
- A paper can be recognized in a small specialty early and still be rediscovered by a broader field later.
- Boundary cases require citation-context reading and field-normalized baselines.

## Links

- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [sleeping-beauty detection](../methods/sleeping_beauty_detection.md)
- [sleeping-beauty threshold grid](../methods/sleeping_beauty_threshold_grid.md)
- [classic/ephemeral literature split](../mechanisms/classic_ephemeral_literature_split.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [citation window selection](../methods/citation_window_selection.md)
- [citation tail maturation bias](citation_tail_maturation_bias.md)
- [Mendel-syndrome prematurity audit](mendel_syndrome_prematurity_audit.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; WoS: unknown]

## Metadata

- Concept ID: `sleeping_beauty_classic_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: van Raan (2004) (2004)
- Primary reference DOI: `10.1023/B:SCIE.0000018543.82441.F1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: sleeping beauty classic distinction; delayed-recognition classic exclusion; early-recognition boundary; classic versus sleeping-beauty screen
