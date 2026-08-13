# Research graph layer census

## Summary

Research graph layer census is the measure of release-level entity and relation counts by layer in a linked scholarly database.

## Canonical Form

- Unit of analysis: graph layer, entity type, relation type, database release, node count, or edge count.
- Typical representation: layer-count table, release census, graph summary panel, or coverage dashboard.
- Measurement target: establish denominators before using a scholarly graph for analysis.
- Empirical signature: publications, citations, grants, patents, trials, attention records, and link types are counted separately in a versioned release.

## Uses in Science of Science

- Provides denominator documentation for [Dimensions](../datasets/dimensions.md) and other scholarly graphs.
- Complements [research-object context graphs](../representations/research_object_context_graphs.md) and [scholarly entity graphs](../representations/scholarly_entity_graphs.md).
- Extends [Dimensions citation relation coverage boundary](../validations/dimensions_citation_relation_coverage_boundary.md) from citation edges to all graph layers.
- Pairs naturally with [Dimensions source-ingestion mix](../methods/dimensions_source_ingestion_mix.md).

## Operationalization

- Count records by entity type and relation type in each database release.
- Report which counts are nodes, edges, enriched records, or externally supplied metrics.
- Store release date, snapshot version, access route, and source keys with the census.
- Compare layer counts across releases to detect coverage expansions or schema changes.
- Use layer-specific denominators in downstream rate and coverage calculations.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) reports launch-level counts for publications, enhanced full-text records, citations, grants, grant links, patents, Altmetric records, and clinical-trial links.
- The paper uses those counts to characterize Dimensions as a multi-layer research graph rather than only a publication index.
- This motif is distinct from citation-coverage caveats because it measures all major graph layers.
- It supports reproducibility by making the database release itself a measured object.

## Caveats

- Layer counts are snapshot-specific and can change with provider contracts, extraction improvements, or schema revisions.
- High node counts do not guarantee high-quality links.
- Some layers have different inclusion rules, so layer counts should not be compared as if they share one denominator.

## Links

- [Dimensions](../datasets/dimensions.md)
- [research-object context graphs](../representations/research_object_context_graphs.md)
- [scholarly entity graphs](../representations/scholarly_entity_graphs.md)
- [Dimensions citation relation coverage boundary](../validations/dimensions_citation_relation_coverage_boundary.md)
- [Dimensions source-ingestion mix](../methods/dimensions_source_ingestion_mix.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; SciSciNet: W2888592790; WoS: unknown]

## Metadata

- Concept ID: `research_graph_layer_census`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: graph-layer release census; scholarly graph layer counts; research graph entity census; cross-layer database census
