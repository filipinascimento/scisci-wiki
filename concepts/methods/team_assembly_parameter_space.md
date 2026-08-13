# Team assembly parameter space

## Summary

Team assembly parameter space represents team formation with a small set of generative parameters: team size, incumbent participation, and repeat-collaboration propensity.

## Canonical Form

- Unit of analysis: team sequence, field, journal, creative production system, or simulated collaboration network.
- Typical representation: `m` for team size, `p` for incumbent-selection probability, `q` for repeat-incumbent collaboration propensity, and derived curves in the `(p, q)` plane.
- Method target: connect local team-composition choices to global collaboration-network structure.
- Empirical signature: estimated parameter values reproduce observed degree distributions, repeat-link fractions, and largest-component sizes.

## Uses in Science of Science

- Splits the parameter-estimation core out of [team self-assembly models](team_self_assembly_models.md).
- Converts [newcomer-incumbent team mix](../measures/newcomer_incumbent_team_mix.md) and [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md) into a generative model.
- Supports [collaboration percolation transition](../mechanisms/collaboration_percolation_transition.md), [repeat collaboration lock-in](../mechanisms/repeat_collaboration_lock_in.md), and [team assembly performance gradient](../validations/team_assembly_performance_gradient.md).
- Uses [creative team assembly panels](../datasets/creative_team_assembly_panels.md) as the empirical input.

## Operationalization

- Build a time-ordered sequence of teams and team sizes.
- Classify each participant as a newcomer or incumbent at the time of team formation.
- Estimate `p` directly from the fraction of incumbents in new teams.
- Estimate `q` from repeated incumbent-incumbent collaboration patterns, typically through simulation.
- Simulate collaboration networks using observed team-size sequences and fitted parameters.
- Use [observed team-size sequence control](observed_team_size_sequence_control.md) when the aim is to compare `p` and `q` under the empirical team-size history.
- Compare simulated and empirical degree distributions, repeat-link fractions, and largest-component sizes.

## Evidence and Validations

- Verified full-text evidence from Guimera et al. (2005) defines a team-assembly model controlled by three parameters: `m`, `p`, and `q`.
- In their model, `m` is the number of agents in a team, `p` is the probability a selected team member is an incumbent, and `q` is the probability an incumbent chooses a prior collaborator rather than a random incumbent.
- The paper states that `p` is directly given by the fraction of incumbents in new creations, while `q` must be obtained numerically by simulation.
- Guimera et al. estimate `p` and `q` for Broadway musicals and four scientific fields, then compare model-predicted degree distributions and giant-component sizes with observed networks.
- The same text distinguishes constant team size, sampled team-size distributions, and empirical `m(t)` sequences, using the latter for dataset comparisons.
- Their figures map each field into the `(p, q)` parameter space relative to a percolation transition line.

## Caveats

- A low-dimensional parameter space omits institutions, funding, author order, contribution roles, topics, and project complexity.
- Parameter estimates depend on the definition of incumbent status and field boundaries.
- Similar network structures can sometimes arise from different parameter combinations.
- `q` is a model parameter, not a direct observed fraction, and should be reported with the simulation assumptions used to infer it.

## Links

- [team self-assembly models](team_self_assembly_models.md)
- [creative team assembly panels](../datasets/creative_team_assembly_panels.md)
- [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md)
- [optimal assembly-parameter convergence hypothesis](../mechanisms/optimal_assembly_parameter_convergence_hypothesis.md)
- [observed team-size sequence control](observed_team_size_sequence_control.md)
- [team-agent bipartite projection](../representations/team_agent_bipartite_projection.md)
- [newcomer-incumbent team mix](../measures/newcomer_incumbent_team_mix.md)
- [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md)
- [collaboration percolation transition](../mechanisms/collaboration_percolation_transition.md)
- [repeat collaboration lock-in](../mechanisms/repeat_collaboration_lock_in.md)
- [collaboration giant component](../measures/collaboration_giant_component.md)
- [giant-component size nonidentifiability](../validations/giant_component_size_nonidentifiability.md)
- [impact-factor team-quality proxy](impact_factor_team_quality_proxy.md)

## References

- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; WoS: unknown]

## Metadata

- Concept ID: `team_assembly_parameter_space`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Guimera et al. (2005) (2005)
- Latest seen paper: Guimera et al. (2005) (2005)
- Primary reference DOI: `10.1126/science.1106340`
- OpenAlex ID: `W2150443611`
- Aliases: p-q team model; incumbent-repeat parameter space; m p q assembly model; team-formation parameter map
