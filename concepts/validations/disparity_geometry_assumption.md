# Disparity Geometry Assumption

## Summary

Disparity geometry assumption is the caveat that diversity measures depend on the geometry, normalization, and weighting of the distance space used to represent differences among categories or options.

## Canonical Form

- Unit of analysis: disparity matrix, distance space, category system, or diversity index.
- Typical representation: validation note for distance-space assumptions.
- Validation target: prevent disparity scores from being interpreted without the geometry used to construct distances.
- Empirical signature: diversity rankings can change when Euclidean, branching, ultrametric, normalized, or weighted distance assumptions change.

## Uses in Science of Science

- Qualifies [category disparity](../measures/category_disparity.md) and [Rao-Stirling diversity](../measures/rao_stirling_diversity.md).
- Links to [perspective-dependent disparity space](../representations/perspective_dependent_disparity_space.md).
- Complements [diversity aggregation-weight sensitivity](diversity_aggregation_weight_sensitivity.md).
- Helps audit cognitive-distance matrices used in interdisciplinarity and portfolio-diversity studies.

## Operationalization

- Specify how distances among categories or options are constructed.
- Record whether distances assume a Euclidean space, branching taxonomy, ultrametric tree, similarity matrix, or another geometry.
- Test normalization and weighting choices when distance magnitudes enter a composite score.
- Report whether the chosen geometry is domain-grounded or heuristic.

## Evidence and Validations

- Verified full-text evidence from Stirling (2007) notes that some domains can assume strict branching forms, while others involve complex webs of relationships that cannot be reduced to branching taxonomies.
- Stirling proposes disparity spaces whose attributes can be cardinal, interval, or binary and emphasizes normalization and weighting choices.
- The paper argues that Euclidean n-space can be less restrictive than ultrametric assumptions for general diversity appraisal.

## Caveats

- A flexible geometry can improve generality while increasing degrees of freedom.
- A restrictive geometry can be appropriate when the domain structure is genuinely tree-like.
- The assumption should be made explicit even when distances are imported from an existing map or classification.

## Links

- [category disparity](../measures/category_disparity.md)
- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [perspective-dependent disparity space](../representations/perspective_dependent_disparity_space.md)
- [diversity aggregation-weight sensitivity](diversity_aggregation_weight_sensitivity.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)

## References

- Stirling, A. (2007). A general framework for analysing diversity in science, technology and society. *Journal of the Royal Society Interface*, 4(15), 707-719. https://doi.org/10.1098/rsif.2007.0213 [OpenAlex: W2110158660; Dimensions: pub.1011912474; SciSciNet: W2110158660; WoS: unknown]

## Metadata

- Concept ID: `disparity_geometry_assumption`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Stirling (2007) (2007)
- Latest seen paper: Stirling (2007) (2007)
- Primary reference DOI: `10.1098/rsif.2007.0213`
- OpenAlex ID: `W2110158660`
- Dimensions ID: `pub.1011912474`
- SciSciNet ID: `W2110158660`
- Aliases: diversity distance geometry; disparity-space assumption; distance-matrix geometry caveat; category-distance geometry sensitivity
