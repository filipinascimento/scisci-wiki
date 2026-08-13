# Chemical relationship knowledge network

## Summary

A chemical relationship knowledge network represents biomedical knowledge as chemicals or molecular entities connected by observed or hypothesized relationships extracted from papers, patents, or curated annotations.

## Canonical Form

- Unit of analysis: chemical entity, relationship edge, article, patent, year, knowledge cluster, or candidate experiment.
- Typical representation: evolving weighted graph, yearly chemical co-mention network, candidate-edge universe, or clustered chemical-relation map.
- Representation target: the changing problem space in which scientists choose relationships to test, repeat, consolidate, bridge, or jump beyond existing knowledge.
- Empirical signature: dense local clusters of frequently co-mentioned chemicals, repeated known edges, sparse new edges, and a large expanding set of possible unexplored relationships.

## Uses in Science of Science

- Provides the graph substrate for [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md) and [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md).
- Enables [research strategy taxonomy](../methods/research_strategy_taxonomy.md), [research strategy surprisal](../measures/research_strategy_surprisal.md), and [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md).
- Connects biomedical problem choice to [scientific problem choice](../mechanisms/scientific_problem_choice.md), [central-nearby problem-choice bias](../mechanisms/central_nearby_problem_choice_bias.md), and [mature-field exploration gap](../mechanisms/mature_field_exploration_gap.md).
- Uses [MEDLINE chemical annotation corpus](../datasets/medline_chemical_annotation_corpus.md) and [map-equation knowledge clusters](../methods/map_equation_knowledge_clusters.md) as concrete construction and clustering motifs.

## Operationalization

- Extract chemical entities from structured annotations, full text, abstracts, patents, or curated ontologies.
- Define an edge rule: co-mention, curated interaction, reaction, functional relation, or experimentally tested pair.
- Build a time-ordered graph where edges are introduced or repeated as new documents appear.
- Attach edge metadata such as first year, repetition count, document source, patent/article source, and whether the edge is within or across knowledge clusters.
- Make the document-to-edge construction explicit, especially when multi-annotation documents are expanded into multiple pairwise edges.
- Specify whether relationships persist cumulatively, decay, or only exist in local time windows.
- Keep false-positive co-mentions, missing annotations, and changing annotation protocols explicit in the data-quality notes.

## Evidence and Validations

- Verified full-text evidence from Foster, Rzhetsky, and Evans (2015) represents biomedical chemistry as a yearly network of chemicals and relationships extracted from MEDLINE article annotations.
- Foster et al. use the network to distinguish jumps, new relationships, repeats, consolidations, and bridges in scientists' research strategies.
- The same paper documents the MEDLINE chemical-annotation corpus, map-equation clustering step, multi-annotation edge expansion, persistent-link rule, and annotation/co-mention validity limits as separate reusable motifs.
- Verified full-text evidence from Rzhetsky et al. (2015) extends the same biomedical chemistry representation to MEDLINE and U.S. patent abstracts from 1976 to 2010.
- Rzhetsky et al. treat candidate chemical pairs as possible experiments and infer how scientists choose among edges by degree centrality and network distance.
- Their larger source panel is split into [biomedical chemical-relationship network panel](../datasets/biomedical_chemical_relationship_network_panel.md), and the fitted edge-choice model is split into [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md).
- Together these studies show how a content-level network can be used to evaluate research strategies, not only citation or coauthorship structure.

## Caveats

- Co-mention edges can include incidental associations and may not distinguish mechanistic, causal, physical, or experimental relationships.
- Chemical annotation protocols and ontology coverage can change over time.
- A chemical network misses methods, diseases, model systems, theories, datasets, and other forms of scientific content.
- Candidate edges are not uniformly feasible, safe, ethical, or scientifically meaningful.

## Links

- [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md)
- [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md)
- [biomedical chemical-relationship network panel](../datasets/biomedical_chemical_relationship_network_panel.md)
- [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md)
- [MEDLINE-patent strategy convergence](../validations/medline_patent_strategy_convergence.md)
- [MEDLINE chemical annotation corpus](../datasets/medline_chemical_annotation_corpus.md)
- [article coannotation edge expansion](../methods/article_coannotation_edge_expansion.md)
- [chemical-relationship persistence assumption](../validations/chemical_relationship_persistence_assumption.md)
- [MEDLINE annotation-onset window](../validations/medline_annotation_onset_window.md)
- [map-equation knowledge clusters](../methods/map_equation_knowledge_clusters.md)
- [research strategy taxonomy](../methods/research_strategy_taxonomy.md)
- [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md)
- [research strategy surprisal](../measures/research_strategy_surprisal.md)
- [central-nearby problem-choice bias](../mechanisms/central_nearby_problem_choice_bias.md)
- [mature-field exploration gap](../mechanisms/mature_field_exploration_gap.md)
- [scientific problem choice](../mechanisms/scientific_problem_choice.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]
- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; WoS: unknown]

## Metadata

- Concept ID: `chemical_relationship_knowledge_network`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: biomedical chemistry network; chemical co-mention network; chemical relation graph; knowledge graph of chemicals
