# Multilayer projection and overlay networks

## Summary

Multilayer projection and overlay networks reduce a multilayer network to a monoplex graph, either by including interlayer contributions or by aggregating only within-layer edges.

## Canonical Form

- Unit of analysis: multilayer graph, layer set, node, projected monoplex edge, overlay monoplex edge, or aggregation rule.
- Typical representation: single-layer extraction, projected network, overlay network, aggregated weighted graph, or layer-collapsed adjacency matrix.
- Representation target: compare layer-aware graph results with reduced single-layer summaries.
- Empirical signature: a projected graph differs from an overlay graph when interlayer connections contribute non-negligibly.

## Uses in Science of Science

- Supports reduced views of [multiplex scholarly graphs](multiplex_scholarly_graphs.md) for plotting, mapping, or downstream algorithms.
- Clarifies when [coauthorship networks](coauthorship_networks.md), [citation networks](citation_networks.md), and [science maps](science_maps.md) are layer-collapsed views.
- Adds a bridge between [multilayer adjacency tensors](multilayer_adjacency_tensors.md) and [science map overlays](science_map_overlays.md).
- Helps document whether a scholarly graph analysis preserved or discarded cross-layer links.
- Provides the main baseline for testing whether [multiplexity-induced correlations](../mechanisms/multiplexity_induced_correlations.md) survive or disappear after layer collapse.

## Operationalization

- Decide whether the goal is to extract one layer, project all layers including interlayer connections, or overlay within-layer edges only.
- Use [multilayer layer extraction operator](../methods/multilayer_layer_extraction_operator.md) when one selected layer or layer-pair block is the target rather than a full projection.
- Define the aggregation weights and whether directions, timestamps, and relation types are retained.
- Compare metrics on the multilayer graph and reduced graph when substantive conclusions depend on cross-layer paths.
- Compare reductions under different [interlayer switching costs](../measures/interlayer_switching_costs.md) and [node-layer participation mask](node_layer_participation_mask.md) choices.
- Store the reduction rule with derived graph files and concept-page metadata.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) defines single-layer extraction as projecting the multilayer tensor to a selected layer.
- The paper distinguishes projected monoplex networks from overlay monoplex networks.
- De Domenico et al. state that projected monoplex networks include summed contributions over layer pairs, while overlay networks sum edges over layers after contracting layer indices.
- The paper warns that overlay networks ignore the non-negligible contribution of interlayer connections.

## Caveats

- Projection can produce convenient graphs while erasing mechanism-relevant layer structure.
- Overlay networks can understate cross-layer coupling, especially in science-technology, funding, or affiliation analyses.
- Different projection rules can change centrality, community, and distance measures.

## Links

- [multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [multilayer adjacency tensors](multilayer_adjacency_tensors.md)
- [intralayer and interlayer adjacency](intralayer_interlayer_adjacency.md)
- [node-layer participation mask](node_layer_participation_mask.md)
- [interlayer switching costs](../measures/interlayer_switching_costs.md)
- [multiplexity-induced correlations](../mechanisms/multiplexity_induced_correlations.md)
- [multilayer layer extraction operator](../methods/multilayer_layer_extraction_operator.md)
- [monoplex reduction consistency check](../validations/monoplex_reduction_consistency_check.md)
- [layer networks](layer_networks.md)
- [citation networks](citation_networks.md)
- [coauthorship networks](coauthorship_networks.md)
- [science maps](science_maps.md)
- [science map overlays](science_map_overlays.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `multilayer_projection_overlay_networks`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: projected monoplex network; overlay monoplex network; layer-collapsed network; multilayer graph projection
