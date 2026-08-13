# Observed team-size sequence control

## Summary

Observed team-size sequence control is the modeling practice of simulating team-formation networks with the empirical sequence of team sizes held fixed, so differences in network structure can be attributed to assembly parameters rather than to changing team-size distributions.

## Canonical Form

- Unit of analysis: temporal team sequence, simulated collaboration network, field, journal, or team-assembly parameter set.
- Typical representation: empirical `m(t)` sequence, fixed team-size schedule, controlled simulation ensemble, or counterfactual `(p, q)` grid using observed team sizes.
- Method target: separate the effect of team size from the effects of newcomer entry and repeat incumbent collaboration.
- Empirical signature: simulations vary `p` and `q` while retaining the same sequence of team sizes observed in the data.

## Uses in Science of Science

- Strengthens [team self-assembly models](team_self_assembly_models.md) by making team-size growth an explicit control rather than an uncontrolled confound.
- Supports [team assembly degree-distribution validation](../validations/team_assembly_degree_distribution_validation.md) when simulated networks are compared with empirical degree distributions.
- Helps interpret [collaboration percolation transition](../mechanisms/collaboration_percolation_transition.md), because the location of a field in the `(p, q)` plane is compared under the same team-size history.
- Connects [team-agent bipartite projection](../representations/team_agent_bipartite_projection.md) to simulation design by preserving the observed team-event sizes before projection.

## Operationalization

- Extract the empirical time-ordered team-size sequence from the panel.
- Use the observed sequence `m(t)` when generating each simulated team.
- Vary or estimate assembly parameters such as incumbent probability `p` and repeat-collaboration propensity `q`.
- Compare simulated networks with empirical networks on degree distribution, largest-component size, repeated-tie fraction, and other topology metrics.
- When testing counterfactual assembly parameters, keep the team-size sequence fixed so only the assembly mechanism changes.

## Evidence and Validations

- Verified full-text evidence from Guimera et al. (2005) considers constant team size, sampled team-size distributions, and empirical sequences of `m(t)`.
- The paper states that comparisons with empirical datasets use the sequence of team-size values from the corresponding data.
- Guimera et al. generate networks with the same sequence of team sizes as the data while varying `p` and `q` to study how assembly mechanisms affect network structure.
- This control lets the paper compare degree distributions and largest-component sizes without attributing all structure to team-size growth.

## Caveats

- Holding team size fixed does not control for topic, institution, funding, author status, or field growth.
- The observed sequence may itself be shaped by the same social processes that determine `p` and `q`.
- Counterfactual simulations using real `m(t)` should not be interpreted as causal experiments unless other mechanisms are addressed.

## Links

- [team self-assembly models](team_self_assembly_models.md)
- [team assembly parameter space](team_assembly_parameter_space.md)
- [team assembly degree-distribution validation](../validations/team_assembly_degree_distribution_validation.md)
- [team-agent bipartite projection](../representations/team_agent_bipartite_projection.md)
- [creative team assembly panels](../datasets/creative_team_assembly_panels.md)
- [collaboration percolation transition](../mechanisms/collaboration_percolation_transition.md)
- [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md)

## References

- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; SciSciNet: W2150443611; WoS: unknown]

## Metadata

- Concept ID: `observed_team_size_sequence_control`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Guimera et al. (2005) (2005)
- Latest seen paper: Guimera et al. (2005) (2005)
- Primary reference DOI: `10.1126/science.1106340`
- OpenAlex ID: `W2150443611`
- Dimensions ID: `pub.1062451305`
- SciSciNet ID: `W2150443611`
- Aliases: empirical m(t) control; fixed team-size sequence simulation; observed team-size schedule; team-size-controlled assembly simulation
