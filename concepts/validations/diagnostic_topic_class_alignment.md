# Diagnostic topic-class alignment

## Summary

Diagnostic topic-class alignment validates unsupervised topics by testing whether high-probability topics correspond to independent document classes or field labels.

## Canonical Form

- Unit of analysis: topic, document class, field label, document-topic vector, diagnostic topic, or class-topic matrix.
- Typical representation: class-by-topic matrix, diagnostic-topic ratio, heat map, or top-word comparison.
- Validation target: determine whether unsupervised text topics recover meaningful structure reflected in external classes.
- Empirical signature: each class has one or more topics with high within-class prevalence and low prevalence elsewhere.

## Uses in Science of Science

- Validates [topic models](../methods/topic_models.md) against [field classifications](../measures/field_classifications.md).
- Tests whether [document-topic mixtures](../representations/document_topic_mixtures.md) capture semantic structure recognized by authors, venues, or experts.
- Uses [diagnostic topic ratio](../measures/diagnostic_topic_ratio.md) to select class-specific topics and [topic-class profile matrix](../representations/topic_class_profile_matrix.md) to display class-topic relationships.
- Supports text-based [science maps](../representations/science_maps.md) and topic-derived [field emergence](../mechanisms/field_emergence.md) analyses.
- Complements predictive checks such as [topic-model perplexity benchmark](topic_model_perplexity_benchmark.md).

## Operationalization

- Fit topics without using the class labels.
- Estimate document-topic vectors for documents with independent class labels.
- Average topic vectors by class and identify diagnostic topics using within-class versus outside-class prevalence ratios.
- Visualize class-level topic means through a topic-class profile matrix, then inspect diagonal and off-diagonal structure.
- Inspect class-topic heat maps, top words, and off-diagonal similarities between classes.
- Treat sparse classes cautiously because diagnostic topic estimates can be unstable.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) compares PNAS topic-model outputs with author-supplied major and minor class designations.
- The paper identifies diagnostic topics for 33 PNAS minor categories by comparing a topic's prevalence in one category with its prevalence across other categories.
- Griffiths and Steyvers show that strong diagnostic topics exist for almost all minor categories, indicating that the unsupervised model recovered meaningful semantic structure.
- The paper also uses off-diagonal class-topic patterns to reveal relationships between classes, such as Ecology and Evolution or Chemistry and Physics.

## Caveats

- External class labels are not ground truth; they encode venue or editorial categories.
- Sparse classes can produce unreliable diagnostic topics.
- A topic can be diagnostic of multiple classes, which may signal real overlap rather than classification failure.

## Links

- [topic models](../methods/topic_models.md)
- [document-topic mixtures](../representations/document_topic_mixtures.md)
- [topic-word probability distributions](../representations/topic_word_probability_distributions.md)
- [diagnostic topic ratio](../measures/diagnostic_topic_ratio.md)
- [topic-class profile matrix](../representations/topic_class_profile_matrix.md)
- [PNAS abstract topic corpus](../datasets/pnas_abstract_topic_corpus.md)
- [field classifications](../measures/field_classifications.md)
- [science maps](../representations/science_maps.md)
- [topic-model perplexity benchmark](topic_model_perplexity_benchmark.md)
- [field-classification sensitivity](field_classification_sensitivity.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `diagnostic_topic_class_alignment`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: class-topic alignment; diagnostic topic validation; topic-field agreement; unsupervised topic class validation
