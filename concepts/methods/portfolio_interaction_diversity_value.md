# Portfolio-interaction diversity value

## Summary

Portfolio-interaction diversity value models diversity-related system value as a pairwise function of category differences, category shares, and positive or negative interactions among portfolio elements.

## Canonical Form

- Unit of analysis: portfolio element, element pair, interaction term, system value, or portfolio mix.
- Typical representation: pairwise interaction multiplier applied to a diversity heuristic or system-value equation.
- Method target: represent synergies and tensions among elements that cannot be reduced to individual element performance.
- Empirical signature: two portfolios with similar individual option scores differ because particular pairs of options interact positively or negatively.

## Uses in Science of Science

- Extends [Rao-Stirling diversity](../measures/rao_stirling_diversity.md) from pure diversity scoring to portfolio-value analysis.
- Supports research-funding portfolios where projects, fields, tools, or institutions may complement or substitute for one another.
- Provides machinery for [diversity-performance trade-off frontiers](diversity_performance_tradeoff_frontier.md) and [diversity-premium trade-off](../mechanisms/diversity_premium_tradeoff.md).
- Helps make system-level portfolio assumptions explicit in science policy simulations.

## Operationalization

- Define portfolio elements and their shares.
- Build a disparity matrix describing differences among elements.
- Estimate or elicit pairwise interaction terms for synergies, tensions, complementarity, or substitution.
- Add the interaction-adjusted portfolio term to individual element performance values.
- Compare portfolio mixes under alternative interaction assumptions and diversity weights.

## Evidence and Validations

- Verified full-text evidence from Stirling (2007) augments the diversity heuristic with an interaction term that captures synergies or tensions between system elements.
- The paper treats these interactions as portfolio-level properties irreducible to individual elements, like diversity itself.
- Stirling uses the interaction-adjusted formulation to articulate diversity with broader system value rather than treating diversity as a narrow standalone objective.
- The illustrative habitat and energy examples show how interaction assumptions can affect conditionally optimal portfolios.
- The individual option-value side of the same system-value equation is represented in [performance-space value representation](../representations/performance_space_value_representation.md).

## Caveats

- Interaction terms can be difficult to estimate empirically and may rely on expert judgment.
- Pairwise interactions may miss higher-order complementarities among three or more elements.
- The method requires transparent uncertainty analysis because interaction assumptions can drive portfolio recommendations.

## Links

- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [diversity measures](../measures/diversity_measures.md)
- [perspective-dependent disparity space](../representations/perspective_dependent_disparity_space.md)
- [performance-space value representation](../representations/performance_space_value_representation.md)
- [diversity-performance trade-off frontier](diversity_performance_tradeoff_frontier.md)
- [deliberative diversity sensitivity analysis](deliberative_diversity_sensitivity_analysis.md)
- [diversity-premium trade-off](../mechanisms/diversity_premium_tradeoff.md)
- [funding allocation design alternatives](funding_allocation_design_alternatives.md)
- [active science-policy experimentation](../validations/active_science_policy_experimentation.md)

## References

- Stirling, A. (2007). A general framework for analysing diversity in science, technology and society. *Journal of the Royal Society Interface*, 4(15), 707-719. https://doi.org/10.1098/rsif.2007.0213 [OpenAlex: W2110158660; Dimensions: pub.1011912474; WoS: unknown]

## Metadata

- Concept ID: `portfolio_interaction_diversity_value`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Stirling (2007) (2007)
- Latest seen paper: Stirling (2007) (2007)
- Primary reference DOI: `10.1098/rsif.2007.0213`
- OpenAlex ID: `W2110158660`
- Dimensions ID: `pub.1011912474`
- SciSciNet ID: `W2110158660`
- Aliases: portfolio interaction term; diversity system-value interaction; pairwise portfolio synergy; interaction-adjusted diversity value
