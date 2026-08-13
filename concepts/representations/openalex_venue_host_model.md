# OpenAlex venue-host model

## Summary

The OpenAlex venue-host model represents journals, conferences, repositories, and other publication sites as venue entities that host works, while allowing a single work to have multiple hosts and versions.

## Canonical Form

- Unit of analysis: OpenAlex venue, hosted work, work location, version of record, repository copy, or venue-work edge.
- Typical representation: work-location table, venue entity graph, primary host flag, host type, and source-specific version or license fields.
- Representation target: preserve where scholarly works are hosted without collapsing journals, conferences, preprint servers, and repositories into one undifferentiated source string.
- Empirical signature: a work can be linked to multiple venues, while the version of record is flagged as the primary host when resolved.

## Uses in Science of Science

- Extends the [OpenAlex entity-type model](openalex_entity_type_model.md) with a venue-centered relation layer.
- Provides the venue side of [OpenAlex work-version resolution](../methods/openalex_work_version_resolution.md) and open-access route analysis.
- Supports venue-level source coverage, journal/preprint comparisons, repository diffusion, and publication venue controls.
- Works with [OpenAlex ISSN-L venue matching](../methods/openalex_issn_l_venue_matching.md) when journal title variants or print/electronic ISSNs need consolidation.

## Operationalization

- Extract OpenAlex work locations or host-venue fields together with work ID, venue ID, host type, version, license, and primary-location flags.
- Preserve multiple hosts per work rather than selecting only one unless the research question requires a version-of-record view.
- Separate venue entity identity from source ingestion provenance; a venue can host a work even when metadata came from another upstream source.
- Record snapshot date because hosted locations, licenses, and primary-host flags can change across OpenAlex releases.

## Evidence and Validations

- Verified full-text evidence from Priem, Piwowar, and Orr (2022) defines venues as places that host works, including journals, conferences, preprint repositories, and institutional repositories.
- The paper states that works are often hosted in multiple venues and versions, such as an arXiv preprint and a publisher version of record.
- Priem et al. describe a fingerprinting algorithm that matches versions and flags the version of record as the primary host.
- The same full text reports automatic determination of version and license information for copies where possible.

## Caveats

- Venue-host evidence is not the same as metadata source provenance or publication history.
- Primary-host selection can affect counts of preprints, repository copies, open-access routes, and venue output.
- Conference proceedings, books, institutional repositories, and translated or revised records may be harder to resolve cleanly than ordinary journal articles.
- Venue labels and source types can evolve across OpenAlex snapshots.

## Links

- [OpenAlex](../datasets/openalex.md)
- [OpenAlex entity-type model](openalex_entity_type_model.md)
- [OpenAlex work-version resolution](../methods/openalex_work_version_resolution.md)
- [OpenAlex ISSN-L venue matching](../methods/openalex_issn_l_venue_matching.md)
- [OpenAlex canonical external IDs](openalex_canonical_external_ids.md)
- [open access route typology](../datasets/open_access_route_typology.md)
- [open access evidence locations](open_access_evidence_locations.md)
- [publisher-hosted route precedence](../validations/publisher_hosted_route_precedence.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `openalex_venue_host_model`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: OpenAlex venue model; work host venues; OpenAlex hosted works; venue-work host layer
