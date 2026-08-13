# OA resolver source fusion

## Summary

OA resolver source fusion combines publisher, repository, directory, and archive evidence to decide whether a DOI has a legal open copy and where that copy is located.

## Canonical Form

- Unit of analysis: DOI, resolver record, source-specific candidate URL, license evidence, or OA location.
- Typical representation: source list, normalized candidate URLs, host type, selected best OA URL, license field, route label, and resolver timestamp.
- Method target: turn heterogeneous access traces into reproducible [open access status](../datasets/open_access_status.md) labels.
- Empirical signature: resolver outputs cite multiple evidence sources and can be audited against manual publisher and repository searches.

## Uses in Science of Science

- Implements [open access resolver workflows](open_access_resolver_workflows.md) as a concrete data-integration motif.
- Supplies evidence to [open access evidence locations](../representations/open_access_evidence_locations.md), [open access route typology](../datasets/open_access_route_typology.md), and [open access prevalence measurement](../measures/open_access_prevalence_measurement.md).
- Connects DOI-centered denominators such as [Crossref DOI sampling frame](../datasets/crossref_doi_sampling_frame.md) to repository and publisher access evidence.
- Creates a validation surface for [open access detection validation](../validations/open_access_detection_validation.md), [bronze open access ambiguity](../validations/bronze_open_access_ambiguity.md), and [publisher-hosted route precedence](../validations/publisher_hosted_route_precedence.md).

## Operationalization

- Start with a DOI-normalized bibliographic record.
- Gather candidate legal copies from sources such as PMC, BASE, DOAJ, institutional repositories, publisher landing pages, and publisher full text.
- Normalize URLs and host labels, remove duplicate locations, and preserve source provenance.
- Verify whether the candidate is freely readable, whether a license is identifiable, and whether the host is publisher-hosted or repository-hosted.
- Select a best OA location while keeping enough alternate-location evidence to audit route labels.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) describes oaDOI as returning a link to a legally available OA version of an article when one is available.
- The paper states that oaDOI contained records for all Crossref DOIs in its 2017 system and crawled, aggregated, normalized, and verified data from PMC, BASE, DOAJ, thousands of institutional repositories, and publishers.
- Piwowar et al. note that the resolver powered both library discovery workflows and the Unpaywall browser extension, making source fusion operational infrastructure rather than only an offline classification step.
- The paper validates the prototype resolver against manual searches, reporting high precision and lower recall, which makes source fusion quality central to prevalence estimates.

## Caveats

- Source lists and crawler coverage change over time, so resolver snapshots need dates and version metadata.
- A fused best URL can hide unresolved conflicts among publisher, repository, and aggregator evidence.
- Source fusion can miss legal copies when repositories are not indexed, metadata is sparse, or candidate URLs are blocked.
- License evidence should be preserved separately from free-to-read evidence.

## Links

- [open access resolver workflows](open_access_resolver_workflows.md)
- [open access status](../datasets/open_access_status.md)
- [open access evidence locations](../representations/open_access_evidence_locations.md)
- [open access route typology](../datasets/open_access_route_typology.md)
- [open access detection validation](../validations/open_access_detection_validation.md)
- [Crossref DOI sampling frame](../datasets/crossref_doi_sampling_frame.md)
- [Unpaywall reader-demand sample](../datasets/unpaywall_reader_demand_sample.md)
- [publisher-hosted route precedence](../validations/publisher_hosted_route_precedence.md)
- [bronze open access ambiguity](../validations/bronze_open_access_ambiguity.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `oa_resolver_source_fusion`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Aliases: oaDOI source fusion; Unpaywall source fusion; OA source aggregation; legal open-copy fusion
