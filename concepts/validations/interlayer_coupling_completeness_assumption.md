# Interlayer coupling completeness assumption

## Summary

Interlayer coupling completeness assumption is the often-implicit choice to connect every counterpart node across every pair of layers in a multiplex network.

## Canonical Form

- Unit of analysis: node, layer pair, counterpart edge, interlayer weight, or multiplex network.
- Typical representation: complete counterpart coupling matrix, sparse interlayer coupling matrix, or entity-specific coupling rule.
- Validation target: check whether all-pairs counterpart coupling is justified or whether missing, weighted, or entity-specific couplings are needed.
- Empirical signature: a multiplex model assumes every entity can traverse every pair of layers unless the analyst explicitly masks or weights those transitions.

## Uses in Science of Science

- Qualifies [counterpart-node coupling](../representations/counterpart_node_coupling.md) in [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md).
- Connects to [interlayer switching costs](../measures/interlayer_switching_costs.md), [ordinal interlayer coupling](../representations/ordinal_interlayer_coupling.md), and [node-layer participation mask](../representations/node_layer_participation_mask.md).
- Helps avoid unrealistic cross-layer paths among citations, authorship, funding, patent, policy, social-media, and institutional layers.

## Operationalization

- List allowed layer-pair transitions before building a supra-adjacency matrix or tensor.
- Decide whether counterpart couplings are complete, sparse, weighted, directed, or entity-specific.
- Encode impossible transitions with a structural mask rather than with ordinary missing edges.
- Run sensitivity analyses over coupling assumptions when cross-layer centralities or diffusion results matter.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) says many multiplex studies assume interlayer connections between counterpart nodes in all pairs of layers.
- The paper explicitly states that this assumption need not hold.
- De Domenico et al. add that interlayer connections can have different weights for different layer pairs and can differ across entities.

## Caveats

- Complete coupling can create artificial paths between layers that should not be directly traversable.
- Sparse coupling can understate cross-layer integration if meaningful transitions are omitted.
- Coupling assumptions affect centrality, clustering, diffusion, and community detection.

## Links

- [counterpart-node coupling](../representations/counterpart_node_coupling.md)
- [ordinal interlayer coupling](../representations/ordinal_interlayer_coupling.md)
- [node-layer participation mask](../representations/node_layer_participation_mask.md)
- [interlayer switching costs](../measures/interlayer_switching_costs.md)
- [intralayer and interlayer adjacency](../representations/intralayer_interlayer_adjacency.md)
- [supra-adjacency matrices](../representations/supra_adjacency_matrices.md)
- [multilayer structural constraint mask](multilayer_structural_constraint_mask.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `interlayer_coupling_completeness_assumption`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: complete counterpart coupling assumption; all-layer interlayer coupling; multiplex coupling completeness; sparse interlayer coupling audit
