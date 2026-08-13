# Node-layer state vectors

## Summary

Node-layer state vectors represent one substantive entity as a vector of states across layers, separating the entity from its node-layer copies.

## Canonical Form

- Unit of analysis: entity, layer, node-layer copy, state component, or self-interaction.
- Typical representation: vector of layer-specific states for each node in a multiplex or multilayer network.
- Representation target: encode when the same entity can have different status, activity, or availability across relation layers.
- Empirical signature: an author, paper, institution, topic, or technology has layer-specific states rather than one flattened node state.

## Uses in Science of Science

- Adds entity-state semantics to [multiplex scholarly graphs](multiplex_scholarly_graphs.md) and [multilayer adjacency tensors](multilayer_adjacency_tensors.md).
- Complements [node-layer participation mask](node_layer_participation_mask.md) and [counterpart-node coupling](counterpart_node_coupling.md).
- Useful when a paper is active in citation, policy, patent, and social-attention layers at different times or intensities.
- Supports layer-aware diffusion, centrality, and recommendation models over scholarly graphs.

## Operationalization

- Define the base entity set and the set of layers.
- Store a state vector for each entity, with one component per layer where the entity can be present or active.
- Distinguish missing layer participation from an inactive or zero-valued state.
- Document how state vectors map to node-layer copies and interlayer self-interactions.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) states that multiplex systems can have counterpart nodes in each layer.
- The paper explains that one can associate a vector of states with each node.
- De Domenico et al. use the example of a person logged into one social platform but not another and note that node presence in multiple layers permits self-interactions.

## Caveats

- State-vector semantics should be defined before centrality, clustering, or diffusion measures are computed.
- A zero state, missing state, and structurally impossible state can mean different things.
- Flattening state vectors too early can hide cross-layer heterogeneity.

## Links

- [multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [multilayer adjacency tensors](multilayer_adjacency_tensors.md)
- [node-layer participation mask](node_layer_participation_mask.md)
- [counterpart-node coupling](counterpart_node_coupling.md)
- [intralayer and interlayer adjacency](intralayer_interlayer_adjacency.md)
- [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md)
- [multilayer structural constraint mask](../validations/multilayer_structural_constraint_mask.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `node_layer_state_vectors`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: layer-specific node state; node state vector; multiplex state vector; entity layer-state representation
