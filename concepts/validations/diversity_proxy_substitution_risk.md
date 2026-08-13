# Diversity proxy-substitution risk

## Summary

Diversity proxy-substitution risk is the validation problem that a single diversity component, such as variety, balance, or disparity, may be used as if it represented full diversity.

## Canonical Form

- Unit of analysis: diversity index, portfolio, category taxonomy, map overlay, policy comparison, or metric report.
- Typical representation: sensitivity table comparing component-only measures with composite diversity measures.
- Validation target: detect when a diversity conclusion changes after adding missing components or changing category boundaries.
- Empirical signature: the same system appears more or less diverse depending on whether variety, balance, or disparity is treated as the proxy.

## Uses in Science of Science

- Audits [diversity measures](../measures/diversity_measures.md), [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md), and [Rao-Stirling diversity](../measures/rao_stirling_diversity.md).
- Helps evaluate research portfolios, science-map overlays, interdisciplinarity claims, and funding-diversity policies.
- Connects to [responsible metrics](../measures/responsible_metrics.md) because a compact diversity score can hide policy-relevant component differences.
- Supports [interdisciplinarity metric-map triangulation](interdisciplinarity_metric_map_triangulation.md) when scalar indicators need map-based interpretation.

## Operationalization

- Compute component measures separately: [category variety](../measures/category_variety.md), [distributional balance](../measures/distributional_balance.md), and [category disparity](../measures/category_disparity.md).
- Compare rankings or trend conclusions under component-only and composite measures.
- Vary category granularity and disparity definitions to test whether proxy conclusions are taxonomy-dependent.
- Report cases where a proxy is defensible for the research question and cases where it is misleading.

## Evidence and Validations

- Verified full-text evidence from Stirling (2007) argues that each of variety, balance, and disparity is necessary but individually insufficient for diversity.
- The paper gives examples where variety or balance alone can be sensitive to subjective taxonomy construction and category partitioning.
- Stirling also argues that disparity alone ignores apportionment, because a portfolio dominated by one category can be less diverse than a more balanced portfolio with slightly less disparity.
- The full text treats these proxy substitutions as scientifically and politically important because diversity measures often inform conservation, market, energy, and research policy.

## Caveats

- A component proxy can still be appropriate when the study explicitly asks about that component rather than full diversity.
- Adding more components can make a metric harder to interpret if the distance matrix or category system is unstable.
- Proxy-risk audits should not be used to demand unnecessary composite metrics when the policy question is narrower.

## Links

- [diversity measures](../measures/diversity_measures.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [category variety](../measures/category_variety.md)
- [distributional balance](../measures/distributional_balance.md)
- [category disparity](../measures/category_disparity.md)
- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [diversity aggregation-weight sensitivity](diversity_aggregation_weight_sensitivity.md)
- [perspective-dependent disparity space](../representations/perspective_dependent_disparity_space.md)
- [interdisciplinarity metric-map triangulation](interdisciplinarity_metric_map_triangulation.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Stirling, A. (2007). A general framework for analysing diversity in science, technology and society. *Journal of the Royal Society Interface*, 4(15), 707-719. https://doi.org/10.1098/rsif.2007.0213 [OpenAlex: W2110158660; Dimensions: pub.1011912474; WoS: unknown]

## Metadata

- Concept ID: `diversity_proxy_substitution_risk`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Stirling (2007) (2007)
- Latest seen paper: Stirling (2007) (2007)
- Primary reference DOI: `10.1098/rsif.2007.0213`
- OpenAlex ID: `W2110158660`
- Dimensions ID: `pub.1011912474`
- SciSciNet ID: `W2110158660`
- Aliases: diversity proxy risk; variety-as-diversity error; balance-only diversity proxy; disparity-only diversity proxy
