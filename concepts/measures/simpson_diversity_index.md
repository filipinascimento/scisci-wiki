# Simpson diversity index

## Summary

The Simpson diversity index measures how spread a paper, portfolio, or reference set is across categories by using the complement of the summed squared category shares.

## Canonical Form

- Unit of analysis: paper reference list, portfolio, field, institution, journal set, or topic mix.
- Typical representation: `1 - sum(p_i^2)`, where `p_i` is the share of items in category `i`.
- Measurement target: combined category variety and balance, without directly incorporating category distance.
- Empirical signature: the score rises when items are distributed across more categories or more evenly across existing categories.

## Uses in Science of Science

- Supplies one component measure for [interdisciplinarity dimensions](interdisciplinarity_dimensions.md).
- Complements [category variety](category_variety.md), [distributional balance](distributional_balance.md), [Shannon entropy diversity](shannon_entropy_diversity.md), and [Rao-Stirling diversity](rao_stirling_diversity.md).
- Provides a paper-level input for [interdisciplinarity factor decomposition](../methods/interdisciplinarity_factor_decomposition.md).
- Helps distinguish diversity-as-evenness from [category disparity](category_disparity.md), which requires a distance matrix.

## Operationalization

- Assign references, papers, grants, patents, or topics to categories.
- Compute category shares `p_i`.
- Sum squared shares and subtract from one.
- Report the category system, item counting rule, and whether multi-category items are fractionally assigned.
- Interpret jointly with disparity measures when cognitive distance matters.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) lists the Simpson index among paper-level interdisciplinarity measures derived from referenced Web of Science subject categories.
- Wang et al. use the diversity-oriented form `1 - sum(p_i^2)`, also called the Gini-Simpson index, so larger values correspond to higher diversity.
- The paper explains that Simpson and Shannon entropy both capture variety and balance of referenced disciplines.
- In the factor analysis, Simpson has a high loading on the factor interpreted as variety, showing that evenness-sensitive richness measures can align with the broader variety dimension.

## Caveats

- Simpson diversity does not measure how far apart the categories are.
- It can increase because a reference list is longer or more evenly spread, not necessarily because the research integrates distant knowledge.
- Multi-category journal assignments can change category shares unless fractionalization is documented.

## Links

- [interdisciplinarity dimensions](interdisciplinarity_dimensions.md)
- [category variety](category_variety.md)
- [distributional balance](distributional_balance.md)
- [Shannon entropy diversity](shannon_entropy_diversity.md)
- [category disparity](category_disparity.md)
- [average subject-category dissimilarity](average_subject_category_dissimilarity.md)
- [Rao-Stirling diversity](rao_stirling_diversity.md)
- [interdisciplinarity factor decomposition](../methods/interdisciplinarity_factor_decomposition.md)
- [cited subject-category reference profile](../representations/cited_subject_category_reference_profile.md)
- [diversity aggregation-weight sensitivity](../validations/diversity_aggregation_weight_sensitivity.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]

## Metadata

- Concept ID: `simpson_diversity_index`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2015) (2015)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: Gini-Simpson index; Simpson interdisciplinarity; one minus squared shares; Simpson category diversity
