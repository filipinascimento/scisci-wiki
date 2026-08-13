# Altmetric unique-actor deduplication

## Summary

Altmetric unique-actor deduplication counts distinct users or actors rather than repeated posts, reducing inflation when the same account mentions, tweets, or retweets the same scholarly output multiple times.

## Canonical Form

- Unit of analysis: paper, source event, actor account, user-paper pair, tweet, retweet, source provider record, or deduplication rule.
- Typical representation: unique-user count, unique actor-paper pair, repeated-event collapse, or provider-side cleaning rule.
- Method target: make source counts closer to breadth of attention rather than repeated activity volume.
- Empirical signature: a Twitter indicator can be defined as the number of users who tweeted or retweeted a paper rather than the number of posts.

## Uses in Science of Science

- Defines the counting rule for [Twitter mention counts](../measures/twitter_mention_counts.md) and other source-specific event streams.
- Provides cleaning metadata for [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md).
- Helps audit [altmetric author self-mention bias](../validations/altmetric_author_self_mention_bias.md), [Twitter dominance composite bias](../validations/twitter_dominance_composite_bias.md), and [citation metric gaming](../validations/citation_metric_gaming.md).
- Supports source-level storage inside [social media attention channels](../datasets/social_media_attention_channels.md) before constructing [altmetric composite scores](../measures/altmetric_composite_scores.md).

## Operationalization

- Choose the actor identity key for each source, such as Twitter user ID, outlet ID, blog URL, forum user, or policy-source organization.
- Collapse repeated events from the same actor to one actor-paper event within the chosen time window.
- Store raw event count, unique-actor count, and deduplication window when possible.
- Keep bot, automated-feed, author-origin, publisher-origin, and institution-origin flags separate from unique-actor deduplication.
- Record whether deduplication was done by the provider, by the researcher, or both.

## Evidence and Validations

- Verified full-text evidence from Costas et al. (2015) states that Altmetric.com performed cleaning and standardization by counting tweets from unique Twitter users.
- The paper defines its Twitter indicator as the number of Twitter users who tweeted or retweeted a publication.
- Costas et al. also report Twitter as the dominant source in their sample, making the exact actor-level counting rule important for interpreting total altmetric scores.
- The provider-side cleaning rule is part of the evidence needed to reproduce or compare source counts across snapshots.

## Caveats

- Unique-user counts do not remove bots, coordinated campaigns, author promotion, or institutional promotion by themselves.
- Account identity can change, disappear, or be unavailable in public exports.
- Collapsing repeated posts can understate repeated exposure or sustained discussion.
- Deduplication rules are source-specific and should not be assumed identical across Twitter, blogs, news, forums, and policy documents.

## Links

- [Twitter mention counts](../measures/twitter_mention_counts.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md)
- [altmetric event-context metadata](../datasets/altmetric_event_context_metadata.md)
- [altmetric composite scores](../measures/altmetric_composite_scores.md)
- [Twitter dominance composite bias](../validations/twitter_dominance_composite_bias.md)
- [altmetric author self-mention bias](../validations/altmetric_author_self_mention_bias.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)
- [altmetrics](../datasets/altmetrics.md)

## References

- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `altmetric_unique_actor_deduplication`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Costas et al. (2015) (2015)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Dimensions ID: `pub.1001115574`
- SciSciNet ID: `W2164277894`
- Aliases: unique Twitter user counting; unique-user altmetric counting; actor-paper deduplication; repeated mention collapse
