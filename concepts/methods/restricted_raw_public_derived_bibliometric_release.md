# Restricted-raw public-derived bibliometric release

## Summary

Restricted-raw public-derived bibliometric release is a reproducibility design in which proprietary raw bibliometric records remain restricted while derived metrics, panels, or aggregate outputs are released publicly.

## Canonical Form

- Unit of analysis: raw bibliometric record, derived metric, journal-year panel, aggregate table, code release, or access route.
- Typical representation: non-public source records plus public derived CSVs, GitHub data, summary tables, or controlled-access replication instructions.
- Method target: maximize reuse and auditability when licenses prevent redistribution of raw data.
- Empirical signature: published results can be partially reproduced from public derived artifacts, while full raw-record reconstruction requires institutional access or controlled visits.

## Uses in Science of Science

- Documents the release pattern behind [chaperone-effect journal panel](../datasets/chaperone_effect_journal_panel.md).
- Connects [bibliometric data access modes](bibliometric_data_access_modes.md), [full database bibliometric access](full_database_bibliometric_access.md), and [WoS data-use entitlement ladder](wos_data_use_entitlement_ladder.md).
- Provides a data-governance motif for Web of Science, Scopus, Dimensions, and other licensed scholarly datasets.
- Helps distinguish reproducible derived indicators from unreleasable raw sources.

## Operationalization

- Identify which source records are license-restricted and which derived fields can be legally redistributed.
- Release derived tables with enough metadata to interpret units, filters, and computation rules.
- Provide code or formulas for transforming raw records into derived outputs when allowed.
- Document the raw-data access path for researchers who need to audit or extend the pipeline.
- Include version dates and source snapshots so derived outputs are not mistaken for live database counts.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) reports public GitHub release of derived new, established, and chaperoned PI proportions plus chaperone metrics.
- The same paper notes that raw Web of Science records cannot be publicly shared and require institutional access or a research visit.
- This release pattern preserves reuse of the motif while acknowledging the license boundary around the source data.

## Caveats

- Public derived outputs cannot answer every downstream question because row-level records and alternative filters may be unavailable.
- Derived data can hide source errors, matching ambiguity, and intermediate exclusions unless provenance is detailed.
- License terms differ across databases and institutions.

## Links

- [chaperone-effect journal panel](../datasets/chaperone_effect_journal_panel.md)
- [bibliometric data access modes](bibliometric_data_access_modes.md)
- [full database bibliometric access](full_database_bibliometric_access.md)
- [WoS data-use entitlement ladder](wos_data_use_entitlement_ladder.md)
- [Web of Science](../datasets/web_of_science.md)
- [journal set field-boundary filter](../validations/journal_set_field_boundary_filter.md)
- [external journal-list field-panel construction](external_journal_list_field_panel_construction.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `restricted_raw_public_derived_bibliometric_release`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: public derived bibliometric release; restricted raw data release; licensed-source derived metrics; reproducible derived bibliometrics
