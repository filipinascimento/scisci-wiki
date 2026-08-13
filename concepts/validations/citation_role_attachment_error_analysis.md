# Citation role attachment error analysis

## Summary

Citation role attachment error analysis separates wrong citation-role prediction from wrong attachment of a cue, method, data set, result, or cited work in the local context.

## Canonical Form

- Unit of analysis: citation instance, citation role, cue phrase, cited object, model prediction, or error case.
- Typical representation: qualitative error table with predicted class, human class, and explanation of attachment failure.
- Validation target: diagnose whether classifier errors come from shallow local cues or from attaching the citation to the wrong discourse object.
- Empirical signature: error examples distinguish role confusion from wrong cue-to-citation or citation-to-result attachment.

## Uses in Science of Science

- Complements [nonlocal citation-context dependency](../mechanisms/nonlocal_citation_context_dependency.md) with a model-error audit.
- Supports [citation function classification](../methods/citation_function_classification.md), [citation-function feature vectors](../representations/citation_function_feature_vectors.md), and [explicit citation-evidence annotation](../methods/explicit_citation_evidence_annotation.md).
- Helps improve citation-aware search, summarization, and semantic citation networks by targeting attachment failures.

## Operationalization

- After classification, sample false positives and false negatives by citation-function class.
- Label whether the error is caused by shallow cue reliance, nonlocal dependency, wrong referent, wrong method/result attachment, or annotation ambiguity.
- Use the error taxonomy to revise context windows, parsing, cue features, or model architecture.
- Report attachment errors separately from class-imbalance errors.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) includes examples where shallow processing misleads the machine learner.
- The paper also shows an example where the machine attaches a citation to the data set being used while the human attaches it to the result being compared.
- These examples demonstrate that citation-function errors can arise from attachment failures, not only from missing class cues.

## Caveats

- Error-analysis categories can be subjective and should be defined before large audits.
- Attachment failures may require richer discourse parsing rather than more citation-local features.
- A classifier with good aggregate metrics can still fail on attachment-sensitive citation uses.

## Links

- [nonlocal citation-context dependency](../mechanisms/nonlocal_citation_context_dependency.md)
- [citation function classification](../methods/citation_function_classification.md)
- [citation context windows](../representations/citation_context_windows.md)
- [citation-function feature vectors](../representations/citation_function_feature_vectors.md)
- [explicit citation-evidence annotation](../methods/explicit_citation_evidence_annotation.md)
- [citation parser reference-list precondition](citation_parser_reference_list_precondition.md)
- [citation-function class imbalance](citation_function_class_imbalance.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_role_attachment_error_analysis`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: citation attachment error audit; citation-role error analysis; cue attachment failure; citation referent error analysis
