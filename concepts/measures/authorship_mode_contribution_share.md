# Authorship-mode contribution share

## Summary

Authorship-mode contribution share measures the fraction of articles attributed to fitted small-core, core +1, and extended-team modes within a field-period team-size distribution.

## Canonical Form

- Unit of analysis: field, journal set, time period, or corpus.
- Typical representation: percentage of articles assigned to standard core, core +1, and extended-team components.
- Measurement target: relative prevalence of different team-formation modes, not only the average team size.
- Empirical signature: component shares can remain stable or shift even when mean team size rises.

## Uses in Science of Science

- Turns [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md) into a compact longitudinal measure.
- Distinguishes growth in [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md), [core+1 mentor component](../mechanisms/core_plus_one_mentor_component.md), and [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md).
- Complements [team-authorship share](team_authorship_share.md) and [mean team-size growth](mean_team_size_growth.md) by locating where in the distribution the change occurs.
- Feeds [authorship-mode parameter trajectories](authorship_mode_parameter_trajectories.md) and [extended-team choice propensity](extended_team_choice_propensity.md).
- Supports field comparisons of team-oriented versus traditional small-team authorship.

## Operationalization

- Fit a mode-aligned distributional decomposition for each field-period cell.
- Integrate each component over the observed team-size support.
- Normalize the component integrals so the standard core, core +1, and extended-team shares sum to one.
- Report shares alongside fitted Poisson rates, power-law slope, sample size, and author-count cleaning rules.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) integrates the fitted components of the 2006-2010 astronomy team-size distribution.
- The paper reports that standard core teams account for most recent astronomy articles, core +1 teams account for a smaller portion, and the truncated power-law component accounts for the extended-team share.
- Applied across fields, the measure shows strong heterogeneity: literature is almost entirely standard core mode, mathematics has small teams with some extended-mode contribution, and astronomy/arXiv have much stronger large-team tails.
- For astronomy over 1961-2010, the fitted parameters show both growth in core-team Poisson rates and a flattening extended-team tail, implying that mean team-size growth is not a single-mechanism trend.
- The same evidence supports [cross-field team-size decomposition validation](../validations/cross_field_team_size_decomposition_validation.md) across mathematics, ecology, literature, social psychology, and arXiv.

## Caveats

- Shares depend on model specification and should not be interpreted as directly observed labels on individual papers.
- The extended-team share can be underestimated when large consortia are collapsed into group authors.
- Cross-field comparisons need consistent journal selection and field boundaries.

## Links

- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)
- [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md)
- [core+1 mentor component](../mechanisms/core_plus_one_mentor_component.md)
- [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md)
- [extended-team choice propensity](extended_team_choice_propensity.md)
- [authorship-mode parameter trajectories](authorship_mode_parameter_trajectories.md)
- [team-size distribution reproduction](../validations/team_size_distribution_reproduction.md)
- [cross-field team-size decomposition validation](../validations/cross_field_team_size_decomposition_validation.md)
- [team-authorship share](team_authorship_share.md)
- [mean team-size growth](mean_team_size_growth.md)
- [relative team-impact ratio](relative_team_impact_ratio.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown]

## Metadata

- Concept ID: `authorship_mode_contribution_share`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: standard core share; core plus one share; extended-team share; team-mode fractions
