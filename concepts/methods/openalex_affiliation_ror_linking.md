# OpenAlex affiliation-ROR linking

## Summary

OpenAlex affiliation-ROR linking parses affiliation strings from scholarly records, normalizes institution mentions, and links them to Research Organization Registry identifiers.

## Canonical Form

- Unit of analysis: affiliation string, author affiliation, institution mention, ROR-linked institution, or paper-author-institution claim.
- Typical representation: authorship or affiliation table with raw affiliation text, normalized institution string, OpenAlex institution ID, ROR ID, and matching provenance.
- Method target: convert heterogeneous affiliation text into auditable organization identifiers.
- Empirical signature: structured and unstructured affiliation strings are linked to institution entities used in paper-author-affiliation records.

## Uses in Science of Science

- Provides a current OpenAlex pathway for [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md).
- Supports [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md), institutional mobility analysis, collaboration geography, and institution-level impact studies.
- Connects institution mentions to the [scholarly identifier spine](../representations/scholarly_identifier_spine.md) through ROR and OpenAlex institution IDs.
- Supplies organization-level entity resolution for [OpenAlex entity-type model](../representations/openalex_entity_type_model.md) graphs.

## Operationalization

- Extract raw affiliation strings from structured metadata and unstructured publisher or repository pages.
- Normalize institution strings before matching to OpenAlex institution entities and ROR identifiers.
- Preserve raw string, normalized string, matched institution ID, ROR ID, matching method, and snapshot date.
- Validate high-stakes institutional claims with manual audits, known-address samples, ORCID/CV evidence, or comparisons against Dimensions and institutional rosters.

## Evidence and Validations

- Verified full-text evidence from Priem et al. (2022) states that OpenAlex parses every author affiliation string from structured sources such as PubMed and unstructured sources such as publisher webpages.
- Priem et al. describe extracting and normalizing institution strings, then linking them to ROR using a two-step approach combining rules and machine learning.
- The paper reports broad ROR coverage for OpenAlex institutions, while still identifying parsing, normalization, and disambiguation as areas needing improvement.
- The same full text defines OpenAlex authorship as a three-way claim connecting an author, one or more institutions, and a work, which makes institution matching central to work-level graph construction.

## Caveats

- Affiliation strings can represent current employment, past affiliation, consortium membership, visiting status, funding affiliation, or administrative address.
- Institution-name changes, mergers, multilingual names, and campus systems can create false matches.
- ROR-linked affiliation data should be validated before being used for evaluation, rankings, or policy allocation.

## Links

- [OpenAlex](../datasets/openalex.md)
- [OpenAlex authorship object](../representations/openalex_authorship_object.md)
- [OpenAlex metadata validation gap](../validations/openalex_metadata_validation_gap.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md)
- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)
- [geographic collaboration distance](../measures/geographic_collaboration_distance.md)
- [author name disambiguation](author_name_disambiguation.md)
- [OpenAlex canonical external IDs](../representations/openalex_canonical_external_ids.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `openalex_affiliation_ror_linking`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: ROR affiliation linking; institution string normalization; affiliation parsing; OpenAlex institution matching
