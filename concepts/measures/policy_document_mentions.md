# Policy document mentions

## Summary

Policy document mentions are indicators that track whether scholarly works are cited, linked, or otherwise mentioned in policy-related documents, guidelines, reports, or government and NGO publications.

## Canonical Form

- Unit of analysis: paper-policy-document mention, source organization, policy document, paper, DOI, field, country, or time window.
- Typical representation: binary mentioned/not mentioned indicator, mention count, source-category count, or normalized policy-attention rate.
- Measurement target: policy-facing uptake or visibility of research, not scholarly quality.
- Empirical signature: sparse mentions concentrated by topic, source coverage, document type, language, and DOI availability.

## Uses in Science of Science

- Operationalizes the policy side of [public and policy attention](../mechanisms/public_policy_attention.md).
- Adds a source-specific guardrail for [altmetrics](../datasets/altmetrics.md) and [responsible metrics](responsible_metrics.md).
- Helps separate policy uptake from [citation impact indicators](citation_impact_indicators.md) and [patent-paper links](../datasets/patent_paper_links.md).
- Uses [policy attention coverage bias](../validations/policy_attention_coverage_bias.md) as the main validation guardrail.

- A residual Bornmann pass separates [policy-document production cadence lag](../mechanisms/policy_document_production_cadence_lag.md), [science-policy advisory role typology](../representations/science_policy_advisory_role_typology.md), [societal-impact institutional foundations](../representations/societal_impact_institutional_foundations.md), [indirect peer-paper policy channel](../mechanisms/indirect_peer_paper_policy_channel.md), [societal-impact intangibles blindspot](../validations/societal_impact_intangibles_blindspot.md), [policy-source typology cooperation proxy](../representations/policy_source_typology_cooperation_proxy.md), [cross-target impact-trace coverage benchmark](cross_target_impact_trace_coverage_benchmark.md), [economic-to-multidimensional impact shift](../mechanisms/economic_to_multidimensional_impact_shift.md), [policy-relevance motivated corpus choice](../methods/policy_relevance_motivated_corpus_choice.md), and [aggregateable societal-impact indicator requirement](../validations/aggregateable_societal_impact_indicator_requirement.md).
## Operationalization

- Match publications to policy-document references through DOI, URL, title, or bibliographic string matching.
- Record source, document type, country or organization, mention date, and matching method.
- Use binary mention indicators for sparse data, and normalize by field, year, DOI coverage, source coverage, and topic when comparing units.
- Audit source lists because policy corpora are selective and can be biased toward English, international, and easily crawled sources.
- Use linked panels such as [WoS-Altmetric policy mention panels](../datasets/wos_altmetric_policy_mention_panel.md) only with explicit DOI denominator and provider snapshot caveats.
- Build the tracked source list with [policy-source corpus construction](../methods/policy_source_corpus_construction.md) and validate meaning with [policy mention context audit](../validations/policy_mention_context_audit.md).
- Use [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md) to compare mentioned papers against the eligible baseline rather than interpreting counts alone.
- Report [policy mention coverage rate](policy_mention_coverage_rate.md) and disclose [policy source list transparency](../validations/policy_source_list_transparency.md) before comparing units.
- Use [policy-altmetric channel sparsity contrast](../validations/policy_altmetric_channel_sparsity_contrast.md) before borrowing assumptions from denser channels such as readership or Twitter.
- Apply [policy mention time lag](policy_mention_time_lag.md) when comparing recent and older papers, and use [policy document deduplication](../validations/policy_document_deduplication.md) when source records include translations or mirrored documents.

## Evidence and Validations

- Verified full-text evidence from Bornmann, Haunschild, and Marx (2016) uses Altmetric policy-document data for 191,276 climate-change publications and finds that only 1.2% had at least one policy mention.
- The paper treats policy mentions as potentially useful for target-oriented societal-impact analysis but emphasizes that low coverage makes it an early-stage data source.
- Verified full-text evidence from Haunschild and Bornmann (2017) expands the test to Web of Science publications with Altmetric policy data and reports 35,504 papers with at least one policy-related mention.
- Haunschild and Bornmann report that less than 0.5% of papers in different subject categories are mentioned at least once in policy-related documents and recommend against using the indicator for impact measurement until more policy-related sites are tracked.
- Their paper further splits the sparse signal into annual coverage, subject-category concentration, DOI-only matching, and provider source-list limitations.
- These results make policy mentions a clear case of [altmetric coverage sparsity](altmetric_coverage_sparsity.md): binary indicators and source-list audits are usually more defensible than intensity comparisons.
- Bornmann et al. compare policy-mentioned climate-change papers against the full climate-change corpus by year, journal, document type, and subject category, showing how policy mentions can be profiled as overrepresentation rather than simple count intensity.
- The same paper flags duplicate policy documents and author motivations as validation problems, linking observed policy mentions to [policy document deduplication](../validations/policy_document_deduplication.md) and [policy-author motivation surveys](../validations/policy_author_motivation_surveys.md).

## Caveats

- Mentions are sparse and source coverage is incomplete.
- A mention can reflect criticism, routine background, boilerplate bibliography, or a CV-like source rather than direct policy influence.
- Policy documents often rely on bodies of evidence without formal scholarly citation, so absence of a mention is not absence of use.
- Cross-field comparisons should record DOI coverage and tracked source lists, not just mention counts.

## Links

- [public and policy attention](../mechanisms/public_policy_attention.md)
- [altmetrics](../datasets/altmetrics.md)
- [altmetric coverage sparsity](altmetric_coverage_sparsity.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [WoS-Altmetric policy mention panel](../datasets/wos_altmetric_policy_mention_panel.md)
- [Altmetric policy source tracker](../datasets/altmetric_policy_source_tracker.md)
- [policy mention coverage rate](policy_mention_coverage_rate.md)
- [annual policy mention coverage curve](annual_policy_mention_coverage_curve.md)
- [policy subject-category concentration](policy_subject_category_concentration.md)
- [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md)
- [policy mention time lag](policy_mention_time_lag.md)
- [auditable external-impact evidence](../validations/auditable_external_impact_evidence.md)
- [post-academic application-context pressure](../mechanisms/post_academic_application_context.md)
- [societal-impact comprehensiveness-feasibility tradeoff](../validations/societal_impact_comprehensiveness_feasibility_tradeoff.md)
- [policy-source mention concentration](policy_source_mention_concentration.md)
- [review-synthesis policy advantage](../mechanisms/review_synthesis_policy_advantage.md)
- [generalist-journal policy visibility](../mechanisms/generalist_journal_policy_visibility.md)
- [policy-mention time-area normalization](../methods/policy_mention_time_area_normalization.md)
- [policy-mention role reduction](../validations/policy_mention_role_reduction.md)
- [policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [policy mention DOI denominator loss](../validations/policy_mention_doi_denominator_loss.md)
- [policy citation-style omission](../validations/policy_citation_style_omission.md)
- [policy source list transparency](../validations/policy_source_list_transparency.md)
- [policy source tracking-ease bias](../validations/policy_source_tracking_ease_bias.md)
- [policy mention context audit](../validations/policy_mention_context_audit.md)
- [policy document deduplication](../validations/policy_document_deduplication.md)
- [policy-author motivation surveys](../validations/policy_author_motivation_surveys.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [policy-altmetric channel sparsity contrast](../validations/policy_altmetric_channel_sparsity_contrast.md)
- [responsible metrics](responsible_metrics.md)
- [societal impact case studies](../methods/societal_impact_case_studies.md)
- [citation impact indicators](citation_impact_indicators.md)
- [patent paper links](../datasets/patent_paper_links.md)

- [policy-document production cadence lag](../mechanisms/policy_document_production_cadence_lag.md)
- [science-policy advisory role typology](../representations/science_policy_advisory_role_typology.md)
- [societal-impact intangibles blindspot](../validations/societal_impact_intangibles_blindspot.md)
- [cross-target impact-trace coverage benchmark](cross_target_impact_trace_coverage_benchmark.md)
## References

- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]
- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]
- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `policy_document_mentions`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Bornmann et al. (2016) (2016)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2115-y`
- OpenAlex ID: `W2952238320`
- Aliases: policy mentions; policy-related mentions; policy citations; societal impact mentions
