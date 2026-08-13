# Open access resolver workflows

## Summary

Open access resolver workflows query article identifiers and web locations to find legal open copies, assign OA status, and return access URLs for scholarly records.

## Canonical Form

- Unit of analysis: DOI, article, landing page, publisher copy, repository copy, or resolver request.
- Typical representation: resolver API result, best OA URL, host type, evidence URL, license field, and timestamped OA status.
- Method target: automate legal open-copy discovery at large scale.
- Empirical signature: resolver output can be compared against manual search to estimate precision and recall.

## Uses in Science of Science

- Provides measurement infrastructure for [open access status](../datasets/open_access_status.md), [open access route typology](../datasets/open_access_route_typology.md), and [OA resolver source fusion](oa_resolver_source_fusion.md).
- Supplies OA fields used by [OpenAlex](../datasets/openalex.md) and downstream access/citation studies.
- Creates auditable evidence for [open access detection validation](../validations/open_access_detection_validation.md).
- Produces [open access evidence locations](../representations/open_access_evidence_locations.md) that can be aggregated into [open access prevalence measurement](../measures/open_access_prevalence_measurement.md).

## Operationalization

- Start from DOI-normalized article metadata, usually from Crossref, Web of Science, OpenAlex, Dimensions, or another bibliographic source.
- Treat the DOI source as a declared denominator, such as a [Crossref DOI sampling frame](../datasets/crossref_doi_sampling_frame.md), rather than as the whole literature by default.
- Query a resolver such as oaDOI/Unpaywall for legal open copies.
- Record the selected open URL, host type, license evidence, route classification, and query date.
- Preserve missing or uncertain results rather than imputing OA from publisher or repository names alone.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) uses oaDOI, an open service that returns links to legally available OA versions when available.
- The paper describes oaDOI as covering Crossref DOIs, using sources such as DOAJ, repositories, and publishers, and powering the Unpaywall browser extension.
- Piwowar et al. use three 100,000-article samples: Crossref DOI articles, recent Web of Science DOI articles, and DOI requests from Unpaywall users.
- The workflow explicitly separates detection from validation by comparing resolver output with manual web searches in a subsample.

## Caveats

- DOI coverage varies by field and document type, so DOI-first workflows can underrepresent humanities, books, older literature, and non-journal outputs.
- Resolver results are time-sensitive because access status, licenses, and repository availability can change.
- A missing open URL is not proof that no legal open copy exists.

## Links

- [open access status](../datasets/open_access_status.md)
- [open access route typology](../datasets/open_access_route_typology.md)
- [Crossref DOI sampling frame](../datasets/crossref_doi_sampling_frame.md)
- [Unpaywall reader-demand sample](../datasets/unpaywall_reader_demand_sample.md)
- [OA resolver source fusion](oa_resolver_source_fusion.md)
- [open access prevalence measurement](../measures/open_access_prevalence_measurement.md)
- [open access evidence locations](../representations/open_access_evidence_locations.md)
- [open access detection validation](../validations/open_access_detection_validation.md)
- [bronze open access ambiguity](../validations/bronze_open_access_ambiguity.md)
- [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md)
- [publisher-hosted route precedence](../validations/publisher_hosted_route_precedence.md)
- [openalex](../datasets/openalex.md)
- [web of science](../datasets/web_of_science.md)
- [dimensions](../datasets/dimensions.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `open_access_resolver_workflows`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Aliases: oaDOI workflow; Unpaywall workflow; OA resolver; legal open-copy discovery
