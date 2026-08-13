# OpenAlex canonical external IDs

## Summary

OpenAlex canonical external IDs pair OpenAlex's source-native entity IDs with external persistent identifiers such as DOI, ORCID, ISSN-L, ROR, and Wikidata IDs.

## Canonical Form

- Unit of analysis: OpenAlex entity, OpenAlex ID, canonical external identifier, identifier coverage flag, or identifier crosswalk row.
- Typical representation: OpenAlex ID plus one entity-type-specific external identifier field.
- Mechanism or measurement target: cross-dataset reconciliation of works, authors, venues, institutions, and concepts.
- Empirical signature: each OpenAlex entity has a resolvable OpenAlex ID, while canonical external ID availability varies by entity class.

## Uses in Science of Science

- Specializes the broader [scholarly identifier spine](scholarly_identifier_spine.md) for OpenAlex workflows.
- Supports DOI-based paper matching, ORCID-assisted [author name disambiguation](../methods/author_name_disambiguation.md), venue matching through ISSN-L, organization matching through ROR, and concept matching through Wikidata.
- Splits the venue-specific identifier workflow into [OpenAlex ISSN-L venue matching](../methods/openalex_issn_l_venue_matching.md).
- Helps diagnose missing-ID bias such as [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md) when OpenAlex-derived samples rely on DOI-matched works.
- Splits DOI and ORCID denominator checks into [OpenAlex work DOI coverage audit](../validations/openalex_work_doi_coverage_audit.md) and [OpenAlex author ORCID coverage audit](../validations/openalex_author_orcid_coverage_audit.md).
- Provides stable IDs for [OpenAlex entity-type model](openalex_entity_type_model.md) joins and local concept-page references.

## Operationalization

- Store OpenAlex ID and external ID in separate columns, with entity type and snapshot date.
- Use DOI for works when present, ORCID for authors when present, ISSN-L or ISSN for venues, ROR for institutions, and Wikidata for concepts.
- Preserve missing external IDs explicitly; do not drop works or authors without DOI or ORCID unless the research design requires that denominator.
- Verify DOI/title matches before merging OpenAlex records with [Dimensions](../datasets/dimensions.md), [SciSciNet-v2](../datasets/sciscinet_v2.md), Web of Science, Crossref, or local paper manifests.

## Evidence and Validations

- Verified full-text evidence from Priem et al. (2022) states that every OpenAlex entity has a persistent OpenAlex ID that resolves to a human-readable webpage or machine-readable JSON.
- Priem et al. define canonical external identifiers by entity type: DOI for works, ORCID for authors, ISSN-L for venues, ROR for institutions, and Wikidata IDs for concepts.
- The venue branch is separated in [OpenAlex ISSN-L venue matching](../methods/openalex_issn_l_venue_matching.md), because serial venue matching has different coverage and use cases than works, authors, or institutions.
- The paper reports incomplete coverage for several external IDs, including DOI coverage for about half of works and limited ORCID coverage for authors.
- The same evidence motivates retaining source-native IDs because external persistent identifiers are uneven across fields, eras, document types, and entity types.

## Caveats

- External IDs are not uniformly available, and their absence is itself a source of sample-selection bias.
- Identifier merges can change across OpenAlex snapshots as entities are split, merged, or enriched.
- ORCID, ROR, ISSN-L, and DOI coverage can be correlated with geography, institution type, field, and publication year.

## Links

- [OpenAlex](../datasets/openalex.md)
- [OpenAlex entity-type model](openalex_entity_type_model.md)
- [OpenAlex ISSN-L venue matching](../methods/openalex_issn_l_venue_matching.md)
- [OpenAlex author-disambiguation features](../methods/openalex_author_disambiguation_features.md)
- [OpenAlex metadata validation gap](../validations/openalex_metadata_validation_gap.md)
- [OpenAlex work DOI coverage audit](../validations/openalex_work_doi_coverage_audit.md)
- [OpenAlex author ORCID coverage audit](../validations/openalex_author_orcid_coverage_audit.md)
- [scholarly identifier spine](scholarly_identifier_spine.md)
- [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [paper-author-affiliation linkages](paper_author_affiliation_linkages.md)
- [paper-field linkages](paper_field_linkages.md)
- [Dimensions](../datasets/dimensions.md)
- [SciSciNet-v2](../datasets/sciscinet_v2.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `openalex_canonical_external_ids`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: CEID; OpenAlex identifier crosswalk; DOI ORCID ISSN-L ROR Wikidata; canonical external identifiers
