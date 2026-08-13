# Full cited-reference indexing

## Summary

Full cited-reference indexing records the reference lists of indexed works so that citation links can be used for search, mapping, impact indicators, and science-of-science analysis.

## Canonical Form

- Unit of analysis: indexed publication, cited reference, reference-list item, citing-cited pair, source collection, or citation edge.
- Typical representation: publication-reference table, cited-reference string table, resolved citation graph, or source-layer citation index.
- Dataset target: make backward references and forward citation counts available as structured data.
- Empirical signature: an indexed source can support citation-network construction, co-citation, bibliographic coupling, and cited-reference search.

## Uses in Science of Science

- Provides the edge substrate for [citation networks](../representations/citation_networks.md), [co citation](../representations/co_citation.md), and [bibliographic coupling](../representations/bibliographic_coupling.md).
- Explains why [WoS Core Collection source layers](wos_core_collection_source_layers.md) must record citation-link coverage by source layer.
- Requires [WoS times-cited source provenance](../validations/wos_times_cited_source_provenance.md) when citation counts combine Core Collection and platform citation sources.
- Supports [citation impact indicators](../measures/citation_impact_indicators.md), [citation PageRank](../measures/citation_pagerank.md), and [main path analysis](../methods/main_path_analysis.md).
- Links source data to [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md).

## Operationalization

- Extract cited-reference lists for indexed records and preserve reference strings, resolved IDs, citation direction, and source collection.
- Distinguish full cited-reference indexing from partial citation counts or source-only metadata.
- Record whether cited references are resolved to indexed source records or retained as unlinked references.
- Document source-layer differences in reference indexing and citation-count provenance.
- Use census dates when citation counts and resolved links are refreshed.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) reports full cited-reference indexing for all Web of Science Core Collection content.
- The paper distinguishes citation indexing in Core Collection from collection-specific citation indexing in platform sources such as SciELO, Russian Science Citation Index, Chinese Science Citation Index, and BIOSIS Citation Index.
- Birkle et al. also state that platform content includes times-cited values from Core Collection and platform citation sources, making citation-source provenance part of the data model.
- The article connects this infrastructure to early science-of-science work, including Price's research-front citation networks and co-citation science mapping.

## Caveats

- Full cited-reference indexing in a source layer does not mean all cited works are themselves indexed records.
- Reference parsing, reference variants, and source coverage affect resolved citation edges.
- Citation counts depend on the citation sources included in the extraction and their census date.

## Links

- [Web of Science](web_of_science.md)
- [WoS Core Collection source layers](wos_core_collection_source_layers.md)
- [WoS times-cited source provenance](../validations/wos_times_cited_source_provenance.md)
- [citation-index research infrastructure](citation_index_research_infrastructure.md)
- [citation networks](../representations/citation_networks.md)
- [co citation](../representations/co_citation.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `full_cited_reference_indexing`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: cited-reference indexing; reference-list citation table; full reference indexing; citation-edge source layer
