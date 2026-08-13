# Ordinal interlayer coupling

## Summary

Ordinal interlayer coupling links each layer only to its neighboring layers in an ordered sequence, such as adjacent time slices in a temporal multilayer network.

## Canonical Form

- Unit of analysis: ordered layer pair, node-layer tuple, temporal slice, interlayer block, or multiplex network.
- Typical representation: nearest-neighbor layer coupling, diagonal off-blocks between adjacent layers, temporal interslice edge, or ordered layer chain.
- Representation target: encode layer transitions that are constrained by an ordering rather than allowing arbitrary layer-to-layer switching.
- Empirical signature: scholarly snapshots are connected from year to year, venue epoch to venue epoch, or topic period to adjacent topic period.

## Uses in Science of Science

- Provides a temporal specialization of [counterpart-node coupling](counterpart_node_coupling.md) for ordered publication, career, citation, or topic layers.
- Supports [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md) when walkers should move only to adjacent time slices.
- Helps distinguish chronological coupling from all-pairs coupling in [multilayer adjacency tensors](multilayer_adjacency_tensors.md) and [supra-adjacency matrices](supra_adjacency_matrices.md).
- Gives science-map and topic-evolution workflows a representation for adjacent-snapshot continuity without collapsing time.

## Operationalization

- Order layers by time, sequence position, or another declared ordinal axis.
- Add interlayer edges between counterpart node-layer tuples only for adjacent or allowed lagged layer pairs.
- Encode the allowed lag window and whether coupling is directed forward, backward, or symmetric.
- Keep ordinal coupling weights separate from intralayer edge weights and from non-ordinal cross-layer relations.
- Test sensitivity to allowing only adjacent layers versus longer time-horizon coupling.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) discusses ordinal interlayer couplings in flattened adjacency tensors.
- The paper notes that numerical calculations in earlier temporal-network work used couplings only to one or two neighboring layers, producing nonzero entries only along diagonals of off-diagonal blocks.
- De Domenico et al. contrast this restriction with more general temporal-network couplings, such as longer-horizon or causal relations between layers.
- This distinction supports treating ordinal layer coupling as an explicit modeling choice rather than a default property of all multilayer networks.

## Caveats

- Adjacent-layer coupling can understate delayed influence or long-memory effects.
- All-pairs coupling can overstate possible transitions when time ordering matters.
- Ordered layers require careful snapshot construction; missing periods can create artificial jumps or gaps.

## Links

- [counterpart-node coupling](counterpart_node_coupling.md)
- [multilayer adjacency tensors](multilayer_adjacency_tensors.md)
- [supra-adjacency matrices](supra_adjacency_matrices.md)
- [intralayer and interlayer adjacency](intralayer_interlayer_adjacency.md)
- [node-layer participation mask](node_layer_participation_mask.md)
- [interlayer switching costs](../measures/interlayer_switching_costs.md)
- [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md)
- [science map update workflows](../methods/science_map_update_workflows.md)
- [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `ordinal_interlayer_coupling`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: adjacent-layer coupling; temporal interslice coupling; nearest-neighbor layer coupling; ordinal layer coupling
