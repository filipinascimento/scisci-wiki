# Adjacent-article altmetric sign test

## Summary

The adjacent-article altmetric sign test validates source-specific altmetrics by comparing each article with the immediately neighboring articles in the same journal, reducing bias from citation delays and fast-changing social-media uptake.

## Canonical Form

- Unit of analysis: focal paper, adjacent same-journal papers, altmetric score, citation count, publication order, or source-specific metric.
- Typical representation: success/failure/null sign-test outcome, success rate, Bonferroni-adjusted significance test, or journal-level source validation table.
- Validation target: whether higher altmetric scores tend to align with higher citation counts among papers with similar publication timing.
- Empirical signature: source-specific success rates above chance for positive-score papers after restricting comparisons to near-age neighbors.

## Uses in Science of Science

- Operationalizes [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md) as a concrete validation design.
- Provides a timing-aware check for [Twitter mention counts](../measures/twitter_mention_counts.md), [blog and news mention counts](../measures/blog_and_news_mention_counts.md), and other [social media attention channels](../datasets/social_media_attention_channels.md).
- Complements broad [altmetric-citation association](altmetric_citation_association.md) tests by avoiding raw cross-age correlations.
- Provides a design response to [altmetric temporal correlation reversal](altmetric_temporal_correlation_reversal.md) when fast source uptake and citation delay point in opposite directions.

## Operationalization

- Order papers within each journal and source-specific altmetric dataset by publication chronology or the best available proxy.
- In PubMed corpora, document and validate any [PubMed ID time proxy](../methods/pubmed_id_time_proxy.md) used for this ordering.
- For each focal paper, compute the average altmetric score and average citation count of the immediately preceding and following papers in the same journal.
- Mark a success when the focal paper is above both neighbor averages or below both neighbor averages; mark a failure when the altmetric and citation comparisons point in opposite directions; treat ties and all-other cases as null.
- Aggregate successes and failures by source and journal, and test whether the success share exceeds chance while accounting for multiple source tests.
- Report that the result applies to papers with positive source scores unless the zero-score population is explicitly included.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) introduces the sign test because newer papers can have higher altmetric scores while older papers have more time to accrue citations.
- Thelwall et al. compare each article only with the two articles published immediately before and after it in the same journal, so compared papers have similar exposure to citation-delay and social-media-uptake biases.
- The method yields success, failure, and null outcomes based on whether altmetric-score ordering agrees with citation-score ordering against the adjacent-paper average.
- Thelwall et al. find clear evidence for source-specific citation associations for tweets, Facebook wall posts, and blogs at the journal level, while stressing that the result is limited to articles with positive altmetric scores.

## Caveats

- Publication order proxies can be imperfect, especially when PubMed IDs, online-first dates, issue dates, and DOI strings disagree.
- The test reduces timing bias but does not solve sparse coverage, source-list bias, self-promotion, platform drift, or identifier-matching errors.
- It tests monotonic association, not the magnitude of correlation or causal prediction.
- Results for positive-score papers should not be generalized to papers with zero altmetric events without separate analysis.

## Links

- [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md)
- [altmetric temporal correlation reversal](altmetric_temporal_correlation_reversal.md)
- [PubMed ID time proxy](../methods/pubmed_id_time_proxy.md)
- [altmetric-citation association](altmetric_citation_association.md)
- [Twitter mention counts](../measures/twitter_mention_counts.md)
- [blog and news mention counts](../measures/blog_and_news_mention_counts.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [citation window selection](../methods/citation_window_selection.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `adjacent_article_altmetric_sign_test`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: altmetric sign test; adjacent article sign test; age-local altmetric validation; same-journal neighbor validation
