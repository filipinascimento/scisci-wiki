# Social-web non-citing reader traces

## Summary

Social-web non-citing reader traces are online events that reveal attention from readers or audiences who may use, share, or discuss scholarship without producing formal citations.

## Canonical Form

- Unit of analysis: reader, platform user, paper, social-web event, reference-manager save, public discussion, or nonacademic audience.
- Typical representation: mention count, save count, platform event stream, public-attention channel, or reader/audience trace.
- Mechanism: scholarly outputs diffuse through audiences whose use may not enter reference lists, so citation counts miss part of readership and societal attention.
- Empirical signature: online mentions or saves occur rapidly and can represent attention from practitioners, publics, students, journalists, or non-publishing researchers.

## Uses in Science of Science

- Provides a mechanism for why [altmetrics](../datasets/altmetrics.md) and [social media attention channels](../datasets/social_media_attention_channels.md) can matter even when they only weakly correlate with citations.
- Links [reference-manager readership counts](../measures/reference_manager_readership_counts.md) to broader online attention rather than only citation prediction.
- Supports [public and policy attention](public_policy_attention.md) by naming the audience trace that citations often miss.
- Helps interpret [altmetric-citation association](../validations/altmetric_citation_association.md) as construct overlap rather than construct identity.

## Operationalization

- Separate source events that plausibly reflect reading, saving, sharing, news uptake, policy use, or casual visibility.
- Preserve source metadata because different platforms imply different audience mechanisms.
- Compare online traces with citations, downloads, policy mentions, or survey data to test whether non-citing readership is plausible.
- Avoid treating all non-citation events as impact; some events reflect promotion, bots, jokes, controversy, or platform mechanics.
- Use channel-specific validation before aggregating reader traces into composite scores.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) motivates altmetrics partly by noting that citations only assess impact on authors who cite, leaving other readers unmeasured.
- The paper explicitly discusses "pure" readers and argues that the social web may capture audiences outside science as well as non-citing readers within science.
- Thelwall et al. frame the central validation question as whether altmetrics and citations measure the same phenomenon or whether altmetrics capture a different quality that needs separate interpretation.
- Their source-specific results support this mechanism cautiously: online attention can associate with citations, but the meaning of the attention source still needs validation.

## Caveats

- A social-web event is not direct proof that the sender read, understood, used, or valued the paper.
- Platform populations are selective and change over time.
- Non-citing reader traces should complement citation evidence, not replace it without task-specific validation.

## Links

- [altmetrics](../datasets/altmetrics.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [reference-manager readership counts](../measures/reference_manager_readership_counts.md)
- [Twitter mention counts](../measures/twitter_mention_counts.md)
- [blog and news mention counts](../measures/blog_and_news_mention_counts.md)
- [public and policy attention](public_policy_attention.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `social_web_non_citing_reader_traces`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: pure reader traces; non-citing readership signals; social-web reader attention; non-citation audience traces
