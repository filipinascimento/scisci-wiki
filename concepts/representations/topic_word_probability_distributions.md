# Topic-word probability distributions

## Summary

Topic-word probability distributions represent each latent topic as a probability distribution over words, making topics interpretable through high-probability terms.

## Canonical Form

- Unit of analysis: topic, word, vocabulary term, document token, or corpus.
- Typical representation: topic-by-word matrix, top-word list, multinomial topic distribution, or term-probability vector.
- Representation target: summarize the language that characterizes each inferred topic.
- Empirical signature: scientific topics are visible as coherent sets of high-probability words, such as domain terms or method terms.

## Uses in Science of Science

- Complements [document-topic mixtures](document_topic_mixtures.md), which represent documents as mixtures over these topic-word distributions.
- Makes [topic models](../methods/topic_models.md) interpretable for science maps, field discovery, and topic labeling.
- Supplies term-level evidence for [topic assignment tagging](../methods/topic_assignment_tagging.md).
- Helps compare text-derived topics with [field classifications](../measures/field_classifications.md) and [science maps](science_maps.md).

## Operationalization

- Fit a topic model to tokenized scientific documents.
- Estimate the probability of each vocabulary term under each topic.
- Report top words, probability mass, and vocabulary/preprocessing choices for every interpreted topic.
- Use top-word inspection, expert review, class alignment, and downstream retrieval tasks to validate topic meaning.
- Preserve topic count and random seed or posterior-sample provenance when topic labels are used in other analyses.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) defines each topic as a probability distribution over words.
- The paper explains that topic-word probabilities indicate which words are important to a topic, while document-topic probabilities indicate topic prevalence within a document.
- Griffiths and Steyvers list high-probability words from diagnostic topics to interpret scientific areas such as climate change, evolution, spectroscopy, and mathematical theory.
- The article uses topic-word distributions together with document-topic mixtures to reveal semantic relationships between PNAS classes.

## Caveats

- High-probability words are not a complete topic label; analysts still name and interpret the topic.
- Common scientific words can form topics that reflect discourse style or data description rather than research areas.
- Topic-word distributions can shift when preprocessing, vocabulary pruning, corpus scope, or topic count changes.

## Links

- [topic models](../methods/topic_models.md)
- [document-topic mixtures](document_topic_mixtures.md)
- [topic assignment tagging](../methods/topic_assignment_tagging.md)
- [collapsed Gibbs topic sampler](../methods/collapsed_gibbs_topic_sampler.md)
- [topic-model posterior non-identifiability](../validations/topic_model_posterior_nonidentifiability.md)
- [diagnostic topic-class alignment](../validations/diagnostic_topic_class_alignment.md)
- [semantic embeddings](semantic_embeddings.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `topic_word_probability_distributions`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: topic-word matrix; word probability topics; topic term distributions; multinomial topic words
