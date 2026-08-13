# Strategy-share multinomial intervals

## Summary

Strategy-share multinomial intervals attach simultaneous confidence intervals to the fractions of observed research strategies in a multi-class strategy distribution.

## Canonical Form

- Unit of analysis: strategy count, strategy share, article pool, year, prize subset, citation subset, or multinomial category.
- Typical representation: simultaneous confidence interval, Goodman interval, multinomial proportion band, or strategy-share uncertainty box.
- Method target: quantify uncertainty in several strategy fractions without treating each proportion as an isolated binomial estimate.
- Empirical signature: strategy-share figures report intervals around all categories in a five-class or similar taxonomy.

## Uses in Science of Science

- Adds uncertainty accounting to [research strategy taxonomy](research_strategy_taxonomy.md) and [strategy-distribution stability](../validations/strategy_distribution_stability.md).
- Supports comparisons in [prize-winner strategy enrichment](../validations/prize_winner_strategy_enrichment.md) and top-cited strategy pools.
- Can be reused for topic shares, contribution-role shares, field shares, open-access route shares, policy-source shares, or retraction-cause shares.
- Complements model-based uncertainty in [strategy opportunity-bias model](strategy_opportunity_bias_model.md).

## Operationalization

- Count the number of observations in each strategy category for a year or comparison pool.
- Treat the vector of counts as draws from a multinomial distribution.
- Compute simultaneous confidence intervals for all category proportions using Goodman-style or equivalent multinomial methods.
- Display or store intervals with the corresponding strategy-share estimates.
- Keep the category count and total denominator available for recomputation.

## Evidence and Validations

- Verified full-text evidence from Foster et al. (2015) treats strategy fractions in yearly, citation, and prize-winner slices as estimates from a five-type multinomial distribution.
- The paper uses confidence intervals proposed by Quesenberry and Hurst with Goodman's tighter bound.
- Foster et al. apply these intervals to figures comparing strategy distributions over time and across high-citation or prize-winner pools.
- This separates uncertainty in observed strategy shares from the fitted opportunity-bias model.

## Caveats

- Multinomial intervals assume the counted observations are exchangeable draws, but strategy choices can be correlated within articles, labs, or subfields.
- Very large corpora can make intervals visually tiny while systematic measurement errors remain important.
- The method quantifies sampling uncertainty, not uncertainty from annotation errors, field definitions, or missing failed projects.

## Links

- [research strategy taxonomy](research_strategy_taxonomy.md)
- [strategy-distribution stability](../validations/strategy_distribution_stability.md)
- [prize-winner strategy enrichment](../validations/prize_winner_strategy_enrichment.md)
- [strategy opportunity-bias model](strategy_opportunity_bias_model.md)
- [project-level strategy labels](project_level_strategy_labels.md)
- [chemical opportunity expansion ratio](../measures/chemical_opportunity_expansion_ratio.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `strategy_share_multinomial_intervals`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: Goodman strategy intervals; simultaneous multinomial intervals; strategy proportion confidence intervals; multinomial share uncertainty
