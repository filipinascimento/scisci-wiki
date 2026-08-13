# Long-horizon citation-tail benchmark

## Summary

Long-horizon citation-tail benchmark checks extreme citation-tail claims against older or longer-window data because high-citation tails can remain immature for decades.

## Canonical Form

- Unit of analysis: citation cohort, citation window, high-citation tail, older archive, or long-term benchmark.
- Typical representation: older-cohort comparison, citation-window maturity note, and high-tail temporal evolution check.
- Validation target: whether observed extreme-tail behavior is a mature property of the distribution or a finite-window artifact.
- Empirical signature: long-window or older data are used before claiming stable high-citation tail shape.

## Uses in Science of Science

- Extends [citation tail maturation bias](citation_tail_maturation_bias.md) into an explicit benchmark design.
- Links to [citation data census dates](../methods/citation_data_census_dates.md) and [citation window selection](../methods/citation_window_selection.md).
- Complements [citation cohort-age contrast](citation_cohort_age_contrast.md) by emphasizing very old or long-horizon evidence.
- Supports [citation distribution scaling](../measures/citation_distribution_scaling.md) before tail exponents are treated as stable.

## Operationalization

- Identify the census date and citation window for the focal dataset.
- Compare recent cohorts with older cohorts or longer-horizon archives.
- Check whether high-citation papers are still accumulating citations in the oldest available cohort.
- Treat tail exponent estimates as provisional when even old cohorts remain visibly evolving.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) states that Physical Review D citation statistics from the earliest available years were still evolving.
- Redner argues that the large-citation tail had not reached its final state and could not be accurately determined by direct analysis alone.
- The paper concludes that older citation data would be valuable for studying long-time and large-citation tail properties.

## Caveats

- Older data can introduce field-composition, coverage, and indexing changes.
- Long horizons improve tail maturity but can obscure current citation practices.
- A long-horizon benchmark should be paired with cohort-age and database-coverage documentation.

## Links

- [citation tail maturation bias](citation_tail_maturation_bias.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [citation window selection](../methods/citation_window_selection.md)
- [citation cohort-age contrast](citation_cohort_age_contrast.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [asymptotic tail-reach diagnostic](asymptotic_tail_reach_diagnostic.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; SciSciNet: W2062021443; WoS: unknown]

## Metadata

- Concept ID: `long_horizon_citation_tail_benchmark`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Dimensions ID: `pub.1020100757`
- SciSciNet ID: `W2062021443`
- Aliases: long-window citation tail benchmark; older citation data benchmark; mature citation-tail check; long-time citation-tail validation
