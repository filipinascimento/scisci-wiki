# Online scholarly recommender A/B tests

## Summary

Online scholarly recommender A/B tests compare paper recommendation methods in live user-facing systems, measuring whether offline representation gains translate into changed discovery behavior.

## Canonical Form

- Unit of analysis: user, session, recommendation impression, treatment ranker, control ranker, or clickthrough outcome.
- Typical representation: randomized online experiment with treatment assignment, recommendation lists, clicks, and exposure metadata.
- Mechanism or measurement target: real-world literature navigation value of a search or recommendation model.
- Empirical signature: a treatment recommender changes clickthrough, reading, saving, or downstream engagement relative to a production baseline.

## Uses in Science of Science

- Validates whether [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md) improve scholarly discovery in deployment.
- Complements offline [SCIDOCS embedding benchmark](scidocs_embedding_benchmark.md) results and [propensity-adjusted recommendation evaluation](propensity_adjusted_recommendation_evaluation.md).
- Creates an experimental route for testing whether search interfaces broaden or narrow knowledge use.
- Provides evidence for [prediction feedback loops](prediction_feedback_loops.md) audits when recommender systems shape attention.

## Operationalization

- Define treatment and control rankers and randomization units before launch.
- Log impressions, positions, clicks, reads, and eligible candidate sets.
- Monitor guardrail metrics such as latency, diversity, novelty, field coverage, and concentration.
- Analyze clickthrough and engagement with exposure-aware methods.
- Follow up with longer-run attention or citation effects if recommendations are used at scale.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) reports an online A/B test comparing a SPECTER-based similar-paper recommender with an existing production recommender.
- The paper reports that the SPECTER ranker improved clickthrough rate over the baseline in a live dataset of 4,113 clicks.
- This online test complements the paper's offline SCIDOCS evaluation and shows that embedding improvements can matter in a deployed scholarly search setting.
- The motif is especially important because offline relatedness metrics do not fully capture interface behavior or user attention dynamics.

## Caveats

- Clickthrough improvement is not the same as better science, broader discovery, or higher-quality reading.
- Online experiments can amplify popularity, field-size, or interface effects if diversity and novelty are not monitored.
- Short A/B tests may miss long-run consequences for citation concentration, researcher attention, and exploration.

## Links

- [SCIDOCS embedding benchmark](scidocs_embedding_benchmark.md)
- [propensity-adjusted recommendation evaluation](propensity_adjusted_recommendation_evaluation.md)
- [user-activity paper relatedness labels](../datasets/user_activity_paper_relatedness_labels.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [prediction feedback loops](prediction_feedback_loops.md)
- [attention inequality](../mechanisms/attention_inequality.md)
- [online search-browse substitution](../mechanisms/online_search_browse_substitution.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `online_scholarly_recommender_ab_tests`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- Aliases: scholarly recommender online experiment; paper recommendation A/B test; live literature recommender evaluation; online similar-paper test
