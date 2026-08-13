# Five-year early-career window sensitivity

## Summary

Five-year early-career window sensitivity tests whether career-exposure findings depend on defining junior status as the first three years after first publication or a longer early-career interval.

## Canonical Form

- Unit of analysis: scientist, career-start cohort, early-career window, collaboration exposure, or later career outcome.
- Typical representation: robustness table comparing three-year and five-year exposure windows.
- Validation target: distinguish a substantive early-career effect from an artifact of a narrow window definition.
- Empirical signature: treatment-control or regression results remain qualitatively similar when the early-career window is extended.

## Uses in Science of Science

- Validates [matched career counterfactuals](../methods/matched_career_counterfactuals.md) by checking whether early exposure is overly sensitive to the junior-window cutoff.
- Supports [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md), because exposure to a top scientist can occur just after the first three publication years.
- Adds a robustness layer to [early-career sponsorship by top scientists](../mechanisms/early_career_sponsorship.md) and broader [scientific career impact dynamics](../mechanisms/scientific_career_impact.md).

## Operationalization

- Define the baseline early-career window, such as the first three years after first publication.
- Recompute exposure, matching covariates, and outcomes under a longer window, such as five years.
- Preserve field and cohort normalization when the window changes.
- Compare signs, effect sizes, significance, and matched-pair balance across window definitions.
- Report whether later career outcomes exclude publications inside the expanded early window.

## Evidence and Validations

- Verified full-text evidence from Li et al. (2019) classifies junior researchers as scientists in their first three years after first publication and states that the main results are qualitatively unchanged when extending the period to five years.
- The matched-pair section reports an additional robustness control using the first five career years and states that the matched-pair results do not change under that alternative window.
- This supports treating the first-three-year definition as an operational choice rather than the sole driver of the reported top-coauthor association.

## Caveats

- A five-year window can include post-Ph.D., postdoc, or early faculty transitions differently across fields.
- Extending the window can blur exposure timing if the outcome period is not redefined consistently.
- Qualitative robustness still does not remove the [top scientist selection confound](top_scientist_selection_confound.md).

## Links

- [matched career counterfactuals](../methods/matched_career_counterfactuals.md)
- [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md)
- [early-career sponsorship by top scientists](../mechanisms/early_career_sponsorship.md)
- [top scientist selection confound](top_scientist_selection_confound.md)
- [unique-coauthor-count matching robustness](unique_coauthor_count_matching_robustness.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)

## References

- Li, W., Aste, T., Caccioli, F., & Livan, G. (2019). Early coauthorship with top scientists predicts success in academic careers. *Nature Communications*, 10, 5170. https://doi.org/10.1038/s41467-019-13130-4 [OpenAlex: W2949684159; Dimensions: pub.1122584827; WoS: unknown]

## Metadata

- Concept ID: `five_year_early_career_window_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li et al. (2019) (2019)
- Latest seen paper: Li et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-13130-4`
- OpenAlex ID: `W2949684159`
- Dimensions ID: `pub.1122584827`
- SciSciNet ID: `W2949684159`
- Aliases: five-year junior-window robustness; early-career window robustness; junior-career window sensitivity; mentorship window sensitivity
