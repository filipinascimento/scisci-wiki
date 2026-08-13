# Intersectional disaggregation guardrail

## Summary

Intersectional disaggregation guardrail requires race-gender disaggregation because single-axis analyses can hide findings and produce overly broad policy claims.

## Canonical Form

- Unit of analysis: demographic group, intersectional category, metric, topic, or policy claim.
- Typical representation: validation rule requiring multi-axis subgroup reporting.
- Validation target: avoid collapsing heterogeneous experiences into misleading aggregate categories.
- Empirical signature: conclusions differ when race and gender are analyzed jointly rather than separately.

## Uses in Science of Science

- Protects [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md) from overaggregation.
- Extends [gender/race stratification](../mechanisms/gender_race_stratification.md) into metric validation.
- Links demographic inference limits such as [binary gender proxy boundary](binary_gender_proxy_boundary.md) and [country-specific race-category scope boundary](country_specific_race_category_scope_boundary.md) to responsible reporting.
- Supports [responsible metrics](../measures/responsible_metrics.md).

## Operationalization

- Report race, gender, and race-gender intersectional categories where data permit.
- Compare single-axis and intersectional results.
- Flag categories with unreliable sample size or proxy coverage.
- Avoid policy conclusions that ignore intersections where effects diverge.

## Evidence and Validations

- Verified full-text evidence from Kozlowski et al. (2022) argues that failure to disaggregate by race and gender can obscure findings.
- The paper frames intersectionality as necessary for understanding topic, impact, and knowledge-base consequences.
- This guardrail makes disaggregation a validation requirement rather than a decorative subgroup table.

## Caveats

- Intersectional disaggregation can create sparse cells.
- Demographic proxy uncertainty must be propagated.
- Not all relevant identities are available in bibliometric data.

## Links

- [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md)
- [gender/race stratification](../mechanisms/gender_race_stratification.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [binary gender proxy boundary](binary_gender_proxy_boundary.md)
- [country-specific race-category scope boundary](country_specific_race_category_scope_boundary.md)

## References

- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `intersectional_disaggregation_guardrail`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Kozlowski et al. (2022) (2022)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: intersectional reporting guardrail; race-gender disaggregation check; intersectional metric validation
