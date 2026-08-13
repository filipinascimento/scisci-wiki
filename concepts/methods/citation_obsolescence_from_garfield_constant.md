# Citation Obsolescence from Garfield Constant

## Summary

Citation obsolescence from Garfield Constant estimates age-specific literature use by comparing citations per cited item across cited-paper ages.

## Canonical Form

- Unit of analysis: cited-paper age bin, citation index, cited item, source-year cohort, or literature archive.
- Typical representation: age-specific Garfield Constant, relative-use curve, obsolescence schedule, or cited-age intensity profile.
- Method target: separate decline in use of older papers from the simple fact that the literature has grown over time.
- Empirical signature: citations per cited item decline slowly with cited-paper age after accounting for publication-volume growth.

## Uses in Science of Science

- Splits a Price-specific estimation method out of broader [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md).
- Complements [growth-normalized citation-age baseline](growth_normalized_citation_age_baseline.md), which fits age distributions from cited-year counts rather than cited-item intensity.
- Connects [Garfield Constant](../measures/garfield_constant.md) to citation-age analysis and historical backfile evaluation.
- Helps test whether apparent recent-paper dominance is due to real obsolescence, literature growth, citation-window truncation, or database coverage.

## Operationalization

- Build a cited-age distribution from a fixed citation-index source window.
- Within each cited-age bin, count citation links and unique cited items receiving at least one citation.
- Compute the age-specific [Garfield Constant](../measures/garfield_constant.md).
- Convert the age-specific values into a relative-use curve using the most recent age bin or another documented baseline.
- Compare the curve against publication-volume shocks and source-coverage changes before interpreting it as obsolescence.

## Evidence and Validations

- Verified full-text evidence from Price (1976) argues that citations per cited paper can disentangle literature growth from obsolescence.
- Price relates citations per cited paper to the cumulative-advantage mean and parameter, then uses age-specific values to derive relative use of older literature.
- Price notes that the resulting curve does not show effects from the publication-volume curtailments around the two world wars, which he interprets as evidence that the measure is isolating obsolescence rather than archive size.
- The same full text argues that citation obsolescence is mostly long range: the chance of citation decreases slowly for several years and by only about a factor of ten after a century.

## Caveats

- The method depends on accurate cited-item deduplication, cited-year assignment, and citation-index coverage.
- A flat or slow decline does not imply that all old papers remain substantively useful; older work may be cited for history, methods, or canonical credit.
- Changes in source coverage, language coverage, and document-type indexing can mimic age-specific obsolescence.

## Links

- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [Garfield Constant](../measures/garfield_constant.md)
- [growth-normalized citation-age baseline](growth_normalized_citation_age_baseline.md)
- [citation immediacy effect curve](../measures/citation_immediacy_effect_curve.md)
- [citation-index time-span scaling](../measures/citation_index_time_span_scaling.md)
- [citation window selection](citation_window_selection.md)
- [citation-age backfile retention](citation_age_backfile_retention.md)
- [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md)

## References

- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; SciSciNet: W2080450835; WoS: unknown]

## Metadata

- Concept ID: `citation_obsolescence_from_garfield_constant`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Price (1976) (1976)
- Latest seen paper: Price (1976) (1976)
- Primary reference DOI: `10.1002/asi.4630270505`
- OpenAlex ID: `W2080450835`
- Dimensions ID: `pub.1038956878`
- SciSciNet ID: `W2080450835`
- Aliases: Garfield Constant obsolescence estimator; cited-item intensity age curve; age-specific citations per cited item; Price obsolescence estimator
