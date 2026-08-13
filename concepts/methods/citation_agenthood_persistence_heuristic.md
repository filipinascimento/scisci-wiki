# Citation agenthood persistence heuristic

## Summary

Citation agenthood persistence heuristic propagates grammatical agenthood across nearby sentences when no new discourse cue signals that the actor has changed.

## Canonical Form

- Unit of analysis: citation context, sentence sequence, grammatical subject, agent class, or discourse feature.
- Typical representation: carried-forward agent feature, previous-author/current-author flag, or agent-action state.
- Method target: infer who is doing an action in citation discourse when the local sentence is underspecified.
- Empirical signature: the model treats a prior sentence's agent as still active until a new cue resets it.

## Uses in Science of Science

- Extends [citation cue and agent-action features](../representations/citation_cue_agent_action_features.md).
- Adds discourse state to [citation-function feature vectors](../representations/citation_function_feature_vectors.md).
- Handles [nonlocal citation-context dependency](../mechanisms/nonlocal_citation_context_dependency.md) in citation-role extraction.
- Supports [citation function classification](citation_function_classification.md) when roles depend on current-work versus previous-work action.

## Operationalization

- Parse citation contexts into sentences and identify grammatical subjects or agent categories.
- Detect meta-discourse cues that introduce current authors, cited authors, or other researchers.
- Carry the last agent forward across sentences when no reset cue appears.
- Use the carried agent as a classifier feature or annotation aid.
- Evaluate errors where propagation attaches actions to the wrong actor.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) includes agent and action features for citation-function classification.
- The paper describes rules for identifying agenthood and preserving it across discourse where needed.
- These features help distinguish whether an action belongs to cited work, current work, or another source.
- The heuristic addresses the fact that citation roles often depend on context beyond the citation-bearing sentence.

## Caveats

- Agent propagation can amplify early parsing mistakes.
- Scholarly prose may switch agents implicitly without a clear reset cue.
- The heuristic is genre-sensitive and should be validated before transfer across fields.

## Links

- [citation cue and agent-action features](../representations/citation_cue_agent_action_features.md)
- [citation-function feature vectors](../representations/citation_function_feature_vectors.md)
- [nonlocal citation-context dependency](../mechanisms/nonlocal_citation_context_dependency.md)
- [citation function classification](citation_function_classification.md)
- [citation role attachment error analysis](../validations/citation_role_attachment_error_analysis.md)
- [citation context windows](../representations/citation_context_windows.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_agenthood_persistence_heuristic`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: citation agent carryover; agenthood propagation heuristic; citation discourse agent state; agent persistence feature
