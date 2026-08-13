# Multilayer diffusion and random walks

## Summary

Multilayer diffusion and random walks model movement, attention, or influence over layered scholarly graphs where walkers can move within a layer or switch between layers.

## Canonical Form

- Unit of analysis: node-layer tuple, state tensor, transition tensor, diffusion process, or random walker.
- Typical representation: multilayer Laplacian, transition-probability tensor, random-walk master equation, or supra-matrix dynamics.
- Method target: simulate or derive flow through coupled citation, collaboration, topic, institution, funding, patent, or temporal layers.
- Empirical signature: adding interlayer links changes reachability, ranking, exploration, community detection, or diffusion speed relative to any single-layer graph.

## Uses in Science of Science

- Provides a process model for navigation in [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md).
- Extends random-walk ideas behind [citation PageRank](../measures/citation_pagerank.md), [Eigenfactor metrics](../measures/eigenfactor_metrics.md), and some community-detection methods.
- Helps model how researchers, topics, attention, or knowledge may move between citation, coauthorship, institutional, topical, funding, and patent layers.
- Supports layer-aware search, recommendation, and discovery workflows in [scholarly entity graphs](../representations/scholarly_entity_graphs.md).
- Uses [interlayer switching costs](../measures/interlayer_switching_costs.md) to govern how easily a walk or diffusion process moves between layers.
- Can reveal [multiplexity-induced correlations](../mechanisms/multiplexity_induced_correlations.md) when layer coupling changes flow relative to projected or single-layer baselines.

## Operationalization

- Define the multilayer adjacency tensor or [supra-adjacency matrix](../representations/supra_adjacency_matrices.md), including intralayer transition probabilities and interlayer switching probabilities.
- Choose whether the process is continuous-time diffusion, discrete-time random walk, restart walk, or PageRank-like walk.
- Decide whether interlayer transitions follow [counterpart-node coupling](../representations/counterpart_node_coupling.md), [ordinal interlayer coupling](../representations/ordinal_interlayer_coupling.md), or a general layer-pair transition tensor.
- Normalize transition probabilities by node-layer degree, edge weight, layer weight, or a domain-specific kernel.
- Validate results against single-layer baselines, projected-network baselines, and sensitivity to interlayer coupling.
- Apply [node-layer participation mask](../representations/node_layer_participation_mask.md) before interpreting unreachable node-layer states.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) formulates diffusion on multilayer networks using a state tensor and a multilayer combinatorial Laplacian.
- The paper also defines discrete-time random walks with a transition-probability tensor for jumps between node-layer pairs.
- De Domenico et al. emphasize that interlayer connections make navigation nontrivial because a walker can switch layers and thereby reach nodes that are disconnected within a single layer.
- The same text notes that random walks are used to derive multilayer modularity, making this method a substrate for [multilayer modularity](../measures/multilayer_modularity.md).

## Caveats

- Diffusion results are highly sensitive to transition normalization and interlayer switching rates.
- A walk over database links is not automatically a model of human reading, collaboration, or technology transfer.
- Coverage gaps in Dimensions, OpenAlex, Web of Science, or local data lakes can create artificial bottlenecks or shortcuts.

## Links

- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md)
- [intralayer and interlayer adjacency](../representations/intralayer_interlayer_adjacency.md)
- [node-layer participation mask](../representations/node_layer_participation_mask.md)
- [counterpart-node coupling](../representations/counterpart_node_coupling.md)
- [ordinal interlayer coupling](../representations/ordinal_interlayer_coupling.md)
- [interlayer switching costs](../measures/interlayer_switching_costs.md)
- [supra-adjacency matrices](../representations/supra_adjacency_matrices.md)
- [multilayer modularity](../measures/multilayer_modularity.md)
- [citation PageRank](../measures/citation_pagerank.md)
- [Eigenfactor metrics](../measures/eigenfactor_metrics.md)
- [citation networks](../representations/citation_networks.md)
- [multiplexity-induced correlations](../mechanisms/multiplexity_induced_correlations.md)
- [monoplex reduction consistency check](../validations/monoplex_reduction_consistency_check.md)
- [scholarly entity graphs](../representations/scholarly_entity_graphs.md)
- [citation-aware search and summarization](citation_aware_search_summarization.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `multilayer_diffusion_random_walks`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: multiplex random walks; multilayer diffusion; layer-switching random walk; multilayer Laplacian diffusion
