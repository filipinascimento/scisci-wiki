# WoS Core Collection source layers

## Summary

WoS Core Collection source layers distinguish the curated Core Collection from the broader Web of Science platform and its hosted citation, subject, patent, and data indexes.

## Canonical Form

- Unit of analysis: source collection, indexed record, journal, proceeding, book, patent family, data set, cited reference, or platform citation source.
- Typical representation: source-layer manifest, database-family table, collection flag, coverage period, or source-specific field schema.
- Dataset target: keep WoS Core Collection analyses separate from broader platform coverage unless the method intentionally combines them.
- Empirical signature: counts, document types, time coverage, author indexing, controlled vocabulary, and citation-link rules differ by layer.

## Uses in Science of Science

- Adds source-layer detail to [Web of Science](web_of_science.md) and [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md).
- Helps build reproducible [reference set construction](../methods/reference_set_construction.md) and [field classifications](../measures/field_classifications.md).
- Clarifies whether an analysis is using Core Collection, regional citation indexes, subject indexes, Derwent patent data, or data-set indexes.
- Provides a provenance layer for [citation networks](../representations/citation_networks.md), [science maps](../representations/science_maps.md), and journal metrics.
- Separates [WoS Core Collection index family](wos_core_collection_index_family.md), [full cited-reference indexing](full_cited_reference_indexing.md), [Keywords Plus cited-title terms](../representations/keywords_plus_cited_title_terms.md), [institution-name variant normalization](../methods/institution_name_variant_normalization.md), [WoS author-affiliation linking onset](../validations/wos_author_affiliation_linking_onset.md), and [WoS times-cited source provenance](../validations/wos_times_cited_source_provenance.md) from broader platform-level coverage.

## Operationalization

- Record whether the source is WoS Core Collection, the wider WoS platform, Journal Citation Reports, Essential Science Indicators, InCites, or a hosted specialist index.
- Track covered databases, time periods, document types, update frequency, author indexing rules, affiliation fields, citation sources, and controlled vocabulary fields.
- Avoid mixing Core Collection and platform records without a source-layer column and sensitivity check.
- When comparing to OpenAlex, Dimensions, or SciSciNet, map collection scope before comparing coverage or indicators.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) separates WoS Core Collection from the broader WoS platform and lists distinct covered databases, record counts, time periods, author indexing, institution indexing, update frequencies, and citation-analysis features.
- Birkle et al. describe Core Collection as the standard source behind Journal Citation Reports and InCites indicators, while the broader platform adds regional citation indexes, subject indexes, Derwent patent literature, and data-set indexes.
- The paper notes that all platform content has times-cited values from Core Collection and platform citation sources, so citation counts depend on the chosen source layer.
- Birkle et al. also list the named Core Collection index family and identify product integrations such as Journal Citation Reports, Essential Science Indicators, and InCites as source-layer-dependent analytics outputs.
- The same table reports full cited-reference indexing for Core Collection content and collection-specific variation elsewhere, making source-layer provenance a measurement requirement.

## Caveats

- "Web of Science" can mean the platform, the Core Collection, a product integration, or a custom extract.
- A broader source layer may improve recall while making field normalization, document-type filtering, and historical comparability harder.

## Links

- [Web of Science](web_of_science.md)
- [citation-index research infrastructure](citation_index_research_infrastructure.md)
- [WoS Core Collection index family](wos_core_collection_index_family.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md)
- [bibliometric data access modes](../methods/bibliometric_data_access_modes.md)
- [WoS update-service cadence](../methods/wos_update_service_cadence.md)
- [full cited-reference indexing](full_cited_reference_indexing.md)
- [WoS times-cited source provenance](../validations/wos_times_cited_source_provenance.md)
- [selective core-journal coverage](../methods/selective_core_journal_coverage.md)
- [institution-name variant normalization](../methods/institution_name_variant_normalization.md)
- [WoS author-affiliation linking onset](../validations/wos_author_affiliation_linking_onset.md)
- [Keywords Plus cited-title terms](../representations/keywords_plus_cited_title_terms.md)
- [WoS analytics product integrations](wos_analytics_product_integrations.md)
- [field classifications](../measures/field_classifications.md)
- [reference set construction](../methods/reference_set_construction.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [patent paper links](patent_paper_links.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_core_collection_source_layers`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: WoS source layers; Core Collection scope; Web of Science platform layers; citation source provenance
