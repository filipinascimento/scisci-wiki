# Perspective-dependent disparity space

## Summary

Perspective-dependent disparity space represents category differences as distances in an attribute space whose dimensions and weights depend on the analytic or policy perspective.

## Canonical Form

- Unit of analysis: category, field, technology, research option, portfolio element, attribute vector, or distance matrix.
- Typical representation: Euclidean or other distance matrix over categories built from selected salient attributes.
- Representation target: make disparity explicit as a modeled relationship rather than an implicit category label.
- Empirical signature: different stakeholder or research perspectives can yield different distance matrices and therefore different diversity scores.

## Uses in Science of Science

- Supplies the distance layer for [category disparity](../measures/category_disparity.md), [Rao-Stirling diversity](../measures/rao_stirling_diversity.md), and science-map overlays.
- Generalizes from field-distance matrices to research portfolios, technology choices, topic spaces, and policy alternatives.
- Supports [diversity aggregation-weight sensitivity](../validations/diversity_aggregation_weight_sensitivity.md) by making the distance assumptions visible.
- Connects diversity metrics to deliberative policy analysis when different groups disagree about which differences matter.

## Operationalization

- Choose attributes that define salient differences among categories for the question at hand.
- Encode categories as points in an attribute space, with documented scaling and weighting.
- Compute pairwise distances or dissimilarities among categories.
- Recompute diversity under alternative attribute selections, scalings, or stakeholder perspectives.
- Report the distance matrix and the rationale for each included dimension.

## Evidence and Validations

- Verified full-text evidence from Stirling (2007) argues that disparity depends on the salient dimensions of difference and that these vary by perspective and context.
- The paper proposes conceiving disparities between elements as distances between points in an n-dimensional disparity space when no definitive parametric system structure exists.
- Stirling states that each perspective yields a unique disparity space based on judgments about salient attributes.
- The full text contrasts this flexible representation with more restrictive branching taxonomies that may not fit complex science and technology relationships.
- The companion [performance-space value representation](performance_space_value_representation.md) stores the parallel criteria-weighted value layer used when diversity is articulated with option performance.

## Caveats

- Distance spaces can create an appearance of objectivity even when attribute choice and weighting are normative.
- Sparse or unstable category metadata can make distances noisy.
- Multiple plausible disparity spaces should be reported when the study is used for policy decisions.

## Links

- [category disparity](../measures/category_disparity.md)
- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [diversity measures](../measures/diversity_measures.md)
- [science maps](science_maps.md)
- [science map overlays](science_map_overlays.md)
- [diversity proxy-substitution risk](../validations/diversity_proxy_substitution_risk.md)
- [diversity aggregation-weight sensitivity](../validations/diversity_aggregation_weight_sensitivity.md)
- [aggregation-accommodation-articulation challenge](../validations/aggregation_accommodation_articulation_challenge.md)
- [performance-space value representation](performance_space_value_representation.md)
- [transparent metric construction](../methods/transparent_metric_construction.md)

## References

- Stirling, A. (2007). A general framework for analysing diversity in science, technology and society. *Journal of the Royal Society Interface*, 4(15), 707-719. https://doi.org/10.1098/rsif.2007.0213 [OpenAlex: W2110158660; Dimensions: pub.1011912474; WoS: unknown]

## Metadata

- Concept ID: `perspective_dependent_disparity_space`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Stirling (2007) (2007)
- Latest seen paper: Stirling (2007) (2007)
- Primary reference DOI: `10.1098/rsif.2007.0213`
- OpenAlex ID: `W2110158660`
- Dimensions ID: `pub.1011912474`
- SciSciNet ID: `W2110158660`
- Aliases: disparity space; perspective-specific distance matrix; salient-difference space; diversity distance representation
