# Country-specific race-category scope boundary

## Summary

Country-specific race-category scope boundary is the validation motif that name-based race or ethnicity proxy analyses should be limited to the national category system and population context where the proxy is meaningful.

## Canonical Form

- Unit of analysis: author name, country, race/ethnicity category, census table, publication sample, or demographic aggregate.
- Typical representation: national-scope inclusion rule, country-specific category set, excluded-country boundary, or proxy-validity note.
- Validation target: prevent demographic proxy categories from being exported to contexts where they do not map to local identity systems.
- Empirical signature: race/ethnicity inference is explicitly restricted to a national author population and paired with country-specific data sources.

## Uses in Science of Science

- Adds a scope rule to [name-based demographic inference](../methods/name_based_demographic_inference.md).
- Documents the boundary around [US Census surname race-probability table](../datasets/us_census_surname_race_probability_table.md) use.
- Complements [binary gender proxy boundary](binary_gender_proxy_boundary.md) by isolating race/ethnicity category context.
- Supports [probabilistic demographic fractional counting](../methods/probabilistic_demographic_fractional_counting.md) without treating inferred categories as universal identities.

## Operationalization

- Define the national or regional population to which the race/ethnicity category system applies.
- Use demographic proxy data generated for that population, such as census surname distributions.
- Restrict the analytic frame to authors plausibly in that population or report why extension is justified.
- State that inferred categories are aggregate proxies and not individual self-identification.
- Pair with demographic-proxy coverage and missingness checks.

## Evidence and Validations

- Verified full-text evidence from Kozlowski et al. (2022) states that racial categories are country-dependent and restricts the race/ethnicity analysis to the U.S. context.
- The study uses U.S. Census surname probabilities for U.S.-affiliated first authors rather than applying those categories globally.
- The boundary is part of the paper's larger caution that name-based demographic inference should be aggregate and uncertainty-aware.

## Caveats

- U.S. affiliation is not the same as U.S. citizenship, residence, or self-identified race/ethnicity.
- Census surname probabilities can encode historical and structural naming patterns rather than individual identity.
- International or comparative analyses need locally appropriate category systems and data sources.

## Links

- [name-based demographic inference](../methods/name_based_demographic_inference.md)
- [US Census surname race-probability table](../datasets/us_census_surname_race_probability_table.md)
- [probabilistic demographic fractional counting](../methods/probabilistic_demographic_fractional_counting.md)
- [demographic-proxy coverage imputation](demographic_proxy_coverage_imputation.md)
- [binary gender proxy boundary](binary_gender_proxy_boundary.md)
- [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `country_specific_race_category_scope_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Kozlowski et al. (2022) (2022)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: national race-category boundary; country-specific demographic proxy scope; race proxy scope rule; census category validity boundary
