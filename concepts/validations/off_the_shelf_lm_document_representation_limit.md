# Off-the-shelf LM document-representation limit

## Summary

Off-the-shelf LM document-representation limit is the validation finding that a language model trained only on local text objectives can underperform for whole-paper relatedness tasks unless it is adapted with document-level signals.

## Canonical Form

- Unit of analysis: paper, document embedding, transformer encoder, pretraining objective, downstream task, or baseline model.
- Typical representation: off-the-shelf SciBERT/BERT baseline, citation-supervised embedding comparison, or document-level task gap.
- Validation target: test whether a text-pretrained encoder alone captures scholarly document relatedness.
- Empirical signature: a citation-informed or otherwise document-supervised model outperforms vanilla pooled language-model representations on classification, citation prediction, recommendation, or user-activity tasks.

## Uses in Science of Science

- Qualifies [SciBERT CLS document pooling](../methods/scibert_cls_document_pooling.md) as a reproducible baseline rather than a sufficient scholarly representation.
- Provides a validation layer for [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md) and [citation triplet supervision](../methods/citation_triplet_supervision.md).
- Connects language-only [semantic embeddings](../representations/semantic_embeddings.md) to graph-supervised scholarly representations.
- Helps design embedding pipelines for OpenAlex, Dimensions, Semantic Scholar, and local full-text corpora by distinguishing text input from document-relatedness supervision.

## Operationalization

- Encode title and abstract with a documented off-the-shelf scientific language model and pooling rule.
- Train or evaluate a document-level model with inter-document supervision such as citation links, co-citation, co-read, co-view, or user activity.
- Compare models on held-out document-level tasks without leaking evaluation citations or user labels into training.
- Report whether citation or graph signals are used during training, inference, or both.
- Treat off-the-shelf embeddings as baselines that require downstream validation rather than as default ground truth.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) states that simply passing title and abstract to an off-the-shelf scientific language model does not yield accurate paper representations.
- The paper explains that SciBERT-style language modeling objectives predict nearby words or sentences within a document and do not incorporate global inter-document information.
- Cohan et al. report that removing the citation-based pretraining objective and using vanilla SciBERT decreases performance on all SCIDOCS tasks.
- This supports a general validation rule: document-level scholarly embeddings need document-level supervision or task evidence, not only token-level pretraining.

## Caveats

- Newer language models may reduce this gap, so the validation should be rerun by model family and task.
- Some tasks depend mainly on topic text and may need less graph supervision.
- Citation-informed training can import citation-network biases and should be audited for field, age, language, and popularity effects.

## Links

- [SciBERT CLS document pooling](../methods/scibert_cls_document_pooling.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [citation triplet supervision](../methods/citation_triplet_supervision.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [SCIDOCS embedding benchmark](scidocs_embedding_benchmark.md)
- [fixed-embedding transfer evaluation](fixed_embedding_transfer_evaluation.md)
- [title-abstract paper embeddings](../representations/title_abstract_paper_embeddings.md)
- [paper-embedding input-field ablation](paper_embedding_input_field_ablation.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `off_the_shelf_lm_document_representation_limit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- SciSciNet ID: `W3035324702`
- Aliases: vanilla LM document-embedding limit; off-the-shelf SciBERT limit; language-only paper embedding caveat; token-objective document gap
