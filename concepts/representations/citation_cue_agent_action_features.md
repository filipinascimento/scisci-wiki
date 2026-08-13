# Citation cue and agent-action features

## Summary

Citation cue and agent-action features encode meta-discourse cue phrases, grammatical agents, and action verb clusters that signal the rhetorical function of a citation.

## Canonical Form

- Unit of analysis: citation-bearing sentence, subject phrase, cue phrase, action verb, agent type, or citation-function instance.
- Typical representation: cue-phrase flags, finite cue grammar, agent-type feature, action-cluster feature, negation flag, or combined citation-function feature vector.
- Representation target: make citation-function signals explicit and interpretable before classification.
- Empirical signature: phrases, subjects, and verbs differ across roles such as weakness, basis, use, contrast, motivation, support, and neutral description.

## Uses in Science of Science

- Refines [citation-function feature vectors](citation_function_feature_vectors.md) into an interpretable linguistic feature family.
- Supports [citation function classification](../methods/citation_function_classification.md) when training data are small or when explainability matters.
- Provides a bridge between full-text citation analysis and discourse features used in scientific summarization.
- Helps distinguish [explicit citation-evidence annotation](../methods/explicit_citation_evidence_annotation.md) from opaque embedding-only citation classification.
- Connects citation-function modeling to [citation sentiment-role projection](../methods/citation_sentiment_role_projection.md), because some cue and action clusters carry polarity.

## Operationalization

- Build cue-phrase grammars over surface strings, part-of-speech placeholders, and substitutable word classes.
- Classify grammatical subjects into agent types, such as the current paper's authors, other cited researchers, or general field actors.
- Cluster action verbs into role-relevant groups, such as presentation, continuation, use, comparison, or failure.
- Add negation, tense, voice, modality, and document-location features before training the citation-function classifier.
- Keep feature provenance separate from learned model weights so errors can be inspected.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) describes a cue-phrase grammar with 1,762 cue phrases developed on papers outside the experiment set.
- The same paper models two main agent types, the current paper's authors and everybody else, using 185 patterns over grammatical subjects.
- Teufel et al. define 20 manually acquired action-verb clusters, including presentation verbs, continuation-of-ideas verbs, and verbs associated with weakness or failure.
- The paper also uses annotator-entered meta-description cues, extracting 892 cue phrases and adding category-specific cue features.

## Caveats

- Hand-built cue and action resources may be field-, genre-, and period-specific.
- Cue features can miss implicit citation functions or cautious discourse without explicit markers.
- Agent detection from shallow POS patterns can fail on complex syntax, passive voice, and anaphora.

## Links

- [citation-function feature vectors](citation_function_feature_vectors.md)
- [citation function classification](../methods/citation_function_classification.md)
- [explicit citation-evidence annotation](../methods/explicit_citation_evidence_annotation.md)
- [citation sentiment-role projection](../methods/citation_sentiment_role_projection.md)
- [citation function taxonomies](citation_function_taxonomies.md)
- [citation context windows](citation_context_windows.md)
- [semantic embeddings](semantic_embeddings.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_cue_agent_action_features`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: citation cue phrase grammar; agent-action citation features; citation meta-discourse features; cue-phrase citation role features
