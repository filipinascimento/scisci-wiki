# Manual topic-granularity check

## Summary

Manual topic-granularity check validates the chosen number of topics in a topic model by inspecting whether inferred topics are interpretable, nonredundant, and detailed enough for the research question.

## Canonical Form

- Unit of analysis: topic model, candidate topic count, corpus subset, topic-word list, or analyst label.
- Typical representation: topic-count comparison, repeated-word audit, topic-label table, or interpretability memo.
- Validation target: ensure that selected topic granularity supports substantive interpretation rather than only statistical fit.
- Empirical signature: larger topic counts begin to repeat words or split topics unhelpfully, while smaller counts merge distinct themes.

## Uses in Science of Science

- Complements [topic-number model selection](../methods/topic_number_model_selection.md) when held-out fit or likelihood does not settle interpretability.
- Makes [topic models](../methods/topic_models.md) auditable before their outputs are used in [race-gender topic portfolio maps](../representations/race_gender_topic_portfolio_maps.md), field maps, or trend analysis.
- Supports topic labels built from [topic-word probability distributions](../representations/topic_word_probability_distributions.md).
- Helps separate methodological sensitivity from substantive claims about [topic-identity homophily](../mechanisms/topic_identity_homophily.md).

## Operationalization

- Fit candidate topic models at several topic counts or granularities.
- Inspect top words, representative documents, and topic overlap for each candidate.
- Record whether higher counts create repeated or hard-to-label topics and whether lower counts erase useful detail.
- Preserve the final topic count, corpus subset, labeling rule, and robustness checks with downstream analyses.

## Evidence and Validations

- Verified full-text evidence from Kozlowski et al. (2022) fits LDA models to Social Sciences, Humanities, and Professional Fields and to Health articles.
- The paper uses 300 topics for Social Sciences and related fields and 200 topics for Health after considering sample size and interpretability.
- Kozlowski et al. state that manual inspection found higher topic counts repeated words across topics, while fewer topics gave less detailed results.
- They label selected topics from the top words and direct readers to supplementary robustness analysis and an interactive topic visualization.

## Caveats

- Manual interpretability checks can import analyst priors and should be documented rather than treated as objective truth.
- A topic count that works for one corpus, period, or discipline may fail in another.
- Repetition and granularity are not the only validation criteria; predictive fit, stability, and external classification alignment can still matter.

## Links

- [topic models](../methods/topic_models.md)
- [topic-number model selection](../methods/topic_number_model_selection.md)
- [topic-model perplexity benchmark](topic_model_perplexity_benchmark.md)
- [diagnostic topic-class alignment](diagnostic_topic_class_alignment.md)
- [topic-word probability distributions](../representations/topic_word_probability_distributions.md)
- [document-topic mixtures](../representations/document_topic_mixtures.md)
- [race-gender topic portfolio maps](../representations/race_gender_topic_portfolio_maps.md)
- [topic-identity homophily](../mechanisms/topic_identity_homophily.md)

## References

- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `manual_topic_granularity_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Kozlowski et al. (2022) (2022)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: topic interpretability check; LDA granularity audit; repeated-word topic check; manual topic-count validation
