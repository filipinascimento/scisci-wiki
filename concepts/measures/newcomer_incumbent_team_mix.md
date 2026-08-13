# Newcomer-incumbent team mix

## Summary

Newcomer-incumbent team mix measures how much a scientific team combines participants who are new to a field or collaboration system with incumbents who already have a visible participation record.

## Canonical Form

- Unit of analysis: team, publication, field, journal, time window, or collaboration episode.
- Typical representation: temporal team sequence or coauthorship network with author status defined from prior field participation.
- Mechanism or measurement target: balance between fresh perspectives and accumulated field expertise.
- Empirical signature: teams or journals differ in the share of members who are incumbents versus newcomers, and this mix predicts collaboration structure or performance.

## Uses in Science of Science

- Decomposes [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md) into a measurable composition variable.
- Gives a formation-side complement to [team size and disruption](../mechanisms/team_size_disruption.md), because teams of the same size can differ in how much prior field experience they contain.
- Helps connect [coauthorship networks](../representations/coauthorship_networks.md) to access, entry, and renewal in scientific communities.

## Operationalization

- Define the field, venue set, or collaboration system in which prior participation is measured.
- Mark each team member as a newcomer if they have not appeared previously in that field or network, and as an incumbent otherwise.
- Compute the fraction or count of incumbents, the fraction or count of newcomers, and optionally the link-type mix among newcomer-newcomer, newcomer-incumbent, incumbent-incumbent, and repeat incumbent-incumbent pairs.
- Use [team link-type composition](team_link_type_composition.md) when the pairwise distribution is substantively important rather than just a member-level incumbent share.
- Compare the mix with field connectivity, citation impact, novelty, disruption, journal impact, or later career outcomes.

## Evidence and Validations

- Verified full-text evidence from Guimera et al. (2005) defines newcomers as agents with little experience in the field and incumbents as established agents with prior participation.
- The same paper models team assembly with a parameter `p`, the probability that a team member is drawn from the incumbent pool; higher `p` means fewer entry opportunities for newcomers.
- Guimera et al. report that the mixture of newcomer and incumbent link types reflects team diversity and shapes whether teams draw from homogeneous or more varied knowledge pools.
- In economics, ecology, and social psychology, the verified text reports a positive association between `p` and journal impact factor, suggesting that high-performing teams often contain more incumbents while still needing diversity from other assembly parameters.

## Caveats

- "Newcomer" is field-relative; a senior scientist can be a newcomer to one field and an incumbent in another.
- The measure does not directly capture skill, demographic diversity, contribution role, or institutional status.
- Database coverage and author disambiguation affect whether earlier participation is observed.

## Links

- [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md)
- [repeat incumbent collaboration fraction](repeat_incumbent_collaboration_fraction.md)
- [team link-type composition](team_link_type_composition.md)
- [team self-assembly models](../methods/team_self_assembly_models.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [collaboration giant component](collaboration_giant_component.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)

## References

- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; WoS: unknown]

## Metadata

- Concept ID: `newcomer_incumbent_team_mix`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Guimera et al. (2005) (2005)
- Latest seen paper: Guimera et al. (2005) (2005)
- Primary reference DOI: `10.1126/science.1106340`
- OpenAlex ID: `W2150443611`
- Aliases: newcomer fraction; incumbent share; team entry mix; newcomer-incumbent balance
