# Ranking correlation diagnostic

## Summary

Ranking correlation diagnostic is a validation motif that separates broad correlation between indicators from consequential changes in the rank ordering of specific journals, papers, authors, or institutions.

## Canonical Form

- Unit of analysis: metric pair, ranked list, journal set, or evaluation category.
- Typical representation: rank correlation, scatterplot, crosswalk, or paired top-list comparison.
- Validation target: whether two indicators are interchangeable for the intended decision.
- Empirical signature: metrics can be highly correlated overall while still moving key entities enough to affect interpretation.

## Uses in Science of Science

- Extends [metric rank crosswalk plot](../representations/metric_rank_crosswalk_plot.md) from visualization to validation.
- Supports [journal metric divergence decomposition](../methods/journal_metric_divergence_decomposition.md).
- Explains why [Article Influence versus impact-factor divergence](article_influence_impact_factor_divergence.md) matters despite shared citation data.
- Connects to [top-k metric membership exclusion](../representations/top_k_metric_membership_exclusion.md).

## Operationalization

- Compute rank or score correlations between two indicators.
- Identify entities with the largest absolute rank changes.
- Inspect top-k membership changes separately from overall correlation.
- Interpret differences by field, journal type, review status, or citation tempo.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) notes that Article Influence and impact factor use related citation information and are correlated.
- The same section emphasizes that many journal ranks change substantially between the two metrics.
- The paper points to correlation views and paired rankings as tools for diagnosing those differences.

## Caveats

- Correlation can hide local rank instability in policy-relevant regions.
- Low correlation is not automatically evidence that one indicator is better.
- Rank diagnostics should be paired with construct definitions and uncertainty checks.

## Links

- [metric rank crosswalk plot](../representations/metric_rank_crosswalk_plot.md)
- [journal metric divergence decomposition](../methods/journal_metric_divergence_decomposition.md)
- [Article Influence versus impact-factor divergence](article_influence_impact_factor_divergence.md)
- [top-k metric membership exclusion](../representations/top_k_metric_membership_exclusion.md)
- [indicator false precision](indicator_false_precision.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A network approach to assessing scholarly journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; SciSciNet: W1993001003; WoS: unknown]

## Metadata

- Concept ID: `ranking_correlation_diagnostic`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: metric rank correlation diagnostic; ranking divergence check; indicator interchangeability test
