# Crossref Event Data mention linkages

## Summary

Crossref Event Data mention linkages connect scholarly publications to newsfeed items and Twitter posts through DOI-normalized event records.

## Canonical Form

- Unit of analysis: paper, DOI, newsfeed object, tweet, event timestamp, webpage, or platform-specific mention ID.
- Typical representation: paper-to-news and paper-to-tweet link tables with event metadata.
- Mechanism or measurement target: public and online attention to science through tracked Crossref event sources.
- Empirical signature: normalized DOI joins map publication records to news/blog webpages or tweet identifiers, with duplicate events removed.

## Uses in Science of Science

- Supplies a concrete source layer for [social media attention channels](social_media_attention_channels.md), [Twitter mention counts](../measures/twitter_mention_counts.md), and [blog and news mention counts](../measures/blog_and_news_mention_counts.md).
- Adds downstream public-use edges to [upstream-downstream scholarly linkages](upstream_downstream_scholarly_linkages.md).
- Supports event-time analyses when mention timestamps are retained.
- Helps distinguish source-specific public attention from scholarly [citation impact indicators](../measures/citation_impact_indicators.md).

## Operationalization

- Normalize DOI strings before joining publication records to Crossref event records.
- Preserve source-specific IDs: Newsfeed Object ID, Tweet ID, OriginalTweetID, and occurred time.
- Deduplicate repeated mentions before counting paper-level attention.
- Keep newsfeed and social-media events as separate channels unless a validation supports aggregation.
- Record Crossref Event API collection window and source-list coverage.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) uses Crossref Event API data for newsfeed and Twitter mentions.
- The paper reports 947,160 newsfeed records and 59,593,281 Twitter records collected over 2017-2022 windows.
- After DOI normalization, inner joins, and duplicate removal, SciSciNet keeps 595,241 newsfeed link records and 55,846,550 Twitter link records.
- Lin et al. also provide metadata tables for newsfeed and tweet links, including mention time and detailed source identifiers.

## Caveats

- Crossref Event Data source tracking is incomplete and platform-dependent.
- DOI-only matching misses publications or mentions without tracked DOI strings.
- Twitter/X platform access, deletion, API governance, and bot activity change over time, so historical mention tables are snapshot-specific.

## Links

- [social media attention channels](social_media_attention_channels.md)
- [upstream-downstream scholarly linkages](upstream_downstream_scholarly_linkages.md)
- [altmetrics](altmetrics.md)
- [Twitter mention counts](../measures/twitter_mention_counts.md)
- [blog and news mention counts](../measures/blog_and_news_mention_counts.md)
- [altmetric provider snapshot provenance](altmetric_provider_snapshot_provenance.md)
- [altmetric source-list curation](../methods/altmetric_source_list_curation.md)
- [altmetric zero-score semantics](../validations/altmetric_zero_score_semantics.md)
- [altmetric identifier matching loss](../validations/altmetric_identifier_matching_loss.md)
- [SciSciNet-v2](sciscinet_v2.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `crossref_event_data_mention_linkages`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: Crossref Event API linkages; Newsfeed Twitter link tables; DOI-normalized mention links; paper-event mention tables
