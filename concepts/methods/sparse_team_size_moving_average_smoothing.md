# Sparse team-size moving-average smoothing

## Summary

Sparse team-size moving-average smoothing estimates team-size outcome curves when very large teams produce sparse and noisy cells.

## Canonical Form

- Unit of analysis: team-size bin, field, journal, outcome mean, sample size, or smoothed curve.
- Typical representation: moving average weighted by the number of observations in nearby team-size cells.
- Method target: visualize or estimate team-size gradients without letting sparse large-team cells dominate the apparent curve.
- Empirical signature: smoothed curves preserve monotonic team-size patterns while stabilizing noisy tail estimates.

## Uses in Science of Science

- Supports field- and journal-level versions of [team size and disruption](../mechanisms/team_size_disruption.md).
- Provides a local smoothing method for team-size analyses that intersect with [field classifications](../measures/field_classifications.md).
- Helps make large-team tail behavior comparable to broader [citation distribution scaling](../measures/citation_distribution_scaling.md) diagnostics.

## Operationalization

- Compute outcome means by team size within a field, journal, or time slice.
- Define a moving window around each team size.
- Weight neighboring team-size cells by sample size.
- Use thresholds or wider windows when large-team cells are sparse.
- Report raw cell counts alongside smoothed estimates.

## Evidence and Validations

- Verified full-text evidence from Wu et al. (2019) defines a thresholded moving-average smoother for journal and subfield team-size curves.
- The method weights by sample size to stabilize sparse large-team bins.
- It supports visualization of the negative association between team size and disruption across more granular contexts.

## Caveats

- Smoothing can hide real discontinuities, especially around mega-team regimes.
- Window and threshold choices should be reported because they affect the large-team tail.
- Smoothed figures should be paired with unsmoothed counts or confidence intervals.

## Links

- [team size and disruption](../mechanisms/team_size_disruption.md)
- [field classifications](../measures/field_classifications.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [team-size distribution contrast tests](../validations/team_size_distribution_contrast_tests.md)
- [team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; SciSciNet: W2913773162; WoS: unknown]

## Metadata

- Concept ID: `sparse_team_size_moving_average_smoothing`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: sparse team-size smoothing; weighted team-size moving average; large-team tail smoothing; team-size curve stabilization
