# Creative team assembly panels

## Summary

Creative team assembly panels are time-ordered datasets of teams, participants, and collaboration histories used to study how team formation rules shape collaboration networks and performance.

## Canonical Form

- Unit of analysis: team, production, paper, author or creator, journal, field, year, and collaboration tie.
- Typical representation: team-member table, team sequence, newcomer/incumbent labels, repeat-collaboration flags, projected collaboration graph, and journal or field performance metadata.
- Data target: reconstruct repeated team formation events rather than only a static coauthorship graph.
- Empirical signature: the data preserve enough temporal order to classify entrants, incumbents, and repeated incumbent pairs at each team event.

## Uses in Science of Science

- Supplies the data layer for [team self-assembly models](../methods/team_self_assembly_models.md) and [team assembly parameter space](../methods/team_assembly_parameter_space.md).
- Links creative industries and scientific fields as comparable team-formation systems.
- Supports estimates of [newcomer-incumbent team mix](../measures/newcomer_incumbent_team_mix.md), [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md), [collaboration percolation transition](../mechanisms/collaboration_percolation_transition.md), and [team assembly performance gradient](../validations/team_assembly_performance_gradient.md).
- Uses [team-agent bipartite projection](../representations/team_agent_bipartite_projection.md) when converting team records into collaboration networks.
- Requires [journal-set field-boundary filter](../validations/journal_set_field_boundary_filter.md) documentation for the scientific journal panels.
- Provides a reusable panel pattern for studying [coauthorship networks](../representations/coauthorship_networks.md) as evolving team products.
- Supports [task-complexity team-size adaptation](../mechanisms/task_complexity_team_size_adaptation.md) by preserving long-run team-size histories.

## Operationalization

- Define a field, journal set, creative industry, or venue family.
- Collect all team products in time order with participant lists and dates.
- Build newcomer/incumbent labels from prior appearances in the panel.
- Mark incumbent-incumbent ties as new or repeated based on previous collaboration history.
- Project team-member bipartite records into yearly collaboration networks when graph outcomes are needed.
- Attach outcome proxies such as journal impact factor, citations, production success, or field-level component size.
- Preserve the empirical team-size sequence for [observed team-size sequence control](../methods/observed_team_size_sequence_control.md) in simulations.

## Evidence and Validations

- Verified full-text evidence from Guimera et al. (2005) analyzes Broadway musical productions and scientific collaborations in social psychology, economics, ecology, and astronomy.
- For Broadway, the paper uses 2,258 musical productions from 1877 to 1990 and identifies team members such as composers, librettists, choreographers, directors, and producers.
- For scientific fields, Guimera et al. use Web of Science publication records from selected recognized journals in four disciplines and build journal-level and field-level collaboration networks.
- The paper reports journal-selection requirements, including field category fit and enough papers for analysis, and uses impact factor as a journal-level performance proxy.
- The full text defines the underlying network as bipartite between teams and agents before projecting to an agent collaboration network.
- These panels allow the authors to estimate p, q, repeat incumbent-link fractions, largest-component sizes, and model-predicted network structure.

## Caveats

- Creative-industry panels and scientific publication panels have different authorship and credit conventions.
- Journal selection can omit specialty venues and change inferred collaboration structure.
- Team membership does not reveal contribution weight, informal advice, lab labor, or uncredited collaboration.
- Impact factor is a noisy output proxy for team performance.

## Links

- [team self-assembly models](../methods/team_self_assembly_models.md)
- [team assembly parameter space](../methods/team_assembly_parameter_space.md)
- [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md)
- [team-agent bipartite projection](../representations/team_agent_bipartite_projection.md)
- [observed team-size sequence control](../methods/observed_team_size_sequence_control.md)
- [journal-set field-boundary filter](../validations/journal_set_field_boundary_filter.md)
- [task-complexity team-size adaptation](../mechanisms/task_complexity_team_size_adaptation.md)
- [newcomer-incumbent team mix](../measures/newcomer_incumbent_team_mix.md)
- [team link-type composition](../measures/team_link_type_composition.md)
- [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md)
- [repeat collaboration lock-in](../mechanisms/repeat_collaboration_lock_in.md)
- [team assembly performance gradient](../validations/team_assembly_performance_gradient.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; WoS: unknown]

## Metadata

- Concept ID: `creative_team_assembly_panels`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Guimera et al. (2005) (2005)
- Latest seen paper: Guimera et al. (2005) (2005)
- Primary reference DOI: `10.1126/science.1106340`
- OpenAlex ID: `W2150443611`
- Aliases: team assembly panel; creative collaboration panel; time-ordered team corpus; journal-level team sequence
