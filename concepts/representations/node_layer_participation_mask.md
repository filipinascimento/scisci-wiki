# Node-layer participation mask

## Summary

Node-layer participation mask records which entities are present in which layers of a multilayer or multiplex network, distinguishing true absence from an observed zero-weight tie.

## Canonical Form

- Unit of analysis: entity, layer, node-layer tuple, multiplex network, or data-source layer.
- Typical representation: binary node-by-layer availability matrix, node-layer mask, missing-layer indicator, or active-layer vector.
- Representation target: prevent diagnostics from treating non-existent node-layer states as ordinary disconnected nodes.
- Empirical signature: a paper, author, institution, grant, patent, or dataset is represented in some scholarly layers but not others.

## Uses in Science of Science

- Makes [multiplex scholarly graphs](multiplex_scholarly_graphs.md) explicit about which entities exist in citation, coauthorship, funding, patent, topic, affiliation, and dataset layers.
- Guards [multilayer adjacency tensors](multilayer_adjacency_tensors.md) and [intralayer and interlayer adjacency](intralayer_interlayer_adjacency.md) against silently conflating missing node-layer tuples with observed zero edges.
- Supports coverage audits for [OpenAlex](../datasets/openalex.md), [Dimensions](../datasets/dimensions.md), and older [SciSciNet-v2](../datasets/sciscinet_v2.md) snapshots when some relations are absent or stale.
- Helps interpret [multilayer degree centrality](../measures/multilayer_degree_centrality.md), [multilayer clustering coefficients](../measures/multilayer_clustering_coefficients.md), and [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md).

## Operationalization

- Define the layer universe and the set of entities eligible for each layer.
- Create a binary or weighted mask for whether each entity has a valid node-layer tuple.
- Store observed zero edges separately from structurally absent node-layer tuples.
- Apply the mask before creating [counterpart-node coupling](counterpart_node_coupling.md) edges so absent layer copies are not connected by construction.
- Apply the mask before computing centrality, clustering, diffusion, community detection, or projection.
- Report whether missing layer participation reflects real absence, data coverage, source staleness, or entity-resolution failure.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) states that entities in many systems have connections in some layers but not in others.
- The paper gives examples where a social-media user may be present on one platform but not another, and a transportation station may not exist in a layer.
- De Domenico et al. note that the algebra can handle such cases by assigning zero to associated edges, but the interpretation of network diagnostics then requires care.
- In science-of-science data, the same issue arises when papers lack grants, patents, datasets, author identifiers, fields, or open citation links.

## Caveats

- A mask can encode data availability rather than substantive absence.
- Treating unobserved links as structurally absent can bias cross-layer centrality and diffusion.
- Masks should be versioned when source snapshots differ, especially for stale historical datasets.

## Links

- [multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [multilayer adjacency tensors](multilayer_adjacency_tensors.md)
- [intralayer and interlayer adjacency](intralayer_interlayer_adjacency.md)
- [counterpart-node coupling](counterpart_node_coupling.md)
- [ordinal interlayer coupling](ordinal_interlayer_coupling.md)
- [supra-adjacency matrices](supra_adjacency_matrices.md)
- [multilayer projection and overlay networks](multilayer_projection_overlay_networks.md)
- [multilayer degree centrality](../measures/multilayer_degree_centrality.md)
- [multilayer clustering coefficients](../measures/multilayer_clustering_coefficients.md)
- [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md)
- [openalex](../datasets/openalex.md)
- [dimensions](../datasets/dimensions.md)
- [sciscinet v2](../datasets/sciscinet_v2.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `node_layer_participation_mask`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: node-layer availability; active-layer mask; layer participation matrix; missing node-layer tuple mask
