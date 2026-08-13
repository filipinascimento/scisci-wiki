# Paper-family canonicalization

## Summary

Paper-family canonicalization collapses multiple records for the same intellectual work into one primary paper while preserving detail records and recalculating dependent counts.

## Canonical Form

- Unit of analysis: raw paper record, paper family, primary paper, retracted record, citation pair, or reference pair.
- Typical representation: primary-paper table, paper-details table, family identifier, source-to-primary crosswalk, and recalculated count fields.
- Method target: reduce duplicate publication records without losing provenance about versions, document forms, or excluded records.
- Empirical signature: raw publication records shrink into a curated primary-paper table, and citation/reference counts are recomputed after deduplication.

## Uses in Science of Science

- Specializes [research-ready table curation](research_ready_table_curation.md) for duplicated publication families.
- Supports [SciSciNet-v2](../datasets/sciscinet_v2.md), [MAG publication backbone](../datasets/mag_publication_backbone.md), and [scholarly table primary keys](../representations/scholarly_table_primary_keys.md).
- Protects citation, team-size, field, and downstream-linkage measures from duplicate record inflation.
- Provides a reusable pattern for converting raw scholarly dumps into canonical work-level panels.

## Operationalization

- Identify family groups or duplicate clusters using source-native family fields, DOI/title checks, or version metadata.
- Select one primary record for each family and preserve non-primary records in a detail or provenance table.
- Exclude retracted or out-of-scope records from the primary table only with an explicit rule and separate audit table.
- Recompute citation counts, reference counts, and linkage counts over the canonical primary-paper set.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) states that SciSciNet aggregates MAG paper families into one primary paper to avoid duplication.
- The paper preserves retracted papers and affiliated family records in a separate paper-details table.
- Lin et al. then recalculates citation and reference counts within the curated subset and aggregates citations and references from family members into the primary paper.

## Caveats

- Canonicalization improves work-level counts but can erase version-specific venues, dates, and document forms if details are not preserved.
- Primary-record choice can affect document type, field, and author metadata.
- Citation and reference counts must be recomputed after canonicalization; copying raw source counts can reintroduce duplication.

## Links

- [research-ready table curation](research_ready_table_curation.md)
- [SciSciNet-v2](../datasets/sciscinet_v2.md)
- [MAG publication backbone](../datasets/mag_publication_backbone.md)
- [scholarly table primary keys](../representations/scholarly_table_primary_keys.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md)
- [citation data census dates](citation_data_census_dates.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `paper_family_canonicalization`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: primary paper canonicalization; paper family aggregation; work-level deduplication; MAG family canonicalization
