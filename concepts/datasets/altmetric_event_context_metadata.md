# Altmetric event-context metadata

## Summary

Altmetric event-context metadata preserves the source, text, actor, demographic, URL, and event-level context behind online-attention counts so source events can be audited instead of treated only as aggregate numbers.

## Canonical Form

- Unit of analysis: mention event, paper-source pair, actor account, outlet, URL, demographic attribute, timestamp, or provider record.
- Typical representation: event table, context payload, source URL, Twitter demographic fields, actor metadata, or mention excerpt.
- Data target: make online-attention counts inspectable, classifiable, and reusable for validation.
- Empirical signature: aggregate source counts are backed by event-level records that describe where and by whom the mention occurred.

## Uses in Science of Science

- Extends [social media attention channels](social_media_attention_channels.md) from source counts to auditable event data.
- Supplies provenance for [altmetrics](altmetrics.md), [Twitter mention counts](../measures/twitter_mention_counts.md), and [blog and news mention counts](../measures/blog_and_news_mention_counts.md).
- Supports [altmetric unique-actor deduplication](../methods/altmetric_unique_actor_deduplication.md), [altmetric source-list curation](../methods/altmetric_source_list_curation.md), and [altmetric provider snapshot provenance](altmetric_provider_snapshot_provenance.md).
- Enables qualitative checks such as [policy mention context audit](../validations/policy_mention_context_audit.md) and author-origin audits.

## Operationalization

- Store event URL, source type, source name, event timestamp, target identifier, and match route.
- Preserve actor metadata when available, such as account identifier, user type, outlet, language, country, demographic field, or organization.
- Keep mention text or context snippets when licensing and privacy rules permit.
- Link event-level records to aggregate counts with a stable paper ID and source category.
- Record whether event context came from provider exports, native APIs, scraped pages, or publisher/source metadata.

## Evidence and Validations

- Verified full-text evidence from Costas et al. (2015) describes Altmetric.com as providing context for each social-media mention and demographic data for Twitter mentions.
- The same paper uses source-specific Altmetric.com categories, making event context relevant for interpreting whether a count reflects Twitter, Facebook, blogs, Google+, news outlets, or another source.
- Costas et al. also state that provider data can be summarized or made more detailed when needed, supporting the distinction between aggregate indicators and event-level context.
- Event-context metadata is therefore part of the source dataset, not just a post-hoc annotation.

## Caveats

- Event-level metadata can be restricted by platform terms, privacy rules, or provider licenses.
- Demographic fields may be inferred, incomplete, unstable, or unavailable for some platforms.
- Context payloads can disappear if URLs break or accounts are deleted.
- More detailed event data improves auditability but increases storage, privacy, and harmonization burdens.

## Links

- [altmetrics](altmetrics.md)
- [social media attention channels](social_media_attention_channels.md)
- [altmetric provider snapshot provenance](altmetric_provider_snapshot_provenance.md)
- [altmetric source-list curation](../methods/altmetric_source_list_curation.md)
- [altmetric unique-actor deduplication](../methods/altmetric_unique_actor_deduplication.md)
- [Twitter mention counts](../measures/twitter_mention_counts.md)
- [blog and news mention counts](../measures/blog_and_news_mention_counts.md)
- [altmetric author self-mention bias](../validations/altmetric_author_self_mention_bias.md)
- [policy mention context audit](../validations/policy_mention_context_audit.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)

## References

- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `altmetric_event_context_metadata`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Costas et al. (2015) (2015)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Dimensions ID: `pub.1001115574`
- SciSciNet ID: `W2164277894`
- Aliases: altmetric event context; mention-level altmetric metadata; Twitter demographic context; online attention event metadata
