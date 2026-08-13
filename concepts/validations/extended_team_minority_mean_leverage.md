# Extended-team minority mean leverage

## Summary

Extended-team minority mean leverage is the validation warning that a minority share of extended-team papers can dominate changes in average team size because their author counts grow much faster than core teams.

## Canonical Form

- Unit of analysis: field-period team-size distribution, authorship mode, extended-team share, core-team mean, extended-team mean, or aggregate mean.
- Typical representation: mode-specific mean comparison, component-share plus component-mean table, or tail contribution to aggregate mean.
- Validation target: prevent mean team-size growth from being attributed to all teams when it is largely driven by the extended-team component.
- Empirical signature: extended teams account for a minority of articles but a disproportionate share of the aggregate mean increase.

## Uses in Science of Science

- Refines [mean team-size distribution-shift caveat](mean_team_size_distribution_shift_caveat.md) by identifying the mode that drives aggregate mean growth.
- Uses [authorship-mode contribution share](../measures/authorship_mode_contribution_share.md) and [authorship-mode parameter trajectories](../measures/authorship_mode_parameter_trajectories.md).
- Links [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md) to summary-statistic distortion.
- Complements [Fermi collaboration tail excess](fermi_collaboration_tail_excess.md), which flags named outliers within the extended tail.
- Helps compare [mean team-size growth](../measures/mean_team_size_growth.md) against typical core-team collaboration growth.

## Operationalization

- Estimate authorship-mode shares and mode-specific means for each field-period distribution.
- Decompose the aggregate mean into contributions from standard core, core+1, and extended-team components.
- Plot core-team and extended-team means separately over time.
- Report whether the aggregate mean rises because the extended-team share grows, extended-team size grows, or ordinary core-team size grows.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) reports that extended-team articles remain a minority mode in astronomy, making roughly 30% of articles over the 1961-2010 period.
- The same paper reports that the mean size of core teams grows linearly from about 1.1 to 3.2 members, while the mean size of extended teams grows exponentially to 11.2 members.
- Milojevic states that the increase in overall mean team size in astronomy is primarily the result of rapid growth in power-law, extended teams.
- The paper also notes that extended teams affect the overall mean despite representing a minority mode of authorship.

## Caveats

- Tail leverage does not make core-team growth irrelevant; core teams can also grow slowly over time.
- Component estimates depend on decomposition assumptions and treatment of mega-collaborations.
- Some fields may show rising means through ordinary core-team expansion rather than extended-team growth.

## Links

- [mean team-size distribution-shift caveat](mean_team_size_distribution_shift_caveat.md)
- [authorship-mode contribution share](../measures/authorship_mode_contribution_share.md)
- [authorship-mode parameter trajectories](../measures/authorship_mode_parameter_trajectories.md)
- [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md)
- [extended-team choice propensity](../measures/extended_team_choice_propensity.md)
- [mean team-size growth](../measures/mean_team_size_growth.md)
- [Fermi collaboration tail excess](fermi_collaboration_tail_excess.md)
- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown; SciSciNet: W2109746829]

## Metadata

- Concept ID: `extended_team_minority_mean_leverage`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: extended-team mean leverage; minority tail mean effect; large-team mean-size leverage; extended-mode mean distortion
