# Indicator uncertainty disclosure

## Summary

Published indicator values should disclose uncertainty, error, and conceptual ambiguity rather than presenting scores as exact facts.

## Canonical Form

- Unit of analysis: indicator value, score, rank, confidence interval, sensitivity range, or evaluation report.
- Typical representation: uncertainty-aware metric reporting with error and sensitivity annotations.
- Mechanism, measurement, or validation target: false certainty in metric values and rankings.
- Empirical signature: scores include uncertainty intervals, sensitivity ranges, rounding, or construct caveats..

## Uses in Science of Science

- Extends [indicator false precision](indicator_false_precision.md).
- Applies to [mean normalized citation score](../measures/mean_normalized_citation_score.md) and other citation indicators.
- Supports transparent metric construction in high-stakes settings.

## Operationalization

- Attach uncertainty intervals or sensitivity ranges.
- Round values when precision is unjustified.
- Document construct ambiguity and database-choice uncertainty.

## Evidence and Validations

- Verified full-text evidence from Hicks et al. (2015) says indicator uncertainty and error should accompany published values when quantifiable and warns against overprecise citation and impact-factor distinctions.

## Caveats

- Uncertainty disclosure can be ignored unless decision rules incorporate it.
- Some uncertainty is conceptual rather than statistically quantifiable.

## Links

- [Indicator false precision](indicator_false_precision.md)
- [Mean normalized citation score](../measures/mean_normalized_citation_score.md)
- [Citation impact indicators](../measures/citation_impact_indicators.md)
- [Average-based ranking tail leverage](average_based_ranking_tail_leverage.md)
- [Transparent metric construction](../methods/transparent_metric_construction.md)
- [Responsible metrics](../measures/responsible_metrics.md)

## References

- Hicks, D., Wouters, P., Waltman, L., de Rijcke, S., & Rafols, I. (2015). Bibliometrics: The Leiden Manifesto for research metrics. *Nature*, 520, 429-431. https://doi.org/10.1038/520429a [OpenAlex: W2068452509; Dimensions: pub.1033957063; WoS: unknown]

## Metadata

- Concept ID: `indicator_uncertainty_disclosure`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hicks et al. (2015) (2015)
- Latest seen paper: Hicks et al. (2015) (2015)
- Primary reference DOI: `10.1038/520429a`
- OpenAlex ID: `W2068452509`
- Dimensions ID: `pub.1033957063`
- SciSciNet ID: `W2068452509`
- Aliases: metric error disclosure; indicator confidence reporting; uncertainty-aware scorecard
