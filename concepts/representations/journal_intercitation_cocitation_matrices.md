# Journal inter-citation and co-citation matrices

## Summary

Journal inter-citation and co-citation matrices represent journal relatedness either as direct citation flows between journals or as co-occurrence of journals in paper reference lists.

## Canonical Form

- Unit of analysis: journal pair, citing journal, cited journal, citing paper, reference list, or matrix cell.
- Typical representation: inter-citation frequency matrix, journal co-citation frequency matrix, sparse weighted journal-journal graph, or normalized similarity matrix.
- Representation target: turning reference data into the input layer for journal-level science maps.
- Empirical signature: direct citation-flow matrices and co-citation matrices can produce similar broad map structure but differ in coverage and local placement.

## Uses in Science of Science

- Supplies the raw representation for [journal similarity mapping](../methods/journal_similarity_mapping.md).
- Supports both inter-citation map workflows and co-citation map workflows such as [K50 co-citation relatedness](../methods/k50_cocitation_relatedness.md).
- Provides inputs to [science map layout and reduction](../methods/science_map_layout_reduction.md), [top-N similarity edge filtering](../methods/top_n_similarity_edge_filtering.md), and [science map accuracy validation](../validations/science_map_accuracy_validation.md).
- Makes clear when a map is based on citation direction versus shared citing-paper contexts.
- Separates normalized direct-citation measures such as [IC-Jaccard intercitation relatedness](../methods/ic_jaccard_intercitation_relatedness.md) from co-citation measures such as [K50 co-citation relatedness](../methods/k50_cocitation_relatedness.md).

## Operationalization

- Build an inter-citation matrix by counting how often a current-year journal cites each cited journal.
- Build a co-citation matrix by counting how often two journals co-occur in the same paper reference list, then summing those co-occurrences by journal pair.
- Report whether the source is full reference lists or aggregated Journal Citation Reports-style data.
- Document matrix sparsity, cited-side assignment loss, and the inclusion universe.
- Normalize or transform matrices before layout when raw counts would overweight large journals.

## Evidence and Validations

- Verified full-text evidence from Boyack et al. (2005) directly counts inter-citation frequencies from citing and cited journal information in 16.24 million assigned reference pairs.
- The paper reports that the journal-journal inter-citation frequency matrix is extremely sparse, with 98.6% zero cells.
- Boyack et al. also calculate journal co-citation frequencies from paper-level co-occurrence of cited journals, then sum counts by journal pair.
- The co-citation matrix is less sparse but still sparse, with 93.6% zero cells.
- The paper notes that Journal Citation Reports-style data can provide inter-citation frequencies but cannot reconstruct paper-level co-citation frequencies without original reference lists.
- Boyack et al. further show that direct inter-citation maps are restricted to the source journal universe, while co-citation maps can include cited-only venues when references are available.

## Caveats

- Inter-citation matrices preserve direction but can be dominated by large citing and cited journals.
- Co-citation matrices require paper-level reference lists and may be unavailable from aggregated citation reports.
- Both representations are sensitive to source coverage, reference parsing, journal title normalization, and multidisciplinary journals.

## Links

- [SCI/SSCI journal-map corpus 2000](../datasets/sci_ssci_journal_map_corpus_2000.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [IC-Jaccard intercitation relatedness](../methods/ic_jaccard_intercitation_relatedness.md)
- [intercitation source-universe boundary](../validations/intercitation_source_universe_boundary.md)
- [K50 co-citation relatedness](../methods/k50_cocitation_relatedness.md)
- [science map layout and reduction](../methods/science_map_layout_reduction.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)
- [journal-cluster science backbones](journal_cluster_science_backbones.md)
- [co-citation](co_citation.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown]

## Metadata

- Concept ID: `journal_intercitation_cocitation_matrices`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Boyack et al. (2005) (2005)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Dimensions ID: `pub.1011403274`
- SciSciNet ID: `W2100484636`
- Aliases: journal citation matrices; journal co-citation matrix; inter-citation matrix; journal reference co-occurrence matrix
