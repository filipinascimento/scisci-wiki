# Citation parser reference-list precondition

## Summary

Citation parser reference-list precondition is the requirement that reference lists be parsed accurately before citation markers and author-name referents can be reliably annotated in running text.

## Canonical Form

- Unit of analysis: source article, reference-list item, in-text citation marker, cited-author mention, or citation parser output.
- Typical representation: reference parser, XML markup, citation-recognition rate, or parser-quality gate.
- Validation target: expose upstream parsing quality as a dependency of citation-function classification.
- Empirical signature: citation recognition performance is reported conditional on an error-free reference list.

## Uses in Science of Science

- Qualifies [citation contexts and functions](../representations/citation_contexts.md) and [citation context windows](../representations/citation_context_windows.md).
- Supports [author-name citation-referent annotation](../methods/author_name_citation_referent_annotation.md) and [citation function classification](../methods/citation_function_classification.md).
- Helps distinguish NLP model errors from upstream full-text parsing errors in citation-function pipelines.

## Operationalization

- Parse reference-list entries before extracting in-text citation contexts.
- Validate citation marker recognition and cited-author markup on a sample of documents.
- Report parser performance separately from classifier performance.
- Add a fallback or exclusion rule for documents whose references fail parsing.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) describes transforming computational-linguistics articles into XML and automatically marking titles, authors, headlines, and reference-list items.
- The paper parses reference lists with regular patterns and uses the citation parser to mark citations and author names in running text.
- Teufel et al. report high citation-recognition accuracy conditional on the reference list being error-free.

## Caveats

- Reference-list errors can propagate into wrong citation contexts, wrong cited works, and wrong author-name referents.
- Parser performance can vary by venue, citation style, document format, and OCR quality.
- Downstream citation-role labels should preserve parser uncertainty when possible.

## Links

- [citation contexts and functions](../representations/citation_contexts.md)
- [citation context windows](../representations/citation_context_windows.md)
- [author-name citation-referent annotation](../methods/author_name_citation_referent_annotation.md)
- [citation function classification](../methods/citation_function_classification.md)
- [citation-aware search and summarization](../methods/citation_aware_search_summarization.md)
- [citation role attachment error analysis](citation_role_attachment_error_analysis.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_parser_reference_list_precondition`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: reference-list parser precondition; citation parser quality gate; citation-marker parsing dependency; reference parsing validation
