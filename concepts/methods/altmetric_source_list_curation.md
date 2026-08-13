# Altmetric source-list curation

## Summary

Altmetric source-list curation is the construction and maintenance of the platform, blog, news, media, forum, and feed lists that determine which online mentions can be detected.

## Canonical Form

- Unit of analysis: tracked source, RSS feed, blog index, news outlet, API endpoint, platform source category, or mention event.
- Typical representation: curated source list, source taxonomy, outlet/feed metadata, language/country coverage, API or scraping method, and source-list date.
- Method target: define the observable universe of online attention before source counts are interpreted.
- Empirical signature: channels with curated source lists, such as blogs and mainstream media, measure attention within a selected source corpus rather than the entire web.

## Uses in Science of Science

- Provides the source-construction layer for [social media attention channels](../datasets/social_media_attention_channels.md) and [altmetrics](../datasets/altmetrics.md).
- Explains part of [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md), [blog and news mention counts](../measures/blog_and_news_mention_counts.md), and [altmetric source factor structure](../representations/altmetric_source_factor_structure.md).
- Complements [policy source list transparency](../validations/policy_source_list_transparency.md) for policy-document attention.
- Needs [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md) because source lists and APIs change over time.

## Operationalization

- Enumerate tracked source categories and the data-collection mechanism for each source.
- Store source-list date, source URL/feed, language, country, publisher/platform type, and inclusion criteria.
- Preserve [altmetric event-context metadata](../datasets/altmetric_event_context_metadata.md) when source lists are tied to event URLs, source text, outlet metadata, or actor fields.
- Separate API firehose sources, curated feed sources, scraped forums, and manually selected outlets.
- Report whether a source count is source-list limited, platform-wide, query-limited, or provider-weighted.
- Recompute or version source lists before longitudinal comparisons.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) describes Altmetric.com source channels including Twitter firehose checks, Facebook firehose checks, Nature research highlights, Google+ API checks, Reddit API checks, scraped forums, Stack Exchange API/scraping, Pinterest scraping, and LinkedIn API checks.
- Thelwall et al. state that blog citations come from a manually curated list of about 2,200 science blogs derived from Nature.com Blogs, Research Blogging, and ScienceSeeker.
- The same paper states that mainstream media counts are based on a manually curated list of about 60 newspapers and magazines using links in their science coverage.
- Verified full-text evidence from Costas et al. (2015) notes that Altmetric.com tracks a manually curated list of RSS feeds from news websites, adds each news source individually, and attempts to cover non-English-speaking outlets.
- These examples show that source counts are partly functions of source-list construction, not only reader or public behavior.

## Caveats

- Curated lists can create language, geography, platform, and outlet-prestige bias.
- Source-list growth can mimic rising attention unless snapshot dates are controlled.
- API firehose channels and curated feed channels have different completeness assumptions.
- A mention outside the curated source list is invisible to the count even if it is substantively important.

## Links

- [altmetrics](../datasets/altmetrics.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md)
- [altmetric event-context metadata](../datasets/altmetric_event_context_metadata.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [blog and news mention counts](../measures/blog_and_news_mention_counts.md)
- [altmetric source factor structure](../representations/altmetric_source_factor_structure.md)
- [Twitter mention counts](../measures/twitter_mention_counts.md)
- [policy source list transparency](../validations/policy_source_list_transparency.md)
- [policy-source corpus construction](policy_source_corpus_construction.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]
- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `altmetric_source_list_curation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Aliases: altmetric source-list construction; tracked source curation; online attention source corpus; blog and news feed curation
