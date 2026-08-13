# Multilayer clustering coefficients

## Summary

Multilayer clustering coefficients measure transitivity across layered scholarly graphs, including triangles that are completed through more than one relation type.

## Canonical Form

- Unit of analysis: node, node-layer tuple, field, institution, author community, or multilayer graph.
- Typical representation: tensor-based three-cycle count, layer-aware transitivity, or clustering coefficient on a projected or overlay network.
- Mechanism or measurement target: cross-layer closure, redundant scholarly relations, and multiplex community cohesion.
- Empirical signature: a closed triple may require several layers, such as two authors connected through coauthorship and affiliation layers even when no single layer contains the full triangle.

## Uses in Science of Science

- Generalizes [collaboration clustering coefficient](collaboration_clustering_coefficient.md) beyond coauthorship-only graphs.
- Measures closure in [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md), where citation, coauthorship, institutional, topical, grant, and patent layers can jointly form closed structures.
- Helps distinguish single-layer social closure from multiplex closure across knowledge, funding, institutional, and translation channels.
- Provides one observable form of [multiplexity-induced correlations](../mechanisms/multiplexity_induced_correlations.md), because triangles can close through layer coupling rather than one layer alone.
- Supports audits of whether [multilayer projection and overlay networks](../representations/multilayer_projection_overlay_networks.md) preserve or distort local closure.

## Operationalization

- Define node-layer tuples and permitted intralayer and interlayer walks.
- Count three-cycles or closed triples using a [multilayer adjacency tensor](../representations/multilayer_adjacency_tensors.md), or compute a documented approximation on a [supra-adjacency matrix](../representations/supra_adjacency_matrices.md).
- Report whether the coefficient includes interlayer three-cycles, intralayer-only triangles, or triangles after projection.
- Compare against null models that preserve layer densities, team sizes, or node-layer participation.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) states that defining clustering in multilayer networks is nontrivial because transitivity can arise through multiplexity even when no single layer contains a closed triple.
- The paper defines a global clustering coefficient on a multilayer adjacency tensor and explains that tensor contractions count three-cycles using combinations of interlayer and intralayer connections.
- This validates a science-of-science use case where closure can span coauthorship, affiliation, topic, citation, funding, and patent layers rather than appearing within a single relation type.

## Caveats

- Layer coupling choices can create or remove apparent closure.
- Large teams, dense institutions, or highly popular topics can inflate clustering-like signals.
- Projection can make cross-layer closure look like ordinary single-layer closure unless the source layers are retained.

## Links

- [collaboration clustering coefficient](collaboration_clustering_coefficient.md)
- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md)
- [intralayer and interlayer adjacency](../representations/intralayer_interlayer_adjacency.md)
- [node-layer participation mask](../representations/node_layer_participation_mask.md)
- [multiplexity-induced correlations](../mechanisms/multiplexity_induced_correlations.md)
- [supra-adjacency matrices](../representations/supra_adjacency_matrices.md)
- [multilayer projection and overlay networks](../representations/multilayer_projection_overlay_networks.md)
- [triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md)
- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `multilayer_clustering_coefficients`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: multilayer transitivity; multiplex clustering; cross-layer clustering coefficient; tensor clustering coefficient
