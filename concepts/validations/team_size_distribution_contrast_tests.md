# Team-size distribution contrast tests

## Summary

Team-size distribution contrast tests compare disruption and citation distributions across team-size bins, using tests suited to means and heavy-tailed impact outcomes.

## Canonical Form

- Unit of analysis: paper, patent, software project, team-size bin, disruption score, or citation count.
- Typical representation: pairwise team-size contrasts, mean-disruption comparisons, and distributional tests for citation tails.
- Validation target: confirm that team-size gradients are not artifacts of one summary statistic.
- Empirical signature: disruption distributions shift downward with team size, while citation distributions can shift differently in their high-impact tails.

## Uses in Science of Science

- Supports [team size and disruption](../mechanisms/team_size_disruption.md) by testing distributional separation among team-size groups.
- Complements [team-size disruption-impact tail divergence](team_size_disruption_impact_tail_divergence.md), where citation and disruption outcomes move differently.
- Connects team-science findings to broader [citation distribution scaling](../measures/citation_distribution_scaling.md).

## Operationalization

- Bin focal works by team size.
- Compare disruption scores across bins with mean-oriented tests and effect-size summaries.
- Compare citation distributions with distribution-sensitive tests for long-tailed data.
- Stratify or control by field, year, and document type.
- Report whether conclusions hold for extreme team-size bins where samples are sparse.

## Evidence and Validations

- Verified full-text evidence from Wu et al. (2019) uses two-sample t-tests for disruption-score comparisons across team sizes.
- The same methods use Kolmogorov-Smirnov tests for long-tailed citation distributions.
- These tests support the claim that team size is associated with lower disruption even when larger teams can have stronger high-citation outcomes.

## Caveats

- Large bibliometric samples can make tiny differences statistically significant.
- Team-size bins may mix field conventions, collaboration types, and mega-team exceptions.
- Distributional tests should be paired with graphical diagnostics and substantively interpretable effect sizes.

## Links

- [team size and disruption](../mechanisms/team_size_disruption.md)
- [team-size disruption-impact tail divergence](team_size_disruption_impact_tail_divergence.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [within-author team-size disruption test](within_author_team_size_disruption_test.md)
- [disruption variant robustness grid](disruption_variant_robustness_grid.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; SciSciNet: W2913773162; WoS: unknown]

## Metadata

- Concept ID: `team_size_distribution_contrast_tests`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: team-size distribution tests; team-size KS citation tests; team-size disruption t-tests; team-size outcome contrast battery
