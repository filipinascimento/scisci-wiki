# WoS non-core source-type scope boundary

## Summary

WoS Platform records should be treated as heterogeneous source layers rather than a single Core Collection-like publication universe.

## Canonical Form

- Unit of analysis: WoS collection, source type, indexed record, citation source, or analysis denominator.
- Typical representation: collection-stratified source-type scope matrix.
- Mechanism, measurement, or validation target: analysis-time boundaries between Core Collection and non-core WoS platform resources.
- Empirical signature: record counts, time spans, citation-source rules, and metadata fields differ by hosted source type..

## Uses in Science of Science

- Refines [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md) with a validation boundary.
- Useful for [citation database coverage sensitivity](citation_database_coverage_sensitivity.md).
- Prevents platform-wide searches from becoming unstratified analysis denominators.

## Operationalization

- Flag Core Collection, regional citation indexes, specialist subject indexes, patent indexes, and data-set indexes.
- Report denominators and time spans separately by source type.
- Audit citation, author, and metadata-field availability before pooling.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) distinguishes Core Collection from regional, specialist, patent, and data-set indexes and reports different scopes and citation-source rules.

## Caveats

- This is close to the source-layer concept; use it specifically as an analysis-time validation boundary.
- Some platform searches are appropriate for discovery even when not appropriate for homogeneous analysis.

## Links

- [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md)
- [WoS Core Collection index family](../datasets/wos_core_collection_index_family.md)
- [WoS collection-specific schema completeness](wos_collection_specific_schema_completeness.md)
- [Citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [WoS times-cited source provenance](wos_times_cited_source_provenance.md)
- [Scientific non-patent references](../datasets/scientific_non_patent_references.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_noncore_source_type_scope_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: WoS hosted-index scope; platform source-type stratification; regional/specialist/patent/data index boundary; non-Core WoS source boundary
