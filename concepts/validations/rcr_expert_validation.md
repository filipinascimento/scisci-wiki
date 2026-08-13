# RCR expert validation

## Summary

RCR expert validation compares Relative Citation Ratio values with independent expert judgments and indicator robustness properties.

## Canonical Form

- Unit of analysis: paper, expert score, validation dataset, benchmark cohort, or indicator ranking.
- Typical representation: correlation between RCR and expert ratings, plus ranking-invariance and comparator tests.
- Mechanism or measurement target: whether an article-level citation metric tracks expert-assessed influence better than common alternatives.
- Empirical signature: RCR values align with expert evaluations and avoid known pathologies of journal-level or low-denominator metrics.

## Uses in Science of Science

- Provides a validation template for new citation indicators.
- Connects [Relative Citation Ratio](../measures/relative_citation_ratio.md) to [responsible metrics](../measures/responsible_metrics.md).
- Helps separate metric construction from evidence that the metric behaves sensibly in evaluation use cases.

## Operationalization

- Assemble independent expert-scored article sets.
- Compute RCR with a specified benchmark and citation snapshot.
- Test correspondence with expert rankings and compare against alternative metrics.
- Audit robustness properties such as ranking invariance, low-denominator behavior, and field fairness examples.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) compares RCR values to three independent sets of postpublication expert evaluations.
- The validation sets include Faculty of 1000 scores, Science and Technology Policy Institute reviewer scores, and NIH intramural expert reviews.
- Hutchins et al. report that all three approaches show RCR values are well correlated with reviewer judgments.
- The same paper checks ranking invariance and compares RCR with journal impact factor, citations per year, and a Thomson Reuters ratio in selected scenarios.
- Those latter checks are split out as [RCR ranking invariance](rcr_ranking_invariance.md), [low-denominator metric inflation check](low_denominator_metric_inflation_check.md), [co-citation field stabilization check](co_citation_field_stabilization_check.md), and [RCR denominator gaming resistance](rcr_denominator_gaming_resistance.md).

## Caveats

- Expert judgments are not pure ground truth; they can encode field norms, reviewer bias, and limited information.
- The validation is strongest for biomedical and NIH-linked contexts represented in the paper.
- Correlation with expert opinion does not make RCR a direct measure of quality, novelty, or social value.

## Links

- [Relative Citation Ratio](../measures/relative_citation_ratio.md)
- [article citation rate](../measures/article_citation_rate.md)
- [field citation rate](../measures/field_citation_rate.md)
- [expected citation rate](../measures/expected_citation_rate.md)
- [RCR ranking invariance](rcr_ranking_invariance.md)
- [low-denominator metric inflation check](low_denominator_metric_inflation_check.md)
- [co-citation field stabilization check](co_citation_field_stabilization_check.md)
- [RCR denominator gaming resistance](rcr_denominator_gaming_resistance.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [citation metric gaming](citation_metric_gaming.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `rcr_expert_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Aliases: RCR validation; expert-score validation; RCR ranking invariance; RCR robustness checks
