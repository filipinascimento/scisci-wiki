# Nonformal citation-referent coverage gap

## Summary

Nonformal citation-referent coverage gap occurs when prior work is referenced by pronouns, abbreviations, approach names, or theory names that cannot be reliably linked to a formal citation record.

## Canonical Form

- Unit of analysis: citation referent, author-name mention, pronoun, method name, theory name, or reference-list link.
- Typical representation: unresolved referent count, coverage gap, dropped-case flag, or annotation caveat.
- Validation target: whether citation-function extraction covers informal references to prior work.
- Empirical signature: relevant prior-work mentions appear without a clean citation marker or reference-list attachment.

## Uses in Science of Science

- Qualifies [author-name citation-referent annotation](../methods/author_name_citation_referent_annotation.md).
- Explains failures in [citation context windows](../representations/citation_context_windows.md) and citation parsing.
- Links to [nonlocal citation-context dependency](../mechanisms/nonlocal_citation_context_dependency.md), because referents can be resolved outside the local sentence.
- Provides a coverage caveat for [citation function classification](../methods/citation_function_classification.md).

## Operationalization

- During annotation, mark mentions of prior work that lack a formal citation marker.
- Track pronouns, abbreviations, named methods, named theories, and repeated author references separately.
- Attempt conservative linking only when the evidence clearly identifies a reference-list item.
- Report unresolved and excluded cases in corpus documentation.
- Evaluate whether nonformal references are concentrated in certain citation roles.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) discusses author-name citation referents and difficult cases where cited work is not locally or formally signaled.
- The paper's annotation workflow requires recognizing citation strings and attaching evidence to referents.
- Nonformal references create a coverage limit for citation-function datasets and classifiers.
- This gap matters because discourse may refer back to a cited work after the formal citation has appeared.

## Caveats

- Over-aggressive linking can attach a role to the wrong cited work.
- Conservative exclusion improves precision but undercounts citation functions.
- Nonformal references may be more common for canonical methods and theories, biasing coverage.

## Links

- [author-name citation-referent annotation](../methods/author_name_citation_referent_annotation.md)
- [citation context windows](../representations/citation_context_windows.md)
- [nonlocal citation-context dependency](../mechanisms/nonlocal_citation_context_dependency.md)
- [citation parser reference-list precondition](citation_parser_reference_list_precondition.md)
- [citation role attachment error analysis](citation_role_attachment_error_analysis.md)
- [explicit citation-evidence annotation](../methods/explicit_citation_evidence_annotation.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `nonformal_citation_referent_coverage_gap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: informal citation referent gap; unresolved cited-work mention; nonformal prior-work reference; citation referent coverage caveat
