# Interdisciplinarity factor-retention diagnostics

## Summary

Interdisciplinarity factor-retention diagnostics choose how many latent interdisciplinarity dimensions to retain before interpreting factor scores such as variety, balance, and disparity.

## Canonical Form

- Unit of analysis: interdisciplinarity indicator matrix, eigenvalue spectrum, factor-analysis model, paper cohort, or category system.
- Typical representation: Kaiser eigenvalue rule, Horn parallel analysis, scree test, optimal coordinate solution, acceleration-factor solution, or retained-factor justification.
- Method target: avoid arbitrary dimensionality choices when decomposing correlated interdisciplinarity indicators.
- Empirical signature: multiple retention criteria converge on the number of dimensions or reveal disagreement that must be explained.

## Uses in Science of Science

- Provides the diagnostic stage inside [interdisciplinarity factor decomposition](interdisciplinarity_factor_decomposition.md).
- Helps make [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md) reproducible instead of post hoc labels.
- Supports robustness checks when factor structure may change across fields, years, datasets, or category systems.
- Connects measurement design to [responsible metrics](../measures/responsible_metrics.md), because retained dimensions determine downstream policy interpretation.

## Operationalization

- Standardize the interdisciplinarity indicators.
- Compute eigenvalues and compare them with Kaiser thresholds and simulated parallel-analysis thresholds.
- Inspect a scree plot and optional numerical scree solutions.
- Retain a factor count only after documenting both statistical diagnostics and substantive interpretability.
- Report when diagnostics disagree and test whether conclusions change under alternative factor counts.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) evaluates factor retention with Kaiser eigenvalue-greater-than-one, Horn parallel analysis, Cattell scree test, optimal coordinate, and acceleration-factor approaches.
- Kaiser and Horn parallel analysis both support retaining three factors in their interdisciplinarity indicator matrix.
- The numerical scree solutions disagree, with the optimal coordinate approach supporting three factors and the acceleration-factor approach supporting one.
- Wang et al. choose three factors based on convergence between Kaiser, Horn, and the optimal coordinate result, then extract varimax-rotated components interpreted as variety, balance, and disparity.

## Caveats

- Retention rules are diagnostics, not proof that factors correspond to real social mechanisms.
- Factor count can depend on indicator choice, corpus selection, field taxonomy, and preprocessing.
- A factor solution should be paired with theory and downstream validation, not used as a black-box metric generator.

## Links

- [interdisciplinarity factor decomposition](interdisciplinarity_factor_decomposition.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [Simpson diversity index](../measures/simpson_diversity_index.md)
- [Shannon entropy diversity](../measures/shannon_entropy_diversity.md)
- [average subject-category dissimilarity](../measures/average_subject_category_dissimilarity.md)
- [journal fixed-effect citation model](journal_fixed_effect_citation_model.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]

## Metadata

- Concept ID: `interdisciplinarity_factor_retention_diagnostics`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2015) (2015)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: factor retention diagnostics; Horn parallel analysis for IDR; interdisciplinarity scree test; Kaiser factor rule
