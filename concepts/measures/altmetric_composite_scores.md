# Altmetric composite scores

## Summary

Altmetric composite scores aggregate source-specific online attention counts into a single paper-level number, usually by summing or weighting mentions across channels.

## Canonical Form

- Unit of analysis: paper, source-specific mention count, weighted source category, composite score, or event stream.
- Typical representation: total altmetric count, weighted attention score, donut score, or source-count vector collapsed to one scalar.
- Measurement target: overall tracked online attention across heterogeneous channels.
- Empirical signature: composite values are dominated by high-volume channels and can mix distinct attention dimensions.

## Uses in Science of Science

- Provides a compact measure for [altmetrics](../datasets/altmetrics.md) but should be interpreted with [social media attention channels](../datasets/social_media_attention_channels.md) preserved.
- Supports exploratory filtering and descriptive comparisons when [altmetric coverage sparsity](altmetric_coverage_sparsity.md) is documented.
- Requires validation through [altmetric-citation association](../validations/altmetric_citation_association.md) and [altmetric highly cited filtering](../validations/altmetric_highly_cited_filtering.md) before evaluation use.

## Operationalization

- Define the source list, source weights, [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md), and whether zero means no mention or missing provider coverage.
- Record whether provider-side [altmetric score age-journal normalization](../methods/altmetric_score_age_journal_normalization.md) or anti-gaming controls are included.
- Store source-specific raw counts alongside the composite.
- Preserve [target-oriented impact metrics](target_oriented_impact_metrics.md) separately when the target sector is known.
- Report whether the score is provider-supplied, researcher-constructed, weighted, or unweighted.
- Use factor analysis, source correlations, or sensitivity tests to decide whether aggregation is defensible for the research question.
- Preserve source-specific measures such as [Twitter mention counts](twitter_mention_counts.md), [blog and news mention counts](blog_and_news_mention_counts.md), and [reference-manager readership counts](reference_manager_readership_counts.md) before collapsing to a score.
- Preserve event cleaning rules such as [altmetric unique-actor deduplication](../methods/altmetric_unique_actor_deduplication.md), because unique-user counts and raw-post counts produce different composite inputs.
- Test for [Twitter dominance composite bias](../validations/twitter_dominance_composite_bias.md) before interpreting a composite as broad online attention.

## Evidence and Validations

- Verified full-text evidence from Costas et al. (2015) describes Altmetric.com's attention score as combining quantity and source-weighted quality of attention.
- Costas et al. also construct a `Total Altmetrics` indicator by summing Facebook, blogs, Twitter, Google+, and news scores, but state that this compound indicator is exploratory and not proposed as an indicator in itself.
- Their factor analysis separates Twitter/Facebook/Google+ from blogs/news, showing that a single composite can hide multiple attention dimensions.
- Costas et al. also show that their total-altmetrics indicator correlates mostly with Twitter because Twitter dominates source presence in the sample.
- Verified full-text evidence from Thelwall et al. (2013) compares eleven platform-specific sources and cautions that channel coverage and timing differ strongly, supporting source-specific storage before aggregation.

## Caveats

- Composite scores can look precise while hiding source definitions, weights, API coverage, and temporal drift.
- A weighted score is not a validated impact measure unless the weighting theory and task-specific validity are documented.
- Source-specific channels can have different meanings: tweets, blogs, news, Facebook posts, and policy mentions should not be assumed interchangeable.
- Target-specific traces should not be collapsed into composites when the evaluation question asks about a particular recipient group.

## Links

- [altmetrics](../datasets/altmetrics.md)
- [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md)
- [altmetric score age-journal normalization](../methods/altmetric_score_age_journal_normalization.md)
- [altmetric unique-actor deduplication](../methods/altmetric_unique_actor_deduplication.md)
- [altmetric zero-score semantics](../validations/altmetric_zero_score_semantics.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [altmetric coverage sparsity](altmetric_coverage_sparsity.md)
- [target-oriented impact metrics](target_oriented_impact_metrics.md)
- [altmetric source factor structure](../representations/altmetric_source_factor_structure.md)
- [Twitter dominance composite bias](../validations/twitter_dominance_composite_bias.md)
- [Twitter mention counts](twitter_mention_counts.md)
- [blog and news mention counts](blog_and_news_mention_counts.md)
- [reference-manager readership counts](reference_manager_readership_counts.md)
- [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [altmetric highly cited filtering](../validations/altmetric_highly_cited_filtering.md)
- [responsible metrics](responsible_metrics.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]
- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `altmetric_composite_scores`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Dimensions ID: `pub.1001115574`
- SciSciNet ID: `W2164277894`
- Aliases: total altmetrics; altmetric attention score; donut score; weighted online attention score
