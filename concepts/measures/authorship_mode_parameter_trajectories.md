# Authorship-mode parameter trajectories

## Summary

Authorship-mode parameter trajectories track how fitted small-team rates, large-team tail slopes, component shares, and mode-specific mean sizes change over time.

## Canonical Form

- Unit of analysis: field, period, fitted team-size distribution, or authorship mode.
- Typical representation: time series of Poisson rates, power-law slope, component shares, and mode-specific means.
- Measurement target: decompose aggregate team-size growth into changes in core-team size, extended-team tail prominence, and mode composition.
- Empirical signature: the overall mean can rise because extended-team mean size grows faster than core-team mean size even when mode shares are stable.

## Uses in Science of Science

- Extends [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md) from one period to longitudinal analysis.
- Gives [mean team-size growth](mean_team_size_growth.md) a distribution-aware explanation.
- Converts repeated [article team-size distribution](article_team_size_distribution.md) snapshots into parameter trends.
- Connects [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md), [core+1 mentor component](../mechanisms/core_plus_one_mentor_component.md), and [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md).
- Provides a compact diagnostic for whether collaboration growth is broad, tail-driven, or component-share-driven.

## Operationalization

- Fit the decomposition model separately for each field-period distribution.
- Extract standard-core and core+1 Poisson rates, large-team tail slope, component shares, and mode-specific mean team sizes.
- Plot parameter trajectories alongside the overall mean team size.
- Report uncertainty and sensitivity to binning, tail cutoffs, consortium handling, and field-panel construction.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) fits the analytical decomposition to astronomy team sizes in five-year periods from 1961 to 2010.
- The paper reports that the standard-core Poisson rate rises from near zero to a little over three, while the large-team tail slope flattens from about six to about three.
- Milojevic finds that the share of extended-team articles remains around 30%, standard core teams around 60%, and core+1 teams around 10%.
- The same analysis shows core-team mean size growing approximately linearly while extended-team mean size grows much faster, driving the overall mean upward.

## Caveats

- Parameter paths depend on the fitted functional form and field-period binning.
- Stable component shares can still hide changing subfield composition or instrumentation regimes.
- Mean-size trajectories should be read with tail diagnostics because very large teams can dominate the average.

## Links

- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)
- [article team-size distribution](article_team_size_distribution.md)
- [mean team-size distribution-shift caveat](../validations/mean_team_size_distribution_shift_caveat.md)
- [extended-team choice propensity](extended_team_choice_propensity.md)
- [authorship-mode contribution share](authorship_mode_contribution_share.md)
- [mean team-size growth](mean_team_size_growth.md)
- [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md)
- [core+1 mentor component](../mechanisms/core_plus_one_mentor_component.md)
- [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md)
- [astronomy core-journal team panel](../datasets/astronomy_core_journal_team_panel.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown; SciSciNet: W2109746829]

## Metadata

- Concept ID: `authorship_mode_parameter_trajectories`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: authorship-mode time series; Poisson-rate trajectory; power-law slope trajectory; mode-specific team-size trend
