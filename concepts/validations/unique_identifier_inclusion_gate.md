# Unique-identifier inclusion gate

## Summary

A unique-identifier inclusion gate is the rule that records enter a scholarly database only when they can be associated with a recognized persistent identifier.

## Canonical Form

- Unit of analysis: source record, persistent identifier, inclusion rule, missing-ID stratum, or database denominator.
- Typical representation: inclusion flag with DOI, PMID, ORCID, grant ID, patent number, trial ID, ISSN, GRID/ROR, or other source-specific key.
- Validation target: whether an identifier-gated source represents the intended scholarly population.
- Empirical signature: records without recognized identifiers are excluded or require secondary curation, changing denominator coverage.

## Uses in Science of Science

- Gives [scholarly identifier spines](../representations/scholarly_identifier_spine.md) an explicit inclusion rule.
- Explains why [Dimensions](../datasets/dimensions.md), [OpenAlex](../datasets/openalex.md), Crossref, PubMed, and funder/patent/trial databases can have different denominators.
- Generalizes [DOI denominator coverage bias](doi_denominator_coverage_bias.md) beyond works to people, grants, patents, trials, venues, institutions, and field labels.
- Supports responsible reporting when comparing [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) across sources.

## Operationalization

- State the recognized identifier required for each entity type.
- Count records that fail the gate and stratify missingness by field, time, geography, document type, language, and source.
- Preserve rejected or unresolved records in audit tables when they may matter for population claims.
- Avoid treating identifier-gated samples as complete unless the target population is explicitly identifier-bearing records.
- Recheck the gate when snapshots add new identifiers or when entity families are merged or split.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) states that the practical bar for Dimensions inclusion is association with a recognized unique identifier.
- The same full text frames open unique persistent identifiers and existing open standards as guiding principles for Dimensions.
- Hook et al. describe entity-specific identifiers in the Dimensions graph, including DOI/PubMed identifiers for publications, ORCID for people, GRID for research organizations, Geonames for geography, and field-classification identifiers.
- This evidence makes the inclusion gate auditable but also shows why missing identifiers produce coverage limits.

## Caveats

- Identifier gates improve linkage and reproducibility but can bias samples toward well-indexed fields and newer records.
- Different entity types have different identifier maturity; ORCID, grant IDs, and institutional IDs are not comparable to DOI coverage.
- The same identifier can be duplicated, reused incorrectly, or attached to multiple versions, so identifier presence is not sufficient validation.

## Links

- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [Dimensions publication data spine](../datasets/dimensions_publication_data_spine.md)
- [Dimensions](../datasets/dimensions.md)
- [DOI denominator coverage bias](doi_denominator_coverage_bias.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)
- [OpenAlex canonical external IDs](../representations/openalex_canonical_external_ids.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `unique_identifier_inclusion_gate`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: persistent-ID inclusion rule; recognized identifier gate; ID-gated database denominator; unique-ID coverage audit
