# Zero-degree publication handling

## Summary

Publication-level classifications need an explicit rule for papers with no citation relations before normalized relatedness or component-based clustering is computed.

## Canonical Form

- Unit of analysis: publication, citation relation, normalized relatedness denominator, isolate, or classification assignment.
- Typical representation: isolate-handling rule with zero-denominator flags and fallback assignment status.
- Mechanism, measurement, or validation target: classification behavior for citation-isolate publications.
- Empirical signature: publications with no direct citation relations either receive zero relatedness, remain unclassified, or enter through a fallback source.

## Uses in Science of Science

- Connects publication-level classification validation to [normalized publication relatedness](../measures/normalized_publication_relatedness.md) and [direct citation relatedness graph](../representations/direct_citation_relatedness_graph.md).
- Provides a reusable motif for comparing [sparse direct citation exclusion](sparse_direct_citation_exclusion.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [minimum research area size constraint](../methods/minimum_research_area_size_constraint.md) in linked scholarly data.

## Operationalization

- Detect zero-denominator publication rows before computing normalized publication relatedness.
- Assign zero normalized relatedness where appropriate and record whether the paper was excluded, recovered, or assigned by fallback metadata.
- Report the share of excluded publications attributable to no citation relations.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) notes that publications without relations make the normalization denominator zero.
- Their exclusion analysis reports that most excluded publications have no citation relations.

## Caveats

- Zero-degree status may reflect missing coverage rather than substantive isolation.
- Fallback assignment can improve coverage while changing the meaning of citation-based classification.

## Links

- [Normalized publication relatedness](../measures/normalized_publication_relatedness.md)
- [Direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md)
- [Sparse direct-citation exclusion](sparse_direct_citation_exclusion.md)
- [Minimum research-area size constraint](../methods/minimum_research_area_size_constraint.md)
- [Publication-level field classification](../methods/publication_level_field_classification.md)
- [Citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown]

## Metadata

- Concept ID: `zero_degree_publication_handling`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: zero-link publication exception; isolate publication handling; no-relation normalization case; citation-isolate classification boundary
