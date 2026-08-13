# OpenAlex work-version resolution

## Summary

OpenAlex work-version resolution groups multiple online copies or versions of the same scholarly work, identifies the primary host, and records version and license information when available.

## Canonical Form

- Unit of analysis: work copy, host venue, preprint, version of record, repository copy, or resolved work family.
- Typical representation: work ID with locations, host type, primary location, version, license, and matching provenance.
- Method target: collapse duplicate work copies without losing access-route and host information.
- Empirical signature: preprint and publisher versions are linked to one work record while retaining source-specific location metadata.

## Uses in Science of Science

- Supports [OpenAlex](../datasets/openalex.md) work-level deduplication and source attribution.
- Operationalizes the multiple-host side of the [OpenAlex venue-host model](../representations/openalex_venue_host_model.md).
- Provides infrastructure for [open access route typology](../datasets/open_access_route_typology.md), [open access evidence locations](../representations/open_access_evidence_locations.md), and [publisher-hosted route precedence](../validations/publisher_hosted_route_precedence.md).
- Helps prevent double-counting when building citation networks, paper-level panels, or [scholarly entity graphs](../representations/scholarly_entity_graphs.md) from multiple web locations.
- Complements [OA resolver source fusion](oa_resolver_source_fusion.md) by preserving host/version evidence rather than reducing access to a binary status.

## Operationalization

- Use work fingerprints, identifiers, titles, and host metadata to group copies that represent the same scholarly work.
- Preserve all known locations, but mark the selected primary host and version of record where available.
- Store license and version fields with snapshot date because these can change when publishers, repositories, or OpenAlex records update.
- Audit duplicate DOI cases and title mismatches before merging local full-text or citation records.

## Evidence and Validations

- Verified full-text evidence from Priem et al. (2022) states that works can be hosted in multiple venues, such as an arXiv preprint and a publisher version of record.
- Priem et al. describe an OpenAlex fingerprinting algorithm that matches multiple versions and flags the version of record as the primary host.
- The same full text states that OpenAlex determines version and license information for copies when possible.
- This evidence separates the entity model of venues as hosts from the matching method that resolves duplicated work copies.
- This workflow makes work-level analysis possible while retaining the host and access details needed for open-access and provenance-sensitive studies.

## Caveats

- Version matching can create false merges or false splits, especially for preprints, conference papers, book chapters, and translated or revised works.
- Primary-host selection is a data-infrastructure decision and can affect open-access route counts.
- License and version fields are snapshot-dependent and should not be treated as immutable article properties.

## Links

- [OpenAlex](../datasets/openalex.md)
- [OpenAlex entity-type model](../representations/openalex_entity_type_model.md)
- [OpenAlex venue-host model](../representations/openalex_venue_host_model.md)
- [OpenAlex source-ingestion mix](openalex_source_ingestion_mix.md)
- [OpenAlex distribution channels](openalex_distribution_channels.md)
- [open access route typology](../datasets/open_access_route_typology.md)
- [open access evidence locations](../representations/open_access_evidence_locations.md)
- [publisher-hosted route precedence](../validations/publisher_hosted_route_precedence.md)
- [OA resolver source fusion](oa_resolver_source_fusion.md)
- [Crossref DOI sampling frame](../datasets/crossref_doi_sampling_frame.md)
- [scholarly snapshot versioning](scholarly_snapshot_versioning.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `openalex_work_version_resolution`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: work fingerprinting; version of record matching; primary host selection; work copy resolution
