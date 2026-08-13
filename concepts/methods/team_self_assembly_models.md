# Team self-assembly models

## Summary

Team self-assembly models are generative models that explain collaboration-network structure from local rules about team size, newcomer entry, incumbent participation, and repeat collaboration.

## Canonical Form

- Unit of analysis: temporal sequence of teams, authors, collaboration ties, field, journal, or creative-production system.
- Typical representation: team-member sequence that induces a dynamic coauthorship or collaboration graph.
- Mechanism or measurement target: how micro-level team-formation rules produce macro-level connectedness, clustering, and performance differences.
- Empirical signature: model parameters estimated from team histories reproduce observed degree distributions, repeat-tie fractions, or largest-component sizes.

## Uses in Science of Science

- Turns [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md) into a falsifiable model rather than a static description.
- Links [newcomer-incumbent team mix](../measures/newcomer_incumbent_team_mix.md) and [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md) to graph outcomes such as [collaboration giant component](../measures/collaboration_giant_component.md).
- Separates the [team-agent bipartite projection](../representations/team_agent_bipartite_projection.md) representation from the projected collaboration-network outcomes.
- Uses [observed team-size sequence control](observed_team_size_sequence_control.md) when comparing simulated and empirical networks.
- Splits into [team assembly parameter space](team_assembly_parameter_space.md), [collaboration percolation transition](../mechanisms/collaboration_percolation_transition.md), and [team assembly performance gradient](../validations/team_assembly_performance_gradient.md) for more granular modeling and validation.
- Provides a route from observed [coauthorship networks](../representations/coauthorship_networks.md) back to plausible formation mechanisms.

## Operationalization

- Observe a time-ordered sequence of teams and team sizes.
- Preserve the observed `m(t)` sequence when the simulation goal is to isolate `p` and `q` effects.
- Define newcomers and incumbents from prior participation in the field or network.
- Estimate or simulate parameters for team size `m`, incumbent probability `p`, and repeat-collaboration propensity `q`.
- Generate synthetic collaboration networks from the same team-size sequence and compare degree distributions, repeat incumbent-incumbent fractions, largest-component size `S`, and performance correlations with empirical data.
- Use an [inactive-agent turnover rule](inactive_agent_turnover_rule.md) when the model is intended to represent an active collaboration system rather than lifetime accumulation.

## Evidence and Validations

- Verified full-text evidence from Guimera et al. (2005) proposes a self-assembly model controlled by three parameters: team size, the probability of selecting incumbents, and incumbents' tendency to repeat past collaborations.
- The paper validates the model by estimating `p` and `q` from empirical team sequences and comparing predicted network degree distributions and largest-component sizes with observed networks.
- The verified text states that empirical comparisons use the team-size sequence from the corresponding dataset.
- This structural validation is split out in [team assembly degree-distribution validation](../validations/team_assembly_degree_distribution_validation.md).
- The verified text reports a percolation transition in the model: as parameters change, collaboration networks move from many small clusters to a large connected giant component.
- Guimera et al. also connect model parameters to performance proxies, reporting that higher-impact journals in several fields tend to have more incumbents and less repeated incumbent collaboration.

## Caveats

- The model abstracts away institutions, funding, author order, contribution roles, topic choice, and exogenous shocks.
- Parameter estimates depend on field boundary choices and database coverage.
- Good reproduction of degree distributions or component sizes does not uniquely identify the true social mechanism.

## Links

- [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md)
- [creative team assembly panels](../datasets/creative_team_assembly_panels.md)
- [team assembly parameter space](team_assembly_parameter_space.md)
- [team-agent bipartite projection](../representations/team_agent_bipartite_projection.md)
- [observed team-size sequence control](observed_team_size_sequence_control.md)
- [inactive-agent turnover rule](inactive_agent_turnover_rule.md)
- [repeat-propensity saturation check](../validations/repeat_propensity_saturation_check.md)
- [disciplinary team-assembly regimes](../validations/disciplinary_team_assembly_regimes.md)
- [team assembly degree-distribution validation](../validations/team_assembly_degree_distribution_validation.md)
- [collaboration percolation transition](../mechanisms/collaboration_percolation_transition.md)
- [percolation-line distance](../measures/percolation_line_distance.md)
- [giant-component morphology gradient](../representations/giant_component_morphology_gradient.md)
- [repeat collaboration lock-in](../mechanisms/repeat_collaboration_lock_in.md)
- [team assembly performance gradient](../validations/team_assembly_performance_gradient.md)
- [newcomer-incumbent team mix](../measures/newcomer_incumbent_team_mix.md)
- [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md)
- [collaboration giant component](../measures/collaboration_giant_component.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)
- [invisible college](../mechanisms/invisible_college.md)

## References

- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; WoS: unknown]

## Metadata

- Concept ID: `team_self_assembly_models`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Guimera et al. (2005) (2005)
- Latest seen paper: Guimera et al. (2005) (2005)
- Primary reference DOI: `10.1126/science.1106340`
- OpenAlex ID: `W2150443611`
- Aliases: team assembly model; newcomer-incumbent model; collaboration formation model; p-q team model
