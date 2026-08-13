# Component ablation fit validation

## Summary

Component ablation fit validation removes components from a fitted mixture model and checks whether empirical fit degrades.

## Canonical Form

- Unit of analysis: fitted distribution, mixture component, ablated model, or goodness-of-fit statistic.
- Typical representation: full model fit compared with no-component or reduced-component fits.
- Validation target: establish that each component contributes meaningful explanatory power.
- Empirical signature: removing a component worsens the fit in the region that component was meant to explain.

## Uses in Science of Science

- Validates [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md).
- Gives [team-size distribution reproduction](team_size_distribution_reproduction.md) a component-level stress test.
- Supports [cross-field team-size decomposition validation](cross_field_team_size_decomposition_validation.md) by checking whether the same components remain necessary outside the original field.
- Helps prevent overinterpretation of one-component fits to heterogeneous science-of-science distributions.

## Operationalization

- Fit the full mixture model to the empirical distribution.
- Remove one component at a time and refit or compare residuals.
- Identify which distribution region deteriorates after each removal.
- Report the full and reduced fits, not just the preferred model.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) states that the empirical astronomy team-size distribution can be decomposed into two Poisson functions and a truncated power-law component.
- The paper reports that core teams are well fit by Poisson functions and extended teams by an exponentially truncated power-law component.
- Milojevic notes that removing components from the analytical expression reduces the quality of the fit.

## Caveats

- Component ablation can support necessity without proving the sociological interpretation of a component.
- If components are highly correlated or overlapping, removal tests can be unstable.
- Goodness-of-fit statistics should be interpreted with visual residuals and field knowledge.

## Links

- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)
- [team-size distribution reproduction](team_size_distribution_reproduction.md)
- [cross-field team-size decomposition validation](cross_field_team_size_decomposition_validation.md)
- [low-k hook diagnostic](low_k_hook_diagnostic.md)
- [authorship-mode dominance threshold](../measures/authorship_mode_dominance_threshold.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; SciSciNet: W2109746829; WoS: unknown]

## Metadata

- Concept ID: `component_ablation_fit_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: mixture-component ablation; component-removal fit check; distributional ablation validation; reduced-mixture fit test
