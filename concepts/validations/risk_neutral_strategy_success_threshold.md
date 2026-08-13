# Risk-neutral strategy success threshold

## Summary

Risk-neutral strategy success threshold estimates how close the success probability of risky projects would need to be to conservative projects for citation-maximizing researchers to be indifferent among strategies.

## Canonical Form

- Unit of analysis: project strategy, success probability, mean citation payoff, publication outcome, or risk-neutral utility comparison.
- Typical representation: expected citation equality, success-probability ratio, indifference condition, or lower-bound argument for conservative incentives.
- Validation target: whether ordinary citation rewards are enough to justify risky research strategies under a simple risk-neutral model.
- Empirical signature: risky strategies would need implausibly high success probabilities relative to conservative repeats to match expected citation value.

## Uses in Science of Science

- Stores the indifference-calculation component of [risky-strategy compensation test](risky_strategy_compensation_test.md).
- Connects [project-level strategy labels](../methods/project_level_strategy_labels.md) to [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md).
- Complements [risky-strategy citation variance](../measures/risky_strategy_citation_variance.md) by adding the missing-success-probability side of risk.
- Helps frame policy discussions about when ordinary citation incentives favor conservative work.

## Operationalization

- Collapse edge-level strategies into project-level repeat, new, and jump labels.
- Estimate mean citation payoff for each project strategy among published successes.
- Define expected citation value as success probability multiplied by mean citation payoff.
- Solve for success-probability ratios that make a risk-neutral researcher indifferent between repeat, new, and jump strategies.
- Compare the required ratios with plausible publication-success differences and the missing failure denominator.

## Evidence and Validations

- Verified full-text evidence from Foster, Rzhetsky, and Evans (2015) computes mean citations for project strategies in the 1983-2002 corpus: 8.38 for repeat, 11.00 for new, and 12.90 for jump.
- The paper defines expected citation value as the probability of success times mean citations for articles using that strategy.
- Foster et al. show that risk-neutral indifference requires the success probability for new projects to be 0.76 times the repeat-project probability and the success probability for jump projects to be 0.65 times the repeat-project probability.
- The authors argue that it is unlikely that new and jump projects are only 24% or 35% less likely to succeed than repeat projects, making repeat likely to dominate under ordinary citation maximization.

## Caveats

- The model uses mean citations as a simplified utility function and omits risk aversion, intrinsic motivation, funding, reputation, and prizes.
- Success probabilities are inferred rather than observed because failed and unpublished projects are missing.
- The threshold is tied to Foster et al.'s biomedical chemistry corpus, strategy taxonomy, and citation window.

## Links

- [risky-strategy compensation test](risky_strategy_compensation_test.md)
- [risky-strategy citation variance](../measures/risky_strategy_citation_variance.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)
- [project-level strategy labels](../methods/project_level_strategy_labels.md)
- [research strategy taxonomy](../methods/research_strategy_taxonomy.md)
- [unpublished-failure censoring](unpublished_failure_censoring.md)
- [research strategy surprisal](../measures/research_strategy_surprisal.md)
- [prize-winner strategy enrichment](prize_winner_strategy_enrichment.md)
- [funding autonomy and exploration](../mechanisms/funding_autonomy_exploration.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `risk_neutral_strategy_success_threshold`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: strategy success-probability threshold; risk-neutral indifference condition; risky strategy success bound; citation-maximization success threshold
