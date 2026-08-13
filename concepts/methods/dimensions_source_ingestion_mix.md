# Dimensions source-ingestion mix

## Summary

Dimensions source-ingestion mix is the method of preserving the upstream provider and source composition behind a unified scholarly graph so coverage and linkage claims remain traceable.

## Canonical Form

- Unit of analysis: data source, provider, entity layer, ingestion route, scholarly graph node, or relation.
- Typical representation: source-provenance table, ingestion map, provider-layer diagram, or release documentation.
- Method target: make a unified research graph auditable by retaining where each entity and relation came from.
- Empirical signature: publications, grants, patents, clinical trials, metrics, and policy or attention records can be traced to provider-specific inputs.

## Uses in Science of Science

- Extends [Dimensions](../datasets/dimensions.md) from a linked database to a source-provenance workflow.
- Complements the [Dimensions publication data spine](../datasets/dimensions_publication_data_spine.md), which covers core publication records rather than all input providers.
- Links to [full-text enrichment source provenance](full_text_enrichment_source_provenance.md) for relation-level extraction routes.
- Helps evaluate assumptions about [external identifier registry authority](../validations/external_identifier_registry_authority.md).

## Operationalization

- Record each provider, source database, extraction route, and update cadence by entity layer.
- Store provenance fields alongside identifiers and relation records where feasible.
- Report which layers are provider-supplied, mined from text, or inferred by enrichment.
- Use source-specific coverage and quality notes when comparing Dimensions with OpenAlex, WoS, Scopus, or SciSciNet.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) describes Dimensions as assembled from multiple upstream providers and data sources.
- The paper names inputs including Crossref, PubMed, DOAJ, publishers, Altmetric, IFI Claims, UberResearch, and other external databases.
- This motif isolates the multi-provider ingestion provenance layer from any one specific node or relation layer.
- It is especially important for downstream analyses that combine publications, grants, patents, trials, and attention indicators.

## Caveats

- Provider lists and source contracts can change across snapshots.
- Provenance can be available at different granularity for nodes versus relations.
- A unified interface can hide source heterogeneity unless scripts preserve provenance explicitly.

## Links

- [Dimensions](../datasets/dimensions.md)
- [Dimensions publication data spine](../datasets/dimensions_publication_data_spine.md)
- [full-text enrichment source provenance](full_text_enrichment_source_provenance.md)
- [external identifier registry authority](../validations/external_identifier_registry_authority.md)
- [research-object context graphs](../representations/research_object_context_graphs.md)
- [research graph layer census](../measures/research_graph_layer_census.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; SciSciNet: W2888592790; WoS: unknown]

## Metadata

- Concept ID: `dimensions_source_ingestion_mix`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: Dimensions provider mix; source-ingestion provenance; multi-provider scholarly graph ingestion; research graph ingestion mix
