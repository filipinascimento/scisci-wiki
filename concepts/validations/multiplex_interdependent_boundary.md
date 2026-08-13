# Multiplex-interdependent boundary

## Summary

Multiplex scholarly graphs should be distinguished from interdependent or network-of-networks models by checking whether node counterparts and layer-state vectors are well defined.

## Canonical Form

- Unit of analysis: node-layer pair, scholarly entity, layer, counterpart relation, or cross-network dependency.
- Typical representation: boundary audit separating identity-coupled multiplex layers from coupled but non-counterpart networks.
- Mechanism, measurement, or validation target: valid scope for multiplex modeling in scholarly data.
- Empirical signature: the same entity has traceable node copies across layers; otherwise the model is an interdependent or heterogeneous network rather than a strict multiplex.

## Uses in Science of Science

- Connects multilayer representation validity to [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md) and [counterpart node coupling](../representations/counterpart_node_coupling.md).
- Provides a reusable motif for comparing [node layer state vectors](../representations/node_layer_state_vectors.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [intralayer interlayer adjacency](../representations/intralayer_interlayer_adjacency.md) in linked scholarly data.

## Operationalization

- List the entities in each layer and test whether a node in one layer has a counterpart in every other layer being coupled.
- Record identity/self-couplings separately from cross-entity or cross-population dependencies.
- Flag mixed designs where some layers are multiplex counterparts and others are interdependent external systems.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) distinguishes multiplex networks from interdependent networks by requiring node counterparts, state vectors, and cross-layer self-interactions.
- The distinction is directly relevant when combining citation, coauthorship, patent, grant, field, and institutional layers in scholarly graphs.

## Caveats

- Some science-of-science graphs intentionally mix counterpart layers with non-counterpart entity layers.
- The boundary is a modeling validation step, not a claim that one representation is always preferable.

## Links

- [Multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [Counterpart-node coupling](../representations/counterpart_node_coupling.md)
- [Node-layer state vectors](../representations/node_layer_state_vectors.md)
- [Intralayer and interlayer adjacency](../representations/intralayer_interlayer_adjacency.md)
- [Interlayer coupling completeness assumption](interlayer_coupling_completeness_assumption.md)
- [Multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `multiplex_interdependent_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/physrevx.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: multiplex versus interdependent networks; multiplex boundary audit; counterpart-state boundary; identity-coupled layer boundary
