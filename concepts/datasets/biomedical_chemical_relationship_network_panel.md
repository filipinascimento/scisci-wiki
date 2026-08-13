# Biomedical chemical-relationship network panel

## Summary

The biomedical chemical-relationship network panel is a time-ordered MEDLINE and patent-derived graph of chemical entities and co-mentioned relationships used to model experiment choice.

## Canonical Form

- Unit of analysis: chemical entity, chemical pair, article abstract, patent abstract, yearly network snapshot, or candidate experiment edge.
- Typical representation: evolving chemical relationship graph with article and patent sources.
- Data target: reconstruct the scientific problem space in which biomedical researchers select chemical relationships to test.
- Empirical signature: observed edges accumulate over time while a large universe of untested candidate edges remains available.

## Uses in Science of Science

- Provides a concrete data panel for [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md).
- Supplies the empirical substrate for [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md) and [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md).
- Enables [MEDLINE-patent strategy convergence](../validations/medline_patent_strategy_convergence.md) by comparing article and patent-derived search behavior.
- Supports [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md) and [optimal knowledge-network search simulation](../methods/optimal_knowledge_network_search_simulation.md).

## Operationalization

- Extract a chemical lexicon from MEDLINE metadata and match chemical terms into MEDLINE and patent abstracts.
- Add an edge when chemical terms appear in the same abstract.
- Store source type, publication or patent year, first-observed relationship year, repeated relationship counts, and whether the relation is article- or patent-derived.
- Build time-dependent network snapshots so candidate-pair degree and distance are computed before each observed edge.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) studies biomedical chemistry from 1976 to 2010 using MEDLINE and U.S. patent abstracts.
- The paper reports a lexicon of 52,654 chemical terms and a network with 30,060 unique chemicals that have at least one link.
- The resulting network contains 12,342,474 links corresponding to 1,338,753 unique chemical relationships.
- Rzhetsky et al. link this network to 2,363,858 articles and 295,812 patents, making it a joint publication-patent problem-choice panel.

## Caveats

- Co-mention is an imperfect proxy for an experimentally tested or mechanistic relationship.
- Chemical terms miss diseases, methods, organisms, theories, instruments, and other scientific problem dimensions.
- Patent and article abstracts differ in genre, disclosure incentives, and indexing coverage.
- Candidate chemical pairs are not uniformly feasible, safe, ethical, or valuable.

## Links

- [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [MEDLINE chemical annotation corpus](medline_chemical_annotation_corpus.md)
- [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md)
- [degree-distance problem-choice model](../methods/degree_distance_problem_choice_model.md)
- [MEDLINE-patent strategy convergence](../validations/medline_patent_strategy_convergence.md)
- [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md)
- [patent-paper links](patent_paper_links.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; WoS: unknown; SciSciNet: W2130145803]

## Metadata

- Concept ID: `biomedical_chemical_relationship_network_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: biomedical chemistry network panel; MEDLINE patent chemical network; chemical co-mention panel; chemical relationship discovery panel
