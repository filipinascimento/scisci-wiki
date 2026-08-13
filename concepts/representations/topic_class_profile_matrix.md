# Topic-class profile matrix

## Summary

Topic-class profile matrix represents each external document class by the average topic mixture of documents in that class, making semantic relationships between classes visible.

## Canonical Form

- Unit of analysis: class, topic, document-topic vector, topic-model corpus, or class-by-topic cell.
- Typical representation: matrix with classes as rows and selected topic proportions as columns.
- Representation target: compare fields, disciplines, venue sections, or expert categories by latent semantic content.
- Empirical signature: related classes have similar topic-profile rows or shared diagnostic-topic columns.

## Uses in Science of Science

- Turns [document-topic mixtures](document_topic_mixtures.md) into a field-level or category-level representation.
- Provides the display layer for [diagnostic topic-class alignment](../validations/diagnostic_topic_class_alignment.md) and [diagnostic topic ratio](../measures/diagnostic_topic_ratio.md).
- Complements citation-based [science maps](science_maps.md), [field classifications](../measures/field_classifications.md), and [semantic embeddings](semantic_embeddings.md).
- Helps inspect interdisciplinary overlap when off-diagonal matrix structure links classes that share topics.

## Operationalization

- Estimate topic mixtures for documents in a corpus.
- Choose an external class system such as journal section, subject category, venue minor class, or expert label.
- Average topic vectors within each class and retain all topics or a diagnostic-topic subset.
- Visualize the class-by-topic matrix as a heat map or use row similarity to compare classes.
- Inspect off-diagonal similarities and shared diagnostic topics before treating classes as independent.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) computes mean topic vectors for all 33 PNAS minor categories.
- The paper displays a matrix of mean topic values for the diagnostic topics, with a strong diagonal from the selection procedure.
- Griffiths and Steyvers interpret off-diagonal elements as relationships between classes, including similarities among Ecology and Evolution and within the Physical and Social Sciences.
- The authors argue that these class-topic distributions show how the model captures semantic similarity between document classes.

## Caveats

- A class profile is an average and can hide heterogeneity inside large or multidisciplinary classes.
- Matrix structure depends on topic count, vocabulary, class taxonomy, and diagnostic-topic selection.
- External classes can be editorial or administrative labels rather than ground-truth fields.

## Links

- [document-topic mixtures](document_topic_mixtures.md)
- [diagnostic topic ratio](../measures/diagnostic_topic_ratio.md)
- [diagnostic topic-class alignment](../validations/diagnostic_topic_class_alignment.md)
- [topic-word probability distributions](topic_word_probability_distributions.md)
- [field classifications](../measures/field_classifications.md)
- [science maps](science_maps.md)
- [semantic embeddings](semantic_embeddings.md)
- [topic models](../methods/topic_models.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `topic_class_profile_matrix`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: class-topic matrix; category topic profile; topic-field profile matrix; mean topic vector by class
