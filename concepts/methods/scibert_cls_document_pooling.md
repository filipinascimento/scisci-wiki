# SciBERT CLS document pooling

## Summary

SciBERT CLS document pooling represents a scientific paper by feeding its title and abstract through a SciBERT-style transformer and using the final hidden state of the special CLS token as the document vector.

## Canonical Form

- Unit of analysis: paper, title, abstract, transformer input sequence, CLS token, or pooled document vector.
- Typical representation: fixed-dimensional transformer pooled output used as a paper embedding.
- Method target: convert title and abstract text into a document-level vector with a reproducible pooling rule.
- Empirical signature: the same encoder and preprocessing recipe yields one embedding vector per paper without citation information at inference time.

## Uses in Science of Science

- Supplies the transformer-pooling implementation underneath [title-abstract paper embeddings](../representations/title_abstract_paper_embeddings.md) and SPECTER-style models.
- Provides a baseline against [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md): off-the-shelf SciBERT pooling can be compared with citation-supervised pooling.
- Supports [citation-free embedding inference](citation_free_embedding_inference.md) for uncited or newly published papers.
- Makes model-version and pooling choices explicit when embedding Dimensions, OpenAlex, Semantic Scholar, or local full-text-derived corpora.

## Operationalization

- Concatenate a paper's title and abstract with the transformer special tokens and separator convention.
- Encode the sequence with a documented SciBERT or compatible scientific transformer checkpoint.
- Extract the final hidden state associated with the CLS token as the pooled paper representation.
- Record tokenizer version, maximum sequence length, truncation behavior, missing-abstract handling, and whether citation-supervised fine-tuning has been applied.
- Validate against direct citation, co-citation, topic classification, user-activity, and recommendation tasks.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) initializes SPECTER from SciBERT and encodes the concatenated title and abstract.
- The paper states that the final representation of the CLS token is used as the output representation of the paper.
- Cohan et al. compare off-the-shelf SciBERT document representations with SPECTER and argue that SciBERT's language-modeling objective alone is not sufficient for document-level scholarly tasks.
- This makes CLS pooling a reproducible baseline and implementation detail, while citation-informed training supplies the additional document-relatedness signal.
- The resulting baseline limitation is split out as [off-the-shelf LM document-representation limit](../validations/off_the_shelf_lm_document_representation_limit.md).

## Caveats

- CLS pooling is a modeling convention, not a guarantee that the vector captures the whole paper.
- Token truncation, missing abstracts, and domain mismatch can shift embeddings.
- Off-the-shelf SciBERT pooling should not be treated as equivalent to citation-supervised SPECTER embeddings.
- Input fields should be ablated directly rather than assumed useful; see [paper-embedding input-field ablation](../validations/paper_embedding_input_field_ablation.md).

## Links

- [title-abstract paper embeddings](../representations/title_abstract_paper_embeddings.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [citation-free embedding inference](citation_free_embedding_inference.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [fixed-embedding transfer evaluation](../validations/fixed_embedding_transfer_evaluation.md)
- [off-the-shelf LM document-representation limit](../validations/off_the_shelf_lm_document_representation_limit.md)
- [paper-embedding input-field ablation](../validations/paper_embedding_input_field_ablation.md)
- [SCIDOCS embedding benchmark](../validations/scidocs_embedding_benchmark.md)
- [title-abstract/full-text embedding input limit](../validations/title_abstract_full_text_embedding_limit.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `scibert_cls_document_pooling`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- SciSciNet ID: `W3035324702`
- Aliases: SciBERT CLS pooling; transformer pooled paper embedding; CLS paper vector; SPECTER pooling
