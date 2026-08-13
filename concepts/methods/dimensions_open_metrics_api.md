# Dimensions open metrics API

## Summary

Dimensions open metrics API is the delivery pattern in which article- or record-level metric values are exposed through public endpoints or embeddable badges so they can be reused, displayed, and independently checked.

## Canonical Form

- Unit of analysis: metric endpoint, badge, publication record, returned indicator, update timestamp, or non-commercial reuse route.
- Typical representation: API call, badge URL, metric JSON, display widget, source date, and indicator-definition note.
- Method target: make metric values and their display reusable while preserving enough provenance for responsible interpretation.
- Empirical signature: the same metric can be embedded or queried outside the source platform, with source, date, and definition recoverable.

## Uses in Science of Science

- Connects [Dimensions](../datasets/dimensions.md) infrastructure to [responsible metrics](../measures/responsible_metrics.md), [transparent metric construction](transparent_metric_construction.md), and [evaluated-party data verification](../validations/evaluated_party_data_verification.md).
- Extends [bibliometric data access modes](bibliometric_data_access_modes.md) by distinguishing metric-delivery endpoints from full raw-data access.
- Supports audits of whether displayed indicators are reproducible, dated, and separable from broader platform rankings.
- Provides a lightweight comparison point for OpenAlex, Crossref, Altmetric, iCite, and other metric-bearing services.

## Operationalization

- Archive endpoint URL, query parameters, returned fields, metric definitions, response date, and update cadence.
- Record whether the route is public, non-commercial, subscribed, or local-only.
- Store metric values separately from display badges so later audits can compare the visible widget with the underlying data.
- Pair metric calls with denominator, field, and source-coverage notes before using values in evaluation.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) states that Dimensions offered a free metrics API and Dimensions badges for non-commercial users.
- The same full text frames Dimensions as supporting diversity in metrics and making data available so the research community can create open, reproducible metrics.
- Hook et al. distinguish these public metric routes from a more powerful paid API for interrogating the underlying Dimensions database.
- This separation makes metric APIs useful for display and checking, but not equivalent to full-data access for independent indicator construction.

## Caveats

- Badges can make indicators look authoritative even when definitions, uncertainty, or denominators are hidden.
- Public metric endpoints may expose only selected values rather than the raw records needed for full replication.
- API terms, fields, and update cadence can change, so archived calls and dates are necessary.

## Links

- [Dimensions](../datasets/dimensions.md)
- [Dimensions access-tier scope](../validations/dimensions_access_tier_scope.md)
- [Dimensions relation-query language](dimensions_relation_query_language.md)
- [bibliometric data access modes](bibliometric_data_access_modes.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [transparent metric construction](transparent_metric_construction.md)
- [evaluated-party data verification](../validations/evaluated_party_data_verification.md)
- [contextual analytics panels](../representations/contextual_analytics_panels.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `dimensions_open_metrics_api`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: Dimensions metrics API; open metrics badges; reproducible metric endpoint; metric badge delivery
