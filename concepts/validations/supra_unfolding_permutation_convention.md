# Supra-unfolding permutation convention

## Summary

Supra-adjacency and supra-Laplacian matrices are tensor unfoldings whose node-layer block order must be documented to keep metrics aligned with scholarly identifiers.

## Canonical Form

- Unit of analysis: supra matrix, tensor unfolding, node-layer pair, block order, eigenvector entry, or random-walk state.
- Typical representation: node-major or layer-major flattening convention with block-permutation audit.
- Mechanism, measurement, or validation target: identifier-safe use of supra-matrix multilayer algorithms.
- Empirical signature: equivalent block permutations produce the same mathematics but different row-to-entity mappings if the convention is not tracked.

## Uses in Science of Science

- Connects supra-matrix validation to [supra adjacency matrices](../representations/supra_adjacency_matrices.md) and [multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md).
- Provides a reusable motif for comparing [multilayer eigenvector centrality](../measures/multilayer_eigenvector_centrality.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [multilayer von neumann entropy](../measures/multilayer_von_neumann_entropy.md) in linked scholarly data.

## Operationalization

- Record whether matrices are node-major, layer-major, or custom ordered.
- Round-trip selected rows and columns back to node-layer identifiers before interpreting centralities or random-walk states.
- Run block-permutation checks when comparing software libraries or saved matrices.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) explains that fourth-order multilayer tensors can be unfolded into square supra matrices.
- The unfolding is unique only up to layer-block permutations, making indexing conventions a validation issue.

## Caveats

- Permutation errors can leave numerical spectra plausible while corrupting joins to authors, papers, institutions, or layers.
- This motif is a software and data-governance check rather than a new centrality measure.

## Links

- [Supra-adjacency matrices](../representations/supra_adjacency_matrices.md)
- [Multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md)
- [Multilayer eigenvector centrality](../measures/multilayer_eigenvector_centrality.md)
- [Multilayer von Neumann entropy](../measures/multilayer_von_neumann_entropy.md)
- [Multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md)
- [Node-layer index notation](../representations/node_layer_index_notation.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `supra_unfolding_permutation_convention`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/physrevx.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: supra-matrix block order; node-layer flattening convention; unfolding permutation audit; supramatrix indexing convention
