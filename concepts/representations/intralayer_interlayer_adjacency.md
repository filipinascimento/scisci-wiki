# Intralayer and interlayer adjacency

## Summary

Intralayer and interlayer adjacency separates ties within a layer from ties between layers, making it explicit whether a relationship connects entities of the same relation type or couples node counterparts across relation types.

## Canonical Form

- Unit of analysis: node pair, layer pair, node-layer tuple, within-layer edge, or cross-layer edge.
- Typical representation: intralayer adjacency tensor, interlayer adjacency tensor, layer-pair block, counterpart-node coupling, or diagonal interlayer matrix.
- Representation target: distinguish ordinary within-layer ties from cross-layer couplings before computing graph metrics.
- Empirical signature: scholarly entities have within-layer relations, such as paper-paper citations, plus cross-layer relations, such as paper-author, paper-field, paper-grant, and paper-patent links.

## Uses in Science of Science

- Makes [multiplex scholarly graphs](multiplex_scholarly_graphs.md) operational by separating layer-internal and layer-crossing edges.
- Applies to [paper-author-affiliation linkages](paper_author_affiliation_linkages.md), [paper-field linkages](paper_field_linkages.md), and [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md).
- Clarifies how [integrated patent-paper citation networks](integrated_patent_paper_citation_networks.md) differ from a single citation layer.
- Supports [multilayer adjacency tensors](multilayer_adjacency_tensors.md) and [supra-adjacency matrices](supra_adjacency_matrices.md).

## Operationalization

- Define each layer and state which node identities can appear in each layer.
- Encode intralayer adjacency for edges among nodes in the same layer.
- Encode interlayer adjacency for edges between nodes in different layers or between a node and its layer counterparts.
- For multiplex networks, document whether interlayer coupling is diagonal, complete across counterpart nodes, weighted, directed, or missing for some node-layer pairs.
- Keep interlayer weights interpretable, such as switching cost, relation confidence, or observed cross-entity linkage.
- Use a [node-layer participation mask](node_layer_participation_mask.md) to distinguish missing counterpart nodes from zero-weight interlayer ties.
- Use [counterpart-node coupling](counterpart_node_coupling.md) for identity-preserving multiplex layers and [ordinal interlayer coupling](ordinal_interlayer_coupling.md) for ordered temporal or sequential layers.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) defines an intralayer adjacency tensor for relationships between nodes within the same layer.
- The same paper defines an interlayer adjacency tensor for relationships that incorporate multiple layers and notes that the same-layer case reduces to the intralayer tensor.
- De Domenico et al. describe multiplex networks as a special multilayer case where interlayer connections link a node to its counterpart nodes in other layers.
- The paper states that, in multiplex networks, the interlayer adjacency tensor is diagonal, while weights can differ across layer pairs and entities.
- De Domenico et al. illustrate interlayer weights as switching costs between transportation modes and warn that some entities are present in only a subset of layers.

## Caveats

- Cross-layer edges can mean different things: identity coupling, event transition, semantic relation, data linkage, or causal channel.
- Treating all interlayer edges as equal can erase source confidence and relation semantics.
- Missing node-layer tuples should not be confused with zero-weight observed ties.

## Links

- [multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [multilayer adjacency tensors](multilayer_adjacency_tensors.md)
- [node-layer participation mask](node_layer_participation_mask.md)
- [counterpart-node coupling](counterpart_node_coupling.md)
- [ordinal interlayer coupling](ordinal_interlayer_coupling.md)
- [interlayer switching costs](../measures/interlayer_switching_costs.md)
- [supra-adjacency matrices](supra_adjacency_matrices.md)
- [paper-author-affiliation linkages](paper_author_affiliation_linkages.md)
- [paper-field linkages](paper_field_linkages.md)
- [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md)
- [integrated patent-paper citation networks](integrated_patent_paper_citation_networks.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `intralayer_interlayer_adjacency`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: intralayer adjacency; interlayer adjacency; layer coupling tensor; counterpart-node coupling
