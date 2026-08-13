# Team-size distribution decomposition

## Summary

Team-size distribution decomposition fits observed authors-per-paper distributions as a mixture of authorship modes, typically small-team Poisson components plus a large-team power-law component.

## Canonical Form

- Unit of analysis: field-period team-size distribution.
- Typical representation: `F(k) = FP1(k) + FP2(k) + FPL(k)`, where `k` is team size.
- Method target: estimate the contribution of standard core teams, core +1 teams, and extended teams directly from the distribution.
- Empirical signature: a single Poisson or single power-law model fits poorly, while a mode-aligned mixture captures both the small-team hook and the large-team tail.

## Uses in Science of Science

- Operationalizes [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md) and [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md).
- Converts raw [mean team-size growth](../measures/mean_team_size_growth.md) into interpretable changes in authorship modes.
- Supports [authorship-mode contribution share](../measures/authorship_mode_contribution_share.md) by integrating fitted components.
- Supports longitudinal [authorship-mode parameter trajectories](../measures/authorship_mode_parameter_trajectories.md) by fitting the same model repeatedly over time.
- Provides a validation target for [team-size distribution reproduction](../validations/team_size_distribution_reproduction.md).
- Is grounded in simulation by [lead-author team choice model](lead_author_team_choice_model.md), which generates the component shapes from repeated publication decisions.
- Gives a compact field-comparison method for [coauthorship networks](../representations/coauthorship_networks.md) when full team-assembly histories are unavailable.
- Splits implementation and validation details into [team-size tail log binning](team_size_tail_log_binning.md), [low-k hook diagnostic](../validations/low_k_hook_diagnostic.md), [authorship-mode dominance threshold](../measures/authorship_mode_dominance_threshold.md), [extended-team member source sampling](extended_team_member_source_sampling.md), and [component ablation fit validation](../validations/component_ablation_fit_validation.md).

## Operationalization

- Construct an empirical [article team-size distribution](../measures/article_team_size_distribution.md) by field and period.
- Fit a standard Poisson component for ordinary core teams.
- Fit a shifted Poisson component for core +1 teams when two-author teams are overrepresented.
- Fit an exponentially truncated power-law component for extended teams.
- Estimate parameters with likelihood or goodness-of-fit procedures and report component shares, Poisson rates, tail slope, and cutoff strength.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) proposes an analytical form that decomposes empirical team-size distributions into two Poisson functions and a truncated power-law component.
- In the paper, each functional component corresponds to a modeled authorship mode: standard core teams, core +1 teams, and extended teams.
- The method is motivated because recovering mode contributions through full simulation is impractical for routine empirical interpretation.
- Milojevic reports good fits for astronomy and applies the same decomposition to mathematics, ecology, literature, social psychology, and arXiv distributions for 2006-2010.
- Removing components from the analytical expression reduces fit quality, supporting the interpretation that the distribution is a mixture rather than a single generative process.
- The cross-field application is split out as [cross-field team-size decomposition validation](../validations/cross_field_team_size_decomposition_validation.md).
- The decomposition is also a response to the [mean team-size distribution-shift caveat](../validations/mean_team_size_distribution_shift_caveat.md): mechanism claims should use the distribution, not only the mean.
- A later Milojevic pass separates tail binning, low-`k` hook diagnosis, team-size-conditional mode dominance, extended-team member sourcing, and component-ablation validation from the broader decomposition method.

## Caveats

- Component labels are model-based interpretations, not observed author-role categories.
- Fitting can be unstable in small fields or fields with few large teams.
- The decomposition should be accompanied by data-cleaning choices for author counts, group authors, and field-year denominators.

## Links

- [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md)
- [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md)
- [core+1 mentor component](../mechanisms/core_plus_one_mentor_component.md)
- [authorship-mode contribution share](../measures/authorship_mode_contribution_share.md)
- [article team-size distribution](../measures/article_team_size_distribution.md)
- [authorship-mode parameter trajectories](../measures/authorship_mode_parameter_trajectories.md)
- [collaborator-distribution team-size projection](collaborator_distribution_team_size_projection.md)
- [lead-author team choice model](lead_author_team_choice_model.md)
- [team-size distribution reproduction](../validations/team_size_distribution_reproduction.md)
- [cross-field team-size decomposition validation](../validations/cross_field_team_size_decomposition_validation.md)
- [mean team-size growth](../measures/mean_team_size_growth.md)
- [mean team-size distribution-shift caveat](../validations/mean_team_size_distribution_shift_caveat.md)
- [team-authorship share](../measures/team_authorship_share.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [team-size tail log binning](team_size_tail_log_binning.md)
- [low-k hook diagnostic](../validations/low_k_hook_diagnostic.md)
- [authorship-mode dominance threshold](../measures/authorship_mode_dominance_threshold.md)
- [extended-team member source sampling](extended_team_member_source_sampling.md)
- [component ablation fit validation](../validations/component_ablation_fit_validation.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown]

## Metadata

- Concept ID: `team_size_distribution_decomposition`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: authorship-mode decomposition; Poisson plus truncated power law; team-size mixture model; F(k) decomposition
