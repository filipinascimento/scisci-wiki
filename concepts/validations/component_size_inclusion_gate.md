# Component-size inclusion gate

## Summary

A publication can be included in a citation-based field classification only if its connected component can support the minimum size of the finest research-area level.

## Canonical Form

- Unit of analysis: publication, connected component, citation graph, minimum area size, or inclusion flag.
- Typical representation: component-size eligibility filter applied before hierarchical clustering.
- Mechanism, measurement, or validation target: citation-network support for fine-grained publication classification.
- Empirical signature: publications in components below the finest-level size threshold are excluded or sent to a fallback path.

## Uses in Science of Science

- Connects field classification coverage validation to [direct citation relatedness graph](../representations/direct_citation_relatedness_graph.md) and [sparse direct citation exclusion](sparse_direct_citation_exclusion.md).
- Provides a reusable motif for comparing [minimum research area size constraint](../methods/minimum_research_area_size_constraint.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [undersized cluster reassignment rule](../methods/undersized_cluster_reassignment_rule.md) in linked scholarly data.

## Operationalization

- Compute connected components in the direct-citation relatedness graph.
- Compare each component size to the minimum size required for the lowest-level research area.
- Report excluded component counts separately from zero-degree isolates.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) requires included publications to be in a component at least as large as the level-3 minimum area size.
- This implies direct or indirect citation relations with a sufficiently large local citation neighborhood.

## Caveats

- The gate can exclude small but coherent emerging areas.
- Component size depends on source window and citation coverage.

## Links

- [Direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md)
- [Sparse direct-citation exclusion](sparse_direct_citation_exclusion.md)
- [Minimum research-area size constraint](../methods/minimum_research_area_size_constraint.md)
- [Undersized cluster reassignment rule](../methods/undersized_cluster_reassignment_rule.md)
- [Publication-level field classification](../methods/publication_level_field_classification.md)
- [WoS 2001-2010 publication classification corpus](../datasets/wos_2001_2010_publication_classification_corpus.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown]

## Metadata

- Concept ID: `component_size_inclusion_gate`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: connected-component threshold; giant-component inclusion rule; component support gate; citation-component eligibility filter
