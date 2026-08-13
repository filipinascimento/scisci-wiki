# Title-abstract/full-text embedding input limit

## Summary

Title-abstract/full-text embedding input limit is the validation caveat that title-abstract embeddings scale well because full text is often unavailable and transformer input windows are limited, but they can miss information available only in the body of a paper.

## Canonical Form

- Unit of analysis: paper text field, title, abstract, full text, transformer input length, or embedding model.
- Typical representation: input-field manifest, title-abstract-only flag, full-text availability audit, or long-document modeling caveat.
- Validation target: decide whether a paper embedding's input fields are adequate for the downstream scientific task.
- Empirical signature: title-abstract embeddings work for broad relatedness tasks but omit methods, data, claims, limitations, and citation contexts from the paper body.

## Uses in Science of Science

- Adds a validation layer to [title-abstract paper embeddings](../representations/title_abstract_paper_embeddings.md) and [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md).
- Helps decide whether concept extraction, mechanism mining, citation-context analysis, or claim validation needs full text rather than front-matter embeddings.
- Supports dataset planning for Dimensions/OpenAlex snapshots where title and abstract coverage is broader than full-text availability.
- Connects embedding design to full-text retrieval and PDF verification workflows in this wiki project.

## Operationalization

- Record which fields were embedded: title only, title plus abstract, title/abstract plus metadata, or full text.
- Audit abstract availability, abstract length, language, and publisher coverage before comparing embedding results across fields or years.
- For full-text models, document chunking, section selection, maximum input length, and how section-level vectors are aggregated.
- Run downstream checks where full text is expected to matter, such as methods matching, citation-context classification, and dataset-use detection.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) uses title and abstract as SPECTER input and notes that additional author and venue fields did not improve their average downstream performance.
- The paper frames full-text input as future work because many academic papers do not have freely available full text.
- Cohan et al. also note that modern language models have strict memory limits on input size, so using entire papers would require additional techniques.
- This makes title-abstract input a practical and validated representation choice for SPECTER, but not a claim that full text is unnecessary for every science-of-science task.

## Caveats

- Title and abstract text can miss methods, datasets, null results, uncertainty, and citation function.
- Abstract norms differ across fields, journals, years, and document types.
- Full-text embeddings are not automatically better unless retrieval, segmentation, licensing, and long-document modeling are handled reproducibly.

## Links

- [title-abstract paper embeddings](../representations/title_abstract_paper_embeddings.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [SciBERT CLS document pooling](../methods/scibert_cls_document_pooling.md)
- [citation-free embedding inference](../methods/citation_free_embedding_inference.md)
- [citation contexts and functions](../representations/citation_contexts.md)
- [citation function classification](../methods/citation_function_classification.md)
- [open access resolver workflows](../methods/open_access_resolver_workflows.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `title_abstract_full_text_embedding_limit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- SciSciNet ID: `W3035324702`
- Aliases: full-text embedding limitation; title-abstract input caveat; transformer input-length limit; front-matter embedding caveat
