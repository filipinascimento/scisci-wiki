# Impact-factor citation-window share

## Summary

Impact-factor citation-window share measures the fraction of a journal cohort's lifetime citations that falls inside the impact-factor time window.

## Canonical Form

- Unit of analysis: journal cohort, citation window, lifetime citation curve, or impact-factor denominator.
- Typical representation: share of total eventual citations captured by the two-year or other impact-factor window.
- Measurement target: quantify why short-window journal metrics can diverge from long-term impact.
- Empirical signature: journals with slower citation accumulation have lower window shares despite high long-term influence.

## Uses in Science of Science

- Refines [citation window selection](../methods/citation_window_selection.md).
- Gives a measurable channel behind [journal impact-time shift](../validations/journal_impact_time_shift.md).
- Connects journal metrics with [citation longevity parameter](citation_longevity_parameter.md).
- Helps interpret when impact factor underweights slow-burning journals.

## Operationalization

- Define a journal publication cohort.
- Estimate the cohort's cumulative citation curve over a long horizon.
- Compute the share of lifetime citations occurring inside the impact-factor window.
- Compare window shares across journals and fields.

## Evidence and Validations

- Verified full-text evidence from Wang et al. (2013) compares journal citation histories and short-window impact-factor timing.
- The paper shows that journals differ in how much of their long-term citation impact appears early.
- This explains why impact-factor rankings can diverge from long-term journal impact.

## Caveats

- Lifetime citations require a long enough observation horizon or model-based extrapolation.
- Citation-window share depends on field tempo and document type.
- A high early share is not necessarily better; it can indicate fast obsolescence.

## Links

- [citation window selection](../methods/citation_window_selection.md)
- [journal impact-time shift](../validations/journal_impact_time_shift.md)
- [citation longevity parameter](citation_longevity_parameter.md)
- [field citation tempo profile](../representations/field_citation_tempo_profile.md)
- [journal impact factor](journal_impact_factor.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; SciSciNet: W2124689612]

## Metadata

- Concept ID: `impact_factor_citation_window_share`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: impact-factor window share; early citation-window share; IF citation capture fraction; short-window citation share
