# Scholarly entity graphs

## Summary

Scholarly entity graphs represent science as linked entities such as works, authors, institutions, venues, concepts, funders, grants, patents, trials, and relations among them.

## Canonical Form

- Unit of analysis: scholarly entity, relation, graph node, graph edge, entity type, or entity schema.
- Typical representation: heterogeneous directed graph, property graph, knowledge graph, or entity-relation table collection.
- Measurement target: reusable metadata infrastructure for navigation, evaluation, discovery, and science-of-science analysis.
- Empirical signature: works or publications act as anchor entities linking people, organizations, topics, venues, citations, funding, and downstream use.

## Uses in Science of Science

- Provides the data representation behind [OpenAlex](../datasets/openalex.md), [Dimensions](../datasets/dimensions.md), and [SciSciNet-v2](../datasets/sciscinet_v2.md).
- Generalizes [paper-author-affiliation linkages](paper_author_affiliation_linkages.md), [paper-field linkages](paper_field_linkages.md), and [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md).
- Supplies entity layers for [multiplex scholarly graphs](multiplex_scholarly_graphs.md), entity-resolution audits, and cross-dataset metadata enrichment.
- Can be queried through relation-aware APIs such as the [Dimensions relation-query language](../methods/dimensions_relation_query_language.md) or materialized into local tables for graph analysis.

## Operationalization

- Define entity classes and relation types before analysis.
- Assign stable internal IDs and external identifiers with a [scholarly identifier spine](scholarly_identifier_spine.md).
- Store source, snapshot date, and confidence or matching method for each relation.
- Keep entity-resolution outputs separate from observed metadata so uncertainty can be audited.

## Evidence and Validations

- Verified full-text evidence from Priem et al. (2022) describes OpenAlex as a heterogeneous directed graph composed of works, authors, venues, institutions, concepts, and links among them.
- Priem et al. define the authorship object as a three-way claim connecting an author, one or more institutions, and a work.
- Verified full-text evidence from Hook et al. (2018) states that all Dimensions entities may be linked to all other entities and are treated as first-class objects.
- Verified full-text evidence from Lin et al. (2023) describes SciSciNet as a data lake connecting scientific publications, researchers, institutions, fields, citations, funders, patents, clinical trials, and public-use layers.

## Caveats

- Entity graphs are metadata models, not causal models.
- Entity disambiguation, missing identifiers, and schema changes can dominate downstream error.
- Open, proprietary, and stale snapshots should not be mixed without version and provenance fields.

## Links

- [OpenAlex](../datasets/openalex.md)
- [OpenAlex entity-type model](openalex_entity_type_model.md)
- [OpenAlex authorship object](openalex_authorship_object.md)
- [OpenAlex metadata validation gap](../validations/openalex_metadata_validation_gap.md)
- [Dimensions](../datasets/dimensions.md)
- [SciSciNet-v2](../datasets/sciscinet_v2.md)
- [scholarly identifier spine](scholarly_identifier_spine.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)
- [research-object context graphs](research_object_context_graphs.md)
- [Dimensions relation-query language](../methods/dimensions_relation_query_language.md)
- [multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [paper-author-affiliation linkages](paper_author_affiliation_linkages.md)
- [paper-field linkages](paper_field_linkages.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]
- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]
- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `scholarly_entity_graphs`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: scholarly knowledge graph; research entity graph; scholarly metadata graph; entity-relation graph
