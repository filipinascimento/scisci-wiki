# Blog and news mention counts

## Summary

Blog and news mention counts measure how often scholarly outputs are cited, linked, or discussed by science blogs, mainstream news outlets, magazines, or other curated media sources.

## Canonical Form

- Unit of analysis: paper, media source, blog post, news story, outlet, URL, DOI, publication window, or source-specific event.
- Typical representation: blog mention count, news mention count, binary media-mentioned flag, outlet-level event list, or blog/news source vector.
- Measurement target: media-facing public attention, expert commentary, or public communication around research outputs.
- Empirical signature: lower coverage than high-volume social-media sources, but potentially stronger filtering value for small sets of high-attention papers.

## Uses in Science of Science

- Separates media attention from [Twitter mention counts](twitter_mention_counts.md), [reference-manager readership counts](reference_manager_readership_counts.md), and [policy document mentions](policy_document_mentions.md).
- Provides a source-specific layer for [public and policy attention](../mechanisms/public_policy_attention.md) and [altmetrics](../datasets/altmetrics.md).
- Supports validation through [altmetric highly cited filtering](../validations/altmetric_highly_cited_filtering.md), [altmetric source factor structure](../representations/altmetric_source_factor_structure.md), and [altmetric-citation association](../validations/altmetric_citation_association.md).

## Operationalization

- Define the blog and news source lists, including whether sources are manually curated, RSS-based, platform-derived, or provider supplied.
- Match mentions to papers through DOI, URL, PubMed ID, title, or provider-resolved scholarly identifiers.
- Keep blog and news counts separate unless factor analysis or source validation justifies combining them.
- Record outlet/source, event URL, mention timestamp, language, country when available, and matching method.
- Normalize by field, language, publication date, source-list coverage, and provider collection window before comparing outputs or fields.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) treats blogs and mainstream media as separate altmetric sources, using a curated science-blog list and a curated newspaper/magazine list.
- Thelwall et al. find positive citation associations for several sources with sufficient data, including blogs and mainstream media, while emphasizing low coverage and timing limitations.
- Verified full-text evidence from Costas et al. (2015) defines blog mentions, news-outlet mentions, and Twitter/Facebook/Google+ counts as separate Altmetric.com indicators in a multidisciplinary Web of Science sample.
- Costas et al. find that blogs and news form a different altmetric factor from Twitter, Facebook, and Google+, and that blog mentions can identify highly cited publications with high precision at low recall.
- These results make blog/news counts useful as a distinct media-attention motif, not merely another component of a single [altmetric composite score](altmetric_composite_scores.md).

## Caveats

- Source lists can be highly selective by language, country, outlet type, and provider policy.
- Media mentions can reflect public interest, institutional promotion, controversy, clinical relevance, or routine reporting.
- Blogs and news outlets may quote press releases or syndicated stories, creating correlated events.
- Low coverage means a zero value is weak evidence of no public attention.

## Links

- [altmetrics](../datasets/altmetrics.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)
- [altmetric source factor structure](../representations/altmetric_source_factor_structure.md)
- [altmetric highly cited filtering](../validations/altmetric_highly_cited_filtering.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [altmetric coverage sparsity](altmetric_coverage_sparsity.md)
- [Twitter mention counts](twitter_mention_counts.md)
- [reference-manager readership counts](reference_manager_readership_counts.md)
- [policy document mentions](policy_document_mentions.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]
- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `blog_and_news_mention_counts`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Dimensions ID: `pub.1001115574`
- SciSciNet ID: `W2164277894`
- Aliases: blog mentions; news mentions; media mentions; mainstream media altmetrics
