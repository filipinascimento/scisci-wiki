# Citation-role document-position features

## Summary

Citation-role document-position features encode where a citation appears in a sentence, paragraph, section, or full paper because citation functions vary by document location.

## Canonical Form

- Unit of analysis: citation context, sentence, paragraph, section, document position, or feature vector.
- Typical representation: section label, relative sentence position, paragraph position, or normalized document-location bin.
- Representation target: rhetorical location as an input to citation-function classification.
- Empirical signature: citation roles concentrate differently in introductions, methods, comparisons, and conclusions.

## Uses in Science of Science

- Splits a location feature family from [citation-function feature vectors](citation_function_feature_vectors.md).
- Adds document structure to [citation context windows](citation_context_windows.md).
- Supports [citation function classification](../methods/citation_function_classification.md) with interpretable positional cues.
- Complements [citation tense-voice-modality features](citation_tense_voice_modality_features.md) and cue features.

## Operationalization

- Segment full text into sections, paragraphs, and sentences.
- Record citation sentence index within paragraph, paragraph index within section, section label, and normalized document position.
- Encode position features for citation-function classifiers or annotation checks.
- Compare feature usefulness by role label, field, and article genre.
- Audit errors where section parsing fails or section labels are nonstandard.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) includes sentence, paragraph, section, and document-position features for citation-function classification.
- The paper argues that citation roles are not distributed uniformly through the paper.
- Location features help discriminate uses such as background, motivation, methods, and comparison.
- Their inclusion shows that full-text structure matters for typed citation extraction.

## Caveats

- Position patterns vary by article genre and field.
- Section labels are often missing, nested, or nonstandard in publisher full text.
- Position should not substitute for evidence about the actual citation relation.

## Links

- [citation-function feature vectors](citation_function_feature_vectors.md)
- [citation context windows](citation_context_windows.md)
- [citation function classification](../methods/citation_function_classification.md)
- [citation tense-voice-modality features](citation_tense_voice_modality_features.md)
- [citation cue and agent-action features](citation_cue_agent_action_features.md)
- [citation parser reference-list precondition](../validations/citation_parser_reference_list_precondition.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_role_document_position_features`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: citation location features; document-position citation features; citation section-position features; positional citation-role features
