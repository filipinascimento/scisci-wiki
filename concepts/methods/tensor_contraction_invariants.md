# Tensor contraction invariants

## Summary

Tensor contractions derive reproducible aggregate network quantities that can be used as invariant checks before fitting multilayer diagnostics.

## Canonical Form

- Unit of analysis: multilayer tensor, contracted index, node total, edge total, layer-pair total, or aggregate diagnostic.
- Typical representation: index-contraction recipe with recorded contracted axes and resulting totals.
- Mechanism, measurement, or validation target: reproducible aggregate checks for multilayer network extraction and reduction.
- Empirical signature: contracted totals match independently computed node, edge, layer, and layer-pair counts across extraction or projection steps.

## Uses in Science of Science

- Connects multilayer data quality assurance to [multilayer layer extraction operator](multilayer_layer_extraction_operator.md) and [node layer index notation](../representations/node_layer_index_notation.md).
- Provides a reusable motif for comparing [multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [layer networks](../representations/layer_networks.md) in linked scholarly data.

## Operationalization

- Compute node, edge, layer, and layer-pair totals by tensor contraction after constructing a multilayer representation.
- Store which indices were contracted and which structural masks were applied.
- Use contracted totals as QA checks when moving from tensors to edge lists, projections, overlays, or supra matrices.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) introduces contraction as a way to obtain invariant quantities and network descriptors.
- The same framework uses contractions for layer extraction and reductions, making it useful for data-pipeline validation.

## Caveats

- Apparent invariance depends on how weights, missing tuples, self-loops, and forbidden edges are represented.
- Contractions can hide layer-specific anomalies if only global totals are inspected.

## Links

- [Multilayer layer extraction operator](multilayer_layer_extraction_operator.md)
- [Node-layer index notation](../representations/node_layer_index_notation.md)
- [Multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md)
- [Layer networks](../representations/layer_networks.md)
- [Multilayer projection and overlay networks](../representations/multilayer_projection_overlay_networks.md)
- [Multilayer structural constraint mask](../validations/multilayer_structural_constraint_mask.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `tensor_contraction_invariants`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/physrevx.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: contraction QA totals; tensor aggregate invariants; contracted network statistics; index-contraction checks
