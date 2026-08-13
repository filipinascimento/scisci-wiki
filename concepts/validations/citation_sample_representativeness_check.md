# Citation sample representativeness check

## Summary

Citation sample representativeness check is the validation step of comparing a citation sample against a broader reference population before using the sample for ranking, mapping, or source-selection decisions.

## Canonical Form

- Unit of analysis: citation sample, source index, journal set, reference population, or derived indicator.
- Typical representation: sample-to-population comparison over counts, rankings, cited-year distributions, or source/cited-title composition.
- Validation target: whether a sampled citation window preserves the structure needed for the intended analysis.
- Empirical signature: a short citation sample gives similar rankings or distributions to a larger reference population within an acceptable tolerance.

## Uses in Science of Science

- Validates short-window [journal citation frequency](../measures/journal_citation_frequency.md) and [source journal reference profiles](../representations/source_journal_reference_profile.md).
- Supports [citation-based source selection](../methods/citation_based_source_selection.md) when full-year or full-index processing is expensive.
- Provides a general audit motif for large citation-index workflows where computation or access requires sampling.

## Operationalization

- Define the target population and the sampled citation window or sample design.
- Compute the indicators or profiles on both the sample and a broader benchmark.
- Compare rankings, counts, field composition, cited-year distributions, and high-impact tail membership.
- Document which uses are justified by the comparison and which require full data.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) reports a direct sample check for SCI journal citation analysis.
- Garfield compares a three-month sample from the last quarter of 1969 against every 27th reference from a full-year population of about four million references.
- The comparison convinced the authors that the three-month data were similar enough in scope and detail to support the intended journal citation analyses.
- The same full text also identifies journal-level instability mechanisms now split as [short-window journal ranking instability](short_window_journal_ranking_instability.md).

## Caveats

- Representativeness is task-specific: a sample may preserve broad rankings while failing for rare fields, small journals, or tail events.
- Journal publication schedules, issue timing, and special issues can distort short samples.
- The validation should be rerun when source coverage, citation-window definitions, or document-type filters change.

## Links

- [journal citation frequency](../measures/journal_citation_frequency.md)
- [source journal reference profile](../representations/source_journal_reference_profile.md)
- [cited journal citation profile](../representations/cited_journal_citation_profile.md)
- [citation-based source selection](../methods/citation_based_source_selection.md)
- [short-window journal ranking instability](short_window_journal_ranking_instability.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [Web of Science](../datasets/web_of_science.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]

## Metadata

- Concept ID: `citation_sample_representativeness_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Garfield (1972) (1972)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: citation sampling validation; reference sample validation; citation-window representativeness; sample-versus-population citation check
