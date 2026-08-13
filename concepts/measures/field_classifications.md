# Field classifications

## Summary

Field classifications assign papers, journals, authors, or institutions to disciplines, topics, or clusters so scientific activity can be grouped, normalized, and mapped.

## Canonical Form

- Unit of analysis: paper, journal, author, topic, field, or institution.
- Typical representation: single-label taxonomy, multi-label topic set, hierarchy, or cluster assignment.
- Mechanism or measurement target: field boundaries and reference sets for comparison.
- Empirical signature: records carry field labels or belong to algorithmic clusters.

## Uses in Science of Science

- Needed for field-normalized citation indicators, interdisciplinarity, science maps, and corpus stratification.
- Can be evaluated through empirical category-similarity structures such as [WoS subject-category co-citation matrices](../representations/wos_subject_category_cocitation_matrix.md) and [macro-discipline factor aggregation](../methods/macro_discipline_factor_aggregation.md).
- Provides the bridge between raw metadata and concept-specific baselines.
- Useful for comparing OpenAlex topics, Dimensions fields, WoS categories, and algorithmic clusters.
- WoS journal-level categories require [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md) when category totals or baselines are used quantitatively.
- Paper-level alternatives can be built with [publication-level field classification](../methods/publication_level_field_classification.md), using direct citation, text, bibliographic coupling, or hybrid relations.
- Citation-network alternatives also include [hierarchical map-equation field classification](../methods/hierarchical_map_equation_field_classification.md), which can use [article-level Eigenfactor field random walks](../representations/article_level_eigenfactor_field_random_walks.md).
- Extends to heterogeneous sources through [cross-type research classification](../methods/cross_type_research_classification.md), which applies a common category axis to publications, grants, policy documents, clinical trials, and patents.
- Supports [field-subfield author percentile ranks](field_subfield_author_percentile_ranks.md) when author-level citation metrics need within-field reference sets.

- A residual Borner et al. pass adds non-duplicative UCSD map-update details: [new source-title update queue](../methods/new_source_title_update_queue.md), [reference-majority source assignment](../methods/reference_majority_source_assignment.md), [normalized bidirectional subdiscipline assignment](../methods/normalized_bidirectional_subdiscipline_assignment.md), [multidisciplinary journal exception set](../validations/multidisciplinary_journal_exception_set.md), and [article-level cluster reflection check](../validations/article_level_cluster_reflection_check.md). Existing pages already cover the source-title spine, single-subdiscipline assignment, coverage expansion, source-title/article-volume decoupling, and science-location lookup tables.
## Operationalization

- Use journal categories, citation-based clusters, topic models, embeddings, or database-provided classifications.
- Record version, granularity, multi-label handling, and whether assignments are paper-level or venue-level.
- Validate against expert labels or stable external taxonomies when possible.
- Version map and classification updates explicitly when longitudinal overlays or field-normalized indicators depend on them.
- For WoS Subject Categories, report whether multi-category journals are full counted, fractionally counted, or replaced by paper-level classifications.
- When using map-based classifications, distinguish the [science-map source-title spine](../datasets/science_map_source_title_spine.md), [discipline-subdiscipline map hierarchy](../representations/discipline_subdiscipline_map_hierarchy.md), and [science-location lookup tables](../methods/science_location_lookup_tables.md).

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) provides a major paper-level classification anchor: their method clusters individual publications rather than journals, organizes research areas hierarchically, and is designed to avoid the limited detail and multidisciplinary-journal problems of journal categories.
- Their full text also supports lower-level pages for [direct-citation relatedness graphs](../representations/direct_citation_relatedness_graph.md), [normalized publication relatedness](normalized_publication_relatedness.md), [hierarchical resolution-parameter clustering](../methods/hierarchical_resolution_parameter_clustering.md), [research-area term labeling](../methods/research_area_term_labeling.md), [publication-cluster subject-category overlap profile](../representations/publication_cluster_subject_category_overlap_profile.md), [single-journal publication-assignment audits](../validations/single_journal_publication_assignment_audit.md), and [sparse direct-citation exclusion](../validations/sparse_direct_citation_exclusion.md).
- Verified full-text evidence from Borner et al. (2012) shows how a map/classification system can be updated and used as a reference structure for science mapping and portfolio overlays.
- Borner et al. document a concrete [science map update workflow](../methods/science_map_update_workflows.md), including adding new journals, assigning them to subdisciplines, and evaluating the updated map against coverage, accuracy, understandability, and overlay-usability criteria.
- The same full text now supports split-out pages for [single-subdiscipline journal assignment](../methods/single_subdiscipline_journal_assignment.md), [science-map coverage expansion audit](../validations/science_map_coverage_expansion_audit.md), and [science-map desiderata checklist](../validations/science_map_desiderata_checklist.md).
- A later Borner et al. pass adds [journal-level map distortion caveat](../validations/journal_level_map_distortion_caveat.md), [citation-linkage similarity bias](../validations/citation_linkage_similarity_bias.md), [source-title article-volume decoupling](source_title_article_volume_decoupling.md), and [map-update structure preservation constraint](../validations/map_update_structure_preservation_constraint.md).
- Verified full-text evidence from OpenAlex, Dimensions, and SciSciNet dataset papers shows that field/topic/category layers are database-specific and must be versioned when used for normalization or concept extraction.
- Verified full-text evidence from Birkle et al. (2020) adds that WoS Subject Categories were designed for retrieval, assign journals to one or more categories, and need count adjustment in quantitative analysis.
- Verified full-text evidence from Hook et al. (2018) argues that Dimensions could not rely on journal-level categories because grants, policy papers, clinical trials, and patents also need a common classification approach.
- Verified full-text evidence from Ioannidis et al. (2019) uses Science-Metrix field and subfield assignments to create author-level reference sets for percentile ranks across 22 fields and 176 subfields.
- Verified full-text evidence from King et al. (2017) uses a hierarchical map-equation classification of JSTOR papers to compare gendered self-citation rates across fields and subfields.

## Caveats

- Classification choice can change normalized impact, interdisciplinarity, and field-emergence conclusions.
- Interdisciplinary and emerging papers often do not fit a single field cleanly.

## Links

- [field normalized citation impact](field_normalized_citation_impact.md)
- [interdisciplinarity](../mechanisms/interdisciplinarity.md)
- [diversity measures](diversity_measures.md)
- [science maps](../representations/science_maps.md)
- [WoS subject-category co-citation matrix](../representations/wos_subject_category_cocitation_matrix.md)
- [macro-discipline factor aggregation](../methods/macro_discipline_factor_aggregation.md)
- [science map overlays](../representations/science_map_overlays.md)
- [science map update workflows](../methods/science_map_update_workflows.md)
- [science-map source-title spine](../datasets/science_map_source_title_spine.md)
- [discipline-subdiscipline map hierarchy](../representations/discipline_subdiscipline_map_hierarchy.md)
- [science-location lookup tables](../methods/science_location_lookup_tables.md)
- [single-subdiscipline journal assignment](../methods/single_subdiscipline_journal_assignment.md)
- [publication-level field classification](../methods/publication_level_field_classification.md)
- [hierarchical map-equation field classification](../methods/hierarchical_map_equation_field_classification.md)
- [article-level Eigenfactor field random walks](../representations/article_level_eigenfactor_field_random_walks.md)
- [direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md)
- [normalized publication relatedness](normalized_publication_relatedness.md)
- [publication-cluster subject-category overlap profile](../representations/publication_cluster_subject_category_overlap_profile.md)
- [high-aggregation label ambiguity](../validations/high_aggregation_label_ambiguity.md)
- [hierarchical resolution-parameter clustering](../methods/hierarchical_resolution_parameter_clustering.md)
- [research-area term labeling](../methods/research_area_term_labeling.md)
- [single-journal publication-assignment audit](../validations/single_journal_publication_assignment_audit.md)
- [direct-citation classification accuracy gap](../validations/direct_citation_classification_accuracy_gap.md)
- [hybrid publication-relatedness extension](../methods/hybrid_publication_relatedness_extension.md)
- [sparse direct-citation exclusion](../validations/sparse_direct_citation_exclusion.md)
- [science-map coverage expansion audit](../validations/science_map_coverage_expansion_audit.md)
- [source-title article-volume decoupling](source_title_article_volume_decoupling.md)
- [map-update structure preservation constraint](../validations/map_update_structure_preservation_constraint.md)
- [journal-level map distortion caveat](../validations/journal_level_map_distortion_caveat.md)
- [citation-linkage similarity bias](../validations/citation_linkage_similarity_bias.md)
- [science-map desiderata checklist](../validations/science_map_desiderata_checklist.md)
- [paper-field linkages](../representations/paper_field_linkages.md)
- [cross-type research classification](../methods/cross_type_research_classification.md)
- [field-subfield author percentile ranks](field_subfield_author_percentile_ranks.md)
- [interdisciplinarity dimensions](interdisciplinarity_dimensions.md)
- [openalex](../datasets/openalex.md)
- [dimensions](../datasets/dimensions.md)
- [sciscinet v2](../datasets/sciscinet_v2.md)
- [web of science](../datasets/web_of_science.md)
- [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md)

- [reference-majority source assignment](../methods/reference_majority_source_assignment.md)
- [multidisciplinary journal exception set](../validations/multidisciplinary_journal_exception_set.md)
- [article-level cluster reflection check](../validations/article_level_cluster_reflection_check.md)
## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown]
- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]
- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]
- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]
- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]
- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]
- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]

## Metadata

- Concept ID: `field_classifications`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Aliases: taxonomy; subject categories; topic classification; paper-level fields
