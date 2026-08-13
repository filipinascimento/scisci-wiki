# Article Influence versus impact-factor divergence

## Summary

Article Influence versus impact-factor divergence checks how journal rankings change when impact factor is replaced by Article Influence Score.

## Canonical Form

- Unit of analysis: journal, field, ranking list, citation window, or metric comparison.
- Typical representation: rank shifts, top-k overlap, line-crossing plot, Spearman correlation, or field-specific rank divergence.
- Validation target: whether a journal-ranking conclusion depends on direct average citations or recursive per-article influence.
- Empirical signature: rankings are correlated overall but individual journals or fields move substantially between the two metrics.

## Uses in Science of Science

- Validates [Article Influence Score](../measures/article_influence_score.md) against [journal impact factor](../measures/journal_impact_factor.md).
- Exposes metric-choice sensitivity in journal rankings and [responsible metrics](../measures/responsible_metrics.md).
- Connects citation-window differences to [citation window selection](../methods/citation_window_selection.md).
- Helps separate field citation-density effects from recursive journal prestige effects.

## Operationalization

- Select a field, journal set, and comparable year.
- Rank journals by impact factor and Article Influence Score.
- Compare rank correlation, top-k overlap, and large rank shifts.
- Inspect explanations such as reference-list length, preprint citation behavior, citation age, review-journal status, and field citation density.
- Use a [metric rank crosswalk plot](../representations/metric_rank_crosswalk_plot.md) for top-k rank movement and [journal metric divergence decomposition](../methods/journal_metric_divergence_decomposition.md) for explanation.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) compares economics journals ranked by impact factor with the same field ranked by Article Influence Score.
- The paper reports substantial individual rank changes despite overall correlation because both metrics use related citation data.
- West et al. argue that Article Influence reduces some field and subfield biases from reference-list length, preprint citation, and citation-timing differences.
- The same full text notes that impact factor used a two-year window while Eigenfactor metrics used a five-year window, which can favor fields where citations mature more slowly.
- West et al. display the rank comparison as a paired list and use field citation-tempo evidence to explain why window length can change journal standing.
- These explanations are split out as [citing-side fractional journal votes](../methods/citing_side_fractional_journal_votes.md), [Eigenfactor citation-window lag sensitivity](eigenfactor_citation_window_lag_sensitivity.md), and [review-journal Article Influence inflation](review_journal_article_influence_inflation.md).

## Caveats

- Divergence does not prove one ranking is correct; it identifies dependence on metric assumptions.
- Rank shifts can reflect citation-window length, review-article prevalence, database coverage, or document-type handling rather than recursive influence alone.
- Evaluation systems should report uncertainty and local relevance rather than treating either ranking as definitive.

## Links

- [Article Influence Score](../measures/article_influence_score.md)
- [Eigenfactor Score](../measures/eigenfactor_score.md)
- [Eigenfactor metrics](../measures/eigenfactor_metrics.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [citation window selection](../methods/citation_window_selection.md)
- [metric rank crosswalk plot](../representations/metric_rank_crosswalk_plot.md)
- [journal metric divergence decomposition](../methods/journal_metric_divergence_decomposition.md)
- [field citation tempo profile](../representations/field_citation_tempo_profile.md)
- [Eigenfactor citation-window lag sensitivity](eigenfactor_citation_window_lag_sensitivity.md)
- [citing-side fractional journal votes](../methods/citing_side_fractional_journal_votes.md)
- [review-journal Article Influence inflation](review_journal_article_influence_inflation.md)
- [source normalized impact per paper](../measures/source_normalized_impact_per_paper.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [indicator false precision](indicator_false_precision.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]

## Metadata

- Concept ID: `article_influence_impact_factor_divergence`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: Article Influence IF rank shift; impact factor Article Influence divergence; journal ranking divergence; Eigenfactor impact-factor comparison
