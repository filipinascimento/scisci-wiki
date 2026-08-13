# Demographic topic concentration CV

## Summary

Demographic topic concentration CV measures how unevenly a demographic group is distributed across research topics using the coefficient of variation of that group's topic shares.

## Canonical Form

- Unit of analysis: demographic group, topic model, topic share vector, field, paper set, or group-topic matrix.
- Typical representation: coefficient of variation by group, topic-specialization ranking, or concentration comparison.
- Measurement target: whether a group is broadly distributed across topics or concentrated in a narrower set.
- Empirical signature: groups with high CV have strong participation in some topics and low participation in others relative to their average share.

## Uses in Science of Science

- Quantifies the concentration component of [topic-identity homophily](../mechanisms/topic_identity_homophily.md).
- Adds a compact summary statistic to [race-gender topic portfolio maps](../representations/race_gender_topic_portfolio_maps.md).
- Helps separate broad [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md) from the narrower question of group specialization across topics.
- Supports [responsible metrics](responsible_metrics.md) by showing that demographic disparities can be hidden by aggregate field counts.

## Operationalization

- Build a topic-by-group matrix from observed or probabilistically inferred group weights.
- For each group, compute the mean and standard deviation of topic shares across topics in the relevant field or corpus.
- Divide the standard deviation by the mean to obtain the coefficient of variation.
- Interpret CV together with group size, topic prevalence, field composition, and citation density.

## Evidence and Validations

- Verified full-text evidence from Kozlowski et al. (2022) reports coefficients of variation for racial-group topic shares in Social Sciences and Health topic maps.
- The paper interprets a high CV as evidence that a group has high participation in some topics and low participation in others relative to its average proportion.
- Kozlowski et al. report that Asian authors have the highest CV, White authors the lowest, and Black and Latinx authors show greater specialization than White authors.
- The measure supports their broader finding that White authors are more ubiquitous across topics while minoritized groups are more concentrated in particular topic areas.

## Caveats

- CV is sensitive to small denominators, rare groups, and topics with few papers.
- Topic concentration should not be interpreted as innate preference; it can reflect agency, exclusion, community relevance, funding, institutional placement, or field structure.
- CV compresses which topics are overrepresented, so it should be paired with maps or topic labels.

## Links

- [topic-identity homophily](../mechanisms/topic_identity_homophily.md)
- [race-gender topic portfolio maps](../representations/race_gender_topic_portfolio_maps.md)
- [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md)
- [topic-choice privilege](../mechanisms/topic_choice_privilege.md)
- [topic models](../methods/topic_models.md)
- [probabilistic demographic fractional counting](../methods/probabilistic_demographic_fractional_counting.md)
- [responsible metrics](responsible_metrics.md)

## References

- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `demographic_topic_concentration_cv`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Kozlowski et al. (2022) (2022)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: group-topic CV; topic specialization coefficient; demographic topic specialization; topic-share concentration CV
