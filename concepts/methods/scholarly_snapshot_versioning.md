# Scholarly snapshot versioning

## Summary

Scholarly snapshot versioning records dataset release dates, update cadence, source coverage, and extraction provenance so analyses do not silently mix stale and current scholarly records.

## Canonical Form

- Unit of analysis: dataset snapshot, table release, partition date, API update, source version, or extraction run.
- Typical representation: snapshot manifest, data-release note, source-date column, provenance table, or reproducible extraction script.
- Method target: make coverage and freshness explicit before comparing publication records, citations, fields, or entity IDs.
- Empirical signature: every derived table can be traced to a source, version date, extraction date, and code path.

## Uses in Science of Science

- Decides whether to use fresh [Dimensions](../datasets/dimensions.md) or [OpenAlex](../datasets/openalex.md) records for recent papers instead of stale [SciSciNet-v2](../datasets/sciscinet_v2.md) tables.
- Prevents accidental mixing of updated citation counts, retired IDs, and old field classifications.
- Supplies provenance for [research-ready table curation](research_ready_table_curation.md), DOI matching, and concept-index metadata.
- Uses [citation data census dates](citation_data_census_dates.md) for citation-count and citation-network extracts where the "as of" date changes the result.
- Treats cross-source checks such as [SciSciNet-Dimensions publication validation](../validations/sciscinet_dimensions_publication_validation.md) as evidence about the reliability and aging of a frozen snapshot.

## Operationalization

- Resolve dataset roots through `PATHS.md` and record the path key rather than hardcoding absolute data roots.
- Store snapshot date, table name, partition date, source database, schema version, and worker/script settings in output metadata.
- Prefer current Dimensions or OpenAlex for recent coverage, and use SciSciNet-v2 as a secondary historical linkage layer unless refreshed.
- For MAG-derived resources, record the [MAG publication backbone](../datasets/mag_publication_backbone.md) source release separately from later OpenAlex or Dimensions enrichment.
- When moving a MAG-derived table to OpenAlex, add [MAG-to-OpenAlex migration audit](../validations/mag_to_openalex_migration_audit.md) fields for coverage, identifier, and derived-metric comparability.
- Regenerate derived tables when source snapshots change, especially citation counts, field assignments, and entity-resolution outputs.
- Store separate dates for source snapshot, API update, extraction run, citation window end, and derived-table build.
- Pair data-version checks with [indicator lifecycle review](indicator_lifecycle_review.md) when metric definitions or evaluation policies change over time.

## Evidence and Validations

- Verified full-text evidence from Priem et al. (2022) describes OpenAlex as offering a full data dump updated fortnightly and a REST API updated daily.
- Verified full-text evidence from Lin et al. (2023) notes that Microsoft Academic Graph was sunset and that OpenAlex builds on MAG while providing continuous updates.
- Lin et al. state that SciSciNet uses the MAG edition released on December 6, 2021, which makes snapshot date central to interpreting its coverage.
- Verified full-text evidence from Hook et al. (2018) frames transparency and reflexivity as database principles: data-production choices should be documented and metrics should respond as research and community needs change.
- Verified full-text evidence from Birkle et al. (2020) adds that citation counts accumulate, publication lists grow, and refreshed WoS data sets may include revised historical records, making point-in-time download dates significant.

## Caveats

- A newer snapshot is not automatically better if schema changes or coverage shifts break comparability.
- APIs and snapshots may disagree because they update on different cadences.
- Static data lakes are valuable for reproducibility but should not be assumed to contain recent papers.

## Links

- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)
- [SciSciNet-v2](../datasets/sciscinet_v2.md)
- [scholarly data lakes](../datasets/scholarly_data_lakes.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [MAG publication backbone](../datasets/mag_publication_backbone.md)
- [MAG-to-OpenAlex migration audit](../validations/mag_to_openalex_migration_audit.md)
- [OpenAlex distribution channels](openalex_distribution_channels.md)
- [scholarly entity graphs](../representations/scholarly_entity_graphs.md)
- [research-ready table curation](research_ready_table_curation.md)
- [paper-field linkages](../representations/paper_field_linkages.md)
- [citation window selection](citation_window_selection.md)
- [citation data census dates](citation_data_census_dates.md)
- [author metric update rank persistence](../validations/author_metric_update_rank_persistence.md)
- [bibliometric data access modes](bibliometric_data_access_modes.md)
- [indicator lifecycle review](indicator_lifecycle_review.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]
- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]
- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]
- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `scholarly_snapshot_versioning`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: dataset snapshot provenance; versioned scholarly data; snapshot freshness; data release versioning
