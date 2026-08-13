# WoS partner in-house normalization layer

## Summary

Advanced scientometric groups often convert licensed WoS data into local normalized and transformed databases before producing indicators.

## Canonical Form

- Unit of analysis: WoS extract, local database, normalization rule, indicator pipeline, or partner data warehouse.
- Typical representation: derived bibliometric data mart with versioned local transformations.
- Mechanism, measurement, or validation target: local transformation layer between licensed source data and published indicators.
- Empirical signature: published metrics depend on local normalization steps beyond native WoS fields..

## Uses in Science of Science

- Connects [research-ready table curation](research_ready_table_curation.md) to institutional data warehouses.
- Documents when outputs depend on local [institution-name variant normalization](institution_name_variant_normalization.md).
- Adds reproducibility context to WoS-based rankings and indicators.

## Operationalization

- Distinguish raw WoS exports from locally normalized or enriched tables.
- Version local transformations and indicator-generation rules.
- Report which outputs depend on local normalization rather than native fields.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) describes groups licensing WoS into in-house databases, enhancing data through normalization and transformation, and producing rankings, indicators, and analyses.

## Caveats

- Local transformations can improve utility while reducing reproducibility if undisclosed.
- Derived tables may drift from source updates and provider corrections.

## Links

- [Research-ready table curation](research_ready_table_curation.md)
- [Institution-name variant normalization](institution_name_variant_normalization.md)
- [Scholarly snapshot versioning](scholarly_snapshot_versioning.md)
- [Citation data census dates](citation_data_census_dates.md)
- [WoS analytics product integrations](../datasets/wos_analytics_product_integrations.md)
- [Metric accessibility and component disclosure](metric_accessibility_and_component_disclosure.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_partner_inhouse_normalization_layer`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: local WoS data warehouse; in-house WoS normalization; partner normalization layer; derived bibliometric data mart
