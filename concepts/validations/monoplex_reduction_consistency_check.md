# Monoplex reduction consistency check

## Summary

Monoplex reduction consistency check verifies that a multilayer network representation or metric reduces to the ordinary single-layer result when the system has only one layer or no meaningful interlayer structure.

## Canonical Form

- Unit of analysis: multilayer metric, tensor implementation, supra-matrix implementation, single-layer limit, or projected network baseline.
- Typical representation: one-layer test case, zero-interlayer-coupling test, metric equality check, or monoplex baseline comparison.
- Validation target: ensure that multilayer generalizations preserve known network results in limiting cases.
- Empirical signature: degree, clustering, centrality, entropy, modularity, or diffusion agrees with the corresponding monoplex measure under the declared reduction.

## Uses in Science of Science

- Validates implementations of [multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md), [supra-adjacency matrices](../representations/supra_adjacency_matrices.md), and [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md).
- Provides a baseline for [multilayer degree centrality](../measures/multilayer_degree_centrality.md), [multilayer clustering coefficients](../measures/multilayer_clustering_coefficients.md), [multilayer eigenvector centrality](../measures/multilayer_eigenvector_centrality.md), [multilayer modularity](../measures/multilayer_modularity.md), [multilayer von Neumann entropy](../measures/multilayer_von_neumann_entropy.md), and [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md).
- Helps decide whether layer-aware results reflect real [multiplexity-induced correlations](../mechanisms/multiplexity_induced_correlations.md) rather than implementation artifacts.
- Works with [multilayer projection and overlay networks](../representations/multilayer_projection_overlay_networks.md) as a reduced-graph baseline.

## Operationalization

- Build a one-layer version of the multilayer graph and compute the multilayer metric.
- Compute the corresponding monoplex metric on the ordinary adjacency matrix.
- Set interlayer weights to zero or remove interlayer blocks and verify that layer-aware results behave as expected.
- Compare tensor and supra-matrix implementations on the same toy graph.
- Include the check in reproducible tests before applying metrics to large Dimensions, OpenAlex, Web of Science, or SciSciNet-derived graphs.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) explicitly examines how multilayer quantities compare with their single-layer counterparts.
- The paper states that its generalizations make it possible to obtain known results for special cases of single-layer and multiplex networks.
- De Domenico et al. note that if there is only a single layer, there is no distinction between a monoplex network and a single-layer network.
- The paper repeatedly uses monoplex quantities as the reference point before defining multilayer degree, clustering, eigenvector centrality, entropy, diffusion, and random-walk formulations.

## Caveats

- Passing the monoplex limit does not validate layer weights, entity resolution, or source coverage in a real scholarly graph.
- Some projected or overlay baselines intentionally answer a different question, so equality is only expected under the declared reduction.
- Directionality, weights, and normalization must be matched between the multilayer and monoplex implementations.

## Links

- [multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md)
- [supra-adjacency matrices](../representations/supra_adjacency_matrices.md)
- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [multilayer projection and overlay networks](../representations/multilayer_projection_overlay_networks.md)
- [multiplexity-induced correlations](../mechanisms/multiplexity_induced_correlations.md)
- [multilayer degree centrality](../measures/multilayer_degree_centrality.md)
- [multilayer clustering coefficients](../measures/multilayer_clustering_coefficients.md)
- [multilayer eigenvector centrality](../measures/multilayer_eigenvector_centrality.md)
- [multilayer modularity](../measures/multilayer_modularity.md)
- [multilayer von Neumann entropy](../measures/multilayer_von_neumann_entropy.md)
- [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `monoplex_reduction_consistency_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: single-layer reduction check; monoplex limit test; one-layer consistency check; multilayer metric baseline test
