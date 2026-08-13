# Citation Quality Context Requirement

## Summary

Citation quality context requirement is the caveat that improving citation weighting beyond simple topology requires detailed information about what each citation means in context.

## Canonical Form

- Unit of analysis: citation edge, citation context, recursive citation score, or citation-weighting model.
- Typical representation: boundary between topology-only weighting and context-aware weighting.
- Validation target: prevent recursive citation metrics from being interpreted as citation-quality measures without semantic evidence.
- Empirical signature: topology can weight citations by citing-paper importance, but edge meaning remains unobserved without context.

## Uses in Science of Science

- Qualifies [recursive citation weighting](../mechanisms/recursive_citation_weighting.md).
- Complements [reference-list dilution](../mechanisms/reference_list_dilution.md).
- Links citation metrics to [citation contexts](../representations/citation_contexts.md) and [citation function classification](../methods/citation_function_classification.md).
- Extends [citation face-value validity boundary](citation_face_value_validity_boundary.md) to recursive metrics.

## Operationalization

- State whether citation weights use only topology or also citation text/function.
- Avoid calling a topology-weighted citation a high-quality citation without context evidence.
- Add citation-function, sentiment, rhetorical role, or local-text features when citation meaning matters.
- Report the limits of citation-quality claims when context is unavailable.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) argues that PageRank provides a simple way to weight citations from important papers more than citations from less important papers.
- The authors note that other ways of assigning citation quality would require much more detailed contextual information about the citation itself.
- This identifies a boundary between recursive citation topology and semantic citation interpretation.

## Caveats

- Context-aware citation models introduce their own NLP and annotation errors.
- Citation context can be ambiguous, distributed across the paper, or absent near the reference marker.
- Topological weighting can still be useful when the target is attention or influence rather than citation meaning.

## Links

- [recursive citation weighting](../mechanisms/recursive_citation_weighting.md)
- [reference-list dilution](../mechanisms/reference_list_dilution.md)
- [citation contexts](../representations/citation_contexts.md)
- [citation function classification](../methods/citation_function_classification.md)
- [citation face-value validity boundary](citation_face_value_validity_boundary.md)
- [citation PageRank](../measures/citation_pagerank.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; SciSciNet: W1539510218; WoS: unknown]

## Metadata

- Concept ID: `citation_quality_context_requirement`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: citation-quality context caveat; context-aware citation weighting requirement; topology-only citation quality boundary; citation meaning requirement
