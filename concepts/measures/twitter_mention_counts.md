# Twitter mention counts

## Summary

Twitter mention counts measure how often scholarly outputs are shared or mentioned on Twitter-like social-media streams, usually as paper-level counts of unique users, posts, or retweets linked to a DOI, URL, PubMed ID, or other scholarly identifier.

## Canonical Form

- Unit of analysis: paper, tweet, retweet, unique Twitter user, URL, DOI, PubMed ID, publication window, or source-specific event.
- Typical representation: raw tweet count, unique-user count, binary tweeted/not-tweeted flag, log count, or source-specific count inside an altmetric vector.
- Measurement target: rapid social-media attention and visibility, not scholarly citation impact.
- Empirical signature: fast accumulation after publication, relatively high coverage among altmetric sources, strong time-window sensitivity, and platform-specific drift.

## Uses in Science of Science

- Provides a high-volume source layer within [social media attention channels](../datasets/social_media_attention_channels.md).
- Serves as an early-attention component for [altmetrics](../datasets/altmetrics.md), [altmetric composite scores](altmetric_composite_scores.md), and [public and policy attention](../mechanisms/public_policy_attention.md).
- Requires timing and validity checks through [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md), [adjacent-article altmetric sign test](../validations/adjacent_article_altmetric_sign_test.md), and [altmetric-citation association](../validations/altmetric_citation_association.md).

## Operationalization

- Match tweets to papers through DOI, PubMed ID, landing-page URL, short URL expansion, or provider-resolved scholarly identifiers.
- Decide whether to count posts, retweets, unique users, or unique user-paper pairs; report the choice explicitly through [altmetric unique-actor deduplication](../methods/altmetric_unique_actor_deduplication.md) when repeated events are collapsed.
- Store mention timestamps, resolved target identifiers, source API/provider, and deduplication rules.
- Normalize or stratify by publication date, field, journal, and provider collection window before comparing with citations.
- Keep Twitter counts separate from [blog and news mention counts](blog_and_news_mention_counts.md), policy mentions, and reference-manager readership unless a validation supports aggregation.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) uses tweets from a licensed Twitter firehose to test PubMed articles against Web of Science citations.
- Thelwall et al. find statistically significant positive associations between Twitter counts and citations for articles with positive altmetric scores, while warning that zero-score articles and correlation strength should not be overinterpreted.
- The same study shows that raw Twitter-citation correlations can turn negative because Twitter uptake is faster for newer papers while citations need time to accrue.
- Verified full-text evidence from Costas et al. (2015) defines the Twitter indicator as the number of Twitter users who tweeted or retweeted a publication in Altmetric.com data.
- Costas et al. find Twitter to be the most common source in their multidisciplinary Web of Science sample: 13.3% of all sampled papers and 88.1% of altmetric-active papers had Twitter mentions.
- These findings support Twitter counts as useful source-specific attention evidence, but not as a replacement for [citation impact indicators](citation_impact_indicators.md).

## Caveats

- Twitter/X API access, platform governance, bot activity, URL-shortener behavior, and provider coverage change over time.
- Unique-user counts and raw-post counts answer different questions.
- Tweets may reflect promotion, controversy, automated dissemination, teaching, or public discussion rather than use by researchers.
- Positive association with citations does not establish causal influence on citations or general societal impact.
- Raw Twitter-citation correlations should be checked for [altmetric temporal correlation reversal](../validations/altmetric_temporal_correlation_reversal.md) before ranking papers by source counts.

## Links

- [altmetrics](../datasets/altmetrics.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [altmetric event-context metadata](../datasets/altmetric_event_context_metadata.md)
- [altmetric unique-actor deduplication](../methods/altmetric_unique_actor_deduplication.md)
- [altmetric coverage sparsity](altmetric_coverage_sparsity.md)
- [altmetric composite scores](altmetric_composite_scores.md)
- [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md)
- [altmetric temporal correlation reversal](../validations/altmetric_temporal_correlation_reversal.md)
- [adjacent-article altmetric sign test](../validations/adjacent_article_altmetric_sign_test.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [blog and news mention counts](blog_and_news_mention_counts.md)
- [reference-manager readership counts](reference_manager_readership_counts.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]
- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `twitter_mention_counts`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: tweet counts; Twitter altmetrics; tweeted paper counts; unique Twitter user counts
