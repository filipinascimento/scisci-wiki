# Research strategy risk-reward

## Summary

Research strategy risk-reward describes the tradeoff between conservative problem choice that reliably produces publishable work and risky search that is more likely to fail or be ignored but can yield unusually high impact.

## Canonical Form

- Unit of analysis: scientist, paper, topic, problem choice, knowledge relation, or research program.
- Typical representation: evolving knowledge network, topic space, chemical-relation graph, or semantic landscape.
- Mechanism: incentives for productivity favor established knowledge, while exceptional recognition depends partly on occasional risky exploration.
- Empirical signature: risky strategies have higher variance, with more ignored work and more high-impact work, but expected returns may not compensate for the extra risk.

## Uses in Science of Science

- Connects [novelty and conventionality](novelty_conventionality.md), [peer review gatekeeping](peer_review_gatekeeping.md), [funding incentives and exploration](funding_incentives_and_exploration.md), and scientific portfolio design.
- Provides a mechanism-level account of why fields can become more conservative even when risky work has high upside.
- Helps separate individual strategy choice from aggregate field-level innovation rates.

## Operationalization

- Represent the evolving state of knowledge as a network of entities and relations.
- Classify new work by whether it introduces new entities, introduces new relationships, deepens known areas, consolidates clusters, or bridges distant clusters.
- Use [research strategy taxonomy](../methods/research_strategy_taxonomy.md) and [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md) when operationalizing this in biomedical chemistry.
- Use [research strategy surprisal](../measures/research_strategy_surprisal.md) to measure how rare a strategy is under a field/year choice model.
- Use [risky-strategy compensation test](../validations/risky_strategy_compensation_test.md) when asking whether citation rewards compensate for failure risk.
- Audit [unpublished-failure censoring](../validations/unpublished_failure_censoring.md), because the risk side cannot be measured cleanly from publications alone.
- Estimate the distribution of impact outcomes by strategy class and compare expected reward, downside risk, and prize or recognition outcomes.

## Evidence and Validations

- Verified full-text evidence from Foster et al. (2015) models biomedical chemistry as an evolving complex network and defines research strategies relative to that network: introducing new chemicals or relationships, deepening known areas, consolidating clusters, or bridging distant clusters.
- Foster et al. find that high-risk strategies exploring new relationships are less prevalent than conservative strategies; they are more likely to be ignored but also more likely to achieve high impact and recognition.
- The same full text reports that the extra expected reward of risky strategies is insufficient to compensate for their extra risk, and uses winners of 137 biomedical and chemistry prizes to argue that occasional high-upside gambles can explain observed risk-taking.
- Foster et al.'s lower-level implementation is now split into the [MEDLINE chemical annotation corpus](../datasets/medline_chemical_annotation_corpus.md), [map-equation knowledge clusters](../methods/map_equation_knowledge_clusters.md), [project-level strategy labels](../methods/project_level_strategy_labels.md), [strategy-distribution stability](../validations/strategy_distribution_stability.md), [risky-strategy citation variance](../measures/risky_strategy_citation_variance.md), [risk-neutral strategy success threshold](../validations/risk_neutral_strategy_success_threshold.md), [prize-winner strategy enrichment](../validations/prize_winner_strategy_enrichment.md), and [unpublished-failure censoring](../validations/unpublished_failure_censoring.md).
- Verified full-text evidence from Rzhetsky et al. (2015) shifts from paper strategies to experiment choice: biomedical chemistry increasingly focuses on central, nearby chemical relationships, while simulations suggest more distant and risky strategies would discover mature knowledge networks more efficiently.
- Rzhetsky et al. also provide an efficiency mechanism: riskier distant or disconnected combinations become more valuable as knowledge networks mature, but missing failed-experiment records make this difficult to coordinate.
- The experiment-choice evidence now has split pages for [famous-obscure pairing strategy](famous_obscure_pairing_strategy.md), [optimal knowledge-network search simulation](../methods/optimal_knowledge_network_search_simulation.md), and [collective discovery incentive misalignment](collective_discovery_incentive_misalignment.md).
- Verified full-text evidence from Wang et al. (2017) adds an evaluation mechanism: highly novel papers have higher long-run hit probability but are disadvantaged by journal-impact-factor placement and short citation windows.
- Verified full-text evidence from Liu et al. (2021) adds a career-sequence view: exploration is most strongly associated with hot-streak onset when followed by focused exploitation.
- Verified full-text evidence from Clauset et al. (2017) adds an evaluation-climate mechanism: emphasis on predictable discoveries can select for risk-averse scientists and reduce the diversity of the discovery ecosystem.

## Caveats

- Strategy classes depend on the chosen representation of knowledge; a chemical-relation graph may miss methodological, theoretical, or data novelty.
- Impact and prizes are delayed, selective outcomes and may reflect status, field size, or evaluation institutions as well as strategy.
- Efficient field-level search can be misaligned with individually rational career and publication incentives.

## Links

- [novelty and conventionality](novelty_conventionality.md)
- [scientific problem choice](scientific_problem_choice.md)
- [knowledge-network experiment search](knowledge_network_experiment_search.md)
- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [MEDLINE chemical annotation corpus](../datasets/medline_chemical_annotation_corpus.md)
- [map-equation knowledge clusters](../methods/map_equation_knowledge_clusters.md)
- [research strategy taxonomy](../methods/research_strategy_taxonomy.md)
- [project-level strategy labels](../methods/project_level_strategy_labels.md)
- [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md)
- [strategy-distribution stability](../validations/strategy_distribution_stability.md)
- [repeat-new preference ratio](../measures/repeat_new_preference_ratio.md)
- [consolidation-bridge preference ratio](../measures/consolidation_bridge_preference_ratio.md)
- [central-nearby problem-choice bias](central_nearby_problem_choice_bias.md)
- [famous-obscure pairing strategy](famous_obscure_pairing_strategy.md)
- [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md)
- [optimal knowledge-network search simulation](../methods/optimal_knowledge_network_search_simulation.md)
- [collective discovery incentive misalignment](collective_discovery_incentive_misalignment.md)
- [mature-field exploration gap](mature_field_exploration_gap.md)
- [failed-experiment publication value](failed_experiment_publication_value.md)
- [research strategy surprisal](../measures/research_strategy_surprisal.md)
- [risky-strategy citation variance](../measures/risky_strategy_citation_variance.md)
- [risky-strategy compensation test](../validations/risky_strategy_compensation_test.md)
- [risk-neutral strategy success threshold](../validations/risk_neutral_strategy_success_threshold.md)
- [prize-winner strategy enrichment](../validations/prize_winner_strategy_enrichment.md)
- [unpublished-failure censoring](../validations/unpublished_failure_censoring.md)
- [novelty penalty](novelty_penalty.md)
- [funding autonomy and exploration](funding_autonomy_exploration.md)
- [peer review and gatekeeping](peer_review_gatekeeping.md)
- [funding incentives and exploration](funding_incentives_and_exploration.md)
- [predictable-discovery selection pressure](predictable_discovery_selection_pressure.md)
- [risk-averse scientist selection](risk_averse_scientist_selection.md)
- [scientific ecosystem diversity](scientific_ecosystem_diversity.md)
- [exploration-exploitation career shifts](exploration_exploitation_career_shifts.md)
- [hot streaks](hot_streaks.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [science maps](../representations/science_maps.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [topic models](../methods/topic_models.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]
- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; WoS: unknown]
- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]
- Liu, L., Dehmamy, N., Chown, J., Giles, C. L., & Wang, D. (2021). Understanding the onset of hot streaks across artistic, cultural, and scientific careers. *Nature Communications*, 12, 5392. https://doi.org/10.1038/s41467-021-25477-8 [OpenAlex: W3201257425; Dimensions: pub.1141075911; WoS: unknown]
- Clauset, A., Larremore, D. B., & Sinatra, R. (2017). Data-driven predictions in the science of science. *Science*, 355(6324), 477-480. https://doi.org/10.1126/science.aal4217 [OpenAlex: W2585057539; Dimensions: pub.1083524092; WoS: unknown]

## Metadata

- Concept ID: `research_strategy_risk_reward`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Liu et al. (2021) (2021)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Aliases: essential tension; risky research strategy; tradition and innovation; exploration exploitation sequence
