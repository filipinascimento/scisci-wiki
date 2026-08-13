# Top-N similarity edge filtering

## Summary

Top-N similarity edge filtering reduces a dense or noisy similarity matrix by retaining only the strongest `N` relatedness edges for each journal, paper, or map node before layout.

## Canonical Form

- Unit of analysis: node, similarity edge, retained-neighbor set, filtered matrix, or layout input graph.
- Typical representation: per-node top-`N` similarity list, sparse adjacency matrix, or edge-pruned map input.
- Method target: improve map tractability, readability, and sometimes local accuracy by keeping the strongest local relations.
- Empirical signature: each node contributes only its strongest similarity links to the graph layout stage.

## Uses in Science of Science

- Operationalizes one step in [science map layout and reduction](science_map_layout_reduction.md).
- Converts [journal similarity mapping](journal_similarity_mapping.md) outputs into sparse graph inputs for force-directed layouts.
- Helps large maps scale from all-pairs matrices to layout algorithms such as VxOrd or Fruchterman-Reingold.
- Should be validated through [science map accuracy validation](../validations/science_map_accuracy_validation.md) because edge pruning can change apparent field proximity.

## Operationalization

- Compute a normalized similarity matrix between map entities.
- For each node, retain the strongest `N` similarity pairs and drop weaker edges before layout.
- Record whether the retained graph is symmetrized, whether ties are included, and the chosen `N`.
- Compare map quality across multiple `N` values before fixing a production map.

## Evidence and Validations

- Verified full-text evidence from Boyack et al. (2005) states that the authors did not use full similarity matrices for layout.
- Boyack et al. report that previous work found more accurate layouts when only the largest 15 similarities per journal were used.
- The same full text says the similarity files were culled to the top 15 similarity pairs per journal before generating maps with VxOrd.
- Verified full-text evidence from Borner et al. (2012) uses a similar top-`N` filtering stage in the UCSD map workflow to reduce non-zero cells before graph layout and clustering.

## Caveats

- Too small an `N` can sever weak but meaningful interdisciplinary bridges.
- Too large an `N` can reintroduce noise and make layouts less readable.
- Top-`N` rules are local; they can favor nodes with many moderate ties differently from nodes with a few very strong ties.

## Links

- [science map layout and reduction](science_map_layout_reduction.md)
- [journal similarity mapping](journal_similarity_mapping.md)
- [weighted science-map matrix fusion](weighted_science_map_matrix_fusion.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)
- [journal-cluster science backbones](../representations/journal_cluster_science_backbones.md)
- [science maps](../representations/science_maps.md)
- [disciplinary independence](../measures/disciplinary_independence.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown]
- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `top_n_similarity_edge_filtering`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Dimensions ID: `pub.1011403274`
- SciSciNet ID: `W2100484636`
- Aliases: top-15 similarity filtering; per-node nearest-neighbor filtering; similarity graph sparsification; retained-neighbor map input
