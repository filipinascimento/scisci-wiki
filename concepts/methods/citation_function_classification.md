# Citation function classification

## Summary

Citation function classification automatically predicts the role of a citation from its context and document features.

## Canonical Form

- Unit of analysis: citation context, citation edge, sentence, cited work, or labeled citation instance.
- Typical representation: supervised classifier, feature vector, language model, or sequence-labeling pipeline.
- Mechanism or measurement target: machine-readable citation roles for search, summarization, and impact interpretation.
- Empirical signature: a model assigns roles such as use, modification, contrast, weakness, support, or neutral background to citation instances.

## Uses in Science of Science

- Scales [citation function taxonomies](../representations/citation_function_taxonomies.md) beyond manually annotated corpora.
- Adds semantic edge attributes to [citation networks](../representations/citation_networks.md).
- Supports citation-aware impact metrics, literature review tools, and retrieval systems.
- Provides a full-text NLP workflow that connects citation contexts to [semantic embeddings](../representations/semantic_embeddings.md).
- Turns [citation-function feature vectors](../representations/citation_function_feature_vectors.md) and labeled evidence spans into reusable model inputs.

## Operationalization

- Extract citation context windows and resolve each citation to a reference-list item.
- Annotate a training corpus with a citation-function taxonomy.
- Build features from cue phrases, agent/action patterns, tense, voice, modality, document location, self-citation status, and reference-list metadata.
- Represent cue and agent/action features explicitly through [citation cue and agent-action features](../representations/citation_cue_agent_action_features.md), and add own-work overlap with [self-citation status role feature](self_citation_status_role_feature.md).
- Keep corpus split roles explicit with [citation-function corpus split boundaries](../validations/citation_function_corpus_split_boundaries.md), and treat [citation parser reference-list precondition](../validations/citation_parser_reference_list_precondition.md) as an upstream validation gate.
- Train and evaluate a classifier with metrics suited to skewed labels, such as macro-F and kappa.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) presents a supervised machine-learning framework for automatic citation-function classification.
- Their feature set includes cue phrases, author/action patterns, verb tense and voice, modality, sentence location, section/paragraph position, and self-citation information.
- The paper evaluates 10-fold cross-validation and reports top-level sentiment/function results, using macro-F and kappa because citation-function labels are skewed and rare categories matter.
- Teufel et al. use memory-based learning with Weka's IBk algorithm and compare automatic output with human annotation.
- The same full text also supports narrower workflow motifs for training-cue harvesting, split-boundary leakage control, reference-list parser preconditions, role-attachment error analysis, and downstream information-retrieval test collections.

## Caveats

- Classifiers trained on one field or genre may not transfer to another.
- Rare labels are hard to learn and should not be hidden by accuracy alone.
- Automatic labels should preserve uncertainty when used for evaluation or ranking.
- Error analysis should separate class confusion from reference parsing and citation-role attachment failures.

## Links

- [citation contexts and functions](../representations/citation_contexts.md)
- [citation function taxonomies](../representations/citation_function_taxonomies.md)
- [citation context windows](../representations/citation_context_windows.md)
- [citation-function feature vectors](../representations/citation_function_feature_vectors.md)
- [citation cue and agent-action features](../representations/citation_cue_agent_action_features.md)
- [citation training cue harvesting](citation_training_cue_harvesting.md)
- [citation-function corpus split boundaries](../validations/citation_function_corpus_split_boundaries.md)
- [citation parser reference-list precondition](../validations/citation_parser_reference_list_precondition.md)
- [citation role attachment error analysis](../validations/citation_role_attachment_error_analysis.md)
- [citation processing IR test collection](../validations/citation_processing_ir_test_collection.md)
- [self-citation status role feature](self_citation_status_role_feature.md)
- [explicit citation-evidence annotation](explicit_citation_evidence_annotation.md)
- [citation sentiment-role projection](citation_sentiment_role_projection.md)
- [citation-function class imbalance](../validations/citation_function_class_imbalance.md)
- [citation-function agreement validation](../validations/citation_function_agreement_validation.md)
- [citation-aware search and summarization](citation_aware_search_summarization.md)
- [citation networks](../representations/citation_networks.md)
- [citation informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_function_classification`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Aliases: automatic citation function classification; citation intent classifier; rhetorical citation classification; typed citation classifier
