# Reference-manager readership counts

## Summary

Reference-manager readership counts measure how many users have saved, bookmarked, or added a scholarly output in platforms such as Mendeley, CiteULike, BibSonomy, or related social-reference systems.

## Canonical Form

- Unit of analysis: paper, reader, library-save event, user-paper pair, platform, field, or publication cohort.
- Typical representation: reader count, bookmark count, binary readership flag, platform-specific count vector, or readership-citation comparison.
- Measurement target: scholarly interest, reading, bookmarking, or library use before or alongside formal citation.
- Empirical signature: earlier and broader scholarly-use signal than citations in some settings, but with platform-specific adoption and coverage rules.

## Uses in Science of Science

- Adds a researcher-facing attention layer to [altmetrics](../datasets/altmetrics.md) that differs from public [Twitter mention counts](twitter_mention_counts.md) and [blog and news mention counts](blog_and_news_mention_counts.md).
- Helps distinguish scholarly readership from broader [public and policy attention](../mechanisms/public_policy_attention.md).
- Can be compared with [citation impact indicators](citation_impact_indicators.md) through [altmetric-citation association](../validations/altmetric_citation_association.md), but should remain source-specific in [social media attention channels](../datasets/social_media_attention_channels.md).

## Operationalization

- Resolve paper identifiers to a reference-manager platform and record platform, snapshot date, reader count, and matching method.
- Treat reader counts as platform-specific; do not pool Mendeley, CiteULike, BibSonomy, or other saves without documenting coverage and user-base differences.
- Distinguish complete platform snapshots from provider-derived partial counts.
- Audit [Mendeley conditional collection bias](../validations/mendeley_conditional_collection_bias.md) when readership is supplied by an altmetrics provider rather than directly queried from the platform.
- Normalize by field, publication age, platform adoption, and document type when making comparisons.
- Store the source-specific count before using it in [altmetric composite scores](altmetric_composite_scores.md).

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) reviews prior studies of reader counts on social reference managers and bookmarking systems, including Mendeley, CiteULike, BibSonomy, and Connotea.
- Thelwall et al. report that prior Mendeley readership studies found moderate correlations with citations in several settings, while using this as background evidence rather than one of their eleven tested sources.
- Verified full-text evidence from Costas et al. (2015) explicitly excludes Mendeley from their main Altmetric.com analysis because readership was collected only when other altmetric indicators had already been detected and the provided data did not include readership metrics.
- This exclusion is an important validation warning: reference-manager readership can be valuable, but incomplete collection rules can turn an apparent readership count into a biased conditional measure.

## Caveats

- Reader counts are not direct evidence that a paper was read closely, used, or cited.
- Platform user bases vary by field, language, career stage, institution, and time.
- Provider-derived readership may be conditional on other attention events or identifiers, creating missing-not-at-random coverage.
- Reference-manager counts can be affected by duplicate records, metadata merges, private libraries, and platform shutdowns.

## Links

- [altmetrics](../datasets/altmetrics.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [altmetric composite scores](altmetric_composite_scores.md)
- [altmetric coverage sparsity](altmetric_coverage_sparsity.md)
- [Mendeley conditional collection bias](../validations/mendeley_conditional_collection_bias.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [Twitter mention counts](twitter_mention_counts.md)
- [blog and news mention counts](blog_and_news_mention_counts.md)
- [citation impact indicators](citation_impact_indicators.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]
- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `reference_manager_readership_counts`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: Mendeley readers; reference manager readership; bookmarking counts; social reference manager counts
