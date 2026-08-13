# OpenAlex

## Summary

OpenAlex is an open scholarly index covering works, authors, sources, institutions, funders, topics, concepts, and citation links.

## Canonical Form

- Unit of analysis: works, authors, institutions, venues, funders, topics, and relationships.
- Typical representation: open entity graph and snapshot files.
- Mechanism or measurement target: broad scholarly metadata and citation coverage.
- Empirical signature: reusable open IDs and entity-resolution layers across scholarly objects.

## Uses in Science of Science

- Primary open source for building paper queues, DOI/OpenAlex ID links, citation networks, author/institution metadata, and topic mappings.
- Useful for cross-linking concept pages to database IDs.
- Local snapshot is available through `openalex_snapshot_root` in `PATHS.md`.
- Provides a current open layer for [scholarly entity graphs](../representations/scholarly_entity_graphs.md), [scholarly identifier spines](../representations/scholarly_identifier_spine.md), and [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md).
- Its internal schema can be split into reusable motifs: the [OpenAlex entity-type model](../representations/openalex_entity_type_model.md), [OpenAlex canonical external IDs](../representations/openalex_canonical_external_ids.md), [OpenAlex work-version resolution](../methods/openalex_work_version_resolution.md), [OpenAlex concept classifier](../methods/openalex_concept_classifier.md), and [OpenAlex affiliation-ROR linking](../methods/openalex_affiliation_ror_linking.md).
- The venue layer can be split into [OpenAlex venue-host model](../representations/openalex_venue_host_model.md) and [OpenAlex ISSN-L venue matching](../methods/openalex_issn_l_venue_matching.md).
- Its access and quality layers split further into [OpenAlex distribution channels](../methods/openalex_distribution_channels.md), [OpenAlex source-ingestion mix](../methods/openalex_source_ingestion_mix.md), [OpenAlex authorship object](../representations/openalex_authorship_object.md), [OpenAlex author-disambiguation features](../methods/openalex_author_disambiguation_features.md), [OpenAlex open-infrastructure governance](../methods/openalex_open_infrastructure_governance.md), and [OpenAlex metadata validation gap](../validations/openalex_metadata_validation_gap.md).
- Coverage-sensitive uses should audit [OpenAlex concept-assignment coverage](../validations/openalex_concept_assignment_coverage_audit.md), [OpenAlex work DOI coverage](../validations/openalex_work_doi_coverage_audit.md), and [OpenAlex author ORCID coverage](../validations/openalex_author_orcid_coverage_audit.md) before treating labels or external IDs as complete.
- For funding and author-role analyses, [OpenAlex missing funding and corresponding-author metadata](../validations/openalex_missing_funding_corresponding_author_metadata.md) should be treated as a snapshot-specific caveat.
- Citation indicators built from OpenAlex should be compared through [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md) when source choice matters.
- Residual infrastructure motifs include [SKG sunset-successor continuity](../validations/skg_sunset_successor_continuity.md), [open SKG comparator ecology](open_skg_comparator_ecology.md), [dereferenceable scholarly entity IDs](../representations/dereferenceable_scholarly_entity_ids.md), and [metadata extraction modality flags](../methods/metadata_extraction_modality_flags.md).

- A residual Priem et al. pass keeps only non-duplicative OpenAlex infrastructure motifs: [work-centered scholarly entity model](../representations/work_centered_scholarly_entity_model.md) and [OpenAlex source coverage boundary](../validations/openalex_source_coverage_boundary.md). Broader ID, version-resolution, distribution-channel, ROR-linking, and governance motifs remain covered by their existing dedicated pages.
## Operationalization

- Inputs: OpenAlex snapshot or API.
- Measures: publication/citation counts, concepts/topics, authorship, institutional/funder links.
- Common model forms: streaming extraction, graph construction, metadata enrichment.
- For recent papers, prefer the latest snapshot/API over stale MAG-derived secondary datasets, then reconcile identifiers with title/DOI checks.
- When reconciling MAG-derived resources, treat the [MAG publication backbone](mag_publication_backbone.md) as a historical source spine and OpenAlex as the preferred current open update layer.
- Use [MAG-to-OpenAlex migration audit](../validations/mag_to_openalex_migration_audit.md) before replacing MAG-derived tables or stale SciSciNet-derived measures with OpenAlex records.

## Evidence and Validations

- The local skill recommends streaming `openalex-raw` rather than loading full snapshots into memory.
- Verified full-text evidence from Priem et al. (2022) describes OpenAlex as an open scholarly graph across works, authors, venues, institutions, concepts, and relationships.
- Priem et al. specify five core entity types and describe works as the central scholarly object linking the other entity classes.
- Priem et al. define OpenAlex persistent IDs and canonical external IDs by entity type: DOI, ORCID, ISSN-L, ROR, and Wikidata.
- Priem et al. state that OpenAlex launched as a MAG replacement when Microsoft Academic Graph retired, which motivates [MAG-to-OpenAlex migration audit](../validations/mag_to_openalex_migration_audit.md) for legacy science-of-science resources.
- The same full text describes work fingerprinting across preprint, publisher, and repository copies, plus version and license detection where possible.
- Priem et al. define venues as host locations for works and identify ISSN-L as the canonical external identifier for venue matching.
- Priem et al. describe title/abstract-based concept assignment using a MAG-trained classifier and affiliation-to-ROR matching from structured and unstructured affiliation strings.
- Their limitations section states that early OpenAlex lacked funding-source and corresponding-author metadata, motivating supplemental data sources for those analyses.
- A residual Priem et al. pass separates the MAG sunset continuity risk, comparator SKG ecology, dereferenceable ID representation, and structured-versus-unstructured extraction modality provenance from the broader OpenAlex page.
- The current ingestion workflow uses Crossref/source-seed fallback because the OpenAlex public API returned HTTP 429 on June 30, 2026; the local snapshot remains the preferred source for verified OpenAlex IDs.
- Verified full-text evidence from Piwowar et al. (2018) provides the conceptual basis for interpreting OA fields in work-level scholarly indexes: OA status should preserve route, license, and source distinctions rather than collapse access to a simple binary.
- OA fields in OpenAlex should be interpreted through [open access route typology](open_access_route_typology.md), [open access resolver workflows](../methods/open_access_resolver_workflows.md), and [open access detection validation](../validations/open_access_detection_validation.md), because best-open URLs and route labels are snapshot-dependent.

## Caveats

- Coverage and concepts change across snapshot dates.
- OpenAlex IDs should be verified against DOI/title when used as anchors.

## Links

- [citation networks](../representations/citation_networks.md)
- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [scholarly data lakes](scholarly_data_lakes.md)
- [scholarly entity graphs](../representations/scholarly_entity_graphs.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [OpenAlex entity-type model](../representations/openalex_entity_type_model.md)
- [OpenAlex canonical external IDs](../representations/openalex_canonical_external_ids.md)
- [OpenAlex work-version resolution](../methods/openalex_work_version_resolution.md)
- [OpenAlex venue-host model](../representations/openalex_venue_host_model.md)
- [OpenAlex ISSN-L venue matching](../methods/openalex_issn_l_venue_matching.md)
- [OpenAlex concept classifier](../methods/openalex_concept_classifier.md)
- [OpenAlex affiliation-ROR linking](../methods/openalex_affiliation_ror_linking.md)
- [OpenAlex distribution channels](../methods/openalex_distribution_channels.md)
- [OpenAlex source-ingestion mix](../methods/openalex_source_ingestion_mix.md)
- [metadata extraction modality flags](../methods/metadata_extraction_modality_flags.md)
- [OpenAlex authorship object](../representations/openalex_authorship_object.md)
- [OpenAlex author-disambiguation features](../methods/openalex_author_disambiguation_features.md)
- [OpenAlex open-infrastructure governance](../methods/openalex_open_infrastructure_governance.md)
- [OpenAlex metadata validation gap](../validations/openalex_metadata_validation_gap.md)
- [OpenAlex concept-assignment coverage audit](../validations/openalex_concept_assignment_coverage_audit.md)
- [OpenAlex work DOI coverage audit](../validations/openalex_work_doi_coverage_audit.md)
- [OpenAlex author ORCID coverage audit](../validations/openalex_author_orcid_coverage_audit.md)
- [OpenAlex missing funding and corresponding-author metadata](../validations/openalex_missing_funding_corresponding_author_metadata.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [SKG sunset-successor continuity](../validations/skg_sunset_successor_continuity.md)
- [open SKG comparator ecology](open_skg_comparator_ecology.md)
- [dereferenceable scholarly entity IDs](../representations/dereferenceable_scholarly_entity_ids.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)
- [MAG publication backbone](mag_publication_backbone.md)
- [MAG-to-OpenAlex migration audit](../validations/mag_to_openalex_migration_audit.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [paper-field linkages](../representations/paper_field_linkages.md)
- [field classifications](../measures/field_classifications.md)
- [open access status](open_access_status.md)
- [open access route typology](open_access_route_typology.md)
- [open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [open access detection validation](../validations/open_access_detection_validation.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [topic models](../methods/topic_models.md)

- [work-centered scholarly entity model](../representations/work_centered_scholarly_entity_model.md)
- [OpenAlex source coverage boundary](../validations/openalex_source_coverage_boundary.md)
## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]
- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]

## Metadata

- Concept ID: `openalex`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Aliases: open scholarly index; OpenAlex snapshot
