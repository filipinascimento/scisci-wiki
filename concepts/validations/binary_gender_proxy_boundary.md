# Binary gender proxy boundary

## Summary

Binary gender proxy boundary is the validation limit that name-based gender inference usually assigns only female or male categories and cannot measure non-binary, transgender, or self-identified gender without direct self-identification data.

## Canonical Form

- Unit of analysis: author name, gender-inference record, demographic proxy, aggregate estimate, or excluded identity category.
- Typical representation: binary-gender limitation note, non-binary missingness caveat, self-identification requirement, or sensitivity boundary.
- Validation target: prevent inferred binary gender labels from being interpreted as complete or self-reported gender identity.
- Empirical signature: the analysis reports female/male aggregate estimates while explicitly excluding or not measuring other gender identities.

## Uses in Science of Science

- Qualifies [given-name gender assignment](../methods/given_name_gender_assignment.md) and [name-based demographic inference](../methods/name_based_demographic_inference.md).
- Adds a demographic-boundary check to [probabilistic demographic fractional counting](../methods/probabilistic_demographic_fractional_counting.md).
- Helps interpret datasets such as [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md) and [WoS US first-author intersectional topic panel](../datasets/wos_us_first_author_intersectional_topic_panel.md).
- Supports [responsible metrics](../measures/responsible_metrics.md) by keeping inferred proxy categories distinct from self-identification.

## Operationalization

- State whether gender is inferred, observed, self-reported, or administratively recorded.
- Report which gender categories are represented and which are not measurable.
- Avoid assigning non-binary or transgender identities from names.
- Treat binary gender estimates as aggregate proxy outputs, not individual identity labels.
- Prefer self-identification instruments when the research question requires identities outside binary categories.

## Evidence and Validations

- Verified full-text evidence from Kozlowski et al. (2022) uses a gender disambiguation algorithm based on given names, country-specific lists, and some family-name rules.
- The paper states that gender is considered in a binary way because other genders can only be assigned through self-identification.
- Kozlowski et al. explicitly mark this binary treatment as a limitation of the study.
- This limitation applies to downstream intersectional estimates because the race probabilities are crossed with inferred binary gender and topic probabilities.

## Caveats

- Binary gender proxy boundaries do not invalidate aggregate women/men estimates, but they constrain the interpretation.
- Name-based methods can also misclassify binary gender due to initials, culturally ambiguous names, transliteration, and name changes.
- Ethical handling of gender data depends on consent, context, privacy risk, and evaluation use.
- Intersectional analyses that omit non-binary identities can miss important patterns of exclusion and topic participation.

## Links

- [given-name gender assignment](../methods/given_name_gender_assignment.md)
- [name-based demographic inference](../methods/name_based_demographic_inference.md)
- [probabilistic demographic fractional counting](../methods/probabilistic_demographic_fractional_counting.md)
- [demographic-proxy coverage imputation](demographic_proxy_coverage_imputation.md)
- [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md)
- [WoS US first-author intersectional topic panel](../datasets/wos_us_first_author_intersectional_topic_panel.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `binary_gender_proxy_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Kozlowski et al. (2022) (2022)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: binary gender inference limit; non-binary gender missingness; inferred gender proxy boundary; self-identified gender caveat
