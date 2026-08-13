# Setback-effect robustness grid

## Summary

Setback-effect robustness grid is a structured battery of alternative outcome definitions, field definitions, windows, controls, matching, and disambiguation choices used to test whether a funding-setback effect is stable.

## Canonical Form

- Unit of analysis: robustness specification, applicant group, outcome measure, field definition, time window, or model variant.
- Typical representation: grid of alternative thresholds, normalized outcomes, field definitions, lags, covariates, matching samples, and regression discontinuity estimates.
- Validation target: whether the sign and interpretation of a setback effect survive plausible analytic choices.
- Empirical signature: near-miss versus narrow-win conclusions remain stable across the grid.

## Uses in Science of Science

- Validates [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md).
- Uses [hit-paper probability](../measures/hit_paper_probability.md), average citations, [field-normalized citation impact](../measures/field_normalized_citation_impact.md), and per-capita outcomes.
- Adds translational robustness endpoints through [clinical-trial publication share](../measures/clinical_trial_publication_share.md), [clinical-trial citation share](../measures/clinical_trial_citation_share.md), and [approximate potential to translate](../measures/approximate_potential_to_translate.md).
- Integrates [coarsened exact matching career comparison](../methods/coarsened_exact_matching_career_comparison.md), [fuzzy funding-threshold regression discontinuity](../methods/fuzzy_funding_threshold_regression_discontinuity.md), and [setback screening-effect check](setback_screening_effect_check.md).
- Uses [setback alternative-mechanism audit](setback_alternative_mechanism_audit.md) when the concern is interpretation through collaboration, topic, mobility, or author-role channels.
- Provides a reusable robustness design for [SciSci quasi-experimental policy evaluation](scisci_quasi_experimental_policy_evaluation.md).
- Connects to [responsible metrics](../measures/responsible_metrics.md) by documenting how citation-outcome choices affect claims.

## Operationalization

- Vary hit-paper thresholds, such as top 1% through top 15% of citation distributions.
- Compare hit probabilities, hits per capita, average citations, normalized citations, and translational outcomes.
- Vary field definitions, citation windows, fiscal-year windows, and publication-lag exclusions.
- Test alternative author name disambiguation methods.
- Add covariates such as publication year, PI gender, PI race, institution reputation, and prior NIH experience.
- Re-run matching, regression, and screening-adjusted analyses.

## Evidence and Validations

- Verified full-text evidence from Wang, Jones, and Wang (2019) reports robustness across hit-paper thresholds from top 1% to top 15%.
- The paper checks hits per capita, field-and-year-normalized citations, alternative field definitions using MeSH, alternative fiscal years, publication lags, ex post funding status, and several author name disambiguation methods.
- Wang et al. also control for publication year, PI gender, PI race, institution reputation measured by successful R01 awards, and prior NIH experience.
- The paper reports consistent conclusions across Coarsened Exact Matching, fuzzy regression discontinuity, and conservative screening-removal analyses.
- Wang et al. also test whether the near-miss advantage extends beyond citation measures, using clinical-trial papers, clinical-trial citations, and APT translational-potential outcomes.
- The robustness grid supports the claim that the near-miss performance advantage is not an artifact of one citation threshold, field definition, lag assumption, or matching choice.

## Caveats

- Robustness grids can still miss unobserved mechanisms or untested model choices.
- Many specifications increase the risk of selective reporting unless the grid is documented transparently.
- Stable citation outcomes do not prove broader social or scientific value.
- Robustness in one funding context does not imply generalization to all early-career setbacks.

## Links

- [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md)
- [hit-paper probability](../measures/hit_paper_probability.md)
- [clinical-trial publication share](../measures/clinical_trial_publication_share.md)
- [clinical-trial citation share](../measures/clinical_trial_citation_share.md)
- [approximate potential to translate](../measures/approximate_potential_to_translate.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [coarsened exact matching career comparison](../methods/coarsened_exact_matching_career_comparison.md)
- [fuzzy funding-threshold regression discontinuity](../methods/fuzzy_funding_threshold_regression_discontinuity.md)
- [setback screening-effect check](setback_screening_effect_check.md)
- [setback alternative-mechanism audit](setback_alternative_mechanism_audit.md)
- [survivor-conditioned setback advantage](survivor_conditioned_setback_advantage.md)
- [SciSci quasi-experimental policy evaluation](scisci_quasi_experimental_policy_evaluation.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]

## Metadata

- Concept ID: `setback_effect_robustness_grid`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2019) (2019)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-12189-3`
- OpenAlex ID: `W2977412048`
- Dimensions ID: `pub.1121403320`
- SciSciNet ID: `W3099970011`
- Aliases: setback robustness battery; funding-shock robustness grid; near-miss robustness checks; early-career setback sensitivity analysis
