# Science maps

## Summary

Science maps are spatial or network representations of the structure of science, usually placing fields, journals, papers, or topics by citation, textual, or classification similarity.

## Canonical Form

- Unit of analysis: papers, journals, fields, topics, concepts, institutions, or authors.
- Typical representation: two-dimensional map, network layout, hierarchical classification, or embedding projection.
- Mechanism or measurement target: intellectual proximity, field boundaries, and knowledge organization.
- Empirical signature: stable clusters and bridges that correspond to recognizable domains or interdisciplinary areas.

## Uses in Science of Science

- Used for portfolio analysis, field normalization, research-front discovery, interdisciplinarity, and navigation of large corpora.
- Provides a top-level index for organizing this wiki as it grows.
- Can connect local datasets such as OpenAlex concepts, Dimensions fields, and SciSciNet paper links.

## Operationalization

- Inputs: citation links, co-citation, bibliographic coupling, text embeddings, journal categories, or topic models.
- Measures: cluster labels, map coordinates, community membership, inter-cluster distance, overlay maps.
- Common model forms: community detection, dimensionality reduction, layout algorithms, and hierarchical classification.
- Publication-level maps can be built from [direct-citation relatedness graphs](direct_citation_relatedness_graph.md), then aggregated into hierarchical research areas.
- Add [research-area term labeling](../methods/research_area_term_labeling.md) for interpretability and [average publication-year hot-area detection](../measures/average_publication_year_hot_area_detection.md) for temporal overlays.
- For journal-level maps, document [manual science-map cluster labeling](../methods/manual_science_map_cluster_labeling.md) and use [local journal-neighborhood zoom maps](local_journal_neighborhood_zoom_map.md) when auditing fine-grained specialty structure.
- Document-level map construction can use [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md), with [co-citation strength](../measures/co_citation_strength.md) as the edge weight.
- Build map inputs with [journal similarity mapping](../methods/journal_similarity_mapping.md), convert them to coordinates with [science map layout and reduction](../methods/science_map_layout_reduction.md), and validate them with [science map accuracy validation](../validations/science_map_accuracy_validation.md).
- Document map-construction choices including [weighted science-map matrix fusion](../methods/weighted_science_map_matrix_fusion.md), [top-N similarity edge filtering](../methods/top_n_similarity_edge_filtering.md), [multipoint journal fractional assignment](../methods/multipoint_journal_fractional_assignment.md), and [Riemannian science-map projections](riemannian_science_map_projections.md).
- Use [science map update workflows](../methods/science_map_update_workflows.md) when comparing maps across time, [science-location lookup tables](../methods/science_location_lookup_tables.md) when mapping new records, and [science map overlays](science_map_overlays.md) when mapping portfolios onto a base map.
- Match the mapped unit to the intended user through [user-need unit-of-analysis alignment](../methods/user_need_unit_of_analysis_alignment.md), and treat global maps as a possible [science-map common reference system](science_map_common_reference_system.md) only when coordinate assignment and update workflows are auditable.

## Evidence and Validations

- Backbone maps and UCSD map work provide useful anchors for large-scale field mapping.
- Verified full-text evidence from Borner et al. (2012) documents the UCSD map as an updated classification and mapping system that links journals, papers, and disciplines for portfolio overlays and field navigation.
- Borner et al. also make updateability and overlay usability explicit evaluation criteria for a map of science, motivating separate pages for [science map update workflows](../methods/science_map_update_workflows.md) and [science map overlays](science_map_overlays.md).
- The same full text supports split-out motifs for the [science-map source-title spine](../datasets/science_map_source_title_spine.md), [discipline-subdiscipline map hierarchy](discipline_subdiscipline_map_hierarchy.md), [single-subdiscipline journal assignment](../methods/single_subdiscipline_journal_assignment.md), [science-map coverage expansion audit](../validations/science_map_coverage_expansion_audit.md), and [science-map desiderata checklist](../validations/science_map_desiderata_checklist.md).
- Additional Borner et al. split-outs capture [source-title article-volume decoupling](../measures/source_title_article_volume_decoupling.md), [map-update structure preservation constraint](../validations/map_update_structure_preservation_constraint.md), [journal-level map distortion caveat](../validations/journal_level_map_distortion_caveat.md), and [citation-linkage similarity bias](../validations/citation_linkage_similarity_bias.md).
- Verified full-text evidence from Boyack et al. (2005) makes map construction explicit: candidate journal similarity matrices are filtered, laid out, clustered, and evaluated for local and structural accuracy before selecting a backbone map.
- Boyack et al. also support [journal-cluster science backbones](journal_cluster_science_backbones.md) and [disciplinary independence](../measures/disciplinary_independence.md) as interpretable map outputs.
- A further Boyack et al. split separates the source corpus, inter-citation/co-citation matrix construction, K50 relatedness, mutual-information structural validation, multi-criterion measure selection, citation-dependency arrows, category specificity audits, manual map labeling, and local journal-neighborhood zoom maps.
- Another Boyack et al. pass adds decision and infrastructure motifs: validated maps need a [map-informed resource allocation guardrail](../validations/map_informed_resource_allocation_guardrail.md), map units should follow user needs, common map coordinates can support cross-disciplinary discovery, and dynamic maps require [real-time multistream science-map infrastructure](../methods/real_time_multistream_science_map_infrastructure.md).
- Verified full-text evidence from Hummon and Doreian (1989) adds a path-based map view: directed citation networks can be reduced to a main developmental stream using topological order, path distances, traversal counts, and convergence validation.
- Hummon and Doreian also support a combined map logic in which cluster partitions and path backbones are complementary views of field structure.
- Verified full-text evidence from Stirling (2007) clarifies how diversity overlays on science maps should distinguish category variety, balance, and disparity rather than treating map spread as one undifferentiated construct.
- Verified full-text evidence from West et al. (2010) links Eigenfactor journal rankings to maps and visual tools for navigating journal-level science structure.
- The same source supports an Eigenfactor-specific map layer in which journal citation networks, [Eigenfactor Score](../measures/eigenfactor_score.md), and [Article Influence Score](../measures/article_influence_score.md) can be used as ranked overlays.
- Verified full-text evidence from Pan et al. (2012) adds a geographic map layer: city and country citation/collaboration networks can be mapped as spatial scholarly flows, not only as intellectual similarity spaces.
- The Pan full text also motivates [research contribution cartograms](research_contribution_cartogram.md) as a country-level visualization that rescales land area by scholarly contribution.
- Verified full-text evidence from Fortunato et al. (2018) supports science maps as a core representation for organizing fields, interdisciplinarity, and research-front structure.
- Verified full-text evidence from Waltman and van Eck (2012) adds a publication-level map layer: their level-2 map of 672 research areas locates areas by direct citation relations and reveals broad circular structure across biomedical, environmental, physical, mathematical, social, health, and cognitive sciences.
- The same paper uses average publication year to detect hot areas within the classification, linking science maps to [average publication-year hot-area detection](../measures/average_publication_year_hot_area_detection.md), [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md), and field-emergence monitoring.

## Caveats

- Map geometry is algorithm-dependent and can be overinterpreted.
- Labels and clusters should be validated against multiple representations and expert reading.

## Links

- [research fronts](../mechanisms/research_fronts.md)
- [co citation](../representations/co_citation.md)
- [co-citation strength](../measures/co_citation_strength.md)
- [co-cited core literature](co_cited_core_literature.md)
- [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md)
- [temporal co-citation drift](../mechanisms/temporal_co_citation_drift.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [SCI/SSCI journal-map corpus 2000](../datasets/sci_ssci_journal_map_corpus_2000.md)
- [journal inter-citation and co-citation matrices](journal_intercitation_cocitation_matrices.md)
- [K50 co-citation relatedness](../methods/k50_cocitation_relatedness.md)
- [science map layout and reduction](../methods/science_map_layout_reduction.md)
- [manual science-map cluster labeling](../methods/manual_science_map_cluster_labeling.md)
- [local journal-neighborhood zoom map](local_journal_neighborhood_zoom_map.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)
- [mutual-information map structural accuracy](../validations/mutual_information_map_structural_accuracy.md)
- [science map measure selection grid](../validations/science_map_measure_selection_grid.md)
- [weighted science-map matrix fusion](../methods/weighted_science_map_matrix_fusion.md)
- [top-N similarity edge filtering](../methods/top_n_similarity_edge_filtering.md)
- [multipoint journal fractional assignment](../methods/multipoint_journal_fractional_assignment.md)
- [Riemannian science-map projections](riemannian_science_map_projections.md)
- [journal-cluster science backbones](journal_cluster_science_backbones.md)
- [cluster citation-dependency arrows](cluster_citation_dependency_arrows.md)
- [disciplinary independence](../measures/disciplinary_independence.md)
- [field classifications](../measures/field_classifications.md)
- [publication-level field classification](../methods/publication_level_field_classification.md)
- [direct-citation relatedness graph](direct_citation_relatedness_graph.md)
- [hierarchical resolution-parameter clustering](../methods/hierarchical_resolution_parameter_clustering.md)
- [research-area term labeling](../methods/research_area_term_labeling.md)
- [average publication-year hot-area detection](../measures/average_publication_year_hot_area_detection.md)
- [sparse direct-citation exclusion](../validations/sparse_direct_citation_exclusion.md)
- [journal category specificity audit](../validations/journal_category_specificity_audit.md)
- [science map overlays](science_map_overlays.md)
- [map-informed resource allocation guardrail](../validations/map_informed_resource_allocation_guardrail.md)
- [user-need unit-of-analysis alignment](../methods/user_need_unit_of_analysis_alignment.md)
- [science-map common reference system](science_map_common_reference_system.md)
- [real-time multistream science-map infrastructure](../methods/real_time_multistream_science_map_infrastructure.md)
- [WoS subject-category co-citation matrix](wos_subject_category_cocitation_matrix.md)
- [macro-discipline factor aggregation](../methods/macro_discipline_factor_aggregation.md)
- [science map update workflows](../methods/science_map_update_workflows.md)
- [science-map source-title spine](../datasets/science_map_source_title_spine.md)
- [discipline-subdiscipline map hierarchy](discipline_subdiscipline_map_hierarchy.md)
- [science-location lookup tables](../methods/science_location_lookup_tables.md)
- [single-subdiscipline journal assignment](../methods/single_subdiscipline_journal_assignment.md)
- [science-map coverage expansion audit](../validations/science_map_coverage_expansion_audit.md)
- [source-title article-volume decoupling](../measures/source_title_article_volume_decoupling.md)
- [map-update structure preservation constraint](../validations/map_update_structure_preservation_constraint.md)
- [journal-level map distortion caveat](../validations/journal_level_map_distortion_caveat.md)
- [citation-linkage similarity bias](../validations/citation_linkage_similarity_bias.md)
- [science-map desiderata checklist](../validations/science_map_desiderata_checklist.md)
- [diversity measures](../measures/diversity_measures.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [main path analysis](../methods/main_path_analysis.md)
- [clustering path complementarity](../methods/clustering_path_complementarity.md)
- [milestone-event citation historiograph](milestone_event_citation_historiograph.md)
- [citation DAG topological sort](../methods/citation_dag_topological_sort.md)
- [longest citation path distance](../measures/longest_citation_path_distance.md)
- [main path convergence validation](../validations/main_path_convergence_validation.md)
- [Eigenfactor metrics](../measures/eigenfactor_metrics.md)
- [Eigenfactor Score](../measures/eigenfactor_score.md)
- [Article Influence Score](../measures/article_influence_score.md)
- [journal citation random walk](../methods/journal_citation_random_walk.md)
- [topic models](../methods/topic_models.md)
- [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [citation-informed paper embeddings](citation_informed_paper_embeddings.md)
- [international collaboration networks](international_collaboration_networks.md)
- [research contribution cartogram](research_contribution_cartogram.md)
- [world city citation network](world_city_citation_network.md)
- [world city collaboration network](world_city_collaboration_network.md)
- [geographic collaboration distance](../measures/geographic_collaboration_distance.md)
- [science-map projection readability tradeoff](../validations/science_map_projection_readability_tradeoff.md)
- [force-directed map centrality artifact](../validations/force_directed_map_centrality_artifact.md)
- [static science-map temporal limit](../validations/static_science_map_temporal_limit.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown]
- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; WoS: unknown]
- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]
- Stirling, A. (2007). A general framework for analysing diversity in science, technology and society. *Journal of the Royal Society Interface*, 4(15), 707-719. https://doi.org/10.1098/rsif.2007.0213 [OpenAlex: W2110158660; Dimensions: pub.1011912474; WoS: unknown]
- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]
- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]
- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `science_maps`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Fortunato et al. (2018) (2018)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Aliases: maps of science; knowledge maps; field maps
