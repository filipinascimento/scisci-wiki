# PaperDetails sidecar table

## Summary

A companion table preserves retracted records and non-primary family members while the main paper table remains deduplicated.

## Canonical Form

- Unit of analysis: paper family, affiliated paper record, retraction record, or primary-paper identifier.
- Typical representation: sidecar provenance table keyed by primary and affiliated publication identifiers.
- Mechanism, measurement, or validation target: deduplication provenance and excluded-record retention in scholarly data lakes.
- Empirical signature: the main analysis table excludes or collapses records, while a linked side table keeps retracted and non-primary details available..

## Uses in Science of Science

- Extends [paper-family canonicalization](../methods/paper_family_canonicalization.md) with an explicit retained-detail table.
- Useful when [retractions self-correction](../validations/retractions_self_correction.md) must be tracked without polluting a primary paper universe.
- Connects data-lake curation to [scholarly table primary keys](scholarly_table_primary_keys.md).

## Operationalization

- Assign one representative primary paper per work family.
- Move retracted and affiliated-family records to a sidecar table with DOI, title, venue, family ID, retraction type, and original count fields.
- Keep joins from primary IDs to retained detail rows reproducible.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes SciSciNet family aggregation, main-table exclusion of retracted papers, and retention of detailed records in a PaperDetails table.

## Caveats

- A sidecar preserves provenance but does not guarantee complete or current retraction metadata.
- Downstream users can still ignore sidecar caveats if APIs expose only the main table.

## Links

- [MAG publication backbone](../datasets/mag_publication_backbone.md)
- [Paper-family canonicalization](../methods/paper_family_canonicalization.md)
- [Research-ready table curation](../methods/research_ready_table_curation.md)
- [Scholarly table primary keys](scholarly_table_primary_keys.md)
- [Retractions and scientific self-correction](../validations/retractions_self_correction.md)
- [Citation data census dates](../methods/citation_data_census_dates.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `paper_details_sidecar_table`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: paper details sidecar; retraction side table; affiliated paper family details; primary-paper provenance table
