# Reference-rate archive-size check

## Summary

Reference-rate archive-size check validates cumulative-advantage citation models by comparing their implied average references per paper with the plausible size and structure of the scientific archive.

## Canonical Form

- Unit of analysis: citation archive, paper population, average references per paper, citation model, or subfield.
- Typical representation: predicted mean successes, observed references per article, implied archive size, or autonomous-subfield caveat.
- Validation target: test whether a global citation model produces realistic reference rates and archive sizes.
- Empirical signature: the model overpredicts observed journal references unless the archive is smaller, fragmented into subfields, or only a fraction of successes manifest as citations.

## Uses in Science of Science

- Gives [citation distribution scaling](../measures/citation_distribution_scaling.md) a sanity check beyond fitting the tail.
- Links [cumulative advantage distribution](../methods/cumulative_advantage_distribution.md) to field modularity and citation-database coverage.
- Supports [citation-index time-span scaling](../measures/citation_index_time_span_scaling.md), because finite citation windows and source selections change the observed mean.
- Provides a historical precursor to field-normalized citation models and subfield-specific reference-rate checks.

## Operationalization

- Estimate the relevant archive size, source-journal scope, and average references per paper.
- Compute the model-implied mean successes or references per paper under the cumulative-advantage assumptions.
- Compare the implied value with observed reference-list lengths and within-source citation rates.
- If the global model overpredicts, test subfield partitioning, source-coverage restrictions, or a manifested-citation fraction.
- Report whether non-journal references and database scope are included.

## Evidence and Validations

- Verified full-text evidence from Price (1976) derives expected mean successes for total citation networks of different population sizes.
- Price compares those expectations with the observed order of about 13 references per article and notes that this may be an overestimate because many references are to non-journal items outside the source network.
- The paper suggests that the mismatch may indicate that scientific literature is not a single unified citation archive but consists of hundreds of nearly autonomous subfields.
- Price also offers an alternative explanation in which only a fraction of successes are actually manifested as citations.

## Caveats

- Reference rates differ across fields, eras, document types, and databases.
- Non-journal references, books, patents, and data/software citations change the archive denominator.
- A plausible reference-rate match does not prove the cumulative-advantage mechanism.
- Modern datasets should repeat the check with explicit field partitions and current Dimensions/OpenAlex coverage.

## Links

- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [cumulative advantage distribution](../methods/cumulative_advantage_distribution.md)
- [citation-index time-span scaling](../measures/citation_index_time_span_scaling.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [field classifications](../measures/field_classifications.md)
- [reference-list length growth confound](reference_list_length_growth_confound.md)
- [Web of Science](../datasets/web_of_science.md)

## References

- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; WoS: unknown]

## Metadata

- Concept ID: `reference_rate_archive_size_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Price (1976) (1976)
- Latest seen paper: Price (1976) (1976)
- Primary reference DOI: `10.1002/asi.4630270505`
- OpenAlex ID: `W2080450835`
- Dimensions ID: `pub.1038956878`
- SciSciNet ID: `W2080450835`
- Aliases: references-per-paper archive check; citation archive size sanity check; autonomous-subfield citation check; reference-rate model validation
