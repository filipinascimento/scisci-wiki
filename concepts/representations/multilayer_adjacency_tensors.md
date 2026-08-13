# Multilayer adjacency tensors

## Summary

Multilayer adjacency tensors represent node-to-node relations across multiple layers in one higher-order object, preserving both within-layer and between-layer connectivity.

## Canonical Form

- Unit of analysis: node, layer, node-layer tuple, edge, interlayer tie, or multilayer network.
- Typical representation: fourth-order adjacency tensor, node-layer canonical basis, tensor element indexed by source node, target node, source layer, and target layer.
- Representation target: encode multiplex, temporal, or heterogeneous systems without flattening layer information too early.
- Empirical signature: a scholarly graph has distinct relation layers, such as citations, coauthorship, affiliations, topics, grants, and patents, whose interactions matter.

## Uses in Science of Science

- Provides the formal substrate for [multiplex scholarly graphs](multiplex_scholarly_graphs.md).
- Supports layer-aware versions of [citation networks](citation_networks.md), [coauthorship networks](coauthorship_networks.md), and [scholarly entity graphs](scholarly_entity_graphs.md).
- Supplies a bridge from typed scholarly data to [supra-adjacency matrices](supra_adjacency_matrices.md), [layer networks](layer_networks.md), and [multilayer projection and overlay networks](multilayer_projection_overlay_networks.md).
- Helps keep cross-layer scholarly paths auditable before reducing a graph to embeddings, centralities, communities, diffusion models, or maps.
- Uses [node-layer participation mask](node_layer_participation_mask.md) when entities exist in only a subset of layers.
- Supports [multilayer layer extraction operator](../methods/multilayer_layer_extraction_operator.md) when a single layer or layer-pair block needs separate inspection.

## Operationalization

- Define node set, layer set, node-layer tuples, allowed intralayer edges, and allowed interlayer edges.
- Preserve the index convention with [node-layer index notation](node_layer_index_notation.md), and distinguish layer-specific states through [node-layer state vectors](node_layer_state_vectors.md).
- Decide whether interlayer edges use [counterpart-node coupling](counterpart_node_coupling.md), [ordinal interlayer coupling](ordinal_interlayer_coupling.md), or a more general layer-pair relation.
- Store each edge with source node, target node, source layer, target layer, direction, weight, and timestamp if relevant.
- Use a tensor form when layer identity should remain explicit, and document any later unfolding, projection, or overlay.
- Validate that absent node-layer tuples and missing edges are coded consistently rather than silently collapsed.
- Store interlayer weights such as [interlayer switching costs](../measures/interlayer_switching_costs.md) separately from intralayer edge weights.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) states that ordinary adjacency matrices are insufficient for multiplex and time-dependent networks and introduces a tensorial framework for multilayer networks.
- The paper defines the multilayer adjacency tensor as a general object for complicated relationships among nodes across layers.
- De Domenico et al. build the tensor from interlayer adjacency tensors and canonical tensors, with elements indexing source and target nodes plus source and target layers.
- The paper argues that this representation generalizes ordinary network descriptors and dynamics such as degree, clustering, eigenvector centrality, modularity, entropy, and diffusion.
- De Domenico et al. also caution that entities can be absent from some layers and that interlayer connections can carry different weights, motivating separate node-layer masks and switching-cost measures.
- Further full-text evidence supports [node-layer state vectors](node_layer_state_vectors.md), [node-layer index notation](node_layer_index_notation.md), [interlayer coupling completeness assumption](../validations/interlayer_coupling_completeness_assumption.md), [multilayer structural constraint mask](../validations/multilayer_structural_constraint_mask.md), and [layer-collapse normalization risk](../validations/layer_collapse_normalization_risk.md).
- This makes the tensor a direct substrate for [multilayer degree centrality](../measures/multilayer_degree_centrality.md), [multilayer clustering coefficients](../measures/multilayer_clustering_coefficients.md), [multilayer eigenvector centrality](../measures/multilayer_eigenvector_centrality.md), [multilayer modularity](../measures/multilayer_modularity.md), and [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md).

## Caveats

- Tensor notation is expressive but can be harder to store and compute with than matrices or edge lists.
- Not every heterogeneous scholarly graph needs the full multilayer tensor; simpler bipartite or property-graph representations may be sufficient.
- Projection or flattening choices can change centrality, clustering, and diffusion results.

## Links

- [multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [intralayer and interlayer adjacency](intralayer_interlayer_adjacency.md)
- [node-layer participation mask](node_layer_participation_mask.md)
- [node-layer state vectors](node_layer_state_vectors.md)
- [node-layer index notation](node_layer_index_notation.md)
- [counterpart-node coupling](counterpart_node_coupling.md)
- [ordinal interlayer coupling](ordinal_interlayer_coupling.md)
- [interlayer switching costs](../measures/interlayer_switching_costs.md)
- [multilayer layer extraction operator](../methods/multilayer_layer_extraction_operator.md)
- [supra-adjacency matrices](supra_adjacency_matrices.md)
- [multilayer projection and overlay networks](multilayer_projection_overlay_networks.md)
- [layer networks](layer_networks.md)
- [multilayer degree centrality](../measures/multilayer_degree_centrality.md)
- [multilayer clustering coefficients](../measures/multilayer_clustering_coefficients.md)
- [multilayer eigenvector centrality](../measures/multilayer_eigenvector_centrality.md)
- [multilayer modularity](../measures/multilayer_modularity.md)
- [multilayer von Neumann entropy](../measures/multilayer_von_neumann_entropy.md)
- [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md)
- [monoplex reduction consistency check](../validations/monoplex_reduction_consistency_check.md)
- [interlayer coupling completeness assumption](../validations/interlayer_coupling_completeness_assumption.md)
- [multilayer structural constraint mask](../validations/multilayer_structural_constraint_mask.md)
- [layer-collapse normalization risk](../validations/layer_collapse_normalization_risk.md)
- [citation networks](citation_networks.md)
- [coauthorship networks](coauthorship_networks.md)
- [scholarly entity graphs](scholarly_entity_graphs.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `multilayer_adjacency_tensors`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: multilayer adjacency tensor; tensorial network representation; fourth-order network tensor; node-layer adjacency tensor
