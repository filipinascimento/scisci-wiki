# Citation-free embedding inference

## Summary

Citation-free embedding inference uses a citation-supervised encoder to embed new papers from text alone, before those papers have citation histories.

## Canonical Form

- Unit of analysis: new paper, title, abstract, document encoder, or embedding vector.
- Typical representation: fixed paper vector inferred without test-time citation edges.
- Mechanism or measurement target: early semantic placement of papers whose citation networks are immature or unavailable.
- Empirical signature: newly published or uncited papers can be clustered, recommended, or classified using only their text.

## Uses in Science of Science

- Reduces aging bias when building maps or recommendations for recent papers.
- Helps Dimensions/OpenAlex-style fresh snapshots support concept discovery before citation accumulation.
- Connects [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md) to [prediction feedback loops](../validations/prediction_feedback_loops.md), because early recommendations can shape later attention.

## Operationalization

- Train a document encoder with citation-based or other inter-document supervision.
- At inference, pass only the paper title, abstract, or available text through the encoder.
- Store model version, training corpus, input fields, and snapshot date.
- Validate against later citations, topic labels, user activity, recommendation clicks, or expert-neighbor inspection.
- Treat [title-abstract paper embeddings](../representations/title_abstract_paper_embeddings.md) as a specific front-matter implementation of this broader inference motif.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) emphasizes that SPECTER requires only title and abstract at inference time.
- The paper notes that this property is critical for embedding new papers that have not yet been cited.
- SPECTER still benefits from citation-informed training, but the deployed representation does not require citation information for the input paper.
- This motif separates training-time citation supervision from test-time data availability, which matters for current-year literature monitoring.

## Caveats

- Text-only inference can miss relationships visible only in full text, methods, data, or references.
- The model can import biases from the older citation graph even when new papers are embedded without citations.
- Early embeddings should be versioned because model updates can move papers in vector space.

## Links

- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [title-abstract paper embeddings](../representations/title_abstract_paper_embeddings.md)
- [citation-triplet supervision](citation_triplet_supervision.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [SCIDOCS embedding benchmark](../validations/scidocs_embedding_benchmark.md)
- [prediction feedback loops](../validations/prediction_feedback_loops.md)
- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `citation_free_embedding_inference`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Aliases: text-only paper embedding inference; uncited paper embeddings; new-paper embeddings; citation-independent inference
