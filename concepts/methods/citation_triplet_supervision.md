# Citation-triplet supervision

## Summary

Citation-triplet supervision trains paper embeddings by making a citing paper closer to a cited paper than to an uncited or less-related paper.

## Canonical Form

- Unit of analysis: query paper, positive cited paper, negative paper, citation edge, or embedding triplet.
- Typical representation: triplet loss over document vectors.
- Mechanism or measurement target: document-level relatedness learned from citation graph structure.
- Empirical signature: citation-related papers move closer in embedding space than negative distractor papers.

## Uses in Science of Science

- Converts [citation networks](../representations/citation_networks.md) into supervision for [semantic embeddings](../representations/semantic_embeddings.md).
- Helps align text representations with scholarly relatedness rather than only lexical overlap.
- Supports recommendation, clustering, literature navigation, duplicate detection, and concept discovery in large paper corpora.

## Operationalization

- Encode each paper from text fields such as title and abstract.
- Construct triplets with a query paper, a cited positive paper, and a negative paper.
- Include hard negatives such as papers cited by the positive paper but not by the query paper.
- Train the encoder so the query-positive distance is smaller than the query-negative distance by a margin, often using [L2 embedding-distance ranking](l2_embedding_distance_ranking.md) as the distance function.
- Version the sampled [Semantic Scholar citation-triplet corpus](../datasets/semantic_scholar_citation_triplet_corpus.md), or the equivalent Dimensions/OpenAlex-derived corpus, because citation snapshots and exclusion rules define the training labels.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) formulates SPECTER training around query, positive, and negative papers.
- The positive paper is cited by the query paper, while the negative is not cited by the query paper; hard negatives are drawn from citation-neighborhood structure.
- Their ablation shows that removing hard negatives reduces downstream performance across SCIDOCS tasks.
- The paper uses L2 distance inside the triplet margin loss and reports that normalized cosine underperformed in their experiments.
- This makes citation-triplet supervision a reusable method motif for combining citation graphs with document-level NLP.
- Verified full-text evidence from the same paper reports a large Semantic Scholar triplet corpus with mixed random and hard negatives, making the sampling design an explicit data-construction step.

## Caveats

- Citation links encode attention, status, field size, and social bias as well as topical relatedness.
- Negative sampling choices can dominate what the embedding learns.
- Citation-triplet training is less direct for fields or periods where citation practices differ strongly.

## Links

- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [hard-negative citation sampling](hard_negative_citation_sampling.md)
- [L2 embedding-distance ranking](l2_embedding_distance_ranking.md)
- [Semantic Scholar citation-triplet corpus](../datasets/semantic_scholar_citation_triplet_corpus.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [citation networks](../representations/citation_networks.md)
- [co-citation](../representations/co_citation.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [SCIDOCS embedding benchmark](../validations/scidocs_embedding_benchmark.md)
- [citation-free embedding inference](citation_free_embedding_inference.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `citation_triplet_supervision`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Aliases: citation triplet loss; hard negative citation sampling; citation-supervised contrastive learning; SPECTER training objective
