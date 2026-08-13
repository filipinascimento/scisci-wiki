# Semantic embeddings

## Summary

Semantic embeddings encode papers, abstracts, claims, concepts, or fields as vectors so similarity, clustering, retrieval, and change can be measured in a continuous representation space.

## Canonical Form

- Unit of analysis: text spans, abstracts, full papers, claims, references, topics, or concepts.
- Typical representation: vector embedding plus nearest-neighbor graph or projection.
- Mechanism or measurement target: semantic proximity, conceptual novelty, field movement, and retrieval relevance.
- Empirical signature: nearby vectors share topics, methods, or citation neighborhoods.

## Uses in Science of Science

- Useful for concept extraction from full text and linking pages in this wiki.
- Complements citation-based maps by capturing uncited semantic relationships.
- Supports clustering, duplicate detection, paper recommendation, and novelty measures.

## Operationalization

- Inputs: titles, abstracts, full text, citation contexts, metadata, or reference neighborhoods.
- Measures: cosine similarity, cluster membership, centroid drift, semantic distance, nearest neighbors.
- Common model forms: TF-IDF/SVD, doc2vec, transformer embeddings, citation-informed models such as SPECTER.

## Evidence and Validations

- Citation-informed paper embeddings are a strong baseline for scholarly retrieval and clustering.
- Verified full-text evidence from Cohan et al. (2020) shows SPECTER learning scientific-paper representations from title/abstract text plus citation-derived triplet supervision, with inference that does not require a paper to already have citations.
- The SPECTER paper validates embeddings against downstream scholarly tasks, making citation-informed transformers a representation motif that bridges semantic similarity and citation neighborhoods.
- Verified full-text evidence from Liu et al. (2021) uses work-level embeddings and node embeddings to trace career trajectories, showing how vector spaces can support longitudinal career mechanisms as well as retrieval.

## Caveats

- Embeddings can encode field and language biases and may hide the reason for similarity.
- Version, corpus, preprocessing, and model choice should be recorded for reproducibility.

## Links

- [topic models](../methods/topic_models.md)
- [citation-informed paper embeddings](citation_informed_paper_embeddings.md)
- [title-abstract paper embeddings](title_abstract_paper_embeddings.md)
- [citation-triplet supervision](../methods/citation_triplet_supervision.md)
- [citation-free embedding inference](../methods/citation_free_embedding_inference.md)
- [SCIDOCS embedding benchmark](../validations/scidocs_embedding_benchmark.md)
- [document-topic mixtures](document_topic_mixtures.md)
- [career work embedding trajectories](../methods/career_work_embedding_trajectories.md)
- [science maps](../representations/science_maps.md)
- [novelty conventionality](../mechanisms/novelty_conventionality.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]
- Liu, L., Dehmamy, N., Chown, J., Giles, C. L., & Wang, D. (2021). Understanding the onset of hot streaks across artistic, cultural, and scientific careers. *Nature Communications*, 12, 5392. https://doi.org/10.1038/s41467-021-25477-8 [OpenAlex: W3201257425; Dimensions: pub.1141075911; WoS: unknown]
- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]

## Metadata

- Concept ID: `semantic_embeddings`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Liu et al. (2021) (2021)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Aliases: text embeddings; paper embeddings; citation-informed embeddings; career work embeddings
