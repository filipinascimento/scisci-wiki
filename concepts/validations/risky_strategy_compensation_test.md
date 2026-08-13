# Risky-strategy compensation test

## Summary

The risky-strategy compensation test asks whether the extra citation or recognition reward from rare, innovative research strategies is large enough to compensate for their higher chance of failure or non-publication.

## Canonical Form

- Unit of analysis: project strategy, paper, strategy class, citation outcome, success probability, prize-linked paper, or high-citation subset.
- Typical representation: expected citation calculation, failure-probability bound, risk-neutral indifference condition, top-cited enrichment, or prize-winner strategy enrichment.
- Validation target: whether observed research risk-taking can be explained by ordinary citation rewards alone or requires extraordinary-recognition incentives.
- Empirical signature: rare strategies have higher mean and variance in citations, but the implied success probabilities make conservative repeat strategies individually attractive under citation maximization.

## Uses in Science of Science

- Validates the risk side of [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md).
- Uses [research strategy taxonomy](../methods/research_strategy_taxonomy.md) and [research strategy surprisal](../measures/research_strategy_surprisal.md) to connect strategy classes to outcomes.
- Provides a measurement guardrail for policies that promote [funding autonomy and exploration](../mechanisms/funding_autonomy_exploration.md), [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md), or [failed-experiment publication value](../mechanisms/failed_experiment_publication_value.md).

## Operationalization

- Assign papers or projects to repeat, new, jump, or more detailed strategy classes.
- Estimate mean citations, citation variance, and high-citation or prize enrichment for each strategy.
- Define a success probability for each project strategy or derive indifference conditions under risk-neutral citation maximization.
- Compare the required success-probability ratios with plausible publication/failure differences.
- Test whether top-cited papers or prize-linked papers are enriched for risky strategies relative to the full publication baseline.
- Separate the [project-level strategy labels](../methods/project_level_strategy_labels.md), [prize-winner strategy enrichment](prize_winner_strategy_enrichment.md), and [unpublished-failure censoring](unpublished_failure_censoring.md) pieces when reusing this validation.

## Evidence and Validations

- Verified full-text evidence from Foster et al. (2015) finds that rare strategies have higher mean citations but also higher citation variance, indicating both upside and risk.
- Foster et al. compute expected citation conditions for repeat, new, and jump project strategies using mean citation values of 8.38, 11.00, and 12.90, respectively, for the 1983-2002 corpus.
- Their risk-neutral indifference calculation implies that new and jump projects would need success probabilities close to repeat projects to be citation-rational, which the authors judge implausible.
- Foster et al. then show that top-cited papers and papers by winners of 137 biomedical and chemistry prizes are enriched for novel strategies, especially jumps and new consolidations.
- The validation supports an essential-tension mechanism: conservative strategies are favored by ordinary productivity incentives, while rare risky strategies are linked to extraordinary recognition.
- The lower-level pieces are now split into [risky-strategy citation variance](../measures/risky_strategy_citation_variance.md), [risk-neutral strategy success threshold](risk_neutral_strategy_success_threshold.md), a dataset page for the [biomedicine and chemistry prize-article panel](../datasets/biomedicine_chemistry_prize_article_panel.md), and a validation page for [prize-winner strategy enrichment](prize_winner_strategy_enrichment.md).

## Caveats

- Failure probabilities are not directly observed because the corpus contains published papers, not all attempted projects.
- Citation maximization is a simplified utility model and omits career security, grant success, intrinsic curiosity, team resources, and field norms.
- Prize enrichment is selective and status-laden, so it validates the upper tail better than ordinary research outcomes.
- Risk and reward estimates depend on the strategy taxonomy and the time window used for citation accumulation.

## Links

- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)
- [research strategy taxonomy](../methods/research_strategy_taxonomy.md)
- [project-level strategy labels](../methods/project_level_strategy_labels.md)
- [research strategy surprisal](../measures/research_strategy_surprisal.md)
- [risky-strategy citation variance](../measures/risky_strategy_citation_variance.md)
- [risk-neutral strategy success threshold](risk_neutral_strategy_success_threshold.md)
- [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md)
- [prize-winner strategy enrichment](prize_winner_strategy_enrichment.md)
- [biomedicine and chemistry prize-article panel](../datasets/biomedicine_chemistry_prize_article_panel.md)
- [unpublished-failure censoring](unpublished_failure_censoring.md)
- [failed-experiment publication value](../mechanisms/failed_experiment_publication_value.md)
- [funding autonomy and exploration](../mechanisms/funding_autonomy_exploration.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [novelty penalty](../mechanisms/novelty_penalty.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `risky_strategy_compensation_test`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: risk compensation test; risky strategy expected reward; prize-enrichment strategy validation; risky innovation payoff test
