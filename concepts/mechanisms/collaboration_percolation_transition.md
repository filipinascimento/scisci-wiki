# Collaboration percolation transition

## Summary

Collaboration percolation transition is the sharp shift from many isolated team clusters to a large connected collaboration community as team-assembly parameters cross a critical threshold.

## Canonical Form

- Unit of analysis: collaboration network, field, journal, team sequence, or simulated team-assembly model.
- Typical representation: critical line `pc(m, q)`, largest-component fraction `S`, percolation phase diagram, or tipping line in `(p, q)` space.
- Mechanism: local team-formation rules determine whether a field fragments into isolated schools or forms an integrated invisible college.
- Empirical signature: a giant component emerges once enough incumbent participation and cross-team linkage accumulate.

## Uses in Science of Science

- Gives a network-formation mechanism for [invisible college](invisible_college.md) and [collaboration giant component](../measures/collaboration_giant_component.md).
- Links [team assembly parameter space](../methods/team_assembly_parameter_space.md) to macro-level [coauthorship networks](../representations/coauthorship_networks.md).
- Helps interpret why similar team sizes can produce different field-level connectivity.
- Provides a structural complement to [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md), [collaboration path length](../measures/collaboration_path_length.md), and [small-world collaboration structure](../representations/small_world_collaboration_structure.md).

## Operationalization

- Fit or specify a team-assembly model over `m`, `p`, and `q`.
- Simulate collaboration networks across the parameter grid.
- Compute `S`, the fraction of nodes in the largest component, and identify the critical transition line.
- Compare empirical fields or journals to the transition line.
- Interpret fields near the line as structurally sensitive to small changes in newcomer entry or repeated-incumbent collaboration.

## Evidence and Validations

- Verified full-text evidence from Guimera et al. (2005) reports that their team-assembly model undergoes a percolation transition.
- The transition moves the system from many small clusters to a large cluster containing a significant fraction of practitioners.
- The paper uses `S`, the fraction of nodes in the largest cluster, as the order parameter distinguishing isolated schools from an invisible college.
- Guimera et al. show that the critical line `pc(m, q)` depends on team size and repeat-collaboration propensity.
- Four of the five empirical creative networks considered are close to the tipping line, while astronomy sits farther above it with a denser structure and more repeated incumbent collaboration.

## Caveats

- Percolation is a structural analogy; it does not prove actual communication, trust, or knowledge sharing across the whole giant component.
- The transition line depends on model assumptions and the definition of active agents.
- Author disambiguation, field boundary choices, and time-window length can move an empirical field closer to or farther from the inferred line.
- Being near the transition can imply flexibility, fragility, or measurement noise; interpretation requires domain evidence.

## Links

- [team assembly parameter space](../methods/team_assembly_parameter_space.md)
- [team self-assembly models](../methods/team_self_assembly_models.md)
- [team assembly mechanisms](team_assembly_mechanisms.md)
- [collaboration giant component](../measures/collaboration_giant_component.md)
- [invisible college](invisible_college.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [repeat collaboration lock-in](repeat_collaboration_lock_in.md)
- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)

## References

- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; WoS: unknown]

## Metadata

- Concept ID: `collaboration_percolation_transition`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Guimera et al. (2005) (2005)
- Latest seen paper: Guimera et al. (2005) (2005)
- Primary reference DOI: `10.1126/science.1106340`
- OpenAlex ID: `W2150443611`
- Aliases: invisible college tipping line; collaboration giant-component transition; team-network percolation; p-q percolation transition
