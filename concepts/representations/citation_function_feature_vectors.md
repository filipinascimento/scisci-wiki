# Citation-function feature vectors

## Summary

Citation-function feature vectors encode local and document-level properties of a citation context so a model can predict the citation's rhetorical role.

## Canonical Form

- Unit of analysis: citation context, citation-bearing sentence, cited work, citing paper, or citation-function training instance.
- Typical representation: feature vector with cue phrases, agent and action patterns, tense, voice, modality, location, self-citation status, and reference metadata.
- Method target: transform citation discourse into structured inputs for supervised classification.
- Empirical signature: features capture whether the text signals use, contrast, weakness, support, neutrality, or motivation.

## Uses in Science of Science

- Supplies model inputs for [citation function classification](../methods/citation_function_classification.md).
- Bridges [citation context windows](citation_context_windows.md) and machine-learning representations.
- Splits into feature-family motifs such as [citation cue and agent-action features](citation_cue_agent_action_features.md) and [self-citation status role feature](../methods/self_citation_status_role_feature.md).
- Provides interpretable alternatives or complements to [semantic embeddings](semantic_embeddings.md).
- Helps audit why a citation-context model assigned a function label.

## Operationalization

- Parse citation contexts and reference-list metadata from full text.
- Extract cue phrases, verb/action clusters, subject or agent classes, negation, tense, voice, modality, and location features.
- Add citation-specific features such as self-citation status and cited-author metadata.
- Train models with feature vectors and compare against text-only or embedding-only baselines.
- Report which feature groups matter for rare and common citation-function labels.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) uses shallow and linguistically inspired features for citation-function classification.
- The paper describes cue phrases, agent/action patterns, verb tense and voice, modality, sentence and paragraph location, and self-citation features.
- The cue and agent/action subset is split out as [citation cue and agent-action features](citation_cue_agent_action_features.md); the own-work overlap signal is split out as [self-citation status role feature](../methods/self_citation_status_role_feature.md).
- Teufel et al. use manually acquired cue phrases and verb clusters, including clusters associated with continuation, weakness, presentation, and other citation roles.
- The full text connects these features to 10-fold cross-validation over a manually labeled citation-function corpus.

## Caveats

- Hand-built feature vectors may not transfer across fields, genres, or writing styles.
- Feature engineering can encode annotation-scheme assumptions and miss implicit citation functions.
- Modern embeddings can improve coverage but may reduce interpretability unless paired with evidence spans.

## Links

- [citation function classification](../methods/citation_function_classification.md)
- [citation cue and agent-action features](citation_cue_agent_action_features.md)
- [self-citation status role feature](../methods/self_citation_status_role_feature.md)
- [citation context windows](citation_context_windows.md)
- [citation function taxonomies](citation_function_taxonomies.md)
- [explicit citation-evidence annotation](../methods/explicit_citation_evidence_annotation.md)
- [citation-function class imbalance](../validations/citation_function_class_imbalance.md)
- [citation informed paper embeddings](citation_informed_paper_embeddings.md)
- [semantic embeddings](semantic_embeddings.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_function_feature_vectors`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: citation role features; citation-context feature engineering; cue-phrase citation features; citation intent feature vectors
