# User-activity paper relatedness labels

## Summary

User-activity paper relatedness labels use co-view, co-read, and clickthrough behavior in scholarly search systems as evidence that papers are related to users in practice.

## Canonical Form

- Unit of analysis: user session, query paper, viewed paper, read paper, clicked recommendation, or candidate ranking.
- Typical representation: paper pairs or ranked candidate lists derived from anonymized interaction logs.
- Mechanism or measurement target: behavioral relatedness that may differ from citation, text, or field-label similarity.
- Empirical signature: papers frequently co-viewed, co-read, or clicked together should be closer in a useful recommendation-oriented embedding space.

## Uses in Science of Science

- Adds a behavioral validation layer for [semantic embeddings](../representations/semantic_embeddings.md) and [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md).
- Helps evaluate paper recommendations and literature navigation tools with user-facing outcomes rather than citation structure alone.
- Provides data for studying how search and recommendation systems shape [attention inequality](../mechanisms/attention_inequality.md).
- Connects offline representation learning to deployed systems that may require [prediction feedback loops](../validations/prediction_feedback_loops.md) audits.

## Operationalization

- Collect anonymized scholarly search, browsing, reading, or recommendation-click logs with privacy safeguards.
- Define session windows and event types such as view, PDF access, or recommendation click.
- Construct paper-pair or ranking tasks with positive user-activity pairs and sampled candidate negatives.
- Rank candidates with a documented distance rule such as [L2 embedding-distance ranking](../methods/l2_embedding_distance_ranking.md) when evaluating frozen embeddings.
- Separate temporal train, validation, and test periods when evaluating recommendation systems.
- Report platform, interface, exposure, and position-bias corrections when possible.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) uses user sessions from a major academic search engine to create co-view and co-read SCIDOCS tasks.
- The paper treats same-session viewing and PDF-access behavior as proxies for paper relatedness, then asks embeddings to rank user-related papers above random candidates.
- Cohan et al. also use public scholarly search clickthrough data for a recommendation task, linking paper embeddings to production recommendation performance.
- This makes user activity a distinct data motif from citation prediction and document classification.

## Caveats

- User-activity logs reflect interface exposure, ranking defaults, popularity, and search-engine user populations.
- Co-view and co-read behavior can indicate comparison, confusion, coursework, or popularity rather than intellectual similarity.
- Privacy, aggregation, and platform access constraints can limit reproducibility.

## Links

- [SCIDOCS embedding benchmark](../validations/scidocs_embedding_benchmark.md)
- [propensity-adjusted recommendation evaluation](../validations/propensity_adjusted_recommendation_evaluation.md)
- [online scholarly recommender A/B tests](../validations/online_scholarly_recommender_ab_tests.md)
- [L2 embedding-distance ranking](../methods/l2_embedding_distance_ranking.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [attention inequality](../mechanisms/attention_inequality.md)
- [prediction feedback loops](../validations/prediction_feedback_loops.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `user_activity_paper_relatedness_labels`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- Aliases: co-view labels; co-read labels; scholarly clickthrough labels; behavioral paper relatedness
