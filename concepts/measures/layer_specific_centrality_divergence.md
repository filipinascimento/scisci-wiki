# Layer-specific centrality divergence

## Summary

An entity's scholarly centrality can diverge across layers, separating citation prestige, collaboration brokerage, topical visibility, policy attention, or patent influence.

## Canonical Form

- Unit of analysis: author, paper, institution, topic, layer-specific centrality score, or rank vector.
- Typical representation: centrality vector by layer plus divergence or rank-instability statistics.
- Mechanism, measurement, or validation target: role specialization and projection sensitivity in multiplex scholarly graphs.
- Empirical signature: an entity ranks highly in one scholarly layer but not in another, or its aggregate rank is unstable to layer weighting.

## Uses in Science of Science

- Connects layer-aware scholarly influence measurement to [multilayer eigenvector centrality](multilayer_eigenvector_centrality.md) and [citation pagerank](citation_pagerank.md).
- Provides a reusable motif for comparing [scientific brokerage centrality](scientific_brokerage_centrality.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [coauthorship networks](../representations/coauthorship_networks.md) in linked scholarly data.

## Operationalization

- Compute centrality separately for each relation layer and for chosen multilayer aggregates.
- Measure divergence across the layer-wise centrality vector using rank changes, dispersion, or distance metrics.
- Flag evaluation claims whose rank order depends on one layer or projection.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) notes that overlay or projection can yield separate centrality scores and that the same individual may differ across media.
- Science-of-science applications can treat those media as citation, collaboration, funding, patent, topic, and policy layers.

## Caveats

- Layer divergence can reflect real role specialization or uneven data coverage.
- Aggregate centrality should not be interpreted without reporting layer contributions.

## Links

- [Multilayer eigenvector centrality](multilayer_eigenvector_centrality.md)
- [Citation PageRank](citation_pagerank.md)
- [Scientific brokerage centrality](scientific_brokerage_centrality.md)
- [Coauthorship and collaboration networks](../representations/coauthorship_networks.md)
- [Citation networks](../representations/citation_networks.md)
- [Author-metric group aggregation use case](../methods/author_metric_group_aggregation_use_case.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `layer_specific_centrality_divergence`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/physrevx.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: cross-layer centrality divergence; layer-role centrality split; multiplex rank instability; channel-specific scholarly centrality
