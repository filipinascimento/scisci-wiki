# Altmetric zero-score semantics

## Summary

Altmetric zero-score semantics is the validation problem of deciding whether an observed zero means no online attention, no tracked identifier, missing provider coverage, or an intentionally excluded source state.

## Canonical Form

- Unit of analysis: paper-source pair, provider record, missing value, zero count, active-paper subset, or analysis denominator.
- Typical representation: true zero, structural zero, unobserved missing, conditionally unobserved, positive-only subset, or zero-as-count rule.
- Validation target: prevent zeros and missing provider data from being silently conflated.
- Empirical signature: studies make different denominator choices, with some treating no provider event as zero and others discarding zero-score records as unreliable.

## Uses in Science of Science

- Qualifies [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md) and [altmetric active universe](../methods/altmetric_active_universe.md).
- Provides data-quality context for [altmetric-citation association](altmetric_citation_association.md), [altmetric highly cited filtering](altmetric_highly_cited_filtering.md), and [altmetric composite scores](../measures/altmetric_composite_scores.md).
- Generalizes source-specific problems such as [Mendeley conditional collection bias](mendeley_conditional_collection_bias.md).
- Connects [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md) to analytic choices about all-publication versus positive-only comparisons.
- Supports [positive altmetric-score conditioning](../methods/positive_altmetric_score_conditioning.md) when source-specific zeros cannot be trusted.

## Operationalization

- Preserve separate states for positive count, observed zero, missing because no provider record exists, and missing because the source was not collected.
- Separate zero attention from exclusion caused by [altmetric publication-month filtering](../methods/altmetric_publication_month_filter.md) or unresolved [online-first altmetric timing lag](online_first_altmetric_timing_lag.md).
- Record whether the provider export is all-eligible, positive-only, source-specific, or conditionally collected.
- Decide and document when zero can be treated like a citation count of zero.
- Run sensitivity analyses in the full eligible universe and the positive-only active universe.
- Use [positive altmetric-score conditioning](../methods/positive_altmetric_score_conditioning.md) when a provider export cannot certify complete source monitoring for zero-score records.
- Avoid borrowing zeros across sources unless the provider confirms that all sources were monitored for the paper.

## Evidence and Validations

- Verified full-text evidence from Costas et al. (2015) treats publications with no altmetric score as zero rather than missing in the full publication universe, while acknowledging that some identification errors may exist.
- Costas et al. make this choice because, for their DOI-matched universe, a paper with no mentions can be considered to have no altmetrics in the same way an uncited paper has zero citations.
- Verified full-text evidence from Thelwall et al. (2013) makes the opposite conservative choice for its provider export: it discards zero-score records because the dataset is not a complete journal universe and missing provider collection could create false zeros.
- Thelwall et al. also warn that a positive score for one source does not imply that all other source channels were monitored, so implied cross-source zeros can be unreliable.
- These contrasting choices show that zero semantics depend on provider snapshot structure, target denominator, and collection completeness.

## Caveats

- Zero-as-count is stronger when the eligible universe is independently known and the provider monitored all sources for every item.
- Positive-only analysis avoids false zeros but changes the estimand to papers with observed attention.
- Provider exports can mix true zeros, untracked identifiers, API failures, and conditional collection rules.
- Zero semantics should be source-specific because blogs, news, Twitter, Mendeley, policy documents, and forums have different tracking mechanisms.

## Links

- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [altmetric active universe](../methods/altmetric_active_universe.md)
- [positive altmetric-score conditioning](../methods/positive_altmetric_score_conditioning.md)
- [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md)
- [altmetric publication-month filter](../methods/altmetric_publication_month_filter.md)
- [online-first altmetric timing lag](online_first_altmetric_timing_lag.md)
- [altmetric identifier matching loss](altmetric_identifier_matching_loss.md)
- [Mendeley conditional collection bias](mendeley_conditional_collection_bias.md)
- [altmetric-citation association](altmetric_citation_association.md)
- [altmetric highly cited filtering](altmetric_highly_cited_filtering.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]
- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `altmetric_zero_score_semantics`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Aliases: altmetric zero handling; zero versus missing attention; false zero altmetrics; positive-only altmetric denominator
