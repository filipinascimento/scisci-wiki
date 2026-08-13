# XML/XSLT citation annotation workbench

## Summary

XML/XSLT citation annotation workbench is a browser-based workflow that presents parsed citation contexts as controlled annotation choices while preserving human evidence entry.

## Canonical Form

- Unit of analysis: XML article, citation string, citation context, annotation label, or evidence field.
- Typical representation: structured XML plus XSLT-rendered annotation interface and saved label fields.
- Method target: make full-text citation-function annotation systematic and auditable.
- Empirical signature: annotators choose citation-function labels from a controlled interface tied to parsed citation instances.

## Uses in Science of Science

- Operationalizes [explicit citation-evidence annotation](explicit_citation_evidence_annotation.md).
- Supports the [computational-linguistics citation-function corpus](../datasets/computational_linguistics_citation_function_corpus.md).
- Depends on [citation parser reference-list precondition](../validations/citation_parser_reference_list_precondition.md) for recognized citation strings.
- Produces structured labels for [citation function classification](citation_function_classification.md).

## Operationalization

- Convert full-text articles into XML with citation markers and reference-list links.
- Use XSLT or a similar interface layer to display citation contexts to annotators.
- Provide controlled citation-function categories and fields for evidence notes.
- Save annotations back into structured files or tables.
- Track parser failures, annotator identity, guideline version, and adjudication status.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) describes XML markup and an XSLT/browser annotation workflow for citation-function labeling.
- The workbench presented recognized citation strings and category choices to human annotators.
- This infrastructure helped make citation-function labels reproducible enough for agreement testing and classifier training.
- The motif captures an early full-text annotation engineering pattern for science-of-science NLP.

## Caveats

- The interface inherits upstream parsing errors.
- Controlled menus can make ambiguous cases look cleaner than they are.
- XML/XSLT workflows may be replaced by modern annotation tools, but the underlying provenance requirements remain.

## Links

- [explicit citation-evidence annotation](explicit_citation_evidence_annotation.md)
- [citation function classification](citation_function_classification.md)
- [computational-linguistics citation-function corpus](../datasets/computational_linguistics_citation_function_corpus.md)
- [citation parser reference-list precondition](../validations/citation_parser_reference_list_precondition.md)
- [citation-function agreement validation](../validations/citation_function_agreement_validation.md)
- [citation context windows](../representations/citation_context_windows.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `xml_xslt_citation_annotation_workbench`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: XML citation annotation tool; XSLT citation workbench; browser citation-function annotation; structured citation annotation interface
