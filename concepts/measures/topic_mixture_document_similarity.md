# Topic-mixture document similarity

## Summary

Topic-mixture document similarity compares papers, classes, or fields by the distance or similarity between their topic-proportion vectors.

## Canonical Form

- Unit of analysis: document, class, topic-mixture vector, field, venue, or time window.
- Typical representation: cosine similarity, correlation, distance, or nearest-neighbor search over document-topic mixtures.
- Measurement target: semantic proximity in the latent topic space inferred from scientific text.
- Empirical signature: papers or classes with similar topic weights are treated as semantically related even when they do not share exact keywords.

## Uses in Science of Science

- Turns [document-topic mixtures](../representations/document_topic_mixtures.md) into a reusable similarity measure.
- Provides a text-based complement to [science maps](../representations/science_maps.md), [semantic embeddings](../representations/semantic_embeddings.md), and citation-based relatedness.
- Supports comparisons among journal sections, fields, or research fronts through [topic-class profile matrix](../representations/topic_class_profile_matrix.md) rows.
- Can help identify neighboring topics for [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md) and field-emergence analysis.

## Operationalization

- Fit a topic model to a stable corpus with documented preprocessing.
- Estimate a topic-proportion vector for each document or aggregate unit.
- Compare vectors with cosine similarity, correlation, Jensen-Shannon distance, or another declared metric.
- Inspect nearest neighbors and class-level averages before interpreting similarity as substantive relatedness.
- Validate against known classifications, expert maps, citations, or downstream retrieval performance.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) frames topic models as a way to express similarity between documents.
- The paper computes topic distributions for PNAS abstracts and uses them to compare external PNAS classes.
- Class-level similarity appears through the topic-class matrix, where off-diagonal structure is interpreted as relationships among scientific classes.
- This makes topic-mixture similarity a bridge between document-level topic inference and field-level science mapping.

## Caveats

- Similar topic mixtures can reflect shared vocabulary, methods, or venue conventions rather than shared problems.
- Similarity values depend on topic count, corpus scope, stopword choices, and hyperparameters.
- Topic labels are analyst interpretations, so vector similarity should be paired with content inspection.

## Links

- [document-topic mixtures](../representations/document_topic_mixtures.md)
- [topic-class profile matrix](../representations/topic_class_profile_matrix.md)
- [topic models](../methods/topic_models.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [science maps](../representations/science_maps.md)
- [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md)
- [off-diagonal class-topic relationships](../representations/off_diagonal_class_topic_relationships.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `topic_mixture_document_similarity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: topic-vector similarity; document-topic cosine; latent topic similarity; topic-space relatedness
