# WoS update-service cadence

## Summary

WoS update-service cadence is the method of recording how often a Web of Science extract, API feed, custom delivery, or platform collection is refreshed.

## Canonical Form

- Unit of analysis: data delivery, API route, custom extract, collection, citation-count field, or refresh schedule.
- Typical representation: update-cadence field, delivery-frequency note, extraction log, API tier manifest, or refresh-cycle agreement.
- Method target: make data freshness and historical revision behavior auditable.
- Empirical signature: current, historical, and regularly updated extracts differ in record counts, citation counts, and revised historical records.

## Uses in Science of Science

- Specializes [bibliometric data access modes](bibliometric_data_access_modes.md) and [citation data census dates](citation_data_census_dates.md) for recurring WoS deliveries.
- Helps decide whether a project needs a static point-in-time extract, a historical backfile, a two-week custom refresh, an annual refresh, or API access.
- Provides source-specific cadence metadata for [scholarly snapshot versioning](scholarly_snapshot_versioning.md) and [research-ready table curation](research_ready_table_curation.md).
- Supports comparisons with OpenAlex, Dimensions, and SciSciNet, where update cadence and snapshot staleness differ.

## Operationalization

- Record delivery route, source collection, extraction date, refresh schedule, API tier, call-speed limits, data-volume limits, and the date each derived table was rebuilt.
- Distinguish an updated extract from a simple append; refreshed WoS records may include new records and revised historical records.
- Store cadence at the source-delivery level and at the derived-table level, since local transformations may lag behind the source refresh.
- Recompute downstream citation indicators when refreshed citation counts or source records alter the denominator.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) states that Web of Science data can be required as current at one point in time, historical over a period, or regularly updated to a custom cycle.
- The paper notes that citation counts accumulate and publication lists grow, making the census date for each download significant.
- Birkle et al. state that custom data sets can be updated and re-extracted as often as every two weeks when necessary, or simply annually.
- The same section describes basic, intermediate, and advanced API formats with different call speeds and data volumes, linking update service directly to access mode.

## Caveats

- A later extract can revise historical records as well as add recent records.
- API cadence, collection cadence, and local derived-table cadence are distinct and should not be collapsed into one date.
- Proprietary delivery schedules can constrain replication even when the analytic code is available.

## Links

- [bibliometric data access modes](bibliometric_data_access_modes.md)
- [citation data census dates](citation_data_census_dates.md)
- [scholarly snapshot versioning](scholarly_snapshot_versioning.md)
- [research-ready table curation](research_ready_table_curation.md)
- [fit-for-purpose bibliometric extracts](fit_for_purpose_bibliometric_extracts.md)
- [full-database bibliometric access](full_database_bibliometric_access.md)
- [Web of Science](../datasets/web_of_science.md)
- [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_update_service_cadence`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: WoS refresh cadence; Web of Science update service; custom extract refresh cycle; API update cadence
