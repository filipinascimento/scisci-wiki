# Mendeley conditional collection bias

## Summary

Mendeley conditional collection bias occurs when provider-derived Mendeley readership counts are collected only for papers that already have other altmetric events, making readership data missing not at random.

## Canonical Form

- Unit of analysis: paper, Mendeley reader count, provider record, altmetric-active paper, DOI-bearing paper set, or source-specific snapshot.
- Typical representation: conditional-collection flag, missingness audit, readership-availability table, or comparison between native Mendeley and provider-derived readership counts.
- Validation target: determine whether reference-manager readership data are complete enough to analyze as a general paper-level signal.
- Empirical signature: Mendeley counts are absent or unavailable for papers without other altmetric events, even when those papers may have readers.

## Uses in Science of Science

- Provides a data-quality validation for [reference-manager readership counts](../measures/reference_manager_readership_counts.md).
- Extends [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md) by distinguishing true zero readership from provider-side conditional collection.
- Supports [social media attention channels](../datasets/social_media_attention_channels.md) by making source-specific collection rules explicit.
- Prevents biased inclusion of Mendeley into [altmetric composite scores](../measures/altmetric_composite_scores.md) or [altmetric-citation association](altmetric_citation_association.md).

## Operationalization

- Record whether Mendeley data come from native platform queries, provider exports, or merged altmetric records.
- Audit whether papers without Twitter, blog, news, Facebook, or other events were queried for Mendeley readership.
- Keep missing, zero, and conditionally unobserved readership states separate.
- Compare provider-derived counts against a direct Mendeley snapshot when possible.
- Exclude or separately model Mendeley if collection depends on other source events.

## Evidence and Validations

- Verified full-text evidence from Costas, Zahedi, and Wouters (2015) excludes Mendeley from the main analysis because Altmetric.com collected readership data only when other altmetric indicators had already been detected.
- The same paper states that the provided data did not include readership metrics, so Mendeley would not be complete for the full publication sample.
- Verified full-text evidence from Thelwall et al. (2013) reviews prior work where Mendeley readership often correlates with citations, reinforcing that the source can be informative when collected directly and completely.
- Together, these papers show why Mendeley is a useful readership channel but a risky provider-derived variable when its collection is conditional on other attention.

## Caveats

- This bias applies to provider-derived Mendeley data under conditional collection rules; direct platform snapshots have different coverage problems.
- Mendeley platform access, deduplication, and API availability can change over time.
- Excluding Mendeley avoids one bias but can remove a scholarly-use signal that differs from public social-media attention.

## Links

- [reference-manager readership counts](../measures/reference_manager_readership_counts.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [altmetric active universe](../methods/altmetric_active_universe.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [altmetric composite scores](../measures/altmetric_composite_scores.md)
- [altmetric-citation association](altmetric_citation_association.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]
- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `mendeley_conditional_collection_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Costas et al. (2015) (2015)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Dimensions ID: `pub.1001115574`
- SciSciNet ID: `W2164277894`
- Aliases: conditional Mendeley collection; Mendeley missingness bias; readership collection bias; provider-derived Mendeley bias
