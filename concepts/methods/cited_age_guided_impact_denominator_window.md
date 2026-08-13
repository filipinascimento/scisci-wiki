# Cited-age guided impact denominator window

## Summary

Cited-age guided impact denominator window chooses the publication-year base for a journal impact calculation using the cited-age distribution of journal citations.

## Canonical Form

- Unit of analysis: journal, citation year, cited-item age, denominator window, or impact factor.
- Typical representation: cited-age distribution paired with an items-published denominator window.
- Method target: align citation counts with the publication years that plausibly generated those citations.
- Empirical signature: a selected denominator window is justified by the chronological distribution of cited items.

## Uses in Science of Science

- Adds denominator-window logic to [journal impact factor](../measures/journal_impact_factor.md).
- Connects [citation window selection](citation_window_selection.md) with [citable-item denominator ambiguity](../validations/citable_item_denominator_ambiguity.md).
- Uses [citation-age backfile retention](citation_age_backfile_retention.md) evidence to understand how far back citation attention reaches.
- Links journal impact windows to [field citation tempo profile](../representations/field_citation_tempo_profile.md).

## Operationalization

- Build a cited-age distribution for each journal or journal set in the citation year.
- Select an items-published window that matches the dominant cited-age region.
- Count citations to items in that denominator window.
- Divide by the number of published items in the same window and report why the window was chosen.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) states that it is easy to count citations in a period but harder to agree on the total-items-published base.
- Garfield says the denominator choice was guided by the chronological distribution of cited items in annual SCI editions.
- The paper then calculates a 1969 impact factor by dividing citations to 1967-1968 articles by the number of articles published in those two years.

## Caveats

- Cited-age distributions differ by field, document type, and journal function.
- A short denominator window can disadvantage slow-citation fields and durable journals.
- Denominator-window choice should be reported separately from citable-item classification.

## Links

- [journal impact factor](../measures/journal_impact_factor.md)
- [citation window selection](citation_window_selection.md)
- [citable-item denominator ambiguity](../validations/citable_item_denominator_ambiguity.md)
- [citation-age backfile retention](citation_age_backfile_retention.md)
- [field citation tempo profile](../representations/field_citation_tempo_profile.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; SciSciNet: W2053549370; WoS: unknown]

## Metadata

- Concept ID: `cited_age_guided_impact_denominator_window`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Garfield (1972) (1972)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: cited-age denominator window; impact denominator-year selection; cited-age impact window; citation-age guided JIF denominator
