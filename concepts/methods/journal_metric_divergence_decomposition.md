# Journal metric divergence decomposition

## Summary

Journal metric divergence decomposition explains rank disagreement between journal metrics by separating source prestige, citing-side density, preprint behavior, citation-age windows, and self-citation policy.

## Canonical Form

- Unit of analysis: journal, field, metric pair, rank shift, citation source, window, or self-citation rule.
- Typical representation: narrative or quantitative decomposition of why a journal moves between two indicator rankings.
- Method target: convert metric disagreement from a black-box rank difference into interpretable assumptions.
- Empirical signature: rank shifts are traced to identifiable components such as recursive weighting, reference-list length, citation tempo, or excluded self-citations.

## Uses in Science of Science

- Interprets [Article Influence versus impact-factor divergence](../validations/article_influence_impact_factor_divergence.md).
- Connects [citing-side fractional journal votes](citing_side_fractional_journal_votes.md), [Eigenfactor citation-window lag sensitivity](../validations/eigenfactor_citation_window_lag_sensitivity.md), and [journal self-citation exclusion](../validations/journal_self_citation_exclusion.md).
- Supports [responsible metrics](../measures/responsible_metrics.md) by explaining which metric assumptions drive evaluation changes.

## Operationalization

- Identify journals with large rank differences between two metrics.
- Decompose the metrics into their major assumptions: source weighting, denominator choice, citation window, field normalization, self-citation exclusion, and document types.
- Use field-specific evidence such as reference-list length, preprint citation practices, and citation-age profiles to explain shifts.
- Report which assumptions plausibly explain each major rank movement and which remain unexplained.

## Evidence and Validations

- Verified full-text evidence from West, Bergstrom, and Bergstrom (2010) explains divergence between impact factor and Article Influence rankings.
- The paper attributes some differences to Eigenfactor's weighting of citations from influential journals, adjustment for differences in citation density, treatment of preprint-heavy fields, five-year citation windows, and exclusion of journal self-citations.
- This turns the ranking comparison into a reusable decomposition method rather than only a list of changed ranks.

## Caveats

- Decompositions can be qualitative unless the analyst recomputes counterfactual metrics one assumption at a time.
- Explanatory components can be correlated, making attribution uncertain.
- A successful decomposition does not decide which metric should govern an evaluation.

## Links

- [Article Influence versus impact-factor divergence](../validations/article_influence_impact_factor_divergence.md)
- [citing-side fractional journal votes](citing_side_fractional_journal_votes.md)
- [Eigenfactor citation-window lag sensitivity](../validations/eigenfactor_citation_window_lag_sensitivity.md)
- [journal self-citation exclusion](../validations/journal_self_citation_exclusion.md)
- [metric rank crosswalk plot](../representations/metric_rank_crosswalk_plot.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [Article Influence Score](../measures/article_influence_score.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; SciSciNet: W1993001003; WoS: unknown]

## Metadata

- Concept ID: `journal_metric_divergence_decomposition`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: journal ranking divergence decomposition; metric-assumption decomposition; impact-factor Article Influence explanation; journal metric rank-shift audit
