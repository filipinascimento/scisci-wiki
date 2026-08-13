# Supra-adjacency matrices

## Summary

Supra-adjacency matrices flatten a multilayer adjacency tensor into a square matrix over node-layer tuples, enabling matrix-based computation while preserving layer blocks.

## Canonical Form

- Unit of analysis: node-layer tuple, layer block, interlayer block, multilayer edge, or unfolded tensor.
- Typical representation: NL by NL supra-adjacency matrix, supra-Laplacian, block matrix, or unfolded adjacency tensor.
- Representation target: make multilayer networks compatible with matrix algorithms for centrality, diffusion, clustering, random walks, and community detection.
- Empirical signature: a multilayer scholarly graph can be transformed into blocks for citation, collaboration, funding, topic, and interlayer linkages.

## Uses in Science of Science

- Provides a computable form for [multilayer adjacency tensors](multilayer_adjacency_tensors.md).
- Supports layer-aware analogues of [citation PageRank](../measures/citation_pagerank.md), [Eigenfactor metrics](../measures/eigenfactor_metrics.md), and science-map centrality.
- Helps operationalize [multiplex scholarly graphs](multiplex_scholarly_graphs.md) for matrix, spectral, and random-walk methods.
- Connects [intralayer and interlayer adjacency](intralayer_interlayer_adjacency.md) to block-matrix implementations.
- Enables implementations of [multilayer eigenvector centrality](../measures/multilayer_eigenvector_centrality.md), [multilayer modularity](../measures/multilayer_modularity.md), and [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md) when tensor operations are represented as matrix operations.
- Also supports spectral diagnostics such as [multilayer von Neumann entropy](../measures/multilayer_von_neumann_entropy.md) when the multilayer Laplacian is unfolded consistently.

## Operationalization

- Enumerate node-layer tuples in a stable order.
- Place intralayer adjacency matrices on diagonal blocks and interlayer adjacency matrices on off-diagonal blocks.
- Record the unfolding convention because layer permutations can change matrix layout even when the tensor is equivalent.
- Use the supra-adjacency or supra-Laplacian for algorithms, then map results back to nodes, layers, or node-layer tuples.
- Preserve whether off-diagonal blocks encode [counterpart-node coupling](counterpart_node_coupling.md), [ordinal interlayer coupling](ordinal_interlayer_coupling.md), or more general cross-layer relations.
- Check whether the algorithm assumes symmetry, nonnegative weights, connectedness, or a single node per layer.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) states that multilayer adjacency tensors can be represented through matricization, also called unfolding or flattening.
- The paper notes that elements of the tensor can be represented as an N squared by L squared matrix or an NL by NL matrix.
- De Domenico et al. discuss supra-adjacency and supra-Laplacian matrices for eigenvalue problems in multiplex networks.
- The paper states that a square supra-adjacency form corresponds to a unique unfolding up to permutations of layer blocks.
- The same unfolding supports matrix implementations of multilayer centrality, modularity, diffusion, and random walks while retaining node-layer identity.

## Caveats

- Flattening can make tensor semantics less visible, especially when blocks are reordered.
- Matrix algorithms may quietly impose assumptions that do not hold for all multilayer scholarly graphs.
- Interpreting centrality or diffusion requires mapping back from node-layer results to substantive scholarly entities.

## Links

- [multilayer adjacency tensors](multilayer_adjacency_tensors.md)
- [intralayer and interlayer adjacency](intralayer_interlayer_adjacency.md)
- [counterpart-node coupling](counterpart_node_coupling.md)
- [ordinal interlayer coupling](ordinal_interlayer_coupling.md)
- [multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [multilayer eigenvector centrality](../measures/multilayer_eigenvector_centrality.md)
- [multilayer modularity](../measures/multilayer_modularity.md)
- [multilayer von Neumann entropy](../measures/multilayer_von_neumann_entropy.md)
- [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md)
- [citation PageRank](../measures/citation_pagerank.md)
- [Eigenfactor metrics](../measures/eigenfactor_metrics.md)
- [science map layout and reduction](../methods/science_map_layout_reduction.md)
- [monoplex reduction consistency check](../validations/monoplex_reduction_consistency_check.md)
- [citation networks](citation_networks.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `supra_adjacency_matrices`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: supra-adjacency matrix; superadjacency matrix; supra-Laplacian; unfolded multilayer matrix
