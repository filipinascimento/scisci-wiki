# Multilayer null-tensor choice audit

## Summary

Multilayer modularity results should be audited against the null tensor used to define comparable random connections across layers.

## Canonical Form

- Unit of analysis: community assignment, null tensor, node-layer pair, layer strength, degree sequence, or modularity score.
- Typical representation: observed-minus-null tensor comparison with documented preserved quantities.
- Mechanism, measurement, or validation target: baseline sensitivity of multilayer community detection.
- Empirical signature: cross-layer communities survive under multiple null tensors that preserve plausible degree, layer, field, or temporal constraints.

## Uses in Science of Science

- Connects multilayer community validation to [multilayer modularity](../measures/multilayer_modularity.md) and [citation network rewiring nulls](../methods/citation_network_rewiring_nulls.md).
- Provides a reusable motif for comparing [faculty hiring null models](../methods/faculty_hiring_null_models.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [self loop excluded configuration null](../methods/self_loop_excluded_configuration_null.md) in linked scholarly data.

## Operationalization

- Specify which features the null tensor preserves, such as degree, layer strength, time slice, field, or entity type.
- Run alternative null tensors where substantive claims depend on detected cross-layer communities.
- Report which communities remain stable under the null-model sensitivity grid.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) defines multilayer modularity through an observed-minus-null tensor and notes that several null-model tensors are possible.
- This makes null choice a core validation motif for layer-aware community detection.

## Caveats

- The audit is a wrapper around community detection, not a separate community score.
- Different nulls can answer different substantive questions rather than one being universally correct.

## Links

- [Multilayer modularity](../measures/multilayer_modularity.md)
- [Citation network rewiring nulls](../methods/citation_network_rewiring_nulls.md)
- [Faculty hiring null models](../methods/faculty_hiring_null_models.md)
- [Self-loop-excluded configuration null](../methods/self_loop_excluded_configuration_null.md)
- [Degree-preserving citation-network null](../methods/degree_preserving_citation_network_null.md)
- [Multilayer structural constraint mask](multilayer_structural_constraint_mask.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `multilayer_null_tensor_choice_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/physrevx.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: multilayer modularity null audit; null tensor sensitivity; layer-aware community baseline; multiplex null-model choice
