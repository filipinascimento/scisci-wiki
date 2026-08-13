# Full-Database Bibliometric Access

## Summary

Full-database bibliometric access is direct access to a complete or licensed citation-database extract for large-scale, reproducible bibliometric analysis.

## Canonical Form

- Unit of analysis: complete database snapshot, licensed extract, local mirror, custom delivery, or direct database connection.
- Typical representation: local tables, full-record exports, API or database credentials, schema documentation, and provenance metadata.
- Method target: remove web-interface restrictions so large publication sets, citation graphs, and repeatable indicator pipelines can be analyzed.
- Empirical signature: large-scale citation analysis becomes feasible with stable records, explicit fields, and versioned extraction procedures.

## Uses in Science of Science

- Supports advanced analyses using [Web of Science](../datasets/web_of_science.md), [Scopus](../datasets/scopus.md), [OpenAlex](../datasets/openalex.md), [Dimensions](../datasets/dimensions.md), and local [scholarly data lakes](../datasets/scholarly_data_lakes.md).
- Complements [citation database web-interface access](citation_database_web_interface_access.md) for projects requiring complete denominators or graph-scale citation data.
- Grounds reproducibility through [bibliometric data access modes](bibliometric_data_access_modes.md), [scholarly snapshot versioning](scholarly_snapshot_versioning.md), and [citation data census dates](citation_data_census_dates.md).
- Makes [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md) testable across database snapshots and source subsets.
- Differs from a [Dimensions full-text delivery layer](dimensions_full_text_delivery_layer.md), which routes from records to readable content rather than exposing complete raw database tables.

## Operationalization

- Record the database, license or access agreement, snapshot or delivery date, schema, field projection, update cadence, and redistribution limits.
- Build scripted extraction and transformation workflows rather than relying on manual platform exports.
- Store source-specific identifiers and external identifiers so records can be reconciled across databases.
- Separate direct full-database access from vendor analytics tools, which may expose indicators without complete raw records.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) states that advanced, larger-scale citation analyses of Web of Science or Scopus require direct access to the full database without web-interface restrictions.
- Waltman notes that professional bibliometric centers often have direct access to the full Web of Science or Scopus database.
- The review also describes InCites and SciVal as specialized web-based alternatives for advanced analyses, with InCites based on Web of Science and SciVal based on Scopus.
- Waltman contrasts this with Google Scholar, for which direct access to the full database is not available.
- Verified full-text evidence from Birkle et al. (2020) broadens the same motif by describing Web of Science platform access, APIs, custom data-set delivery, and point-in-time or regularly updated data deliveries.
- The Birkle et al. full text also shows that full or custom access should record [WoS update-service cadence](wos_update_service_cadence.md) and product integrations when outputs come from Web of Science analytics layers.

## Caveats

- Full access can be proprietary, expensive, and governed by redistribution limits.
- Direct database access does not eliminate coverage bias; it makes the bias more auditable.
- Vendor analytics tools may not expose enough raw data to reproduce all indicators independently.
- Snapshot dates and schema versions must be recorded because historical records can be revised.

## Links

- [bibliometric data access modes](bibliometric_data_access_modes.md)
- [WoS update-service cadence](wos_update_service_cadence.md)
- [citation database web-interface access](citation_database_web_interface_access.md)
- [Web of Science](../datasets/web_of_science.md)
- [Scopus](../datasets/scopus.md)
- [Google Scholar](../datasets/google_scholar.md)
- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)
- [Dimensions full-text delivery layer](dimensions_full_text_delivery_layer.md)
- [Dimensions relation-query language](dimensions_relation_query_language.md)
- [scholarly data lakes](../datasets/scholarly_data_lakes.md)
- [scholarly snapshot versioning](scholarly_snapshot_versioning.md)
- [citation data census dates](citation_data_census_dates.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]
- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `full_database_bibliometric_access`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: direct citation database access; licensed bibliometric extract; full database access; local citation snapshot
