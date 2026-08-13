# Potential-edge denominator masking

## Summary

Measures on multilayer scholarly graphs need denominator masks for node-layer and edge-layer combinations that could exist, so impossible ties are not treated as missing opportunities.

## Canonical Form

- Unit of analysis: node-layer pair, edge-layer pair, structural mask, denominator, or opportunity set.
- Typical representation: possible-edge tensor excluding forbidden or structurally impossible node-layer tuples.
- Mechanism, measurement, or validation target: normalization denominators for sparse and typed multilayer data.
- Empirical signature: density, clustering, and opportunity comparisons change after impossible edges are excluded from denominators.

## Uses in Science of Science

- Connects multilayer measure normalization to [multilayer structural constraint mask](multilayer_structural_constraint_mask.md) and [node layer participation mask](../representations/node_layer_participation_mask.md).
- Provides a reusable motif for comparing [multilayer clustering coefficients](../measures/multilayer_clustering_coefficients.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [layer collapse normalization risk](layer_collapse_normalization_risk.md) in linked scholarly data.

## Operationalization

- Construct a possible-edge tensor before normalizing clustering, density, or exposure measures.
- Exclude structurally forbidden combinations, such as paper-only entities in author-only layers.
- Keep impossible edges separate from unobserved but possible edges.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) replaces a complete-edge tensor with a constrained version when edges or node-layer combinations cannot exist.
- The same denominator issue applies to scholarly multiplexes with papers, authors, institutions, patents, and grants.

## Caveats

- This check depends on carefully distinguishing impossible, unobserved, censored, and not-yet-collected edges.
- Masks can embed researcher assumptions about what counts as a possible relation.

## Links

- [Multilayer structural constraint mask](multilayer_structural_constraint_mask.md)
- [Node-layer participation mask](../representations/node_layer_participation_mask.md)
- [Multilayer clustering coefficients](../measures/multilayer_clustering_coefficients.md)
- [Layer-collapse normalization risk](layer_collapse_normalization_risk.md)
- [Interlayer coupling completeness assumption](interlayer_coupling_completeness_assumption.md)
- [Multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `potential_edge_denominator_masking`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/physrevx.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: possible-edge mask; multilayer denominator tensor; forbidden-edge denominator; structural opportunity mask
