# Layer networks

## Summary

Layer networks represent layers themselves as nodes, with weighted edges summarizing how strongly layers are connected to each other in a multilayer system.

## Canonical Form

- Unit of analysis: layer, layer pair, interlayer edge set, relation type, or macroscopic layer summary.
- Typical representation: network of layers, weighted layer-layer adjacency, interlayer coupling graph, or layer-relations map.
- Representation target: summarize relations among layers without inspecting every node-layer tuple.
- Empirical signature: some scholarly layers, such as papers, authors, affiliations, fields, grants, patents, or datasets, are more densely coupled than others.

## Uses in Science of Science

- Provides a high-level view of [multiplex scholarly graphs](multiplex_scholarly_graphs.md).
- Helps summarize [scholarly entity graphs](scholarly_entity_graphs.md), [research-object context graphs](research_object_context_graphs.md), and SciSciNet-style linked data.
- Can reveal whether [paper-field linkages](paper_field_linkages.md), [paper-author-affiliation linkages](paper_author_affiliation_linkages.md), or patent-paper layers dominate a dataset.
- Complements [multilayer projection and overlay networks](multilayer_projection_overlay_networks.md) by keeping the reduced object at the layer level rather than the node level.

## Operationalization

- Define each layer as a relation type, entity type, time slice, modality, or data source.
- Aggregate interlayer edge weights between every layer pair using a documented rule.
- Build a layer-layer network where nodes are layers and edge weights summarize cross-layer coupling.
- Use extracted layer-pair blocks from [multilayer layer extraction operator](../methods/multilayer_layer_extraction_operator.md) when the layer network needs auditable block-level provenance.
- Compare layer-network summaries across snapshots, fields, or datasets to detect data-coverage shifts.
- Preserve direction and relation semantics when layer coupling is asymmetric.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) states that a network of layers can help understand relations between layers at a macroscopic level.
- The paper gives the example that some pairs of layers may have more interconnected nodes than other pairs, while other layer pairs may have no connections.
- De Domenico et al. describe a weighted layer network built by summing connection weights between pairs of layers.
- The paper treats the weighting procedure as application dependent, which makes provenance essential when translating the idea to scholarly data.

## Caveats

- A layer network is an aggregate and can hide important node-level heterogeneity.
- Edge weights depend strongly on entity resolution, layer definitions, and normalization.
- Dense layer coupling may reflect data-model design rather than scientific mechanism.

## Links

- [multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [multilayer adjacency tensors](multilayer_adjacency_tensors.md)
- [intralayer and interlayer adjacency](intralayer_interlayer_adjacency.md)
- [multilayer projection and overlay networks](multilayer_projection_overlay_networks.md)
- [multilayer layer extraction operator](../methods/multilayer_layer_extraction_operator.md)
- [scholarly entity graphs](scholarly_entity_graphs.md)
- [research-object context graphs](research_object_context_graphs.md)
- [paper-field linkages](paper_field_linkages.md)
- [paper-author-affiliation linkages](paper_author_affiliation_linkages.md)
- [sciscinet v2](../datasets/sciscinet_v2.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `layer_networks`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: network of layers; layer-layer network; interlayer coupling graph; layer relations network
