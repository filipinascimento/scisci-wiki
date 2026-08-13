# Fixed-embedding transfer evaluation

## Summary

Fixed-embedding transfer evaluation tests whether a paper embedding can be reused as a frozen feature across many scholarly tasks without task-specific encoder fine-tuning.

## Canonical Form

- Unit of analysis: embedding model, downstream task, frozen vector, classifier, ranker, or benchmark result.
- Typical representation: one embedding table evaluated across classification, citation prediction, user-activity, and recommendation tasks.
- Mechanism or measurement target: general-purpose document relatedness rather than task-specific memorization.
- Empirical signature: the same fixed embeddings perform competitively across heterogeneous downstream tasks.

## Uses in Science of Science

- Separates reusable [semantic embeddings](../representations/semantic_embeddings.md) from task-specific predictors.
- Supports large-scale concept discovery because embeddings can be generated once and reused for clustering, search, and audits.
- Provides a validation strategy for [title-abstract paper embeddings](../representations/title_abstract_paper_embeddings.md) and [citation-free embedding inference](../methods/citation_free_embedding_inference.md).
- Helps benchmark whether citation-supervised training adds value beyond end-task fine-tuning.

## Operationalization

- Generate a fixed embedding vector for each paper using a documented encoder and input fields.
- Keep the encoder frozen for downstream benchmark tasks.
- Use simple task heads or distance functions such as [L2 embedding-distance ranking](../methods/l2_embedding_distance_ranking.md) so the evaluation primarily tests embedding quality.
- Compare against text-only, graph-only, citation-mining, and task-specific fine-tuned baselines.
- Report task-level and average metrics, not only a single aggregate score.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) evaluates SPECTER embeddings as fixed features across the SCIDOCS task suite.
- The paper emphasizes that SPECTER is not further fine-tuned on the SCIDOCS tasks when plugged into downstream evaluations.
- Cohan et al. also compare against SciBERT models fine-tuned on task-specific co-view, co-read, co-citation, and multitask signals; the fixed SPECTER embeddings perform better on their reported average.
- Their citation, co-citation, co-view, and co-read tasks rank candidates by raw embedding distance without additional trainable parameters.
- This makes frozen transfer evaluation a distinct validation motif for reusable scholarly representations.

## Caveats

- Fixed-vector performance can hide subgroup, field, or document-type failures.
- A simple frozen-feature benchmark may understate the best possible end-task performance from larger fine-tuned systems.
- Reuse should track embedding model version, source snapshot, and preprocessing so benchmark results remain interpretable.

## Links

- [SCIDOCS embedding benchmark](scidocs_embedding_benchmark.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [citation-free embedding inference](../methods/citation_free_embedding_inference.md)
- [title-abstract paper embeddings](../representations/title_abstract_paper_embeddings.md)
- [L2 embedding-distance ranking](../methods/l2_embedding_distance_ranking.md)
- [direct-citation embedding ranking task](direct_citation_embedding_ranking_task.md)
- [co-citation embedding ranking task](co_citation_embedding_ranking_task.md)
- [hard-negative citation sampling](../methods/hard_negative_citation_sampling.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [prediction feedback loops](prediction_feedback_loops.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `fixed_embedding_transfer_evaluation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- Aliases: frozen embedding evaluation; feature-based paper embedding transfer; no-fine-tuning embedding benchmark; reusable embedding validation
