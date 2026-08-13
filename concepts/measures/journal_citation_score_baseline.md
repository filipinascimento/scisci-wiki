# Journal citation score baseline

## Summary

Journal citation score baseline uses the average citation impact of a paper's journal as a benchmark for evaluating whether article-level or altmetric indicators identify highly cited work better than venue-level expectation.

## Canonical Form

- Unit of analysis: journal, paper, publication cohort, citation window, field-normalized journal score, or filtering baseline.
- Typical representation: JCS, JCS_0510_12, JFIS, journal-level average citation count, or precision-recall baseline.
- Measurement target: publication-venue citation expectation used as a comparator for paper-level indicators.
- Empirical signature: journal scores often correlate more strongly with citations than sparse altmetric indicators, but some altmetric sources can exceed them at very low recall.

## Uses in Science of Science

- Provides a journal-level comparator for [altmetric highly cited filtering](../validations/altmetric_highly_cited_filtering.md) and [altmetric-citation association](../validations/altmetric_citation_association.md).
- Connects [journal impact factor](journal_impact_factor.md), [citation impact indicators](citation_impact_indicators.md), and source-specific altmetrics in a common validation task.
- Helps distinguish whether online attention adds discovery value beyond venue prestige or citation expectation.
- Supports responsible evaluation by showing when a new indicator performs no better than a simple journal baseline.

## Operationalization

- Define a journal citation window and compute the average citation count for papers in the same journal.
- When testing article-level indicators, use a journal baseline from a different publication cohort when possible.
- Optionally compute a field-normalized version such as JFIS using subject-category normalization.
- Compare journal baseline rankings with altmetric rankings using precision-recall curves for top-cited papers.
- Report the citation window, self-citation policy, field classification, and whether the baseline is independent of the target paper set.

## Evidence and Validations

- Verified full-text evidence from Costas et al. (2015) defines JCS as the average number of citations received by all publications in the same journal over the 2011-2012 period.
- The paper also computes JCS_0510_12 from publications in the same journal published during 2005-2010 with citations counted up to 2012, creating a journal-impact indicator independent of the 2011 analysis set.
- Costas et al. define JFIS as the field-normalized variant of JCS using Web of Science subject categories.
- In precision-recall analysis for top-1% most cited papers, the paper compares total altmetrics with JCS_0510_12 and finds that JCS generally performs better than total altmetrics, except that altmetrics can outperform at very low recall.
- The study also finds that blog and news mentions can have higher precision than JCS at low recall, supporting journal-score baselines as a useful but not exhaustive comparator.

## Caveats

- Journal averages can reproduce venue prestige effects and should not be treated as article quality.
- Field classification, citation window, publication type, and self-citation handling affect JCS/JFIS values.
- A journal baseline can perform well in prediction while remaining problematic for individual evaluation.
- Comparing altmetrics with journal baselines tests one discovery task, not public, policy, or societal impact.

## Links

- [journal impact factor](journal_impact_factor.md)
- [citation impact indicators](citation_impact_indicators.md)
- [altmetric highly cited filtering](../validations/altmetric_highly_cited_filtering.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [altmetric composite scores](altmetric_composite_scores.md)
- [blog and news mention counts](blog_and_news_mention_counts.md)
- [citation percentile indicators](citation_percentile_indicators.md)
- [responsible metrics](responsible_metrics.md)
- [field classification sensitivity](../validations/field_classification_sensitivity.md)

## References

- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `journal_citation_score_baseline`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Costas et al. (2015) (2015)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Aliases: JCS baseline; journal citation score; JFIS baseline; journal impact filtering baseline
