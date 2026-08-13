# Team link-type composition

## Summary

Team link-type composition measures the mix of newcomer-newcomer, newcomer-incumbent, new incumbent-incumbent, and repeat incumbent-incumbent ties inside a team.

## Canonical Form

- Unit of analysis: team, pair of team members, field, journal, time window, or projected collaboration graph.
- Typical representation: four-category link distribution, newcomer/incumbent pair matrix, repeat-tie share, or team diversity profile.
- Measurement target: how much a team combines entry, experience, new incumbent bridging, and closed repeat collaboration.
- Empirical signature: teams with varied link types draw from more heterogeneous experience than teams dominated by repeat incumbent-incumbent ties.

## Uses in Science of Science

- Refines [newcomer-incumbent team mix](newcomer_incumbent_team_mix.md) by moving from member shares to pairwise link types.
- Refines [repeat incumbent collaboration fraction](repeat_incumbent_collaboration_fraction.md) by embedding repeated ties inside the full team composition.
- Provides an observable input for [team assembly parameter space](../methods/team_assembly_parameter_space.md) and [team self-assembly models](../methods/team_self_assembly_models.md).
- Connects team diversity to [collaboration knowledge reservoir](../mechanisms/collaboration_knowledge_reservoir.md) and [repeat collaboration lock-in](../mechanisms/repeat_collaboration_lock_in.md).

## Operationalization

- Label each team member as newcomer or incumbent at the moment the team forms.
- Enumerate all pairwise links among team members.
- Classify each pair as newcomer-newcomer, newcomer-incumbent, incumbent-incumbent with no prior tie, or repeat incumbent-incumbent.
- Aggregate link-type shares by team, journal, field, or period.
- Use the repeat incumbent-incumbent share `fR` as one summary, but retain the full distribution when testing diversity mechanisms.

## Evidence and Validations

- Verified full-text evidence from Guimera et al. (2005) classifies team links into four types: newcomer-newcomer, newcomer-incumbent, incumbent-incumbent, and repeat incumbent-incumbent.
- The paper states that the distribution of link types reflects the team's underlying diversity.
- Guimera et al. argue that teams dominated by repeat incumbent-incumbent ties are less likely to have innovative ideas because shared experience homogenizes the knowledge pool.
- In contrast, teams with a variety of link types are described as more likely to draw from diverse perspectives.

## Caveats

- Pairwise link composition grows mechanically with team size, so comparisons need consistent denominators.
- Newcomer/incumbent status is field-relative and can be distorted by left-censoring.
- Pair types do not capture contribution roles, hierarchy, demographic diversity, or informal collaboration.

## Links

- [newcomer-incumbent team mix](newcomer_incumbent_team_mix.md)
- [repeat incumbent collaboration fraction](repeat_incumbent_collaboration_fraction.md)
- [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md)
- [team assembly parameter space](../methods/team_assembly_parameter_space.md)
- [team self-assembly models](../methods/team_self_assembly_models.md)
- [collaboration knowledge reservoir](../mechanisms/collaboration_knowledge_reservoir.md)
- [repeat collaboration lock-in](../mechanisms/repeat_collaboration_lock_in.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; WoS: unknown]

## Metadata

- Concept ID: `team_link_type_composition`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Guimera et al. (2005) (2005)
- Latest seen paper: Guimera et al. (2005) (2005)
- Primary reference DOI: `10.1126/science.1106340`
- OpenAlex ID: `W2150443611`
- Dimensions ID: `pub.1062451305`
- SciSciNet ID: `W2150443611`
- Aliases: team pair-type mix; newcomer incumbent link distribution; four team-link types; team diversity link composition
