# Layer-collapse normalization risk

## Summary

Layer-collapse normalization risk is the problem that overlay or projection networks can preserve observed edges while changing the implied number of possible walks or normalizing opportunities.

## Canonical Form

- Unit of analysis: layer, overlay network, projected edge, possible walk, clustering denominator, or collapsed graph.
- Typical representation: layer-collapsed adjacency matrix with a note on discarded layer count and interlayer edges.
- Validation target: prevent layer-collapsed metrics from being compared as if the underlying layer structure were unchanged.
- Empirical signature: adding an empty layer leaves the overlay graph unchanged but changes the possible multilayer walks or normalization denominator.

## Uses in Science of Science

- Qualifies [multilayer projection and overlay networks](../representations/multilayer_projection_overlay_networks.md).
- Supports comparisons of scholarly multiplex graphs across datasets, years, or layer definitions.
- Connects [multilayer clustering coefficients](../measures/multilayer_clustering_coefficients.md), [layer networks](../representations/layer_networks.md), and [monoplex reduction consistency check](monoplex_reduction_consistency_check.md).

## Operationalization

- Record the number and identity of layers before and after any overlay or projection.
- Report whether interlayer connections are discarded.
- Recompute normalizing denominators when layer sets differ.
- Compare overlay metrics only after checking whether layer definitions are comparable.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) states that overlay-network construction discards information about the number of layers.
- The paper notes that adding an empty layer does not affect the overlay network but increases the number of possible walks that must be considered.
- De Domenico et al. also explain that overlay clustering differs because overlay construction discards interlayer connections.

## Caveats

- Overlay networks are useful summaries but can erase exactly the layer information needed for interpretation.
- Apparent stability in the collapsed graph can coexist with changing multilayer opportunities.
- Comparisons across data releases should record layer additions, deletions, and empty-layer treatment.

## Links

- [multilayer projection and overlay networks](../representations/multilayer_projection_overlay_networks.md)
- [multilayer clustering coefficients](../measures/multilayer_clustering_coefficients.md)
- [layer networks](../representations/layer_networks.md)
- [multiplexity-induced correlations](../mechanisms/multiplexity_induced_correlations.md)
- [monoplex reduction consistency check](monoplex_reduction_consistency_check.md)
- [multilayer structural constraint mask](multilayer_structural_constraint_mask.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `layer_collapse_normalization_risk`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: overlay denominator risk; layer-collapsed metric caveat; projection normalization risk; collapsed multilayer comparison caveat
