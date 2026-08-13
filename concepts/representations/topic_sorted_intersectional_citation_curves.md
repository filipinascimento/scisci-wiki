# Topic-sorted intersectional citation curves

## Summary

Topic-sorted intersectional citation curves visualize expected citation outcomes for demographic groups across topics ordered by topic-level citation density.

## Canonical Form

- Unit of analysis: topic, demographic group, first-author paper, normalized citation outcome, or smoothed topic rank.
- Typical representation: citation-density-sorted topic axis, group-specific smoothed curves, uncertainty bands, or topic-rank overlays.
- Representation target: show whether groups concentrate in high- or low-citation topics and whether within-topic citation gaps persist along the topic rank.
- Empirical signature: group curves diverge over a topic axis sorted by average citations rather than by field labels or topic names.

## Uses in Science of Science

- Provides a visual diagnostic for [between-topic citation disadvantage](../mechanisms/between_topic_citation_disadvantage.md) and [within-topic citation disadvantage](../mechanisms/within_topic_citation_disadvantage.md).
- Complements [race-gender topic portfolio maps](race_gender_topic_portfolio_maps.md) by adding citation-density ordering.
- Makes [topic overrepresentation ratio](../measures/topic_overrepresentation_ratio.md) interpretable against topic-level reward gradients.
- Helps audit whether field-normalized citation indicators still leave topic-level residual structure.

## Operationalization

- Assign papers to topics and infer demographic group probabilities for the focal author role.
- Compute each topic's average or expected citation density.
- Sort topics by that citation density within a field or discipline partition.
- Plot group-specific expected citation curves over the sorted topic axis with smoothing and confidence bands.
- Compare the curves with field-normalized residual audits.

## Evidence and Validations

- Verified full-text evidence from Kozlowski et al. (2022) sorts topics by average citations and uses smoothed curves to compare citation expectations for race/gender groups.
- The figure-level design shows that group citation gaps are partly linked to where groups are located in the topic-citation distribution and partly to within-topic recognition differences.
- The representation makes topic structure visible after broad field normalization.

## Caveats

- Sorting topics by citation density can hide semantic adjacency between topics.
- Smoothing choices can obscure small but important group-topic cells.
- Citation density is not a proxy for social value or problem importance.

## Links

- [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md)
- [race-gender topic portfolio maps](race_gender_topic_portfolio_maps.md)
- [topic overrepresentation ratio](../measures/topic_overrepresentation_ratio.md)
- [between-topic citation disadvantage](../mechanisms/between_topic_citation_disadvantage.md)
- [within-topic citation disadvantage](../mechanisms/within_topic_citation_disadvantage.md)
- [field-normalized topic residual audit](../validations/field_normalized_topic_residual_audit.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)

## References

- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `topic_sorted_intersectional_citation_curves`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Kozlowski et al. (2022) (2022)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: topic-ranked demographic citation curves; citation-density topic curves; intersectional citation topic curve; smoothed topic citation profiles
