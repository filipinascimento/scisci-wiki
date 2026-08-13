# WoS indicator normalization axes

## Summary

WoS indicator normalization axes are the field, year, and document-type dimensions used to turn raw citation counts into derived indicator categories such as highly cited or hot papers.

## Canonical Form

- Unit of analysis: paper, citation count, field, publication year, document type, percentile class, or indicator flag.
- Typical representation: normalized indicator table, Essential Science Indicators flag, percentile threshold, or product-integrated metric.
- Measurement target: citation performance relative to comparable papers rather than raw citation totals alone.
- Empirical signature: a paper receives an indicator label only after citations are compared within a field-year-document-type reference set.

## Uses in Science of Science

- Adds product-level normalization provenance to [Web of Science](../datasets/web_of_science.md) indicator reuse.
- Connects [field normalized citation impact](field_normalized_citation_impact.md) and [citation impact indicators](citation_impact_indicators.md) to WoS-specific product integrations.
- Pairs with [WoS analytics product integrations](../datasets/wos_analytics_product_integrations.md), [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md), and [WoS times-cited source provenance](../validations/wos_times_cited_source_provenance.md).
- Helps evaluate whether a precomputed WoS indicator matches the target study's field and document-type definitions.

## Operationalization

- Record the reference set used for normalization: field scheme, year, document type, citation census date, and product source.
- Store both raw times-cited counts and derived normalized flags or percentiles.
- Recompute or avoid reuse when the study uses a different field classification, citation window, or document-type denominator.
- Compare WoS normalized indicators with source-independent calculations when possible.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) describes WoS integrations that provide Hot and Highly Cited article designations.
- The paper states that these designations are based on top percentiles according to year, field, and document type.
- Birkle et al. also links citation counts and h-index calculations to WoS product and citation-source provenance.

## Caveats

- Field-year-document-type normalization is only as stable as the field scheme and document classification used.
- Precomputed product indicators can hide threshold choices and update dates.
- Normalized flags should not be mixed with raw citation counts without exposing the reference-set denominator.

## Links

- [field normalized citation impact](field_normalized_citation_impact.md)
- [citation impact indicators](citation_impact_indicators.md)
- [Web of Science](../datasets/web_of_science.md)
- [WoS analytics product integrations](../datasets/wos_analytics_product_integrations.md)
- [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md)
- [WoS times-cited source provenance](../validations/wos_times_cited_source_provenance.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [WoS collection-specific schema completeness](../validations/wos_collection_specific_schema_completeness.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_indicator_normalization_axes`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: WoS field-year normalization; hot paper normalization axes; highly cited paper denominator; ESI percentile axes
