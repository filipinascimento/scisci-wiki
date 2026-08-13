# Topic prevalence dynamics

## Summary

Topic prevalence dynamics measure how the mixture of latent topics in a corpus changes over time, identifying emerging, declining, and hot scientific topics.

## Canonical Form

- Unit of analysis: document, abstract, topic, field, venue, or time window.
- Typical representation: document-topic matrix plus yearly topic prevalence series.
- Mechanism or measurement target: thematic growth, decline, drift, and episodic attention.
- Empirical signature: changes in topic weights across publication years, field categories, or document classes.

## Uses in Science of Science

- Turns [topic models](topic_models.md) into temporal evidence for [field emergence](../mechanisms/field_emergence.md) and research-front growth.
- Helps prioritize papers and clusters for wiki expansion by showing which concepts rise together.
- Provides an interpretable text-based complement to citation-based research-front detection.
- Complements [conceptual territory growth](../measures/conceptual_territory_growth.md), which asks whether the underlying idea space expands along with publication volume.
- Requires stable topic identities or explicit alignment because [topic-model posterior non-identifiability](../validations/topic_model_posterior_nonidentifiability.md) can otherwise make topic histories incomparable.
- Can be summarized with [topic trend slope](../measures/topic_trend_slope.md) when the target is a compact hot-versus-cold topic ranking.

## Operationalization

- Fit a topic model to titles, abstracts, or full text with stable preprocessing and model-count decisions.
- Estimate topic proportions for each document.
- Aggregate topic proportions by year, field, venue, institution, or funding category.
- Fit explicit trend summaries such as topic trend slopes when ranking rising and declining topics.
- Validate trends against known discoveries, terminology shifts, review articles, or expert-coded field histories.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) fits probabilistic topics to 28,154 PNAS abstracts from 1991 to 2001.
- The paper uses the inferred topics not only to classify documents, but also to examine temporal dynamics and identify hot topics.
- Their trend analysis depends on document-topic proportions from a selected 300-topic model, linking temporal topic measures to model-count and mixture-representation choices.
- Griffiths and Steyvers compare topic distributions with PNAS class designations, showing that topics can capture semantic relationships between document classes as well as changes over time.
- This makes topic prevalence dynamics a method for turning text into a longitudinal map of scientific attention.

## Caveats

- Topic prevalence depends on model count, vocabulary pruning, stopwords, corpus scope, and document length.
- Topic labels are analyst interpretations, not directly observed categories.
- A rising topic can reflect terminology change, indexing changes, or venue selection rather than a new field.

## Links

- [topic models](topic_models.md)
- [document-topic mixtures](../representations/document_topic_mixtures.md)
- [topic-number model selection](topic_number_model_selection.md)
- [topic assignment tagging](topic_assignment_tagging.md)
- [topic trend slope](../measures/topic_trend_slope.md)
- [topic-model posterior non-identifiability](../validations/topic_model_posterior_nonidentifiability.md)
- [diagnostic topic-class alignment](../validations/diagnostic_topic_class_alignment.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [conceptual territory growth](../measures/conceptual_territory_growth.md)
- [field population models](field_population_models.md)
- [field emergence](../mechanisms/field_emergence.md)
- [research fronts](../mechanisms/research_fronts.md)
- [science maps](../representations/science_maps.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `topic_prevalence_dynamics`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Aliases: topic dynamics; hot-topic detection; longitudinal topic modeling; topic trend analysis
