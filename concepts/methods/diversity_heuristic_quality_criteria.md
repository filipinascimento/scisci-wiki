# Diversity heuristic quality criteria

## Summary

Diversity heuristic quality criteria define desirable properties that a general diversity measure should satisfy before it is used for cross-domain science, technology, or policy analysis.

## Canonical Form

- Unit of analysis: diversity metric, heuristic, portfolio evaluation, category system, or measurement framework.
- Typical representation: checklist of scaling, monotonicity, accommodation, parsimony, aggregation, and articulation requirements.
- Method target: make diversity-measure design auditable before applying it to research portfolios or interdisciplinarity studies.
- Empirical signature: a proposed metric can be evaluated against explicit criteria rather than only against familiarity or convenience.

## Uses in Science of Science

- Supports transparent construction of [diversity measures](../measures/diversity_measures.md) and [Rao-Stirling diversity](../measures/rao_stirling_diversity.md).
- Provides a checklist for [responsible metrics](../measures/responsible_metrics.md), science-map overlays, portfolio-diversity audits, and interdisciplinarity indicators.
- Links measurement design to [diversity proxy-substitution risk](../validations/diversity_proxy_substitution_risk.md) and [diversity aggregation-weight sensitivity](../validations/diversity_aggregation_weight_sensitivity.md).
- Helps compare alternative diversity formulas without treating any single scalar as automatically authoritative.

## Operationalization

- Check whether the measure goes to zero with one category or zero aggregate disparity.
- Test monotonicity in variety, balance, and disparity under controlled changes.
- Document whether the measure accommodates multiple definitions of salient difference.
- Verify whether the formula is parsimonious enough for users to inspect and reproduce.
- State how the measure aggregates diversity components and how it can be articulated with other system values.

## Evidence and Validations

- Verified full-text evidence from Stirling (2007) proposes 10 quality criteria for a general diversity heuristic.
- The criteria include scaling of variety and disparity, monotonicity of variety, balance, and disparity, open accommodation of different difference dimensions, insensitivity to partitioning, parsimony of form, explicit aggregation, and ready articulation with other system properties.
- Stirling uses the criteria to motivate a pairwise disparity heuristic weighted by proportional representations.
- The paper frames the criteria as a way to handle aggregation, accommodation, and articulation challenges rather than seeking a definitive universal index.
- The three-challenge problem is split out as [aggregation-accommodation-articulation challenge](../validations/aggregation_accommodation_articulation_challenge.md), with downstream use in [deliberative diversity sensitivity analysis](deliberative_diversity_sensitivity_analysis.md).

## Caveats

- Criteria can conflict in practice, especially when category systems or distance matrices are noisy.
- Passing formal criteria does not make a measure substantively appropriate for every science-of-science question.
- Some applications may require domain-specific parametric measures instead of a general non-parametric heuristic.

## Links

- [diversity measures](../measures/diversity_measures.md)
- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [diversity aggregation-weight sensitivity](../validations/diversity_aggregation_weight_sensitivity.md)
- [aggregation-accommodation-articulation challenge](../validations/aggregation_accommodation_articulation_challenge.md)
- [diversity proxy-substitution risk](../validations/diversity_proxy_substitution_risk.md)
- [perspective-dependent disparity space](../representations/perspective_dependent_disparity_space.md)
- [performance-space value representation](../representations/performance_space_value_representation.md)
- [diversity-performance trade-off frontier](diversity_performance_tradeoff_frontier.md)
- [deliberative diversity sensitivity analysis](deliberative_diversity_sensitivity_analysis.md)
- [transparent metric construction](transparent_metric_construction.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Stirling, A. (2007). A general framework for analysing diversity in science, technology and society. *Journal of the Royal Society Interface*, 4(15), 707-719. https://doi.org/10.1098/rsif.2007.0213 [OpenAlex: W2110158660; Dimensions: pub.1011912474; WoS: unknown]

## Metadata

- Concept ID: `diversity_heuristic_quality_criteria`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Stirling (2007) (2007)
- Latest seen paper: Stirling (2007) (2007)
- Primary reference DOI: `10.1098/rsif.2007.0213`
- OpenAlex ID: `W2110158660`
- Dimensions ID: `pub.1011912474`
- SciSciNet ID: `W2110158660`
- Aliases: diversity metric checklist; diversity quality criteria; diversity heuristic desiderata; diversity measure design criteria
