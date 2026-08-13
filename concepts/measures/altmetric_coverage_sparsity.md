# Altmetric coverage sparsity

## Summary

Altmetric coverage sparsity is the tendency for most scholarly outputs to have zero tracked mentions in many online-attention sources, making source coverage and nonzero-event rates central measurement properties.

## Canonical Form

- Unit of analysis: paper-source pair, field-source pair, publication cohort, DOI-bearing paper set, or platform tracking window.
- Typical representation: coverage rate, nonzero mention share, source-specific denominator, missingness audit, or field/year normalized coverage table.
- Measurement target: whether an altmetric source has enough observed events to support descriptive, comparative, or evaluative analysis.
- Empirical signature: low nonzero rates for most sources, higher coverage for a few channels such as Twitter, and strong dependence on source lists and collection windows.

## Uses in Science of Science

- Separates source availability from the substantive meaning of [altmetrics](../datasets/altmetrics.md).
- Provides a denominator check before using [social media attention channels](../datasets/social_media_attention_channels.md), [policy document mentions](policy_document_mentions.md), or composite attention scores.
- Supports [responsible metrics](responsible_metrics.md) by flagging when sparse data should be descriptive only.

## Operationalization

- Define the denominator explicitly: DOI-bearing papers, all papers in a field/year, papers with any altmetric event, or papers in a publisher corpus.
- Report the share of papers with at least one mention by source, field, year, document type, and identifier coverage.
- Build [altmetric field presence profiles](altmetric_field_presence_profiles.md) before making field comparisons.
- Keep structural zeros, untracked sources, missing identifiers, and unknown collection failures distinct when the data allow it.
- Use [altmetric zero-score semantics](../validations/altmetric_zero_score_semantics.md) and [altmetric identifier matching loss](../validations/altmetric_identifier_matching_loss.md) to distinguish no attention from unobserved or unmatched attention.
- Prefer binary mentioned/not-mentioned indicators when count distributions are too sparse for stable intensity modeling.
- Use an [altmetric active universe](../methods/altmetric_active_universe.md) sensitivity analysis when asking whether zero-event papers drive weak relationships.
- Apply an [altmetric coverage utility threshold](altmetric_coverage_utility_threshold.md) before using sparse source counts for ranking, filtering, or evaluation.
- For policy sources, apply [policy-altmetric 80/20 readiness rule](../validations/policy_altmetric_80_20_readiness_rule.md) when the claim is field-specific impact assessment.
- Record whether analyses use [positive altmetric-score conditioning](../methods/positive_altmetric_score_conditioning.md) rather than all eligible papers.
- For policy sources, pair coverage rates with [policy-source corpus construction](../methods/policy_source_corpus_construction.md) and [policy mention context audit](../validations/policy_mention_context_audit.md).

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) reports that coverage for all tested altmetrics except Twitter was low in their PubMed sample, and the authors avoid interpreting zero altmetric scores as clean evidence of no attention.
- Thelwall et al. also show that platform timing matters: publication-age and collection-window differences can remove or reverse apparent relationships between altmetrics and citations.
- Verified full-text evidence from Costas et al. (2015) finds that Twitter is the most common source in their sample, with much lower coverage for sources such as Facebook and blogs.
- Costas et al. argue that low altmetric presence limits replacement claims for citation-based indicators, even where some source counts identify highly cited papers with useful precision.
- Costas et al. also report large field differences in nonzero altmetric presence and show that 55% of top-1% highly cited publications had no altmetric events.
- The same source-specific pattern motivates tracking [Twitter mention counts](twitter_mention_counts.md), [blog and news mention counts](blog_and_news_mention_counts.md), and [reference-manager readership counts](reference_manager_readership_counts.md) separately.
- Verified full-text evidence from Bornmann et al. (2016) and Haunschild and Bornmann (2017) shows the extreme policy-document case: 1.2% of climate-change publications and less than 0.5% of WoS papers in subject categories had at least one tracked policy-related mention.
- Haunschild and Bornmann also show that the annual maximum in their WoS-wide DOI denominator is only 0.48%, reinforcing that policy mentions need source and denominator audits before evaluative use.
- Haunschild and Bornmann explicitly contrast this sparse policy channel with higher Mendeley readership and tweet coverage, motivating [policy-altmetric channel sparsity contrast](../validations/policy_altmetric_channel_sparsity_contrast.md).

## Caveats

- Sparsity is not just a statistical nuisance; it reflects platform adoption, crawler coverage, language coverage, source lists, DOI availability, and audience behavior.
- A zero value can mean no attention, no tracked identifier, source coverage failure, or a channel outside the provider's scope.
- Coverage rates are time-stamped properties of a provider and snapshot, not stable facts about a field.

## Links

- [altmetrics](../datasets/altmetrics.md)
- [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md)
- [altmetric identifier matching loss](../validations/altmetric_identifier_matching_loss.md)
- [altmetric zero-score semantics](../validations/altmetric_zero_score_semantics.md)
- [altmetric source-list curation](../methods/altmetric_source_list_curation.md)
- [altmetric composite scores](altmetric_composite_scores.md)
- [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md)
- [altmetric field presence profiles](altmetric_field_presence_profiles.md)
- [altmetric coverage utility threshold](altmetric_coverage_utility_threshold.md)
- [altmetric active universe](../methods/altmetric_active_universe.md)
- [positive altmetric-score conditioning](../methods/positive_altmetric_score_conditioning.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [Twitter mention counts](twitter_mention_counts.md)
- [blog and news mention counts](blog_and_news_mention_counts.md)
- [reference-manager readership counts](reference_manager_readership_counts.md)
- [Mendeley conditional collection bias](../validations/mendeley_conditional_collection_bias.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [altmetric highly cited filtering](../validations/altmetric_highly_cited_filtering.md)
- [policy document mentions](policy_document_mentions.md)
- [annual policy mention coverage curve](annual_policy_mention_coverage_curve.md)
- [policy mention DOI denominator loss](../validations/policy_mention_doi_denominator_loss.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [policy mention context audit](../validations/policy_mention_context_audit.md)
- [policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [policy-altmetric 80/20 readiness rule](../validations/policy_altmetric_80_20_readiness_rule.md)
- [policy-altmetric channel sparsity contrast](../validations/policy_altmetric_channel_sparsity_contrast.md)
- [responsible metrics](responsible_metrics.md)
- [attention inequality](../mechanisms/attention_inequality.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]
- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]
- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]
- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `altmetric_coverage_sparsity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Aliases: altmetric sparsity; platform coverage bias; nonzero mention coverage; source coverage
