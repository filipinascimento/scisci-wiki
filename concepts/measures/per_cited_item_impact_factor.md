# Per-cited-item impact factor

## Summary

Per-cited-item impact factor is a journal impact variant that divides citations by the number of cited items rather than by all published items, separating citation intensity among items that receive any citations from the uncited share.

## Canonical Form

- Unit of analysis: journal, cited item, citation window, source database, or impact-factor variant.
- Typical representation: citations received in a window divided by the count of cited published items in the denominator window.
- Measurement target: average citation intensity conditional on an item being cited at least once.
- Empirical signature: journals with the same ordinary impact factor diverge when one has a few intensely cited items and another has many lightly cited items.

## Uses in Science of Science

- Refines [journal impact factor](journal_impact_factor.md) by separating cited-item intensity from uncited-item mass.
- Complements [citable-items-cited impact factor](citable_items_cited_impact_factor.md), which instead emphasizes the share of citable items that receive citations.
- Helps diagnose whether a journal's impact is concentrated in a small number of high-attention items.

## Operationalization

- Define the same citation and publication windows used for the ordinary impact factor.
- Count total citations to items in the publication window.
- Count only items in that window that received at least one citation.
- Divide citations by cited items and compare with ordinary impact factor and the uncited share.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) proposes considering total citations in relation to cited items only to discount the influence of uncited papers.
- Garfield gives a hypothetical example where two journals have the same ordinary impact factor of 0.50 but per-cited-item values of 50.0 versus 1.0.
- The example shows why ordinary impact factor can hide whether citations are concentrated in a single article or distributed across many cited articles.

## Caveats

- Conditional-on-cited denominators can exaggerate the apparent performance of journals with many uncited items.
- The measure should be interpreted alongside uncited-item share or citable-items-cited impact factor.
- Historical computation was expensive; modern databases make it feasible but still sensitive to item-type and citation-window rules.

## Links

- [journal impact factor](journal_impact_factor.md)
- [citable-items-cited impact factor](citable_items_cited_impact_factor.md)
- [citable-item denominator ambiguity](../validations/citable_item_denominator_ambiguity.md)
- [uncited paper mass](uncited_paper_mass.md)
- [journal citation frequency](journal_citation_frequency.md)
- [citation impact indicators](citation_impact_indicators.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]

## Metadata

- Concept ID: `per_cited_item_impact_factor`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Garfield (1972) (1972)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: cited-item impact factor; citations per cited item; conditional journal impact factor; cited article impact factor
