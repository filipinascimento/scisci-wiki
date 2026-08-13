# Multiplex scholarly graphs

## Summary

Multiplex scholarly graphs represent multiple node and edge types, such as papers, authors, institutions, patents, grants, topics, datasets, citations, authorship, funding, and patent-paper links.

## Canonical Form

- Unit of analysis: heterogeneous scholarly entities and typed relations.
- Typical representation: multilayer, multiplex, heterogeneous, or property graph.
- Mechanism or measurement target: coupled production, funding, collaboration, knowledge flow, and translation.
- Empirical signature: cross-layer paths reveal mechanisms that single-layer citation or coauthorship graphs miss.

## Uses in Science of Science

- Used to connect publications to patents, grants, authors, institutions, and topics.
- Supports translational science, funding effects, mobility, and institutional-stratification analyses.
- Provides the natural representation for SciSciNet, OpenAlex, Dimensions, and local linked datasets.
- Specializes the broader [science as a multiscale network](science_as_multiscale_network.md) representation into typed, layer-aware scholarly data structures.
- Builds on [scholarly entity graphs](scholarly_entity_graphs.md) and can include [research-object context graphs](research_object_context_graphs.md) as ego-level or layer-level subgraphs.
- Can be encoded as [multilayer adjacency tensors](multilayer_adjacency_tensors.md), unfolded into [supra-adjacency matrices](supra_adjacency_matrices.md), or reduced through [multilayer projection and overlay networks](multilayer_projection_overlay_networks.md).
- Supports layer-aware measures such as [multilayer degree centrality](../measures/multilayer_degree_centrality.md), [multilayer clustering coefficients](../measures/multilayer_clustering_coefficients.md), [multilayer eigenvector centrality](../measures/multilayer_eigenvector_centrality.md), and [multilayer modularity](../measures/multilayer_modularity.md), plus process models such as [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md).
- Requires explicit [node-layer participation mask](node_layer_participation_mask.md) and [interlayer switching costs](../measures/interlayer_switching_costs.md) when scholarly entities are absent from some layers or costly to traverse across layers.
- Uses [counterpart-node coupling](counterpart_node_coupling.md) when the same scholarly entity appears as a node-copy in several layers.
- Uses [node-layer state vectors](node_layer_state_vectors.md) when the same scholarly entity has different states across relation layers, and [node-layer index notation](node_layer_index_notation.md) when tensor schemas are converted to edge-list or table formats.
- Can expose [multiplexity-induced correlations](../mechanisms/multiplexity_induced_correlations.md) that disappear under single-layer or overlay reductions.

- A residual De Domenico pass adds [multiplex-interdependent boundary](../validations/multiplex_interdependent_boundary.md), [directed tensor index roles](directed_tensor_index_roles.md), [tensor contraction invariants](../methods/tensor_contraction_invariants.md), [supra-unfolding permutation convention](../validations/supra_unfolding_permutation_convention.md), [layer-span cycle decomposition](../measures/layer_span_cycle_decomposition.md), [process-matched layer-crossing weights](../methods/process_matched_layer_crossing_weights.md), [potential-edge denominator masking](../validations/potential_edge_denominator_masking.md), [multilayer null-tensor choice audit](../validations/multilayer_null_tensor_choice_audit.md), [layer-specific centrality divergence](../measures/layer_specific_centrality_divergence.md), [interlayer presence bonus](../measures/interlayer_presence_bonus.md), [higher-rank multiplex-temporal extension](higher_rank_multiplex_temporal_extension.md), and [multichannel scholarly influence attribution](../methods/multichannel_scholarly_influence_attribution.md).
## Operationalization

- Inputs: entity-resolved publication, author, affiliation, funder, grant, patent, topic, and citation tables.
- Measures: cross-layer centrality, metapaths, link prediction, community detection, multiplex assortativity.
- Common model forms: heterogeneous graph embeddings, graph neural networks, metapath analysis, and multilayer community detection.
- Explicitly define [intralayer and interlayer adjacency](intralayer_interlayer_adjacency.md), layer-level aggregation rules, and any projection or overlay before calculating metrics.
- Record node-layer availability and interlayer weights separately from observed edges so missing layers are not confused with zero-weight ties.
- Audit [interlayer coupling completeness assumption](../validations/interlayer_coupling_completeness_assumption.md), [multilayer structural constraint mask](../validations/multilayer_structural_constraint_mask.md), and [layer-collapse normalization risk](../validations/layer_collapse_normalization_risk.md) before comparing layer-aware metrics across scholarly datasets.

## Evidence and Validations

- General multilayer network formalism comes from network science; science-of-science datasets increasingly expose typed scholarly graphs.
- Verified full-text evidence from De Domenico et al. (2013) formalizes multilayer networks with tensor notation, intralayer adjacency, and interlayer adjacency, giving the mathematical substrate for multiplex scholarly graphs that combine citation, collaboration, funding, patent, topic, and institutional layers.
- The same paper also supports finer representation motifs: multilayer adjacency tensors, intralayer and interlayer adjacency, supra-adjacency matrices, projection and overlay networks, and layer networks.
- De Domenico et al. also formalize multilayer versions of degree centrality, clustering coefficients, eigenvector centrality, modularity, diffusion, and random walks, making these representations directly measurable rather than only descriptive.
- The same full text supports treating node-layer availability, interlayer switching weights, multilayer entropy, and multiplexity-induced correlations as separate motifs that affect how multiplex scholarly graphs should be interpreted.
- Additional De Domenico evidence shows why node-layer state semantics, index notation, complete-coupling assumptions, structural masks, and layer-collapse normalization risks should be explicit before applying multilayer methods to scholarly data lakes.
- Verified full-text evidence from Lin et al. (2023) then shows why this representation is useful in science-of-science data: SciSciNet-v2 links papers to citations, authors, fields, institutions, patents, and grants.
- The same evidence supports treating [paper-author-affiliation linkages](paper_author_affiliation_linkages.md), [paper-field linkages](paper_field_linkages.md), and [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md) as typed layers in a multiplex scholarly graph.
- Verified full-text evidence from Fortunato et al. (2018) provides the top-level SciSci framing: science can be modeled as a constantly evolving multiscale network of scholars, institutions, ideas, artifacts, and information flows.

## Caveats

- Entity resolution dominates error budgets.
- Combining proprietary and open datasets requires careful provenance and licensing.

## Links

- [sciscinet v2](../datasets/sciscinet_v2.md)
- [science as a multiscale network](science_as_multiscale_network.md)
- [science of science framework](../methods/science_of_science_framework.md)
- [scholarly data lakes](../datasets/scholarly_data_lakes.md)
- [scholarly entity graphs](scholarly_entity_graphs.md)
- [research-object context graphs](research_object_context_graphs.md)
- [multilayer adjacency tensors](multilayer_adjacency_tensors.md)
- [intralayer and interlayer adjacency](intralayer_interlayer_adjacency.md)
- [node-layer participation mask](node_layer_participation_mask.md)
- [node-layer state vectors](node_layer_state_vectors.md)
- [node-layer index notation](node_layer_index_notation.md)
- [counterpart-node coupling](counterpart_node_coupling.md)
- [ordinal interlayer coupling](ordinal_interlayer_coupling.md)
- [interlayer switching costs](../measures/interlayer_switching_costs.md)
- [supra-adjacency matrices](supra_adjacency_matrices.md)
- [multilayer projection and overlay networks](multilayer_projection_overlay_networks.md)
- [layer networks](layer_networks.md)
- [multilayer degree centrality](../measures/multilayer_degree_centrality.md)
- [multilayer clustering coefficients](../measures/multilayer_clustering_coefficients.md)
- [multilayer eigenvector centrality](../measures/multilayer_eigenvector_centrality.md)
- [multilayer modularity](../measures/multilayer_modularity.md)
- [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md)
- [multilayer von Neumann entropy](../measures/multilayer_von_neumann_entropy.md)
- [multiplexity-induced correlations](../mechanisms/multiplexity_induced_correlations.md)
- [monoplex reduction consistency check](../validations/monoplex_reduction_consistency_check.md)
- [interlayer coupling completeness assumption](../validations/interlayer_coupling_completeness_assumption.md)
- [multilayer structural constraint mask](../validations/multilayer_structural_constraint_mask.md)
- [layer-collapse normalization risk](../validations/layer_collapse_normalization_risk.md)
- [scholarly identifier spine](scholarly_identifier_spine.md)
- [paper-author-affiliation linkages](paper_author_affiliation_linkages.md)
- [paper-field linkages](paper_field_linkages.md)
- [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md)
- [openalex](../datasets/openalex.md)
- [dimensions](../datasets/dimensions.md)
- [patent paper links](../datasets/patent_paper_links.md)
- [integrated patent-paper citation networks](integrated_patent_paper_citation_networks.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [citation networks](../representations/citation_networks.md)

- [multiplex-interdependent boundary](../validations/multiplex_interdependent_boundary.md)
- [potential-edge denominator masking](../validations/potential_edge_denominator_masking.md)
- [layer-specific centrality divergence](../measures/layer_specific_centrality_divergence.md)
## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]
- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]

## Metadata

- Concept ID: `multiplex_scholarly_graphs`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Aliases: heterogeneous scholarly graph; multilayer graph; knowledge graph
