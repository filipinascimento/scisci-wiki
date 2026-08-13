# Repeat incumbent collaboration fraction

## Summary

Repeat incumbent collaboration fraction measures how much team formation reuses prior collaboration ties among established participants.

## Canonical Form

- Unit of analysis: team, field, journal, time window, or temporal coauthorship network.
- Typical representation: author-author collaboration graph with incumbents labeled by prior field participation and repeat ties labeled by prior coauthorship.
- Mechanism or measurement target: reuse of trusted collaborators, closure of established circles, and reduced entry or recombination opportunities.
- Empirical signature: a high share of incumbent-incumbent links in new teams connect people who have already collaborated before.

## Uses in Science of Science

- Provides a tie-level measure for [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md).
- Helps explain variation in [collaboration clustering coefficient](collaboration_clustering_coefficient.md), because repeated incumbent ties reinforce local closure.
- Complements [newcomer-incumbent team mix](newcomer_incumbent_team_mix.md) by separating experience composition from repeated collaboration among experienced members.
- Feeds the mechanism page for [repeat collaboration lock-in](../mechanisms/repeat_collaboration_lock_in.md), where repeated incumbent ties stabilize closed collaboration circles.
- Functions as one component of [team link-type composition](team_link_type_composition.md).

## Operationalization

- Define incumbents as team members with prior appearances in the field or collaboration network.
- For each new team, enumerate incumbent-incumbent pairs.
- Mark each pair as repeat if the same pair collaborated before the focal team.
- Aggregate the repeat incumbent-incumbent share as `fR` by team, journal, field, or time window; optionally estimate the model parameter `q` for repeat-collaboration propensity.

## Evidence and Validations

- Verified full-text evidence from Guimera et al. (2005) distinguishes four link types within a team, including repeat incumbent-incumbent links.
- The paper's team-assembly model includes parameter `q`, the probability that an incumbent chooses a prior collaborator rather than a new incumbent collaborator.
- Guimera et al. report that high repeat incumbent-incumbent fraction means established collaboration patterns change slowly, while low values correspond to high turnover and rare repeated collaboration.
- In the verified text, higher-impact journals in economics, ecology, and social psychology have lower `q`, which the authors interpret as evidence that less diverse teams tend to have lower performance.

## Caveats

- Repeat ties can reflect efficient coordination, not only closure or intellectual homogeneity.
- Field size, career length, and database start dates affect how many prior collaborations can be observed.
- Large teams create many pairwise opportunities, so the denominator should be handled consistently.

## Links

- [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md)
- [newcomer-incumbent team mix](newcomer_incumbent_team_mix.md)
- [team link-type composition](team_link_type_composition.md)
- [team self-assembly models](../methods/team_self_assembly_models.md)
- [team assembly parameter space](../methods/team_assembly_parameter_space.md)
- [repeat collaboration lock-in](../mechanisms/repeat_collaboration_lock_in.md)
- [collaboration clustering coefficient](collaboration_clustering_coefficient.md)
- [triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)

## References

- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; WoS: unknown]

## Metadata

- Concept ID: `repeat_incumbent_collaboration_fraction`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Guimera et al. (2005) (2005)
- Latest seen paper: Guimera et al. (2005) (2005)
- Primary reference DOI: `10.1126/science.1106340`
- OpenAlex ID: `W2150443611`
- Aliases: repeat collaborator ties; prior incumbent collaboration; repeated coauthorship fraction; fR
