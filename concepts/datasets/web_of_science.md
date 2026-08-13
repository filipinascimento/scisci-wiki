# Web of Science

## Summary

Web of Science is a curated citation-index family widely used for bibliometrics, historical citation analysis, and research evaluation.

## Canonical Form

- Unit of analysis: indexed publications, references, authors, institutions, journals, fields, and citations.
- Typical representation: curated metadata and citation index.
- Mechanism or measurement target: controlled scholarly coverage and citation relationships.
- Empirical signature: long historical citation coverage with selective source indexing.

## Uses in Science of Science

- Classic source for citation impact, science mapping, field normalization, and evaluation studies.
- Useful as a comparison layer when [Scopus](scopus.md), [Google Scholar](google_scholar.md), OpenAlex, or Dimensions coverage differs.
- Historical ISI slices such as [ISI 1981 citation-distribution cohort](isi_1981_citation_distribution_cohort.md) should be documented as bounded cohorts, not as generic current WoS coverage.
- Should be interpreted through [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md) when citation indicators are compared across sources.
- Local WoS workflows may exist outside this repo and should be handled with chunked processing.
- Source-layer and access details should be captured through [WoS Core Collection source layers](wos_core_collection_source_layers.md), [WoS Core Collection index family](wos_core_collection_index_family.md), [bibliometric data access modes](../methods/bibliometric_data_access_modes.md), [citation database web-interface access](../methods/citation_database_web_interface_access.md), [full-database bibliometric access](../methods/full_database_bibliometric_access.md), [WoS update-service cadence](../methods/wos_update_service_cadence.md), and [citation data census dates](../methods/citation_data_census_dates.md).
- Source design should also record [selective core-journal coverage](../methods/selective_core_journal_coverage.md), [full cited-reference indexing](full_cited_reference_indexing.md), [institution-name variant normalization](../methods/institution_name_variant_normalization.md), [WoS author-affiliation linking onset](../validations/wos_author_affiliation_linking_onset.md), [WoS times-cited source provenance](../validations/wos_times_cited_source_provenance.md), [WoS analytics product integrations](wos_analytics_product_integrations.md), and [retrieval-to-quantitative reuse mismatch](../validations/retrieval_to_quantitative_reuse_mismatch.md).
- Platform and reuse constraints should additionally document [WoS platform common query schema](../methods/wos_platform_common_query_schema.md), [WoS longitudinal coverage drift](../validations/wos_longitudinal_coverage_drift.md), [WoS collection-specific schema completeness](../validations/wos_collection_specific_schema_completeness.md), [WoS data-use entitlement ladder](../methods/wos_data_use_entitlement_ladder.md), and [WoS indicator normalization axes](../measures/wos_indicator_normalization_axes.md).

- The Birkle et al. residual pass adds [WoS non-core source-type scope boundary](../validations/wos_noncore_source_type_scope_boundary.md), [WoS non-core author-indexing variability](../validations/wos_noncore_author_indexing_variability.md), [WoS institution parent-child hierarchy mapping](../representations/wos_institution_parent_child_hierarchy_mapping.md), [WoS controlled-vocabulary collection boundary](../validations/wos_controlled_vocabulary_collection_boundary.md), [WoS cited-reference topic-pivot detection](../methods/wos_cited_reference_topic_pivot_detection.md), [WoS third-party application license boundary](../methods/wos_third_party_application_license_boundary.md), [WoS machine-learning training extract permission](../methods/wos_ml_training_extract_permission.md), [WoS data-request problem-statement gate](../methods/wos_data_request_problem_statement_gate.md), [WoS provider-researcher discrepancy feedback loop](../validations/wos_provider_researcher_discrepancy_feedback_loop.md), [WoS partner in-house normalization layer](../methods/wos_partner_inhouse_normalization_layer.md), and [WoS blind-holdout technology-emergence extract](../validations/wos_blind_holdout_technology_emergence_extract.md).
## Operationalization

- Inputs: WoS publication and cited-reference records.
- Measures: citation counts, journal categories, field-normalized indicators, research fronts.
- Common model forms: citation networks, co-citation maps, bibliographic coupling, and evaluation indicators.
- Treat subject categories, source collections, data-access route, and citation census date as explicit method choices.

## Evidence and Validations

- Birkle et al. provide a concise modern description of WoS as a data source for scholarly-activity research.
- Verified full-text evidence from Birkle et al. (2020) describes WoS as a selective citation index descended from the Science Citation Index, covering journals, proceedings, books, data compilations, and curated citation links used for discovery and bibliometric analysis.
- Birkle et al. further show that WoS is an infrastructure family rather than a single flat table: Core Collection, platform citation sources, subject indexes, regional indexes, patent indexes, data-set indexes, product integrations, APIs, and custom extracts have distinct scopes.
- The same full text decomposes the Core Collection into named index-family components and shows that product integrations, update services, author-affiliation linking, and platform citation-source counts require separate provenance.
- The same paper warns that WoS Subject Categories were designed for retrieval and can duplicate quantitative counts unless multi-category journals are adjusted.
- Birkle et al. also show that the shared WoS platform interface sits over heterogeneous collections; long-run coverage changes, collection-specific field availability, data-use entitlements, and product-specific indicator normalization must be recorded before quantitative reuse.
- Verified full-text evidence from Waltman (2016) identifies Web of Science, Scopus, and Google Scholar as the three most important citation-analysis databases and describes WoS as a subscription database composed of multiple citation indexes.
- Waltman reviews WoS-Scopus comparisons showing high WoS-to-Scopus overlap but meaningful sensitivity for smaller units, captured in [WoS-Scopus coverage overlap](../validations/wos_scopus_coverage_overlap.md).
- Verified full-text evidence from Fortunato et al. (2018) uses WoS-style citation-index data as a core empirical substrate for science-growth, citation, collaboration, and evaluation motifs.
- Verified full-text evidence from Redner (1998) uses an Institute for Scientific Information cohort of 783,339 papers published in 1981 to study paper-level citation distributions and lower-tail/upper-tail skew.
- Verified full-text evidence from Wu et al. (2019) uses Web of Science papers and journal categories to compare team size, citations, and disruption, making WoS a direct data layer for the [team size disruption](../mechanisms/team_size_disruption.md) and [disruption index](../measures/disruption_index.md) pages.
- Verified full-text evidence from Garfield (1972) links Science Citation Index journal coverage to citation-frequency and impact-factor analyses used for [citation-based source selection](../methods/citation_based_source_selection.md).
- Garfield also supplies early source-side and cited-side journal profiles, plus a [citation sample representativeness check](../validations/citation_sample_representativeness_check.md), showing that SCI data were already being treated as an analytical infrastructure rather than only a discovery index.
- Verified full-text evidence from Evans (2008) uses Thomson Scientific's Science, Social Science, and Arts and Humanities Citation Indexes linked to Fulltext Sources Online, making WoS-style citation records the substrate for [online availability panel identification](../validations/online_availability_panel_identification.md).
- Verified full-text evidence from Wagner and Leydesdorff (2005) uses Science Citation Index/Web of Science international coauthorship data for country-level and subfield collaboration networks, including a six-subfield corpus built from Journal Citation Reports journal clusters and Web of Science records.
- The Wagner evidence also motivates [coauthorship country-counting rules](../methods/coauthorship_country_counting_rules.md) and [JCR subfield journal-cluster construction](../methods/jcr_subfield_journal_cluster_construction.md) as explicit method provenance for WoS collaboration analyses.
- Verified full-text evidence from Jones et al. (2008) uses millions of papers to compare within-school and between-school collaboration structures over time, making WoS-style address and affiliation coverage central for collaboration-geography motifs.
- The Jones et al. study is split out as a [major U.S. university WoS panel](major_us_university_wos_panel.md), emphasizing the dataset sample frame behind those collaboration claims.
- Verified full-text evidence from Parolo et al. (2015) uses Thomson Reuters Web of Science articles and reviews through 2010 to build annual citation trajectories for four broad fields.
- The Parolo study is split out as a [WoS attention-decay panel](wos_attention_decay_panel.md), emphasizing the citation-life-cycle sample frame behind attention decay, half-life, and publication-volume rescaling claims.
- Verified full-text evidence from Nielsen and Andersen (2021) uses a structured WoS installation with author disambiguation and detailed field classification to build the [WoS author citation inequality panel](wos_author_citation_inequality_panel.md).
- Their design also illustrates a [subfield reference coverage filter](../validations/subfield_reference_coverage_filter.md), excluding papers from subfields where WoS covered less than two-thirds of references.

## Caveats

- Curated coverage is selective and not equivalent to all science.
- Document type, language, conference, and regional coverage matter.
- Platform-wide search should not be treated as a homogeneous analysis schema without collection, field-availability, entitlement, and normalization provenance.
- Longitudinal WoS trends should be checked for coverage drift caused by source additions, deletions, mergers, and product changes.

## Links

- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation networks](../representations/citation_networks.md)
- [ISI 1981 citation-distribution cohort](isi_1981_citation_distribution_cohort.md)
- [science maps](../representations/science_maps.md)
- [co citation](../representations/co_citation.md)
- [disruption index](../measures/disruption_index.md)
- [team size disruption](../mechanisms/team_size_disruption.md)
- [international collaboration networks](../representations/international_collaboration_networks.md)
- [subfield international coauthorship networks](../representations/subfield_international_coauthorship_networks.md)
- [international coauthorship share](../measures/international_coauthorship_share.md)
- [coauthorship country-counting rules](../methods/coauthorship_country_counting_rules.md)
- [JCR subfield journal-cluster construction](../methods/jcr_subfield_journal_cluster_construction.md)
- [multi-university collaboration stratification](../mechanisms/multi_university_collaboration.md)
- [major U.S. university WoS panel](major_us_university_wos_panel.md)
- [geographic collaboration distance](../measures/geographic_collaboration_distance.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [journal citation frequency](../measures/journal_citation_frequency.md)
- [WoS IFBSCP journal-year panel](wos_ifbscp_journal_year_panel.md)
- [journal citation network mapping](../representations/journal_citation_network_mapping.md)
- [citation-based source selection](../methods/citation_based_source_selection.md)
- [citation sample representativeness check](../validations/citation_sample_representativeness_check.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [citation-index research infrastructure](citation_index_research_infrastructure.md)
- [WoS Core Collection source layers](wos_core_collection_source_layers.md)
- [WoS Core Collection index family](wos_core_collection_index_family.md)
- [full cited-reference indexing](full_cited_reference_indexing.md)
- [selective core-journal coverage](../methods/selective_core_journal_coverage.md)
- [institution-name variant normalization](../methods/institution_name_variant_normalization.md)
- [WoS author-affiliation linking onset](../validations/wos_author_affiliation_linking_onset.md)
- [Keywords Plus cited-title terms](../representations/keywords_plus_cited_title_terms.md)
- [fit-for-purpose bibliometric extracts](../methods/fit_for_purpose_bibliometric_extracts.md)
- [retrieval-to-quantitative reuse mismatch](../validations/retrieval_to_quantitative_reuse_mismatch.md)
- [WoS times-cited source provenance](../validations/wos_times_cited_source_provenance.md)
- [WoS analytics product integrations](wos_analytics_product_integrations.md)
- [bibliometric data access modes](../methods/bibliometric_data_access_modes.md)
- [WoS update-service cadence](../methods/wos_update_service_cadence.md)
- [citation database web-interface access](../methods/citation_database_web_interface_access.md)
- [full-database bibliometric access](../methods/full_database_bibliometric_access.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [WoS platform common query schema](../methods/wos_platform_common_query_schema.md)
- [WoS longitudinal coverage drift](../validations/wos_longitudinal_coverage_drift.md)
- [WoS collection-specific schema completeness](../validations/wos_collection_specific_schema_completeness.md)
- [WoS data-use entitlement ladder](../methods/wos_data_use_entitlement_ladder.md)
- [WoS indicator normalization axes](../measures/wos_indicator_normalization_axes.md)
- [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md)
- [Scopus](scopus.md)
- [Google Scholar](google_scholar.md)
- [WoS-Scopus coverage overlap](../validations/wos_scopus_coverage_overlap.md)
- [Google Scholar transparency limitations](../validations/google_scholar_transparency_limitations.md)
- [online backfile depth](../measures/online_backfile_depth.md)
- [online availability panel identification](../validations/online_availability_panel_identification.md)
- [WoS attention-decay panel](wos_attention_decay_panel.md)
- [WoS author citation inequality panel](wos_author_citation_inequality_panel.md)
- [subfield reference coverage filter](../validations/subfield_reference_coverage_filter.md)
- [time-to-peak attention](../measures/time_to_peak_attention.md)
- [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md)

- [WoS non-core source-type scope boundary](../validations/wos_noncore_source_type_scope_boundary.md)
- [WoS institution parent-child hierarchy mapping](../representations/wos_institution_parent_child_hierarchy_mapping.md)
- [WoS provider-researcher discrepancy feedback loop](../validations/wos_provider_researcher_discrepancy_feedback_loop.md)
## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]
- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]
- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; WoS: unknown]
- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]
- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]
- Evans, J. A. (2008). Electronic publication and the narrowing of science and scholarship. *Science*, 321(5887), 395-399. https://doi.org/10.1126/science.1150473 [OpenAlex: W2125660293; Dimensions: pub.1062457136; WoS: unknown]
- Wagner, C. S., & Leydesdorff, L. (2005). Network structure, self-organization, and the growth of international collaboration in science. *Research Policy*, 34(10), 1608-1618. https://doi.org/10.1016/j.respol.2005.08.002 [OpenAlex: W1964920419; Dimensions: pub.1029657568; WoS: unknown]
- Jones, B. F., Wuchty, S., & Uzzi, B. (2008). Multi-university research teams: Shifting impact, geography, and stratification in science. *Science*, 322(5905), 1259-1262. https://doi.org/10.1126/science.1158357 [OpenAlex: W2096523843; Dimensions: pub.1062457759; WoS: unknown]
- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]
- Nielsen, M. W., & Andersen, J. P. (2021). Global citation inequality is on the rise. *Proceedings of the National Academy of Sciences*, 118(7), e2012208118. https://doi.org/10.1073/pnas.2012208118 [OpenAlex: W3128893582; Dimensions: pub.1135221443; WoS: unknown]

## Metadata

- Concept ID: `web_of_science`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Science Citation Index (unknown)
- Latest seen paper: Nielsen and Andersen (2021) (2021)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Aliases: WoS; Science Citation Index; curated citation index
