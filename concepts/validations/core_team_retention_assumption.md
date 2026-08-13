# Core-team retention assumption

## Summary

Core-team retention assumption is the modeling choice that returning lead authors preserve their original core teams across repeated publications.

## Canonical Form

- Unit of analysis: lead author, core team, repeat publication, author career, or team simulation.
- Typical representation: retained core-team membership rule, repeat-author publication probability, team dissolution rule, or sensitivity check.
- Validation target: clarify which parts of a team-size model come from persistent small-team structure rather than newly drawn teams for every paper.
- Empirical signature: a simulated team-size distribution can be reproduced while lead authors keep a stable core-team base and extended teams grow around it.

## Uses in Science of Science

- Qualifies [lead-author team choice model](../methods/lead_author_team_choice_model.md) by making one of its behavioral assumptions explicit.
- Connects [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md) to career-level publication histories.
- Helps interpret [core+1 mentor component](../mechanisms/core_plus_one_mentor_component.md), because mentor-like additions may persist differently from ordinary collaborators.
- Supplies a modeling assumption for the stable-core side of [team core-turnover survival strategy](../mechanisms/team_core_turnover_survival_strategy.md).
- Supports sensitivity checks for [team-size distribution reproduction](team_size_distribution_reproduction.md) and [authorship-mode parameter trajectories](../measures/authorship_mode_parameter_trajectories.md).

## Operationalization

- Assign each new lead author an initial core team at first publication.
- When the lead author publishes again, reuse the original core team rather than drawing an entirely new one.
- Add optional publication-probability and retirement/dissolution rules separately from the retention rule.
- Test whether fitted distributions change if core teams are redrawn, partially retained, or dissolved at different rates.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) states that existing authors, when they publish again, retain their original core teams.
- The same model sets the probability that a previously publishing author publishes again to 0.8.
- Milojevic also includes retirement and team dissolution but notes that retirement is not essential for reproducing the empirical team-size distribution.
- The assumption lets stable core-team structure coexist with dynamically growing extended teams.

## Caveats

- Real core teams can dissolve, change institutions, add students, or split into multiple lines of work.
- Stable core-team retention may be more plausible in some fields and career stages than others.
- Retention assumptions affect author-centric outputs such as collaborator counts and productivity distributions, not only team-size distributions.

## Links

- [lead-author team choice model](../methods/lead_author_team_choice_model.md)
- [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md)
- [team core-turnover survival strategy](../mechanisms/team_core_turnover_survival_strategy.md)
- [core+1 mentor component](../mechanisms/core_plus_one_mentor_component.md)
- [team-size distribution reproduction](team_size_distribution_reproduction.md)
- [authorship-mode parameter trajectories](../measures/authorship_mode_parameter_trajectories.md)
- [collaborator-distribution team-size projection](../methods/collaborator_distribution_team_size_projection.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown; SciSciNet: W2109746829]

## Metadata

- Concept ID: `core_team_retention_assumption`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: retained core team rule; persistent core-team assumption; repeat-author core retention; stable core team simulation rule
