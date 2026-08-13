# Risky-strategy citation variance

## Summary

Risky-strategy citation variance measures the dispersion of citation outcomes associated with rare or high-surprisal research strategies.

## Canonical Form

- Unit of analysis: strategy-year cell, paper, project strategy, citation window, or strategy class.
- Typical representation: standard deviation of citations by strategy, citation dispersion regression, risk curve, or high-variance strategy flag.
- Measurement target: downside and upside uncertainty of exploratory strategies, not just their average citation payoff.
- Empirical signature: rarer or higher-surprisal strategies show higher citation variance, with more ignored work and more high-impact work.

## Uses in Science of Science

- Complements [research strategy surprisal](research_strategy_surprisal.md) by storing the dispersion side of strategy risk.
- Provides a lower-level component of [risky-strategy compensation test](../validations/risky_strategy_compensation_test.md).
- Supports [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md), [novelty impact dispersion](novelty_impact_dispersion.md), and evaluation policies that distinguish mean impact from risk.
- Helps avoid reading high average citations for risky strategies as uniformly high payoff.

## Operationalization

- Assign papers or projects to strategy classes and compute strategy surprisal for the relevant year.
- Use a fixed citation window or documented citation census.
- Estimate both mean citations and dispersion, such as standard deviation or tail probabilities, by strategy-year cells.
- Test whether surprisal predicts dispersion and whether results survive field, year, citation-window, and overdispersion checks.

## Evidence and Validations

- Verified full-text evidence from Foster, Rzhetsky, and Evans (2015) reports that rare strategies have less predictable citation impact than conservative strategies.
- The paper states that the standard deviation in citations is higher for rare strategies.
- Foster et al. report that strategy surprisal explains 28.6% of the variation in citation standard deviations for papers containing a strategy.
- The same text links this variance pattern to the claim that rare strategies are often ignored but can attract more attention when they do succeed.

## Caveats

- Citation variance is not the same as project failure risk because unpublished failures are not observed.
- Heavy-tailed citation distributions can make standard deviations unstable, especially for rare strategy-year cells.
- Citation dispersion should be interpreted with citation windows, field composition, and publication-selection mechanisms.

## Links

- [research strategy surprisal](research_strategy_surprisal.md)
- [risky-strategy compensation test](../validations/risky_strategy_compensation_test.md)
- [risk-neutral strategy success threshold](../validations/risk_neutral_strategy_success_threshold.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)
- [novelty impact dispersion](novelty_impact_dispersion.md)
- [unpublished-failure censoring](../validations/unpublished_failure_censoring.md)
- [citation distribution scaling](citation_distribution_scaling.md)
- [responsible metrics](responsible_metrics.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `risky_strategy_citation_variance`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: risky strategy citation dispersion; strategy citation risk; citation variance by strategy; high-surprisal citation variance
