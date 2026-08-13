# Field demographic representation baseline

## Summary

Field demographic representation baseline compares demographic representation and citation gaps by field before moving to finer topic-level explanations.

## Canonical Form

- Unit of analysis: field, demographic group, first author, citation rate, or representation share.
- Typical representation: field-level demographic share and citation-gap table.
- Measurement target: broad field composition and impact differences that contextualize topic-level analyses.
- Empirical signature: demographic and citation differences are visible at field level before topic decomposition.

## Uses in Science of Science

- Connects [field classifications](field_classifications.md) to [gender/race stratification](../mechanisms/gender_race_stratification.md).
- Provides a coarse baseline for [field-normalized topic residual audit](../validations/field_normalized_topic_residual_audit.md).
- Uses [field-normalized citation impact](field_normalized_citation_impact.md) before finer topic sorting.
- Grounds the [WoS US first-author intersectional topic panel](../datasets/wos_us_first_author_intersectional_topic_panel.md).

## Operationalization

- Assign papers to fields and infer demographic categories with uncertainty.
- Compute representation shares and citation indicators by field.
- Compare raw and field-normalized citation gaps.
- Use the field baseline to decide where topic-level decomposition is needed.

## Evidence and Validations

- Verified full-text evidence from Kozlowski et al. (2022) reports race-gender demographic representation and citation gaps by field.
- The paper then moves to topic-level analysis to explain residual intersectional differences.
- The field baseline therefore acts as a staging measure between workforce composition and topic portfolios.

## Caveats

- Field categories can hide topic-level stratification.
- Demographic proxy coverage differs by name and group.
- Field normalization may not remove all citation-density differences.

## Links

- [field classifications](field_classifications.md)
- [field-normalized citation impact](field_normalized_citation_impact.md)
- [field-normalized topic residual audit](../validations/field_normalized_topic_residual_audit.md)
- [gender/race stratification](../mechanisms/gender_race_stratification.md)
- [WoS US first-author intersectional topic panel](../datasets/wos_us_first_author_intersectional_topic_panel.md)

## References

- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `field_demographic_representation_baseline`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Kozlowski et al. (2022) (2022)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: field demographic baseline; field-level race-gender representation; field citation-gap baseline
