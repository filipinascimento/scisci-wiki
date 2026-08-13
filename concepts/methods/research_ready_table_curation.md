# Research-ready table curation

## Summary

Research-ready table curation transforms raw scholarly dumps into documented analysis tables by filtering records, resolving duplicates, preserving keys, and recalculating derived counts after curation.

## Canonical Form

- Unit of analysis: raw record, curated entity, paper family, linkage table, preprocessing rule, or derived metric.
- Typical representation: deterministic preprocessing script, table manifest, curation log, or source-to-curated crosswalk.
- Method target: create stable tables that can support reproducible science-of-science measures.
- Empirical signature: raw source counts differ from curated counts because duplicate, non-scientific, retracted, or out-of-scope records are handled explicitly.

## Uses in Science of Science

- Produces the tables used by [scholarly data lakes](../datasets/scholarly_data_lakes.md), [SciSciNet-v2](../datasets/sciscinet_v2.md), and cross-dataset extraction scripts.
- Supports [scholarly snapshot versioning](scholarly_snapshot_versioning.md) by recording what was filtered or transformed in each release.
- Reduces ambiguity in downstream measures such as citation counts, field-normalized impact, team size, and patent-paper links.
- Depends on [bibliometric data access modes](bibliometric_data_access_modes.md) and [citation data census dates](citation_data_census_dates.md) when source data are delivered through APIs, custom extracts, or refreshed snapshots.
- Uses [fit-for-purpose bibliometric extracts](fit_for_purpose_bibliometric_extracts.md) when a project-specific source subset is more appropriate than a full database snapshot.
- Dimensions-style curation decomposes into explicit lower-level steps: [Dimensions publication data spine](../datasets/dimensions_publication_data_spine.md), [unique-identifier inclusion gate](../validations/unique_identifier_inclusion_gate.md), [GRID affiliation mapping](grid_affiliation_mapping.md), [cross-type research classification](cross_type_research_classification.md), and [ORCID-assisted person disambiguation](orcid_assisted_person_disambiguation.md).

## Operationalization

- Profile schemas and sample records before full processing.
- Define inclusion rules, duplicate handling, [paper-family canonicalization](paper_family_canonicalization.md), retraction treatment, and source priority.
- Preserve source-native IDs plus curated IDs through a [scholarly identifier spine](../representations/scholarly_identifier_spine.md) and [identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md).
- Document primary and foreign keys through [scholarly table primary keys](../representations/scholarly_table_primary_keys.md) before large joins.
- Recompute dependent measures such as references, citations, field labels, or linkage counts after filtering.
- Store access route, source layer, census date, source snapshot, and match-confidence route alongside curated table outputs.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) states that raw large-scale datasets require substantial preprocessing and filtering operations before they become high-quality research data.
- Lin et al. document SciSciNet curation choices including selecting scientific publications, removing patent document types from the primary publication table, aggregating paper families into primary papers, separating retracted records into a details table, deduplicating citation pairs, and recalculating reference and citation counts.
- The same full text supports splitting family aggregation into a separate [paper-family canonicalization](paper_family_canonicalization.md) method and external link construction into [identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md) plus [confidence-typed fuzzy linkages](confidence_typed_fuzzy_linkages.md).
- The same paper reports a curated primary table of 134,129,188 publications after processing the December 6, 2021 MAG release.
- Lin et al. then validate the curated publication and linkage layers with cross-source checks against Dimensions, motivating [SciSciNet-Dimensions publication validation](../validations/sciscinet_dimensions_publication_validation.md) and [SciSciNet-Dimensions grant-linkage validation](../validations/sciscinet_dimensions_grant_linkage_validation.md).
- Verified full-text evidence from Hook et al. (2018) describes Dimensions as bringing together different data entities, normalizing them, and mapping them to common reference points such as research classifications and institution identifiers.
- Hook et al. also describe an explicitly identifier-gated data spine, machine-learning/manual-curation institution mapping, cross-type classification, and person disambiguation as parts of making a broad research information graph usable.
- Verified full-text evidence from Birkle et al. (2020) shows why access-mode and source-layer metadata are part of curation: WoS data can be delivered through platforms, APIs, or custom extracts, and refreshed extracts can add records or revise historical records.

## Caveats

- Curation choices can change substantive findings, especially for citation counts, field normalization, and longitudinal trends.
- Research-ready does not mean error-free; disambiguation and linkage errors must still be audited.
- Derived counts should be regenerated when source snapshots or inclusion rules change.

## Links

- [scholarly data lakes](../datasets/scholarly_data_lakes.md)
- [SciSciNet-v2](../datasets/sciscinet_v2.md)
- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)
- [Dimensions publication data spine](../datasets/dimensions_publication_data_spine.md)
- [unique-identifier inclusion gate](../validations/unique_identifier_inclusion_gate.md)
- [GRID affiliation mapping](grid_affiliation_mapping.md)
- [cross-type research classification](cross_type_research_classification.md)
- [ORCID-assisted person disambiguation](orcid_assisted_person_disambiguation.md)
- [scholarly snapshot versioning](scholarly_snapshot_versioning.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [scholarly table primary keys](../representations/scholarly_table_primary_keys.md)
- [paper-family canonicalization](paper_family_canonicalization.md)
- [identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md)
- [confidence-typed fuzzy linkages](confidence_typed_fuzzy_linkages.md)
- [MAG publication backbone](../datasets/mag_publication_backbone.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [paper-field linkages](../representations/paper_field_linkages.md)
- [author name disambiguation](author_name_disambiguation.md)
- [bibliometric data access modes](bibliometric_data_access_modes.md)
- [fit-for-purpose bibliometric extracts](fit_for_purpose_bibliometric_extracts.md)
- [citation data census dates](citation_data_census_dates.md)
- [SciSciNet-Dimensions publication validation](../validations/sciscinet_dimensions_publication_validation.md)
- [SciSciNet-Dimensions grant-linkage validation](../validations/sciscinet_dimensions_grant_linkage_validation.md)
- [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]
- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]
- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `research_ready_table_curation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: scholarly data preprocessing; curated publication table; paper-family aggregation; research-ready data
