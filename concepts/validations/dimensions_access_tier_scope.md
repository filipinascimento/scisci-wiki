# Dimensions access-tier scope

## Summary

Dimensions access-tier scope is the provenance caveat that the searchable entities, facets, analytics, APIs, and full-text routes exposed by Dimensions depend on the access route or subscription tier used.

## Canonical Form

- Unit of analysis: access tier, interface route, API entitlement, searchable object type, facet, analytical view, or retrieved denominator.
- Typical representation: access-scope manifest with free, subscribed, API, snapshot, and local-extract fields.
- Validation target: prevent an analysis denominator from being confused with the underlying database scope when the interface only exposes part of the graph.
- Empirical signature: publications may be searchable while linked grants, patents, clinical trials, policy records, or extended facets are visible only through another route.

## Uses in Science of Science

- Qualifies [Dimensions](../datasets/dimensions.md) analyses that use the web interface, API, local extracts, or derived tables.
- Extends [bibliometric data access modes](../methods/bibliometric_data_access_modes.md) from generic access provenance to object-type-specific availability.
- Adds a product-scope layer to [contextual analytics panels](../representations/contextual_analytics_panels.md), because the same query may expose different facets under different access routes.
- Helps compare Dimensions with [OpenAlex](../datasets/openalex.md), Web of Science, Scopus, and local snapshots under [citation database coverage sensitivity](citation_database_coverage_sensitivity.md).

## Operationalization

- Record whether data came from the free interface, Dimensions Plus, the public metrics API, the paid API, a local snapshot, or a licensed extract.
- For each extraction, state which object types were searchable, which were only linked from publication records, and which facets or analytics were available.
- Preserve query date, interface route, API version, fields returned, pagination, and any institutional entitlement used.
- Treat missing search results under a limited access tier as unknown coverage unless a full extract confirms absence.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) states that the free Dimensions version included a searchable publication index and links to other entities.
- The same full text states that the subscription version included further faceting, further analytical capabilities, and searchable indices for non-publication content.
- Hook et al. also describe a free metrics API and badges for non-commercial users, plus a more powerful paid API for interrogating the underlying Dimensions database.
- This makes access route a reproducibility variable for Dimensions-based science-of-science analyses, not just an implementation detail.

## Caveats

- Access tiers and API capabilities can change, so older interface descriptions should be tied to observation dates.
- Searchability is not the same as database existence; linked-but-not-searchable entities may still exist in the underlying graph.
- Local licensed extracts may differ from live interfaces because of snapshot date, schema, and entitlement.

## Links

- [Dimensions](../datasets/dimensions.md)
- [bibliometric data access modes](../methods/bibliometric_data_access_modes.md)
- [Dimensions relation-query language](../methods/dimensions_relation_query_language.md)
- [Dimensions full-text delivery layer](../methods/dimensions_full_text_delivery_layer.md)
- [Dimensions open metrics API](../methods/dimensions_open_metrics_api.md)
- [contextual analytics panels](../representations/contextual_analytics_panels.md)
- [research-object context graphs](../representations/research_object_context_graphs.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [bibliographic database staleness caveat](bibliographic_database_staleness_caveat.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `dimensions_access_tier_scope`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: Dimensions free paid scope; Dimensions Plus access tier; nonpublication search entitlement; access-tier denominator
