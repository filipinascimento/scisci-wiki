# Research strategy taxonomy

## Summary

Research strategy taxonomy classifies scientific work by how it changes an evolving knowledge network, separating repeats, new consolidations, new bridges, and jumps into unexplored entities or relationships.

## Canonical Form

- Unit of analysis: paper, article-level project, chemical relationship, knowledge-network edge, strategy class, or year.
- Typical representation: five-class edge taxonomy, repeat/new/jump project label, within-cluster versus between-cluster edge, or strategy mixture vector.
- Method target: convert content-level research choices into comparable categories of tradition, consolidation, bridging, and innovation.
- Empirical signature: repeat and consolidation strategies dominate published work, while jumps and new bridges are rarer and riskier.

## Uses in Science of Science

- Operationalizes [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md) and [research strategy surprisal](../measures/research_strategy_surprisal.md).
- Converts a [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md) into strategy counts and paper-level strategy mixtures.
- Provides inputs for [strategy opportunity-bias model](strategy_opportunity_bias_model.md), [risky-strategy compensation test](../validations/risky_strategy_compensation_test.md), and [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md).
- Splits paper-level risk analysis into [project-level strategy labels](project_level_strategy_labels.md), which collapse edge-level moves into repeat, new, and jump article classes.
- Supports intervention-oriented search methods such as [literature-based knowledge bridging](literature_based_knowledge_bridging.md), which deliberately target cross-cluster opportunities.

## Operationalization

- Build a time-ordered knowledge network and identify which entities and edges are already known before each focal document or experiment.
- Label a relationship as a repeat when the edge was previously observed.
- Label a new consolidation when a new edge connects entities within the same knowledge cluster.
- Label a new bridge when a new edge connects entities across existing clusters.
- Label a jump when the work introduces a previously unexplored entity or moves beyond the observed network.
- For article-level analysis, summarize all edge labels into a strategy mixture or assign a project-level repeat, new, or jump label.
- Preserve the article-edge expansion rule so paper-level mixtures can be audited back to relationship-level labels.

## Evidence and Validations

- Verified full-text evidence from Foster et al. (2015) defines a five-part taxonomy for biomedical chemistry: jump, new consolidation, new bridge, repeat consolidation, and repeat bridge.
- Foster et al. use map-equation communities as knowledge clusters, so consolidations occur within clusters and bridges connect distinct clusters.
- The paper reports that repeat statements are much more frequent than new or jump statements, and that jumps are the rarest strategy.
- Foster et al. also extend the taxonomy to project-level repeat, new, and jump classes for risk analysis.
- Their clustering and project-label steps are now separated as [map-equation knowledge clusters](map_equation_knowledge_clusters.md) and [project-level strategy labels](project_level_strategy_labels.md).
- Their yearly strategy-share evidence is now split into [strategy-distribution stability](../validations/strategy_distribution_stability.md), [repeat-new preference ratio](../measures/repeat_new_preference_ratio.md), and [consolidation-bridge preference ratio](../measures/consolidation_bridge_preference_ratio.md).
- The lower-level construction and uncertainty pieces are split into [article coannotation edge expansion](article_coannotation_edge_expansion.md), [chemical-relationship persistence assumption](../validations/chemical_relationship_persistence_assumption.md), and [strategy-share multinomial intervals](strategy_share_multinomial_intervals.md).
- Verified full-text evidence from Rzhetsky et al. (2015) uses a related network-choice framework in which candidate experiments connect chemical entities by degree centrality, distance, and disconnected-component bridging.

## Caveats

- Strategy classes depend on the representation of entities, edges, and clusters.
- A paper can contain multiple strategies, so forcing one project label can hide mixtures.
- Missing failed projects and unpublished work bias observed strategy frequencies toward publishable strategies.
- A jump in a chemical-relation network may be incremental in another representation, such as methods, diseases, theories, or datasets.

## Links

- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [MEDLINE chemical annotation corpus](../datasets/medline_chemical_annotation_corpus.md)
- [article coannotation edge expansion](article_coannotation_edge_expansion.md)
- [chemical-relationship persistence assumption](../validations/chemical_relationship_persistence_assumption.md)
- [map-equation knowledge clusters](map_equation_knowledge_clusters.md)
- [project-level strategy labels](project_level_strategy_labels.md)
- [strategy-share multinomial intervals](strategy_share_multinomial_intervals.md)
- [strategy opportunity-bias model](strategy_opportunity_bias_model.md)
- [strategy-distribution stability](../validations/strategy_distribution_stability.md)
- [repeat-new preference ratio](../measures/repeat_new_preference_ratio.md)
- [consolidation-bridge preference ratio](../measures/consolidation_bridge_preference_ratio.md)
- [research strategy surprisal](../measures/research_strategy_surprisal.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)
- [risky-strategy compensation test](../validations/risky_strategy_compensation_test.md)
- [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md)
- [literature-based knowledge bridging](literature_based_knowledge_bridging.md)
- [central-nearby problem-choice bias](../mechanisms/central_nearby_problem_choice_bias.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]
- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; WoS: unknown]

## Metadata

- Concept ID: `research_strategy_taxonomy`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: jump new repeat taxonomy; strategy classes; bridge consolidation taxonomy; research strategy mixture
