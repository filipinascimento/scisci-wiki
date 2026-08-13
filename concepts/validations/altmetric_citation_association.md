# Altmetric-citation association

## Summary

Altmetric-citation association is a validation motif that asks whether online-attention indicators are empirically related to later or contemporaneous scholarly citation impact, and whether that relationship is strong enough for a specific use.

## Canonical Form

- Unit of analysis: paper, journal-field cohort, source-specific mention count, citation count, normalized citation indicator, or highly cited paper label.
- Typical representation: correlation, sign test, regression, precision-recall curve, field-normalized comparison, or age-window adjusted validation.
- Validation target: whether altmetric sources capture the same construct as citation impact, a complementary construct, or only a weakly related attention signal.
- Empirical signature: positive but weak or source-specific associations, strong time-window sensitivity, and lower recall than citation-based or journal-based filters in many settings.

## Uses in Science of Science

- Validates [altmetrics](../datasets/altmetrics.md) against [citation impact indicators](../measures/citation_impact_indicators.md) without assuming equivalence.
- Provides a test layer for [social media attention channels](../datasets/social_media_attention_channels.md) and [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md).
- Supports [responsible metrics](../measures/responsible_metrics.md) when altmetric indicators are proposed for evaluation.

## Operationalization

- Compare source-specific altmetric counts with field- and age-normalized citation indicators.
- Separate papers with positive altmetric events from papers with structural or provider-induced zeros.
- Audit [altmetric identifier matching loss](altmetric_identifier_matching_loss.md) and [altmetric zero-score semantics](altmetric_zero_score_semantics.md) before interpreting weak or null associations.
- Use [positive altmetric-score conditioning](../methods/positive_altmetric_score_conditioning.md) when zero-score records are not trustworthy, and report that the estimand is source-active papers.
- Use publication-age controls because altmetric events and citations accumulate on different time scales.
- For discovery or filtering tasks, report precision and recall for highly cited papers rather than only correlations.
- Use [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md) and [altmetric highly cited filtering](altmetric_highly_cited_filtering.md) when the validation task involves time or discovery.
- When source-specific timing bias is likely, use [adjacent-article altmetric sign test](adjacent_article_altmetric_sign_test.md) or matched-age designs instead of raw cross-age correlations.
- Keep [altmetric sign-test direction-magnitude decoupling](altmetric_sign_test_direction_magnitude_decoupling.md) explicit when a sign test establishes direction without estimating effect size.
- Treat [altmetric prediction-claim boundary](altmetric_prediction_claim_boundary.md) as a required caveat unless event timestamps and future citation windows are tested.
- Treat [altmetric temporal correlation reversal](altmetric_temporal_correlation_reversal.md) as evidence that raw correlations are time-confounded rather than as a direct invalidation of the source.
- Compare all-publication results with an [altmetric active universe](../methods/altmetric_active_universe.md) sensitivity analysis.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) finds statistically significant positive associations between higher altmetric scores and higher citations for several sources among papers with positive altmetric scores, but cautions against conclusions for zero-score papers or correlation strength.
- Thelwall et al. introduce an age-local sign-test strategy because citation windows and usage windows can otherwise bias or reverse observed associations.
- Thelwall et al. also state that their data do not test whether current altmetric scores predict future citations and that sign-test outcomes do not estimate correlation magnitude.
- Verified full-text evidence from Costas et al. (2015) confirms positive but relatively weak relationships between Altmetric.com indicators and citation indicators in a multidisciplinary WoS sample.
- Costas et al. find that altmetric indicators do not consistently outperform journal citation scores for identifying highly cited publications: some sources can have useful precision, but recall is generally low because many highly cited papers have no tracked altmetric events.
- Their active-universe analysis shows only marginal improvement after restricting to papers with at least one altmetric score.
- Together, these studies support using altmetrics as complementary attention evidence rather than as replacements for citation-based impact indicators.

## Caveats

- Correlation with citations is not required for all altmetric uses; public or policy attention may be valuable precisely because it differs from scholarly citation.
- Weak association can result from true construct difference, sparse coverage, field differences, source bias, noisy matching, or time-window mismatch.
- Composite attention scores can hide source-specific validity differences.

## Links

- [altmetrics](../datasets/altmetrics.md)
- [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md)
- [altmetric identifier matching loss](altmetric_identifier_matching_loss.md)
- [altmetric zero-score semantics](altmetric_zero_score_semantics.md)
- [positive altmetric-score conditioning](../methods/positive_altmetric_score_conditioning.md)
- [altmetric composite scores](../measures/altmetric_composite_scores.md)
- [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md)
- [altmetric temporal correlation reversal](altmetric_temporal_correlation_reversal.md)
- [altmetric active universe](../methods/altmetric_active_universe.md)
- [adjacent-article altmetric sign test](adjacent_article_altmetric_sign_test.md)
- [altmetric sign-test direction-magnitude decoupling](altmetric_sign_test_direction_magnitude_decoupling.md)
- [altmetric prediction-claim boundary](altmetric_prediction_claim_boundary.md)
- [altmetric highly cited filtering](altmetric_highly_cited_filtering.md)
- [journal citation score baseline](../measures/journal_citation_score_baseline.md)
- [altmetric source factor structure](../representations/altmetric_source_factor_structure.md)
- [Twitter mention counts](../measures/twitter_mention_counts.md)
- [Facebook wall-post counts](../measures/facebook_wall_post_counts.md)
- [blog and news mention counts](../measures/blog_and_news_mention_counts.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [Mendeley conditional collection bias](mendeley_conditional_collection_bias.md)
- [altmetric author self-mention bias](altmetric_author_self_mention_bias.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [prediction feedback loops](prediction_feedback_loops.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]
- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `altmetric_citation_association`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Aliases: altmetric-citation correlations; weak citation correlation; altmetric validation; precision-recall filtering
