# MAG-to-OpenAlex migration audit

## Summary

MAG-to-OpenAlex migration audit checks whether analyses built on Microsoft Academic Graph or MAG-derived data lakes can be refreshed with OpenAlex without changing identifiers, coverage, entity resolution, field assignments, or derived measures in undocumented ways.

## Canonical Form

- Unit of analysis: MAG paper record, OpenAlex work, crosswalk row, source snapshot, derived metric, field assignment, author entity, or linkage table.
- Typical representation: MAG-to-OpenAlex crosswalk, coverage comparison, identifier concordance table, changed-field audit, and stale-snapshot warning.
- Validation target: make migration from a frozen MAG backbone to a current OpenAlex graph reproducible and interpretable.
- Empirical signature: migrated analyses preserve source-native IDs, document missing or changed records, and recompute derived measures rather than assuming drop-in equivalence.

## Uses in Science of Science

- Provides the audit layer between [MAG publication backbone](../datasets/mag_publication_backbone.md), [SciSciNet-v2](../datasets/sciscinet_v2.md), and current [OpenAlex](../datasets/openalex.md) workflows.
- Extends [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md) from source-date documentation to migration-specific checks.
- Protects [scholarly identifier spine](../representations/scholarly_identifier_spine.md) joins from silently equating MAG Paper IDs, OpenAlex Work IDs, DOI keys, and Dimensions IDs.
- Helps decide when stale SciSciNet-derived metrics should be refreshed from OpenAlex or Dimensions before being used for recent-paper analyses.

## Operationalization

- Preserve MAG Paper IDs, OpenAlex Work IDs, DOI, PMID, title, venue, year, and match provenance in a crosswalk table.
- Compare coverage by publication year, document type, source, field/concept, language, DOI status, and citation-link availability.
- Recompute field assignments, citation windows, team sizes, disruption-style metrics, and patent/funding links after migration when they depend on source-specific entity resolution.
- Report split, merge, missing, and newly added record classes rather than only an aggregate match rate.
- Keep source snapshot date, OpenAlex dump/API date, and derived-table build date as separate fields.
- Validate high-impact samples with title, DOI, venue, and year checks before replacing a historical MAG-derived result.

## Evidence and Validations

- Verified full-text evidence from Priem, Piwowar, and Orr (2022) states that OpenAlex was created after Microsoft announced the discontinuation of Microsoft Academic Graph and launched as a drop-in replacement when MAG retired on January 1, 2022.
- Priem et al. also state that OpenAlex builds on MAG for older works while adding current ingestion from sources such as Crossref, PubMed, repositories, and publisher pages.
- Their paper describes OpenAlex as a continuously distributed open graph with full dumps updated fortnightly and an API updated daily, making snapshot date part of any migration.
- Verified full-text evidence from Lin et al. (2023) states that SciSciNet uses a fixed MAG release, so SciSciNet tables should be treated as a historical MAG-derived backbone rather than a current source for recent publications.
- Together, the evidence supports treating OpenAlex as a current open update layer, but not as a source that can replace MAG-derived tables without identifier, coverage, and derived-metric audits.

## Caveats

- A successful DOI match does not prove that author, institution, field, reference, or venue assignments are unchanged.
- OpenAlex may add works absent from MAG, split or merge records differently, and update author or institution disambiguation over time.
- Migration can improve recency while reducing comparability with historical results if derived metrics are not recomputed under a documented snapshot.

## Links

- [OpenAlex](../datasets/openalex.md)
- [MAG publication backbone](../datasets/mag_publication_backbone.md)
- [SciSciNet-v2](../datasets/sciscinet_v2.md)
- [Dimensions](../datasets/dimensions.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [scholarly table primary keys](../representations/scholarly_table_primary_keys.md)
- [OpenAlex source-ingestion mix](../methods/openalex_source_ingestion_mix.md)
- [OpenAlex entity-type model](../representations/openalex_entity_type_model.md)
- [OpenAlex work DOI coverage audit](openalex_work_doi_coverage_audit.md)
- [SciSciNet-Dimensions publication validation](sciscinet_dimensions_publication_validation.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; SciSciNet: W4229010617; WoS: unknown]
- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; SciSciNet: W4378980478; WoS: unknown]

## Metadata

- Concept ID: `mag_to_openalex_migration_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: MAG OpenAlex crosswalk audit; OpenAlex migration validation; MAG sunset migration; stale MAG refresh audit
