# Altmetric attention timing windows

## Summary

Altmetric attention timing windows define how online mentions and citations are compared when they accumulate on different time scales.

## Canonical Form

- Unit of analysis: paper, publication month, mention timestamp, citation window, provider collection start date, or age-matched comparison.
- Typical representation: publication-age control, adjacent-article sign test, collection-window restriction, or mention/citation lag.
- Method target: prevent timing artifacts from being mistaken for relationships between altmetrics and citations.
- Empirical signature: newer papers may receive more tracked online attention while older papers have more citations, producing biased comparisons if age is ignored.

## Uses in Science of Science

- Supports valid [altmetric-citation association](../validations/altmetric_citation_association.md) tests.
- Provides a timing guardrail for [altmetric composite scores](../measures/altmetric_composite_scores.md), [social media attention channels](../datasets/social_media_attention_channels.md), and [public and policy attention](../mechanisms/public_policy_attention.md).
- Helps interpret source-specific early attention as different from long-run scholarly citation impact.

## Operationalization

- Record article publication dates, mention dates, provider collection start dates, and citation extraction dates.
- Compare papers within narrow publication-age strata or publication-neighborhoods.
- Apply an [altmetric publication-month filter](altmetric_publication_month_filter.md) when provider collection starts midyear or when citation windows require month-level eligibility.
- Use sign tests, matched cohorts, fixed citation windows, or age-normalized models when timing data are incomplete.
- Avoid comparing raw altmetric counts and raw citations across papers with very different ages or collection exposure.
- Treat [online-first altmetric timing lag](../validations/online_first_altmetric_timing_lag.md) as a date-quality caveat when issue-month metadata are used for cohort construction.
- Treat [adjacent-article altmetric sign test](../validations/adjacent_article_altmetric_sign_test.md) as one concrete same-journal, near-age implementation of this timing guardrail.
- Treat [altmetric temporal correlation reversal](../validations/altmetric_temporal_correlation_reversal.md) as a warning signal that raw source-citation correlations are dominated by time.
- In PubMed samples, validate any [PubMed ID time proxy](pubmed_id_time_proxy.md) used when exact publication or online availability dates are unavailable.
- For policy-related documents, treat [policy mention time lag](../measures/policy_mention_time_lag.md) as a slower channel-specific version of this timing problem.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) states that newer articles can receive higher altmetric scores while older articles have had more time to accrue citations.
- To avoid this bias, Thelwall et al. introduce an adjacent-article sign test comparing an article only with papers published immediately before and after it in the same journal.
- Thelwall et al. warn that comparisons between citations and metric values for articles published at different times, even within the same year, can remove or reverse observed associations.
- Verified full-text evidence from Costas et al. (2015) restricts analysis around Altmetric.com's collection start in July 2011 and notes a strong recent-publication bias in altmetric scores.
- Verified full-text evidence from Bornmann, Haunschild, and Marx (2016) and Haunschild and Bornmann (2017) shows that policy-related mentions can favor older publications, requiring policy-specific time-window checks.

## Caveats

- Timing correction does not solve source coverage, identifier matching, or platform drift.
- Many provider exports lack original event timestamps or complete historical backfill.
- Early attention may predict later citations in some contexts, but contemporaneous association is not the same as forecasting.

## Links

- [altmetrics](../datasets/altmetrics.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [adjacent-article altmetric sign test](../validations/adjacent_article_altmetric_sign_test.md)
- [altmetric temporal correlation reversal](../validations/altmetric_temporal_correlation_reversal.md)
- [altmetric publication-month filter](altmetric_publication_month_filter.md)
- [online-first altmetric timing lag](../validations/online_first_altmetric_timing_lag.md)
- [PubMed ID time proxy](pubmed_id_time_proxy.md)
- [policy mention time lag](../measures/policy_mention_time_lag.md)
- [altmetric composite scores](../measures/altmetric_composite_scores.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [citation window selection](citation_window_selection.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]
- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `altmetric_attention_timing_windows`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: altmetric recency bias; attention timing correction; adjacent-article sign test; online attention windows
