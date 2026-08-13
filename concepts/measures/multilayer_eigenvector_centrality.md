# Multilayer eigenvector centrality

## Summary

Multilayer eigenvector centrality ranks entities by connections to other central entities across layers, while allowing layer identity and interlayer coupling to affect the score.

## Canonical Form

- Unit of analysis: node, node-layer tuple, author, paper, institution, topic, grant, patent, or dataset.
- Typical representation: leading eigentensor, supra-adjacency eigenvector, layer-specific centrality score, or aggregated multilayer centrality.
- Mechanism or measurement target: recursive cross-layer prestige, influence, attention, or infrastructural importance.
- Empirical signature: an entity has high centrality when it connects to important entities in important layers, not just when it has many direct ties.

## Uses in Science of Science

- Generalizes [citation PageRank](citation_pagerank.md) and eigenvector-like impact measures to [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md).
- Supports recursive centrality over coupled citation, coauthorship, affiliation, funding, patent, and topic layers.
- Makes it possible to ask whether an author or institution is central in one scholarly layer but peripheral in another.
- Can reveal [multiplexity-induced correlations](../mechanisms/multiplexity_induced_correlations.md) when recursive importance changes after layers are coupled.
- Bridges layer-aware graph measures with [science maps](../representations/science_maps.md) and [scholarly entity graphs](../representations/scholarly_entity_graphs.md).

## Operationalization

- Construct a multilayer adjacency tensor or its equivalent [supra-adjacency matrix](../representations/supra_adjacency_matrices.md).
- Choose edge orientation, normalization, layer weights, and interlayer coupling.
- Compute the leading eigentensor or corresponding eigenvector, then decide whether to report node-layer scores, node-aggregated scores, or layer-specific scores.
- Compare against raw degree, PageRank, projected-network eigenvector centrality, and field-normalized baselines.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) derives a multilayer generalization of Bonacich eigenvector centrality.
- The paper explains that the result must be interpreted carefully because both intralayer and interlayer connections can affect importance.
- The same passage notes that projection or overlay networks can produce separate centrality scores for different layers, implying that layer-aware centrality should be compared with collapsed alternatives.
- This is directly relevant for science-of-science graphs where a paper, author, institution, or field can be recursively central in citations but not in coauthorship, funding, or patent layers.

## Caveats

- Scores can change substantially with layer weights and interlayer coupling.
- Recursive centrality can amplify coverage bias in proprietary or incomplete scholarly datasets.
- Interpretability is harder when a single score mixes social, epistemic, funding, and translational relations.

## Links

- [citation PageRank](citation_pagerank.md)
- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md)
- [supra-adjacency matrices](../representations/supra_adjacency_matrices.md)
- [multilayer projection and overlay networks](../representations/multilayer_projection_overlay_networks.md)
- [multiplexity-induced correlations](../mechanisms/multiplexity_induced_correlations.md)
- [citation networks](../representations/citation_networks.md)
- [scholarly entity graphs](../representations/scholarly_entity_graphs.md)
- [Eigenfactor metrics](eigenfactor_metrics.md)
- [field normalized citation impact](field_normalized_citation_impact.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `multilayer_eigenvector_centrality`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: multilayer eigencentrality; eigentensor centrality; multiplex eigenvector centrality; layer-aware recursive centrality
