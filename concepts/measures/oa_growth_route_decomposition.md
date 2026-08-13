# OA growth route decomposition

## Summary

OA growth route decomposition measures how open-access growth over publication years is distributed across Gold, Hybrid, Green, Bronze, and Closed route changes.

## Canonical Form

- Unit of analysis: publication year, article, OA route, discipline, publisher, or DOI sample.
- Typical representation: route-specific OA share by year, stacked route time series, or decomposition of total OA growth.
- Measurement target: distinguish overall OA growth from the access routes driving that growth.
- Empirical signature: total OA share rises while specific routes grow, flatten, or change with different timing.

## Uses in Science of Science

- Extends [open access prevalence measurement](open_access_prevalence_measurement.md) from a single prevalence estimate to route-specific time trends.
- Uses route categories from [open access route typology](../datasets/open_access_route_typology.md).
- Helps interpret [Bronze open access ambiguity](../validations/bronze_open_access_ambiguity.md) and [Green OA backfill temporal bias](../validations/green_oa_backfill_temporal_bias.md).
- Supports OA policy evaluation by distinguishing publisher-model growth from repository deposit growth.

## Operationalization

- Resolve OA status and route for a date-stamped sample of articles.
- Group articles by publication year and route.
- Report route-specific shares and total OA share, with measurement date and resolver version.
- Audit Green OA backfill and Bronze/delayed-access ambiguity before interpreting time trends as contemporaneous access at publication.
- Stratify by field or publisher when route growth differs across systems.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) reports that OA share rises in recent publication years and is especially high in 2015.
- The paper attributes recent growth largely to Gold and Hybrid OA, while Bronze appears comparatively stable and older free articles may reflect delayed access.
- This motivates decomposing OA growth by route rather than treating total OA as a single publishing-model trend.

## Caveats

- OA status is measured at a snapshot date, not necessarily at the publication date.
- Route labels are exclusive in many resolvers, so publisher-hosted access can shadow repository copies.
- Older cohorts can accumulate Green or Bronze access over time, creating retrospective growth patterns.

## Links

- [open access prevalence measurement](open_access_prevalence_measurement.md)
- [open access status](../datasets/open_access_status.md)
- [open access route typology](../datasets/open_access_route_typology.md)
- [Bronze open access ambiguity](../validations/bronze_open_access_ambiguity.md)
- [Green OA backfill temporal bias](../validations/green_oa_backfill_temporal_bias.md)
- [publisher-hosted route precedence](../validations/publisher_hosted_route_precedence.md)
- [reader-demand recency skew](../validations/reader_demand_recency_skew.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `oa_growth_route_decomposition`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Dimensions ID: `pub.1101032124`
- SciSciNet ID: `W2741809807`
- Aliases: OA route growth decomposition; route-specific OA growth; open-access time trend by route; Gold Hybrid Green Bronze growth
