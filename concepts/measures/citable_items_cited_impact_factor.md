# Citable-items-cited impact factor

## Summary

Citable-items-cited impact factor is a journal impact variant that counts the proportion or rate of citable items that receive citations, distinguishing broad citation coverage from citation concentration.

## Canonical Form

- Unit of analysis: journal, citable item, citation window, denominator rule, or impact-factor variant.
- Typical representation: cited citable items divided by all citable items, optionally compared with ordinary impact factor.
- Measurement target: breadth of citation uptake across a journal's recent output.
- Empirical signature: journals with equal ordinary impact factors diverge when one has many items cited once and another has one item cited many times.

## Uses in Science of Science

- Complements [per-cited-item impact factor](per_cited_item_impact_factor.md) by focusing on the breadth of cited output rather than citation intensity conditional on being cited.
- Provides a journal-level analogue to uncited-output analysis in [uncited paper mass](uncited_paper_mass.md).
- Adds a denominator-aware diagnostic to [journal impact factor](journal_impact_factor.md) and [responsible metrics](responsible_metrics.md).

## Operationalization

- Define citable items and citation window before counting.
- Identify which citable items receive at least one citation in the target citing period.
- Divide cited citable items by total citable items, or report as a rate alongside ordinary impact factor.
- Compare with per-cited-item impact factor to distinguish concentration from broad uptake.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) proposes a citable-items-cited impact factor based on the number of citable items cited.
- Garfield's hypothetical example gives the same ordinary impact factor of 0.50 for two journals, but citable-items-cited impact factors of 0.01 and 0.5.
- This contrast shows how an average citation rate can conflate a single highly cited item with broad low-level citation across many items.

## Caveats

- The measure is sensitive to [citable-item denominator ambiguity](../validations/citable_item_denominator_ambiguity.md).
- A high cited-items share does not imply high citation intensity or substantive importance.
- Citation windows that are too short can undercount slow-diffusing items.

## Links

- [journal impact factor](journal_impact_factor.md)
- [per-cited-item impact factor](per_cited_item_impact_factor.md)
- [citable-item denominator ambiguity](../validations/citable_item_denominator_ambiguity.md)
- [uncited paper mass](uncited_paper_mass.md)
- [citation window selection](../methods/citation_window_selection.md)
- [responsible metrics](responsible_metrics.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]

## Metadata

- Concept ID: `citable_items_cited_impact_factor`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Garfield (1972) (1972)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: cited citable item rate; citable-items-cited ratio; citation breadth impact factor; cited-output share
