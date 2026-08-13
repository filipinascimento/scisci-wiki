# Citation tense-voice-modality features

## Summary

Citation tense-voice-modality features encode verb tense, grammatical voice, and auxiliary modality to help distinguish previous-work, current-work, and future-work citation roles.

## Canonical Form

- Unit of analysis: citation-bearing sentence, verb phrase, citation context, feature vector, or role label.
- Typical representation: tense, active/passive voice, modal auxiliary, and related grammatical indicators.
- Representation target: discourse timing and agency in citation-function classification.
- Empirical signature: different citation roles have different tense, voice, or modality patterns.

## Uses in Science of Science

- Splits a grammatical feature family out of [citation-function feature vectors](citation_function_feature_vectors.md).
- Supports [citation function classification](../methods/citation_function_classification.md) with interpretable discourse features.
- Complements [citation cue and agent-action features](citation_cue_agent_action_features.md) by adding verb-form information.
- Helps distinguish prior work, current contribution, and proposed future work in citation contexts.

## Operationalization

- Parse citation contexts for finite verbs and auxiliary verbs.
- Encode tense, active/passive voice, and modality for the citation-bearing sentence and nearby evidence.
- Combine these features with cue phrases, agent-action features, and document position.
- Evaluate whether the feature family improves rare and top-level citation-role labels.
- Inspect errors where parsing or passive constructions obscure agency.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) lists tense, voice, and modality among citation-function classifier features.
- The paper uses these grammatical signals alongside cue phrases, agent/action patterns, location, and self-citation features.
- The feature family is interpretable because tense and modality encode discourse stance toward prior and current work.
- It is part of a supervised framework evaluated against human citation-function labels.

## Caveats

- Tense and voice patterns vary across disciplines and writing styles.
- Grammatical parsers can fail on long technical sentences.
- These features are weak signals and should be combined with evidence spans and role labels.

## Links

- [citation-function feature vectors](citation_function_feature_vectors.md)
- [citation cue and agent-action features](citation_cue_agent_action_features.md)
- [citation function classification](../methods/citation_function_classification.md)
- [citation role document-position features](citation_role_document_position_features.md)
- [citation context windows](citation_context_windows.md)
- [memory-based citation-role baseline](../methods/memory_based_citation_role_baseline.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_tense_voice_modality_features`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: citation tense features; citation voice modality features; grammatical citation-role features; verb-form citation features
