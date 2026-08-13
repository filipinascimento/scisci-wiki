# Extended-team choice propensity

## Summary

Extended-team choice propensity is the probability that a lead author uses an extended team rather than a core team for a paper.

## Canonical Form

- Unit of analysis: lead author, article, authorship mode, field, or time period.
- Typical representation: simulation parameter `p_ext`, fitted extended-team article share, or model-implied probability of choosing an extended team.
- Measurement target: separate the frequency of extended-team use from the size growth of extended teams.
- Empirical signature: a stable extended-team choice probability can coexist with growing mean team size if extended teams themselves grow.

## Uses in Science of Science

- Clarifies why [mean team-size growth](mean_team_size_growth.md) may be driven by tail expansion rather than a rising share of large-team projects.
- Connects [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md) to a behavioral choice parameter.
- Supports [authorship-mode contribution share](authorship_mode_contribution_share.md) and [authorship-mode parameter trajectories](authorship_mode_parameter_trajectories.md).
- Distinguishes frequency of extended-team use from [extended-team minority mean leverage](../validations/extended_team_minority_mean_leverage.md), where stable frequency can still produce large aggregate mean shifts.
- Helps distinguish project-type composition from growth in the coordination scale of existing project types.

## Operationalization

- In simulations, specify the probability that an article requires the extended team.
- In empirical decompositions, estimate the extended-team article share from the fitted truncated power-law component.
- Track the estimated propensity and extended-team mean size separately.
- Compare across fields to test whether large-team growth reflects more frequent extended-team use or larger extended teams.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) sets a fixed extended-team probability of `p_ext = 0.3` in the astronomy simulation.
- The model reproduces 50 years of astronomy team-size distributions without requiring `p_ext` to change over time.
- Milojevic interprets this as suggesting that a similar proportion of astronomy problems may always have required nonindividual effort, while extended teams became conspicuous only after gradual growth.
- The analytical decomposition also finds that extended-team articles account for roughly 30% of astronomy articles over time while extended-team mean size grows rapidly.

## Caveats

- A stable model parameter does not prove that scientists consciously classify projects into core and extended modes.
- Field-level propensity can hide subfield, facility, funding, and instrumentation differences.
- Empirical extended-team share depends on the chosen decomposition and treatment of large collaborations.

## Links

- [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md)
- [authorship-mode parameter trajectories](authorship_mode_parameter_trajectories.md)
- [authorship-mode contribution share](authorship_mode_contribution_share.md)
- [extended-team minority mean leverage](../validations/extended_team_minority_mean_leverage.md)
- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)
- [team-size distribution reproduction](../validations/team_size_distribution_reproduction.md)
- [mean team-size growth](mean_team_size_growth.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown; SciSciNet: W2109746829]

## Metadata

- Concept ID: `extended_team_choice_propensity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: p_ext; extended-team probability; team-oriented authorship propensity; extended authorship choice parameter
