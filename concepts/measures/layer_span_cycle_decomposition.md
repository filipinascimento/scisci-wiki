# Layer-span cycle decomposition

## Summary

Multilayer clustering can be decomposed into closed walks or triangles spanning one, two, or three layers, separating within-layer closure from cross-layer closure.

## Canonical Form

- Unit of analysis: three-cycle, closed walk, node-layer tuple, layer span, or clustering denominator.
- Typical representation: layer-span counts for one-layer, two-layer, and three-layer closure components.
- Mechanism, measurement, or validation target: cross-layer transitivity in multiplex scholarly graphs.
- Empirical signature: closure profiles differ when cycles stay within citations, cross citation-collaboration layers, or span several scholarly relation types.

## Uses in Science of Science

- Connects multilayer clustering measurement to [multilayer clustering coefficients](multilayer_clustering_coefficients.md) and [collaboration clustering coefficient](collaboration_clustering_coefficient.md).
- Provides a reusable motif for comparing [triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [small world collaboration structure](../representations/small_world_collaboration_structure.md) in linked scholarly data.

## Operationalization

- Count three-cycles by the number of distinct layers involved.
- Report one-layer, two-layer, and three-layer components with valid opportunity denominators.
- Map scholarly examples to citation-only, citation-collaboration, citation-coauthorship-topic, or other cross-layer closure patterns.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) defines multilayer clustering through tensor powers and decomposes three-cycles by layer span.
- The decomposition makes closure a structured motif rather than one scalar transitivity value.

## Caveats

- Cycle-span counts require defensible potential-edge denominators and node-layer participation masks.
- Sparse layers can make cross-layer closure appear absent even when the data source is incomplete.

## Links

- [Multilayer clustering coefficients](multilayer_clustering_coefficients.md)
- [Collaboration clustering coefficient](collaboration_clustering_coefficient.md)
- [Triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md)
- [Small-world collaboration structure](../representations/small_world_collaboration_structure.md)
- [Multilayer structural constraint mask](../validations/multilayer_structural_constraint_mask.md)
- [Multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `layer_span_cycle_decomposition`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/physrevx.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: cross-layer triangle decomposition; layer-spanning three-cycles; multiplex transitivity components; one-two-three layer closure
