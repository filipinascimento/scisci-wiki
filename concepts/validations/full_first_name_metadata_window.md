# Full first-name metadata window

## Summary

The full first-name metadata window is the publication-year range in which a bibliometric database provides enough full given-name metadata for demographic name inference.

## Canonical Form

- Unit of analysis: publication record, author-name field, given-name availability, database year, or demographic-inference frame.
- Typical representation: year-bounded bibliometric corpus restricted to records with usable full first names.
- Validation target: whether demographic proxy assignment is technically feasible for the selected database years.
- Empirical signature: the study frame starts when full first-name coverage becomes available and treats earlier records as lower-coverage or excluded.

## Uses in Science of Science

- Defines the temporal frame for the [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md).
- Supplies an input condition for [given-name gender assignment](../methods/given_name_gender_assignment.md) and [name-based demographic inference](../methods/name_based_demographic_inference.md).
- Links demographic coverage to later caveats such as [initials demographic missingness](initials_demographic_missingness.md) and [gender-name assignment validation](gender_name_assignment_validation.md).
- Helps separate a demographic-disparity estimate from database metadata availability.

## Operationalization

- Identify the year when the bibliometric source begins reliably providing full first names.
- Restrict the analytic corpus to years with adequate name metadata or model missingness explicitly.
- Report coverage by year, field, country, and document type when possible.
- Separate full-name availability from successful gender or demographic assignment.
- Treat any pre-window extrapolation as a separate validation problem.

## Evidence and Validations

- Verified full-text evidence from Lariviere et al. (2013) uses Web of Science publications from 2008 to 2012 because WoS includes full first names in that period.
- The study's gender inference and global authorship estimates are therefore tied to a metadata availability window rather than to all historical WoS records.
- The window is paired with supplementary validation of initials, country-specific naming rules, and assignment coverage.

## Caveats

- Metadata windows can differ across databases, index families, document types, and countries.
- Full first-name availability is not the same as correct demographic assignment.
- Restricting to recent years improves name coverage but truncates career-history questions.
- Coverage shifts can look like social change if the metadata boundary is ignored.

## Links

- [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md)
- [given-name gender assignment](../methods/given_name_gender_assignment.md)
- [name-based demographic inference](../methods/name_based_demographic_inference.md)
- [initials demographic missingness](initials_demographic_missingness.md)
- [gender-name assignment validation](gender_name_assignment_validation.md)
- [demographic proxy coverage imputation](demographic_proxy_coverage_imputation.md)

## References

- Lariviere, V., Ni, C., Gingras, Y., Cronin, B., & Sugimoto, C. R. (2013). Bibliometrics: Global gender disparities in science. *Nature*, 504, 211-213. https://doi.org/10.1038/504211a [OpenAlex: W2050990045; Dimensions: pub.1050929337; WoS: unknown]

## Metadata

- Concept ID: `full_first_name_metadata_window`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Lariviere et al. (2013) (2013)
- Latest seen paper: Lariviere et al. (2013) (2013)
- Primary reference DOI: `10.1038/504211a`
- OpenAlex ID: `W2050990045`
- Dimensions ID: `pub.1050929337`
- SciSciNet ID: `W2050990045`
- Aliases: full given-name availability window; first-name metadata frame; name-coverage year window; WoS full-name window
