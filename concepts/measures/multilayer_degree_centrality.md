# Multilayer degree centrality

## Summary

Multilayer degree centrality counts how connected a scholarly entity is across layers, preserving whether ties come from citations, coauthorship, funding, affiliation, topics, patents, or other relation types.

## Canonical Form

- Unit of analysis: node, node-layer tuple, author, paper, institution, grant, patent, topic, or dataset.
- Typical representation: degree vector over a multilayer adjacency tensor, layer-pair degree components, or layer-aware strength vector.
- Mechanism or measurement target: cross-layer exposure, multi-channel embeddedness, and layer-specific visibility.
- Empirical signature: an entity can be central because it is active in many layers, because one layer dominates, or because interlayer ties amplify otherwise local connectivity.

## Uses in Science of Science

- Extends simple collaborator counts, citation counts, and affiliation counts to [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md).
- Helps compare entities in [scholarly entity graphs](../representations/scholarly_entity_graphs.md) without immediately collapsing typed relations.
- Supports layer-aware audits of whether a scientist, institution, topic, or paper is central through [citation networks](../representations/citation_networks.md), [coauthorship networks](../representations/coauthorship_networks.md), grants, patents, or affiliations.
- Connects naturally to [multilayer projection and overlay networks](../representations/multilayer_projection_overlay_networks.md) when analysts need a single-layer baseline.

## Operationalization

- Define node sets, layer sets, allowed [intralayer and interlayer adjacency](../representations/intralayer_interlayer_adjacency.md), edge direction, and edge weights.
- Compute degree or strength on the [multilayer adjacency tensor](../representations/multilayer_adjacency_tensors.md), keeping layer-pair components when interpretation requires them.
- Compare the result with projected and overlay-network degree to quantify how much layer collapse changes centrality.
- Report whether degree includes only intralayer ties, includes counterpart-node interlayer ties, or includes all typed edges.
- Apply [node-layer participation mask](../representations/node_layer_participation_mask.md) before comparing degree across entities with different layer availability.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) generalizes ordinary degree centrality to multilayer networks using tensor contractions over a multilayer adjacency tensor.
- The paper defines a multidegree vector and states that even in multiplex networks this vector differs from the degree vector obtained by simply projecting all layers into one weighted network.
- The same text distinguishes degree, strength, directed in-degree, and directed out-degree through tensor index choices, which matters for directed scholarly relations such as citations and funding flows.
- For science-of-science datasets, this supports reporting layer-aware degree before flattening citation, collaboration, topic, institution, grant, and patent relations.

## Caveats

- Multilayer degree is sensitive to which layers are included and how interlayer ties are weighted.
- Counterpart-node coupling can inflate degree for entities present in many layers.
- A high multidegree score indicates connectivity, not necessarily causal influence or research quality.

## Links

- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md)
- [intralayer and interlayer adjacency](../representations/intralayer_interlayer_adjacency.md)
- [node-layer participation mask](../representations/node_layer_participation_mask.md)
- [supra-adjacency matrices](../representations/supra_adjacency_matrices.md)
- [multilayer projection and overlay networks](../representations/multilayer_projection_overlay_networks.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [citation networks](../representations/citation_networks.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [collaboration giant component](collaboration_giant_component.md)
- [citation impact indicators](citation_impact_indicators.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `multilayer_degree_centrality`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: multidegree centrality; multilayer strength centrality; layer-aware degree; cross-layer degree
