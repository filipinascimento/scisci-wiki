# Multilayer modularity

## Summary

Multilayer modularity scores whether node-layer assignments form communities that are denser than expected under a layer-aware null model.

## Canonical Form

- Unit of analysis: node-layer tuple, community, field, topic cluster, collaboration cluster, or multilayer graph.
- Typical representation: multilayer community assignment tensor, modularity scalar, null-model tensor, or supra-adjacency community partition.
- Mechanism or measurement target: community structure across time, disciplines, relation types, or coupled scholarly layers.
- Empirical signature: communities persist, split, merge, or align across citation, coauthorship, topic, institutional, funding, and patent layers more strongly than expected by a null model.

## Uses in Science of Science

- Generalizes community detection for [citation networks](../representations/citation_networks.md), [coauthorship networks](../representations/coauthorship_networks.md), [science maps](../representations/science_maps.md), and [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md).
- Supports temporal science mapping when layers are time slices and multiplex science mapping when layers are relation types.
- Helps identify fields or teams whose community structure is coherent across epistemic, social, institutional, funding, or translational layers.
- Provides a bridge from graph representation choices to downstream claims about specialties, invisible colleges, and interdisciplinary boundary spanning.
- Can test [multiplexity-induced correlations](../mechanisms/multiplexity_induced_correlations.md) when cross-layer community structure differs from layer-separated partitions.

## Operationalization

- Define node-layer tuples, community labels, layer weights, interlayer coupling, and the null-model tensor.
- Optimize or evaluate modularity on the multilayer graph, usually through a [supra-adjacency matrix](../representations/supra_adjacency_matrices.md) or equivalent tensor implementation.
- Report the null model, resolution parameters, random seeds, and stability across repeated runs.
- Compare multilayer partitions with single-layer, projected, and overlay partitions.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) presents a multilayer modularity formulation using a community-membership tensor and a null-model tensor.
- The paper states that multilayer modularity can be derived from random walks and that different null models give special cases.
- In science-of-science settings, this supports community detection across temporal citation slices, coauthorship layers, field layers, funding layers, and patent-paper translation layers without forcing all relations into one graph.

## Caveats

- Modularity depends on the null model, resolution parameters, layer coupling, and optimization heuristics.
- Different runs can produce different partitions; stability checks are necessary.
- Community labels should not be treated as ground-truth fields without validation against text, expert classifications, or external taxonomies.

## Links

- [science maps](../representations/science_maps.md)
- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md)
- [supra-adjacency matrices](../representations/supra_adjacency_matrices.md)
- [layer networks](../representations/layer_networks.md)
- [multiplexity-induced correlations](../mechanisms/multiplexity_induced_correlations.md)
- [citation networks](../representations/citation_networks.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [topic models](../methods/topic_models.md)
- [invisible college](../mechanisms/invisible_college.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `multilayer_modularity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: multilayer community detection; multislice modularity; multiplex modularity; layer-aware modularity
