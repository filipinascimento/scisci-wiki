# Team-size distribution reproduction

## Summary

Team-size distribution reproduction validates a team-formation model by testing whether simulated or fitted distributions recover empirical authors-per-paper distributions across time and fields.

## Canonical Form

- Unit of analysis: field-period team-size distribution.
- Typical representation: empirical points versus simulated or fitted distribution curves, plus goodness-of-fit statistics.
- Validation target: whether the model reproduces the full distribution, including small-team peak, low-`k` hook, mean shift, and large-team tail.
- Empirical signature: model curves closely track observed team-size distributions in multiple periods or fields.

## Uses in Science of Science

- Validates [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md) and [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md).
- Tests whether [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md) is more than a descriptive curve fit.
- Guards against interpreting [mean team-size growth](../measures/mean_team_size_growth.md) without checking the distributional shape.
- Uses [article team-size distribution](../measures/article_team_size_distribution.md) as the empirical target and operationalizes [mean team-size distribution-shift caveat](mean_team_size_distribution_shift_caveat.md).
- Provides a reusable validation design for simulation-based [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md).

## Operationalization

- Select a field-specific article corpus with consistent author-count coverage, such as the [astronomy core-journal team panel](../datasets/astronomy_core_journal_team_panel.md).
- Simulate article production using the proposed team-formation process, matching the empirical number and sequence of articles where appropriate.
- Compare simulated and empirical team-size distributions for several periods.
- Validate both central mass and tails; report goodness-of-fit and sensitivity to component removal.
- Replicate across fields with different team norms.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) simulates 154,221 astronomy articles, matching the article count from 1961-2010.
- The model is tested against empirical astronomy distributions for 1961-1965, 1991-1995, and 2006-2010.
- The paper reports that the model reproduces the emergence and later strengthening of the power-law tail as well as the changing low-team-size hook.
- The analytical decomposition is then fitted to other fields, including mathematics, ecology, literature, social psychology, and arXiv, showing that the same functional form can describe diverse team-size distributions.
- The cross-field fit is split out as [cross-field team-size decomposition validation](cross_field_team_size_decomposition_validation.md).
- Fit comparisons support keeping both Poisson core components and the truncated power-law extended-team component.

## Caveats

- Reproduction of a distribution does not uniquely identify the causal microprocess.
- Simulations can match team-size distributions while missing author identities, topic complexity, funding, or institutional coordination.
- Field-specific journal sets and author-count cleaning determine what counts as the empirical target.

## Links

- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)
- [article team-size distribution](../measures/article_team_size_distribution.md)
- [mean team-size distribution-shift caveat](mean_team_size_distribution_shift_caveat.md)
- [astronomy core-journal team panel](../datasets/astronomy_core_journal_team_panel.md)
- [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md)
- [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md)
- [authorship-mode contribution share](../measures/authorship_mode_contribution_share.md)
- [cross-field team-size decomposition validation](cross_field_team_size_decomposition_validation.md)
- [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md)
- [team assembly performance gradient](team_assembly_performance_gradient.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown]

## Metadata

- Concept ID: `team_size_distribution_reproduction`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: simulated team-size validation; astronomy team-size reproduction; model-data team distribution match; distributional validation
