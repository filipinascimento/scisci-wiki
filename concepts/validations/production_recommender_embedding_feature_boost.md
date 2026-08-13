# Production recommender embedding feature boost

## Summary

Production recommender embedding feature boost tests whether scholarly paper embeddings add incremental value inside an existing recommendation system rather than only in a standalone embedding-ranking task.

## Canonical Form

- Unit of analysis: query paper, candidate paper, recommender feature, embedding distance, ranking model, or click event.
- Typical representation: embedding-distance feature added to a production-style baseline with title, author, citation, and reference-overlap features.
- Validation target: determine whether a representation improves a real recommender stack after stronger non-embedding features are already available.
- Empirical signature: the embedding feature improves offline ranking metrics or online clickthrough relative to the baseline system.

## Uses in Science of Science

- Validates [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md) in an applied recommendation setting.
- Complements [SCIDOCS embedding benchmark](scidocs_embedding_benchmark.md), [fixed-embedding transfer evaluation](fixed_embedding_transfer_evaluation.md), and [online scholarly recommender A/B tests](online_scholarly_recommender_ab_tests.md).
- Separates representation quality from the question of whether embeddings add marginal value to an already strong discovery system.

## Operationalization

- Add cosine or L2 embedding distance as one feature in a baseline recommender.
- Keep other production-relevant features such as title similarity, author similarity, reference overlap, and citation overlap in the comparison.
- Evaluate with offline ranking metrics and, where possible, live online tests.
- Report whether the embedding signal helps after controlling for the baseline's existing signals.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) states that their recommendation experiment includes cosine embedding distance as a feature inside an existing recommender with other informative features.
- The paper explicitly frames this as a test of whether embeddings boost a strong baseline on an end task.
- Cohan et al. report that SPECTER improves offline recommendation performance and then test a SPECTER-based recommender in an online A/B study.

## Caveats

- A large standalone embedding-ranking improvement can shrink when embeddings are only one feature in a production model.
- Clickthrough improvement can reflect interface, ranking position, or exposure effects unless the online test is controlled.
- Offline and online recommender gains answer related but distinct validation questions.

## Links

- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [SCIDOCS embedding benchmark](scidocs_embedding_benchmark.md)
- [fixed-embedding transfer evaluation](fixed_embedding_transfer_evaluation.md)
- [online scholarly recommender A/B tests](online_scholarly_recommender_ab_tests.md)
- [propensity-adjusted recommendation evaluation](propensity_adjusted_recommendation_evaluation.md)
- [user-activity paper relatedness labels](../datasets/user_activity_paper_relatedness_labels.md)
- [L2 embedding-distance ranking](../methods/l2_embedding_distance_ranking.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `production_recommender_embedding_feature_boost`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- SciSciNet ID: `W3035324702`
- Aliases: recommender embedding feature boost; incremental embedding feature validation; production-style paper recommender evaluation; embedding marginal value test
