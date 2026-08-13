# Self-citation bootstrap ratio intervals

## Summary

Self-citation bootstrap ratio intervals estimate uncertainty in group self-citation-rate ratios by resampling papers or authorships and recomputing the ratio in each bootstrap sample.

## Canonical Form

- Unit of analysis: paper, authorship, gender group, field, year, or self-citation-rate ratio.
- Typical representation: bootstrap distribution of group-rate ratios with percentile confidence intervals.
- Method target: quantify uncertainty around descriptive self-citation gaps without assuming a simple parametric distribution.
- Empirical signature: annual, field, or subgroup ratios are shown with bootstrap confidence bands around the estimated relative rate.

## Uses in Science of Science

- Provides uncertainty estimates for [authorship-normalized self-citation rate](../measures/authorship_normalized_self_citation_rate.md) and [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md).
- Supports field and time comparisons in [JSTOR network dataset](../datasets/jstor_network_dataset.md) analyses.
- Complements [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md) by adding a group-comparison inference layer.
- Helps distinguish noisy small-field ratios from persistent gendered self-citation patterns.

## Operationalization

- Define the group, year, field, or field-year stratum to compare.
- Resample papers or authorships with replacement from the relevant stratum.
- For each bootstrap sample, compute the self-citation rate for each group and then the group-rate ratio.
- Sort bootstrap ratios and report percentile confidence bounds, typically 2.5th and 97.5th percentiles for a 95% interval.
- State whether the resampling unit is papers, authorships, authors, or fields.

## Evidence and Validations

- Verified full-text evidence from King et al. (2017) uses bootstrap methods to estimate confidence intervals for self-citation rates and ratios.
- The paper describes resampling papers with replacement from a year, field, or year-field sample set and calculating statistics over all authorships within the resampled papers.
- King et al. compute men and women self-citation rates in each bootstrap sample, take their ratio, sort the ratio distribution, and use percentile bounds for 95% intervals.
- The resulting intervals are used to show when yearly and field-specific gender ratios are distinguishable from parity.

## Caveats

- Bootstrap intervals inherit the sampling and measurement assumptions of the underlying corpus.
- Resampling papers may not fully capture dependence among repeated authors, teams, fields, or citation practices.
- Sparse field-year cells can still produce unstable ratio intervals.
- Confidence intervals do not by themselves identify causal mechanisms behind a self-citation gap.

## Links

- [authorship-normalized self-citation rate](../measures/authorship_normalized_self_citation_rate.md)
- [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md)
- [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md)
- [JSTOR network dataset](../datasets/jstor_network_dataset.md)
- [self-citation team-size denominator effect](../validations/self_citation_team_size_denominator_effect.md)
- [field-classification sensitivity](../validations/field_classification_sensitivity.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]

## Metadata

- Concept ID: `self_citation_bootstrap_ratio_intervals`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: King et al. (2017) (2017)
- Latest seen paper: King et al. (2017) (2017)
- Primary reference DOI: `10.1177/2378023117738903`
- OpenAlex ID: `W2466144917`
- Dimensions ID: `pub.1099634910`
- SciSciNet ID: `W3104836124`
- Aliases: bootstrap self-citation confidence intervals; self-citation ratio uncertainty; field-year self-citation bootstrap; gender self-citation bootstrap
