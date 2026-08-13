# Contextual analytics panels

## Summary

Contextual analytics panels summarize search results by researchers, institutions, citations, publications, research categories, funders, journals, and object-specific facets so users can interpret a research area in context.

## Canonical Form

- Unit of analysis: query result set, analytical facet, search-result object type, aggregated summary, or context panel.
- Typical representation: search-result dashboard with object-type-specific facets, counts, time series, categories, institutions, funders, and journals.
- Representation target: give a compact contextual overview of a research area rather than only returning individual records.
- Empirical signature: a query over publications, grants, patents, or clinical trials exposes different analytical views and facets appropriate to that object type.

## Uses in Science of Science

- Provides a user-facing representation of [research-object context graphs](research_object_context_graphs.md) and [Dimensions](../datasets/dimensions.md).
- Turns [cross-type research classification](../methods/cross_type_research_classification.md), [GRID affiliation mapping](../methods/grid_affiliation_mapping.md), and [Dimensions grant-acknowledgment mining](../methods/dimensions_grant_acknowledgment_mining.md) into exploratory summaries.
- Supports field reconnaissance: active researchers, key institutions, funding presence, publication volume, citation volume, and venue mix.
- Makes [responsible metrics](../measures/responsible_metrics.md) more practical when panels expose multiple context dimensions instead of a single ranking.
- Requires [Dimensions access-tier scope](../validations/dimensions_access_tier_scope.md) when panel facets or searchable object types depend on interface route.
- Bridges to scripted extraction through the [Dimensions relation-query language](../methods/dimensions_relation_query_language.md).

## Operationalization

- Define the query result set and object type before aggregating.
- Select facets appropriate to the object type: publications, grants, patents, clinical trials, or mixed records.
- Display counts and summaries with source snapshot, denominator, and classification version where possible.
- Keep analytical panels exploratory; do not treat dashboard rankings as causal estimates or evaluation decisions.
- Provide routes from aggregate panels back to records and relation provenance.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) describes Dimensions analytical views as contextual summaries layered over search results.
- Hook et al. list examples including productive researchers, publication volume, citation volume, key institutions, research categorization, acknowledged funders, and journals.
- The same full text states that the available analytical views depend on whether search results involve publications, grants, clinical trials, or patents.
- Hook et al. frame these panels as a way to quickly understand emergent research areas, active institutions and researchers, funding maturity, collaborations, and candidate collaborators.

## Caveats

- Search-result panels inherit query wording, indexing, and classification biases.
- Dashboard summaries can encourage overinterpretation if denominator and source coverage are not visible.
- Object-type-specific facets are useful for exploration but can make cross-object comparisons fragile.

## Links

- [Dimensions](../datasets/dimensions.md)
- [research-object context graphs](research_object_context_graphs.md)
- [cross-type research classification](../methods/cross_type_research_classification.md)
- [GRID affiliation mapping](../methods/grid_affiliation_mapping.md)
- [Dimensions grant-acknowledgment mining](../methods/dimensions_grant_acknowledgment_mining.md)
- [Dimensions access-tier scope](../validations/dimensions_access_tier_scope.md)
- [Dimensions relation-query language](../methods/dimensions_relation_query_language.md)
- [Dimensions open metrics API](../methods/dimensions_open_metrics_api.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `contextual_analytics_panels`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: Dimensions analytical views; context dashboard; search-result analytics panel; object-specific analytical facets
