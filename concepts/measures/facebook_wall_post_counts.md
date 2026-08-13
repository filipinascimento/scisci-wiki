# Facebook wall-post counts

## Summary

Facebook wall-post counts measure source-specific scholarly mentions from Facebook wall posts, keeping them separate from Twitter, blogs, news, and other online-attention channels.

## Canonical Form

- Unit of analysis: paper, Facebook wall post, platform user, source event, DOI, URL, or source-specific count.
- Typical representation: Facebook wall-post count, binary Facebook-mentioned flag, source-active denominator, or paper-by-source count vector.
- Measurement target: social-platform attention mediated through Facebook wall posts.
- Empirical signature: Facebook events can show citation association among positive-score papers while having coverage and collection rules distinct from other sources.

## Uses in Science of Science

- Adds a source-specific measure to [social media attention channels](../datasets/social_media_attention_channels.md).
- Provides a non-Twitter social-platform contrast for [Twitter mention counts](twitter_mention_counts.md), [altmetric coverage sparsity](altmetric_coverage_sparsity.md), and [altmetric-citation association](../validations/altmetric_citation_association.md).
- Helps avoid treating all social-media counts as one interchangeable signal.
- Requires source-mode documentation through [altmetric source collection-mode heterogeneity](../methods/altmetric_source_collection_mode_heterogeneity.md).

## Operationalization

- Identify Facebook wall-post events linked to scholarly papers through DOI, PubMed ID, URL, title, or provider-resolved identifiers.
- Store counts separately from other social-web sources and preserve event timestamp, account or page metadata, and matching method when available.
- Report the source-active denominator and do not infer Facebook zeros from activity in other altmetric sources.
- Compare Facebook counts with citations using age-matched or same-journal designs when citation delay and platform uptake are confounded.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) treats Facebook wall posts as one of eleven altmetric sources and states that wall posts were checked through licensed Facebook firehose data.
- The paper finds statistically significant source-citation association for Facebook wall posts among papers with positive scores, while warning that zero-score papers and effect-size magnitude should not be overinterpreted.
- Thelwall et al. also show that Facebook wall-post coverage is source-specific and cannot be assumed from activity in other online channels.

## Caveats

- Facebook access, privacy rules, public-page visibility, and API policies change over time.
- Wall posts may reflect promotion, public discussion, course sharing, or automated posting rather than one common impact construct.
- Provider snapshots may not capture private posts, deleted posts, or historical backfill consistently.

## Links

- [social media attention channels](../datasets/social_media_attention_channels.md)
- [Twitter mention counts](twitter_mention_counts.md)
- [altmetric coverage sparsity](altmetric_coverage_sparsity.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [positive altmetric-score conditioning](../methods/positive_altmetric_score_conditioning.md)
- [altmetric source collection-mode heterogeneity](../methods/altmetric_source_collection_mode_heterogeneity.md)
- [altmetrics](../datasets/altmetrics.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `facebook_wall_post_counts`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: Facebook altmetrics; Facebook wall mentions; FbWalls; Facebook scholarly posts
