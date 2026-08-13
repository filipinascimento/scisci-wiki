# PNAS abstract topic corpus

## Summary

The PNAS abstract topic corpus is a venue-bounded text corpus of scientific abstracts used to infer latent topics, compare topic structure with author-supplied classes, and track topic prevalence over time.

## Canonical Form

- Unit of analysis: abstract, publication year, venue class, token, topic assignment, or document-topic vector.
- Typical representation: abstract-by-token corpus with metadata for year and class designations.
- Dataset target: provide a cleaned scientific text corpus for unsupervised topic modeling and temporal topic analysis.
- Empirical signature: abstracts are treated as documents, with vocabulary pruning and stopword removal before topic inference.

## Uses in Science of Science

- Provides the corpus substrate for [topic models](../methods/topic_models.md), [document-topic mixtures](../representations/document_topic_mixtures.md), and [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md).
- Enables validation against author-supplied classes through [diagnostic topic-class alignment](../validations/diagnostic_topic_class_alignment.md).
- Supports [diagnostic topic ratio](../measures/diagnostic_topic_ratio.md), [topic-class profile matrix](../representations/topic_class_profile_matrix.md), and [topic trend slope](../measures/topic_trend_slope.md) analyses by preserving class labels and publication years.
- Supports inspection tools such as [topic assignment tagging](../methods/topic_assignment_tagging.md).
- Gives science mapping a text-only benchmark distinct from [citation networks](../representations/citation_networks.md).

## Operationalization

- Select a venue, time window, document type, and metadata fields such as year and class designation.
- Treat each abstract as one document after tokenization, stopword removal, vocabulary pruning, and optional stemming.
- Preserve the publication year and class labels separately from the unsupervised model inputs.
- Fit candidate topic models and record model-count, hyperparameter, and preprocessing choices.
- Use held-out likelihood, class alignment, temporal trends, and manual inspection to validate the corpus representation.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) analyzes all 28,154 PNAS abstracts published from 1991 through 2001.
- The paper treats abstracts as documents, deletes words occurring in fewer than five abstracts, removes a standard stop list, and retains a vocabulary of 20,551 words.
- Griffiths and Steyvers use the corpus to select a 300-topic model, compare topics with PNAS class designations, identify hot and cold topics, and tag semantic content in abstracts.
- The corpus includes year metadata and author-supplied major and minor class designations, allowing text-only topics to be compared with venue taxonomy.

## Caveats

- A single-venue abstract corpus is not a complete map of science.
- Abstracts omit methods, references, failures, and detailed claims present in full text.
- Venue classes are useful validation metadata, but they can reflect PNAS editorial structure rather than universal field boundaries.

## Links

- [topic models](../methods/topic_models.md)
- [document-topic mixtures](../representations/document_topic_mixtures.md)
- [topic-number model selection](../methods/topic_number_model_selection.md)
- [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md)
- [topic trend slope](../measures/topic_trend_slope.md)
- [topic-class profile matrix](../representations/topic_class_profile_matrix.md)
- [diagnostic topic ratio](../measures/diagnostic_topic_ratio.md)
- [topic assignment tagging](../methods/topic_assignment_tagging.md)
- [diagnostic topic-class alignment](../validations/diagnostic_topic_class_alignment.md)
- [topic-model perplexity benchmark](../validations/topic_model_perplexity_benchmark.md)
- [field classifications](../measures/field_classifications.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `pnas_abstract_topic_corpus`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: PNAS topic-model corpus; scientific abstract topic corpus; venue-bounded abstract corpus; PNAS 1991-2001 abstracts
