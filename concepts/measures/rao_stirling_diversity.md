# Rao-Stirling diversity

## Summary

Rao-Stirling diversity is a composite diversity measure that weights pairwise category disparity by the shares of items in each category.

## Canonical Form

- Unit of analysis: paper, reference list, research field, portfolio, science-map overlay, or technology mix.
- Typical representation: sum over category pairs of `p_i * p_j * d_ij`.
- Mechanism or measurement target: combined variety, balance, and disparity in a single scalar.
- Empirical signature: the score rises when represented categories become more numerous, more balanced, or more distant.

## Uses in Science of Science

- Operationalizes [interdisciplinarity](../mechanisms/interdisciplinarity.md) as diversity of knowledge sources in references or outputs.
- Provides a compact alternative to reporting [category variety](category_variety.md), [distributional balance](distributional_balance.md), and [category disparity](category_disparity.md) separately.
- Supports longitudinal comparisons of fields and portfolio overlays when the category system and distance matrix are stable.

## Operationalization

- Assign items to categories and compute category shares `p_i`.
- Construct or select a distance matrix `d_ij` between categories.
- Compute the share-weighted pairwise diversity sum across category pairs.
- Report the source of categories, distance matrix, and whether the sum includes ordered or unordered pairs.
- Use [diversity aggregation-weight sensitivity](../validations/diversity_aggregation_weight_sensitivity.md) when changing exponents or weights would alter the interpretation of the scalar.

## Evidence and Validations

- Verified full-text evidence from Stirling (2007) proposes a general diversity heuristic as a sum of pairwise disparities weighted by proportional representation.
- Porter and Rafols (2009) identify their Integration score as a Rao-Stirling diversity index for interdisciplinarity, using Web of Science subject-category shares and a cosine-similarity-derived distance matrix.
- Porter and Rafols show that the Integration score grows much more modestly than simple counts of cited disciplines because newly cited categories are often nearby.
- Their operational pipeline depends on a [WoS subject-category co-citation matrix](../representations/wos_subject_category_cocitation_matrix.md) and is interpreted through [interdisciplinarity metric-map triangulation](../validations/interdisciplinarity_metric_map_triangulation.md).
- Porter and Rafols also motivate [interdisciplinarity diversity saturation effect](../validations/interdisciplinarity_diversity_saturation_effect.md) and [subject-category similarity matrix sensitivity](../validations/subject_category_similarity_matrix_sensitivity.md) as checks on Integration-score interpretation.
- Wang, Thijs, and Glanzel (2015) include Rao-Stirling diversity among paper-level interdisciplinarity measures and use it in factor analysis alongside other indicators.

## Caveats

- The scalar can hide whether a high score comes from variety, balance, disparity, or all three.
- Values depend strongly on category granularity and distance-matrix construction.
- For recent or narrow corpora, a distance matrix estimated from sparse data can make the score unstable.

## Links

- [diversity measures](diversity_measures.md)
- [interdisciplinarity dimensions](interdisciplinarity_dimensions.md)
- [category variety](category_variety.md)
- [distributional balance](distributional_balance.md)
- [category disparity](category_disparity.md)
- [Simpson diversity index](simpson_diversity_index.md)
- [Shannon entropy diversity](shannon_entropy_diversity.md)
- [average subject-category dissimilarity](average_subject_category_dissimilarity.md)
- [diversity heuristic quality criteria](../methods/diversity_heuristic_quality_criteria.md)
- [perspective-dependent disparity space](../representations/perspective_dependent_disparity_space.md)
- [diversity aggregation-weight sensitivity](../validations/diversity_aggregation_weight_sensitivity.md)
- [portfolio-interaction diversity value](../methods/portfolio_interaction_diversity_value.md)
- [science map overlays](../representations/science_map_overlays.md)
- [interdisciplinarity factor decomposition](../methods/interdisciplinarity_factor_decomposition.md)
- [WoS subject-category co-citation matrix](../representations/wos_subject_category_cocitation_matrix.md)
- [neighboring-field integration growth](../mechanisms/neighboring_field_integration_growth.md)
- [interdisciplinarity diversity saturation effect](../validations/interdisciplinarity_diversity_saturation_effect.md)
- [subject-category similarity matrix sensitivity](../validations/subject_category_similarity_matrix_sensitivity.md)
- [interdisciplinarity metric-map triangulation](../validations/interdisciplinarity_metric_map_triangulation.md)
- [responsible metrics](responsible_metrics.md)

## References

- Stirling, A. (2007). A general framework for analysing diversity in science, technology and society. *Journal of the Royal Society Interface*, 4(15), 707-719. https://doi.org/10.1098/rsif.2007.0213 [OpenAlex: W2110158660; Dimensions: pub.1011912474; WoS: unknown]
- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]
- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]

## Metadata

- Concept ID: `rao_stirling_diversity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Stirling (2007) (2007)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1098/rsif.2007.0213`
- OpenAlex ID: `W2110158660`
- Aliases: Integration score; disciplinary diversity index; Rao-Stirling index; share-weighted disparity
