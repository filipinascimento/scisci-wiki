# Race-gender topic portfolio maps

## Summary

Race-gender topic portfolio maps represent research topics by the demographic composition of their authors and by their citation density, making topic concentration and topic-level reward differences visible together.

## Canonical Form

- Unit of analysis: topic, field, paper, author group, topic probability, or citation outcome.
- Typical representation: two-dimensional topic scatterplot, group-topic heatmap, topic-by-demographic matrix, or interactive topic dashboard.
- Representation target: show how demographic participation, topic prevalence, and topic attention align.
- Empirical signature: topics occupy different positions by group participation, size, and mean citations.

## Uses in Science of Science

- Provides the visual representation layer for [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md).
- Makes [topic-identity homophily](../mechanisms/topic_identity_homophily.md), [between-topic citation disadvantage](../mechanisms/between_topic_citation_disadvantage.md), and [within-topic citation disadvantage](../mechanisms/within_topic_citation_disadvantage.md) easier to diagnose.
- Converts [topic models](../methods/topic_models.md) into equity and evaluation maps.
- Supports [responsible metrics](../measures/responsible_metrics.md) audits by keeping citation density and demographic composition visible at the same time.
- Uses paper-level inputs like the [WoS US first-author intersectional topic panel](../datasets/wos_us_first_author_intersectional_topic_panel.md).

## Operationalization

- Infer topics from titles, abstracts, keywords, field taxonomies, or embeddings.
- Estimate demographic composition for each topic using observed or probabilistically inferred author attributes.
- Plot topics with one demographic share on each axis, topic size as point size, and citation density or another outcome as color.
- Add concentration summaries such as [demographic topic concentration CV](../measures/demographic_topic_concentration_cv.md) across topic shares for each group.

## Evidence and Validations

- Verified full-text evidence from Kozlowski et al. (2022) trains LDA topic models on Social Sciences, Humanities, and Professional Fields and on Health articles.
- The paper uses 300 topics for Social Sciences and related fields and 200 topics for Health after balancing granularity against repeated words and interpretability.
- In the topic maps, the vertical axis is the proportion of women authors, the horizontal axis is the proportion of authors in a racial group, color is mean citations, and point size is topic importance.
- Kozlowski et al. also report coefficients of variation by racial group to summarize whether a group is concentrated in a narrow set of topics or distributed broadly.

## Caveats

- Topic maps depend on the topic model, field subset, labeling choices, and minimum article thresholds.
- Demographic inference and topic inference can both be uncertain; maps should display aggregate patterns, not individual classifications.
- Citation color scales can imply prestige even when topics have different social value or public relevance.

## Links

- [intersectional topic stratification](../mechanisms/intersectional_topic_stratification.md)
- [topic models](../methods/topic_models.md)
- [manual topic-granularity check](../validations/manual_topic_granularity_check.md)
- [WoS US first-author intersectional topic panel](../datasets/wos_us_first_author_intersectional_topic_panel.md)
- [demographic topic concentration CV](../measures/demographic_topic_concentration_cv.md)
- [document-topic mixtures](document_topic_mixtures.md)
- [topic assignment tagging](../methods/topic_assignment_tagging.md)
- [probabilistic demographic fractional counting](../methods/probabilistic_demographic_fractional_counting.md)
- [topic-identity homophily](../mechanisms/topic_identity_homophily.md)
- [between-topic citation disadvantage](../mechanisms/between_topic_citation_disadvantage.md)
- [within-topic citation disadvantage](../mechanisms/within_topic_citation_disadvantage.md)
- [citation density percentile curve](citation_density_percentile_curve.md)

## References

- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `race_gender_topic_portfolio_maps`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Kozlowski et al. (2022) (2022)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: demographic topic map; race-gender topic scatterplot; topic portfolio equity map; demographic topic-citation map
