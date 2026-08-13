# Interdisciplinarity indicator-choice sensitivity

## Summary

Interdisciplinarity indicator-choice sensitivity is the validation problem that conclusions about the impact of interdisciplinary research can change depending on which interdisciplinarity indicator is used.

## Canonical Form

- Unit of analysis: paper, reference profile, interdisciplinarity indicator, model specification, or citation outcome.
- Typical representation: side-by-side estimates for variety, balance, disparity, other-field share, entropy, Simpson, or Rao-Stirling measures.
- Validation target: whether the sign, size, and timing of interdisciplinarity effects are robust to indicator choice.
- Empirical signature: different indicators of interdisciplinarity show non-identical relationships with short-term citations, long-term citations, or citation delay.

## Uses in Science of Science

- Adds a sensitivity layer to [interdisciplinarity factor decomposition](../methods/interdisciplinarity_factor_decomposition.md).
- Guides [theory-matched interdisciplinarity measure selection](../methods/theory_matched_interdisciplinarity_measure_selection.md).
- Helps explain mixed results in [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md).
- Links diversity measurement to [responsible metrics](../measures/responsible_metrics.md).

## Operationalization

- Compute multiple interdisciplinarity indicators on the same paper set.
- Estimate parallel citation or delay models for each indicator.
- Compare whether conclusions survive changes in indicator family, factor score, and nonlinear specification.
- Report indicator-level results instead of only a composite score.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) shows that variety, balance, disparity, and other-discipline reference indicators have distinct citation relationships.
- The paper argues that low consensus in earlier work may be partly due to different choices of interdisciplinarity measure.
- Their factor and indicator analyses therefore motivate treating measure choice as a validation object rather than a mere implementation detail.

## Caveats

- Sensitivity to indicator choice can reflect real multidimensionality, not only measurement error.
- Indicator comparison depends on field taxonomy, reference-list construction, and citation-window selection.
- A robust average effect may still hide mechanism-specific differences.

## Links

- [interdisciplinarity factor decomposition](../methods/interdisciplinarity_factor_decomposition.md)
- [theory-matched interdisciplinarity measure selection](../methods/theory_matched_interdisciplinarity_measure_selection.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [nonlinear interdisciplinarity impact gradients](nonlinear_interdisciplinarity_impact_gradients.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; SciSciNet: W363554780; WoS: unknown]

## Metadata

- Concept ID: `interdisciplinarity_indicator_choice_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2015) (2015)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: IDR indicator sensitivity; interdisciplinarity measure choice sensitivity; diversity indicator robustness
