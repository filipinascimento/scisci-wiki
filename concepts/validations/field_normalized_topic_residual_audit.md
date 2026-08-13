# Field-normalized topic residual audit

## Summary

Field-normalized topic residual audit checks whether demographic citation gaps remain after field/year normalization and whether topic placement or within-topic recognition explains the remaining residuals.

## Canonical Form

- Unit of analysis: paper, topic, field-year cell, demographic group, citation outcome, or residual gap.
- Typical representation: field-normalized citation score, topic fixed effect, group-topic decomposition, or within-topic citation residual.
- Validation target: test whether broad field normalization has removed enough topical structure for a given inequality analysis.
- Empirical signature: citation gaps persist after field normalization and are then decomposed by topic distribution and within-topic differences.

## Uses in Science of Science

- Strengthens [field-normalized citation impact](../measures/field_normalized_citation_impact.md) by making topic residuals explicit.
- Provides a validation workflow for [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md).
- Links [between-topic citation disadvantage](../mechanisms/between_topic_citation_disadvantage.md) and [within-topic citation disadvantage](../mechanisms/within_topic_citation_disadvantage.md).
- Supports responsible use of demographic citation metrics by avoiding overclaims from field-normalized averages alone.

## Operationalization

- Normalize citations by field, year, and document type as appropriate.
- Estimate group citation gaps before and after field normalization.
- Add topic information through topic models, classifications, or embeddings.
- Decompose residual gaps into topic placement, topic-level citation density, and within-topic group differences.
- Inspect topic granularity and demographic proxy uncertainty before interpreting residuals.

## Evidence and Validations

- Verified full-text evidence from Kozlowski et al. (2022) reports that citation gaps remain after broad field normalization.
- The paper then examines topic-level placement and within-topic citation patterns to show how topic structure contributes to the residual gaps.
- Their topic-sorted citation curves make the residual audit visible across topics ordered by citation density.

## Caveats

- Field normalization is only as good as the field taxonomy and citation window used.
- Topic residuals can reflect intellectual content, audience, journal placement, collaboration networks, or evaluation bias.
- Residual citation gaps should not be interpreted as quality differences.

## Links

- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md)
- [between-topic citation disadvantage](../mechanisms/between_topic_citation_disadvantage.md)
- [within-topic citation disadvantage](../mechanisms/within_topic_citation_disadvantage.md)
- [topic-sorted intersectional citation curves](../representations/topic_sorted_intersectional_citation_curves.md)
- [topic overrepresentation ratio](../measures/topic_overrepresentation_ratio.md)
- [manual topic granularity check](manual_topic_granularity_check.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `field_normalized_topic_residual_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Kozlowski et al. (2022) (2022)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: topic residual citation audit; field-normalization residual check; topic-adjusted citation gap audit; demographic citation residual decomposition
