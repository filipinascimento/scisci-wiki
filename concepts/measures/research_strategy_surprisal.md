# Research strategy surprisal

## Summary

Research strategy surprisal measures how unexpected a research strategy is under a generative model of scientists' choices in an evolving knowledge network.

## Canonical Form

- Unit of analysis: strategy-year cell, paper, project, knowledge-network edge, chemical relation, or research program.
- Typical representation: `-log(P(strategy))`, strategy rarity score, citation-risk curve, or strategy-frequency residual.
- Measurement target: rarity and risk of a strategy relative to available opportunities.
- Empirical signature: strategies with lower model probability have higher surprisal and more variable outcomes.

## Uses in Science of Science

- Operationalizes the risk side of [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md).
- Connects [scientific problem choice](../mechanisms/scientific_problem_choice.md) and [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md) to measurable strategy distributions.
- Helps compare conservative repeat strategies with new or jump strategies in an evolving field.
- Provides a quantitative input for funding and evaluation policies that aim to support exploratory search.

## Operationalization

- Represent a field as an evolving network of entities and relationships.
- Define strategy classes relative to that network, such as repeating known relationships, adding new relationships, or jumping to new entities.
- Fit or specify a generative model for the probability of each strategy in each year.
- Use [research strategy taxonomy](../methods/research_strategy_taxonomy.md) for the class labels and [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md) for opportunity-normalized probabilities.
- Compute strategy surprisal as `-log(P(strategy))`.
- Keep [project-level strategy labels](../methods/project_level_strategy_labels.md) separate from relationship-level surprisal when estimating paper-level risk.
- Link surprisal to citation mean, citation variance, publication success, prizes, or other recognition outcomes.
- When validating citation outcomes, handle heteroscedasticity and citation-linkage coverage rather than treating strategy-year citation means as equally precise.

## Evidence and Validations

- Verified full-text evidence from Foster et al. (2015) defines surprisal for research strategies as the information content of observing a strategy under their generative choice model.
- Foster et al. report that strategy surprisal positively predicts mean citations for papers using that strategy in the 1983-2002 biomedical chemistry corpus.
- The same full text reports that surprisal explains about 29% of variation in mean citations and about 29% of variation in citation standard deviations across strategy-year observations.
- The regression design and coverage restrictions are split into [strategy-surprisal HC3 citation model](../validations/strategy_surprisal_hc3_citation_model.md).
- Foster et al. use project-level repeat, new, and jump strategies to argue that conservative strategies are often individually rational under citation-based evaluation, even when rare strategies produce more exceptional outcomes.
- The citation-dispersion side of this evidence is split into [risky-strategy citation variance](risky_strategy_citation_variance.md).

## Caveats

- Surprisal measures rarity under a model, so the result depends on the strategy taxonomy and choice model.
- Citation gains do not observe failed unpublished projects, making risk harder to estimate from papers alone.
- A rare strategy can be high-surprisal because it is promising, infeasible, poorly measured, or misaligned with the chosen knowledge representation.

## Links

- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)
- [research strategy taxonomy](../methods/research_strategy_taxonomy.md)
- [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md)
- [project-level strategy labels](../methods/project_level_strategy_labels.md)
- [risky-strategy citation variance](risky_strategy_citation_variance.md)
- [strategy-surprisal HC3 citation model](../validations/strategy_surprisal_hc3_citation_model.md)
- [risky-strategy compensation test](../validations/risky_strategy_compensation_test.md)
- [scientific problem choice](../mechanisms/scientific_problem_choice.md)
- [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md)
- [knowledge-network search efficiency](knowledge_network_search_efficiency.md)
- [central-nearby problem-choice bias](../mechanisms/central_nearby_problem_choice_bias.md)
- [new journal-pair novelty](new_journal_pair_novelty.md)
- [funding autonomy and exploration](../mechanisms/funding_autonomy_exploration.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [responsible metrics](responsible_metrics.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `research_strategy_surprisal`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: strategy rarity; strategy self-information; risky strategy score; negative log strategy probability
