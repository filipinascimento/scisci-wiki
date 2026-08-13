# Garfield Constant

## Summary

Garfield Constant is the average number of citations per cited item in a citation-index window.

## Canonical Form

- Unit of analysis: citation index, cited item, citation window, source-journal roster, or cited-paper corpus.
- Typical representation: total citation links divided by the number of cited items receiving at least one citation.
- Measurement target: conditional citation intensity among items that are actually hit by a finite citation-index sample.
- Empirical signature: longer citation-index windows or broader source coverage increase citations per cited item relative to shorter windows.

## Uses in Science of Science

- Links [citation-index time-span scaling](citation_index_time_span_scaling.md) to a compact observable: citations per cited item.
- Provides a window-level counterpart to [per-cited-item impact factor](per_cited_item_impact_factor.md), which applies a similar conditional denominator at journal scale.
- Helps diagnose whether a citation index is mostly broadening the set of cited items or deepening citation counts to already-cited items.
- Supplies an input for [citation obsolescence from Garfield Constant](../methods/citation_obsolescence_from_garfield_constant.md), where age-specific cited-item intensity is used to infer long-range literature use.

## Operationalization

- Define the source database, source-journal roster, citation-index time span, document types, and cited-item inclusion rules.
- Count all citation links from the source window to cited items.
- Count unique cited items with at least one observed citation in that same window.
- Compute citations per cited item, then compare across quarterly, annual, multi-year, or all-time windows.
- Report whether cited books, proceedings, non-source journals, and non-article items are included.

## Evidence and Validations

- Verified full-text evidence from Price (1976) defines the Garfield Constant as the number of citations per cited item.
- Price reports that the annual citation-index value rose from about 1.60 in the early 1960s to about 1.80 in the mid-1970s, while a 1965-1969 quinquennial index had a value of 2.55 and quarterly indexes were around 1.3.
- Price connects the measure to the cumulative-advantage parameter, stating that it can be expressed as one plus twice the mean number of citations per paper in his setup.
- The same calculation is used to compare observed quarterly, annual, and quinquennial citation-index behavior with the expected finite-window scaling of citation distributions.

## Caveats

- The value is conditional on being cited, so it should not be read as average citations over all papers.
- Source-journal selection, cited-reference parsing, document type mix, and citation-window length can all change the value.
- Historical values from citation indexes are not directly comparable with modern live databases unless database coverage and update rules are held fixed.

## Links

- [citation-index time-span scaling](citation_index_time_span_scaling.md)
- [citation obsolescence from Garfield Constant](../methods/citation_obsolescence_from_garfield_constant.md)
- [per-cited-item impact factor](per_cited_item_impact_factor.md)
- [citation distribution scaling](citation_distribution_scaling.md)
- [citation window selection](../methods/citation_window_selection.md)
- [citation impact indicators](citation_impact_indicators.md)
- [cumulative advantage distribution](../methods/cumulative_advantage_distribution.md)

## References

- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; SciSciNet: W2080450835; WoS: unknown]

## Metadata

- Concept ID: `garfield_constant`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Price (1976) (1976)
- Latest seen paper: Price (1976) (1976)
- Primary reference DOI: `10.1002/asi.4630270505`
- OpenAlex ID: `W2080450835`
- Dimensions ID: `pub.1038956878`
- SciSciNet ID: `W2080450835`
- Aliases: citations per cited item; citation-index cited-item intensity; Garfield cited-item constant; cited-paper citation intensity
