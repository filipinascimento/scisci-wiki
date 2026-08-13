# Probabilistic demographic fractional counting

## Summary

Probabilistic demographic fractional counting estimates aggregate group outcomes by assigning each paper fractional weights across inferred demographic categories rather than forcing authors into a single inferred identity category.

## Canonical Form

- Unit of analysis: author mention, disambiguated author, paper, demographic probability vector, topic, citation outcome, or group aggregate.
- Typical representation: probability-weighted author-paper table, group-by-topic fractional matrix, or weighted citation aggregate.
- Method target: preserve uncertainty in inferred race, ethnicity, gender, or topic labels when self-reported data are unavailable.
- Empirical signature: one paper contributes fractional mass to multiple demographic or topic cells, and aggregate outcomes are computed from those weighted contributions.

## Uses in Science of Science

- Extends [name-based demographic inference](name_based_demographic_inference.md) by propagating category uncertainty into downstream estimates.
- Supplies the measurement layer for [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md), [topic-identity homophily](../mechanisms/topic_identity_homophily.md), and topic-adjusted citation gaps.
- Reduces threshold artifacts that arise when surname or given-name probabilities are collapsed into a single category.
- Makes [responsible metrics](../measures/responsible_metrics.md) audits more explicit when sensitive demographic attributes are inferred rather than observed.
- Uses demographic-proxy sources such as [US Census surname race-probability table](../datasets/us_census_surname_race_probability_table.md) while requiring boundary checks such as [binary gender proxy boundary](../validations/binary_gender_proxy_boundary.md).
- Downstream residual motifs now include [topic overrepresentation ratio](../measures/topic_overrepresentation_ratio.md), [topic-sorted intersectional citation curves](../representations/topic_sorted_intersectional_citation_curves.md), and [country-specific race-category scope boundary](../validations/country_specific_race_category_scope_boundary.md).

## Operationalization

- Infer a probability distribution over demographic categories for each author or author mention.
- Infer or observe other relevant dimensions, such as gender, topic probabilities, field, publication year, and citations.
- Multiply probabilities across dimensions when constructing group-topic cells.
- Compute weighted counts, citation means, or representation ratios while reporting missingness, category definitions, and inference limits.

## Evidence and Validations

- Verified full-text evidence from Kozlowski et al. (2022) studies 5,431,451 Web of Science articles with 1,609,107 distinct U.S.-affiliated first authors from 2008 to 2019.
- The paper uses U.S. Census surname distributions to compute each author's probability of belonging to racial or ethnic groups and explicitly avoids assigning authors to unique racial categories.
- Kozlowski et al. state that threshold assignment can underestimate Black authors because of Black-White surname overlap, motivating probabilistic aggregation.
- The full text gives a concrete weighting example in which a paper contributes fractional mass across race, gender, and topic cells, and those weighted sums are used for topic distributions and normalized citation averages.

## Caveats

- This is an aggregate proxy method, not individual identity classification.
- Race, ethnicity, and gender categories are socially and contextually defined; country-specific methods should not be reused without redesign.
- Binary gender inference omits non-binary identities unless self-identification data are available; see [binary gender proxy boundary](../validations/binary_gender_proxy_boundary.md).
- Fractional counting propagates known uncertainty but cannot correct all missingness, name changes, transliteration, or structural bias in the source data.

## Links

- [name-based demographic inference](name_based_demographic_inference.md)
- [demographic-proxy coverage imputation](../validations/demographic_proxy_coverage_imputation.md)
- [first-author publication frame](first_author_publication_frame.md)
- [WoS US first-author intersectional topic panel](../datasets/wos_us_first_author_intersectional_topic_panel.md)
- [US Census surname race-probability table](../datasets/us_census_surname_race_probability_table.md)
- [binary gender proxy boundary](../validations/binary_gender_proxy_boundary.md)
- [country-specific race-category scope boundary](../validations/country_specific_race_category_scope_boundary.md)
- [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md)
- [topic overrepresentation ratio](../measures/topic_overrepresentation_ratio.md)
- [race-gender topic portfolio maps](../representations/race_gender_topic_portfolio_maps.md)
- [topic-sorted intersectional citation curves](../representations/topic_sorted_intersectional_citation_curves.md)
- [topic-identity homophily](../mechanisms/topic_identity_homophily.md)
- [between-topic citation disadvantage](../mechanisms/between_topic_citation_disadvantage.md)
- [within-topic citation disadvantage](../mechanisms/within_topic_citation_disadvantage.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `probabilistic_demographic_fractional_counting`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Kozlowski et al. (2022) (2022)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: demographic probability weighting; probabilistic race weighting; fractional demographic aggregation; uncertainty-propagating demographic counts
