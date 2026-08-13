# Scholarly data lakes

## Summary

Scholarly data lakes assemble publication, author, institution, citation, field, funding, patent, trial, and attention data into a linked resource for science-of-science research.

## Canonical Form

- Unit of analysis: paper, author, institution, field, funder, grant, patent, clinical trial, mention, or relation.
- Typical representation: documented table collection, entity graph, or parquet/relational data release with stable IDs.
- Mechanism or measurement target: reusable infrastructure for linking science production, funding, collaboration, impact, and public use.
- Empirical signature: one central paper or work table linked to many typed entity and relation tables.

## Uses in Science of Science

- Reduces repeated cleaning work before large-scale science-of-science analyses.
- Provides the infrastructure layer for [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md).
- Supports benchmark measures, cross-dataset linkages, and reproducible extraction pipelines.
- Makes it easier to share derived measures by attaching new files to stable paper or entity IDs.
- Depends on [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md), [research-ready table curation](../methods/research_ready_table_curation.md), and a [scholarly identifier spine](../representations/scholarly_identifier_spine.md).
- Often exposes reusable schema motifs such as [scholarly table primary keys](../representations/scholarly_table_primary_keys.md), a [MAG publication backbone](mag_publication_backbone.md), and typed grant, patent, trial, and attention link tables.
- Builds on the broader [scholarly input-output data substrate](scholarly_input_output_data_substrate.md) and can host [career metadata fusion](career_metadata_fusion.md) products.

## Operationalization

- Define stable entity IDs and table keys before downstream analysis.
- Document source datasets, preprocessing choices, filtering rules, duplicate handling, and update dates.
- Preserve provenance for each relation table and derived measure.
- Use chunked and schema-aware processing for large parquet or relational exports.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) introduces SciSciNet as a large-scale open data lake for science-of-science research.
- Lin et al. describe a central publication table linked to authors, institutions, fields, grants, patents, clinical trials, media, and social media.
- The paper argues that data lakes are valuable because raw datasets require substantial preprocessing and many analytic choices that are often too detailed to document in ordinary publications.
- Lin et al. also describe the data lake as a community-extensible resource: new measures can be released as files linked to SciSciNet IDs so future researchers can build on them.
- This community extension logic is split out as [community-extensible measure layer](../methods/community_extensible_measure_layer.md), while the shipped metrics are represented by [SciSciNet precomputed metric bundle](sciscinet_precomputed_metric_bundle.md).
- Hook et al. and Priem et al. add complementary infrastructure motifs: research objects should be linked through persistent IDs, entity graphs, and documented data-production choices.

## Caveats

- A data lake is not automatically complete, current, or internally consistent.
- Snapshot dates, source coverage, entity-resolution choices, and table schemas must be recorded.
- Derived measures can become stale if they are not regenerated when source tables update.

## Links

- [sciscinet v2](sciscinet_v2.md)
- [SciSciNet precomputed metric bundle](sciscinet_precomputed_metric_bundle.md)
- [community-extensible measure layer](../methods/community_extensible_measure_layer.md)
- [openalex](openalex.md)
- [dimensions](dimensions.md)
- [scholarly input-output data substrate](scholarly_input_output_data_substrate.md)
- [career metadata fusion](career_metadata_fusion.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)
- [scholarly entity graphs](../representations/scholarly_entity_graphs.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [scholarly table primary keys](../representations/scholarly_table_primary_keys.md)
- [MAG publication backbone](mag_publication_backbone.md)
- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [paper-field linkages](../representations/paper_field_linkages.md)
- [upstream-downstream scholarly linkages](upstream_downstream_scholarly_linkages.md)
- [grant-publication linkage tables](grant_publication_linkage_tables.md)
- [clinical-trial publication linkages](clinical_trial_publication_linkages.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]
- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]
- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `scholarly_data_lakes`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Aliases: science-of-science data lake; linked scholarly data resource; research information data lake; open scholarly data lake
