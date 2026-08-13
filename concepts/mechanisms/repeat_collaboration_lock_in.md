# Repeat collaboration lock-in

## Summary

Repeat collaboration lock-in is the mechanism by which repeated incumbent-incumbent collaboration stabilizes local teams while limiting newcomer opportunities and slowing structural change in a collaboration network.

## Canonical Form

- Unit of analysis: incumbent pair, team, field, journal, collaboration network, or time period.
- Typical representation: repeat incumbent-incumbent link fraction `fR`, repeat-collaboration propensity `q`, closed-team share, or newcomer opportunity rate.
- Mechanism: repeated ties preserve coordination and expertise but can homogenize knowledge pools and make the collaboration network less fluid.
- Empirical signature: high repeat incumbent-link fractions coincide with fewer newcomer opportunities, slower network turnover, and denser established collaboration structure.

## Uses in Science of Science

- Gives a mechanism-level interpretation to [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md).
- Complements [newcomer-incumbent team mix](../measures/newcomer_incumbent_team_mix.md) by describing the incumbent side of team closure.
- Helps explain [collaboration percolation transition](collaboration_percolation_transition.md), [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md), and [team assembly performance gradient](../validations/team_assembly_performance_gradient.md).
- Connects to broader mechanisms of [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md), [team assembly mechanisms](team_assembly_mechanisms.md), and [knowledge-use narrowing](knowledge_use_narrowing.md).

## Operationalization

- Classify team members as incumbents when they have prior participation in the field or network.
- Identify incumbent-incumbent pairs and mark whether they have collaborated before.
- Compute `fR`, the share of new-team links that are repeat incumbent-incumbent ties.
- Estimate or simulate `q`, the repeat-collaboration propensity among incumbents.
- Compare `fR` and `q` across fields, journals, time windows, outcome strata, and newcomer-entry rates.

## Evidence and Validations

- Verified full-text evidence from Guimera et al. (2005) defines repeat incumbent-incumbent links as one of four team-link types.
- The paper states that high repeat incumbent-incumbent prevalence makes innovative ideas less likely because shared experiences homogenize the team's knowledge pool.
- Guimera et al. use `fR`, the fraction of repeat incumbent-incumbent links, to characterize each point in team-assembly parameter space.
- Their note on Figure 3 states that large `fR` occurs when both `p` and `q` are large, corresponding to firmly established incumbent collaborations and few newcomer opportunities.
- The paper reports astronomy as an empirical field with a higher repeat incumbent-link fraction than the other analyzed creative networks.

## Caveats

- Repeated collaboration can improve coordination, trust, mentoring, and cumulative expertise; it is not inherently harmful.
- The same repeated tie can represent hierarchy, friendship, lab continuity, shared infrastructure, or repeated specialization.
- Lock-in interpretation requires observing entry opportunities and knowledge diversity, not just tie repetition.
- Large-team authorship can create apparent repeat links that are weaker than small-team repeated collaboration.

## Links

- [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md)
- [newcomer-incumbent team mix](../measures/newcomer_incumbent_team_mix.md)
- [team assembly parameter space](../methods/team_assembly_parameter_space.md)
- [team assembly mechanisms](team_assembly_mechanisms.md)
- [collaboration percolation transition](collaboration_percolation_transition.md)
- [team assembly performance gradient](../validations/team_assembly_performance_gradient.md)
- [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md)
- [knowledge-use narrowing](knowledge_use_narrowing.md)

## References

- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; WoS: unknown]

## Metadata

- Concept ID: `repeat_collaboration_lock_in`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Guimera et al. (2005) (2005)
- Latest seen paper: Guimera et al. (2005) (2005)
- Primary reference DOI: `10.1126/science.1106340`
- OpenAlex ID: `W2150443611`
- Aliases: repeat incumbent lock-in; repeated collaboration closure; incumbent tie lock-in; closed collaboration circles
