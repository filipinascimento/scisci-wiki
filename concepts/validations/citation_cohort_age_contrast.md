# Citation cohort-age contrast

## Summary

Citation cohort-age contrast compares citation distributions from older and newer publication cohorts to separate stable lower-tail behavior from still-maturing high-citation tails.

## Canonical Form

- Unit of analysis: publication cohort, citation window, field corpus, low-citation tail, high-citation tail, or rank-citation profile.
- Typical representation: cohort-specific distribution or Zipf plot split by publication years.
- Validation target: determine which parts of a citation distribution are mature enough for inference.
- Empirical signature: low-citation regions may look similar across cohort ages while highly cited recent papers remain below older cohorts because their citation histories are unfinished.

## Uses in Science of Science

- Provides a concrete diagnostic for [citation tail maturation bias](citation_tail_maturation_bias.md).
- Links [low-citation short lifetime](../mechanisms/low_citation_short_lifetime.md) to high-tail aging in the same empirical design.
- Supports [citation window selection](../methods/citation_window_selection.md) and [scaled Zipf data collapse](../methods/scaled_zipf_data_collapse.md).
- Uses panel designs such as [Physical Review D citation-distribution panel](../datasets/physical_review_d_citation_distribution_panel.md) when annual cohorts and top-paper counts are available.
- Helps decide whether recent citation data are adequate for top-tail indicators, rankings, or distributional fits.

## Operationalization

- Split a citation corpus into older and newer publication cohorts.
- Normalize distributions if needed to compare shapes rather than raw corpus size.
- Compare low-citation thresholds, middle ranges, and high-citation tails separately.
- Use rank-citation plots to show whether recent high-impact papers have had enough time to mature.
- Report the database snapshot date and publication-year ranges.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) compares the first four and last four years of Physical Review D data.
- The paper reports little difference in poorly cited papers across these eras, contrasting with substantial differences in high-citation tails.
- Redner interprets the lower-tail stability as evidence that minimally cited papers have short citation lifetimes.
- The same contrast shows that popular recent papers can still be early in their citation histories, supporting high-tail maturation warnings.

## Caveats

- Cohort differences can reflect topic shifts, field growth, database coverage, or document-type changes rather than only citation age.
- Normalization choices can affect apparent low-tail similarity.
- A cohort-age contrast should be paired with field and document-type controls for evaluative use.

## Links

- [citation tail maturation bias](citation_tail_maturation_bias.md)
- [low-citation short lifetime](../mechanisms/low_citation_short_lifetime.md)
- [scaled Zipf data collapse](../methods/scaled_zipf_data_collapse.md)
- [Physical Review D citation-distribution panel](../datasets/physical_review_d_citation_distribution_panel.md)
- [citation window selection](../methods/citation_window_selection.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [uncited-paper mass](../measures/uncited_paper_mass.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; WoS: unknown]

## Metadata

- Concept ID: `citation_cohort_age_contrast`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Dimensions ID: `pub.1020100757`
- SciSciNet ID: `W2062021443`
- Aliases: citation age cohort contrast; old-new citation cohort comparison; citation tail age split; cohort citation-window contrast
