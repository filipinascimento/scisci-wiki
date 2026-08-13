# Initials demographic missingness

## Summary

Initials demographic missingness is the bias and coverage problem created when bibliometric author-name fields contain initials rather than full given names needed for demographic inference.

## Canonical Form

- Unit of analysis: author-name string, authorship record, full-name availability flag, demographic-assignment attempt, or missingness stratum.
- Typical representation: percentage of names or authorships that can be assigned after excluding initials-only records.
- Validation target: whether demographic inference covers enough records and whether missingness is socially or geographically patterned.
- Empirical signature: coverage changes materially when initials-only records are excluded or imputed.

## Uses in Science of Science

- Qualifies [given-name gender assignment](../methods/given_name_gender_assignment.md) and [name-based demographic inference](../methods/name_based_demographic_inference.md).
- Provides a missingness layer for the [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md).
- Connects to [demographic proxy coverage imputation](demographic_proxy_coverage_imputation.md) when name coverage is incomplete.
- Supports [gender-name assignment validation](gender_name_assignment_validation.md) by separating nonassignment from incorrect assignment.

## Operationalization

- Flag initials-only or otherwise unusable first-name fields before demographic assignment.
- Report distinct-name and authorship-level coverage separately when possible.
- Compare coverage by country, field, year, and author position.
- Decide whether initials-only records are excluded, imputed, or assigned an unknown category.
- Propagate missingness denominators into all disparity estimates.

## Evidence and Validations

- Verified full-text evidence from Lariviere et al. (2013) reports that 31.0% of distinct full author-name strings in their Web of Science corpus were initials-only.
- The supplement reports that excluding initials-only records raises the share of names with full first-name information to 83.0%.
- This motif makes the coverage filter visible before interpreting global gendered authorship and citation patterns.

## Caveats

- Initials missingness may be correlated with country, language, field, journal practice, and publication year.
- Distinct-name coverage and authorship-level coverage can tell different stories.
- Dropping initials-only records can change country or field composition.
- Imputing from initials can introduce false certainty and should be clearly labeled.

## Links

- [given-name gender assignment](../methods/given_name_gender_assignment.md)
- [name-based demographic inference](../methods/name_based_demographic_inference.md)
- [gender-name assignment validation](gender_name_assignment_validation.md)
- [demographic proxy coverage imputation](demographic_proxy_coverage_imputation.md)
- [full first-name metadata window](full_first_name_metadata_window.md)
- [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md)

## References

- Lariviere, V., Ni, C., Gingras, Y., Cronin, B., & Sugimoto, C. R. (2013). Bibliometrics: Global gender disparities in science. *Nature*, 504, 211-213. https://doi.org/10.1038/504211a [OpenAlex: W2050990045; Dimensions: pub.1050929337; WoS: unknown]

## Metadata

- Concept ID: `initials_demographic_missingness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Lariviere et al. (2013) (2013)
- Latest seen paper: Lariviere et al. (2013) (2013)
- Primary reference DOI: `10.1038/504211a`
- OpenAlex ID: `W2050990045`
- Dimensions ID: `pub.1050929337`
- SciSciNet ID: `W2050990045`
- Aliases: initials-only demographic missingness; first-name missingness; given-name coverage loss; initials-based nonassignment
