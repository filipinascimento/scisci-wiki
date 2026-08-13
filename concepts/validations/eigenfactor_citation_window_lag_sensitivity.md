# Eigenfactor citation-window lag sensitivity

## Summary

Eigenfactor citation-window lag sensitivity checks how journal rankings change when a two-year citation window is replaced by the five-year window used in Eigenfactor-family metrics.

## Canonical Form

- Unit of analysis: journal, field, citation year, cited-publication year, citation-window length, or ranking comparison.
- Typical representation: two-year versus five-year rank shifts, field citation-age profiles, or citation-timing histograms.
- Validation target: whether a journal metric penalizes fields where citations mature slowly.
- Empirical signature: slower-aging fields gain relative standing under longer windows compared with fields whose citations peak quickly.

## Uses in Science of Science

- Gives a journal-metric-specific instance of [citation window selection](../methods/citation_window_selection.md).
- Helps interpret [Article Influence versus impact-factor divergence](article_influence_impact_factor_divergence.md).
- Provides a field-tempo check for [Article Influence Score](../measures/article_influence_score.md) and [journal impact factor](../measures/journal_impact_factor.md).
- Connects journal rankings to broader motifs such as [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md) and [citation trajectory models](../methods/citation_trajectory_models.md).

## Operationalization

- Compute or obtain journal metrics under different citation windows.
- Plot citations from a focal citing year to earlier publication years by field.
- Preserve the underlying [field citation tempo profile](../representations/field_citation_tempo_profile.md) when citation-window conclusions depend on field-specific maturation curves.
- Identify fields where citations peak outside the shorter window.
- Compare ranking changes and report whether window choice explains important metric divergence.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) states that impact factor historically used a two-year census window, whereas Eigenfactor metrics count citations across a five-year window.
- The paper shows a field-timing contrast between Materials Science and Horticulture: Materials Science citations peak closer to the two-year window, while Horticulture citations peak later and decline less sharply.
- West et al. conclude that a five-year window favors fields with slower citation maturation relative to a two-year window.
- Their notes also attribute a large Article Influence rank jump for *NBER Macroeconomics Annual* partly to window length.

## Caveats

- Longer windows improve coverage of slow fields but can reduce timeliness.
- Window effects are entangled with reference-list length, preprint citation behavior, review journals, and database coverage.
- Field-level examples do not prove the best window for a specific evaluation task.
- Journal rankings should report window sensitivity when field tempos differ.

## Links

- [citation window selection](../methods/citation_window_selection.md)
- [field citation tempo profile](../representations/field_citation_tempo_profile.md)
- [Article Influence versus impact-factor divergence](article_influence_impact_factor_divergence.md)
- [Article Influence Score](../measures/article_influence_score.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [citation tail maturation bias](citation_tail_maturation_bias.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A network approach to assessing scholarly journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]

## Metadata

- Concept ID: `eigenfactor_citation_window_lag_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: Eigenfactor five-year window sensitivity; journal citation lag sensitivity; Article Influence window lag; two-year five-year journal window contrast
