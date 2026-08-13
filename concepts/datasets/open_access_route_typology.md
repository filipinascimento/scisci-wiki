# Open access route typology

## Summary

Open access route typology separates free-to-read scholarly articles by the pathway that makes them available, such as Gold, Green, Hybrid, Bronze, or Closed.

## Canonical Form

- Unit of analysis: article, DOI, publisher copy, repository copy, journal, license record, or access snapshot.
- Typical representation: mutually exclusive OA route label, license status, publisher-or-repository provenance, or best open URL.
- Measurement target: how scholarly access is achieved, not merely whether access exists.
- Empirical signature: OA prevalence and citation associations differ across Gold, Green, Hybrid, Bronze, and Closed categories.

## Uses in Science of Science

- Refines [open access status](open_access_status.md) into route-specific data.
- Provides covariates for [open access citation advantage](../mechanisms/open_access_citation_advantage.md), publishing-market studies, and policy audits.
- Helps interpret OA fields in [OpenAlex](openalex.md) and other work-level scholarly indexes.
- Supports [open access prevalence measurement](../measures/open_access_prevalence_measurement.md) and [bronze open access ambiguity](../validations/bronze_open_access_ambiguity.md) by keeping route labels and license uncertainty explicit.
- Route-classification residuals now separate [legal open-copy exclusion boundary](../validations/legal_open_copy_exclusion_boundary.md), [OA platform-role boundary cases](../validations/oa_platform_role_boundary_cases.md), and [OA growth route decomposition](../measures/oa_growth_route_decomposition.md).

## Operationalization

- Resolve the article DOI to publisher-hosted and repository-hosted copies.
- Classify publisher-hosted OA by journal status, subscription status, and machine-readable license.
- Classify repository-only copies separately from publisher-hosted copies.
- Preserve ambiguous publisher-free-without-license cases as Bronze rather than treating them as licensed OA.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) defines OA as free to read online on a publisher website or in an OA repository, then divides the literature into Gold, Green, Hybrid, Bronze, and Closed.
- The paper makes the categories exclusive, so publisher-hosted access can shadow repository access that would otherwise count as Green.
- Piwowar et al. introduce Bronze OA for publisher-hosted free-to-read articles without a clearly identifiable open license, making license ambiguity a first-class data problem.
- The study reports that OA growth differs by route, with recent growth driven especially by Gold and Hybrid and with Bronze representing a large, under-discussed share.
- Piwowar et al. also motivate source-boundary decisions: nonlegal or academic-social-network-only copies are excluded, and platforms such as SciELO or Redalyc can blur publisher and repository roles.

## Caveats

- Route labels are snapshot-dependent because repositories, embargoes, licenses, and publisher access can change.
- Exclusive route rules can undercount Green OA when repository copies coexist with publisher-hosted access.
- Bronze OA is difficult to interpret because it may include delayed, promotional, hidden-gold, or transient free access.

## Links

- [open access status](open_access_status.md)
- [open access prevalence measurement](../measures/open_access_prevalence_measurement.md)
- [open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [open access evidence locations](../representations/open_access_evidence_locations.md)
- [open access detection validation](../validations/open_access_detection_validation.md)
- [bronze open access ambiguity](../validations/bronze_open_access_ambiguity.md)
- [legal open-copy exclusion boundary](../validations/legal_open_copy_exclusion_boundary.md)
- [OA platform-role boundary cases](../validations/oa_platform_role_boundary_cases.md)
- [OA growth route decomposition](../measures/oa_growth_route_decomposition.md)
- [open access citation advantage](../mechanisms/open_access_citation_advantage.md)
- [open access citation selection bias](../validations/open_access_citation_selection_bias.md)
- [openalex](openalex.md)
- [web of science](web_of_science.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `open_access_route_typology`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Aliases: Gold OA; Green OA; Hybrid OA; Bronze OA; Closed access; OA route
