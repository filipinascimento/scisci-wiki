# Research-object context graphs

## Summary

Research-object context graphs place a scholarly work in relation to the grants, datasets, conferences, institutions, patents, clinical trials, policy documents, media attention, and citations that surround it.

## Canonical Form

- Unit of analysis: research object, publication, grant, patent, clinical trial, policy document, media item, dataset, institution, or typed relation.
- Typical representation: multipartite context graph, typed relation table collection, or ego graph around a paper or project.
- Measurement target: support, use, attention, translation, and evaluation context beyond paper-to-paper citation counts.
- Empirical signature: a focal work can be traversed upstream to resources and downstream to scholarly, public, industrial, clinical, or policy uses.

## Uses in Science of Science

- Provides the representation behind Dimensions-style research context and SciSciNet external linkage layers.
- Connects [funding acknowledgments](../datasets/funding_acknowledgments.md), [patent-paper links](../datasets/patent_paper_links.md), [policy document mentions](../measures/policy_document_mentions.md), [altmetrics](../datasets/altmetrics.md), and [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md).
- Helps distinguish scholarly attention from funding support, translational use, clinical uptake, and public attention.
- In Dimensions, the representation is made operational through a [publication data spine](../datasets/dimensions_publication_data_spine.md), [grant-acknowledgment mining](../methods/dimensions_grant_acknowledgment_mining.md), [cross-type research classification](../methods/cross_type_research_classification.md), [GRID affiliation mapping](../methods/grid_affiliation_mapping.md), and [contextual analytics panels](contextual_analytics_panels.md).
- Query interfaces such as the [Dimensions relation-query language](../methods/dimensions_relation_query_language.md) make these graph paths executable without exposing every physical table.

## Operationalization

- Define typed relations such as funds, cites, acknowledges, hosts, mentions, references, translates, or uses.
- Keep relation semantics separate before building composite impact indicators.
- Preserve source-specific identifiers and relation provenance with a [scholarly identifier spine](scholarly_identifier_spine.md).
- Analyze context graphs as ego networks, metapaths, time-ordered event chains, or layers in [multiplex scholarly graphs](multiplex_scholarly_graphs.md).
- Preserve the exact query or traversal specification when using APIs, dashboards, or local tables to materialize the graph.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) argues that research evaluation needs context beyond publication-citation graphs and describes Dimensions as including grants, patents, clinical trials, policy documents, and Altmetric attention.
- Hook et al. describe Dimensions as a rich multipartite extension of the citation graph in which all entities may be linked, allowing a piece of research to be placed in a broader context.
- The paper distinguishes grants as early signals, citations as backward-looking scholarly attention, and patents, clinical trials, and policy documents as signals of practical translation.
- Hook et al. further describe the navigational layer: research objects are projected onto axes such as institutions, journals, classifications, people, funders, geography, and identifiers so users can move from records to context.
- Verified full-text evidence from Lin et al. (2023) similarly links papers to upstream NIH and NSF funding and downstream uses in patents, clinical trials, news, and social media.

## Caveats

- Context links have different meanings and should not be collapsed into a single impact score without theory.
- Coverage differs sharply across sources and may be field-specific, country-specific, or platform-specific.
- A downstream mention or citation is not necessarily evidence of positive use, validity, or causality.

## Links

- [Dimensions](../datasets/dimensions.md)
- [SciSciNet-v2](../datasets/sciscinet_v2.md)
- [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md)
- [scholarly entity graphs](scholarly_entity_graphs.md)
- [scholarly identifier spine](scholarly_identifier_spine.md)
- [multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [Dimensions publication data spine](../datasets/dimensions_publication_data_spine.md)
- [Dimensions grant-acknowledgment mining](../methods/dimensions_grant_acknowledgment_mining.md)
- [cross-type research classification](../methods/cross_type_research_classification.md)
- [contextual analytics panels](contextual_analytics_panels.md)
- [Dimensions relation-query language](../methods/dimensions_relation_query_language.md)
- [Dimensions access-tier scope](../validations/dimensions_access_tier_scope.md)
- [funding acknowledgments and grant links](../datasets/funding_acknowledgments.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [altmetrics](../datasets/altmetrics.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]
- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `research_object_context_graphs`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: research context graph; multipartite research graph; object context network; research information graph
