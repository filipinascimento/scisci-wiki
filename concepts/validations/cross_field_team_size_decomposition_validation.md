# Cross-field team-size decomposition validation

## Summary

Cross-field team-size decomposition validation tests whether the same team-size mixture model fits fields with different collaboration norms.

## Canonical Form

- Unit of analysis: field-period team-size distribution, fitted decomposition, or field comparison.
- Typical representation: fitted curves and parameter table across multiple disciplines.
- Validation target: show that small-team Poisson components plus a large-team tail are not an astronomy-only artifact.
- Empirical signature: one functional form fits fields with very different team sizes while estimated parameters vary meaningfully.

## Uses in Science of Science

- Strengthens [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md) by testing it beyond its primary field panel.
- Provides external validity for [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md), [core+1 mentor component](../mechanisms/core_plus_one_mentor_component.md), and [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md).
- Helps compare fields without collapsing everything to [mean team-size growth](../measures/mean_team_size_growth.md).
- Supports [domain-specific SciSci studies](../methods/domain_specific_scisci_studies.md) by separating universal form from field-specific parameters.

## Operationalization

- Fit the same decomposition model to multiple field-period team-size distributions.
- Compare goodness-of-fit, component shares, Poisson rates, tail slopes, and mode-specific means.
- Treat deviations as evidence about field-specific authorship conventions, instrumentation, or data coverage.
- Report sample sizes and journal or archive selection rules for each field.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) applies the analytical decomposition to mathematics, ecology, literature, social psychology, and arXiv distributions for 2006-2010.
- The paper reports that the same function, combining two Poisson terms and a truncated power-law component, fits all these distributions well.
- The fitted parameters reveal substantive field variation: literature is almost entirely standard-core output, mathematics has small extended teams, and astronomy/arXiv show much stronger large-team tails.
- Milojevic reports Kolmogorov-Smirnov tests for several fitted fields and notes that small sample size limits the literature test.

## Caveats

- A universal fitting form does not imply identical mechanisms or incentives across fields.
- Journal panels and arXiv records differ in scope and publication practices.
- Fields with few large teams or few observations can produce unstable tail estimates.

## Links

- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)
- [team-size distribution reproduction](team_size_distribution_reproduction.md)
- [authorship-mode parameter trajectories](../measures/authorship_mode_parameter_trajectories.md)
- [authorship-mode contribution share](../measures/authorship_mode_contribution_share.md)
- [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md)
- [core+1 mentor component](../mechanisms/core_plus_one_mentor_component.md)
- [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md)
- [domain-specific SciSci studies](../methods/domain_specific_scisci_studies.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown; SciSciNet: W2109746829]

## Metadata

- Concept ID: `cross_field_team_size_decomposition_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: cross-field team-size fit; team-size model external validity; field comparison team-size decomposition; universal authorship-mode validation
