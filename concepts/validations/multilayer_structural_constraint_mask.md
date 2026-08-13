# Multilayer structural constraint mask

## Summary

Multilayer structural constraint mask encodes impossible node-layer tuples or forbidden edges before normalizing multilayer diagnostics.

## Canonical Form

- Unit of analysis: node-layer tuple, potential edge, forbidden edge, structural constraint, or normalization denominator.
- Typical representation: binary mask over possible intralayer and interlayer edges.
- Validation target: ensure multilayer measures normalize over possible edges rather than over edges that are structurally impossible.
- Empirical signature: clustering, walks, or centrality denominators change when impossible edges or absent nodes are masked out.

## Uses in Science of Science

- Extends [node-layer participation mask](../representations/node_layer_participation_mask.md) from node availability to possible-edge constraints.
- Qualifies [multilayer clustering coefficients](../measures/multilayer_clustering_coefficients.md), [multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md), and [intralayer and interlayer adjacency](../representations/intralayer_interlayer_adjacency.md).
- Useful when scholarly layers have different entity domains, such as paper-paper citation edges, author-author collaboration edges, and paper-patent links.

## Operationalization

- Define which node-layer tuples can exist.
- Define which intralayer and interlayer edge types can exist.
- Encode forbidden possibilities separately from missing observed edges.
- Use the mask in denominator calculations for clustering, walks, projection, and centrality.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) states that some off-diagonal entries should be set to zero when a multilayer network cannot have a particular edge.
- The paper gives examples where structural constraints forbid nodes in certain layers or forbid certain interlayer and intralayer edges.
- De Domenico et al. note that using the constraint tensor changes the normalization of clustering coefficients by changing the set of possible three-cycles.

## Caveats

- Treating impossible edges as ordinary absent edges can bias density, clustering, and walk counts downward.
- Structural constraints must be updated when layer definitions or entity domains change.
- A mask can improve validity while making comparisons across differently defined multilayer graphs harder.

## Links

- [node-layer participation mask](../representations/node_layer_participation_mask.md)
- [multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md)
- [intralayer and interlayer adjacency](../representations/intralayer_interlayer_adjacency.md)
- [counterpart-node coupling](../representations/counterpart_node_coupling.md)
- [multilayer clustering coefficients](../measures/multilayer_clustering_coefficients.md)
- [interlayer coupling completeness assumption](interlayer_coupling_completeness_assumption.md)
- [layer-collapse normalization risk](layer_collapse_normalization_risk.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `multilayer_structural_constraint_mask`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: multilayer edge possibility mask; structural constraint tensor; forbidden edge mask; multilayer denominator mask
