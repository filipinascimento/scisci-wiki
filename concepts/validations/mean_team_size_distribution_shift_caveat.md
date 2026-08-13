# Mean team-size distribution-shift caveat

## Summary

Mean team-size distribution-shift caveat is the validation warning that rising average team size can reflect a changing distributional shape, especially a growing large-team tail, rather than a uniform increase in ordinary team size.

## Canonical Form

- Unit of analysis: field-period corpus, team-size distribution, mean team size, median team size, tail share, or authorship-mode component.
- Typical representation: mean/median versus full distribution comparison, tail-mass audit, component decomposition, or quantile trend plot.
- Validation target: prevent average authors-per-paper trends from being interpreted as a single homogeneous collaboration shift.
- Empirical signature: the mean rises while small-team components, component shares, or medians change much less than the large-team tail.

## Uses in Science of Science

- Qualifies [mean team-size growth](../measures/mean_team_size_growth.md) and [team-authorship share](../measures/team_authorship_share.md).
- Motivates storing [article team-size distribution](../measures/article_team_size_distribution.md) before applying [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md).
- Connects [authorship-mode parameter trajectories](../measures/authorship_mode_parameter_trajectories.md) to collaboration trend interpretation.
- Helps audit whether [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md) rather than ordinary core-team expansion drives observed mean growth.
- Splits into tail-specific checks such as [extended-team minority mean leverage](extended_team_minority_mean_leverage.md) and [Fermi collaboration tail excess](fermi_collaboration_tail_excess.md).

## Operationalization

- Always plot the empirical team-size distribution or quantiles alongside mean team size.
- Compare mean, median, high percentiles, and very-large-team shares by period.
- Fit or report mode-specific components when distribution shape changes visibly.
- Test whether conclusions hold after excluding or separately modeling mega-collaborations and consortium-authored papers.
- State whether the claim concerns typical teams, all teams, or the large-team tail.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) states that prior studies often focused only on mean or median team sizes, assuming the character of the team-size distribution did not change.
- The paper argues that team growth in many fields is partly due to a change in the character of the team-size distribution.
- In astronomy, Milojevic shows that the average team size rose from 1.5 to 6.7 authors while the distribution changed from a mostly small-team form to a mixture with a large-team tail.
- The fitted model shows that extended-team mean size grows much faster than core-team mean size, making aggregate means insufficient for mechanism-level interpretation.

## Caveats

- A mean shift can still be substantively important even when tail-driven; the caveat limits interpretation, not measurement.
- Distributional audits require enough observations in the tail, which small fields or short windows may lack.
- Median and quantile summaries can also hide multimodal structure.
- Tail changes can reflect real facilities, instruments, consortia, authorship norms, or indexing artifacts.

## Links

- [mean team-size growth](../measures/mean_team_size_growth.md)
- [article team-size distribution](../measures/article_team_size_distribution.md)
- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)
- [team-size distribution reproduction](team_size_distribution_reproduction.md)
- [authorship-mode parameter trajectories](../measures/authorship_mode_parameter_trajectories.md)
- [authorship-mode contribution share](../measures/authorship_mode_contribution_share.md)
- [extended-team minority mean leverage](extended_team_minority_mean_leverage.md)
- [Fermi collaboration tail excess](fermi_collaboration_tail_excess.md)
- [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md)
- [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md)
- [astronomy core-journal team panel](../datasets/astronomy_core_journal_team_panel.md)
- [mega-collaboration degree inflation](mega_collaboration_degree_inflation.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown]

## Metadata

- Concept ID: `mean_team_size_distribution_shift_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: mean team-size caveat; average team-size tail bias; distributional team-size warning; mean authorship growth caveat
