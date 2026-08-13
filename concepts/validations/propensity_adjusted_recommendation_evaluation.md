# Propensity-adjusted recommendation evaluation

## Summary

Propensity-adjusted recommendation evaluation corrects click-based scholarly recommendation metrics for position exposure so ranking quality is not confused with where items were displayed.

## Canonical Form

- Unit of analysis: recommendation impression, ranked position, click, propensity score, or adjusted ranking metric.
- Typical representation: clickthrough test set with position propensities and debiased metrics such as adjusted precision or nDCG.
- Mechanism or measurement target: recommendation relevance after accounting for exposure bias in logged user behavior.
- Empirical signature: scores are divided or reweighted by estimated display-position propensities before comparing recommenders.

## Uses in Science of Science

- Provides a validation layer for scholarly recommender systems built from [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md).
- Helps distinguish real user relevance from interface placement effects in [user-activity paper relatedness labels](../datasets/user_activity_paper_relatedness_labels.md).
- Offers a reusable audit for platform-mediated discovery tools that can concentrate attention.
- Connects offline embedding benchmarks to responsible deployment and [prediction feedback loops](prediction_feedback_loops.md).

## Operationalization

- Log recommendation impressions with positions, clicked items, and candidate sets.
- Estimate position propensities using an experiment or other defensible exposure model.
- Compute ranking metrics after adjusting click scores by the estimated propensity for the displayed position.
- Compare adjusted metrics with unadjusted metrics and report the exposure model.
- Validate whether offline improvements persist in online experiments when possible.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) evaluates a scholarly recommendation task using clickthrough data from a public scholarly search engine.
- The paper notes that clicks on ranked lists are biased toward top positions and estimates position propensities using a swap experiment.
- Cohan et al. report propensity-adjusted precision at rank one and propensity-adjusted nDCG for the recommendation task.
- This makes propensity adjustment a reusable validation motif for logged scholarly recommendation data.

## Caveats

- Propensity estimates depend on the experiment or exposure model used to infer position bias.
- Adjusted clicks still reflect interface, user population, query mix, and popularity effects.
- Offline propensity adjustment should not replace online or quasi-experimental evaluation when recommendations affect attention allocation.

## Links

- [SCIDOCS embedding benchmark](scidocs_embedding_benchmark.md)
- [user-activity paper relatedness labels](../datasets/user_activity_paper_relatedness_labels.md)
- [online scholarly recommender A/B tests](online_scholarly_recommender_ab_tests.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [prediction feedback loops](prediction_feedback_loops.md)
- [attention inequality](../mechanisms/attention_inequality.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `propensity_adjusted_recommendation_evaluation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- Aliases: position-bias adjusted recommendation metrics; propensity-adjusted nDCG; debiased click evaluation; swap-experiment recommendation evaluation
