# Interdisciplinarity factor decomposition

## Summary

Interdisciplinarity factor decomposition uses multiple bibliometric indicators to recover latent dimensions such as variety, balance, and disparity.

## Canonical Form

- Unit of analysis: paper, indicator matrix, reference profile, or field-year sample.
- Typical representation: factor loadings over interdisciplinarity indicators and factor scores for each paper.
- Mechanism or measurement target: empirical separation of multidimensional interdisciplinarity components.
- Empirical signature: indicators cluster into factors that correspond to interpretable diversity dimensions.

## Uses in Science of Science

- Tests whether a composite interdisciplinarity score hides distinct mechanisms.
- Provides factor scores for regression, prediction, evaluation audits, and policy analysis.
- Links measure construction to consequences such as long-term citations, short-term citation delay, and evaluation bias.

## Operationalization

- Compute multiple indicators, such as category count, other-field reference ratio, 1-Gini, Simpson, Shannon entropy, average dissimilarity, and Rao-Stirling diversity.
- Determine how many factors to retain using [interdisciplinarity factor-retention diagnostics](interdisciplinarity_factor_retention_diagnostics.md), including eigenvalues, parallel analysis, scree tests, or domain interpretability.
- Extract and rotate factors, then label them by loadings and theory.
- Use factor scores in downstream models such as [journal fixed-effect citation models](journal_fixed_effect_citation_model.md), while reporting the original indicators for transparency.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) applies factor analysis to paper-level interdisciplinarity indicators for 646,669 Web of Science articles.
- The paper retains three factors using Kaiser and parallel-analysis evidence, then uses varimax rotated principal components.
- The resulting factors correspond to variety, balance, and disparity, explaining why different interdisciplinarity measures can have non-identical relationships with citation impact.
- Wang et al. use these factor scores in fixed-effects citation models and show distinct long-term and short-term citation patterns by factor.
- Their source indicator matrix comes from [cited subject-category reference profiles](../representations/cited_subject_category_reference_profile.md), and their nonlinear specifications motivate separate [nonlinear interdisciplinarity impact gradients](../validations/nonlinear_interdisciplinarity_impact_gradients.md).

## Caveats

- Factor labels are interpretations based on loadings, not directly observed constructs.
- Factor structure can change with corpus, field taxonomy, citation window, and indicator set.
- Decomposition should not replace substantive theory about why a dimension matters.

## Links

- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [category variety](../measures/category_variety.md)
- [distributional balance](../measures/distributional_balance.md)
- [category disparity](../measures/category_disparity.md)
- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [Simpson diversity index](../measures/simpson_diversity_index.md)
- [Shannon entropy diversity](../measures/shannon_entropy_diversity.md)
- [average subject-category dissimilarity](../measures/average_subject_category_dissimilarity.md)
- [other-discipline reference ratio](../measures/other_discipline_reference_ratio.md)
- [interdisciplinarity factor-retention diagnostics](interdisciplinarity_factor_retention_diagnostics.md)
- [cited subject-category reference profile](../representations/cited_subject_category_reference_profile.md)
- [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md)
- [journal fixed-effect citation model](journal_fixed_effect_citation_model.md)
- [nonlinear interdisciplinarity impact gradients](../validations/nonlinear_interdisciplinarity_impact_gradients.md)
- [interdisciplinarity indicator-choice sensitivity](../validations/interdisciplinarity_indicator_choice_sensitivity.md)
- [theory-matched interdisciplinarity measure selection](theory_matched_interdisciplinarity_measure_selection.md)
- [paper-feature citation control stack](paper_feature_citation_control_stack.md)
- [citation-delay operationalization robustness](../validations/citation_delay_operationalization_robustness.md)
- [citation window selection](citation_window_selection.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]
- Stirling, A. (2007). A general framework for analysing diversity in science, technology and society. *Journal of the Royal Society Interface*, 4(15), 707-719. https://doi.org/10.1098/rsif.2007.0213 [OpenAlex: W2110158660; Dimensions: pub.1011912474; WoS: unknown]
- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]

## Metadata

- Concept ID: `interdisciplinarity_factor_decomposition`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2015) (2015)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Aliases: interdisciplinarity factor analysis; diversity factor scores; variety balance disparity decomposition; rotated interdisciplinarity factors
