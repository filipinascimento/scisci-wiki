# Counterpart-node coupling

## Summary

Counterpart-node coupling represents the interlayer connection between the same entity's copies across layers in a multiplex network.

## Canonical Form

- Unit of analysis: node, node-layer tuple, layer pair, interlayer edge, or multiplex network.
- Typical representation: diagonal interlayer adjacency, identity coupling, counterpart edge, or node-specific layer-switching weight.
- Representation target: distinguish identity-preserving layer changes from general cross-layer edges between different entities.
- Empirical signature: an author, paper, institution, or topic appears in multiple relation layers and can be connected to its own layer-specific copies.

## Uses in Science of Science

- Specializes [intralayer and interlayer adjacency](intralayer_interlayer_adjacency.md) for multiplex scholarly graphs with the same entity set repeated across layers.
- Supports [node-layer participation mask](node_layer_participation_mask.md) because not every scholarly entity has a counterpart in every layer.
- Provides the representation substrate for [interlayer switching costs](../measures/interlayer_switching_costs.md), [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md), and [multilayer eigenvector centrality](../measures/multilayer_eigenvector_centrality.md).
- Helps separate multiplex identity coupling from heterogeneous entity relations in [scholarly entity graphs](scholarly_entity_graphs.md).

## Operationalization

- Define the layer set and the entity identities eligible to appear in multiple layers.
- Create a node-layer tuple for each valid entity-layer participation state.
- Add interlayer edges only between counterpart tuples of the same entity unless the model intentionally allows general cross-entity interlayer ties.
- Store counterpart edge weights by layer pair and, where needed, by entity.
- Keep missing counterparts separate from zero-weight coupling with a node-layer mask.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) defines multiplex networks as a special multilayer case in which interlayer connections link a node to its counterpart nodes in other layers.
- The paper states that the interlayer adjacency tensor is diagonal for multiplex networks.
- De Domenico et al. emphasize that interlayer connections need not exist between all pairs of layers and that entities can possess only a subset of available connection categories.
- They also note that counterpart-coupling weights can differ across layer pairs and across entities, as in switching costs between transportation modes.

## Caveats

- Counterpart coupling assumes a stable cross-layer identity; entity-resolution errors can create false identity edges.
- A heterogeneous graph edge such as paper-to-author is not automatically counterpart coupling because it connects different entity types.
- Treating all counterpart edges as equal can hide source reliability, transition cost, or relation confidence differences.

## Links

- [intralayer and interlayer adjacency](intralayer_interlayer_adjacency.md)
- [node-layer participation mask](node_layer_participation_mask.md)
- [interlayer switching costs](../measures/interlayer_switching_costs.md)
- [multilayer adjacency tensors](multilayer_adjacency_tensors.md)
- [multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [ordinal interlayer coupling](ordinal_interlayer_coupling.md)
- [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md)
- [multilayer eigenvector centrality](../measures/multilayer_eigenvector_centrality.md)
- [scholarly entity graphs](scholarly_entity_graphs.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `counterpart_node_coupling`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: counterpart interlayer edges; identity coupling; diagonal interlayer adjacency; node-copy coupling
