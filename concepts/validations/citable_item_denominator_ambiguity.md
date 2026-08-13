# Citable-item denominator ambiguity

## Summary

Citable-item denominator ambiguity is the validation problem that journal impact indicators depend on which publication types are counted as citable items in the denominator.

## Canonical Form

- Unit of analysis: journal, article type, citable item, denominator window, source database, or journal impact indicator.
- Typical representation: denominator rule, publication-type classification table, or sensitivity analysis over included item types.
- Validation target: determine whether an impact measure is robust to how citable items are identified.
- Empirical signature: impact factors or journal ranks change when editorials, letters, news items, reviews, proceedings, or other item types are included or excluded.

## Uses in Science of Science

- Adds a denominator audit to [journal impact factor](../measures/journal_impact_factor.md) and [citation impact indicators](../measures/citation_impact_indicators.md).
- Connects journal evaluation to [reference set construction](../methods/reference_set_construction.md) and [responsible metrics](../measures/responsible_metrics.md).
- Helps explain why cross-database journal indicators can disagree even when citation counts are similar.

## Operationalization

- Declare the publication types counted in the denominator for each journal and year.
- Compare impact indicators under broad and narrow citable-item rules.
- Track database-provided item types separately from journal-provided sections when possible.
- Report whether high-citation front matter, review articles, letters, or editorials are included in numerator, denominator, or both.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) states that differentiating among kinds of published material would have been desirable but was infeasible for the approximately 630,000 items used in the items-published base.
- Garfield argues that if such differentiation were included, lead articles in journals such as *Science*, *Nature*, *Lancet*, and *Journal of the American Medical Association* would likely have higher impact factors than reported.
- The same footnote frames citable-item classification as a computational and classification limitation, not a purely mechanical count.

## Caveats

- Denominator rules can be gamed if journals shift material into non-citable categories while still receiving citations.
- Publication-type labels can vary across databases, publishers, and historical periods.
- A denominator sensitivity analysis should be paired with field, age, and document-type context before drawing evaluation conclusions.

## Links

- [journal impact factor](../measures/journal_impact_factor.md)
- [per-cited-item impact factor](../measures/per_cited_item_impact_factor.md)
- [citable-items-cited impact factor](../measures/citable_items_cited_impact_factor.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [reference set construction](../methods/reference_set_construction.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]

## Metadata

- Concept ID: `citable_item_denominator_ambiguity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Garfield (1972) (1972)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: citable item ambiguity; JIF denominator ambiguity; publication type denominator sensitivity; citable item classification bias
