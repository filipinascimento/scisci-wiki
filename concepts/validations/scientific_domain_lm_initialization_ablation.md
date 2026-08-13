# Scientific-domain LM initialization ablation

## Summary

Scientific-domain LM initialization ablation tests whether a transformer pretrained on scientific text improves scholarly embeddings relative to a larger general-domain language model.

## Canonical Form

- Unit of analysis: language-model initializer, citation-supervised encoder, benchmark task, or ablation row.
- Typical representation: model ablation comparing scientific-domain initialization with general-domain initialization.
- Validation target: separate the value of domain-specific language pretraining from the value of citation-supervised fine-tuning.
- Empirical signature: the scientific-domain initializer performs better under the same downstream citation-supervised training recipe.

## Uses in Science of Science

- Qualifies [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md) by exposing the base-language-model choice.
- Extends [SciBERT CLS document pooling](../methods/scibert_cls_document_pooling.md) from a modeling choice to a tested ablation.
- Pairs with [off-the-shelf LM document-representation limit](off_the_shelf_lm_document_representation_limit.md) and [paper-embedding input-field ablation](paper_embedding_input_field_ablation.md).

## Operationalization

- Hold the architecture, input fields, training data, loss, and evaluation tasks as constant as possible.
- Swap the scientific-domain initializer for a general-domain initializer.
- Report benchmark-wide and task-specific changes.
- Track whether domain-specific initialization improves both text-heavy and graph-related tasks.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) compares SPECTER initialized from SciBERT with a variant started from BERT-Large.
- The paper reports that using a strong general-domain BERT-Large model instead of SciBERT reduces performance considerably.
- Cohan et al. interpret the result as reasonable because SciBERT is pretrained on scientific text.

## Caveats

- Domain initialization can interact with tokenizer, corpus, architecture size, and citation-supervised training data.
- A stronger general-domain model may still win if scale, architecture, or fine-tuning differs substantially.
- This ablation does not prove that scientific-domain text alone is sufficient for document-level representation quality.

## Links

- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [SciBERT CLS document pooling](../methods/scibert_cls_document_pooling.md)
- [off-the-shelf LM document-representation limit](off_the_shelf_lm_document_representation_limit.md)
- [paper-embedding input-field ablation](paper_embedding_input_field_ablation.md)
- [title-abstract paper embeddings](../representations/title_abstract_paper_embeddings.md)
- [SCIDOCS embedding benchmark](scidocs_embedding_benchmark.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `scientific_domain_lm_initialization_ablation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- SciSciNet ID: `W3035324702`
- Aliases: scientific language model initializer; domain-specific LM ablation; SciBERT versus BERT initialization; scholarly LM initialization test
