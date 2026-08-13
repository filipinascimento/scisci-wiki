# Country-specific name-gender rules

## Summary

Country-specific name-gender rules adapt given-name demographic assignment to local language, suffix, transliteration, and naming conventions.

## Canonical Form

- Unit of analysis: given name, country, language group, suffix rule, transliteration pattern, or manually coded high-frequency name.
- Typical representation: country-specific lookup table, rule list, or manual coding override for demographic name assignment.
- Method target: reduce systematic gender-assignment errors caused by applying one global name dictionary to culturally heterogeneous names.
- Empirical signature: the demographic assignment workflow contains country or language branches before aggregate statistics are computed.

## Uses in Science of Science

- Extends [given-name gender assignment](given_name_gender_assignment.md) for global bibliometric data.
- Strengthens [gender-name assignment validation](../validations/gender_name_assignment_validation.md) in the [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md).
- Provides a concrete implementation detail for [name-based demographic inference](name_based_demographic_inference.md).
- Reduces the need for coarse [demographic proxy coverage imputation](../validations/demographic_proxy_coverage_imputation.md) when local rules can resolve names.

## Operationalization

- Start with a global name-gender dictionary and identify countries or language groups where coverage or accuracy is weak.
- Add country-specific suffix, spelling, transliteration, and manual high-frequency-name rules.
- Apply country context from affiliation or publication metadata when assigning names.
- Record which records are assigned by dictionary, rule, manual coding, or unknown status.
- Validate a sample of assigned and unassigned names by country.

## Evidence and Validations

- Verified full-text evidence from the Lariviere et al. (2013) supplement documents country and language-specific handling for gender assignment.
- The supplementary workflow includes special cases such as French and Quebec naming, Korean, Lithuanian, Japanese, and Russian conventions, manual coding of frequent Chinese names, and Taiwan pinyin handling.
- These rules show that global demographic inference is a structured data-cleaning procedure rather than a single dictionary lookup.

## Caveats

- Country context does not uniquely determine name culture, language, or self-identified gender.
- Binary name-gender rules exclude non-binary identities and can misclassify trans or culturally ambiguous names.
- Manual coding can improve coverage but may reduce transparency if rules are not released.
- Rules can become outdated as naming practices and transliteration standards change.

## Links

- [given-name gender assignment](given_name_gender_assignment.md)
- [name-based demographic inference](name_based_demographic_inference.md)
- [gender-name assignment validation](../validations/gender_name_assignment_validation.md)
- [demographic proxy coverage imputation](../validations/demographic_proxy_coverage_imputation.md)
- [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md)

## References

- Lariviere, V., Ni, C., Gingras, Y., Cronin, B., & Sugimoto, C. R. (2013). Bibliometrics: Global gender disparities in science. *Nature*, 504, 211-213. https://doi.org/10.1038/504211a [OpenAlex: W2050990045; Dimensions: pub.1050929337; WoS: unknown]

## Metadata

- Concept ID: `country_specific_name_gender_rules`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Lariviere et al. (2013) (2013)
- Latest seen paper: Lariviere et al. (2013) (2013)
- Primary reference DOI: `10.1038/504211a`
- OpenAlex ID: `W2050990045`
- Dimensions ID: `pub.1050929337`
- SciSciNet ID: `W2050990045`
- Aliases: localized name-gender coding; country-specific gender assignment; language-specific name rules; cultural name-gender rules
