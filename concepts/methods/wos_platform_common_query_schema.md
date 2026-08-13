# WoS platform common query schema

## Summary

WoS platform common query schema is the method design in which heterogeneous citation and subject resources are exposed through a shared search language, navigation environment, data structure, and citation-navigation layer.

## Canonical Form

- Unit of analysis: platform resource, source collection, query field, search result, citation link, or navigation action.
- Typical representation: unified query syntax and shared record schema over multiple WoS-hosted collections.
- Method target: allow cross-resource discovery while preserving source-collection provenance.
- Empirical signature: the same interface can search several resources, but records still carry different coverage, field availability, and citation-source semantics.

## Uses in Science of Science

- Explains why [Web of Science](../datasets/web_of_science.md) should be treated as a platform family rather than a single homogeneous table.
- Complements [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md) and [WoS Core Collection index family](../datasets/wos_core_collection_index_family.md).
- Helps document retrieval and query provenance in [bibliometric data access modes](bibliometric_data_access_modes.md).
- Connects discovery-oriented search to later quantitative reuse caveats such as [retrieval-to-quantitative reuse mismatch](../validations/retrieval_to_quantitative_reuse_mismatch.md).

## Operationalization

- Record the WoS collection or platform resource searched, not just the top-level platform name.
- Preserve query syntax, field tags, timespan, document types, indexes, and citation-source scope.
- Check whether the fields needed for quantitative analysis are present in each included platform resource.
- Avoid pooling platform resources unless source-collection provenance is kept for downstream models.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) describes WoS as extending Core Collection content by hosting citation databases and specialized databases from several providers.
- The paper states that WoS provides a common search language, navigation environment, data structure, and citation connections across disparate resources.

## Caveats

- A common query interface does not imply common coverage or common field completeness.
- Citation counts can mix Core Collection and platform citation-source semantics depending on the product and collection.
- Platform-wide search results may be useful for discovery but need collection-level provenance for quantitative analysis.

## Links

- [Web of Science](../datasets/web_of_science.md)
- [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md)
- [WoS Core Collection index family](../datasets/wos_core_collection_index_family.md)
- [bibliometric data access modes](bibliometric_data_access_modes.md)
- [WoS collection-specific schema completeness](../validations/wos_collection_specific_schema_completeness.md)
- [retrieval-to-quantitative reuse mismatch](../validations/retrieval_to_quantitative_reuse_mismatch.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_platform_common_query_schema`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: WoS common search schema; platform query harmonization; WoS shared navigation schema; cross-resource WoS interface
