# IC-Jaccard Intercitation Relatedness

## Summary

IC-Jaccard intercitation relatedness is a normalized direct journal-to-journal citation measure that compares symmetric inter-citation counts against the union of each journal's citation neighborhood.

## Canonical Form

- Unit of analysis: journal pair, direct inter-citation count, journal citation neighborhood, or science-map similarity edge.
- Typical representation: Jaccard-style relatedness matrix, normalized journal-pair score, or weighted science-map input graph.
- Method target: construct a direct-citation journal similarity matrix for whole-science mapping.
- Empirical signature: journals with high normalized reciprocal citation overlap are placed near each other in the resulting map.

## Uses in Science of Science

- Provides a specific input measure for [journal similarity mapping](journal_similarity_mapping.md).
- Complements [K50 co-citation relatedness](k50_cocitation_relatedness.md) by using direct inter-citation relations rather than co-citation co-occurrence.
- Feeds [science map layout and reduction](science_map_layout_reduction.md) and [science map measure selection grid](../validations/science_map_measure_selection_grid.md).
- Makes the [journal inter-citation and co-citation matrices](../representations/journal_intercitation_cocitation_matrices.md) operational for map comparison.

## Operationalization

- Build a journal-journal direct inter-citation matrix from a fixed source-year corpus.
- Symmetrize directed journal citation counts when the map is undirected.
- Normalize each pair with a Jaccard-style denominator based on each journal's citation-neighborhood totals.
- Compare the resulting matrix with alternative relatedness measures using local and structural map validation.

## Evidence and Validations

- Verified full-text evidence from Boyack, Klavans, and Borner (2005) defines IC-Jaccard as one of five inter-citation similarity measures tested for a 7,121-journal whole-science map.
- The paper compares IC-Jaccard with raw, cosine, Pearson, and related inter-citation measures, as well as co-citation alternatives.
- Boyack et al. select IC-Jaccard as their preferred inter-citation map input because it is among the top structural-accuracy performers and has favorable map characteristics.

## Caveats

- Direct inter-citation maps are bounded by the source journal list and cannot place cited-only books, conferences, or journals outside that list.
- Jaccard normalization can downweight high-volume journals differently from cosine or Pearson normalization.
- Map performance depends on the citation year, source coverage, filtering threshold, and layout algorithm.

## Links

- [journal similarity mapping](journal_similarity_mapping.md)
- [journal inter-citation and co-citation matrices](../representations/journal_intercitation_cocitation_matrices.md)
- [K50 co-citation relatedness](k50_cocitation_relatedness.md)
- [science map measure selection grid](../validations/science_map_measure_selection_grid.md)
- [science map layout and reduction](science_map_layout_reduction.md)
- [intercitation source-universe boundary](../validations/intercitation_source_universe_boundary.md)
- [science maps](../representations/science_maps.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown; SciSciNet: W2100484636]

## Metadata

- Concept ID: `ic_jaccard_intercitation_relatedness`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Boyack et al. (2005) (2005)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Dimensions ID: `pub.1011403274`
- SciSciNet ID: `W2100484636`
- Aliases: IC-Jaccard; inter-citation Jaccard relatedness; journal Jaccard citation similarity; direct citation Jaccard map input
