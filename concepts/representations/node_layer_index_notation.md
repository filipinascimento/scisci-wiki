# Node-layer index notation

## Summary

Node-layer index notation keeps node labels, node-component indices, layer labels, and layer-component indices distinct in tensor schemas for multilayer networks.

## Canonical Form

- Unit of analysis: node label, layer label, tensor component, node-layer tuple, or edge index.
- Typical representation: indexed tensor convention with separate symbols or fields for node axes and layer axes.
- Representation target: prevent implementation errors when converting multilayer tensors into edge lists, matrices, or data tables.
- Empirical signature: source node, target node, source layer, and target layer are separately represented in every multilayer edge record.

## Uses in Science of Science

- Provides a data-layout guardrail for [multilayer adjacency tensors](multilayer_adjacency_tensors.md) and [supra-adjacency matrices](supra_adjacency_matrices.md).
- Supports [intralayer and interlayer adjacency](intralayer_interlayer_adjacency.md), [node-layer participation mask](node_layer_participation_mask.md), and [monoplex reduction consistency check](../validations/monoplex_reduction_consistency_check.md).
- Helps translate formal network notation into parquet schemas, graph edge lists, and workflow manifests for scholarly multiplex graphs.

## Operationalization

- Store `source_node`, `target_node`, `source_layer`, and `target_layer` as distinct fields.
- Keep node identifiers separate from layer identifiers even when both are integers.
- Preserve direction and weight fields separately from index fields.
- Validate that unfolding, projection, or matrix construction does not swap node and layer axes.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) separates labels for vectors or tensors from component indices.
- The paper introduces layer-basis vectors and uses a distinct notation to separate layer indices from node indices.
- De Domenico et al. define multilayer edge weights by source node, target node, source layer, and target layer.

## Caveats

- A compact tensor notation can hide schema mistakes when implemented as tables.
- Reusing the same integer namespace for nodes and layers can silently corrupt joins or matrix construction.
- Projection and unfolding steps should record the index convention they use.

## Links

- [multilayer adjacency tensors](multilayer_adjacency_tensors.md)
- [intralayer and interlayer adjacency](intralayer_interlayer_adjacency.md)
- [supra-adjacency matrices](supra_adjacency_matrices.md)
- [node-layer participation mask](node_layer_participation_mask.md)
- [monoplex reduction consistency check](../validations/monoplex_reduction_consistency_check.md)
- [multiplex scholarly graphs](multiplex_scholarly_graphs.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `node_layer_index_notation`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: node-layer tensor schema; multilayer index convention; source-target-layer indexing; layer-axis notation
