# WoS analytics product integrations

## Summary

WoS analytics product integrations are the evaluation and analytics products built on or linked to Web of Science Core Collection data, including Journal Citation Reports, Essential Science Indicators, and InCites.

## Canonical Form

- Unit of analysis: analytics product, indicator family, source collection, journal, institution, article, or citation-count feed.
- Typical representation: product-integration manifest, metric provenance table, dashboard source note, or indicator-to-source mapping.
- Dataset target: identify when metrics come from Core Collection-derived products rather than raw publication records alone.
- Empirical signature: journal impact metrics, institutional performance metrics, hot/highly cited flags, and citation indicators are exposed through product layers.

## Uses in Science of Science

- Links [Web of Science](web_of_science.md) source data to downstream evaluation infrastructure and [metric platform proliferation](../mechanisms/metric_platform_proliferation.md).
- Clarifies source provenance for [journal impact factor](../measures/journal_impact_factor.md), highly cited indicators, institutional dashboards, and responsible-metrics audits.
- Helps distinguish raw-data access from analytics-product access in [bibliometric data access modes](../methods/bibliometric_data_access_modes.md) and [full-database bibliometric access](../methods/full_database_bibliometric_access.md).
- Provides a check that product-generated indicators are tied back to source-layer composition, document-type definitions, and [citation data census dates](../methods/citation_data_census_dates.md).

## Operationalization

- Record whether an indicator came from Journal Citation Reports, Essential Science Indicators, InCites, a Core Collection export, an API response, or a custom data delivery.
- Record when JCR-style products add metric variants such as Eigenfactor Score, Article Influence Score, five-year impact factor, or self-citation-excluding impact factor.
- Preserve product version, census date, source indexes, document-type filters, percentile rules, and any institutional entitlement affecting available fields.
- Audit whether product metrics can be recomputed from the available raw records or whether the product layer is the only source.
- Treat product integration as a method choice when comparing WoS indicators with Scopus, Dimensions, OpenAlex, or local derived metrics.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) states that the WoS Core Collection underpins the journal impact metrics found in Journal Citation Reports and institutional performance metrics found in InCites.
- The same table notes that "Hot" and "Highly Cited" articles are available through Essential Science Indicators integration.
- Birkle et al. also describe National Science Indicators, university indicators, Essential Science Indicators, and InCites as products designed for quantitative analysis and research evaluation.
- This positions WoS as both a record/citation source and an analytics-product ecosystem, so metric provenance should identify the product layer when product outputs are used directly.
- Verified full-text evidence from West, Bergstrom, and Bergstrom (2010) records Journal Citation Reports integrating Eigenfactor-family metrics and related metric variants, making product-version provenance important for historical journal-metric studies.

## Caveats

- Product indicators may not expose all raw records, formulas, filters, or census details needed for independent recomputation.
- Product availability can depend on subscription entitlements and product-version history.
- Evaluation uses should still apply responsible-metrics checks rather than treating product integration as validation.

## Links

- [Web of Science](web_of_science.md)
- [WoS Core Collection source layers](wos_core_collection_source_layers.md)
- [WoS Core Collection index family](wos_core_collection_index_family.md)
- [bibliometric data access modes](../methods/bibliometric_data_access_modes.md)
- [full-database bibliometric access](../methods/full_database_bibliometric_access.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [metric platform proliferation](../mechanisms/metric_platform_proliferation.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [Eigenfactor metrics](../measures/eigenfactor_metrics.md)
- [Article Influence Score](../measures/article_influence_score.md)
- [journal self-citation exclusion](../validations/journal_self_citation_exclusion.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]
- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; SciSciNet: W1993001003; WoS: unknown]

## Metadata

- Concept ID: `wos_analytics_product_integrations`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: JCR InCites ESI integration; WoS analytics products; Core Collection metric products; Web of Science dashboards
