# WoS times-cited source provenance

## Summary

WoS times-cited source provenance is the validation practice of recording which Web of Science source layers contribute to times-cited values and citation counts.

## Canonical Form

- Unit of analysis: publication, citation count, cited-reference edge, source collection, platform citation source, or extraction date.
- Typical representation: citation-source flag, Core Collection versus platform-source count note, census-date field, or citation-count provenance manifest.
- Validation target: prevent citation indicators from silently mixing counts derived from different source layers.
- Empirical signature: the same record can have different citation counts when Core Collection-only, platform citation sources, or custom extract rules are used.

## Uses in Science of Science

- Adds source-count provenance to [full cited-reference indexing](../datasets/full_cited_reference_indexing.md), [citation data census dates](../methods/citation_data_census_dates.md), and [citation database coverage sensitivity](citation_database_coverage_sensitivity.md).
- Qualifies citation indicators based on [Web of Science](../datasets/web_of_science.md), Journal Citation Reports, InCites, or custom WoS extracts.
- Supports cross-database comparisons with OpenAlex, Dimensions, Scopus, and SciSciNet where citation-source inclusion differs.
- Pairs with [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md) and [WoS Core Collection index family](../datasets/wos_core_collection_index_family.md) when building citation networks.

## Operationalization

- Store the citation-count source definition used in each extract: Core Collection only, Core Collection plus platform citation sources, product-generated counts, or custom rules.
- Record citation census date and source-layer inclusion alongside any field-normalized, percentile, h-index, or journal indicator.
- Recompute indicators after changing source-layer scope rather than comparing mixed times-cited fields directly.
- When reproducing a study, verify whether source-layer settings and product integrations match the original extraction.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) states that all Web of Science platform content includes times-cited values for citations from the Core Collection and platform citation sources.
- The same table reports full cited-reference indexing for all Core Collection content and citation indexing for some platform citation indexes, making citation-source scope collection-specific.
- Birkle et al. also link Core Collection to Journal Citation Reports and InCites, so product indicators can inherit source-layer decisions.
- These statements make times-cited provenance a separate validation field from the raw citation count itself.

## Caveats

- A "times cited" field is not self-documenting; it needs source-layer and census-date metadata.
- Broader citation-source inclusion can raise recall while changing comparability with Core Collection-only analyses.
- Product-integrated counts may not expose enough detail to reconstruct every included citation source.

## Links

- [full cited-reference indexing](../datasets/full_cited_reference_indexing.md)
- [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md)
- [WoS Core Collection index family](../datasets/wos_core_collection_index_family.md)
- [WoS analytics product integrations](../datasets/wos_analytics_product_integrations.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation networks](../representations/citation_networks.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_times_cited_source_provenance`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: times-cited provenance; WoS citation-source scope; platform citation-source counts; Core Collection citation-count caveat
