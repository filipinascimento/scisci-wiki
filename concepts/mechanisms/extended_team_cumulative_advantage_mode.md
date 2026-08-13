# Extended-team cumulative-advantage mode

## Summary

Extended-team cumulative-advantage mode is a team-formation mechanism in which initially small teams accumulate additional members in proportion to the prior productivity of their existing members.

## Canonical Form

- Unit of analysis: paper, lead author, field, journal, or authorship mode.
- Typical representation: large-team tail of the team-size distribution, truncated power-law component, productivity-proportional team growth process.
- Mechanism: teams that begin with more or more productive members become more likely to add additional members, creating a large-team tail.
- Empirical signature: a power-law-like tail appears for large teams while small core teams continue to coexist.

## Uses in Science of Science

- Extends [cumulative advantage](cumulative_advantage.md) and [preferential attachment](preferential_attachment.md) from citations and collaborator counts to team membership growth.
- Explains why [mean team-size growth](../measures/mean_team_size_growth.md) can reflect a changing distributional tail rather than only larger ordinary teams.
- Gives a mechanism for very large teams in [coauthorship networks](../representations/coauthorship_networks.md) and large-team science.
- Forms the large-team component in [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md).
- Separates tail growth from the frequency of choosing extended teams through [extended-team choice propensity](../measures/extended_team_choice_propensity.md).
- Explains [extended-team minority mean leverage](../validations/extended_team_minority_mean_leverage.md), where a minority tail component dominates aggregate mean team-size growth.
- Provides a mechanistic bridge to [team size and disruption](team_size_disruption.md), where large teams and small teams are associated with different knowledge-production roles.
- Provides the large-team side of [team core-turnover survival strategy](team_core_turnover_survival_strategy.md), where persistence requires membership growth or replacement rather than a fixed core alone.

## Operationalization

- Identify the large-`k` tail in field-period team-size distributions.
- Fit the extended-team component as a power-law or exponentially truncated power-law term.
- In simulation, allow extended teams to begin as core teams and add members in proportion to aggregate lead-author productivity of current members.
- Compare tail slope, cutoff strength, and extended-team share across fields and periods.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) defines extended teams as teams that start as core teams but then add new members dynamically.
- The model adds new members in proportion to the aggregate productivity of current members; Milojevic reports that using lead-author productivity best reproduces empirical distributions.
- This mechanism lets some teams grow beyond sizes attainable by a Poisson process and generates a power-law tail of large teams after enough time has passed.
- The paper emphasizes coexistence: extended teams do not replace core teams, and a lead author can publish through either mode depending on project needs.
- Recent astronomy, ecology, social psychology, and arXiv distributions all show more prominent extended-team tails than literature or mathematics.
- Milojevic also links large-team tails to [collaborator-distribution team-size projection](../methods/collaborator_distribution_team_size_projection.md), reframing some collaborator-count tails as team-size effects.

## Caveats

- Productivity-proportional membership growth is a parsimonious mechanism and may stand in for equipment, facilities, consortia, data infrastructure, or field norms.
- Large-team tails can be sensitive to consortium-name parsing and whether group authors are expanded.
- Tail fits should be reported with small-team components rather than treated as a single distribution over all team sizes.

## Links

- [core-team Poisson mode](core_team_poisson_mode.md)
- [team core-turnover survival strategy](team_core_turnover_survival_strategy.md)
- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)
- [authorship-mode contribution share](../measures/authorship_mode_contribution_share.md)
- [extended-team choice propensity](../measures/extended_team_choice_propensity.md)
- [extended-team minority mean leverage](../validations/extended_team_minority_mean_leverage.md)
- [authorship-mode parameter trajectories](../measures/authorship_mode_parameter_trajectories.md)
- [collaborator-distribution team-size projection](../methods/collaborator_distribution_team_size_projection.md)
- [cross-field team-size decomposition validation](../validations/cross_field_team_size_decomposition_validation.md)
- [team-size distribution reproduction](../validations/team_size_distribution_reproduction.md)
- [cumulative advantage](cumulative_advantage.md)
- [preferential attachment](preferential_attachment.md)
- [collaborator-count distribution](../measures/collaborator_count_distribution.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [team size and disruption](team_size_disruption.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown]

## Metadata

- Concept ID: `extended_team_cumulative_advantage_mode`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: extended teams; productivity-proportional team growth; large-team power-law tail; team-oriented mode
