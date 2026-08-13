# Citation networks

## Summary

A citation network represents papers, patents, books, or other scholarly objects as nodes and citation relationships as directed links.

## Canonical Form

- Unit of analysis: scholarly objects and directed citation edges.
- Typical representation: directed acyclic graph at the paper level, with time-stamped edges.
- Mechanism or measurement target: knowledge flow, attention, inheritance, and positioning.
- Empirical signature: skewed in-degree, field-dependent reference practices, and age-structured paths.

## Uses in Science of Science

- Core substrate for citation impact, disruption, research fronts, sleeping beauties, bibliographic history, and knowledge diffusion.
- Enables graph measures such as in-degree, PageRank, co-citation, bibliographic coupling, and citation-context sampling.
- Provides the backbone for many science maps and heterogeneous scholarly graphs.
- Supports pair and cluster projections such as [co-citation strength](../measures/co_citation_strength.md), [co-cited core literature](co_cited_core_literature.md), and [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md).
- Can be reorganized into [focal-predecessor-future citation triads](focal_predecessor_future_citation_triads.md) for disruption and consolidation measurement.
- Can be summarized at the cohort level through [reference-citation balance](reference_citation_balance.md).

## Operationalization

- Inputs: references, citing papers, publication dates, venues, fields, and identifiers.
- Measures: citations, normalized citations, disruption, co-citation, bibliographic coupling, main paths, traversal counts, PageRank.
- Common model forms: attachment/growth models, aging models, community detection, and diffusion models.
- Randomized citation-network baselines can preserve degree and temporal structure for expected-combination tests, as in [degree-preserving citation-network null](../methods/degree_preserving_citation_network_null.md).

## Evidence and Validations

- Price's paper is a foundational citation-network treatment; modern datasets make large-scale directed citation graphs routine.
- Verified full-text evidence from Price (1965) models science as papers connected by directed references, balancing new references against citations to earlier work. The paper also emphasizes skewed citation incidence: many papers receive no citations in a given year, while a small share receives multiple citations.
- Price's full text treats citation links as a way to expose an active research front: each year's papers connect broadly to older literature but are more tightly linked to a small selected part of prior work.
- The same evidence supports [reference-citation balance](reference_citation_balance.md) and [uncited-paper mass](../measures/uncited_paper_mass.md) as lower-level accounting motifs inside citation networks.
- Price's full text also supports split-out pages for [annual citation-incidence distribution](../measures/annual_citation_incidence_distribution.md), [live/dead citation survival](../mechanisms/live_dead_citation_survival.md), [research-front citation share](../measures/research_front_citation_share.md), [tight-field citation matrix](tight_field_citation_matrix.md), and [classic/ephemeral literature split](../mechanisms/classic_ephemeral_literature_split.md).
- A later Price split separates the [growth-normalized citation-age baseline](../methods/growth_normalized_citation_age_baseline.md), [citation immediacy effect curve](../measures/citation_immediacy_effect_curve.md), and [citation-matrix background noise](../validations/citation_matrix_background_noise.md) that sit underneath research-front and citation-topography interpretations.
- Verified full-text evidence from Teufel et al. (2006) adds a typed-edge extension: citation links can be enriched with citation functions that describe the author's reason for citing, improving citation indexing, summarization, and impact interpretation.
- Verified full-text evidence from Hummon and Doreian (1989) adds a path-based extension: citation networks can be analyzed through DAG sorting, search paths, longest path distances, traversal counts, and convergence checks to recover main developmental backbones.
- The same paper also supports event-level [milestone-event citation historiographs](milestone_event_citation_historiograph.md), [link-focused citation connectivity](../methods/link_focused_citation_connectivity.md), and [citation historiograph accuracy audit](../validations/citation_historiograph_accuracy_audit.md).
- A later Hummon split makes component-root selection, priority-first path extraction, regular-equivalence generations, terminal-event labels, and off-main-path breakthrough caveats explicit as reusable citation-network motifs.
- Verified full-text evidence from Chen et al. (2007) adds a recursive-centrality extension: PageRank over citation networks weights citations by the network importance and reference-list length of citing papers.
- Chen et al. operationalize this extension on the [Physical Review citation network](../datasets/physical_review_citation_network.md), making bounded graph coverage a visible part of recursive citation-rank interpretation.
- Verified full-text evidence from West et al. (2010) adds a journal-level recursive-centrality extension through Eigenfactor metrics over journal citation networks.
- West et al. specify the mechanism as a [journal citation random walk](../methods/journal_citation_random_walk.md) whose stationary visit share becomes [Eigenfactor Score](../measures/eigenfactor_score.md).
- Verified full-text evidence from Garfield (1972) adds an earlier journal-aggregation layer: source journals and cited journals can be arranged into a directed information-transfer network using SCI references.
- Verified full-text evidence from Pan et al. (2012) adds a spatial aggregation layer: [world city citation network](world_city_citation_network.md) represents directed citation flows among cities after papers are assigned to author-affiliation locations.
- Verified full-text evidence from Uzzi et al. (2013) adds a null-model layer: paper-to-paper citation networks are randomized with degree and temporal constraints, then aggregated into journal-pair baselines for novelty and conventionality measurement.

## Caveats

- Citation meaning varies: credit, background, critique, method use, data use, or social signaling.
- Coverage differs strongly across databases, languages, fields, and document types.

## Links

- [cumulative advantage](../mechanisms/cumulative_advantage.md)
- [disruption consolidation](../mechanisms/disruption_consolidation.md)
- [focal-predecessor-future citation triads](focal_predecessor_future_citation_triads.md)
- [disruption measure validation](../validations/disruption_measure_validation.md)
- [reference-citation balance](reference_citation_balance.md)
- [annual citation-incidence distribution](../measures/annual_citation_incidence_distribution.md)
- [uncited-paper mass](../measures/uncited_paper_mass.md)
- [growth-normalized citation-age baseline](../methods/growth_normalized_citation_age_baseline.md)
- [citation immediacy effect curve](../measures/citation_immediacy_effect_curve.md)
- [pairwise citation-probability decay](../measures/pairwise_citation_probability_decay.md)
- [citation-matrix background noise](../validations/citation_matrix_background_noise.md)
- [almost-closed field reference leakage](../validations/almost_closed_field_reference_leakage.md)
- [front-archive bibliographic need split](../mechanisms/front_archive_bibliographic_need_split.md)
- [taxonomic subject knowledge parcels](taxonomic_subject_knowledge_parcels.md)
- [pure citation-network disconnected residual](../validations/pure_citation_network_disconnected_residual.md)
- [live/dead citation survival](../mechanisms/live_dead_citation_survival.md)
- [research fronts](../mechanisms/research_fronts.md)
- [research-front citation share](../measures/research_front_citation_share.md)
- [citation topography strips](citation_topography_strips.md)
- [tight-field citation matrix](tight_field_citation_matrix.md)
- [classic/ephemeral literature split](../mechanisms/classic_ephemeral_literature_split.md)
- [citation-index alerting service](../methods/citation_index_alerting_service.md)
- [co citation](../representations/co_citation.md)
- [co-citation strength](../measures/co_citation_strength.md)
- [co-cited core literature](co_cited_core_literature.md)
- [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md)
- [citation contexts and functions](../representations/citation_contexts.md)
- [citation function taxonomies](citation_function_taxonomies.md)
- [citation function classification](../methods/citation_function_classification.md)
- [main path analysis](../methods/main_path_analysis.md)
- [milestone-event citation historiograph](milestone_event_citation_historiograph.md)
- [citation component root selection](../methods/citation_component_root_selection.md)
- [priority-first main-path extraction](../methods/priority_first_main_path_extraction.md)
- [regular equivalence intellectual generations](../methods/regular_equivalence_intellectual_generations.md)
- [terminal-event capstone/dead-end distinction](terminal_event_capstone_deadend_distinction.md)
- [off-main-path breakthrough caveat](../validations/off_main_path_breakthrough_caveat.md)
- [link-focused citation connectivity](../methods/link_focused_citation_connectivity.md)
- [citation historiograph accuracy audit](../validations/citation_historiograph_accuracy_audit.md)
- [citation DAG topological sort](../methods/citation_dag_topological_sort.md)
- [longest citation path distance](../measures/longest_citation_path_distance.md)
- [search path link count](../measures/search_path_link_count.md)
- [search path node pair count](../measures/search_path_node_pair_count.md)
- [node pair projection count](../measures/node_pair_projection_count.md)
- [main path convergence validation](../validations/main_path_convergence_validation.md)
- [citation PageRank](../measures/citation_pagerank.md)
- [Google number](../measures/google_number.md)
- [recursive citation weighting](../mechanisms/recursive_citation_weighting.md)
- [reference-list dilution](../mechanisms/reference_list_dilution.md)
- [Physical Review citation network](../datasets/physical_review_citation_network.md)
- [Eigenfactor metrics](../measures/eigenfactor_metrics.md)
- [journal citation random walk](../methods/journal_citation_random_walk.md)
- [Eigenfactor Score](../measures/eigenfactor_score.md)
- [Article Influence Score](../measures/article_influence_score.md)
- [journal citation network mapping](journal_citation_network_mapping.md)
- [world city citation network](world_city_citation_network.md)
- [citation-collaboration flow coupling](../mechanisms/citation_collaboration_flow_coupling.md)
- [scholarly spatial gravity law](../measures/scholarly_spatial_gravity_law.md)
- [cited journal citation profile](cited_journal_citation_profile.md)
- [source journal reference profile](source_journal_reference_profile.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [integrated patent-paper citation networks](integrated_patent_paper_citation_networks.md)
- [patent-paper boundary](patent_paper_boundary.md)
- [openalex](../datasets/openalex.md)
- [sciscinet v2](../datasets/sciscinet_v2.md)
- [degree-preserving citation-network null](../methods/degree_preserving_citation_network_null.md)
- [journal-pair z-score](../measures/journal_pair_z_score.md)
- [paper combination-profile distribution](paper_combination_profile_distribution.md)
- [citation-community consensus positions](citation_community_consensus_positions.md)
- [scientific-meme burst propagation](../mechanisms/scientific_meme_burst_propagation.md)

## References

- Price, D. J. de Solla. (1965). Networks of scientific papers. *Science*, 149(3683), 510-515. https://doi.org/10.1126/science.149.3683.510 [OpenAlex: W2088209891; Dimensions: pub.1062485810; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]
- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]
- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]
- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; WoS: unknown]
- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]
- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]
- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]
- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; WoS: unknown]
- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; WoS: unknown]

## Metadata

- Concept ID: `citation_networks`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Price (1965) (1965)
- Latest seen paper: Fortunato et al. (2018) (2018)
- Primary reference DOI: `10.1126/science.149.3683.510`
- OpenAlex ID: `W2088209891`
- Aliases: direct citation graph; paper citation DAG; scholarly graph
