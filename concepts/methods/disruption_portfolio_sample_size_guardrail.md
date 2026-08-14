# Disruption portfolio sample-size guardrail

## Summary

The disruption portfolio sample-size guardrail limits D-index comparisons to sufficiently large paper sets because strongly disruptive outcomes are rare and small portfolios produce unstable profiles.

## Canonical Form

- Unit of analysis: researcher, institution, funding portfolio, field, country, or publication cohort.
- Typical representation: eligible-paper count alongside the distribution and uncertainty of D-index values.
- Methodological target: stable inference about a portfolio's disruption profile.
- Empirical signature: organization- or funder-level portfolios with hundreds or thousands of papers support more stable estimates than modest individual publication records.

## Uses in Science of Science

- Provides an application boundary for [disruption index](../measures/disruption_index.md) in research evaluation.
- Favors portfolio-level interpretation over ranking individual scholars with few eligible papers.
- Connects disruption analysis to [responsible metrics](../measures/responsible_metrics.md) and explicit denominator reporting.

## Operationalization

- Report the number and share of outputs eligible for D-index calculation before any comparison.
- Show the score distribution, high-disruption tail count, uncertainty interval, and sensitivity to inclusion thresholds.
- Stratify robustness checks by researcher productivity or portfolio size.
- Avoid individual-level league tables when the eligible denominator is too small to represent rare disruptive outcomes.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2026) finds that about 38% of papers have positive local displacement but only about 1% surpass their most cited predecessor.
- The authors conclude that meaningful disruption analysis generally requires hundreds or thousands of papers.
- They recommend organization, national-system, or funding-portfolio applications over assessment of individual scholars with modest output.

## Caveats

- No universal minimum sample size is established; required size depends on the estimand and tail frequency.
- Large portfolios can still be compositionally incomparable across fields, years, and document types.
- Aggregation can hide important paper-level heterogeneity and should not turn disruption into a single quality score.

## Links

- [disruption index](../measures/disruption_index.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [portfolio-based researcher assessment](portfolio_based_researcher_assessment.md)
- [minimum per-cell sample-size guardrail](minimum_per_cell_sample_size_guardrail.md)
- [disruption measure validation](../validations/disruption_measure_validation.md)
- [OpenAlex disruption-decomposition corpus](../datasets/openalex_disruption_decomposition_corpus.md)

## References

- Lin, Y., Li, L., & Wu, L. (2026). The Disruption Index measures displacement between a paper and its most cited reference. *Quantitative Science Studies*, 7, 229-239. https://doi.org/10.1162/QSS.a.409 [OpenAlex: W7119230500; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `disruption_portfolio_sample_size_guardrail`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2026) (2026)
- Latest seen paper: Lin et al. (2026) (2026)
- Primary reference DOI: `10.1162/qss.a.409`
- OpenAlex ID: `W7119230500`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: D-index portfolio denominator guardrail; disruption sample-size requirement; disruption evaluation denominator
