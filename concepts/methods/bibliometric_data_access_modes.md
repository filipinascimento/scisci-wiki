# Bibliometric data access modes

## Summary

Bibliometric data access modes describe how scholarly data are obtained for analysis, such as platform export, API integration, custom data delivery, snapshot download, or licensed research extract.

## Canonical Form

- Unit of analysis: access route, data extract, API call, snapshot, license tier, update service, or research-use agreement.
- Typical representation: access-mode manifest, entitlement note, extraction script, API quota log, custom-delivery specification, or data-use provenance field.
- Method target: make data availability, volume, permissions, update cadence, and reproducibility constraints explicit.
- Empirical signature: the same research question may be feasible through one access mode but not another because of volume, fields, refresh cadence, or redistribution rules.

## Uses in Science of Science

- Grounds large-scale workflows for [Web of Science](../datasets/web_of_science.md), [Scopus](../datasets/scopus.md), [Google Scholar](../datasets/google_scholar.md), [OpenAlex](../datasets/openalex.md), [Dimensions](../datasets/dimensions.md), and [scholarly data lakes](../datasets/scholarly_data_lakes.md).
- Helps decide whether a project needs a local snapshot, API loop, licensed extract, or platform-level sample.
- Connects [scholarly snapshot versioning](scholarly_snapshot_versioning.md), [citation data census dates](citation_data_census_dates.md), and [research-ready table curation](research_ready_table_curation.md).
- Provides a methods bridge to [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md).
- Splits project-specific licensed delivery into [fit-for-purpose bibliometric extracts](fit_for_purpose_bibliometric_extracts.md).
- Splits recurring WoS delivery and API refresh choices into [WoS update-service cadence](wos_update_service_cadence.md).
- Splits WoS permission and redistribution constraints into [WoS data-use entitlement ladder](wos_data_use_entitlement_ladder.md).
- Connects to [metric platform proliferation](../mechanisms/metric_platform_proliferation.md) when access products make indicators routine inputs to governance.
- For Dimensions, separates [Dimensions access-tier scope](../validations/dimensions_access_tier_scope.md), [Dimensions relation-query language](dimensions_relation_query_language.md), [Dimensions full-text delivery layer](dimensions_full_text_delivery_layer.md), and [Dimensions open metrics API](dimensions_open_metrics_api.md) as distinct access modes.

## Operationalization

- Record access route, source account or institutional entitlement, extraction date, update cadence, rate limits, data volume, selected fields, and redistribution constraints.
- For APIs, log query parameters, response dates, pagination, and retry behavior.
- For snapshots or custom extracts, store the source release date, delivery date, schema, and any agreed update cycle.
- Keep access-mode notes separate from substantive findings so later reruns can detect whether data access changed.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) states that WoS data are made available through platforms, APIs, and custom data-set delivery, with access connected to subscriptions, volume, frequency, and use cases.
- The paper distinguishes basic usage, discovery, analytics, API integration, public use, and commercialization as different use cases with different permission and delivery implications.
- Birkle et al. note that advanced scientometric projects may require data in analyzable formats beyond standard products, sometimes through licensed custom data arrangements.
- Their data-delivery section states that data may be point-in-time, historical, or regularly updated, linking access mode directly to [citation data census dates](citation_data_census_dates.md).
- The same section reports custom update cycles and API formats with different call speeds and data volumes, making update cadence part of access-mode provenance.
- Verified full-text evidence from Waltman (2016) separates small-scale web-interface use from direct full-database access for Web of Science and Scopus.
- Waltman also identifies specialized web-based analytics tools such as InCites and SciVal, and notes that Google Scholar lacks direct full-database access.
- Verified full-text evidence from Hook et al. (2018) distinguishes free publication-index search, subscribed non-publication search and extended analytics, a free metrics API and badges, and a more powerful paid API for Dimensions.

## Caveats

- Access mode can shape the corpus as much as search strategy does.
- API results and snapshots can diverge because of update cadence, pagination limits, and changing schemas.
- Proprietary access rules can make exact replication difficult even when methods are documented.

## Links

- [Web of Science](../datasets/web_of_science.md)
- [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md)
- [Scopus](../datasets/scopus.md)
- [Google Scholar](../datasets/google_scholar.md)
- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)
- [Dimensions access-tier scope](../validations/dimensions_access_tier_scope.md)
- [Dimensions relation-query language](dimensions_relation_query_language.md)
- [Dimensions full-text delivery layer](dimensions_full_text_delivery_layer.md)
- [Dimensions open metrics API](dimensions_open_metrics_api.md)
- [citation database web-interface access](citation_database_web_interface_access.md)
- [full-database bibliometric access](full_database_bibliometric_access.md)
- [fit-for-purpose bibliometric extracts](fit_for_purpose_bibliometric_extracts.md)
- [WoS data-use entitlement ladder](wos_data_use_entitlement_ladder.md)
- [WoS update-service cadence](wos_update_service_cadence.md)
- [metric platform proliferation](../mechanisms/metric_platform_proliferation.md)
- [citation data census dates](citation_data_census_dates.md)
- [scholarly snapshot versioning](scholarly_snapshot_versioning.md)
- [research-ready table curation](research_ready_table_curation.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]
- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]
- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `bibliometric_data_access_modes`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: bibliometric API access; custom data delivery; platform export mode; scholarly data entitlement
