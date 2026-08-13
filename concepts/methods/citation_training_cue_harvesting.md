# Citation training cue harvesting

## Summary

Citation training cue harvesting converts annotator-entered justification cues into reusable category-specific features for citation-function classification.

## Canonical Form

- Unit of analysis: citation instance, annotator cue, cue phrase, citation-function class, or feature column.
- Typical representation: cue list collected during annotation training and transformed into class-associated binary or count features.
- Method target: turn human explanations for citation-role labels into supervised model features without leaking test-corpus evidence.
- Empirical signature: cue phrases gathered during training are excluded from the test corpus but used as classifier features.

## Uses in Science of Science

- Connects [explicit citation-evidence annotation](explicit_citation_evidence_annotation.md) to [citation-function feature vectors](../representations/citation_function_feature_vectors.md).
- Provides a workflow layer for [citation function classification](citation_function_classification.md).
- Complements [citation cue and agent-action features](../representations/citation_cue_agent_action_features.md) by documenting how cue inventories are harvested.

## Operationalization

- During annotator training, ask annotators to record text cues that justify each citation-function label.
- Curate the cue list by class and remove cue-source documents from evaluation.
- Convert class cue inventories into explicit classifier features.
- Track cue provenance, class association, and whether cues were acquired before or after the evaluation split.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) says annotators were encouraged during training to enter cue phrases justifying category choices.
- The authors manually extracted 892 cue phrases and note that the files that supplied the cues were not part of the test corpus.
- Teufel et al. then include features recording the presence of cues associated with particular classes.

## Caveats

- Cue inventories can overfit domain conventions or annotator habits.
- Cue harvesting must be split-aware; harvesting cues from test documents creates leakage.
- Surface cues may fail when citation function depends on nonlocal context or attachment decisions.

## Links

- [citation function classification](citation_function_classification.md)
- [citation-function feature vectors](../representations/citation_function_feature_vectors.md)
- [citation cue and agent-action features](../representations/citation_cue_agent_action_features.md)
- [explicit citation-evidence annotation](explicit_citation_evidence_annotation.md)
- [citation function corpus split boundaries](../validations/citation_function_corpus_split_boundaries.md)
- [citation role attachment error analysis](../validations/citation_role_attachment_error_analysis.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_training_cue_harvesting`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: citation cue harvesting; annotator cue features; citation-function cue acquisition; training cue phrase extraction
