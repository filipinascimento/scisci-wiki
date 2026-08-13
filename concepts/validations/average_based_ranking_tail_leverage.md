# Average-based ranking tail leverage

## Summary

Average-based ranking tail leverage is the validation concern that mean citation indicators and rankings can be shifted strongly by a single extremely cited publication.

## Canonical Form

- Unit of analysis: institution, department, journal set, citation average, percentile indicator, ranking table, or highly cited outlier.
- Typical representation: sensitivity comparison between mean-based rankings and percentile-based rankings.
- Validation target: test whether a rank position is driven by broad performance or by a small number of tail observations.
- Empirical signature: removing or downweighting one extreme paper changes mean-based rank far more than percentile or distributional indicators.

## Uses in Science of Science

- Adds an outlier-sensitivity test to [mean normalized citation score](../measures/mean_normalized_citation_score.md).
- Explains why [citation percentile indicators](../measures/citation_percentile_indicators.md) and [top percentile publication share](../measures/top_percentile_publication_share.md) are often preferred for assessment.
- Connects [responsible metrics](../measures/responsible_metrics.md) to the broader problem of ranking instability.
- Provides a concrete failure mode for [global-ranking indicator obsession](../mechanisms/global_ranking_indicator_obsession.md).

## Operationalization

- Recompute institutional or unit rankings after removing the highest-cited paper from each unit.
- Compare mean-based indicators with percentile-based indicators on rank correlation, rank shifts, and top-rank substitutions.
- Report leverage diagnostics alongside ranking tables.
- Stratify by unit size because small departments are more vulnerable to one-paper leverage.
- Use bootstraps or jackknife influence measures when full removal is too coarse.

## Evidence and Validations

- Verified full-text evidence from Hicks et al. (2015) contrasts percentile indicators with citation-average rankings under the influence of a single highly cited publication.
- The Leiden Manifesto uses the example to show why simple averages can create misleading assessment outcomes.
- The motif is a validation layer rather than a new citation measure: it tests rank sensitivity to tail leverage.
- It also links metric design to incentives because tail-sensitive averages can reward extreme outliers over portfolio breadth.

## Caveats

- Tail leverage is not always an error; some evaluation questions deliberately value rare exceptional outputs.
- Percentile indicators can hide magnitude above the threshold and require their own robustness checks.
- Citation tails vary by field and publication year, so leverage diagnostics should use field-year normalized baselines.

## Links

- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [mean normalized citation score](../measures/mean_normalized_citation_score.md)
- [top percentile publication share](../measures/top_percentile_publication_share.md)
- [global-ranking indicator obsession](../mechanisms/global_ranking_indicator_obsession.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [indicator false precision](indicator_false_precision.md)
- [citation higher-moment outlier leverage](citation_higher_moment_outlier_leverage.md)

## References

- Hicks, D., Wouters, P., Waltman, L., de Rijcke, S., & Rafols, I. (2015). Bibliometrics: The Leiden Manifesto for research metrics. *Nature*, 520, 429-431. https://doi.org/10.1038/520429a [OpenAlex: W2068452509; Dimensions: pub.1033957063; SciSciNet: W2068452509; WoS: unknown]

## Metadata

- Concept ID: `average_based_ranking_tail_leverage`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hicks et al. (2015) (2015)
- Latest seen paper: Hicks et al. (2015) (2015)
- Primary reference DOI: `10.1038/520429a`
- OpenAlex ID: `W2068452509`
- Dimensions ID: `pub.1033957063`
- SciSciNet ID: `W2068452509`
- Aliases: mean-ranking outlier leverage; citation-average tail sensitivity; single-paper ranking leverage; average indicator outlier sensitivity
