# Team-agent bipartite projection

## Summary

Team-agent bipartite projection represents teams and participants as a two-mode graph, then projects it onto an agent-agent collaboration network where two agents are linked if they have appeared on at least one common team.

## Canonical Form

- Unit of analysis: team, production, paper, agent, author, creator, field, or time slice.
- Typical representation: bipartite team-member graph, projected coauthorship network, weighted collaboration projection, or yearly active-agent graph.
- Representation target: preserve team membership before deriving the one-mode collaboration network used for topology and component analysis.
- Empirical signature: each team forms a clique or weighted set of ties in the projected agent network.

## Uses in Science of Science

- Provides the graph-construction layer beneath [creative team assembly panels](../datasets/creative_team_assembly_panels.md).
- Links temporal team records to [coauthorship networks](coauthorship_networks.md), [collaboration giant component](../measures/collaboration_giant_component.md), and [collaboration percolation transition](../mechanisms/collaboration_percolation_transition.md).
- Makes team-size effects explicit because large teams create many pairwise projected ties.
- Supports [team self-assembly models](../methods/team_self_assembly_models.md) by separating the observed two-mode input from the projected one-mode output.

## Operationalization

- Build a two-mode table of teams and agents with dates and field or venue labels.
- Add a bipartite edge between each team and each member of that team.
- For each time slice, project the bipartite graph onto agents, connecting two agents when they share at least one team.
- Choose whether projected ties are binary, count-weighted, time-decayed, or restricted to active agents.
- Report how large teams are weighted, because unweighted clique projection can overstate connectivity.

## Evidence and Validations

- Verified full-text evidence from Guimera et al. (2005) states that teams and agents are nodes in a bipartite network, with agents connected only to teams and teams to agents.
- The paper then projects the bipartite network onto agents, creating an edge between two agents if they have been connected to at least one common team.
- Guimera et al. use the resulting collaboration networks to measure largest-component size, degree distributions, and the emergence of an invisible college.
- This representation is the bridge from production or publication team records to collaboration-network structure.

## Caveats

- Clique projection can inflate degree, clustering, and giant-component size for large teams.
- Shared team membership does not reveal contribution weight, hierarchy, or whether every pair directly interacted.
- Bipartite and projected networks answer different questions; retain the two-mode data when team composition matters.
- Active-window projection and lifetime projection can produce different component structures.

## Links

- [creative team assembly panels](../datasets/creative_team_assembly_panels.md)
- [team self-assembly models](../methods/team_self_assembly_models.md)
- [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md)
- [observed team-size sequence control](../methods/observed_team_size_sequence_control.md)
- [coauthorship networks](coauthorship_networks.md)
- [collaboration giant component](../measures/collaboration_giant_component.md)
- [collaboration percolation transition](../mechanisms/collaboration_percolation_transition.md)
- [team link-type composition](../measures/team_link_type_composition.md)

## References

- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; SciSciNet: W2150443611; WoS: unknown]

## Metadata

- Concept ID: `team_agent_bipartite_projection`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Guimera et al. (2005) (2005)
- Latest seen paper: Guimera et al. (2005) (2005)
- Primary reference DOI: `10.1126/science.1106340`
- OpenAlex ID: `W2150443611`
- Dimensions ID: `pub.1062451305`
- SciSciNet ID: `W2150443611`
- Aliases: team-member bipartite projection; agent-team projection; projected collaboration network; team-to-agent graph projection
