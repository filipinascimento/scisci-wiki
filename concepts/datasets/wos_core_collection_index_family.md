# WoS Core Collection index family

## Summary

WoS Core Collection index family is the set of named citation indexes that make up the Web of Science Core Collection, including science, social-science, arts-and-humanities, proceedings, book, and emerging-source layers.

## Canonical Form

- Unit of analysis: citation index, source collection, record, journal, proceeding, book, or emerging-source title.
- Typical representation: collection membership flag, index-family manifest, coverage-period table, or source-layer provenance field.
- Dataset target: make the particular Core Collection index visible before counting records, citations, fields, or document types.
- Empirical signature: the same publication universe changes when SCI, SSCI, AHCI, CPCI, BCI, or ESCI layers are included or excluded.

## Uses in Science of Science

- Refines [WoS Core Collection source layers](wos_core_collection_source_layers.md) into the named index-family components used to build reproducible corpora.
- Helps interpret [selective core-journal coverage](../methods/selective_core_journal_coverage.md), [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md), and [reference set construction](../methods/reference_set_construction.md).
- Provides a provenance layer for [journal impact factor](../measures/journal_impact_factor.md), field-normalized indicators, proceedings studies, and book-coverage comparisons.
- Separates Core Collection composition from the broader WoS platform sources such as regional citation indexes, specialist subject indexes, Derwent patents, and data-set indexes.

## Operationalization

- Record which Core Collection indexes are included: Science Citation Index, Social Sciences Citation Index, Arts & Humanities Citation Index, Conference Proceedings Citation Index, Book Citation Index, and Emerging Sources Citation Index.
- Preserve source-layer flags when joining custom extracts, API results, Journal Citation Reports records, or local WoS-derived panels.
- Treat inclusion of ESCI, proceedings, or books as a corpus-design choice with its own time coverage and field-balance consequences.
- Compare sensitivity under core-only, core-plus-ESCI, proceedings-inclusive, and platform-wide source sets when coverage changes could alter conclusions.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) lists the Web of Science Core Collection databases as Science Citation Index, Social Sciences Citation Index, Arts & Humanities Citation Index, Conference Proceedings Citation Index, Book Citation Index, and Emerging Sources Citation Index.
- The paper separates this Core Collection family from the wider Web of Science platform, which also hosts regional citation indexes, subject indexes, Derwent patent literature, and Data Citation Index content.
- Birkle et al. describe the Core Collection as the standard data set behind Journal Citation Reports and InCites indicators, making index-family composition a direct input to evaluation metrics.
- The same full text notes different time-period coverage across sciences, social sciences, arts and humanities, proceedings, books, and ESCI, so longitudinal analysis needs index-specific provenance.

## Caveats

- "Core Collection" is not a single homogeneous layer; index membership, time coverage, document types, and source-selection criteria differ.
- Adding ESCI, proceedings, or books can improve recall while changing historical comparability.
- Broader platform citation sources should not be silently merged with Core Collection records.

## Links

- [Web of Science](web_of_science.md)
- [WoS Core Collection source layers](wos_core_collection_source_layers.md)
- [citation-index research infrastructure](citation_index_research_infrastructure.md)
- [full cited-reference indexing](full_cited_reference_indexing.md)
- [selective core-journal coverage](../methods/selective_core_journal_coverage.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md)
- [WoS analytics product integrations](wos_analytics_product_integrations.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_core_collection_index_family`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: Core Collection index family; SCI SSCI AHCI CPCI BCI ESCI; WoS index membership; WoS collection flags
