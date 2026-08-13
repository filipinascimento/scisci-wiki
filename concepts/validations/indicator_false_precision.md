# Indicator false precision

## Summary

Indicator false precision occurs when a metric reports more numerical detail or ranking certainty than the underlying data, concept, or model can justify.

## Canonical Form

- Unit of analysis: indicator value, ranking, journal, researcher, institution, portfolio, or evaluation report.
- Typical representation: excessive decimal places, over-interpreted rank differences, missing error bars, or uncertainty-free scorecards.
- Validation target: test whether reported precision matches measurement uncertainty and conceptual ambiguity.
- Empirical signature: tiny score differences are treated as meaningful despite unstable data, skewed distributions, ambiguous constructs, or random variability.

## Uses in Science of Science

- Provides a guardrail for [journal impact factor](../measures/journal_impact_factor.md), [h-index](../measures/h_index.md), [mean normalized citation score](../measures/mean_normalized_citation_score.md), and rankings.
- Connects [responsible metrics](../measures/responsible_metrics.md) to uncertainty reporting.
- Helps distinguish measurement from score theater in dashboards and league tables.
- Complements [transparent metric construction](../methods/transparent_metric_construction.md) because formulas can be transparent yet over-precise.

## Operationalization

- Report uncertainty intervals, sensitivity ranges, or rounded values when measurement uncertainty is large.
- Test rank stability under database, citation-window, field-classification, and self-citation choices.
- Avoid interpreting small differences that are within plausible error or model uncertainty.
- Document conceptual ambiguity when the metric's target construct has multiple interpretations.

## Evidence and Validations

- Verified full-text evidence from Hicks et al. (2015) warns against misplaced concreteness and false precision in science and technology indicators.
- Hicks et al. argue that indicators require strong assumptions and that the meaning of citation counts remains conceptually debated.
- The article recommends multiple indicators and uncertainty information when it can be quantified.
- Hicks et al. use journal impact factor decimal places as an example: very small impact-factor differences should not be treated as substantively meaningful.

## Caveats

- Rounding can hide meaningful uncertainty if users still interpret rank order as exact.
- Some decisions require thresholds, so the threshold should be justified and sensitivity-tested.
- False precision can also appear in qualitative scoring rubrics, not only in numeric indicators.

## Links

- [responsible metrics](../measures/responsible_metrics.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [h-index](../measures/h_index.md)
- [mean normalized citation score](../measures/mean_normalized_citation_score.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [transparent metric construction](../methods/transparent_metric_construction.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [citation window selection](../methods/citation_window_selection.md)
- [normalized citation aggregation choice](../methods/normalized_citation_aggregation_choice.md)

## References

- Hicks, D., Wouters, P., Waltman, L., de Rijcke, S., & Rafols, I. (2015). Bibliometrics: The Leiden Manifesto for research metrics. *Nature*, 520, 429-431. https://doi.org/10.1038/520429a [OpenAlex: W2068452509; Dimensions: pub.1033957063; WoS: unknown]

## Metadata

- Concept ID: `indicator_false_precision`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hicks et al. (2015) (2015)
- Latest seen paper: Hicks et al. (2015) (2015)
- Primary reference DOI: `10.1038/520429a`
- OpenAlex ID: `W2068452509`
- Dimensions ID: `pub.1033957063`
- SciSciNet ID: `W2068452509`
- Aliases: false precision; misplaced concreteness; overprecise metrics; ranking uncertainty
