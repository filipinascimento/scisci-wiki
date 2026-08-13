# External identifier registry authority

## Summary

External identifier registry authority is the assumption that specialized registries can serve as sources of truth for particular scholarly entity types during graph construction.

## Canonical Form

- Unit of analysis: registry, identifier, entity type, source-of-truth decision, or crosswalk row.
- Typical representation: DOI, ISSN, ORCID, GRID/ROR, GeoNames, funder registry, patent number, clinical-trial ID, or field-classification code.
- Validation target: make explicit which registry is trusted for each entity type and where that trust may fail.
- Empirical signature: entity records are normalized to recognized external identifiers rather than only source-native string labels.

## Uses in Science of Science

- Clarifies the authority assumptions behind a [scholarly identifier spine](../representations/scholarly_identifier_spine.md).
- Supports [scholarly entity graphs](../representations/scholarly_entity_graphs.md), [research-object context graphs](../representations/research_object_context_graphs.md), and [research-ready table curation](../methods/research_ready_table_curation.md).
- Helps audit entity-resolution modules such as [GRID affiliation mapping](../methods/grid_affiliation_mapping.md), [ORCID-assisted person disambiguation](../methods/orcid_assisted_person_disambiguation.md), and funder registries.
- Connects to [unique-identifier inclusion gate](unique_identifier_inclusion_gate.md) when records without recognized identifiers are excluded or downweighted.

## Operationalization

- Document the registry assigned to each entity type and the snapshot or version used.
- Preserve source-native strings alongside registry IDs so failed mappings can be audited.
- Use registry coverage audits to identify fields, regions, languages, document types, or historical periods where authority is weak.
- Replace registry authority only with a documented migration audit when the trusted registry changes.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) states that Dimensions standardized data mappings to recognized unique identifiers.
- The paper lists Crossref DOIs, open ISSN listings, ORCID, GRID, GeoNames, and fields-of-research codes as identity registers used for different data elements.
- Hook et al. explicitly frame these identity registers as sources of truth whose reinvention was outside the project scope.

## Caveats

- A registry can be authoritative for one entity type while incomplete for another.
- Registry authority is a pragmatic data-infrastructure choice, not proof that entity resolution is error-free.
- Registry changes, retirements, and migrations can alter longitudinal joins.

## Links

- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [unique-identifier inclusion gate](unique_identifier_inclusion_gate.md)
- [Dimensions](../datasets/dimensions.md)
- [GRID affiliation mapping](../methods/grid_affiliation_mapping.md)
- [ORCID-assisted person disambiguation](../methods/orcid_assisted_person_disambiguation.md)
- [OpenAlex canonical external IDs](../representations/openalex_canonical_external_ids.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)
- [identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `external_identifier_registry_authority`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: registry source of truth; identifier registry authority; external ID authority; source-of-truth registry mapping
