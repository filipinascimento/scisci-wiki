# Document-topic mixtures

## Summary

Document-topic mixtures represent each paper as a distribution over latent topics rather than assigning it to a single field or class.

## Canonical Form

- Unit of analysis: paper, abstract, document section, topic, or corpus.
- Typical representation: document-by-topic matrix plus topic-word distributions.
- Mechanism or measurement target: overlapping thematic membership, interdisciplinarity, and semantic similarity.
- Empirical signature: papers share partial topic weights even when they belong to different journals, classes, or fields.

## Uses in Science of Science

- Provides a text-based counterpart to [field classifications](../measures/field_classifications.md), [science maps](science_maps.md), and [citation-informed paper embeddings](citation_informed_paper_embeddings.md).
- Supports soft field membership for interdisciplinary papers that are poorly represented by single-label categories.
- Gives downstream measures a reusable semantic feature matrix for novelty, search, career trajectories, and field-emergence studies.
- Pairs with [topic-word probability distributions](topic_word_probability_distributions.md) to separate document membership from topic interpretation.
- Aggregates into a [topic-class profile matrix](topic_class_profile_matrix.md) and supports [diagnostic topic ratio](../measures/diagnostic_topic_ratio.md) calculations when documents have external class labels.

## Operationalization

- Fit a topic model to titles, abstracts, or full text.
- Estimate a topic-proportion vector for each document.
- Use topic vectors as features for similarity, clustering, trend aggregation, or field-normalized comparisons.
- Average vectors by external classes when constructing class-level topic profiles or diagnostic-topic measures.
- Validate the mixtures against known class labels, expert categories, citation neighborhoods, or manually inspected top words.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) frames a scientific paper as addressing multiple topics, with document content represented by a distribution over topics.
- Their PNAS analysis uses topic mixtures to compare PNAS minor categories, showing that off-diagonal similarities between classes can be read from shared topic distributions.
- The same paper argues that soft topic classification distinguishes the model from a standard Bayesian classifier that assumes all words come from a single class.
- This makes document-topic mixtures a reusable representation for field overlap, interdisciplinary content, and semantic relatedness.

## Caveats

- Topic mixtures depend on corpus scope, vocabulary pruning, model count, and hyperparameters.
- Topic weights are model-estimated features, not observed disciplinary memberships.
- Mixtures can blur distinct mechanisms when topics are too broad or split a coherent field when topics are too fine.

## Links

- [topic models](../methods/topic_models.md)
- [topic-word probability distributions](topic_word_probability_distributions.md)
- [topic-class profile matrix](topic_class_profile_matrix.md)
- [diagnostic topic ratio](../measures/diagnostic_topic_ratio.md)
- [collapsed Gibbs topic sampler](../methods/collapsed_gibbs_topic_sampler.md)
- [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md)
- [topic-number model selection](../methods/topic_number_model_selection.md)
- [topic assignment tagging](../methods/topic_assignment_tagging.md)
- [topic-model posterior non-identifiability](../validations/topic_model_posterior_nonidentifiability.md)
- [diagnostic topic-class alignment](../validations/diagnostic_topic_class_alignment.md)
- [semantic embeddings](semantic_embeddings.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [field classifications](../measures/field_classifications.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `document_topic_mixtures`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: soft topical membership; document topic vectors; topic proportion matrix; mixed-membership documents
