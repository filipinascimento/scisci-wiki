# Given-name gender assignment

## Summary

Given-name gender assignment maps author first names to binary gender labels using external name lists, country-specific rules, and manual checks when self-reported gender is unavailable.

## Canonical Form

- Unit of analysis: author mention, authorship, given name, full name, country-specific name list, or aggregate demographic count.
- Typical representation: female, male, unisex, unknown, or initials categories with coverage and validation rates.
- Mechanism or measurement target: proxy construction for gendered bibliometric analysis.
- Empirical signature: first names are preprocessed and matched to ordered gender-name sources before aggregating paper-level outcomes.

## Uses in Science of Science

- Supplies the gender layer for [gendered fractional authorship ratio](../measures/gendered_fractional_authorship_ratio.md), [gendered collaboration rate](../measures/gendered_collaboration_rate.md), and [lead-author gender citation gap](../mechanisms/lead_author_gender_citation_gap.md).
- Extends [name-based demographic inference](name_based_demographic_inference.md) with a concrete given-name workflow.
- Requires [gender-name assignment validation](../validations/gender_name_assignment_validation.md) and [demographic-proxy coverage imputation](../validations/demographic_proxy_coverage_imputation.md) before interpretation.
- Often operates on author mentions rather than disambiguated people, so it should be paired with explicit unit-of-analysis reporting.

## Operationalization

- Extract given names from author records and preprocess initials, parenthetical nicknames, spaces, hyphens, periods, and special characters.
- Match names to universal lists in a declared order, such as US Census, WikiName, and Wikipedia name lists.
- Apply country-specific lists or rules when universal lists fail, especially where naming conventions or transliteration complicate lookup.
- Mark names as unisex when evidence is not sufficiently skewed toward one category and mark unmatched or initial-only names separately.
- Aggregate only at the intended level, such as authorships or papers, and report coverage for names, full names, papers, and author-paper combinations.

## Evidence and Validations

- Verified full-text evidence from Lariviere et al. (2013) determines gender for Web of Science authors by matching names to universal and country-specific lists.
- Their ordered matching begins with the US Census as the primary source, then uses WikiName, Wikipedia, French and Quebec lists, and other country-specific sources.
- In the US Census step, a name used by both genders is assigned only if it is at least ten times more frequent for one gender; otherwise it is marked unisex.
- The supplement describes country-specific rules or manual coding for Korea, Lithuania, Japan, Russia and related countries, China, Taiwan, Iran, Brazil, Romania, Portugal, Serbia, Ukraine, Thailand, and India.
- Lariviere et al. explicitly analyze authorships rather than disambiguated individuals, so the method estimates aggregate gendered authorship patterns rather than individual researcher productivity.
- The same supplement reports coverage and a validation study, split out as [gender-name assignment validation](../validations/gender_name_assignment_validation.md).

## Caveats

- Binary name-gender labels are not self-identified gender and exclude non-binary identities.
- Coverage and error rates differ by country, language, transliteration system, initials, and name ambiguity.
- Author mention level assignment can overrepresent prolific individuals and should not be read as person-level demographics unless authors are disambiguated.
- Manual and rule-based country-specific steps need transparent documentation because they can encode cultural assumptions.

## Links

- [name-based demographic inference](name_based_demographic_inference.md)
- [gender-name assignment validation](../validations/gender_name_assignment_validation.md)
- [demographic-proxy coverage imputation](../validations/demographic_proxy_coverage_imputation.md)
- [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md)
- [gendered fractional authorship ratio](../measures/gendered_fractional_authorship_ratio.md)
- [gendered collaboration rate](../measures/gendered_collaboration_rate.md)
- [lead-author gender citation gap](../mechanisms/lead_author_gender_citation_gap.md)
- [gender and race stratification](../mechanisms/gender_race_stratification.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Lariviere, V., Ni, C., Gingras, Y., Cronin, B., & Sugimoto, C. R. (2013). Bibliometrics: Global gender disparities in science. *Nature*, 504, 211-213. https://doi.org/10.1038/504211a [OpenAlex: W2050990045; Dimensions: pub.1050929337; WoS: unknown]

## Metadata

- Concept ID: `given_name_gender_assignment`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Lariviere et al. (2013) (2013)
- Latest seen paper: Lariviere et al. (2013) (2013)
- Primary reference DOI: `10.1038/504211a`
- OpenAlex ID: `W2050990045`
- Dimensions ID: `pub.1050929337`
- SciSciNet ID: `W2050990045`
- Aliases: first-name gender inference; binary name-gender coding; given-name demographic assignment; author gender name matching
