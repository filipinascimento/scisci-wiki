# WoS longitudinal coverage drift

## Summary

WoS longitudinal coverage drift is the caveat that time-series analyses using Web of Science must account for changes in indexed content caused by additions, deletions, mergers, and collection redesign.

## Canonical Form

- Unit of analysis: indexed source, journal, collection, year, document type, subject area, or time-series denominator.
- Typical representation: source-list version, coverage-year table, inclusion/exclusion log, or collection-change note.
- Validation target: distinguish real changes in science from database-coverage changes.
- Empirical signature: publication counts, citation counts, field shares, or collaboration rates change when source coverage expands or contracts.

## Uses in Science of Science

- Adds a longitudinal denominator caveat to [Web of Science](../datasets/web_of_science.md) studies.
- Extends [selective core-journal coverage](../methods/selective_core_journal_coverage.md) from static coverage selection to time-varying coverage.
- Pairs with [citation data census dates](../methods/citation_data_census_dates.md) and [WoS update-service cadence](../methods/wos_update_service_cadence.md) for reproducible extracts.
- Supports robustness checks in field-growth, interdisciplinarity, collaboration, and evaluation studies.

## Operationalization

- Record collection names, source lists, document types, and database versions for every time interval.
- Separate source-coverage changes from publication-year and citation-window effects.
- Recalculate trends under stable-source subsets when coverage drift could drive the result.
- Report whether Emerging Sources, regional indexes, proceedings, books, or specialized collections are included.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) describes WoS journal coverage as having expanded greatly over time.
- The paper warns that modern coverage is not directly comparable to the original system because of mergers, content changes, deletions, and extensive additions.
- Birkle et al. also describe the expansion of platform coverage through Core Collection extensions and hosted citation databases.

## Caveats

- A long WoS time series is not automatically a stable denominator.
- Coverage drift can differ by field, country, language, document type, and index family.
- Stable-source sensitivity analyses can improve comparability but may omit newer or previously under-covered literatures.

## Links

- [Web of Science](../datasets/web_of_science.md)
- [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md)
- [WoS Core Collection index family](../datasets/wos_core_collection_index_family.md)
- [selective core-journal coverage](../methods/selective_core_journal_coverage.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [WoS update-service cadence](../methods/wos_update_service_cadence.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_longitudinal_coverage_drift`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: WoS time-series coverage drift; changing WoS source denominator; longitudinal citation-index drift; WoS coverage-change caveat
