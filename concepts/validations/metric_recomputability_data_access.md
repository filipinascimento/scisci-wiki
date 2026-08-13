# Metric recomputability data access

## Summary

Metric recomputability data access is the validation condition that metric infrastructure exposes enough data for independent third parties to recalculate and verify indicators.

## Canonical Form

- Unit of analysis: metric, database, API, data access tier, indicator formula, or verification workflow.
- Typical representation: recomputation audit, open-metrics API check, reproducibility table, or access-scope statement.
- Validation target: determine whether users can independently reproduce reported metrics rather than only consume platform scores.
- Empirical signature: formulas, source data, denominators, and access routes are sufficient for external recalculation.

## Uses in Science of Science

- Adds a reproducibility standard to [Dimensions open metrics API](../methods/dimensions_open_metrics_api.md).
- Qualifies [Dimensions access-tier scope](dimensions_access_tier_scope.md) with an auditability requirement.
- Connects [contextual analytics panels](../representations/contextual_analytics_panels.md) to responsible metric use.
- Bridges Dimensions infrastructure with broader [responsible metrics](../measures/responsible_metrics.md).

## Operationalization

- Select platform metrics and document their formulas, input fields, and denominators.
- Attempt to recompute each metric from accessible data under the stated access tier.
- Compare recomputed values with platform values and record discrepancies.
- Report which inputs are unavailable, proprietary, or version-dependent.
- Require source snapshots and API versions for reproducible metric checks.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) argues that data should be open enough for independent metric calculation and verification.
- The paper frames metrics as community-owned and reproducible rather than merely platform-defined.
- This motif is distinct from API availability because an API can expose scores without enough information to recompute them.
- It is a practical validation requirement for any metric system used in evaluation.

## Caveats

- Licensing can limit full data redistribution even when recomputation is possible.
- Recomputability depends on snapshot version, deduplication rules, and access rights.
- Some metrics require external data not held by the platform.

## Links

- [Dimensions open metrics API](../methods/dimensions_open_metrics_api.md)
- [Dimensions access-tier scope](dimensions_access_tier_scope.md)
- [contextual analytics panels](../representations/contextual_analytics_panels.md)
- [Dimensions](../datasets/dimensions.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [commercial metric-provider accountability](commercial_metric_provider_accountability.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; SciSciNet: W2888592790; WoS: unknown]

## Metadata

- Concept ID: `metric_recomputability_data_access`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: metric recomputability access; independent metric recalculation; indicator verification data access; metric auditability access
