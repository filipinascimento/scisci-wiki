# h-index unique-name cohort selection

## Summary

h-index unique-name cohort selection is the validation bias introduced when h-index cohorts are restricted to researchers whose names are uniquely identifiable in a citation database.

## Canonical Form

- Unit of analysis: author name, validation cohort, citation database, h-index, or disambiguation rule.
- Typical validation: compare uniquely named authors with the intended population of scientists.
- Validation target: sample-selection bias in author-metric validation.
- Empirical signature: validation cohorts exclude common-name researchers or groups with harder-to-disambiguate names.

## Uses in Science of Science

- Adds a validation layer to [h-index](../measures/h_index.md).
- Connects author metrics to [author name disambiguation](../methods/author_name_disambiguation.md).
- Supports cautious reading of [recognition-cohort h-index validation](recognition_cohort_h_index_validation.md).
- Helps evaluate database-dependent author indicators.

## Operationalization

- Identify whether a validation sample is selected by unique names.
- Compare included and excluded name groups when possible.
- Report the citation database and name-matching rule.
- Treat validation results as conditional on cohort construction.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) uses researchers whose names can be uniquely identified in the citation database for parts of the validation discussion.
- That design improves practical measurement but can bias the validation cohort.
- The motif separates name-resolution convenience from metric validity.

## Caveats

- Unique-name selection can correlate with nationality, language, gender, and field.
- Citation databases differ in initials, full names, and author identifiers.
- Later author-disambiguation systems reduce but do not eliminate this issue.

## Links

- [h-index](../measures/h_index.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [recognition-cohort h-index validation](recognition_cohort_h_index_validation.md)
- [homonym and synonym author errors](homonym_synonym_author_errors.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; SciSciNet: W2128438887; WoS: unknown]

## Metadata

- Concept ID: `h_index_unique_name_cohort_selection`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Hirsch (2005) (2005)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: unique-name h-index validation; author-metric name-selection bias; h-index disambiguation cohort bias
