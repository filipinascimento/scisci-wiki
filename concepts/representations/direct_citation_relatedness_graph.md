# Direct-citation relatedness graph

## Summary

A direct-citation relatedness graph represents publications as connected when one directly cites the other, usually ignoring direction when the goal is topical classification.

## Canonical Form

- Unit of analysis: publication, citation edge, connected component, research area, or citation cluster.
- Typical representation: sparse publication-by-publication adjacency matrix with binary or weighted direct-citation edges.
- Representation target: scalable paper relatedness from observed citation links.
- Empirical signature: two papers are related if at least one cites the other, with no edge when no direct citation relation exists.

## Uses in Science of Science

- Supplies the sparse graph substrate for [publication-level field classification](../methods/publication_level_field_classification.md).
- Complements [citation networks](citation_networks.md), [bibliographic coupling](bibliographic_coupling.md), and [co citation](co_citation.md) as a paper-level relatedness representation.
- Supports [science maps](science_maps.md) and field normalization when citation-network structure is the chosen similarity signal.
- Makes graph sparsity and connected-component coverage explicit before clustering.
- Motivates [hybrid publication-relatedness extension](../methods/hybrid_publication_relatedness_extension.md) when direct links are too sparse for coverage or accuracy.

## Operationalization

- Start from a publication set and directed citation links among publications in that set.
- Convert citation direction to an undirected direct-relatedness edge when either publication cites the other.
- Use binary relatedness for memory-efficient large-scale clustering, or retain weights if the design requires them.
- Track publications with no direct or indirect path into sufficiently large connected components.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) defines publication relatedness with a binary direct-citation rule: two publications are related if either one cites the other.
- They disregard citation direction to obtain a simple graph suitable for clustering millions of publications.
- The paper explicitly chooses direct citations to minimize the number of publication pairs with nonzero relatedness, saving memory and reducing computing time.
- Its main limitation section notes that exclusive reliance on direct citation can misclassify peripheral papers and suggests bibliographic coupling or title/abstract word relations as possible improvements.
- Waltman and van Eck also make the [direct-citation classification accuracy gap](../validations/direct_citation_classification_accuracy_gap.md) explicit by noting that rigorous accuracy evaluation remains difficult without a gold standard.

## Caveats

- Direct citation is precise but sparse; many related papers may not cite one another directly.
- Older publications, low-citation-density fields, and weakly linked document types can be underconnected.
- Ignoring direction is useful for topical classification but loses temporal and knowledge-flow information.

## Links

- [publication-level field classification](../methods/publication_level_field_classification.md)
- [normalized publication relatedness](../measures/normalized_publication_relatedness.md)
- [sparse direct-citation exclusion](../validations/sparse_direct_citation_exclusion.md)
- [hybrid publication-relatedness extension](../methods/hybrid_publication_relatedness_extension.md)
- [direct-citation classification accuracy gap](../validations/direct_citation_classification_accuracy_gap.md)
- [citation networks](citation_networks.md)
- [bibliographic coupling](bibliographic_coupling.md)
- [co citation](co_citation.md)
- [science maps](science_maps.md)
- [direct-citation co-citation overlap](../validations/direct_citation_co_citation_overlap.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `direct_citation_relatedness_graph`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: direct-citation relatedness; direct citation graph; citation-relation graph; binary citation relatedness
