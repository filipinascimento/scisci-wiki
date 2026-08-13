# Bibliographic source-maintenance regime

## Summary

Bibliographic source-maintenance regime is the caveat that collaboration-network data quality depends on whether source records are self-submitted, professionally curated, institution-submitted, or publisher-indexed.

## Canonical Form

- Unit of analysis: bibliographic source, publication record, author record, source-domain panel, or collaboration edge.
- Typical representation: source-level metadata about who maintains the corpus and how updates enter it.
- Validation target: distinguish coverage errors caused by source-maintenance practice from substantive field differences.
- Empirical signature: collaboration measures are interpreted relative to the maintenance regime of the source database.

## Uses in Science of Science

- Refines [collaboration source coverage bias](collaboration_source_coverage_bias.md).
- Adds source-provenance detail to [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md).
- Helps compare hand-curated, self-archived, and commercial bibliographic databases.
- Supports audits before combining sources such as [Web of Science](../datasets/web_of_science.md), [OpenAlex](../datasets/openalex.md), and domain archives.

## Operationalization

- Record who submits, cleans, and updates the source bibliography.
- Document whether author names, affiliations, publication types, and versions are curated.
- Stratify or sensitivity-test network measures by source-maintenance regime.
- Preserve source provenance when merging bibliographic panels.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) describes multiple bibliographic sources with different maintenance practices.
- The paper notes distinctions between self-submitted preprint databases, professionally maintained indexes, and institution-submitted records.
- These differences motivate treating source construction as part of collaboration-network validity.

## Caveats

- Maintenance regime is only one coverage dimension; field norms and document types also matter.
- Professionally curated sources can still miss informal, preprint, or nonindexed collaboration.
- Self-submitted sources can be timely while still incomplete or uneven across communities.

## Links

- [collaboration source coverage bias](collaboration_source_coverage_bias.md)
- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [Web of Science](../datasets/web_of_science.md)
- [OpenAlex](../datasets/openalex.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; SciSciNet: W2025572017]

## Metadata

- Concept ID: `bibliographic_source_maintenance_regime`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2001 PRE) (2001)
- Latest seen paper: Newman (2001 PRE) (2001)
- Primary reference DOI: `10.1103/physreve.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `pub.1060727007`
- SciSciNet ID: `W2025572017`
- Aliases: source-maintenance provenance; bibliographic curation regime; database maintenance caveat; source-maintenance bias
