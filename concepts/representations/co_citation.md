# Co-citation

## Summary

Co-citation represents two works as related when later documents cite them together, making it a dynamic signal of perceived intellectual association.

## Canonical Form

- Unit of analysis: cited papers, authors, journals, concepts, or references.
- Typical representation: weighted undirected network among cited items.
- Mechanism or measurement target: retrospective intellectual association assigned by later citing communities.
- Empirical signature: pairs accumulate co-citations when communities jointly use them as related prior work.

## Uses in Science of Science

- Used to identify specialties, research fronts, canonical literatures, and science maps.
- Complements bibliographic coupling: co-citation changes over time as later communities reinterpret prior work.
- A common basis for clustering references and detecting intellectual structures.
- Supports recombination measures when pairs of cited sources or cited journals are compared against field/year baselines for typicality and novelty.
- At journal level, co-citation matrices are one input to [journal similarity mapping](../methods/journal_similarity_mapping.md).
- At paper level, co-citation neighborhoods can define dynamic fields for [co-citation field normalization](../methods/co_citation_field_normalization.md) and [Relative Citation Ratio](../measures/relative_citation_ratio.md).
- Hutchins et al. make this paper-specific use explicit as [co-citation network field definition](co_citation_network_field_definition.md), with validation through [co-citation field text-similarity validation](../validations/co_citation_field_text_similarity_validation.md).
- Splits into lower-level motifs for [co-citation strength](../measures/co_citation_strength.md), [citation-index co-citation intersection](../methods/citation_index_co_citation_intersection.md), [relative co-citation frequency](../measures/relative_co_citation_frequency.md), [thresholded co-citation network](thresholded_co_citation_network.md), [citing-community perceived association](../mechanisms/citing_community_perceived_association.md), [co-cited core literature](co_cited_core_literature.md), [co-citation cycling seed expansion](../methods/co_citation_cycling_seed_expansion.md), [co-citation edge-context interpretation](../methods/co_citation_edge_context_interpretation.md), [co-citation core sampling boundary](../validations/co_citation_core_sampling_boundary.md), [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md), [temporal co-citation drift](../mechanisms/temporal_co_citation_drift.md), [co-citation secondary indexing](../methods/co_citation_secondary_indexing.md), and [co-citation SDI profile](../methods/co_citation_sdi_profile.md).
- A further Small pass separates [ordinal co-citation edge scale](ordinal_co_citation_edge_scale.md), [citation-relation triangulation table](../validations/citation_relation_triangulation_table.md), [co-citation specialty interrelationship assessment](../methods/co_citation_specialty_interrelationship_assessment.md), and [co-citation individual-visibility gate](../validations/co_citation_individual_visibility_gate.md) from the broader co-citation representation.

- A residual Small pass separates [cited-document projection duality](cited_document_projection_duality.md), [citation-index reverse-lookup prerequisite](../datasets/citation_index_reverse_lookup_prerequisite.md), [citation-index snapshot dependence](../validations/citation_index_snapshot_dependence.md), [co-citation pair-universe denominator](../validations/co_citation_pair_universe_denominator.md), [co-citation exception-edge sampling](../methods/co_citation_exception_edge_sampling.md), [co-citation transfer bridge](../mechanisms/co_citation_transfer_bridge.md), [co-citation semantic-association residual](../validations/co_citation_semantic_association_residual.md), [directed-citation to co-citation symmetrization](../validations/directed_citation_to_co_citation_symmetrization.md), [key-paper role typology](key_paper_role_typology.md), [Small particle-physics co-citation benchmark](../datasets/small_particle_physics_co_citation_benchmark.md), and [co-citation cluster-program pipeline](../methods/co_citation_cluster_program_pipeline.md).
## Operationalization

- Inputs: reference lists and citing-paper metadata.
- Measures: raw [co-citation strength](../measures/co_citation_strength.md), [relative co-citation frequency](../measures/relative_co_citation_frequency.md), normalized association strength, cosine similarity, clustering, centrality, and longitudinal drift.
- Common model forms: weighted networks, community detection, time-sliced maps.
- Small's specialty-node construction can use [co-citation cycling seed expansion](../methods/co_citation_cycling_seed_expansion.md), with a [co-citation core sampling boundary](../validations/co_citation_core_sampling_boundary.md) recorded for seed and threshold choices.
- Small's original document-level workflow can be expressed as [citation-index co-citation intersection](../methods/citation_index_co_citation_intersection.md), followed by a weighted or [thresholded co-citation network](thresholded_co_citation_network.md).
- For novelty/conventionality work, pair cited journals or references within each focal paper, generate a null distribution from randomized citation networks, and convert observed pair frequencies into conventionality or atypicality scores.
- In the Uzzi-style workflow, this becomes [journal-pair z-score](../measures/journal_pair_z_score.md) and then a [paper combination-profile distribution](paper_combination_profile_distribution.md).

## Evidence and Validations

- Small introduced co-citation as a measure of document relationship in the scientific literature.
- Verified full-text evidence from Small (1973) defines co-citation as the frequency with which two documents are cited together, measured by comparing lists of citing documents. Small shows how networks of co-cited papers can be generated for scientific specialties and notes that co-citation patterns differ from bibliographic coupling while generally aligning with direct-citation patterns.
- Small also supports the split-out motifs: pairwise co-citation strength, citation-index set intersection, relative co-citation frequency, thresholded network display, co-cited specialty cores, co-citation mapping, [co-citation cycling seed expansion](../methods/co_citation_cycling_seed_expansion.md), [co-citation edge-context interpretation](../methods/co_citation_edge_context_interpretation.md), [citing-community perceived association](../mechanisms/citing_community_perceived_association.md), and changing co-citation patterns through time.
- Additional Small full-text evidence supports [key-paper concept proxy](key_paper_concept_proxy.md), [direct-citation co-citation overlap](../validations/direct_citation_co_citation_overlap.md), and [co-citation bibliographic-coupling divergence](../validations/co_citation_bibliographic_coupling_divergence.md).
- A later Small full-text pass adds the ordinal edge-weight legend, the three-way comparison of co-citation, bibliographic coupling, and direct citation, the proposed inter-specialty assessment use, and the prerequisite that both documents first have individual citation visibility.
- Verified full-text evidence from Uzzi et al. (2013) shows a co-citation-style pair representation used as a mechanism measure: cited-journal pairs receive z-scores relative to randomized citation networks, and papers with conventional median pairings plus atypical left-tail pairings are more likely to become highly cited.
- Uzzi et al. aggregate paper-to-paper citation-network randomizations to journal-pair counts, connecting co-citation to [degree-preserving citation-network null](../methods/degree_preserving_citation_network_null.md).

## Caveats

- Co-citation is lagged and depends on downstream community behavior.
- Highly cited general methods can dominate unless normalized or filtered.
- Pair-based novelty measures can depend strongly on field/year definitions and the granularity of the cited entity, such as journal versus document.
- Co-citation maps inherit node-level visibility filters before pairwise relationships are even measured.

## Links

- [citation networks](../representations/citation_networks.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [research fronts](../mechanisms/research_fronts.md)
- [science maps](../representations/science_maps.md)
- [co-citation strength](../measures/co_citation_strength.md)
- [citation-index co-citation intersection](../methods/citation_index_co_citation_intersection.md)
- [relative co-citation frequency](../measures/relative_co_citation_frequency.md)
- [thresholded co-citation network](thresholded_co_citation_network.md)
- [citing-community perceived association](../mechanisms/citing_community_perceived_association.md)
- [co-cited core literature](co_cited_core_literature.md)
- [co-citation cycling seed expansion](../methods/co_citation_cycling_seed_expansion.md)
- [co-citation edge-context interpretation](../methods/co_citation_edge_context_interpretation.md)
- [co-citation core sampling boundary](../validations/co_citation_core_sampling_boundary.md)
- [key-paper concept proxy](key_paper_concept_proxy.md)
- [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md)
- [co-citation secondary indexing](../methods/co_citation_secondary_indexing.md)
- [co-citation SDI profile](../methods/co_citation_sdi_profile.md)
- [co-citation field normalization](../methods/co_citation_field_normalization.md)
- [co-citation network field definition](co_citation_network_field_definition.md)
- [co-citation field text-similarity validation](../validations/co_citation_field_text_similarity_validation.md)
- [Relative Citation Ratio](../measures/relative_citation_ratio.md)
- [temporal co-citation drift](../mechanisms/temporal_co_citation_drift.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [journal-pair z-score](../measures/journal_pair_z_score.md)
- [degree-preserving citation-network null](../methods/degree_preserving_citation_network_null.md)
- [direct-citation co-citation overlap](../validations/direct_citation_co_citation_overlap.md)
- [co-citation bibliographic-coupling divergence](../validations/co_citation_bibliographic_coupling_divergence.md)
- [ordinal co-citation edge scale](ordinal_co_citation_edge_scale.md)
- [citation-relation triangulation table](../validations/citation_relation_triangulation_table.md)
- [co-citation specialty interrelationship assessment](../methods/co_citation_specialty_interrelationship_assessment.md)
- [co-citation individual-visibility gate](../validations/co_citation_individual_visibility_gate.md)
- [paper combination-profile distribution](paper_combination_profile_distribution.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)
- [median conventionality](../measures/median_conventionality.md)
- [tail novelty](../measures/tail_novelty.md)

- [cited-document projection duality](cited_document_projection_duality.md)
- [co-citation transfer bridge](../mechanisms/co_citation_transfer_bridge.md)
- [Small particle-physics co-citation benchmark](../datasets/small_particle_physics_co_citation_benchmark.md)
## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]
- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; WoS: unknown]
- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]

## Metadata

- Concept ID: `co_citation`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Fortunato et al. (2018) (2018)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Aliases: co-citation analysis; cited-reference similarity
