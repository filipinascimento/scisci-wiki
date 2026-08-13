# MEDLINE chemical annotation corpus

## Summary

The MEDLINE chemical annotation corpus uses National Library of Medicine chemical-entity annotations in biomedical abstracts to reconstruct an evolving network of chemical relationships.

## Canonical Form

- Unit of analysis: MEDLINE abstract, NLM chemical annotation, chemical entity, co-mentioned chemical pair, article year, or relationship edge.
- Typical representation: time-ordered table of annotated papers and chemical co-mention edges.
- Mechanism or measurement target: content-level research opportunities in biomedical chemistry rather than citation or authorship structure.
- Empirical signature: chemical nodes and co-mention edges accumulate over time, allowing repeats, new links, bridges, consolidations, and jumps to be classified.

## Uses in Science of Science

- Supplies the data substrate for [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md).
- Enables [research strategy taxonomy](../methods/research_strategy_taxonomy.md), [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md), and [research strategy surprisal](../measures/research_strategy_surprisal.md).
- Provides a reusable example of turning domain-specific index terms into a science-of-science content graph.
- Shows how field-specific controlled vocabularies can support problem-choice analysis beyond citation networks.

## Operationalization

- Start from MEDLINE records with two or more NLM chemical annotations.
- Restrict analysis windows around annotation-protocol changes when needed.
- Treat annotated chemicals as nodes and article-level co-mentions as candidate relationship edges.
- Time-stamp edges by publication year and track whether they are first observations or repeats.
- Link records to citation data when studying strategy rewards or impact.

## Evidence and Validations

- Verified full-text evidence from Foster, Rzhetsky, and Evans (2015) uses 6,455,756 MEDLINE abstracts published from 1934 to 2008 with two or more chemical entities.
- The paper focuses its main strategy analysis on 1983 to 2008 to limit the effects of chemical annotation introduction in 1980.
- Foster et al. report that the resulting 2008 network contains 181,078 chemical nodes and 84,709,977 links.
- The annotation-timing caveat is split into [MEDLINE annotation-onset window](../validations/medline_annotation_onset_window.md), and the multi-entity article expansion rule is split into [article coannotation edge expansion](../methods/article_coannotation_edge_expansion.md).
- The same full text notes that roughly two-thirds of MEDLINE articles link to Thomson Reuters citation records for their citation analyses.

## Caveats

- NLM annotation protocols are not uniform over time.
- Co-mentions can create false relationships when chemicals appear incidentally in the same abstract.
- The corpus misses relationships involving chemicals not annotated by NLM and misses strategies that fail before publication.
- MEDLINE coverage makes the design strongest for biomedical chemistry and less transferable to fields without comparable entity annotation.

## Links

- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [MEDLINE annotation-onset window](../validations/medline_annotation_onset_window.md)
- [article coannotation edge expansion](../methods/article_coannotation_edge_expansion.md)
- [chemical-relationship persistence assumption](../validations/chemical_relationship_persistence_assumption.md)
- [research strategy taxonomy](../methods/research_strategy_taxonomy.md)
- [map-equation knowledge clusters](../methods/map_equation_knowledge_clusters.md)
- [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md)
- [research strategy surprisal](../measures/research_strategy_surprisal.md)
- [unpublished-failure censoring](../validations/unpublished_failure_censoring.md)
- [topic assignment tagging](../methods/topic_assignment_tagging.md)
- [field classifications](../measures/field_classifications.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `medline_chemical_annotation_corpus`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: NLM chemical annotation corpus; MEDLINE chemical co-mention corpus; biomedical chemistry annotation corpus; chemical entity MEDLINE corpus
