# Extended-team member source sampling

## Summary

Extended-team member source sampling is a simulation rule in which new members of growing extended teams are drawn from current members' core teams or a general author pool.

## Canonical Form

- Unit of analysis: extended team, new team member, current member, core team, or author pool.
- Typical representation: sampling rule, candidate member set, fallback pool, and growth probability.
- Method target: model how large scientific teams expand through local coauthorship neighborhoods.
- Empirical signature: teams with productive and larger current members have greater opportunity to accrete additional members.

## Uses in Science of Science

- Adds an implementation detail to [lead-author team choice model](lead_author_team_choice_model.md).
- Specifies the member-entry side of [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md).
- Connects team-size modeling to [coauthorship networks](../representations/coauthorship_networks.md).
- Provides a mechanism-compatible interpretation of [repeat-incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md).

## Operationalization

- Initialize an extended team from a lead author's core team.
- When growth occurs, sample candidate members from the core teams of existing extended-team members.
- If no local candidates are available, draw from a broader author pool.
- Weight growth by the aggregate productivity of current members, following the selected cumulative-advantage variant.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) states that extended teams initially share members with the core team.
- The paper allows extended teams to add members in proportion to current members' aggregate productivity.
- New members are randomly selected from core teams of existing members, or from a general pool if no such candidates are available.

## Caveats

- The rule is a generative approximation, not direct observation of recruitment decisions.
- Core-team membership must be inferred from publication histories, so the candidate set can be noisy.
- A local source-sampling rule may understate institutional, funding, or instrument-driven recruitment channels.

## Links

- [lead-author team choice model](lead_author_team_choice_model.md)
- [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [repeat-incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md)
- [team-size distribution decomposition](team_size_distribution_decomposition.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; SciSciNet: W2109746829; WoS: unknown]

## Metadata

- Concept ID: `extended_team_member_source_sampling`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: extended-team recruitment sampling; core-team member source rule; large-team member sampling; local coauthor pool sampling
