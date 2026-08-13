# Explicit citation-evidence annotation

## Summary

Explicit citation-evidence annotation requires annotators to assign citation functions only when they can point to concrete textual evidence in the citing paper.

## Canonical Form

- Unit of analysis: citation marker, author-name mention, citation context span, annotation decision, or evidence phrase.
- Typical representation: citation-function label paired with a required evidence string or span.
- Method target: reduce unsupported inference about author intent when annotating why a citation appears.
- Empirical signature: non-neutral labels are justified by explicit phrases such as use, weakness, comparison, support, motivation, or continuation.

## Uses in Science of Science

- Grounds [citation function taxonomies](../representations/citation_function_taxonomies.md) in observable text.
- Improves training data for [citation function classification](citation_function_classification.md).
- Provides an audit trail for [citation contexts and functions](../representations/citation_contexts.md).
- Helps [responsible metrics](../measures/responsible_metrics.md) avoid treating inferred citation motives as facts.

## Operationalization

- Define category-specific annotation rules and examples.
- Require annotators to mark or type the evidence phrase that supports each non-neutral label.
- Prefer neutral or insufficient-evidence labels when the discourse does not explicitly support a stronger function.
- Treat [negative citation meekness effect](../mechanisms/negative_citation_meekness_effect.md) as a reason explicit negative evidence may be sparse or softened, not as permission to infer criticism without evidence.
- Store annotation provenance, annotator ID, context span, and label decision.
- Audit disagreements by comparing both the labels and the evidence spans that produced them.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) states that annotators should only mark explicitly signaled citation functions.
- The paper requires annotators to identify textual evidence for the function assigned to a citation and to enter that evidence in an annotation tool.
- Teufel et al. use written guidelines, a decision tree, examples, and decision aids to make categories more objective.
- The full text emphasizes that deep field knowledge or guesses about author intent should not drive annotation.

## Caveats

- Explicit-evidence rules can under-label implicit or rhetorically cautious citation functions.
- Evidence spans can be nonlocal, so sentence-only annotation may miss valid cues.
- Requiring evidence improves auditability but does not eliminate subjective judgment in hard cases.

## Links

- [citation function taxonomies](../representations/citation_function_taxonomies.md)
- [citation context windows](../representations/citation_context_windows.md)
- [citation contexts and functions](../representations/citation_contexts.md)
- [nonlocal citation-context dependency](../mechanisms/nonlocal_citation_context_dependency.md)
- [negative citation meekness effect](../mechanisms/negative_citation_meekness_effect.md)
- [citation-function agreement validation](../validations/citation_function_agreement_validation.md)
- [citation function classification](citation_function_classification.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `explicit_citation_evidence_annotation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: citation evidence spans; explicit citation-function cues; evidence-backed citation annotation; citation motive audit trail
