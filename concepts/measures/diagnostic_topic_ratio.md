# Diagnostic topic ratio

## Summary

Diagnostic topic ratio measures how strongly a latent topic is associated with one document class relative to all other classes.

## Canonical Form

- Unit of analysis: topic, document class, document-topic vector, class-topic mean, or external field label.
- Typical representation: within-class topic prevalence divided by topic prevalence outside the class.
- Measurement target: identify which unsupervised topics are most characteristic of a field, venue category, discipline, or expert label.
- Empirical signature: a topic has high probability in one class and low probability across comparison classes.

## Uses in Science of Science

- Operationalizes [diagnostic topic-class alignment](../validations/diagnostic_topic_class_alignment.md) as a compact measure.
- Converts [document-topic mixtures](../representations/document_topic_mixtures.md) into class-specific markers for [field classifications](field_classifications.md).
- Supplies interpretable anchors for [topic-word probability distributions](../representations/topic_word_probability_distributions.md) and [science maps](../representations/science_maps.md).
- Helps identify shared or boundary-spanning topics when one topic is diagnostic for multiple categories.

## Operationalization

- Fit an unsupervised topic model and estimate document-topic vectors.
- Group documents by an external class label, field, venue section, or expert category.
- Average the topic vectors within each class.
- For each class, compute the ratio between a topic's class mean and its summed or averaged prevalence in all other classes.
- Select high-ratio topics as diagnostic candidates, then inspect top words and class sizes.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) computes a mean topic vector for each PNAS minor category using 2,620 abstracts from 2001.
- The paper defines the most diagnostic topic for a minor category as the topic whose category prevalence divided by prevalence across all other categories is greatest.
- Griffiths and Steyvers use this ratio to identify diagnostic topics for almost all of the 33 PNAS minor categories.
- The same analysis shows that some diagnostic topics are shared across related classes, such as climate-change words for Ecology, Geology, and Geophysics.

## Caveats

- A high diagnostic ratio can be unstable in small classes or rare topics.
- Diagnostic does not mean exclusive; shared diagnostic topics can indicate meaningful field overlap.
- The ratio depends on the topic count, preprocessing, class taxonomy, and whether classes are single-label or multi-label.

## Links

- [diagnostic topic-class alignment](../validations/diagnostic_topic_class_alignment.md)
- [topic-class profile matrix](../representations/topic_class_profile_matrix.md)
- [document-topic mixtures](../representations/document_topic_mixtures.md)
- [topic-word probability distributions](../representations/topic_word_probability_distributions.md)
- [field classifications](field_classifications.md)
- [topic models](../methods/topic_models.md)
- [topic-number model selection](../methods/topic_number_model_selection.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `diagnostic_topic_ratio`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: diagnostic topic prevalence ratio; class-specific topic ratio; within-class topic enrichment; topic-field diagnostic ratio
