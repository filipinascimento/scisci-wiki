# Altmetric highly cited filtering

## Summary

Altmetric highly cited filtering tests whether online-attention indicators can identify highly cited papers, usually by comparing precision and recall against citation-based or journal-based baselines.

## Canonical Form

- Unit of analysis: paper, altmetric source, citation percentile, selection threshold, field, or publication cohort.
- Typical representation: precision-recall curve, top-1-percent citation label, source-specific filter, or journal citation score baseline.
- Validation target: determine whether altmetric indicators are useful filters for highly cited publications.
- Empirical signature: some altmetric sources can have high precision at very low recall, while many highly cited papers have no tracked altmetric events.

## Uses in Science of Science

- Extends [altmetric-citation association](altmetric_citation_association.md) beyond correlation into task-based validation.
- Tests [altmetric composite scores](../measures/altmetric_composite_scores.md) and [social media attention channels](../datasets/social_media_attention_channels.md) as discovery or alerting tools.
- Provides a guardrail for [responsible metrics](../measures/responsible_metrics.md) when altmetrics are proposed for evaluation or ranking.

## Operationalization

- Define a high-citation target such as top 1% field-normalized citation impact.
- Sort papers by altmetric source counts, composite scores, or journal citation score baselines.
- Use [journal citation score baseline](../measures/journal_citation_score_baseline.md) or another documented venue baseline when testing whether altmetrics add filtering value beyond journal impact.
- Compute precision and recall across thresholds and compare against citation or journal baselines.
- Report field-specific curves and the share of highly cited papers with zero altmetric events.
- Re-run the filter in the [altmetric active universe](../methods/altmetric_active_universe.md) to distinguish sparse-coverage failure from within-active-paper ranking failure.

## Evidence and Validations

- Verified full-text evidence from Costas et al. (2015) applies precision-recall analysis to test whether altmetrics identify the top 1% most highly cited publications.
- Costas et al. find that altmetric scores, especially blog mentions, can identify highly cited publications with higher precision than journal citation scores at low recall levels.
- The same study finds lower recall for altmetrics: 55% of top-1% highly cited publications in their population had no altmetric events.
- Costas et al. conclude that altmetrics may help filter a small set of high-impact papers but have limited capacity to reach all or most highly cited publications.
- Costas et al. report that restricting to altmetric-active papers produces only marginal improvements in the overall relationship between altmetrics and impact indicators.

## Caveats

- Highly cited filtering validates a narrow discovery task, not broader public, policy, educational, or societal attention.
- High precision at low recall can be useful for alerting but weak for comprehensive evaluation.
- Results depend on field normalization, source coverage, provider snapshot, and publication-age restrictions.

## Links

- [altmetric-citation association](altmetric_citation_association.md)
- [altmetric composite scores](../measures/altmetric_composite_scores.md)
- [journal citation score baseline](../measures/journal_citation_score_baseline.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [altmetric active universe](../methods/altmetric_active_universe.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [blog and news mention counts](../measures/blog_and_news_mention_counts.md)
- [Twitter mention counts](../measures/twitter_mention_counts.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `altmetric_highly_cited_filtering`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Costas et al. (2015) (2015)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Dimensions ID: `pub.1001115574`
- SciSciNet ID: `W2164277894`
- Aliases: altmetric precision recall; highly cited paper filtering; altmetric discovery validation; blog-mention precision
