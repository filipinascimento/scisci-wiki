# OpenAlex ISSN-L venue matching

## Summary

OpenAlex ISSN-L venue matching uses linking ISSNs to consolidate serial venue identities across print, electronic, and other ISSN variants before joining or comparing venue-level scholarly records.

## Canonical Form

- Unit of analysis: venue, ISSN, ISSN-L, journal title variant, conference or repository record, or venue crosswalk.
- Typical representation: venue ID plus ISSN-L, alternate ISSNs, display name, source type, and missing-identifier flag.
- Method target: stabilize venue joins and venue-level aggregation in OpenAlex-derived analyses.
- Empirical signature: multiple ISSNs for the same serial venue collapse to a single linking ISSN when available.

## Uses in Science of Science

- Provides the venue-specific branch of [OpenAlex canonical external IDs](../representations/openalex_canonical_external_ids.md).
- Supports the [OpenAlex venue-host model](../representations/openalex_venue_host_model.md) by making serial venue identity more stable across versions and source records.
- Helps reduce duplicate journal rows when building venue citation networks, journal panels, source coverage audits, and publication venue controls.
- Links to broader [scholarly identifier spine](../representations/scholarly_identifier_spine.md) workflows where DOI, ORCID, ROR, and Wikidata identifiers cover other entity types.

## Operationalization

- Extract OpenAlex venue IDs, ISSN-L, alternate ISSNs, display names, source type, and snapshot date.
- Use ISSN-L as the preferred serial venue key when present, while preserving all raw ISSNs and OpenAlex venue IDs.
- Keep missing ISSN-L and non-serial venue types explicit; do not force repositories, book series, or conference records into a journal-only model.
- Validate high-impact venue panels against ISSN registries, publisher pages, Dimensions, Web of Science source lists, or manually curated venue lists.

## Evidence and Validations

- Verified full-text evidence from Priem, Piwowar, and Orr (2022) defines the canonical external ID for OpenAlex venues as ISSN-L, or linking ISSN.
- The paper states that ISSN-L groups all ISSNs a particular publication may have.
- Priem et al. report that about 90% of OpenAlex venues have an ISSN-L or ISSN.
- The same full text lists journals, conferences, preprint repositories, and institutional repositories as venue types, making missing or inapplicable ISSN-L values part of the venue-model audit.

## Caveats

- ISSN-L coverage is high for serial journals but not universal across all OpenAlex venue types.
- Venue mergers, title changes, conference series, proceedings, and repository records can still require manual or source-specific handling.
- ISSN-L matching solves serial-title consolidation, not article-level version matching or source provenance.
- Missing ISSN-L can be field-, language-, and source-dependent.

## Links

- [OpenAlex](../datasets/openalex.md)
- [OpenAlex canonical external IDs](../representations/openalex_canonical_external_ids.md)
- [OpenAlex venue-host model](../representations/openalex_venue_host_model.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [journal citation network mapping](../representations/journal_citation_network_mapping.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [conference proceedings coverage gap](../validations/conference_proceedings_coverage_gap.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `openalex_issn_l_venue_matching`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: OpenAlex ISSN-L matching; linking ISSN venue key; venue identifier matching; journal ISSN-L consolidation
