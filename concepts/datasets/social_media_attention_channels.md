# Social media attention channels

## Summary

Social media attention channels are source-specific streams of online events that mention scholarly outputs, such as tweets, blog posts, news stories, Facebook posts, Wikipedia links, reference-manager reads, or policy-document links.

## Canonical Form

- Unit of analysis: paper-channel event, paper-source count, platform user, outlet, URL, DOI, field, or publication window.
- Typical representation: platform-specific count vector, event stream, source taxonomy, attention time series, or cross-platform mention network.
- Measurement target: channel-specific public and online attention rather than scholarly citation impact.
- Empirical signature: fast, sparse, platform-dependent mentions with strong source heterogeneity.

## Uses in Science of Science

- Splits [altmetrics](altmetrics.md) into source layers instead of treating online attention as one score.
- Helps compare public, media, policy, and scholarly attention without collapsing them into [citation impact indicators](../measures/citation_impact_indicators.md).
- Provides the data layer for [public and policy attention](../mechanisms/public_policy_attention.md), [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md), and [altmetric-citation association](../validations/altmetric_citation_association.md).
- Splits source-specific measures such as [Twitter mention counts](../measures/twitter_mention_counts.md), [blog and news mention counts](../measures/blog_and_news_mention_counts.md), and [reference-manager readership counts](../measures/reference_manager_readership_counts.md) before any aggregation.
- Captures possible [social-web non-citing reader traces](../mechanisms/social_web_non_citing_reader_traces.md), while requiring checks for [altmetric author self-mention bias](../validations/altmetric_author_self_mention_bias.md).
- Tracks source-specific measures such as [Facebook wall-post counts](../measures/facebook_wall_post_counts.md) and collection rules such as [altmetric source collection-mode heterogeneity](../methods/altmetric_source_collection_mode_heterogeneity.md).

## Operationalization

- Preserve the original source category, source URL, timestamp, target identifier, and matching method.
- Preserve [altmetric event-context metadata](altmetric_event_context_metadata.md) when the provider supplies source text, actor metadata, demographics, or event URLs.
- Preserve [altmetric source-list curation](../methods/altmetric_source_list_curation.md) metadata when a source category depends on curated feeds, outlets, APIs, or scraped platforms.
- Preserve [altmetric source collection-mode heterogeneity](../methods/altmetric_source_collection_mode_heterogeneity.md) when sources come from firehose access, APIs, scraping, or curated lists.
- Model source-specific counts separately before constructing any composite attention score.
- Add platform metadata when available: user or outlet type, language, country, bot/syndication flags, and document context; document [altmetric unique-actor deduplication](../methods/altmetric_unique_actor_deduplication.md) when repeated events are collapsed.
- Treat reference-manager readership, social-media posts, news mentions, blogs, Wikipedia links, and policy documents as different channels unless a validation justifies aggregation.
- Use [policy-altmetric channel sparsity contrast](../validations/policy_altmetric_channel_sparsity_contrast.md) when comparing policy-document mentions with denser readership or social-media channels.
- When a scalar score is needed, document [altmetric composite scores](../measures/altmetric_composite_scores.md) and keep raw source counts available.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) compares eleven social-web and online-attention sources against Web of Science citations for PubMed articles, including Twitter, Facebook wall posts, blogs, mainstream media, Google+, forums, Q&A, Pinterest, Reddit, and LinkedIn-like sources.
- Thelwall et al. show that the channels differ sharply in coverage and timing, which motivates keeping channel labels explicit.
- Thelwall et al. also document heterogeneous collection modes across these sources, supporting separate provenance for firehose, API, scraping, and curated-list channels.
- Verified full-text evidence from Costas et al. (2015) uses Altmetric.com source categories including Facebook walls, blogs, Twitter, Google+, mainstream news outlets, and other sources in a multidisciplinary WoS sample.
- Costas et al. exclude Mendeley from their main analysis because Altmetric.com collected readership only when other altmetric indicators had already been detected, illustrating why channel-specific collection rules matter.
- Costas et al. also show that source presence varies strongly by field and that Twitter dominates the source-active sample, motivating [altmetric field presence profiles](../measures/altmetric_field_presence_profiles.md) and [Twitter dominance composite bias](../validations/twitter_dominance_composite_bias.md).
- Verified full-text evidence from Bornmann et al. (2016) and Haunschild and Bornmann (2017) adds policy documents as a specialized channel whose source list and tracking coverage need separate audit.
- Verified full-text evidence from Lin et al. (2023) adds a Crossref Event Data implementation: SciSciNet uses DOI-normalized Newsfeed and Twitter mention link tables with source metadata and collection windows.

## Caveats

- Platform APIs, tracking coverage, and source definitions change over time.
- Channel events can reflect promotion, controversy, teaching, clinical use, policy uptake, or casual visibility rather than one common impact construct.
- Missing channel events can mean no attention, no tracked identifier, unavailable source coverage, language bias, or broken URL matching.

## Links

- [altmetrics](altmetrics.md)
- [altmetric provider snapshot provenance](altmetric_provider_snapshot_provenance.md)
- [altmetric event-context metadata](altmetric_event_context_metadata.md)
- [Crossref Event Data mention linkages](crossref_event_data_mention_linkages.md)
- [altmetric source-list curation](../methods/altmetric_source_list_curation.md)
- [altmetric source collection-mode heterogeneity](../methods/altmetric_source_collection_mode_heterogeneity.md)
- [altmetric unique-actor deduplication](../methods/altmetric_unique_actor_deduplication.md)
- [altmetric composite scores](../measures/altmetric_composite_scores.md)
- [Twitter mention counts](../measures/twitter_mention_counts.md)
- [Facebook wall-post counts](../measures/facebook_wall_post_counts.md)
- [blog and news mention counts](../measures/blog_and_news_mention_counts.md)
- [reference-manager readership counts](../measures/reference_manager_readership_counts.md)
- [altmetric source factor structure](../representations/altmetric_source_factor_structure.md)
- [altmetric field presence profiles](../measures/altmetric_field_presence_profiles.md)
- [Twitter dominance composite bias](../validations/twitter_dominance_composite_bias.md)
- [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md)
- [social-web non-citing reader traces](../mechanisms/social_web_non_citing_reader_traces.md)
- [altmetric author self-mention bias](../validations/altmetric_author_self_mention_bias.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [altmetric prediction-claim boundary](../validations/altmetric_prediction_claim_boundary.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [policy-altmetric channel sparsity contrast](../validations/policy_altmetric_channel_sparsity_contrast.md)
- [policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]
- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]
- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]
- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]
- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `social_media_attention_channels`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Aliases: platform-specific altmetrics; social-web sources; online attention channels; altmetric source categories
