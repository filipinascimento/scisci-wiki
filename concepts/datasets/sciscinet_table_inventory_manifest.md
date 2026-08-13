# SciSciNet table inventory manifest

## Summary

SciSciNet's table inventory is a reusable manifest of file names, row counts, and short descriptions for planning and denominator checks.

## Canonical Form

- Unit of analysis: SciSciNet release, table, TSV file, row count, entity type, or expected linkage layer.
- Typical representation: release manifest listing table names, counts, descriptions, and source scopes.
- Mechanism, measurement, or validation target: data-lake planning and denominator validation for large science-of-science tables.
- Empirical signature: pipeline expectations can be checked against released table counts before full extraction.

## Uses in Science of Science

- Refines SciSciNet dataset manifest by linking it to [sciscinet v2](sciscinet_v2.md) and [mag publication backbone](mag_publication_backbone.md).
- Useful as a reusable check when [scholarly table primary keys](../representations/scholarly_table_primary_keys.md) is used in science-of-science inference.
- Creates cross-links to [paper author affiliation linkages](../representations/paper_author_affiliation_linkages.md) so the motif is not interpreted in isolation.

## Operationalization

- Use the table inventory as a manifest for pipeline planning, storage estimation, denominator checks, and expected table availability.
- Record release date and table count before large scans or derived-panel construction.
- Compare observed local row counts against the manifest before interpreting missing joins.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) reports a table inventory with row counts for core files, including about 134 million papers, 1.59 billion references, and 414 million paper-author-affiliation rows.
- The inventory also documents external-link tables and their source scope.

## Caveats

- Manifest counts describe the released snapshot, not live-updated totals.
- Recent papers and external links are not represented unless a newer build is used.

## Links

- [SciSciNet-v2](sciscinet_v2.md)
- [MAG publication backbone](mag_publication_backbone.md)
- [Scholarly table primary keys](../representations/scholarly_table_primary_keys.md)
- [Paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [Paper-field linkages](../representations/paper_field_linkages.md)
- [Patent citation-to-science link table](patent_citation_to_science_link_table.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `sciscinet_table_inventory_manifest`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: SciSciNet data-record manifest; TSV inventory; table-count manifest
