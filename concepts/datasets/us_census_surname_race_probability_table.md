# US Census surname race-probability table

## Summary

US Census surname race-probability table is a demographic-proxy source that maps common US family names to racial and ethnic category distributions for aggregate bibliometric analyses.

## Canonical Form

- Unit of analysis: surname, Census racial or ethnic category, probability vector, author name, or aggregate demographic estimate.
- Typical representation: surname-by-category count table, surname probability vector, coverage report, or imputation source.
- Measurement target: aggregate race or ethnicity composition when self-identified demographic data are unavailable.
- Empirical signature: authors with the same family name contribute fractional mass to multiple racial or ethnic categories according to a Census-derived distribution.

## Uses in Science of Science

- Supplies the race-proxy input for [probabilistic demographic fractional counting](../methods/probabilistic_demographic_fractional_counting.md).
- Adds a source layer to [name-based demographic inference](../methods/name_based_demographic_inference.md) and [demographic-proxy coverage imputation](../validations/demographic_proxy_coverage_imputation.md).
- Supports the [WoS US first-author intersectional topic panel](wos_us_first_author_intersectional_topic_panel.md).
- Requires careful contextualization because race categories are country-specific social constructs.

## Operationalization

- Obtain a surname table with counts by US Census racial and ethnic categories.
- Convert counts into probability vectors for each surname.
- Match author family names to the surname table and assign probability vectors rather than hard categories.
- Impute or flag missing surnames according to a documented rule.
- Report excluded or pooled categories and the national context in which the categories are meaningful.

## Evidence and Validations

- Verified full-text evidence from Kozlowski et al. (2022) uses 2010 US Census information on family names and racial groups to infer race or ethnic origin probabilities.
- The paper describes the Census surname file as covering the 162,253 most common family names.
- Kozlowski et al. use surname distributions for White, Black, Asian, American Indian/Alaska Native, two-or-more-races, and Hispanic or Latino categories, while excluding low-count AIAN and two-or-more categories from the main analysis.
- The study uses probability vectors instead of assigning each author to a single racial category, citing Black-White surname overlap as a reason threshold assignment can bias aggregates.

## Caveats

- Surname probabilities do not identify an individual's self-identified race or ethnicity.
- US Census categories are not portable to other countries without redesign.
- Missing surnames, name changes, transliteration, immigration, and multiracial identities can bias estimates.
- Low-count category exclusions can make underrepresented groups analytically invisible.

## Links

- [probabilistic demographic fractional counting](../methods/probabilistic_demographic_fractional_counting.md)
- [name-based demographic inference](../methods/name_based_demographic_inference.md)
- [demographic-proxy coverage imputation](../validations/demographic_proxy_coverage_imputation.md)
- [WoS US first-author intersectional topic panel](wos_us_first_author_intersectional_topic_panel.md)
- [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [binary gender proxy boundary](../validations/binary_gender_proxy_boundary.md)

## References

- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `us_census_surname_race_probability_table`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Kozlowski et al. (2022) (2022)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: Census surname race table; surname racial probability prior; US surname demographic proxy; 2010 Census surname probabilities
