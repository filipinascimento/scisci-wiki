# Diversity aggregation-weight sensitivity

## Summary

Diversity aggregation-weight sensitivity tests how conclusions change when a diversity measure changes the relative weighting of variety, balance, and disparity.

## Canonical Form

- Unit of analysis: diversity metric, exponent choice, portfolio ranking, interdisciplinarity score, or robustness grid.
- Typical representation: table or frontier showing scores under alternative component weightings.
- Validation target: determine whether a diversity conclusion depends on one implicit aggregation rule.
- Empirical signature: systems with similar composite scores under one weighting separate under another weighting because they differ in variety, balance, or disparity composition.

## Uses in Science of Science

- Audits [Rao-Stirling diversity](../measures/rao_stirling_diversity.md), [diversity measures](../measures/diversity_measures.md), and [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md).
- Helps compare research portfolios, field diversity, topic diversity, and science-map overlays when stakeholders value breadth, evenness, or distance differently.
- Complements [diversity proxy-substitution risk](diversity_proxy_substitution_risk.md) by treating aggregation as a sensitivity problem rather than a fixed formula.
- Supports [responsible metrics](../measures/responsible_metrics.md) by documenting how metric design choices affect policy conclusions.

## Operationalization

- Compute separate component measures for variety, balance, and disparity.
- Choose a reference composite such as a share-weighted pairwise disparity sum.
- Vary exponents or weights that control the influence of disparity and balance.
- Compare rankings, trends, and threshold decisions across the resulting specifications.
- Report which conclusions are robust and which depend on a chosen aggregation perspective.

## Evidence and Validations

- Verified full-text evidence from Stirling (2007) argues that no single general index can aggregate variety, balance, and disparity in a uniquely robust fashion.
- The paper notes that even familiar non-parametric indices such as Shannon and Simpson-Herfindahl embed implicit parameter choices that weight variety and balance differently.
- Stirling introduces exponent variants in the general diversity heuristic to recover scaled variety, balance-weighted variety, disparity-weighted variety, and balance/disparity-weighted diversity.
- The full text presents systematic exploration of alternative weightings as a core use of the heuristic.

## Caveats

- A sensitivity grid can become arbitrary if the selected weights are not tied to plausible analytic or stakeholder perspectives.
- Robustness across aggregation weights does not address errors in the category system or distance matrix.
- Some decisions may legitimately prioritize one component, such as variety or disparity, rather than full diversity.

## Links

- [diversity measures](../measures/diversity_measures.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [category variety](../measures/category_variety.md)
- [distributional balance](../measures/distributional_balance.md)
- [category disparity](../measures/category_disparity.md)
- [diversity proxy-substitution risk](diversity_proxy_substitution_risk.md)
- [diversity heuristic quality criteria](../methods/diversity_heuristic_quality_criteria.md)
- [perspective-dependent disparity space](../representations/perspective_dependent_disparity_space.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Stirling, A. (2007). A general framework for analysing diversity in science, technology and society. *Journal of the Royal Society Interface*, 4(15), 707-719. https://doi.org/10.1098/rsif.2007.0213 [OpenAlex: W2110158660; Dimensions: pub.1011912474; WoS: unknown]

## Metadata

- Concept ID: `diversity_aggregation_weight_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Stirling (2007) (2007)
- Latest seen paper: Stirling (2007) (2007)
- Primary reference DOI: `10.1098/rsif.2007.0213`
- OpenAlex ID: `W2110158660`
- Dimensions ID: `pub.1011912474`
- SciSciNet ID: `W2110158660`
- Aliases: diversity weighting sensitivity; diversity aggregation sensitivity; variety balance disparity weighting; diversity exponent sensitivity
