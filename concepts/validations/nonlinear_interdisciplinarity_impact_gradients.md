# Nonlinear interdisciplinarity impact gradients

## Summary

Nonlinear interdisciplinarity impact gradients capture cases where citation returns to interdisciplinarity dimensions change with the level of the dimension rather than remaining constant.

## Canonical Form

- Unit of analysis: paper, interdisciplinarity factor score, citation model, or marginal-effect curve.
- Typical representation: linear and squared terms for variety, balance, or disparity; predicted citation curves; marginal-effect diagnostics.
- Validation target: whether an interdisciplinarity dimension has monotone, accelerating, diminishing, or threshold-like association with impact.
- Empirical signature: significant squared terms or predicted curves whose slope changes over the observed range.

## Uses in Science of Science

- Prevents policy conclusions from treating interdisciplinarity as a uniform good or bad.
- Separates the long-term citation patterns of [category variety](../measures/category_variety.md), [distributional balance](../measures/distributional_balance.md), and [category disparity](../measures/category_disparity.md).
- Supports interpretation of [balanced interdisciplinarity penalty](../mechanisms/balanced_interdisciplinarity_penalty.md) and distant recombination.
- Adds a model-check layer to [interdisciplinarity factor decomposition](../methods/interdisciplinarity_factor_decomposition.md).

## Operationalization

- Estimate citation models with interdisciplinarity factors and squared factor terms.
- Plot predicted citation outcomes over the observed range of each factor while holding controls fixed.
- Report whether nonlinearity appears within the observed data range or only beyond it.
- Compare nonlinear specifications with simpler linear models and with original indicator specifications.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) adds squared terms for extracted variety, balance, and disparity factors in fixed-effect Poisson citation models.
- The paper reports significant squared terms for variety and disparity but not for balance.
- Wang et al. find that long-term citations increase at an increasing rate with variety.
- They find that long-term citations increase with disparity at a decreasing rate, with the implied negative marginal threshold beyond the maximum disparity observed in their data.
- The balance pattern is approximately linear and negative in their long-term citation models.

## Caveats

- Squared terms can be sensitive to scale, factor-score construction, and observations at distribution tails.
- Nonlinear associations are not causal without additional identification.
- Threshold claims should not be made when the estimated turning point lies outside the observed data range.

## Links

- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [category variety](../measures/category_variety.md)
- [distributional balance](../measures/distributional_balance.md)
- [category disparity](../measures/category_disparity.md)
- [interdisciplinarity factor decomposition](../methods/interdisciplinarity_factor_decomposition.md)
- [journal fixed-effect citation model](../methods/journal_fixed_effect_citation_model.md)
- [balanced interdisciplinarity penalty](../mechanisms/balanced_interdisciplinarity_penalty.md)
- [interdisciplinarity citation-window reversal](interdisciplinarity_citation_window_reversal.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]

## Metadata

- Concept ID: `nonlinear_interdisciplinarity_impact_gradients`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2015) (2015)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: nonlinear IDR impact; diminishing disparity returns; accelerating variety returns; interdisciplinarity marginal effects
