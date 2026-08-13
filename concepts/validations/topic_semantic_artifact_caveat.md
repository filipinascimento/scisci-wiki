# Topic semantic artifact caveat

## Summary

Topic semantic artifact caveat is the warning that some inferred topics capture recurring language, evidence styles, or reporting rhetoric rather than coherent research areas.

## Canonical Form

- Unit of analysis: topic, topic-word list, document class, corpus subset, or topic interpretation.
- Typical representation: top-word list, diagnostic-topic table, manual label, artifact flag, and supporting document examples.
- Validation target: distinguish substantive scientific topics from topics induced by generic scientific language or sparse class artifacts.
- Empirical signature: a topic's top words are common across many kinds of research or express methods, data description, or tentative claims rather than a field.

## Uses in Science of Science

- Adds a semantic audit to [topic models](../methods/topic_models.md), [topic-number model selection](../methods/topic_number_model_selection.md), and [diagnostic topic-class alignment](diagnostic_topic_class_alignment.md).
- Prevents topic-model science maps from treating every latent component as a research specialty.
- Pairs with [topic-granularity hyperparameter sensitivity](topic_granularity_hyperparameter_sensitivity.md) because very fine or sparse decompositions can produce more artifact topics.
- Supports [research area term labeling](../methods/research_area_term_labeling.md) by requiring evidence that labels describe real topical content.

## Operationalization

- Inspect top words, high-probability documents, and diagnostic class assignments for each topic.
- Flag topics dominated by generic words, method boilerplate, data-description terms, or rhetoric rather than a coherent research area.
- Check whether artifact topics are concentrated in small classes, short documents, or preprocessing failures.
- Report artifact topics separately or remove them from downstream science-map, trend, and policy interpretations.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) finds one PNAS diagnostic topic for Economic Sciences that contains generally relevant scientific words rather than a clear research area.
- The authors attribute the unreliable estimate partly to the very small number of documents in that class in 2001.
- They explicitly note that not all topics found by the algorithm correspond to areas of research; some collect words used to describe data or tentative conclusions.
- This makes manual semantic review a necessary validation layer even when topics align well with many PNAS minor categories.

## Caveats

- Method or rhetoric topics can still be analytically useful when the research question concerns methods, evidence practices, or writing style.
- A topic that looks generic in top words may become interpretable after inspecting high-probability documents.
- Artifact judgments are analyst-dependent and should be logged with examples.

## Links

- [topic models](../methods/topic_models.md)
- [topic-number model selection](../methods/topic_number_model_selection.md)
- [topic-granularity hyperparameter sensitivity](topic_granularity_hyperparameter_sensitivity.md)
- [manual topic-granularity check](manual_topic_granularity_check.md)
- [diagnostic topic-class alignment](diagnostic_topic_class_alignment.md)
- [topic assignment tagging](../methods/topic_assignment_tagging.md)
- [topic-word probability distributions](../representations/topic_word_probability_distributions.md)
- [research area term labeling](../methods/research_area_term_labeling.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `topic_semantic_artifact_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: non-substantive topic caveat; rhetorical topic artifact; generic-language topic; topic interpretability artifact
