# Gender-name assignment validation

## Summary

Gender-name assignment validation checks coverage and error patterns in name-based gender inference before using inferred gender labels in bibliometric disparity analysis.

## Canonical Form

- Unit of analysis: name category, author mention, validation sample, country, or coverage denominator.
- Typical representation: coverage table, manually checked category accuracy, missingness category, or sensitivity caveat.
- Validation target: inferred-gender labels used for aggregate bibliometric measures.
- Empirical signature: assigned male and female categories are manually checked, while initials, unknown, and unisex categories reveal missingness and ambiguity.

## Uses in Science of Science

- Provides the validation layer for [given-name gender assignment](../methods/given_name_gender_assignment.md) and [name-based demographic inference](../methods/name_based_demographic_inference.md).
- Helps interpret [gendered fractional authorship ratio](../measures/gendered_fractional_authorship_ratio.md), [gendered collaboration rate](../measures/gendered_collaboration_rate.md), and [lead-author gender citation gap](../mechanisms/lead_author_gender_citation_gap.md).
- Complements [demographic-proxy coverage imputation](demographic_proxy_coverage_imputation.md) by making initials, unknown names, unisex names, and country coverage visible.
- Supports [responsible metrics](../measures/responsible_metrics.md) by preventing inferred demographic labels from being treated as observed identity.

## Operationalization

- Report coverage for distinct given names, full author names, papers, and author-paper combinations.
- Separate initials, unknown names, unisex names, male labels, and female labels instead of collapsing all missingness into one category.
- Draw validation samples from each category and manually verify gender where possible using biographical information, pronouns, photos, or other documented evidence.
- Report category-specific error rates rather than a single global accuracy number.
- Use validation results to bound downstream estimates and to identify countries, fields, or name systems needing redesigned inference.

## Evidence and Validations

- Verified full-text evidence from Lariviere et al. (2013) reports that their given-name workflow assigns female or male gender to 56.1% of distinct given names and 59.5% of distinct full author names.
- When initial-only records are excluded, coverage rises to 57.3% of distinct given names and 83.0% of distinct full names.
- At the paper level, 81.3% of papers have at least one author assigned a gender, and 65.2% of author-paper combinations have gender assigned; excluding initials raises author-paper coverage to 86.2%.
- Their validation study draws random records from initials, unknown, unisex, male, and female categories, then uses country, institution, email, biographical text, and photos to verify categories where possible.
- Among identifiable records in the labeled categories, the male category is 98.3% male and the female category is 86.7% female; the unisex, unknown, and initials categories are not neutral residuals and contain substantial gender structure.
- The authors cite gender-assignment error as a limitation and state that validation mitigates but does not eliminate the problem.

## Caveats

- Manual validation through web traces is itself biased toward visible, senior, and well-documented researchers.
- Category accuracy can differ from coverage; high accuracy among identified records does not fix missing initials or unknown names.
- Binary validation cannot represent non-binary self-identification.
- A validation table from one period and source database should not be reused uncritically for another corpus.

## Links

- [given-name gender assignment](../methods/given_name_gender_assignment.md)
- [name-based demographic inference](../methods/name_based_demographic_inference.md)
- [demographic-proxy coverage imputation](demographic_proxy_coverage_imputation.md)
- [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md)
- [gendered fractional authorship ratio](../measures/gendered_fractional_authorship_ratio.md)
- [gendered collaboration rate](../measures/gendered_collaboration_rate.md)
- [lead-author gender citation gap](../mechanisms/lead_author_gender_citation_gap.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Lariviere, V., Ni, C., Gingras, Y., Cronin, B., & Sugimoto, C. R. (2013). Bibliometrics: Global gender disparities in science. *Nature*, 504, 211-213. https://doi.org/10.1038/504211a [OpenAlex: W2050990045; Dimensions: pub.1050929337; WoS: unknown]

## Metadata

- Concept ID: `gender_name_assignment_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Lariviere et al. (2013) (2013)
- Latest seen paper: Lariviere et al. (2013) (2013)
- Primary reference DOI: `10.1038/504211a`
- OpenAlex ID: `W2050990045`
- Dimensions ID: `pub.1050929337`
- SciSciNet ID: `W2050990045`
- Aliases: gender inference validation; name-gender coverage validation; inferred gender accuracy check; gender proxy missingness audit
