# Higher-rank multiplex-temporal extension

## Summary

Multilayer tensors can be extended to higher rank when a scholarly system is both multiplex and time-dependent.

## Canonical Form

- Unit of analysis: node, relation layer, time slice, field layer, tensor axis, or longitudinal edge.
- Typical representation: higher-rank tensor with separate axes for relation type, time, and other layer dimensions.
- Mechanism, measurement, or validation target: joint representation of relation multiplicity and temporal evolution.
- Empirical signature: results differ when relation type and time are modeled as separate axes rather than collapsed into one layer index.

## Uses in Science of Science

- Connects longitudinal multiplex representation to [multilayer adjacency tensors](multilayer_adjacency_tensors.md) and [ordinal interlayer coupling](ordinal_interlayer_coupling.md).
- Provides a reusable motif for comparing [multiplex scholarly graphs](multiplex_scholarly_graphs.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [temporal co citation drift](../mechanisms/temporal_co_citation_drift.md) in linked scholarly data.

## Operationalization

- Add separate axes for relationship type and time rather than concatenating all slices into one ambiguous layer dimension.
- Preserve author-paper-field-time or citation-collaboration-topic-time distinctions in metadata.
- Compare reductions that collapse time, relation type, or both.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) states that the tensor framework generalizes to higher-rank tensors for time-dependent and multiplex networks.
- Science-of-science data often require exactly this combination of relation type and time.

## Caveats

- Higher-rank representations are sparse, costly, and harder to explain.
- Axis definitions must be versioned because later reductions depend on them.

## Links

- [Multilayer adjacency tensors](multilayer_adjacency_tensors.md)
- [Ordinal interlayer coupling](ordinal_interlayer_coupling.md)
- [Multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [Temporal co-citation drift](../mechanisms/temporal_co_citation_drift.md)
- [Time-resolved coauthorship reconstruction](../methods/time_resolved_coauthorship_reconstruction.md)
- [Node-layer index notation](node_layer_index_notation.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `higher_rank_multiplex_temporal_extension`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/physrevx.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: multiplex-temporal tensor; higher-order scholarly multilayer network; time-by-relation tensor; longitudinal multiplex tensor
