# Demographic-proxy coverage imputation

## Summary

Demographic-proxy coverage imputation is the validation issue that name-based demographic inference often has missing names, low-count categories, and proxy categories that must be imputed, excluded, or explicitly bounded.

## Canonical Form

- Unit of analysis: author name, demographic proxy table, inferred category probability, excluded group, missing-name record, or aggregate estimate.
- Typical representation: proxy-table coverage report, imputed probability vector, excluded-category log, or sensitivity table.
- Validation target: make proxy missingness and category coverage visible before interpreting aggregate demographic disparities.
- Empirical signature: some names or groups cannot be matched with enough reliability, and the analysis uses mean imputation, category exclusion, or explicit missingness flags.

## Uses in Science of Science

- Adds a coverage and missingness guardrail to [name-based demographic inference](../methods/name_based_demographic_inference.md).
- Generalizes validation routines such as [gender-name assignment validation](gender_name_assignment_validation.md), where initials, unknown names, and unisex names are separated before aggregate analysis.
- Complements [probabilistic demographic fractional counting](../methods/probabilistic_demographic_fractional_counting.md), which propagates known probabilities but still depends on the coverage of the underlying proxy table.
- Supports [responsible metrics](../measures/responsible_metrics.md) by warning against treating inferred race, ethnicity, or gender as observed individual identity.
- Helps interpret [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md) and citation-gap estimates when group definitions or missingness are uneven.
- Splits out source-specific surname inputs as [US Census surname race-probability table](../datasets/us_census_surname_race_probability_table.md) and gender-category limits as [binary gender proxy boundary](binary_gender_proxy_boundary.md).

## Operationalization

- Report the external demographic-proxy source, its country context, category definitions, and coverage.
- Quantify unmatched names and low-count categories before aggregation.
- Decide whether to impute, exclude, pool, or flag missing categories, and preserve that decision in the methods.
- Run sensitivity checks for threshold assignment, mean imputation, low-count exclusions, and binary or culturally narrow category definitions.

## Evidence and Validations

- Verified full-text evidence from Lariviere et al. (2013) reports coverage for their [given-name gender assignment](../methods/given_name_gender_assignment.md) workflow: 56.1% of distinct given names and 59.5% of distinct full author names receive female or male labels.
- When initial-only records are excluded, Lariviere et al.'s coverage rises to 57.3% of distinct given names and 83.0% of distinct full names, showing how initials create a major missingness layer.
- At the paper level, 81.3% of papers have at least one gender-assigned author and 65.2% of author-paper combinations have assigned gender; excluding initials raises author-paper coverage to 86.2%.
- Their validation sample checks initials, unknown, unisex, male, and female categories separately, showing that residual categories are not neutral and should not be treated as simple random missingness.
- Verified full-text evidence from Kozlowski et al. (2022) uses 2010 U.S. Census surname distributions over 162,253 common family names to infer race or ethnicity probabilities for U.S.-affiliated first authors.
- The paper excludes American Indian/Alaska Native and two-or-more-races categories from the main analysis because they account for small shares of Web of Science authors in the study frame.
- Kozlowski et al. impute the mean racial distribution for names that do not appear in the Census surname file within the subset used at each point in the analysis.
- The paper also treats gender as binary because other genders require self-identification, explicitly marking this as a limitation rather than a complete demographic measurement.

## Caveats

- Imputation can smooth away exactly the groups whose names are poorly covered by the proxy source.
- Low-count exclusions can make already underrepresented groups analytically invisible.
- Proxy categories are context-specific social constructs; a U.S. Census surname workflow should not be transferred to another national setting without redesign.
- This validation does not make individual-level demographic classification ethical or accurate.
- Binary inferred-gender workflows do not measure non-binary or self-identified gender without direct self-report.

## Links

- [name-based demographic inference](../methods/name_based_demographic_inference.md)
- [given-name gender assignment](../methods/given_name_gender_assignment.md)
- [gender-name assignment validation](gender_name_assignment_validation.md)
- [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md)
- [probabilistic demographic fractional counting](../methods/probabilistic_demographic_fractional_counting.md)
- [US Census surname race-probability table](../datasets/us_census_surname_race_probability_table.md)
- [binary gender proxy boundary](binary_gender_proxy_boundary.md)
- [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md)
- [gender and race stratification](../mechanisms/gender_race_stratification.md)
- [first-author publication frame](../methods/first_author_publication_frame.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [evaluated-party data verification](evaluated_party_data_verification.md)

## References

- Lariviere, V., Ni, C., Gingras, Y., Cronin, B., & Sugimoto, C. R. (2013). Bibliometrics: Global gender disparities in science. *Nature*, 504, 211-213. https://doi.org/10.1038/504211a [OpenAlex: W2050990045; Dimensions: pub.1050929337; WoS: unknown]
- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `demographic_proxy_coverage_imputation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Lariviere et al. (2013) (2013)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: demographic proxy missingness; surname coverage imputation; inferred-demographics coverage bias; proxy category exclusion
