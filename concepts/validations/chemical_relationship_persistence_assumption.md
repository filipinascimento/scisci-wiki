# Chemical-relationship persistence assumption

## Summary

Chemical-relationship persistence assumption treats an observed relationship between entities as remaining available in the knowledge network after its first appearance, while allowing later papers to repeat it.

## Canonical Form

- Unit of analysis: entity pair, first-observed edge, repeated edge, yearly network state, or knowledge-stock update.
- Typical representation: persistent edge set, cumulative network, repeat count, edge survival rule, or relaxed persistence sensitivity check.
- Validation target: whether a time-ordered knowledge graph should remember prior relations as durable knowledge rather than transient yearly co-occurrences.
- Empirical signature: an edge first observed in one year remains part of the candidate known network in later years.

## Uses in Science of Science

- Defines how [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md) accumulates knowledge over time.
- Makes repeat strategies in [research strategy taxonomy](../methods/research_strategy_taxonomy.md) operational: repeats require a persistent record of prior links.
- Supports [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md) by determining which links count as known opportunities.
- Helps separate cumulative knowledge-stock assumptions from short-window attention or usage measures.

## Operationalization

- Add an entity-pair edge to the cumulative network when it is first observed.
- Carry the edge forward to later years as part of the known network.
- Maintain repeated observations as weights, counts, or article-edge incidences.
- Run sensitivity checks with edge decay, finite memory, or source-specific persistence where persistent knowledge is implausible.
- Document whether persistence is a claim about scientific truth, community awareness, or database representation.

## Evidence and Validations

- Verified full-text evidence from Foster et al. (2015) states that network links between chemicals persist, while noting that the assumption can be relaxed.
- The same passage says chemicals can be linked repeatedly, allowing known relationships to appear again in later articles.
- This rule is necessary for their distinction between new relationships and repeat relationships in a time-ordered weighted chemical network.
- The caveat makes persistence both a construction assumption and a robustness target for follow-on science-of-science knowledge graphs.

## Caveats

- Published co-mentions do not guarantee enduring mechanistic truth.
- Some relationships become obsolete, contradicted, or irrelevant even if they remain in the database.
- Cumulative networks can overstate the active opportunity space when old knowledge is no longer salient.

## Links

- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [article coannotation edge expansion](../methods/article_coannotation_edge_expansion.md)
- [research strategy taxonomy](../methods/research_strategy_taxonomy.md)
- [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md)
- [strategy-distribution stability](strategy_distribution_stability.md)
- [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `chemical_relationship_persistence_assumption`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: persistent chemical links; cumulative knowledge-edge assumption; relationship survival rule; repeatable chemical links
