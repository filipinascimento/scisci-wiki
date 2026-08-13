# WoS institution parent-child hierarchy mapping

## Summary

WoS institution metadata supports hierarchical organization rollups through curated variant names and parent-child relationships.

## Canonical Form

- Unit of analysis: institution name, address record, organization parent, organization child, or affiliation.
- Typical representation: curated organization hierarchy mapping with preferred names and parent-child links.
- Mechanism, measurement, or validation target: institution-level rollup structure in affiliation metadata.
- Empirical signature: institution metrics change when computed at leaf, parent, or system levels..

## Uses in Science of Science

- Extends [institution-name variant normalization](../methods/institution_name_variant_normalization.md) from spelling variants to hierarchy rollups.
- Connects WoS affiliation data to [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md).
- Provides a comparison point for [OpenAlex affiliation-ROR linking](../methods/openalex_affiliation_ror_linking.md).

## Operationalization

- Store preferred institution names and parent-child relationship fields.
- Compare metrics at leaf, parent, and system levels.
- Document hierarchy coverage and curated mappings used in each extract.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) describes affiliation indexing with institution variants and parent-child relationships mapped to preferred names.

## Caveats

- Existing name normalization does not resolve all hierarchy questions.
- Hospital, campus, laboratory, and system rollups may have competing legitimate definitions.

## Links

- [Institution-name variant normalization](../methods/institution_name_variant_normalization.md)
- [Paper-author-affiliation linkages](paper_author_affiliation_linkages.md)
- [Geocoded affiliation extraction](../methods/geocoded_affiliation_extraction.md)
- [OpenAlex affiliation-ROR linking](../methods/openalex_affiliation_ror_linking.md)
- [GRID affiliation mapping](../methods/grid_affiliation_mapping.md)
- [Institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_institution_parent_child_hierarchy_mapping`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: institution hierarchy rollups; affiliation hierarchy mapping; preferred institution hierarchy; organization parent-child curation
