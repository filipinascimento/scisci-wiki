# Publication-lag boundary check

## Summary

Publication-lag boundary check tests whether apparent post-event effects are actually caused by manuscripts already in the publication pipeline.

## Canonical Form

- Unit of analysis: paper, event date, publication date, scientist, or robustness window.
- Typical representation: exclusion or sensitivity check around early post-event publications.
- Validation target: separate treatment response from pre-existing work becoming visible later.
- Empirical signature: results persist after accounting for plausible publication lags.

## Uses in Science of Science

- Adds timing validation to [setback-effect robustness grid](setback_effect_robustness_grid.md).
- Complements [citation window selection](../methods/citation_window_selection.md) and [citation data census dates](../methods/citation_data_census_dates.md).
- Links career-event studies to [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md).

## Operationalization

- Define a lag window where publications may have been initiated before treatment.
- Exclude or separately analyze papers appearing soon after the event.
- Repeat outcome models with lag-adjusted windows.
- Report whether conclusions rely on immediate post-event outputs.

## Evidence and Validations

- Verified full-text evidence from Wang, Jones, and Wang (2019) checks whether near-miss effects are explained by publication timing around the funding decision.
- The robustness check addresses the possibility that already-submitted work drives early post-treatment differences.
- This helps localize the setback effect to later career output rather than pipeline artifacts.

## Caveats

- Publication lags vary by field and journal.
- Submission dates are better than publication dates but often unavailable.
- Lag checks cannot fully recover when the underlying research was conceived.

## Links

- [citation window selection](../methods/citation_window_selection.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [setback-effect robustness grid](setback_effect_robustness_grid.md)

## References

- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]

## Metadata

- Concept ID: `publication_lag_boundary_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2019) (2019)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-12189-3`
- OpenAlex ID: `W2977412048`
- Dimensions ID: `pub.1121403320`
- SciSciNet ID: `W3099970011`
- Aliases: publication pipeline lag check; post-treatment lag robustness; manuscript pipeline boundary check
