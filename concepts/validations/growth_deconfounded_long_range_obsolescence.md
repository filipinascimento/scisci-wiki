# Growth-deconfounded long-range obsolescence

## Summary

Growth-deconfounded long-range obsolescence separates the apparent recency of citations from the growth of the literature, treating age-use decline as obsolescence after removing publication-volume effects.

## Canonical Form

- Unit of analysis: cited item age, publication volume, reference rate, age-use curve, or obsolescence function.
- Typical representation: age-specific citation or reference rate adjusted for the amount of literature available at each age.
- Validation target: test whether recent-citation dominance reflects genuine immediacy or simply the larger stock of recent publications.
- Empirical signature: after growth adjustment, age-use follows a long-range decline rather than a raw recent-document pileup.

## Uses in Science of Science

- Extends [citation obsolescence from Garfield Constant](../methods/citation_obsolescence_from_garfield_constant.md).
- Clarifies the relation between [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md) and [citation immediacy effect curve](../measures/citation_immediacy_effect_curve.md).
- Adds a validation layer to [growth-normalized citation-age baseline](../methods/growth_normalized_citation_age_baseline.md).

## Operationalization

- Count citations or references by cited-item age.
- Estimate the available stock of publications at each age.
- Normalize citation use by the age-specific publication stock.
- Compare the adjusted age-use curve with raw recency-heavy citation counts.
- Interpret short-range immediacy only after accounting for literature growth.

## Evidence and Validations

- Verified full-text evidence from Price (1976) argues that age-use patterns reflect obsolescence after removing publication-volume effects.
- Price describes a log-time, S-shaped decline and treats recent-citation dominance largely as a growth-composition effect.
- This validation warns against reading raw citation-age distributions as direct evidence of reader preference for recent work.

## Caveats

- Growth adjustment depends on accurate historical publication counts.
- Fields differ in archive depth, reference norms, and database coverage.
- Some short-range immediacy effects can remain after growth normalization.

## Links

- [citation obsolescence from Garfield Constant](../methods/citation_obsolescence_from_garfield_constant.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation immediacy effect curve](../measures/citation_immediacy_effect_curve.md)
- [growth-normalized citation-age baseline](../methods/growth_normalized_citation_age_baseline.md)
- [citation-index time-span scaling](../measures/citation_index_time_span_scaling.md)

## References

- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; SciSciNet: W2080450835; WoS: unknown]

## Metadata

- Concept ID: `growth_deconfounded_long_range_obsolescence`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Price (1976) (1976)
- Latest seen paper: Price (1976) (1976)
- Primary reference DOI: `10.1002/asi.4630270505`
- OpenAlex ID: `W2080450835`
- Dimensions ID: `pub.1038956878`
- SciSciNet ID: `W2080450835`
- Aliases: growth-adjusted obsolescence; long-range citation obsolescence validation; publication-growth deconfounded aging; recency growth-composition correction
