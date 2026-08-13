# Journal citation network mapping

## Summary

Journal citation network mapping aggregates references between journals to represent journals as nodes and journal-to-journal citation flows as weighted directed links.

## Canonical Form

- Unit of analysis: journal title, journal cluster, source index, or field map.
- Typical representation: directed weighted matrix from citing journals to cited journals, often with thresholded or normalized edges.
- Mechanism or measurement target: journal-level information transfer, disciplinary proximity, and source coverage structure.
- Empirical signature: dense local clusters and broad multidisciplinary journals connect otherwise separate specialty regions.

## Uses in Science of Science

- Provides a journal-level version of [citation networks](citation_networks.md) for science mapping and source evaluation.
- Connects [source journal reference profiles](source_journal_reference_profile.md) to [cited journal citation profiles](cited_journal_citation_profile.md).
- Requires [cited journal title normalization](../methods/cited_journal_title_normalization.md) so node definitions are stable.
- Exposes diagonal self-links that can be summarized as [journal self-citation rate](../measures/journal_self_citation_rate.md).
- Can be transformed into [journal citation random walk](../methods/journal_citation_random_walk.md) inputs for [Eigenfactor Score](../measures/eigenfactor_score.md).
- Historical bridge from [citation-index research infrastructure](../datasets/citation_index_research_infrastructure.md) to later [science maps](science_maps.md), [Eigenfactor metrics](../measures/eigenfactor_metrics.md), and journal-cluster backbones.

## Operationalization

- Choose source journals, cited-title normalization rules, and citation census dates.
- Construct a journal-by-journal matrix where cells count references from a source journal to a cited journal.
- Optionally normalize by source reference volume, cited journal output, field, or expected citation rates.
- Apply thresholds, clustering, layout, or recursive centrality depending on whether the task is mapping, evaluation, or discovery.
- For Eigenfactor-style ranking, normalize journal-to-journal citation flows into random-walk transition probabilities.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) describes journals as a communications network and argues that a complete map of journal relationships had not yet existed.
- Garfield then uses SCI machine-readable data to build listings of cited titles, cited-journal histories, and citing-journal reference profiles, explicitly framing them as tools for mapping the journal information-transfer network.
- The paper therefore supplies an early operational recipe for journal citation network mapping from a large citation index.
- Verified full-text evidence from West et al. (2010) shows one downstream use: a journal citation network can be ranked through a PageRank-like random walk to produce Eigenfactor Score and Article Influence Score.

## Caveats

- Journal aggregation can blur article-level and specialty-level heterogeneity.
- Coverage decisions about source journals strongly shape the resulting map.
- Title normalization, multilingual journals, translations, and journal splits or mergers are not clerical details; they define nodes in the network.

## Links

- [citation networks](citation_networks.md)
- [science maps](science_maps.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [journal-cluster science backbones](journal_cluster_science_backbones.md)
- [journal citation frequency](../measures/journal_citation_frequency.md)
- [cited journal title normalization](../methods/cited_journal_title_normalization.md)
- [journal self-citation rate](../measures/journal_self_citation_rate.md)
- [journal citation random walk](../methods/journal_citation_random_walk.md)
- [Eigenfactor Score](../measures/eigenfactor_score.md)
- [cited journal citation profile](cited_journal_citation_profile.md)
- [source journal reference profile](source_journal_reference_profile.md)
- [Eigenfactor metrics](../measures/eigenfactor_metrics.md)
- [citation-based source selection](../methods/citation_based_source_selection.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]
- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]

## Metadata

- Concept ID: `journal_citation_network_mapping`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Garfield (1972) (1972)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: journal information-transfer network; journal citation matrix; journal-to-journal citation map; cited-citing journal network
