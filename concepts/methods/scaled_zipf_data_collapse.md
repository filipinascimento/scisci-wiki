# Scaled Zipf data collapse

## Summary

Scaled Zipf data collapse rescales citation rank by cohort size and citation count by cohort mean to compare rank-citation curves across datasets or publication cohorts.

## Canonical Form

- Unit of analysis: citation-ranked cohort, database sample, journal corpus, publication era, or field.
- Typical representation: plot of scaled citation count against relative rank.
- Method target: test whether rank-citation profiles share a common curve after accounting for sample size and mean citation intensity.
- Empirical signature: multiple cohorts collapse onto a similar scaled rank-citation curve, with deviations indicating aging, field, or database differences.

## Uses in Science of Science

- Refines [Zipf citation-tail inference](zipf_citation_tail_inference.md) by making cross-cohort rank plots more comparable.
- Supports [citation distribution scaling](../measures/citation_distribution_scaling.md) when samples differ in size and average citation rate.
- Helps identify which dataset reaches deeper into the high-citation tail before fitting tail exponents.
- Connects to later [universal citation distribution collapse](../validations/universal_citation_distribution_collapse.md) as an early rank-based scaling strategy.

## Operationalization

- Sort papers in each cohort by citation count.
- Divide each rank by the number of papers in that cohort.
- Divide each ranked citation count by the cohort's mean citation count.
- Plot scaled citation count against relative rank on log axes.
- Use the collapsed curve to compare tail depth, cohort age effects, and tail exponent ranges.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) rescales Zipf plots by relative rank and mean citation count for the ISI cohort and multiple Physical Review D cohorts.
- The paper reports relatively good collapse of the four datasets onto a single curve after scaling.
- Redner uses the scaled plot to infer that the larger ISI dataset extends deeper than the PRD data into the asymptotic tail.
- The same analysis provides the basis for estimating a rank exponent near -0.48 for highly ranked ISI papers.

## Caveats

- Mean scaling is sensitive to extreme citations and can shift curves when high-tail papers dominate the average.
- Collapse does not prove a universal mechanism; it can hide differences in field composition or citation age.
- Rank truncation, uncited papers, and database coverage need to be documented before comparing curves.

## Links

- [Zipf citation-tail inference](zipf_citation_tail_inference.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [universal citation distribution collapse](../validations/universal_citation_distribution_collapse.md)
- [citation cohort-age contrast](../validations/citation_cohort_age_contrast.md)
- [citation tail sparsity limit](../validations/citation_tail_sparsity_limit.md)
- [citation tail maturation bias](../validations/citation_tail_maturation_bias.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; WoS: unknown]

## Metadata

- Concept ID: `scaled_zipf_data_collapse`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Dimensions ID: `pub.1020100757`
- SciSciNet ID: `W2062021443`
- Aliases: scaled rank-citation collapse; relative-rank Zipf scaling; mean-scaled citation rank plot; Zipf curve collapse
