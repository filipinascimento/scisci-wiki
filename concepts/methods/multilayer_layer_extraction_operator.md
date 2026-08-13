# Multilayer layer extraction operator

## Summary

Multilayer layer extraction operator selects a specific layer or layer-pair block from a multilayer adjacency tensor so it can be inspected, compared, or analyzed separately.

## Canonical Form

- Unit of analysis: layer, layer pair, adjacency tensor, intralayer block, interlayer block, or node-layer tuple set.
- Typical representation: canonical tensor projection, selected layer adjacency matrix, selected interlayer coupling block, or layer-specific subgraph.
- Method target: recover interpretable layer-level components from a layer-preserving representation.
- Empirical signature: a multiplex scholarly graph can expose its citation layer, coauthorship layer, funding layer, or a specific cross-layer coupling for audit.

## Uses in Science of Science

- Provides the extraction counterpart to [multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md).
- Supports audits of [intralayer and interlayer adjacency](../representations/intralayer_interlayer_adjacency.md), [counterpart-node coupling](../representations/counterpart_node_coupling.md), and [layer networks](../representations/layer_networks.md).
- Helps compare single relation layers before aggregating them into [multilayer projection and overlay networks](../representations/multilayer_projection_overlay_networks.md).
- Provides implementation support for layer-specific centrality, clustering, diffusion, and data-quality checks in [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md).

## Operationalization

- Define a stable layer ordering and tensor indexing convention.
- Select one layer by projecting the multilayer tensor onto that layer's canonical tensor.
- Select a layer pair by extracting the corresponding interlayer adjacency block.
- Use extracted blocks to compute diagnostics, compare coupling strength, or validate layer-specific data coverage.
- Record the extraction rule so downstream single-layer files can be traced back to the original multilayer representation.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) describes algebraic operations for extracting useful information from an adjacency tensor before computing multilayer descriptors.
- The paper defines single-layer extraction as projecting the multilayer tensor onto a canonical tensor for the selected layer.
- De Domenico et al. state that analogous procedures can extract tensors describing interlayer relationships between pairs of layers.
- They note that such extraction can be used to compare coupling strengths between layers and to support later calculations such as multilayer clustering coefficients.

## Caveats

- Extracting a layer can remove cross-layer context that drives centrality, diffusion, or community structure.
- Layer extraction depends on a correct layer index convention; reordered layers can produce wrong blocks if metadata are missing.
- A layer-specific diagnostic is not a substitute for testing the full multilayer graph when interlayer coupling matters.

## Links

- [multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md)
- [intralayer and interlayer adjacency](../representations/intralayer_interlayer_adjacency.md)
- [counterpart-node coupling](../representations/counterpart_node_coupling.md)
- [layer networks](../representations/layer_networks.md)
- [multilayer projection and overlay networks](../representations/multilayer_projection_overlay_networks.md)
- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [multilayer clustering coefficients](../measures/multilayer_clustering_coefficients.md)
- [science map overlays](../representations/science_map_overlays.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `multilayer_layer_extraction_operator`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: layer extraction; canonical layer projection; layer-pair block extraction; tensor layer selector
