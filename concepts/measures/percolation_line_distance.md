# Percolation-Line Distance

## Summary

Percolation-line distance measures how far a collaboration network's team-assembly parameters sit from the transition at which a large invisible-college component emerges.

## Canonical Form

- Unit of analysis: field, journal, collaboration network, or simulated team-assembly parameter point.
- Typical representation: distance in `p,q` space from the critical percolation boundary.
- Measurement target: proximity to the collaboration regime where a giant component emerges.
- Empirical signature: networks near the line are sparse and branched; networks farther inside the connected regime become more looped and dense.

## Uses in Science of Science

- Operationalizes [collaboration percolation transition](../mechanisms/collaboration_percolation_transition.md).
- Uses [team assembly parameter space](../methods/team_assembly_parameter_space.md) as the coordinate system.
- Helps explain [giant-component morphology gradient](../representations/giant_component_morphology_gradient.md).
- Complements [collaboration giant component](collaboration_giant_component.md).

## Operationalization

- Estimate `p` and `q` from empirical team sequences.
- Derive or simulate the critical percolation line for the observed team-size distribution.
- Compute signed or absolute distance from the field or journal point to the line.
- Compare distance with component size, component morphology, and performance proxies.

## Evidence and Validations

- Verified full-text evidence from Guimera et al. (2005) generates networks with the same team-size sequence while varying `p` and `q`.
- The paper reports that four creative networks lie close to the tipping line, while astronomy is farther away.
- Its figure caption states that distance from the percolation line predicts overall network structure.

## Caveats

- Distance depends on the model specification and the observed team-size sequence.
- A field can be far from the line because of infrastructure, historical norms, or data boundaries.
- The measure should not be interpreted without repeat-link fraction and component morphology.

## Links

- [collaboration percolation transition](../mechanisms/collaboration_percolation_transition.md)
- [team assembly parameter space](../methods/team_assembly_parameter_space.md)
- [observed team-size sequence control](../methods/observed_team_size_sequence_control.md)
- [collaboration giant component](collaboration_giant_component.md)
- [giant-component morphology gradient](../representations/giant_component_morphology_gradient.md)
- [disciplinary team-assembly regimes](../validations/disciplinary_team_assembly_regimes.md)

## References

- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; SciSciNet: W2150443611; WoS: unknown]

## Metadata

- Concept ID: `percolation_line_distance`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Guimera et al. (2005) (2005)
- Latest seen paper: Guimera et al. (2005) (2005)
- Primary reference DOI: `10.1126/science.1106340`
- OpenAlex ID: `W2150443611`
- Dimensions ID: `pub.1062451305`
- SciSciNet ID: `W2150443611`
- Aliases: distance to collaboration tipping line; p-q percolation distance; invisible-college transition distance; collaboration critical-line proximity
