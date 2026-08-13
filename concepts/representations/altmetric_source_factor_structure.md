# Altmetric source factor structure

## Summary

Altmetric source factor structure represents source-specific online attention indicators as latent dimensions, testing whether channels such as Twitter, Facebook, blogs, news, and Google+ behave like one construct or multiple attention constructs.

## Canonical Form

- Unit of analysis: paper, source-specific count, field, publication cohort, factor loading, or source correlation matrix.
- Typical representation: source-by-source correlation matrix, principal-component solution, rotated factor loadings, or source-cluster map.
- Representation target: dimensional structure of heterogeneous altmetric sources before aggregation or interpretation.
- Empirical signature: high-volume social platforms can load together while blogs/news or other expert/media sources form separate dimensions.

## Uses in Science of Science

- Tests whether [altmetric composite scores](../measures/altmetric_composite_scores.md) collapse distinct source dimensions.
- Provides a representation layer for [social media attention channels](../datasets/social_media_attention_channels.md) and source-specific measures such as [Twitter mention counts](../measures/twitter_mention_counts.md) and [blog and news mention counts](../measures/blog_and_news_mention_counts.md).
- Supports validity arguments in [altmetric-citation association](../validations/altmetric_citation_association.md) by separating construct structure from citation correlation.

## Operationalization

- Build a paper-by-source count matrix with raw source counts preserved.
- Transform sparse and skewed counts consistently, and decide whether zeros mean no event or unobserved provider coverage.
- Run factor analysis, principal components, source correlations, or clustering within comparable publication-year and field windows.
- Report source loadings, explained variance, extraction/rotation method, inclusion thresholds, and sample coverage.
- Use the source structure to decide whether a composite score, source family score, or source-specific model is appropriate.

## Evidence and Validations

- Verified full-text evidence from Costas et al. (2015) applies factor analysis to bibliometric and altmetric indicators in a multidisciplinary Web of Science sample.
- Costas et al. find four dimensions: two bibliometric dimensions separating journal-based indicators from observed publication citation impact, and two altmetric dimensions.
- In their altmetric dimensions, Twitter, Facebook, Google+, and total altmetrics load together, while blogs and news mentions form a different source dimension.
- Costas et al. repeat the factor analysis on a broader Altmetric.com DOI population and report a consistent split between blogs/news and social-platform mentions.
- This evidence supports storing a source-specific altmetric vector before constructing [altmetric composite scores](../measures/altmetric_composite_scores.md).

## Caveats

- Factor structure can change with source lists, platform popularity, provider coverage, language, field mix, and publication year.
- Sparse sources can produce unstable loadings unless the sample and nonzero thresholds are documented.
- Latent dimensions identify empirical co-occurrence, not necessarily stable meanings such as societal impact, scholarly impact, or media influence.
- Provider-defined source categories may mix platform behavior, outlet curation, and matching algorithms.

## Links

- [altmetric composite scores](../measures/altmetric_composite_scores.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [altmetrics](../datasets/altmetrics.md)
- [Twitter mention counts](../measures/twitter_mention_counts.md)
- [blog and news mention counts](../measures/blog_and_news_mention_counts.md)
- [reference-manager readership counts](../measures/reference_manager_readership_counts.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)

## References

- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `altmetric_source_factor_structure`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Costas et al. (2015) (2015)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Dimensions ID: `pub.1001115574`
- SciSciNet ID: `W2164277894`
- Aliases: altmetric factor analysis; altmetric source dimensions; source-specific altmetric vectors; blogs-news factor
