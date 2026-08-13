# SCIDOCS embedding benchmark

## Summary

The SCIDOCS embedding benchmark evaluates scientific paper embeddings across document-level classification, citation, user-activity, and recommendation tasks.

## Canonical Form

- Unit of analysis: paper embedding model, benchmark task, held-out paper pair, recommendation query, or class label.
- Typical representation: task suite with classification, ranking, citation-prediction, and recommendation metrics.
- Mechanism or measurement target: whether a scholarly embedding captures useful document-level relatedness beyond a single task.
- Empirical signature: embeddings that perform well across tasks are less likely to be overfit to one notion of paper similarity.

## Uses in Science of Science

- Provides a validation layer for [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md) and [semantic embeddings](../representations/semantic_embeddings.md).
- Separates representation quality from a single downstream application such as citation prediction.
- Helps decide which embedding model should be used for concept discovery, paper clustering, reviewer matching, or recommendation.

## Operationalization

- Evaluate fixed paper embeddings across multiple scientific-document tasks.
- Include classification labels, [direct-citation embedding ranking task](direct_citation_embedding_ranking_task.md), [co-citation embedding ranking task](co_citation_embedding_ranking_task.md), user activity, and recommendation tasks where possible.
- Report ranking metrics such as MAP, nDCG, or precision at top ranks along with classification metrics such as macro F1.
- Compare against lexical, transformer, citation-mining, and graph-learning baselines.
- Keep user-activity labels, clickthrough recommendation labels, and propensity-adjusted recommendation metrics distinct because they answer different validation questions.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) introduces SCIDOCS as a seven-task benchmark for document-level scientific paper embeddings.
- The task suite includes document classification, user activity prediction, citation prediction, co-citation prediction, and paper recommendation.
- The citation and co-citation tasks use L2 distances between frozen embeddings to rank held-out candidate papers.
- SPECTER improves average performance over competitive baselines in their reported benchmark and is also evaluated in an online recommendation A/B test.
- The paper's ablations use SCIDOCS to show that citation-based pretraining and hard negatives contribute to performance.
- The benchmark also illustrates frozen-feature transfer: SPECTER embeddings are plugged into multiple downstream tasks without task-specific encoder fine-tuning.
- Additional benchmark evidence supports [task-specific fine-tuning portability check](task_specific_finetuning_portability_check.md), [scientific-domain LM initialization ablation](scientific_domain_lm_initialization_ablation.md), [production recommender embedding feature boost](production_recommender_embedding_feature_boost.md), and [test-time citation graph leakage control](test_time_citation_graph_leakage_control.md) as narrower validation motifs.

## Caveats

- Benchmark tasks reflect available labels and platform behavior, not every scholarly use case.
- Recommendation and user-activity labels can encode popularity, interface exposure, and field-size effects.
- A model that performs well on SCIDOCS still needs domain-specific validation before being used for evaluation or policy decisions.

## Links

- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [citation-triplet supervision](../methods/citation_triplet_supervision.md)
- [citation-free embedding inference](../methods/citation_free_embedding_inference.md)
- [hard-negative citation sampling](../methods/hard_negative_citation_sampling.md)
- [L2 embedding-distance ranking](../methods/l2_embedding_distance_ranking.md)
- [direct-citation embedding ranking task](direct_citation_embedding_ranking_task.md)
- [co-citation embedding ranking task](co_citation_embedding_ranking_task.md)
- [user-activity paper relatedness labels](../datasets/user_activity_paper_relatedness_labels.md)
- [propensity-adjusted recommendation evaluation](propensity_adjusted_recommendation_evaluation.md)
- [fixed-embedding transfer evaluation](fixed_embedding_transfer_evaluation.md)
- [online scholarly recommender A/B tests](online_scholarly_recommender_ab_tests.md)
- [production recommender embedding feature boost](production_recommender_embedding_feature_boost.md)
- [test-time citation graph leakage control](test_time_citation_graph_leakage_control.md)
- [task-specific fine-tuning portability check](task_specific_finetuning_portability_check.md)
- [scientific-domain LM initialization ablation](scientific_domain_lm_initialization_ablation.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [scientific discovery prediction](../methods/scientific_discovery_prediction.md)
- [citation metric gaming](citation_metric_gaming.md)
- [prediction feedback loops](prediction_feedback_loops.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `scidocs_embedding_benchmark`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Aliases: SCIDOCS; scientific document embedding evaluation; scholarly embedding benchmark; paper embedding task suite
