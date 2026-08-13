# Scholarly table primary keys

## Summary

Scholarly table primary keys are the documented source-native and curated identifiers that let large publication, author, affiliation, field, funding, patent, and trial tables join reproducibly.

## Canonical Form

- Unit of analysis: primary key, foreign key, source ID, curated ID, relation row, or table schema field.
- Typical representation: table schema with PK/FK annotations and typed integer or string columns.
- Mechanism or measurement target: reproducible joins across scholarly data lakes and graph layers.
- Empirical signature: relation tables contain paper, author, affiliation, field, grant, patent, or trial IDs that map back to a documented primary table.

## Uses in Science of Science

- Turns a collection of files into a joined [scholarly entity graph](scholarly_entity_graphs.md) or [multiplex scholarly graph](multiplex_scholarly_graphs.md).
- Supports [research-ready table curation](../methods/research_ready_table_curation.md) by making deduplication, family aggregation, and relation-table joins auditable.
- Provides the schema discipline behind [paper-author-affiliation linkages](paper_author_affiliation_linkages.md), [paper-field linkages](paper_field_linkages.md), [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md), and [clinical-trial publication linkages](../datasets/clinical_trial_publication_linkages.md).
- Helps compare stale MAG/SciSciNet keys with current [OpenAlex](../datasets/openalex.md) and [Dimensions](../datasets/dimensions.md) identifiers.

## Operationalization

- Record each table's primary key, foreign keys, data type, source, and snapshot.
- Keep source-native IDs separate from curated IDs and external persistent IDs.
- Validate joins by profiling key coverage, duplicate keys, null keys, and one-to-many relations before full analysis.
- Store schema metadata with derived extracts so later agents can reproduce joins without re-reading all source documentation.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes the SciSciNet schema using primary-key and foreign-key notation across linked tables.
- Lin et al. define MAG Paper ID as the primary key for the curated publication table and use PaperID as a foreign key in paper-author-affiliation, paper-field, NIH, NSF, patent, and clinical-trial linkage tables.
- The full text reports typed schema fields such as integer PaperID, string NIH Project Number, string NSF Award Number, and NCT clinical-trial identifiers.
- These schema choices make table keys a representation motif: the scientific claim depends on whether the relation rows can be joined to the correct curated entity.

## Caveats

- A syntactically valid key does not guarantee a semantically correct match.
- Primary keys can be source-specific and snapshot-specific; they may not survive migration from MAG to OpenAlex or Dimensions without a crosswalk.
- One-to-many and many-to-many relations should be preserved rather than collapsed prematurely.

## Links

- [scholarly identifier spine](scholarly_identifier_spine.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)
- [scholarly data lakes](../datasets/scholarly_data_lakes.md)
- [MAG publication backbone](../datasets/mag_publication_backbone.md)
- [SciSciNet-v2](../datasets/sciscinet_v2.md)
- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)
- [paper-author-affiliation linkages](paper_author_affiliation_linkages.md)
- [paper-field linkages](paper_field_linkages.md)
- [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md)
- [clinical-trial publication linkages](../datasets/clinical_trial_publication_linkages.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]
- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `scholarly_table_primary_keys`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: PK/FK scholarly schema; table join keys; source-native scholarly IDs; relation-table keys
