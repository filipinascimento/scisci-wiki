# Shannon entropy diversity

## Summary

Shannon entropy diversity measures category diversity as the uncertainty in the category identity of a randomly selected item from a paper, portfolio, or reference set.

## Canonical Form

- Unit of analysis: paper reference list, research portfolio, field, institution, journal set, topic mix, or citation profile.
- Typical representation: `-sum(p_i * log(p_i))`, where `p_i` is the share of items in category `i`.
- Measurement target: combined category variety and distributional balance.
- Empirical signature: entropy increases when a set includes more represented categories and when shares become less concentrated.

## Uses in Science of Science

- Provides a familiar diversity measure for [interdisciplinarity dimensions](interdisciplinarity_dimensions.md).
- Complements [Simpson diversity index](simpson_diversity_index.md), [category variety](category_variety.md), [distributional balance](distributional_balance.md), and [Rao-Stirling diversity](rao_stirling_diversity.md).
- Serves as an indicator input for [interdisciplinarity factor decomposition](../methods/interdisciplinarity_factor_decomposition.md).
- Helps test whether conclusions depend on choosing richness counts, entropy, Simpson, or distance-aware diversity measures.

## Operationalization

- Assign items to a category system and compute category shares.
- Compute `-sum(p_i * log(p_i))`, omitting zero-share categories from the sum.
- Specify the logarithm base, category system, and fractional assignment rule.
- Compare with maximum possible entropy when category systems differ in size.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) includes Shannon entropy among commonly used interdisciplinarity measures derived from reference-list subject categories.
- The paper states that Shannon entropy and the Simpson index are popular ecological diversity indices that capture variety and balance of referenced disciplines.
- In Wang et al.'s factor analysis, Shannon entropy loads strongly with Simpson and the number of referenced subject categories on the factor interpreted as variety.
- The measure therefore contributes to decomposing interdisciplinarity rather than standing alone as a complete interdisciplinarity score.

## Caveats

- Shannon entropy does not encode the cognitive distance between categories.
- Entropy is sensitive to category granularity and multi-category assignment rules.
- High entropy can reflect a diffuse reference list without successful conceptual integration.

## Links

- [interdisciplinarity dimensions](interdisciplinarity_dimensions.md)
- [category variety](category_variety.md)
- [distributional balance](distributional_balance.md)
- [Simpson diversity index](simpson_diversity_index.md)
- [category disparity](category_disparity.md)
- [average subject-category dissimilarity](average_subject_category_dissimilarity.md)
- [Rao-Stirling diversity](rao_stirling_diversity.md)
- [interdisciplinarity factor decomposition](../methods/interdisciplinarity_factor_decomposition.md)
- [diversity proxy-substitution risk](../validations/diversity_proxy_substitution_risk.md)
- [diversity aggregation-weight sensitivity](../validations/diversity_aggregation_weight_sensitivity.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]

## Metadata

- Concept ID: `shannon_entropy_diversity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2015) (2015)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: Shannon interdisciplinarity; entropy diversity; category entropy; reference-list entropy
