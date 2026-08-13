# Multilayer von Neumann entropy

## Summary

Multilayer von Neumann entropy measures structural complexity in a multilayer network using the eigenvalues of a normalized multilayer Laplacian or density tensor.

## Canonical Form

- Unit of analysis: multilayer graph, supra-Laplacian, density tensor, layer-coupled component, or network snapshot.
- Typical representation: entropy scalar, eigenvalue spectrum of a multilayer density tensor, or comparison against projected-network entropy.
- Measurement target: information-theoretic complexity, structural dispersion, and layer-aware heterogeneity.
- Empirical signature: a coupled scholarly graph has an entropy profile that changes when interlayer links or layer weights are added, removed, or projected away.

## Uses in Science of Science

- Adds an information-theoretic diagnostic to [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md).
- Complements [multilayer degree centrality](multilayer_degree_centrality.md), [multilayer clustering coefficients](multilayer_clustering_coefficients.md), [multilayer eigenvector centrality](multilayer_eigenvector_centrality.md), and [multilayer modularity](multilayer_modularity.md).
- Can compare citation-only, coauthorship-only, funding-coupled, patent-coupled, and full multiplex scholarly graphs.
- Helps audit whether [multilayer projection and overlay networks](../representations/multilayer_projection_overlay_networks.md) simplify away substantial structure.

## Operationalization

- Construct a multilayer adjacency tensor or equivalent supra-adjacency matrix.
- Build the multilayer Laplacian and normalize it into a density tensor whose eigenvalues sum to one.
- Compute von Neumann entropy from the density-tensor eigenvalues.
- Compare entropy across layer choices, interlayer weights, time windows, projected baselines, and null models.
- Report normalization, handling of disconnected components, and whether the tensor was unfolded for computation.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) includes von Neumann entropy among the diagnostics generalized from monoplex to multilayer networks.
- The paper states that generalizing entropy requires a multilayer Laplacian tensor and eigenvalues of a fourth-order tensor.
- De Domenico et al. define a multilayer density tensor by normalizing the multilayer Laplacian with the trace of the multistrength tensor, then use its eigenvalues to define multilayer von Neumann entropy.
- This makes entropy a layer-aware network descriptor rather than a text-topic or categorical-diversity entropy measure.

## Caveats

- Entropy values depend on Laplacian definition, normalization, interlayer weights, and component structure.
- Comparing entropy across graphs with different node-layer masks can conflate coverage with complexity.
- A high entropy score is descriptive; it does not by itself identify a mechanism or causal channel.

## Links

- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md)
- [supra-adjacency matrices](../representations/supra_adjacency_matrices.md)
- [node-layer participation mask](../representations/node_layer_participation_mask.md)
- [interlayer switching costs](interlayer_switching_costs.md)
- [multilayer degree centrality](multilayer_degree_centrality.md)
- [multilayer clustering coefficients](multilayer_clustering_coefficients.md)
- [multilayer eigenvector centrality](multilayer_eigenvector_centrality.md)
- [multilayer modularity](multilayer_modularity.md)
- [shannon entropy diversity](shannon_entropy_diversity.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `multilayer_von_neumann_entropy`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: multilayer network entropy; von Neumann network entropy; multilayer density-tensor entropy; supra-Laplacian entropy
