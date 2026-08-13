# Author-metric threshold randomness

## Summary

Fixed author-metric thresholds and top-q publication rules can create arbitrary classifications near cut points, so metric uses should report threshold sensitivity.

## Canonical Form

- Unit of analysis: author ranking, candidate set, or evaluation rule.
- Typical representation: rank-stability or classification-stability curve across threshold values.
- Validation target: arbitrariness of citation thresholds and selected-publication counts.
- Empirical signature: candidate ordering or eligibility changes sharply under small threshold shifts.

## Uses in Science of Science

- Provides a local audit for [single-number author-metric tradeoff audit](single_number_author_metric_tradeoff_audit.md).
- Useful when h-index, top-publication counts, or minimum-citation rules are used as screens for jobs, grants, prizes, or promotion.
- Connects author evaluation to broader [responsible metrics](../measures/responsible_metrics.md) practice.

## Operationalization

- Sweep citation cutoffs, h-index thresholds, and top-q publication counts across plausible ranges.
- Report rank correlations, eligibility flips, and the identities of threshold-sensitive cases.
- Pair the sweep with qualitative review for candidates whose classification is unstable.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) criticizes arbitrary thresholds used in counts of significant papers or top-cited papers.
- The h-index was proposed partly to avoid a single externally chosen citation threshold, but downstream uses can reintroduce threshold arbitrariness.

## Caveats

- Some thresholds are institutionally necessary for workflow, but they should be treated as policy choices rather than natural categories.
- Stability under thresholds does not prove validity; it only reduces one source of arbitrariness.

## Links

- [Single-number author-metric tradeoff audit](single_number_author_metric_tradeoff_audit.md)
- [Citation threshold profile](../measures/citation_threshold_profile.md)
- [Citation percentile indicators](../measures/citation_percentile_indicators.md)
- [Responsible metrics](../measures/responsible_metrics.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]

## Metadata

- Concept ID: `author_metric_threshold_randomness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Hirsch (2005) (2005)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: author metric cutoff sensitivity; citation threshold arbitrariness; metric threshold stability audit
