# Inactive-agent turnover rule

## Summary

Inactive-agent turnover rule is a dynamic-network modeling rule that removes agents after a defined inactivity period so simulated collaboration systems can reach a steady state.

## Canonical Form

- Unit of analysis: agent, author, creator, field, team sequence, inactivity lag, or simulated network.
- Typical representation: inactivity threshold `tau`, active-agent set, rolling participation window, or exit/removal process.
- Method target: prevent indefinitely accumulating inactive collaborators when modeling ongoing team formation.
- Empirical signature: network size and component structure stabilize after old inactive agents exit the active system.

## Uses in Science of Science

- Adds the turnover mechanism inside [team self-assembly models](team_self_assembly_models.md).
- Complements [scientific inactive-author state](../representations/scientific_inactive_author_state.md) in field-population models.
- Supports dynamic [coauthorship networks](../representations/coauthorship_networks.md) where active collaboration capacity matters more than lifetime participation.
- Helps interpret [collaboration giant component](../measures/collaboration_giant_component.md) and [collaboration percolation transition](../mechanisms/collaboration_percolation_transition.md) in finite active windows.

## Operationalization

- Define an inactivity threshold, such as no observed team participation for more than `tau` time steps.
- Remove inactive agents from the active network used for future team assembly.
- Retain historical participation separately if lifetime ties are needed for provenance.
- Check sensitivity of network size, degree distributions, and largest-component size to the threshold.
- Report whether the rule is a modeling convenience, an empirical retirement/exit definition, or both.

## Evidence and Validations

- Verified full-text evidence from Guimera et al. (2005) removes nodes that remain inactive for longer than `tau` time steps in the team-assembly model.
- The paper motivates the rule by noting that agents do not remain in the network forever because they age, retire, change careers, and otherwise exit.
- Guimera et al. state that the removal process enables the network to reach a steady state after a transient period.
- The paper also reports that its results do not depend on the specific value of `tau`, with details in the supporting material.

## Caveats

- Inactivity thresholds can misclassify temporary gaps, field switches, name changes, or database coverage failures as exit.
- Removing inactive agents changes component sizes and degree distributions, so lifetime and active-window networks answer different questions.
- Sensitivity checks are needed before treating the threshold as a substantive career-exit measure.

## Links

- [team self-assembly models](team_self_assembly_models.md)
- [team assembly parameter space](team_assembly_parameter_space.md)
- [scientific inactive-author state](../representations/scientific_inactive_author_state.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [collaboration giant component](../measures/collaboration_giant_component.md)
- [collaboration percolation transition](../mechanisms/collaboration_percolation_transition.md)
- [time-resolved coauthorship reconstruction](time_resolved_coauthorship_reconstruction.md)

## References

- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; WoS: unknown]

## Metadata

- Concept ID: `inactive_agent_turnover_rule`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Guimera et al. (2005) (2005)
- Latest seen paper: Guimera et al. (2005) (2005)
- Primary reference DOI: `10.1126/science.1106340`
- OpenAlex ID: `W2150443611`
- Dimensions ID: `pub.1062451305`
- SciSciNet ID: `W2150443611`
- Aliases: inactive collaborator removal; tau inactivity rule; active-agent turnover; collaboration model exit rule
