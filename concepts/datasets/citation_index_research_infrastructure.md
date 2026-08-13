# Citation-index research infrastructure

## Summary

Citation-index research infrastructure is the use of structured citation indexes as a reusable data substrate for studying scientific activity, evaluation, fields, and knowledge flows.

## Canonical Form

- Unit of analysis: citation index, publication record, cited reference, journal source, field, institution, or analysis product.
- Typical representation: curated citation database, linked publication-reference table, research data extract, or bibliometric platform.
- Infrastructure target: make citation links and publication metadata available for search, mapping, evaluation, and science-of-science research.
- Empirical signature: many downstream motifs depend on the same source-layer decisions about coverage, citation links, and metadata fields.

## Uses in Science of Science

- Provides historical context for [Web of Science](web_of_science.md), [citation networks](../representations/citation_networks.md), [science maps](../representations/science_maps.md), and [citation impact indicators](../measures/citation_impact_indicators.md).
- Connects database design to [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md).
- Explains why [research-ready table curation](../methods/research_ready_table_curation.md) and [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md) matter before indicator calculation.
- Provides a comparison point for open or linked sources such as [OpenAlex](openalex.md), [Dimensions](dimensions.md), and [SciSciNet-v2](sciscinet_v2.md).

## Operationalization

- Document the source index, covered collections, time span, citation-link rules, document types, field categories, author and institution metadata, and update cadence.
- Separate primary search/discovery use from secondary quantitative uses such as evaluation, mapping, and policy analysis.
- Preserve source-native identifiers and extraction dates when creating derived tables.
- Treat source coverage and access constraints as part of methods, not as background plumbing.
- Document whether the index has [full cited-reference indexing](full_cited_reference_indexing.md), [selective core-journal coverage](../methods/selective_core_journal_coverage.md), and organization-level curation such as [institution-name variant normalization](../methods/institution_name_variant_normalization.md).

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) frames Web of Science as a selective, structured citation index that supports discovery, analytical data sets, and specialized raw-data access for bibliometric partners.
- Birkle et al. describe the Science Citation Index as originally built for information retrieval, while later uses expanded into evaluation, topic mapping, trend monitoring, history, and sociology of science.
- The paper identifies early scientometric applications enabled by SCI/WoS data, including Price's citation-network work, systematic citation-based recognition studies, NSF science indicators, patent-scholarship linkage work, national performance indicators, and co-citation science mapping.
- Verified full-text evidence from Garfield (1972) shows an earlier infrastructure argument: machine-readable SCI data made cross-science journal citation analysis feasible at a scale that manual compilation could not support.
- Garfield also demonstrates infrastructure reuse through [journal citation network mapping](../representations/journal_citation_network_mapping.md), [citation-based source selection](../methods/citation_based_source_selection.md), and a sample-to-population check for short-window citation data.
- Verified full-text evidence from Price (1965) adds a current-awareness use case for citation indexes: alerting scientists to recent work in their research front through citation indexing.

## Caveats

- Infrastructure reuse can hide assumptions inherited from the original search and indexing design.
- Proprietary access, changing coverage, and source-specific metadata can limit reproducibility or cross-database comparison.

## Links

- [Web of Science](web_of_science.md)
- [WoS Core Collection source layers](wos_core_collection_source_layers.md)
- [full cited-reference indexing](full_cited_reference_indexing.md)
- [selective core-journal coverage](../methods/selective_core_journal_coverage.md)
- [institution-name variant normalization](../methods/institution_name_variant_normalization.md)
- [bibliometric data access modes](../methods/bibliometric_data_access_modes.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [citation sample representativeness check](../validations/citation_sample_representativeness_check.md)
- [citation-index alerting service](../methods/citation_index_alerting_service.md)
- [citation-based source selection](../methods/citation_based_source_selection.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)
- [citation networks](../representations/citation_networks.md)
- [journal citation network mapping](../representations/journal_citation_network_mapping.md)
- [science maps](../representations/science_maps.md)
- [OpenAlex](openalex.md)
- [Dimensions](dimensions.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]
- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]
- Price, D. J. de Solla. (1965). Networks of scientific papers. *Science*, 149(3683), 510-515. https://doi.org/10.1126/science.149.3683.510 [OpenAlex: W2088209891; Dimensions: pub.1062485810; WoS: unknown]

## Metadata

- Concept ID: `citation_index_research_infrastructure`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: citation-index infrastructure; scientometric data infrastructure; SCI-enabled scientometrics; bibliometric infrastructure
