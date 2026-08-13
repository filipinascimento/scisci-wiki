# Discipline-partitioned LDA topics

## Summary

Discipline-partitioned LDA topics train separate topic models within discipline groups to preserve field-local interpretability and usable topic granularity.

## Canonical Form

- Unit of analysis: discipline partition, document corpus, topic model, topic count, or topic label.
- Typical representation: separate LDA models by broad disciplinary corpus.
- Method target: avoid forcing one global topic model to cover semantically different fields.
- Empirical signature: topic counts and labels are selected within field partitions.

## Uses in Science of Science

- Extends [topic models](topic_models.md) into demographic and inequality studies.
- Links to [topic-number model selection](topic_number_model_selection.md) and [manual topic-granularity check](../validations/manual_topic_granularity_check.md).
- Produces [document-topic mixtures](../representations/document_topic_mixtures.md) and [topic-word probability distributions](../representations/topic_word_probability_distributions.md) within comparable discipline groups.

## Operationalization

- Partition the publication corpus into broad discipline groups.
- Train one LDA model per partition.
- Select topic counts by interpretability and granularity checks.
- Manually inspect topic words and repeated-word artifacts.
- Compare only within partitions or document how topics are aligned across them.

## Evidence and Validations

- Verified full-text evidence from Kozlowski et al. (2022) trains LDA models separately for Health and for Social Sciences, Humanities, and Professional Fields.
- The paper selects 200 and 300 topics respectively after manual inspection of granularity.
- This design supports finer topic-identity analysis without one global model overwhelming field-specific semantics.

## Caveats

- Topics from different partitions are not directly identical.
- Partition choice can affect conclusions.
- Separate models can hide cross-field topics unless an alignment step is added.

## Links

- [topic models](topic_models.md)
- [topic-number model selection](topic_number_model_selection.md)
- [manual topic-granularity check](../validations/manual_topic_granularity_check.md)
- [document-topic mixtures](../representations/document_topic_mixtures.md)
- [topic-word probability distributions](../representations/topic_word_probability_distributions.md)

## References

- Kozlowski, D., Lariviere, V., Sugimoto, C. R., & Monroe-White, T. (2022). Intersectional inequalities in science. *Proceedings of the National Academy of Sciences*, 119(2), e2113067119. https://doi.org/10.1073/pnas.2113067119 [OpenAlex: W4205475170; Dimensions: pub.1144403702; WoS: unknown]

## Metadata

- Concept ID: `discipline_partitioned_lda_topics`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Kozlowski et al. (2022) (2022)
- Latest seen paper: Kozlowski et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2113067119`
- OpenAlex ID: `W4205475170`
- Dimensions ID: `pub.1144403702`
- SciSciNet ID: `W4205475170`
- Aliases: discipline-specific LDA; field-partitioned topic modeling; within-discipline topic models
