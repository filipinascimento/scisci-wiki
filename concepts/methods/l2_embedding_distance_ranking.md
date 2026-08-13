# L2 embedding-distance ranking

## Summary

L2 embedding-distance ranking orders candidate papers by Euclidean distance between fixed embedding vectors, treating closer vectors as more related.

## Canonical Form

- Unit of analysis: query embedding, candidate embedding, paper pair, distance score, or ranked candidate list.
- Typical representation: L2 distance matrix, nearest-neighbor ranking, triplet-loss distance, or candidate ranking by vector distance.
- Method target: evaluate or use paper embeddings without adding a task-specific learned ranker.
- Empirical signature: positive relatedness labels rank above negative candidates when their embedding distances to the query are smaller.

## Uses in Science of Science

- Provides the scoring rule for [direct-citation embedding ranking task](../validations/direct_citation_embedding_ranking_task.md), [co-citation embedding ranking task](../validations/co_citation_embedding_ranking_task.md), and user-activity ranking tasks.
- Makes the distance function in [citation-triplet supervision](citation_triplet_supervision.md) explicit.
- Supports reproducible nearest-neighbor search for [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md), concept discovery, and paper clustering.
- Offers a simple baseline before adding supervised recommender or classifier heads.

## Operationalization

- Generate fixed embedding vectors for query and candidate papers using the same model and preprocessing recipe.
- Compute Euclidean distance between each query and candidate vector.
- Sort candidates by ascending distance and score the ranking with task-appropriate metrics.
- For training, use the same distance inside a margin loss if the model objective is distance-based.
- Compare with cosine distance or normalized variants when vector norms encode unwanted artifacts.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) uses L2 norm distance in the SPECTER triplet margin loss.
- The paper reports that normalized cosine distance underperformed the L2 loss in their experiments.
- Cohan et al. also evaluate direct-citation, co-citation, co-view, and co-read tasks by comparing L2 distances between raw embeddings, without extra trainable parameters.
- This makes L2 distance both a training component and a frozen-embedding evaluation rule in the SPECTER workflow.

## Caveats

- L2 distance is sensitive to vector scale; model versions and normalization rules should be documented.
- A simple distance ranking may underperform a supervised ranker on a specific task.
- Distance metrics can encode training-corpus biases and should be audited by field, document type, and time.

## Links

- [citation-triplet supervision](citation_triplet_supervision.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [direct-citation embedding ranking task](../validations/direct_citation_embedding_ranking_task.md)
- [co-citation embedding ranking task](../validations/co_citation_embedding_ranking_task.md)
- [SCIDOCS embedding benchmark](../validations/scidocs_embedding_benchmark.md)
- [fixed-embedding transfer evaluation](../validations/fixed_embedding_transfer_evaluation.md)
- [user-activity paper relatedness labels](../datasets/user_activity_paper_relatedness_labels.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `l2_embedding_distance_ranking`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- SciSciNet ID: `W3035324702`
- Aliases: Euclidean embedding ranking; L2 paper similarity; embedding distance ranking; raw-vector L2 ranking
