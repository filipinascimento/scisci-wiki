# Coauthorship and collaboration networks

## Summary

A coauthorship network represents scientists as nodes and shared publications as ties, often used as an observable proxy for collaboration.

## Canonical Form

- Unit of analysis: authors, teams, institutions, or countries.
- Typical representation: projected author-author graph, bipartite author-paper graph, or temporal collaboration network.
- Mechanism or measurement target: collaboration, team formation, social capital, information flow, and field structure.
- Empirical signature: high clustering, giant components, field variation, and changing team sizes.

## Uses in Science of Science

- Used to study team science, invisible colleges, interdisciplinarity, mobility, and scientific collaboration structures.
- Provides inputs for team-size disruption and career-dynamics pages.
- Can be extended to institution, country, and funding networks.
- Can use [coauthorship affiliation projection](../methods/coauthorship_affiliation_projection.md) as the default graph-construction step and [weighted coauthorship edges](weighted_coauthorship_edges.md) when large-team ties should contribute less than small-team ties.
- Should pair the projection step with [coauthorship affiliation-network validity](../validations/coauthorship_affiliation_network_validity.md) when using byline ties as evidence of professional collaboration.
- Large source-domain panels require scalable author-node construction such as [ordered author-name indexing](../methods/ordered_author_name_indexing.md) before richer disambiguation is applied.
- Can be aggregated to institution-level collaboration networks using [between-school collaboration share](../measures/between_school_collaboration_share.md) and [university tier mixing matrices](university_tier_mixing_matrix.md).
- Supports split-out measures for [collaborator-count distribution](../measures/collaborator_count_distribution.md), [collaboration path length](../measures/collaboration_path_length.md), [coauthorship network diameter](../measures/coauthorship_network_diameter.md), and [papers-per-author distribution](../measures/papers_per_author_distribution.md).
- Also supports interpretive layers such as [small-world scientific communication diffusion](../mechanisms/small_world_scientific_communication_diffusion.md), [random-graph collaboration path benchmark](../validations/random_graph_collaboration_path_benchmark.md), [collaborator exponent dominance regime](../measures/collaborator_exponent_dominance_regime.md), and [lab-director degree-inflation signature](../validations/lab_director_degree_inflation_signature.md).
- Person-centered and broker-centered analyses split into [focal collaboration distance profile](../measures/focal_collaboration_distance_profile.md), [coauthorship broker-removal fragility](../validations/coauthorship_broker_removal_fragility.md), and [brokerage assortativity check](../validations/brokerage_assortativity_check.md).
- Path-based interpretations now include denominator and topicality caveats through [connected-pairs-only distance censoring](../validations/connected_pairs_only_distance_censoring.md) and [shortest-path topic mismatch caveat](../validations/shortest_path_topic_mismatch_caveat.md).
- Temporal growth tests split into [coauthorship preferential-attachment test](../methods/coauthorship_preferential_attachment_test.md) when dated edge additions are available.
- Also supports production-trend measures such as [team-authorship share](../measures/team_authorship_share.md) and [mean team-size growth](../measures/mean_team_size_growth.md).
- Can be summarized distributionally with [article team-size distribution](../measures/article_team_size_distribution.md) and [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md) when the target is team size rather than author-author topology.
- The relation between article teams and author degrees can be probed with [collaborator-distribution team-size projection](../methods/collaborator_distribution_team_size_projection.md).
- Guimera et al.'s team-record construction is split out as [team-agent bipartite projection](team_agent_bipartite_projection.md), where team-agent data are projected into agent-agent collaboration networks.

## Operationalization

- Inputs: author-disambiguated publication records with byline order, affiliations, dates, and source-domain provenance.
- Measures: degree, [collaboration giant component](../measures/collaboration_giant_component.md), clustering, centrality, repeated collaboration, team size, institutional mixing.
- Distributional and distance measures include collaborator counts, papers per author, mean path length, and diameter.
- Common model forms: temporal networks, bipartite projections, and community detection.
- Edge construction choices include binary coauthorship, repeated coauthorship counts, and fractional collaboration-strength weights.

## Evidence and Validations

- Newman's early large-scale analysis remains a core anchor for scientific collaboration networks.
- Verified full-text evidence from Newman (2001) treats coauthorship as an affiliation network: each paper is a group, and every pair of coauthors receives a projected tie in the author-author graph.
- The same full text adds construction caveats now split out as [coauthorship affiliation-network validity](../validations/coauthorship_affiliation_network_validity.md), [collaboration fixed time window](../methods/collaboration_fixed_time_window.md), [ordered author-name indexing](../methods/ordered_author_name_indexing.md), [coauthorship name-resolution bounds](../validations/coauthorship_name_resolution_bounds.md), [collaboration source coverage bias](../validations/collaboration_source_coverage_bias.md), and [mega-collaboration degree inflation](../validations/mega_collaboration_degree_inflation.md).
- Verified full-text evidence from Newman (2004): the paper constructs large coauthorship networks for biomedical research, physics, and mathematics, then compares component structure, collaborator-count distributions, path lengths, clustering, assortativity, and centrality.
- Newman (2004) motivates [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md) by comparing broad field sources with single-journal samples and warning that venue-limited data can miss authorship patterns.
- Newman (2001, 2004) also reports basic distribution and reachability descriptors now split out as [collaborator-count distribution](../measures/collaborator_count_distribution.md), [papers-per-author distribution](../measures/papers_per_author_distribution.md), [finite-window tail cutoff](../validations/finite_window_tail_cutoff.md), [collaboration path length](../measures/collaboration_path_length.md), and [coauthorship network diameter](../measures/coauthorship_network_diameter.md).
- Verified full-text evidence from Newman (2001, 2004) shows that the largest connected component usually contains most observed authors in the studied collaboration networks, giving a field-level connectedness measure rather than only individual collaborator counts.
- Newman (2001) also reports [second-largest component check](../validations/second_largest_component_check.md), which verifies that the remaining components are far smaller than the giant component in the studied networks.
- Newman explicitly treats coauthorship as a documented but incomplete trace of social and professional connection; this supports using coauthorship as an observable representation while preserving caveats about informal collaboration.
- The verified text distinguishes coauthorship networks from citation networks: papers are nodes in citation networks, while authors are nodes in coauthorship networks, making the representation social as well as intellectual.
- A residual Newman (2001 PRE) pass adds validation motifs for [paper-version duplicate productivity bias](../validations/paper_version_duplicate_productivity_bias.md), [team-output full-credit inflation](../validations/team_output_full_credit_inflation.md), [author productivity implausibility check](../validations/author_productivity_implausibility_check.md), and [focal-scientist distance anchor bias](../validations/focal_scientist_distance_anchor_bias.md).
- Newman (2004) also supports split-out motifs for field collaboration-mode contrasts, collaborator fat-tail cutoffs, referral-chain shortest paths, shortest-path funneling, large-team triangle inflation, and the coauthorship-citation representation distinction.
- Newman (2001) further supports clustering interpretation motifs: [team-size preserving clustering null](../methods/team_size_preserving_clustering_null.md), [shared-context collaboration clustering](../mechanisms/shared_context_collaboration_clustering.md), and [biomedical lab-hierarchy clustering caveat](../validations/biomedical_lab_hierarchy_clustering_caveat.md).
- Newman (2004) also supports split-out motifs for focal collaboration distance profiles, coauthorship preferential-attachment tests, broker-removal fragility, and brokerage assortativity checks.
- Newman (2001, 2004) additionally supports [connected-pairs-only distance censoring](../validations/connected_pairs_only_distance_censoring.md), [shortest-path topic mismatch caveat](../validations/shortest_path_topic_mismatch_caveat.md), and [disciplinary collaboration norm shift](../mechanisms/disciplinary_collaboration_norm_shift.md).
- Verified full-text evidence from Newman (2004) also defines a weighted collaboration-strength measure that discounts large author lists, a useful guard against treating every coauthorship edge as equal.
- That measure is split out as [weighted coauthorship edges](weighted_coauthorship_edges.md) for analyses that need edge-strength construction rather than only the coauthorship-network substrate.
- Verified full-text evidence from Wuchty et al. (2007) uses team authorship across papers and patents as a production-level collaboration trace, showing that changing team size is itself a key temporal feature of scholarly networks.
- Verified full-text evidence from Guimera et al. (2005) adds a generative layer: collaboration networks emerge from team-assembly decisions about newcomer/incumbent balance and repeat incumbent collaboration.
- Guimera et al. also define the collaboration graph as a projection from a bipartite team-agent network before measuring component structure.
- Guimera et al. also frame the collaboration network as a [collaboration knowledge reservoir](../mechanisms/collaboration_knowledge_reservoir.md), in which prior collaborator neighborhoods affect access to field knowledge.
- Verified full-text evidence from Robinson-Garcia et al. (2020) and Xu et al. (2022) adds a role-aware layer: contribution statements can distinguish leadership, specialization, and support within the same coauthorship edge.
- Verified full-text evidence from Shen and Barabasi (2014) adds a credit-aware layer: a multi-author paper can be represented with unequal coauthor credit shares inferred from community citation behavior, not just with binary coauthorship edges.
- Verified full-text evidence from Li et al. (2019) adds a prestige-exposure layer: early coauthorship ties can be marked by whether a junior scientist collaborated with top-cited scientists.
- Li et al. also show that early top-coauthor ties can predict later repeated top-coauthor access, turning a static prestige-marked edge into a career-network transition motif.
- Verified full-text evidence from Sekara et al. (2018) adds a venue-specific author-order layer: within-journal byline histories can classify senior authors as new, chaperoned, or established and can estimate nonlast-to-last transitions.
- Verified full-text evidence from Tekles and Bornmann (2020) adds an entity-resolution caveat: author-name disambiguation is required before coauthorship edges can be interpreted as person-person collaboration ties.
- Verified full-text evidence from Wagner and Leydesdorff (2005) extends coauthorship networks to the international level, using country-level coauthorships and subfield case studies to test whether international collaboration grows through self-organized preferential attachment.
- Wagner and Leydesdorff also split international collaboration into field-level coauthorship networks, continuant collaborator hubs, country cores, regional hubs, and small-world clustering.
- Verified full-text evidence from Pan et al. (2012) extends collaboration networks to cities and countries and shows that affiliation-derived collaboration strength has a measurable geographic-distance profile.
- Verified full-text evidence from Jones et al. (2008) uses affiliation-resolved coauthorship data to separate solo, within-school, and between-school collaboration and to compare collaboration among institutional prestige tiers.
- Jones et al. also supports the [authorship structure taxonomy](../measures/authorship_structure_taxonomy.md) and [major U.S. university WoS panel](../datasets/major_us_university_wos_panel.md) as institution-aware extensions of ordinary coauthorship-network data.
- Verified full-text evidence from Milojevic (2014) adds a distributional model for coauthorship team sizes: core teams explain the small-team mass, while extended teams explain the large-team tail.
- Milojevic also shows why collaborator-count tails should be interpreted with article-team size in view, because large-team membership can project into high collaborator counts.
- Milojevic's article-team framing is a reminder that author lists can be analyzed as team-size distributions even before they are projected into author-author networks.

## Caveats

- Coauthorship misses informal collaboration and may overstate contribution symmetry.
- Symmetric coauthorship edges can hide unequal perceived credit and contribution roles.
- Author disambiguation, consortium authorship, and field authorship norms are central threats.
- [Homonym and synonym author errors](../validations/homonym_synonym_author_errors.md) can create false collaborators or split a real collaborator across multiple nodes.

## Links

- [invisible college](../mechanisms/invisible_college.md)
- [weighted coauthorship edges](weighted_coauthorship_edges.md)
- [coauthorship affiliation-network validity](../validations/coauthorship_affiliation_network_validity.md)
- [coauthorship affiliation projection](../methods/coauthorship_affiliation_projection.md)
- [ordered author-name indexing](../methods/ordered_author_name_indexing.md)
- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)
- [online bibliography network scaling](../methods/online_bibliography_network_scaling.md)
- [biomedicine exclusion representativeness bias](../validations/biomedicine_exclusion_representativeness_bias.md)
- [authored-items denominator mismatch](../validations/authored_items_denominator_mismatch.md)
- [collaboration fixed time window](../methods/collaboration_fixed_time_window.md)
- [collaboration source coverage bias](../validations/collaboration_source_coverage_bias.md)
- [bibliographic source-maintenance regime](../validations/bibliographic_source_maintenance_regime.md)
- [coauthorship name-resolution bounds](../validations/coauthorship_name_resolution_bounds.md)
- [field collaboration-mode contrast](../measures/field_collaboration_mode_contrast.md)
- [small-world scientific communication diffusion](../mechanisms/small_world_scientific_communication_diffusion.md)
- [random-graph collaboration path benchmark](../validations/random_graph_collaboration_path_benchmark.md)
- [statistical-physics network method transfer](../methods/statistical_physics_network_method_transfer.md)
- [coauthorship-citation network distinction](coauthorship_citation_network_distinction.md)
- [time-resolved coauthorship reconstruction](../methods/time_resolved_coauthorship_reconstruction.md)
- [single-journal coauthorship coverage bias](../validations/single_journal_coauthorship_coverage_bias.md)
- [team size disruption](../mechanisms/team_size_disruption.md)
- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [team-authorship share](../measures/team_authorship_share.md)
- [mean team-size growth](../measures/mean_team_size_growth.md)
- [disciplinary collaboration norm shift](../mechanisms/disciplinary_collaboration_norm_shift.md)
- [article team-size distribution](../measures/article_team_size_distribution.md)
- [mean team-size distribution-shift caveat](../validations/mean_team_size_distribution_shift_caveat.md)
- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)
- [astronomy core-journal team panel](../datasets/astronomy_core_journal_team_panel.md)
- [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md)
- [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md)
- [authorship-mode contribution share](../measures/authorship_mode_contribution_share.md)
- [collaborator-distribution team-size projection](../methods/collaborator_distribution_team_size_projection.md)
- [relative team-impact ratio](../measures/relative_team_impact_ratio.md)
- [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md)
- [team-agent bipartite projection](team_agent_bipartite_projection.md)
- [collaboration knowledge reservoir](../mechanisms/collaboration_knowledge_reservoir.md)
- [coauthorship random-walk collaborator choice](../methods/coauthorship_random_walk_collaborator_choice.md)
- [star-collaborator loss dependency](../mechanisms/star_collaborator_loss_dependency.md)
- [team link-type composition](../measures/team_link_type_composition.md)
- [newcomer-incumbent team mix](../measures/newcomer_incumbent_team_mix.md)
- [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md)
- [team self-assembly models](../methods/team_self_assembly_models.md)
- [team assembly degree-distribution validation](../validations/team_assembly_degree_distribution_validation.md)
- [collaboration giant component](../measures/collaboration_giant_component.md)
- [second-largest component check](../validations/second_largest_component_check.md)
- [collaborator-count distribution](../measures/collaborator_count_distribution.md)
- [collaborator exponent dominance regime](../measures/collaborator_exponent_dominance_regime.md)
- [lab-director degree-inflation signature](../validations/lab_director_degree_inflation_signature.md)
- [finite-window tail cutoff](../validations/finite_window_tail_cutoff.md)
- [collaboration path length](../measures/collaboration_path_length.md)
- [focal collaboration distance profile](../measures/focal_collaboration_distance_profile.md)
- [connected-pairs-only distance censoring](../validations/connected_pairs_only_distance_censoring.md)
- [referral-chain shortest paths](../methods/referral_chain_shortest_paths.md)
- [shortest-path topic mismatch caveat](../validations/shortest_path_topic_mismatch_caveat.md)
- [shortest-path funneling effect](../measures/shortest_path_funneling_effect.md)
- [coauthorship network diameter](../measures/coauthorship_network_diameter.md)
- [papers-per-author distribution](../measures/papers_per_author_distribution.md)
- [paper-version duplicate productivity bias](../validations/paper_version_duplicate_productivity_bias.md)
- [team-output full-credit inflation](../validations/team_output_full_credit_inflation.md)
- [author productivity implausibility check](../validations/author_productivity_implausibility_check.md)
- [focal-scientist distance anchor bias](../validations/focal_scientist_distance_anchor_bias.md)
- [productivity-connectedness decoupling](../validations/productivity_connectedness_decoupling.md)
- [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)
- [task specialization](../mechanisms/task_specialization.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [contribution role vectors](contribution_role_vectors.md)
- [contributorship prediction models](../methods/contributorship_prediction_models.md)
- [lead-role ratio](../measures/lead_role_ratio.md)
- [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md)
- [top-cited scientist status](../measures/top_cited_scientist_status.md)
- [repeated top-coauthor access](../mechanisms/repeated_top_coauthor_access.md)
- [journal-specific author-order histories](journal_specific_author_order_histories.md)
- [venue PI experience categories](../measures/venue_pi_experience_categories.md)
- [nonlast-to-last transition probability](../measures/nonlast_to_last_transition_probability.md)
- [early-career sponsorship by top scientists](../mechanisms/early_career_sponsorship.md)
- [venue chaperone effect](../mechanisms/venue_chaperone_effect.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md)
- [team-size preserving clustering null](../methods/team_size_preserving_clustering_null.md)
- [shared-context collaboration clustering](../mechanisms/shared_context_collaboration_clustering.md)
- [affiliation-overlay clustering test](../methods/affiliation_overlay_clustering_test.md)
- [biomedical lab-hierarchy clustering caveat](../validations/biomedical_lab_hierarchy_clustering_caveat.md)
- [large-team triangle inflation](../validations/large_team_triangle_inflation.md)
- [excess collaboration clustering](../validations/excess_collaboration_clustering.md)
- [mega-collaboration degree inflation](../validations/mega_collaboration_degree_inflation.md)
- [collaboration assortativity](../measures/collaboration_assortativity.md)
- [coauthorship broker-removal fragility](../validations/coauthorship_broker_removal_fragility.md)
- [brokerage assortativity check](../validations/brokerage_assortativity_check.md)
- [coauthorship preferential-attachment test](../methods/coauthorship_preferential_attachment_test.md)
- [collaborator fat-tail cutoff](../validations/collaborator_fat_tail_cutoff.md)
- [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md)
- [collaboration brokerage inequality distribution](../measures/collaboration_brokerage_inequality_distribution.md)
- [triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [author-name blocking](../methods/author_name_blocking.md)
- [author similarity clustering](../methods/author_similarity_clustering.md)
- [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md)
- [burden of knowledge](../mechanisms/burden_of_knowledge.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)
- [attention inequality](../mechanisms/attention_inequality.md)
- [international collaboration networks](international_collaboration_networks.md)
- [subfield international coauthorship networks](subfield_international_coauthorship_networks.md)
- [international collaboration preferential attachment](../mechanisms/international_collaboration_preferential_attachment.md)
- [international collaboration small-world structure](international_collaboration_small_world.md)
- [continuant collaborators](../mechanisms/continuant_collaborators.md)
- [faculty hiring networks](faculty_hiring_networks.md)
- [small-world collaboration structure](small_world_collaboration_structure.md)
- [self-report network mapping limits](../validations/self_report_network_mapping_limits.md)
- [social-contact proxy boundary](../validations/social_contact_proxy_boundary.md)
- [publication-record network scale advantage](../methods/publication_record_network_scale_advantage.md)
- [preprint social-trace equivalence](../validations/preprint_social_trace_equivalence.md)
- [field collaboration-degree contrast](../measures/field_collaboration_degree_contrast.md)
- [career-lifetime collaboration ceiling](../mechanisms/career_lifetime_collaboration_ceiling.md)
- [chain-referral attrition bias](../validations/chain_referral_attrition_bias.md)
- [author co-citation relations](author_cocitation_relations.md)
- [giant-component morphology gradient](giant_component_morphology_gradient.md)
- [percolation-line distance](../measures/percolation_line_distance.md)
- [collaboration fluidity regimes](../mechanisms/collaboration_fluidity_regimes.md)
- [geographic collaboration distance](../measures/geographic_collaboration_distance.md)
- [multi-university collaboration stratification](../mechanisms/multi_university_collaboration.md)
- [between-school collaboration share](../measures/between_school_collaboration_share.md)
- [university tier mixing matrix](university_tier_mixing_matrix.md)
- [status-assortative collaboration](../mechanisms/status_assortative_collaboration.md)
- [citation networks](citation_networks.md)
- [dimensions](../datasets/dimensions.md)
- [sciscinet v2](../datasets/sciscinet_v2.md)

## References

- Newman, M. E. J. (2001). The structure of scientific collaboration networks. *Proceedings of the National Academy of Sciences*, 98(2), 404-409. https://doi.org/10.1073/pnas.98.2.404 [OpenAlex: W2125315567; Dimensions: pub.1018280471; WoS: unknown]
- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64, 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; WoS: unknown]
- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]
- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; WoS: unknown]
- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]
- Jones, B. F., Wuchty, S., & Uzzi, B. (2008). Multi-university research teams: Shifting impact, geography, and stratification in science. *Science*, 322(5905), 1259-1262. https://doi.org/10.1126/science.1158357 [OpenAlex: W2096523843; Dimensions: pub.1062457759; WoS: unknown]
- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; WoS: unknown]
- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]
- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]
- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; WoS: unknown]
- Li, W., Aste, T., Caccioli, F., & Livan, G. (2019). Early coauthorship with top scientists predicts success in academic careers. *Nature Communications*, 10, 5170. https://doi.org/10.1038/s41467-019-13130-4 [OpenAlex: W2949684159; Dimensions: pub.1122584827; WoS: unknown]
- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]
- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]
- Wagner, C. S., & Leydesdorff, L. (2005). Network structure, self-organization, and the growth of international collaboration in science. *Research Policy*, 34(10), 1608-1618. https://doi.org/10.1016/j.respol.2005.08.002 [OpenAlex: W1964920419; Dimensions: pub.1029657568; WoS: unknown]
- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; WoS: unknown]
- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown]

## Metadata

- Concept ID: `coauthorship_networks`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.98.2.404`
- OpenAlex ID: `W2125315567`
- Aliases: collaboration graph; team network; author network
