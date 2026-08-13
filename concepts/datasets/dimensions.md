# Dimensions

## Summary

Dimensions is a linked research information database covering publications, grants, patents, clinical trials, researchers, institutions, and related metadata.

## Canonical Form

- Unit of analysis: publication, grant, patent, researcher, organization, funder, trial, or relation.
- Typical representation: relational/parquet tables and linked metadata.
- Mechanism or measurement target: research context around outputs, funding, translation, and institutions.
- Empirical signature: identifiers and relationships across output and funding layers.

## Uses in Science of Science

- Useful for funding acknowledgments, grants, patent links, institutional metadata, and publication records.
- Complements OpenAlex and SciSciNet for multiplex scholarly graphs.
- Local raw parquet root is configured in `PATHS.md`.
- Preferred for recent local metadata and cross-entity context when available, especially when [SciSciNet-v2](../datasets/sciscinet_v2.md) is stale.
- Provides a data source for [research-object context graphs](../representations/research_object_context_graphs.md), [scholarly entity graphs](../representations/scholarly_entity_graphs.md), and [scholarly identifier spines](../representations/scholarly_identifier_spine.md).
- Useful as a current comparison layer for [grant-publication linkage tables](grant_publication_linkage_tables.md) and [clinical-trial publication linkages](clinical_trial_publication_linkages.md) when local table coverage supports those joins.
- Its construction decomposes into reusable motifs: the [Dimensions publication data spine](dimensions_publication_data_spine.md), [unique-identifier inclusion gate](../validations/unique_identifier_inclusion_gate.md), [GRID affiliation mapping](../methods/grid_affiliation_mapping.md), [Dimensions grant-acknowledgment mining](../methods/dimensions_grant_acknowledgment_mining.md), [cross-type research classification](../methods/cross_type_research_classification.md), [ORCID-assisted person disambiguation](../methods/orcid_assisted_person_disambiguation.md), [contextual analytics panels](../representations/contextual_analytics_panels.md), [Dimensions relation-query language](../methods/dimensions_relation_query_language.md), [Dimensions full-text delivery layer](../methods/dimensions_full_text_delivery_layer.md), [Dimensions open metrics API](../methods/dimensions_open_metrics_api.md), [Dimensions access-tier scope](../validations/dimensions_access_tier_scope.md), [Dimensions citation relation coverage boundary](../validations/dimensions_citation_relation_coverage_boundary.md), [full-text enrichment source provenance](../methods/full_text_enrichment_source_provenance.md), [external identifier registry authority](../validations/external_identifier_registry_authority.md), and [book-chapter identifier hierarchy gap](../validations/book_chapter_identifier_hierarchy_gap.md).
- Citation indicators built from Dimensions should document [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md) when compared with WoS, OpenAlex, Scopus, or SciSciNet.
- Also serves as a validation comparator for SciSciNet publication coverage and grant-publication linkages.

- A residual Hook et al. pass adds [identifier-gated inclusion rule](../validations/identifier_gated_inclusion_rule.md), [Crossref-PubMed publication spine](crossref_pubmed_publication_spine.md), [first-class research object model](../representations/first_class_research_object_model.md), [common reference-axis mapping](../methods/common_reference_axis_mapping.md), [GRID institution resolution workflow](../methods/grid_institution_resolution_workflow.md), [open-citation dependency boundary](../validations/open_citation_dependency_boundary.md), [grant-acknowledgment entity recognition](../methods/grant_acknowledgment_entity_recognition.md), [cross-object subject classification](../methods/cross_object_subject_classification.md), [precision-biased person disambiguation](../validations/precision_biased_person_disambiguation.md), and [tiered scholarly data access model](../methods/tiered_scholarly_data_access_model.md).
## Operationalization

- Inputs: Dimensions raw parquet tables.
- Measures: publication counts, citations, field categories, grants, patents, funder/institution links.
- Common model forms: parquet scans, joins, and field-normalized analyses.

## Evidence and Validations

- Hook et al. describe Dimensions as a research-information context database.
- Verified full-text evidence from Hook et al. (2018) frames Dimensions as a linked context database spanning publications, grants, patents, clinical trials, policy documents, and related entities.
- This makes Dimensions a direct data source for [funding acknowledgments](funding_acknowledgments.md), [patent paper links](patent_paper_links.md), and multiplex scholarly graphs.
- Author and researcher links in Dimensions should be treated as entity-resolution outputs, making [author name disambiguation](../methods/author_name_disambiguation.md) a core data-quality dependency for person-level analyses.
- Dimensions also fits the broader [scholarly data lakes](scholarly_data_lakes.md) motif because it links publication records to upstream support and downstream research-use entities.
- Hook et al. describe Crossref and PubMed as the publication data spine, GRID as the institution mapping layer, ORCID as a person disambiguation aid, and common category mapping as a way to compare publications, grants, patents, trials, and policy records.
- The same full text describes analytical views that summarize search results through researchers, institutions, citations, categories, funders, journals, and object-specific facets.
- Hook et al. also distinguish free, subscribed, public-metrics-API, and paid-API routes, making access route part of the reproducibility record for Dimensions-based analysis.
- The same paper describes one-click full-text delivery and a domain-specific API language as additional routes from the linked metadata graph to usable evidence.
- Additional verified evidence from Hook et al. splits relation-level coverage from node coverage: citation edges enter through Crossref/I4OC deposits, publisher participation, open-access mining, and HTML/PDF extraction routes.
- Hook et al. also describe grant links that mix explicit award links with funder-name recognition, source-route-specific full-text enrichment, registry authority assumptions, and unresolved chapter-to-book identifier hierarchy problems.

## Caveats

- Schema and coverage are proprietary and versioned; scripts should resolve paths from `PATHS.md`.
- Nested metadata must be inspected before large scans.
- Citation, grant, patent, clinical-trial, and full-text-derived relation layers should be documented separately from publication-node coverage.
- For recent work, treat relation counts as snapshot-specific and prefer current Dimensions or OpenAlex extracts over stale secondary tables when recency matters.

## Links

- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [research-object context graphs](../representations/research_object_context_graphs.md)
- [scholarly entity graphs](../representations/scholarly_entity_graphs.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [Dimensions publication data spine](dimensions_publication_data_spine.md)
- [Dimensions source-ingestion mix](../methods/dimensions_source_ingestion_mix.md)
- [research graph layer census](../measures/research_graph_layer_census.md)
- [research-flow signal timing](../representations/research_flow_signal_timing.md)
- [unique-identifier inclusion gate](../validations/unique_identifier_inclusion_gate.md)
- [GRID affiliation mapping](../methods/grid_affiliation_mapping.md)
- [Dimensions grant-acknowledgment mining](../methods/dimensions_grant_acknowledgment_mining.md)
- [cross-type research classification](../methods/cross_type_research_classification.md)
- [ORCID-assisted person disambiguation](../methods/orcid_assisted_person_disambiguation.md)
- [contextual analytics panels](../representations/contextual_analytics_panels.md)
- [Dimensions relation-query language](../methods/dimensions_relation_query_language.md)
- [Dimensions full-text delivery layer](../methods/dimensions_full_text_delivery_layer.md)
- [Dimensions open metrics API](../methods/dimensions_open_metrics_api.md)
- [metric recomputability data access](../validations/metric_recomputability_data_access.md)
- [Dimensions access-tier scope](../validations/dimensions_access_tier_scope.md)
- [Dimensions citation relation coverage boundary](../validations/dimensions_citation_relation_coverage_boundary.md)
- [grant identifier standardization gap](../validations/grant_identifier_standardization_gap.md)
- [full-text enrichment source provenance](../methods/full_text_enrichment_source_provenance.md)
- [external identifier registry authority](../validations/external_identifier_registry_authority.md)
- [book-chapter identifier hierarchy gap](../validations/book_chapter_identifier_hierarchy_gap.md)
- [scholarly data lakes](scholarly_data_lakes.md)
- [upstream-downstream scholarly linkages](upstream_downstream_scholarly_linkages.md)
- [grant-publication linkage tables](grant_publication_linkage_tables.md)
- [clinical-trial publication linkages](clinical_trial_publication_linkages.md)
- [SciSciNet-Dimensions publication validation](../validations/sciscinet_dimensions_publication_validation.md)
- [SciSciNet-Dimensions grant-linkage validation](../validations/sciscinet_dimensions_grant_linkage_validation.md)
- [openalex](../datasets/openalex.md)
- [sciscinet v2](../datasets/sciscinet_v2.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [funding acknowledgments](funding_acknowledgments.md)
- [patent paper links](../datasets/patent_paper_links.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

- [identifier-gated inclusion rule](../validations/identifier_gated_inclusion_rule.md)
- [first-class research object model](../representations/first_class_research_object_model.md)
- [tiered scholarly data access model](../methods/tiered_scholarly_data_access_model.md)
## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]

## Metadata

- Concept ID: `dimensions`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Aliases: Dimensions database; publications grants patents clinical trials
