# Paper-embedding input-field ablation

## Summary

Paper-embedding input-field ablation tests which metadata or text fields improve scholarly document embeddings and which fields add noise or sparsity.

## Canonical Form

- Unit of analysis: paper, input field, embedding model, ablation condition, downstream task, or metadata source.
- Typical representation: title-only, title-plus-abstract, author-added, venue-added, full-text-added, or citation-added ablation table.
- Validation target: determine whether a field improves document-level representations for the intended task.
- Empirical signature: removing or adding fields changes downstream benchmark performance, revealing which information sources are useful versus noisy.

## Uses in Science of Science

- Provides a validation layer for [title-abstract paper embeddings](../representations/title_abstract_paper_embeddings.md).
- Complements [title-abstract/full-text embedding input limit](title_abstract_full_text_embedding_limit.md) by separating practical field choices from the broader limitation that full text may contain missing evidence.
- Connects embedding design to [SciBERT CLS document pooling](../methods/scibert_cls_document_pooling.md), [fixed-embedding transfer evaluation](fixed_embedding_transfer_evaluation.md), and [SCIDOCS embedding benchmark](scidocs_embedding_benchmark.md).
- Helps decide whether Dimensions/OpenAlex metadata fields such as authors, venues, concepts, references, or abstracts should be included in a representation pipeline.

## Operationalization

- Define a base document input, commonly title plus abstract.
- Add or remove one field at a time, such as abstract, author names, venue name, keywords, references, or full text.
- Keep model, training data, and evaluation tasks fixed across ablation conditions.
- Report average performance and task-specific performance because a field can help classification but hurt recommendation or citation tasks.
- Inspect whether poor performance reflects sparsity, normalization, tokenization, missingness, leakage, or domain mismatch.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) ablates SPECTER input fields and reports that removing the abstract and using title only substantially decreases average performance.
- The paper reports that adding author names hurts performance, with possible explanations including author sparsity and WordPiece tokenization of out-of-vocabulary names.
- Cohan et al. also report that adding venue metadata slightly decreases average performance, although venue can correlate with topics in classification.
- The paper notes that avoiding author and venue inputs helps when metadata are unavailable or anonymized, such as reviewer matching for anonymized submissions or recommendations for anonymized preprints.

## Caveats

- Ablation results are model-, corpus-, and benchmark-specific.
- Metadata normalization can change the usefulness of venue, author, affiliation, and field labels.
- A field that hurts average benchmark performance can still be valuable for a specialized downstream task.

## Links

- [title-abstract paper embeddings](../representations/title_abstract_paper_embeddings.md)
- [title-abstract/full-text embedding input limit](title_abstract_full_text_embedding_limit.md)
- [SciBERT CLS document pooling](../methods/scibert_cls_document_pooling.md)
- [off-the-shelf LM document-representation limit](off_the_shelf_lm_document_representation_limit.md)
- [fixed-embedding transfer evaluation](fixed_embedding_transfer_evaluation.md)
- [SCIDOCS embedding benchmark](scidocs_embedding_benchmark.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `paper_embedding_input_field_ablation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- SciSciNet ID: `W3035324702`
- Aliases: embedding input ablation; paper-field ablation; title abstract author venue ablation; scholarly embedding field sensitivity
