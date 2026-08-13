# Citation-index time-span scaling

## Summary

Citation-index time-span scaling measures how the citation-count distribution changes when a citation index samples a quarterly, annual, multi-year, or all-time window.

## Canonical Form

- Unit of analysis: citation index, citation window, cited-paper corpus, source-journal roster, or time-limited citation sample.
- Typical representation: mean citations per paper, cumulative-distribution exponent, density exponent, hit fraction, or time-window correction.
- Measurement target: how sampling citations over different time spans changes observed skew and coverage.
- Empirical signature: shorter citation windows produce steeper citation-count distributions and lower cited-paper coverage than longer windows.

## Uses in Science of Science

- Makes [citation window selection](../methods/citation_window_selection.md) a distributional issue, not only an exposure-time choice.
- Extends [citation distribution scaling](citation_distribution_scaling.md) with an early theory of how quarterly, annual, and multi-year indexes differ.
- Links [source-journal selection efficiency](source_journal_selection_efficiency.md) to time-window efficiency.
- Uses [Garfield Constant](garfield_constant.md) as a compact conditional-intensity measure for comparing quarterly, annual, and multi-year citation-index windows.
- Provides an older bridge between [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md) and cumulative-advantage modeling.

## Operationalization

- Define the source-journal roster and citation-index time span.
- Compute mean citations per cited or corpus paper in each window.
- Estimate how much of the all-time cited-paper population is hit by the finite window.
- Compare observed count distributions with expected cumulative-advantage exponents for quarterly, annual, and multi-year indexes.
- Report both source-selection coverage and temporal-window coverage.

## Evidence and Validations

- Verified full-text evidence from Price (1976) states that a real citation index samples the literature in two ways: by selecting source journals and by restricting the time range over which citations are observed.
- Price argues that a one-year citation index should have a cumulative-advantage parameter near unity and a large-n inverse-cube density.
- For many-year indexes, Price predicts a larger mean number of citations per corpus paper and a distribution closer to the inverse-square limiting case.
- For quarterly indexes, Price states that the parameter is larger and that the distribution should fall off much more steeply, approximately as 1 over n to the sixth power.
- Price also combines source-selection efficiency with a finite-window hit fraction, using a Poisson-style expression where the captured share rises with references per paper, literature growth rate, and index span.
- Price reports Garfield Constant values for quarterly, annual, and quinquennial citation indexes and links them to the cumulative-advantage parameter.
- The related [reference-rate archive-size check](../validations/reference_rate_archive_size_check.md) tests whether the same cumulative-advantage setup implies plausible average reference rates and archive sizes.

## Caveats

- Price's calculations depend on source-journal selection, exponential literature growth, and approximate reference rates.
- Modern citation indexes have different document types, online-first publication, preprints, and database update policies.
- A short citation window can miss delayed recognition, slow-citing fields, and disruptive work.

## Links

- [citation distribution scaling](citation_distribution_scaling.md)
- [Garfield Constant](garfield_constant.md)
- [citation window selection](../methods/citation_window_selection.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [source-journal selection efficiency](source_journal_selection_efficiency.md)
- [reference-rate archive-size check](../validations/reference_rate_archive_size_check.md)
- [cumulative-advantage marginal coverage utility](cumulative_advantage_marginal_coverage_utility.md)
- [cumulative advantage distribution](../methods/cumulative_advantage_distribution.md)
- [citation-index research infrastructure](../datasets/citation_index_research_infrastructure.md)
- [citation sample representativeness check](../validations/citation_sample_representativeness_check.md)
- [citation impact indicators](citation_impact_indicators.md)

## References

- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; WoS: unknown]

## Metadata

- Concept ID: `citation_index_time_span_scaling`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Price (1976) (1976)
- Latest seen paper: Price (1976) (1976)
- Primary reference DOI: `10.1002/asi.4630270505`
- OpenAlex ID: `W2080450835`
- Dimensions ID: `pub.1038956878`
- SciSciNet ID: `W2080450835`
- Aliases: citation-window distribution scaling; citation-index span effect; quarterly annual citation-index scaling; finite citation-window hit fraction
