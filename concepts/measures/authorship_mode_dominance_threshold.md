# Authorship-mode dominance threshold

## Summary

Authorship-mode dominance threshold is the team-size point at which the fitted dominant authorship mode switches from core-team production to extended-team production.

## Canonical Form

- Unit of analysis: team size `k`, authorship-mode component, field-period distribution, or fitted mixture.
- Typical representation: component curves with crossover point and mode-dominance ranges.
- Measurement target: identify which generative authorship mode explains papers of a given team size.
- Empirical signature: small teams are dominated by core-team components, while larger teams are dominated by the extended-team tail.

## Uses in Science of Science

- Refines [authorship-mode contribution share](authorship_mode_contribution_share.md) from aggregate shares to team-size-conditional dominance.
- Helps interpret [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md).
- Connects [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md) and [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md) within one distribution.
- Supports field comparisons of how quickly extended-team production becomes dominant.

## Operationalization

- Fit the component distribution for standard core teams, core +1 teams, and extended teams.
- For each team size, compare component contributions to the total fitted density.
- Record the smallest team size where the extended-team component exceeds the core components.
- Report both the crossover threshold and the integrated component shares.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) states that standard core teams dominate articles with up to eight authors.
- The paper reports that extended teams become the dominant mode for articles with 10 or more authors and are responsible for the power-law large-team tail.
- Milojevic also reports aggregate shares for 2006-2010 astronomy: 57% standard core, 12% core +1, and 31% extended-team component.

## Caveats

- The threshold is model-dependent and can change with field, time period, and fit specification.
- A dominance threshold does not assign an observed paper to a true social process with certainty.
- Sparse tails can make the crossover unstable in smaller corpora.

## Links

- [authorship-mode contribution share](authorship_mode_contribution_share.md)
- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)
- [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md)
- [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md)
- [low-k hook diagnostic](../validations/low_k_hook_diagnostic.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; SciSciNet: W2109746829; WoS: unknown]

## Metadata

- Concept ID: `authorship_mode_dominance_threshold`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: team-size mode crossover; core-to-extended threshold; authorship-mode crossover; team-size dominance point
