# Multiplexity-induced correlations

## Summary

Multiplexity-induced correlations are structural or dynamical dependencies that appear because layers are coupled, and that would be invisible or misestimated in separate single-layer analyses.

## Canonical Form

- Unit of analysis: node-layer tuple, layer pair, coupled process, multilayer graph, or cross-layer diagnostic.
- Typical representation: cross-layer degree correlation, layer-coupled diffusion feedback, multiplex clustering, correlated activity vectors, or layer-aware centrality shift.
- Mechanism: interlayer connections allow structure or dynamics in one layer to alter structure, reachability, ranking, or flow in another layer.
- Empirical signature: a multilayer metric differs substantively from the corresponding single-layer, projected, or overlay baseline.

## Uses in Science of Science

- Explains why [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md) can reveal mechanisms missed by citation-only or coauthorship-only analyses.
- Provides the mechanism-level counterpart to [multilayer clustering coefficients](../measures/multilayer_clustering_coefficients.md), [multilayer eigenvector centrality](../measures/multilayer_eigenvector_centrality.md), [multilayer modularity](../measures/multilayer_modularity.md), and [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md).
- Motivates comparing [multilayer projection and overlay networks](../representations/multilayer_projection_overlay_networks.md) against layer-preserving analyses.
- Applies when funding, collaboration, citation, topic, affiliation, patent, or policy layers mutually condition scientific visibility and translation.

## Operationalization

- Compute a layer-aware metric on the multilayer graph.
- Compute comparable metrics on separate layers, projected networks, overlay networks, and randomized interlayer-coupling nulls.
- Include [monoplex reduction consistency check](../validations/monoplex_reduction_consistency_check.md) so multilayer differences are not implementation artifacts.
- Attribute a correlation to multiplexity only when the layer-coupled result differs from these baselines in a direction predicted by interlayer links.
- Inspect which layer pairs, node types, or interlayer weights drive the difference.
- Validate with sensitivity to [node-layer participation mask](../representations/node_layer_participation_mask.md) and [interlayer switching costs](../measures/interlayer_switching_costs.md).

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) states that interlayer connections can generate new structural and dynamical correlations between system components.
- The paper argues that a multilayer framework is needed to account for these correlations and warns that traditional single-layer assumptions can be misleading.
- De Domenico et al. also emphasize that multilayer diagnostics should be compared systematically with their single-layer counterparts to examine new phenomena such as multiplexity-induced correlations and dynamical feedbacks.
- In science-of-science settings, the analogous mechanism is that citation, collaboration, institutional, funding, topic, and patent layers can change each other's apparent centrality, community structure, and diffusion paths.

## Caveats

- Cross-layer correlation is not automatically causal coupling.
- Shared data-source coverage, entity-resolution errors, and field size can mimic multiplexity-induced structure.
- Projection artifacts can create apparent correlations that disappear under layer-preserving null models.

## Links

- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md)
- [intralayer and interlayer adjacency](../representations/intralayer_interlayer_adjacency.md)
- [node-layer participation mask](../representations/node_layer_participation_mask.md)
- [interlayer switching costs](../measures/interlayer_switching_costs.md)
- [multilayer projection and overlay networks](../representations/multilayer_projection_overlay_networks.md)
- [monoplex reduction consistency check](../validations/monoplex_reduction_consistency_check.md)
- [multilayer clustering coefficients](../measures/multilayer_clustering_coefficients.md)
- [multilayer eigenvector centrality](../measures/multilayer_eigenvector_centrality.md)
- [multilayer modularity](../measures/multilayer_modularity.md)
- [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `multiplexity_induced_correlations`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: multiplex-induced correlations; layer-coupled correlations; cross-layer dynamical feedback; multiplexity feedback
