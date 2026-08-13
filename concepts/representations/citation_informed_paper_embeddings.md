# Citation-informed paper embeddings

## Summary

Citation-informed paper embeddings encode a paper's title and abstract as a vector while using citation links during training to shape the representation space.

## Canonical Form

- Unit of analysis: paper, abstract, title, citation edge, or candidate related-paper pair.
- Typical representation: document embedding from a transformer or neural encoder trained with citation-derived supervision.
- Mechanism or measurement target: semantic relatedness aligned with citation neighborhoods and scholarly retrieval tasks.
- Empirical signature: papers that cite each other, are co-cited, or are useful recommendations should lie closer in embedding space.

## Uses in Science of Science

- Improves paper-level similarity for clustering, recommendation, duplicate detection, and concept extraction.
- Bridges [semantic embeddings](semantic_embeddings.md) and citation representations such as [citation networks](citation_networks.md), [co-citation](co_citation.md), and [bibliographic coupling](bibliographic_coupling.md).
- Useful for building this wiki because it can cluster new papers before their citation histories mature.
- Connects training-time graph supervision with [title-abstract paper embeddings](title_abstract_paper_embeddings.md), so fresh records can be embedded even when only front-matter metadata is available.

## Operationalization

- Train or use a document encoder on title and abstract text.
- Use citation links, co-citations, or triplets as supervision so related papers are close and unrelated papers are farther apart.
- At inference, generate embeddings from text alone for new or uncited papers.
- Validate with [direct-citation embedding ranking task](../validations/direct_citation_embedding_ranking_task.md), [co-citation embedding ranking task](../validations/co_citation_embedding_ranking_task.md), classification, recommendation, and nearest-neighbor inspection.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) introduces SPECTER, a document-level representation model for scientific papers using citation-informed transformer training.
- The paper trains on title and abstract text with a citation-derived triplet-loss objective, then uses the resulting embeddings across downstream scholarly tasks.
- A key validation motif is that SPECTER does not require citation information at inference time, so it can embed newly published papers while still benefiting from citation-supervised training.
- Cohan et al. evaluate the representations on tasks including topic classification, citation prediction, co-citation prediction, recommendation, and user-activity relatedness.
- Their SCIDOCS benchmark and ablations separate the training objective, test-time inference constraint, and downstream validation suite.
- The same full text makes implementation choices explicit: SciBERT CLS pooling over title and abstract, L2 distance for triplet training and ranking tasks, and a title-abstract/full-text input limit.
- The same full text supplies narrower motifs for the title-abstract input, citation-triplet training corpus, hard-negative sampling, fixed-embedding transfer evaluation, propensity-adjusted recommendation metrics, and online recommender testing.
- Additional Cohan et al. evidence separates deployment and evaluation caveats: embeddings can be tested as incremental recommender features, graph baselines need test-time citation leakage controls, domain-specific language-model initialization matters, and portable fixed embeddings can be compared against task-specific fine-tuning.

## Caveats

- Citation supervision can import citation biases, field-size effects, and status effects into the embedding space.
- Title and abstract embeddings miss methods, claims, data, and negative results found only in full text.
- Model version, training corpus, and preprocessing should be tracked before using embeddings for longitudinal comparisons.
- Evaluation should document graph-edge availability and whether embeddings are used alone or as features inside a stronger recommender.

## Links

- [semantic embeddings](semantic_embeddings.md)
- [title-abstract paper embeddings](title_abstract_paper_embeddings.md)
- [title-abstract/full-text embedding input limit](../validations/title_abstract_full_text_embedding_limit.md)
- [SciBERT CLS document pooling](../methods/scibert_cls_document_pooling.md)
- [citation networks](citation_networks.md)
- [co-citation](co_citation.md)
- [bibliographic coupling](bibliographic_coupling.md)
- [citation-triplet supervision](../methods/citation_triplet_supervision.md)
- [L2 embedding-distance ranking](../methods/l2_embedding_distance_ranking.md)
- [hard-negative citation sampling](../methods/hard_negative_citation_sampling.md)
- [citation-free embedding inference](../methods/citation_free_embedding_inference.md)
- [Semantic Scholar citation-triplet corpus](../datasets/semantic_scholar_citation_triplet_corpus.md)
- [user-activity paper relatedness labels](../datasets/user_activity_paper_relatedness_labels.md)
- [SCIDOCS embedding benchmark](../validations/scidocs_embedding_benchmark.md)
- [direct-citation embedding ranking task](../validations/direct_citation_embedding_ranking_task.md)
- [co-citation embedding ranking task](../validations/co_citation_embedding_ranking_task.md)
- [fixed-embedding transfer evaluation](../validations/fixed_embedding_transfer_evaluation.md)
- [propensity-adjusted recommendation evaluation](../validations/propensity_adjusted_recommendation_evaluation.md)
- [online scholarly recommender A/B tests](../validations/online_scholarly_recommender_ab_tests.md)
- [production recommender embedding feature boost](../validations/production_recommender_embedding_feature_boost.md)
- [test-time citation graph leakage control](../validations/test_time_citation_graph_leakage_control.md)
- [task-specific fine-tuning portability check](../validations/task_specific_finetuning_portability_check.md)
- [scientific-domain LM initialization ablation](../validations/scientific_domain_lm_initialization_ablation.md)
- [weak-relatedness hard-negative sampling](../methods/weak_relatedness_hard_negative_sampling.md)
- [topic models](../methods/topic_models.md)
- [science maps](science_maps.md)
- [scientific discovery prediction](../methods/scientific_discovery_prediction.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `citation_informed_paper_embeddings`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Aliases: SPECTER embeddings; citation-supervised embeddings; paper representation learning; scholarly document embeddings
