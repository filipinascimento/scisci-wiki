# Normalized citation aggregation choice

## Summary

Normalized citation aggregation choice is the decision between averaging paper-level normalized citation ratios and taking the ratio of aggregate observed to expected citations.

## Canonical Form

- Unit of analysis: paper, portfolio, author, institution, country, journal, or evaluation report.
- Typical representation: average of ratios, ratio of averages, observed-over-expected total ratio, or aggregation sensitivity table.
- Method target: decide how paper-level normalized citation scores become a portfolio-level indicator.
- Empirical signature: the same publication set can yield different normalized averages under the two aggregation rules.

## Uses in Science of Science

- Refines [mean normalized citation score](../measures/mean_normalized_citation_score.md) by making the aggregation rule explicit.
- Supports [responsible metrics](../measures/responsible_metrics.md) because indicator construction choices can affect rankings and interpretations.
- Links [cited-side normalization](cited_side_normalization.md) to portfolio-level evaluation.
- Helps audit whether field, document-type, and low-expected-citation papers dominate aggregate results.

## Operationalization

- For the average-of-ratios approach, compute observed divided by expected citations for each paper, then average those ratios.
- For the ratio-of-averages approach, sum or average observed citations across the portfolio and divide by summed or averaged expected citations.
- Report both when portfolio size is small or expected citation counts vary strongly.
- Document how zero or very low expected citation baselines are handled.
- Pair aggregation-rule sensitivity with [reference set construction](reference_set_construction.md).

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) describes two normalized variants of average citations: the average of paper-level normalized citation scores and the ratio of actual total citations to expected total citations.
- In Waltman's example, the same five-publication set has an average normalized citation score of 1.07 but an actual-to-expected total citation ratio of 0.88.
- The review notes that most researchers prefer the average-of-ratios approach, while other authors defend the ratio-of-averages approach.
- Waltman reports that empirical differences are often small at country and institution levels, but the choice remains conceptually important.

## Caveats

- Average-of-ratios can give high influence to papers with very low expected citation counts.
- Ratio-of-averages can weight high-expected-citation papers more strongly.
- Similar aggregate values can hide paper-level differences, so distributional reporting is still useful.

## Links

- [mean normalized citation score](../measures/mean_normalized_citation_score.md)
- [cited-side normalization](cited_side_normalization.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [reference set construction](reference_set_construction.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `normalized_citation_aggregation_choice`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: average of ratios; ratio of averages; observed expected total ratio; normalized citation aggregation
