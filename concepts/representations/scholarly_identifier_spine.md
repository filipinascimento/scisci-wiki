# Scholarly identifier spine

## Summary

A scholarly identifier spine is the set of persistent internal and external IDs used to reconcile works, people, organizations, venues, concepts, grants, patents, and other research objects across datasets.

## Canonical Form

- Unit of analysis: identifier, entity, crosswalk row, source record, or matched relation.
- Typical representation: DOI/OpenAlex/Dimensions/MAG/PMID/ORCID/ROR/ISSN-L/Wikidata crosswalk, entity-key table, or canonical external identifier field.
- Measurement target: stable linkage across scholarly databases and reproducible enrichment of concept pages, metadata tables, and graph layers.
- Empirical signature: a source-specific entity ID is paired with one or more externally resolvable identifiers and matching provenance.

## Uses in Science of Science

- Provides the reconciliation layer for [OpenAlex](../datasets/openalex.md), [Dimensions](../datasets/dimensions.md), [SciSciNet-v2](../datasets/sciscinet_v2.md), and [scholarly data lakes](../datasets/scholarly_data_lakes.md).
- Supports DOI-based metadata enrichment, entity-resolution audits, and cross-source comparisons.
- Lets downstream pages cite OpenAlex, Dimensions, and SciSciNet IDs without treating any one database as the only source of truth.
- Uses [OpenAlex work DOI coverage audit](../validations/openalex_work_doi_coverage_audit.md) and [OpenAlex author ORCID coverage audit](../validations/openalex_author_orcid_coverage_audit.md) when OpenAlex external identifiers define analysis denominators.
- Splits the Dimensions construction logic into a [unique-identifier inclusion gate](../validations/unique_identifier_inclusion_gate.md), [Dimensions publication data spine](../datasets/dimensions_publication_data_spine.md), [GRID affiliation mapping](../methods/grid_affiliation_mapping.md), and [ORCID-assisted person disambiguation](../methods/orcid_assisted_person_disambiguation.md).

## Operationalization

- Keep source-native IDs and canonical external IDs as separate fields.
- Record match key, match confidence, title or date checks, source snapshot, and whether the match is exact, inferred, or manually curated.
- Prefer stable open identifiers such as DOI, ORCID, ROR, ISSN-L, Wikidata, PMID, patent IDs, award IDs, and clinical-trial IDs when available.
- Document [external identifier registry authority](../validations/external_identifier_registry_authority.md) assumptions for each entity type and maintain [identifier bridge-key crosswalks](identifier_bridge_key_crosswalks.md) when intermediary IDs connect external systems.
- Use [research-ready table curation](../methods/research_ready_table_curation.md) to deduplicate record families and prevent duplicate identifiers from being counted as separate works.
- Add [MAG-to-OpenAlex migration audit](../validations/mag_to_openalex_migration_audit.md) when a crosswalk is used to replace MAG Paper IDs with OpenAlex Work IDs in downstream tables.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) lists open unique persistent identifiers as a guiding principle for Dimensions and treats recognized unique identifiers as the practical inclusion hurdle.
- Hook et al. specify entity-specific identifier roles across the Dimensions graph, including DOI/PubMed identifiers for publications, ORCID for people, GRID for research organizations, Geonames for geographic data, and field-classification identifiers.
- Hook et al. also frame identity registers as sources of truth for their data elements, motivating [external identifier registry authority](../validations/external_identifier_registry_authority.md) as a separate validation assumption.
- Verified full-text evidence from Priem et al. (2022) describes OpenAlex persistent IDs and canonical external identifiers: DOI for works, ORCID for authors, ISSN-L for venues, ROR for institutions, and Wikidata IDs for concepts.
- Priem et al. also report that only about half of OpenAlex works have a DOI and that ORCID coverage is limited, making missing-ID handling a core part of identifier-spine construction.
- Verified full-text evidence from Lin et al. (2023) uses MAG Paper ID as the primary paper key, preserves DOI fields, and constructs high-quality MAG-PMID linkages to support external biomedical linkages.
- Lin et al. also uses PMID and normalized DOI as bridge keys for external grant, clinical-trial, news, and social-media linkages.
- The same evidence motivates [scholarly table primary keys](scholarly_table_primary_keys.md) as a companion representation: persistent external IDs and source-native table keys both need provenance.
- MAG-to-OpenAlex migration makes this provenance especially important because source-native IDs, external IDs, and entity-resolution decisions can change independently.

## Caveats

- Identifier coverage is uneven by field, time, document type, and source.
- A matching DOI is strong evidence but still needs title and date checks when duplicate DOI records or versioned records appear.
- Identifier spines age as snapshots update, merge, split, or retire entities.

## Links

- [OpenAlex](../datasets/openalex.md)
- [OpenAlex canonical external IDs](openalex_canonical_external_ids.md)
- [OpenAlex work DOI coverage audit](../validations/openalex_work_doi_coverage_audit.md)
- [OpenAlex author ORCID coverage audit](../validations/openalex_author_orcid_coverage_audit.md)
- [Dimensions](../datasets/dimensions.md)
- [SciSciNet-v2](../datasets/sciscinet_v2.md)
- [scholarly entity graphs](scholarly_entity_graphs.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)
- [unique-identifier inclusion gate](../validations/unique_identifier_inclusion_gate.md)
- [Dimensions publication data spine](../datasets/dimensions_publication_data_spine.md)
- [GRID affiliation mapping](../methods/grid_affiliation_mapping.md)
- [ORCID-assisted person disambiguation](../methods/orcid_assisted_person_disambiguation.md)
- [scholarly table primary keys](scholarly_table_primary_keys.md)
- [external identifier registry authority](../validations/external_identifier_registry_authority.md)
- [identifier bridge-key crosswalks](identifier_bridge_key_crosswalks.md)
- [grant identifier standardization gap](../validations/grant_identifier_standardization_gap.md)
- [MAG publication backbone](../datasets/mag_publication_backbone.md)
- [MAG-to-OpenAlex migration audit](../validations/mag_to_openalex_migration_audit.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [paper-author-affiliation linkages](paper_author_affiliation_linkages.md)
- [paper-field linkages](paper_field_linkages.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]
- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]
- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `scholarly_identifier_spine`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: identifier crosswalk; DOI spine; persistent identifier graph; canonical external identifiers
