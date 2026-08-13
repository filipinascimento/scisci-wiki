# Dimensions relation-query language

## Summary

Dimensions relation-query language is a domain-specific API language for asking questions over linked scholarly entities without requiring the user to know the underlying physical schema.

## Canonical Form

- Unit of analysis: query statement, entity type, relation path, filter, returned field, API route, or result set.
- Typical representation: DSL query plus version, endpoint, fields, relation filters, pagination, and output schema.
- Method target: express science-of-science questions over publications, people, institutions, grants, patents, clinical trials, funders, and categories.
- Empirical signature: a relationship-rich question can be written as a compact query over typed entities and filters rather than a manual chain of table joins.

## Uses in Science of Science

- Provides an executable interface to [research-object context graphs](../representations/research_object_context_graphs.md) and [scholarly entity graphs](../representations/scholarly_entity_graphs.md).
- Complements local table workflows by preserving the conceptual query: what entity is being counted, which relation path is traversed, and which filters define the denominator.
- Supports reproducible extraction from [Dimensions](../datasets/dimensions.md) when the query, access route, API version, and returned fields are archived.
- Helps bridge exploratory [contextual analytics panels](../representations/contextual_analytics_panels.md) and scriptable data collection.

## Operationalization

- Save the exact DSL query, execution date, account or entitlement, API version, pagination behavior, selected fields, and response schema.
- Name the focal entity type and relation semantics before interpreting counts or rankings.
- Keep API query results linked to source identifiers through a [scholarly identifier spine](../representations/scholarly_identifier_spine.md).
- Validate complex query results against small manually inspected examples or local extract joins when possible.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) describes the Dimensions API as a domain-specific language.
- Hook et al. state that the API lets users rely on an intuitive understanding of relationships between objects rather than knowing the underlying Dimensions data structure.
- The paper gives an example of querying publications containing "CRISPR" from 2012 to 2015 where one author was affiliated with an institution in Canada.
- This positions the API language as a relation-aware extraction method for linked science-of-science data.

## Caveats

- A DSL can hide default filters, schema evolution, entitlement limits, and relation-resolution rules.
- Query results may differ across live API runs and local snapshots unless dates and versions are recorded.
- Compact relationship queries still need denominator checks and manual validation for high-stakes measurement.

## Links

- [Dimensions](../datasets/dimensions.md)
- [Dimensions access-tier scope](../validations/dimensions_access_tier_scope.md)
- [Dimensions open metrics API](dimensions_open_metrics_api.md)
- [bibliometric data access modes](bibliometric_data_access_modes.md)
- [research-object context graphs](../representations/research_object_context_graphs.md)
- [scholarly entity graphs](../representations/scholarly_entity_graphs.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [contextual analytics panels](../representations/contextual_analytics_panels.md)
- [research-ready table curation](research_ready_table_curation.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `dimensions_relation_query_language`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: Dimensions DSL; graph relation query language; object-relationship API; semantic scholarly query
