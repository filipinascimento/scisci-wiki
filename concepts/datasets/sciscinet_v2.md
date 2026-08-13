# SciSciNet-v2

## Summary

SciSciNet-v2 is a science-of-science data lake linking publications with authors, institutions, citations, fields, patents, and other relational layers.

## Canonical Form

- Unit of analysis: papers and linked scholarly entities.
- Typical representation: parquet tables forming a heterogeneous scholarly graph.
- Mechanism or measurement target: integrated science-of-science relationships and large-scale network analysis.
- Empirical signature: paper-level links to citations, authors, affiliations, fields, and translational layers.

## Uses in Science of Science

- Useful historical science-of-science data lake for disruption index, team size, citation networks, careers, and patent-paper linkage.
- For recent papers and current identifiers, prefer fresh [Dimensions](../datasets/dimensions.md) or [OpenAlex](../datasets/openalex.md) records, then use SciSciNet-v2 as a secondary linkage or replication layer.
- When replacing SciSciNet's MAG-derived publication backbone with OpenAlex, run [MAG-to-OpenAlex migration audit](../validations/mag_to_openalex_migration_audit.md) before comparing derived metrics.
- Configured by `sciscinet_v2_root` in `PATHS.md`.

- The Lin et al. residual pass adds [PaperDetails sidecar table](../representations/paper_details_sidecar_table.md), [citation/reference count redistribution](../methods/citation_reference_count_redistribution.md), [multi-field metric multiplicity](../representations/multi_field_metric_multiplicity.md), [external trace count rollups](../measures/external_trace_count_rollups.md), [NSF award-publication web crawl](../methods/nsf_award_publication_web_crawl.md), [NSF second-score null matching](../methods/nsf_second_score_null_matching.md), [clinical-trials geographic linkage bias](../validations/clinical_trials_geographic_linkage_bias.md), [Nobel laureate career-publication links](nobel_laureate_career_publication_links.md), [MAG algorithmic metadata dependency](../validations/mag_algorithmic_metadata_dependency.md), [content and embedding enrichment pathway](../methods/content_embedding_entity_enrichment_pathway.md), [researcher profile enrichment pathway](../consequences/researcher_profile_enrichment_pathway.md), and [SciSciNet open pipeline release](../methods/sciscinet_open_pipeline_release.md).
- A residual Lin et al. pass adds [SciSciNet recent-paper staleness boundary](../validations/sciscinet_recent_paper_staleness_boundary.md), [SciSciNet entity-relationship join contract](../representations/sciscinet_entity_relationship_join_contract.md), [SciSciNet table inventory manifest](sciscinet_table_inventory_manifest.md), [SciSciNet PMID intermediate-key bridge](../methods/sciscinet_pmid_intermediate_key_bridge.md), [SciSciNet patent-citation family deduplication](../methods/sciscinet_patent_citation_family_deduplication.md), [SciSciNet Crossref Event DOI normalization](../methods/sciscinet_crossref_event_doi_normalization.md), and [SciSciNet static external-linkage windows](../validations/sciscinet_static_external_linkage_windows.md).
## Operationalization

- Inputs: SciSciNet-v2 parquet tables.
- Measures: citations, team sizes, field classifications, author/institution links, patent-paper links.
- Common model forms: chunked parquet scans, graph extraction, community detection, and longitudinal models.
- Record the MAG-derived snapshot date and downstream curation rules before using it for chronology or recent-paper coverage.

## Evidence and Validations

- The local skill emphasizes schema profiling and chunked IO before heavy processing.
- Verified full-text evidence from Lin et al. (2023) describes SciSciNet as a large-scale open data lake for science-of-science research, with linked publication, citation, author, institution, field, funding, and patent-oriented layers.
- The verified paper supports treating SciSciNet-v2 as a heterogeneous graph substrate rather than a single flat paper table.
- Because SciSciNet author tables support careers, teams, and mobility analyses, [author name disambiguation](../methods/author_name_disambiguation.md) is a key interpretation caveat for downstream author-level results.
- The dataset also exposes reusable data-layer motifs: [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md), [paper-field linkages](../representations/paper_field_linkages.md), and [upstream-downstream scholarly linkages](upstream_downstream_scholarly_linkages.md).
- Its MAG-derived publication base and typed link tables also motivate separate motifs for the [MAG publication backbone](mag_publication_backbone.md), [scholarly table primary keys](../representations/scholarly_table_primary_keys.md), [grant-publication linkage tables](grant_publication_linkage_tables.md), and [clinical-trial publication linkages](clinical_trial_publication_linkages.md).
- Additional full-text-backed layers include [SciSciNet precomputed metric bundle](sciscinet_precomputed_metric_bundle.md), [Crossref Event Data mention linkages](crossref_event_data_mention_linkages.md), [patent citation-to-science link table](patent_citation_to_science_link_table.md), and cross-source checks against Dimensions.
- SciSciNet curation further splits into [paper-family canonicalization](../methods/paper_family_canonicalization.md), [identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md), and [confidence-typed fuzzy linkages](../methods/confidence_typed_fuzzy_linkages.md).
- A residual Lin et al. pass adds [external linkage source-scope caveat](../validations/external_linkage_source_scope_caveat.md), [metric eligibility-window manifest](../methods/metric_eligibility_window_manifest.md), [canonical result reproduction validation](../validations/canonical_result_reproduction_validation.md), and [SciSciNet authors-gender table](sciscinet_authors_gender_table.md), while preserving the caveat that SciSciNet is a historical MAG-based release.

## Caveats

- Confirm ID column names before joins.
- Snapshot-specific coverage and table names should be recorded in outputs.
- The current SciSciNet-v2 release is MAG-based and should be treated as stale for recent papers unless refreshed.
- Linkage analyses should keep bridge keys, match types, and fuzzy-link confidence fields rather than collapsing all external relations into a single binary edge.

## Links

- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [scholarly data lakes](scholarly_data_lakes.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)
- [scholarly entity graphs](../representations/scholarly_entity_graphs.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [MAG publication backbone](mag_publication_backbone.md)
- [MAG-to-OpenAlex migration audit](../validations/mag_to_openalex_migration_audit.md)
- [scholarly table primary keys](../representations/scholarly_table_primary_keys.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [paper-field linkages](../representations/paper_field_linkages.md)
- [upstream-downstream scholarly linkages](upstream_downstream_scholarly_linkages.md)
- [grant-publication linkage tables](grant_publication_linkage_tables.md)
- [clinical-trial publication linkages](clinical_trial_publication_linkages.md)
- [SciSciNet precomputed metric bundle](sciscinet_precomputed_metric_bundle.md)
- [paper-family canonicalization](../methods/paper_family_canonicalization.md)
- [identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md)
- [confidence-typed fuzzy linkages](../methods/confidence_typed_fuzzy_linkages.md)
- [external linkage source-scope caveat](../validations/external_linkage_source_scope_caveat.md)
- [metric eligibility-window manifest](../methods/metric_eligibility_window_manifest.md)
- [canonical result reproduction validation](../validations/canonical_result_reproduction_validation.md)
- [SciSciNet authors-gender table](sciscinet_authors_gender_table.md)
- [Crossref Event Data mention linkages](crossref_event_data_mention_linkages.md)
- [patent citation-to-science link table](patent_citation_to_science_link_table.md)
- [SciSciNet-Dimensions publication validation](../validations/sciscinet_dimensions_publication_validation.md)
- [SciSciNet-Dimensions grant-linkage validation](../validations/sciscinet_dimensions_grant_linkage_validation.md)
- [community-extensible measure layer](../methods/community_extensible_measure_layer.md)
- [citation networks](../representations/citation_networks.md)
- [team size disruption](../mechanisms/team_size_disruption.md)
- [disruption index](../measures/disruption_index.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

- [PaperDetails sidecar table](../representations/paper_details_sidecar_table.md)
- [citation/reference count redistribution](../methods/citation_reference_count_redistribution.md)
- [MAG algorithmic metadata dependency](../validations/mag_algorithmic_metadata_dependency.md)
- [SciSciNet recent-paper staleness boundary](../validations/sciscinet_recent_paper_staleness_boundary.md)
- [SciSciNet entity-relationship join contract](../representations/sciscinet_entity_relationship_join_contract.md)
- [SciSciNet static external-linkage windows](../validations/sciscinet_static_external_linkage_windows.md)
## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]

## Metadata

- Concept ID: `sciscinet_v2`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Aliases: SciSciNet; open science-of-science data lake
