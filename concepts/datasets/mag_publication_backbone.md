# MAG publication backbone

## Summary

The MAG publication backbone is the legacy Microsoft Academic Graph publication layer used as a primary paper spine for linked science-of-science data lakes.

## Canonical Form

- Unit of analysis: MAG paper record, curated primary paper, paper family, DOI, PMID, citation edge, or linked entity row.
- Typical representation: primary publication table with MAG Paper ID as the source-native key.
- Mechanism or measurement target: stable historical paper backbone for linking authors, affiliations, fields, citations, grants, patents, trials, and attention layers.
- Empirical signature: many relation tables join through a primary PaperID derived from MAG rather than through DOI alone.

## Uses in Science of Science

- Anchors historical [SciSciNet-v2](sciscinet_v2.md) tables and their paper-level measures.
- Provides a bridge from raw MAG records to [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md), [paper-field linkages](../representations/paper_field_linkages.md), and [grant-publication linkage tables](grant_publication_linkage_tables.md).
- Makes [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md) essential because MAG was sunset and the SciSciNet release uses a fixed December 6, 2021 source edition.
- Also supports role-aware derived panels such as the [MAG contribution-statement linked panel](mag_contribution_statement_linked_panel.md).
- Also supports patent-science linkage resources such as the [Reliance on Science dataset](reliance_on_science_dataset.md), where MAG paper IDs provide the released target-paper spine.
- The same use case motivates [open derivative patent-science linkage](open_derivative_patent_science_linkage.md), because MAG licensing allowed derivative PCS link tables to be released.
- Should be complemented with current [OpenAlex](openalex.md) or [Dimensions](dimensions.md) records for recent papers and active identifier enrichment.
- Requires [MAG-to-OpenAlex migration audit](../validations/mag_to_openalex_migration_audit.md) when historical MAG-derived tables are refreshed with OpenAlex.

## Operationalization

- Start from the documented MAG source release and record its date.
- Use MAG Paper ID as a source-native join key, but preserve DOI, PMID, title, venue, and year for cross-dataset checks.
- Curate paper families into primary papers before aggregating citations or external links.
- Keep MAG-derived IDs separate from OpenAlex and Dimensions IDs in the [scholarly identifier spine](../representations/scholarly_identifier_spine.md).
- Before migrating, audit split, merged, missing, and newly added records through [MAG-to-OpenAlex migration audit](../validations/mag_to_openalex_migration_audit.md).

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) states that SciSciNet uses the MAG edition released on December 6, 2021, covering 270,694,050 publication records.
- Lin et al. describe MAG as supplying publication records, authors, institutions, citation records, field classifications, paper-family identification, and author/affiliation disambiguation.
- The paper documents that SciSciNet filters MAG records, removes patent document types from the primary scientific publication table, aggregates paper families into primary papers, and uses MAG Paper ID as the primary key.
- The same full text notes that OpenAlex builds on MAG and provides continuous updates, so the MAG backbone is best treated as a curated historical base rather than the current source for new publications.
- Verified full-text evidence from Marx and Fuegi (2020) uses the January 1, 2019 Microsoft Academic Graph release as the target publication spine for matching U.S. patent non-patent references to scientific papers.
- Marx and Fuegi emphasize that MAG's open license made it possible to redistribute derived patent-citation-to-science links and selected paper metadata, unlike Web of Science-based linkages.

## Caveats

- MAG is no longer updated, so MAG-derived tables should not be used as the sole source for recent papers.
- MAG entity resolution and paper-family curation choices propagate into downstream network, career, and impact measures.
- Paper IDs are source-native identifiers, not universal scholarly identifiers.

## Links

- [SciSciNet-v2](sciscinet_v2.md)
- [OpenAlex](openalex.md)
- [MAG-to-OpenAlex migration audit](../validations/mag_to_openalex_migration_audit.md)
- [OpenAlex entity-type model](../representations/openalex_entity_type_model.md)
- [OpenAlex concept classifier](../methods/openalex_concept_classifier.md)
- [Dimensions](dimensions.md)
- [scholarly data lakes](scholarly_data_lakes.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [scholarly table primary keys](../representations/scholarly_table_primary_keys.md)
- [MAG contribution-statement linked panel](mag_contribution_statement_linked_panel.md)
- [Reliance on Science dataset](reliance_on_science_dataset.md)
- [open derivative patent-science linkage](open_derivative_patent_science_linkage.md)
- [patent citation-to-science link table](patent_citation_to_science_link_table.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [paper-field linkages](../representations/paper_field_linkages.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]
- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]
- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `mag_publication_backbone`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: MAG paper spine; Microsoft Academic Graph backbone; MAG-derived paper table; primary MAG paper table
