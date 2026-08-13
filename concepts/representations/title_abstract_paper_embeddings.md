# Title-abstract paper embeddings

## Summary

Title-abstract paper embeddings represent scholarly documents as vectors using only the paper title and abstract, making large-scale semantic mapping possible even when full text is unavailable.

## Canonical Form

- Unit of analysis: paper, title, abstract, metadata snapshot, or embedding vector.
- Typical representation: dense vector from a document encoder applied to the concatenated title and abstract.
- Mechanism or measurement target: compact semantic content that can support paper similarity, clustering, recommendation, and classification.
- Empirical signature: embeddings preserve enough document-level signal to recover topics, citation neighborhoods, user-activity relatedness, or recommendation relevance.

## Uses in Science of Science

- Provides a practical representation for fresh Dimensions/OpenAlex snapshots where title and abstract coverage is broader than full-text coverage.
- Supports [citation-free embedding inference](../methods/citation_free_embedding_inference.md) for new papers before citations accumulate.
- Offers a scalable input format for [semantic embeddings](semantic_embeddings.md), [science maps](science_maps.md), and concept discovery workflows.
- Helps separate what can be inferred from paper front matter from what requires full-text claims, methods, data, or citation contexts.

## Operationalization

- Extract title and abstract from a stable bibliographic snapshot.
- Normalize missing abstracts, language, truncation, and duplicate records before embedding.
- Encode title plus abstract with a documented model version and preprocessing recipe.
- Store the embedding date, source snapshot, text fields used, and model identifier.
- Validate neighbors and downstream tasks against citation, topic, user-activity, or expert labels.
- Run [paper-embedding input-field ablation](../validations/paper_embedding_input_field_ablation.md) before adding author, venue, reference, or full-text fields.
- Record [title-abstract/full-text embedding input limit](../validations/title_abstract_full_text_embedding_limit.md) when the downstream task may require claims, methods, datasets, or citation contexts from the body of the paper.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) builds SPECTER embeddings from a paper's title and abstract, using SciBERT initialization and citation-informed training.
- The paper reports that title-only input performs worse than title-plus-abstract input, while adding author or venue metadata does not improve average downstream performance in their ablation.
- Cohan et al. explicitly frame full-text input as future work because full text is often unavailable and transformer input-length limits require additional modeling choices.
- This makes title-abstract embeddings a reusable compromise between metadata-only science maps and full-text representations.

## Caveats

- Titles and abstracts omit methods, datasets, limitations, negative results, and many citation-context functions.
- Abstract availability and quality differ across fields, years, publishers, and document types.
- Changing the embedding model or source snapshot can move papers in vector space, so longitudinal work needs versioned embeddings.

## Links

- [semantic embeddings](semantic_embeddings.md)
- [citation-informed paper embeddings](citation_informed_paper_embeddings.md)
- [paper-embedding input-field ablation](../validations/paper_embedding_input_field_ablation.md)
- [title-abstract/full-text embedding input limit](../validations/title_abstract_full_text_embedding_limit.md)
- [SciBERT CLS document pooling](../methods/scibert_cls_document_pooling.md)
- [citation-free embedding inference](../methods/citation_free_embedding_inference.md)
- [hard-negative citation sampling](../methods/hard_negative_citation_sampling.md)
- [SCIDOCS embedding benchmark](../validations/scidocs_embedding_benchmark.md)
- [topic models](../methods/topic_models.md)
- [science maps](science_maps.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `title_abstract_paper_embeddings`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- Aliases: title and abstract embeddings; front-matter paper embeddings; title-abstract document vectors; abstract-based paper embeddings
