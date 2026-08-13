# Identifier bridge-key crosswalks

## Summary

Identifier bridge-key crosswalks use standardized intermediary identifiers such as PMID or normalized DOI to connect a canonical paper table to heterogeneous external systems.

## Canonical Form

- Unit of analysis: source record, target record, intermediary identifier, crosswalk row, or linkage table.
- Typical representation: PMID bridge table, normalized DOI join, award-number crosswalk, NCT-number link, or source-native ID mapping.
- Representation target: make multi-source joins reproducible when direct source-to-source keys do not exist.
- Empirical signature: a paper in one system is linked to a grant, clinical trial, media mention, patent, or external publication record through a documented intermediate key.

## Uses in Science of Science

- Generalizes the bridge pattern behind [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md), [clinical-trial publication linkages](../datasets/clinical_trial_publication_linkages.md), and [Crossref Event Data mention linkages](../datasets/crossref_event_data_mention_linkages.md).
- Complements [scholarly identifier spine](scholarly_identifier_spine.md) and [scholarly table primary keys](scholarly_table_primary_keys.md).
- Supports [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md) by documenting how external IDs connect to paper IDs.
- Provides join provenance for [research-ready table curation](../methods/research_ready_table_curation.md).

## Operationalization

- Normalize the bridge key before joining, including case, punctuation, prefixes, and version markers.
- Store source ID, target ID, bridge key, match route, source snapshot, and duplicate-resolution rule.
- Distinguish one-to-one, one-to-many, and many-to-one bridges.
- Validate bridge joins against counts from the source linkage table and inspect unmatched records by field, year, and source.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes high-quality MAG Paper ID to PMID linkages constructed from MAG extended attributes.
- The paper uses PMID as the intermediate key for NIH publication links and clinical-trial background/result papers.
- Lin et al. uses normalized DOI as the bridge key for Crossref Event Data news and social-media mentions.

## Caveats

- Bridge-key coverage is uneven; missing DOI or PMID values can remove whole source segments from a linkage table.
- Normalized identifiers can still collide or split when versions, preprints, corrections, or duplicate records are present.
- A clean join is not the same as a validated semantic relation.

## Links

- [scholarly identifier spine](scholarly_identifier_spine.md)
- [scholarly table primary keys](scholarly_table_primary_keys.md)
- [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md)
- [clinical-trial publication linkages](../datasets/clinical_trial_publication_linkages.md)
- [Crossref Event Data mention linkages](../datasets/crossref_event_data_mention_linkages.md)
- [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md)
- [paper-family canonicalization](../methods/paper_family_canonicalization.md)
- [confidence-typed fuzzy linkages](../methods/confidence_typed_fuzzy_linkages.md)
- [grant identifier standardization gap](../validations/grant_identifier_standardization_gap.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `identifier_bridge_key_crosswalks`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: bridge-key linkage table; PMID bridge crosswalk; normalized DOI bridge; intermediary identifier join
