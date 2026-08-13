# Recent-cohort power-law fit drift

## Summary

Power-law fits become less dominated by exponential fits in newer cohorts, partly because recent papers have immature post-peak tails.

## Canonical Form

- Unit of analysis: peak-year cohort, exponential fit, power-law fit, F-score, right censoring, or citation plateau.
- Typical representation: time-stratified functional-form comparison.
- Mechanism, measurement, or validation target: temporal drift in citation-decay model selection.
- Empirical signature: the share of papers favoring power-law behavior rises for more recent peak years..

## Uses in Science of Science

- Refines citation-decay validation by linking it to [citation decay model comparison](../methods/citation_decay_model_comparison.md) and [citation decay source method contingency](citation_decay_source_method_contingency.md).
- Useful as a reusable check when [post peak right censoring boundary](post_peak_right_censoring_boundary.md) is interpreted from citation histories.
- Adds cross-links to [citation decay plateau parameter](../measures/citation_decay_plateau_parameter.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- Track the yearly fraction of papers where exponential fit score exceeds power-law fit score.
- Compare top-decile and 11-30 percent citation strata.
- Interpret recent-cohort drift against right-censoring and plateau maturity.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) finds exponential fits usually dominate but the fraction favoring power-law behavior rises for more recent peak years.
- The authors attribute the pattern partly to recent papers not reaching the long-run plateau.

## Caveats

- The drift may reflect right-censoring and immature post-peak tails rather than a real change in decay physics.
- Fit comparisons can be sensitive to the available post-peak length.

## Links

- [Citation decay model comparison](../methods/citation_decay_model_comparison.md)
- [Citation-decay source-method contingency](citation_decay_source_method_contingency.md)
- [Post-peak right-censoring boundary](post_peak_right_censoring_boundary.md)
- [Citation decay plateau parameter](../measures/citation_decay_plateau_parameter.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; SciSciNet: W1833467796; WoS: unknown]

## Metadata

- Concept ID: `recent_cohort_power_law_fit_drift`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: power-law fit improvement over time; recent-cohort decay-form drift; functional-form drift in citation aging
