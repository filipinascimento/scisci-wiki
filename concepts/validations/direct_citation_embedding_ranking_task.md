# Direct-citation embedding ranking task

## Summary

Direct-citation embedding ranking task evaluates whether paper embeddings place a query paper closer to papers it cites than to uncited candidate papers.

## Canonical Form

- Unit of analysis: query paper, cited candidate, uncited candidate, embedding vector, or ranked candidate list.
- Typical representation: held-out citation-ranking task scored with MAP, nDCG, precision, or recall at rank.
- Validation target: test whether a document embedding recovers observed direct citation links without using trainable task-specific parameters.
- Empirical signature: cited candidates are ranked above randomly sampled uncited candidates by embedding distance.

## Uses in Science of Science

- Provides a citation-structure validation for [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md).
- Splits one component of [SCIDOCS embedding benchmark](scidocs_embedding_benchmark.md) into a reusable task design.
- Complements [co-citation embedding ranking task](co_citation_embedding_ranking_task.md), [user-activity paper relatedness labels](../datasets/user_activity_paper_relatedness_labels.md), and recommendation evaluation.
- Helps diagnose whether embeddings capture direct reference behavior rather than only topical class labels.

## Operationalization

- Hold out query papers and their observed cited papers from the embedding-training supervision.
- For each query, construct a candidate set with cited positives and sampled uncited negatives.
- Rank candidates by a documented distance function such as [L2 embedding-distance ranking](../methods/l2_embedding_distance_ranking.md).
- Report ranking metrics and compare against text-only, graph-only, and citation-supervised baselines.
- Audit whether citation age, field, document type, or missing citation links change results.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) defines a SCIDOCS direct-citation task in which a model ranks cited papers above uncited candidate papers.
- The paper describes roughly 1,000 query papers, up to five cited papers, and 25 randomly selected uncited candidates per query from a held-out pool.
- Cohan et al. evaluate this task by comparing L2 distances between raw embeddings, without additional trainable parameters.
- This makes direct-citation ranking a frozen-embedding validation task rather than a separate citation-prediction model.

## Caveats

- Direct citation is an imperfect relatedness label because citations can be perfunctory, negative, missing, delayed, or status-biased.
- Random uncited negatives can make the task easier than real literature navigation unless hard candidate sets are also tested.
- Citation links are time-dependent; a paper not cited at the snapshot date may be cited later.

## Links

- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [SCIDOCS embedding benchmark](scidocs_embedding_benchmark.md)
- [co-citation embedding ranking task](co_citation_embedding_ranking_task.md)
- [L2 embedding-distance ranking](../methods/l2_embedding_distance_ranking.md)
- [fixed-embedding transfer evaluation](fixed_embedding_transfer_evaluation.md)
- [citation-triplet supervision](../methods/citation_triplet_supervision.md)
- [citation networks](../representations/citation_networks.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `direct_citation_embedding_ranking_task`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- SciSciNet ID: `W3035324702`
- Aliases: direct citation prediction task; SCIDOCS citation ranking; cited-paper ranking; embedding citation prediction
