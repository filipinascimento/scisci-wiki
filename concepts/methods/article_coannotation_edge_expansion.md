# Article coannotation edge expansion

## Summary

Article coannotation edge expansion converts a document with multiple annotated entities into multiple pairwise relationship edges in a content-level knowledge network.

## Canonical Form

- Unit of analysis: article, annotated entity set, entity pair, co-mention edge, relationship count, or publication year.
- Typical representation: clique expansion, pairwise coannotation table, article-edge incidence matrix, or weighted co-mention graph.
- Method target: turn document-level entity annotations into a network of possible relationships that can be tracked over time.
- Empirical signature: one article with more than two entities contributes more than one relationship edge.

## Uses in Science of Science

- Provides a construction rule for [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md).
- Supplies edge observations for [research strategy taxonomy](research_strategy_taxonomy.md), [research strategy surprisal](../measures/research_strategy_surprisal.md), and [strategy opportunity-bias model](strategy_opportunity_bias_model.md).
- Makes article-level strategy mixtures possible before collapsing to [project-level strategy labels](project_level_strategy_labels.md).
- Generalizes to keyword, MeSH, patent-class, topic, dataset, method, or concept co-occurrence networks.

## Operationalization

- Start with records containing two or more validated entity annotations.
- For each article, enumerate all unordered pairs of annotated entities or apply a stricter edge rule if pairwise clique expansion is too broad.
- Attach the article identifier, publication year, and source metadata to each edge observation.
- Aggregate repeated pair observations into weighted yearly networks when studying persistence or repetition.
- Keep the document-to-edge expansion table so article-level and edge-level analyses can be reconciled.

## Evidence and Validations

- Verified full-text evidence from Foster et al. (2015) builds a MEDLINE chemical network from abstracts annotated with two or more chemical entities.
- The paper infers a relationship when two chemicals appear in the same article and adds the corresponding edge to the following year's network.
- Foster et al. explicitly note that articles often have more than two chemical annotations and therefore contribute more than one chemical relationship.
- Their procedure yields a time-ordered sequence of weighted chemical networks used to count five research strategies by year.

## Caveats

- Clique expansion can overstate relationships when entities are co-mentioned incidentally.
- Articles with many annotations can dominate edge counts unless weighting, normalization, or edge-confidence filters are used.
- Pairwise edges lose higher-order context: a three-entity mechanism is not always decomposable into three independent pair relations.

## Links

- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [MEDLINE chemical annotation corpus](../datasets/medline_chemical_annotation_corpus.md)
- [chemical-relationship persistence assumption](../validations/chemical_relationship_persistence_assumption.md)
- [research strategy taxonomy](research_strategy_taxonomy.md)
- [project-level strategy labels](project_level_strategy_labels.md)
- [strategy opportunity-bias model](strategy_opportunity_bias_model.md)
- [scholarly entity graphs](../representations/scholarly_entity_graphs.md)
- [topic assignment tagging](topic_assignment_tagging.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `article_coannotation_edge_expansion`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: annotation clique expansion; article-to-edge expansion; pairwise coannotation edges; document entity-pair expansion
