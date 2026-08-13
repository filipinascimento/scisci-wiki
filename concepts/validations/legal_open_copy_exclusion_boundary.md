# Legal open-copy exclusion boundary

## Summary

Legal open-copy exclusion boundary distinguishes open access from merely free-to-read copies when source legality, copyright compliance, persistence, or takedown risk differs.

## Canonical Form

- Unit of analysis: article copy, URL, repository, academic social network, pirate site, DOI, or OA resolver result.
- Typical representation: legal source inclusion rule, excluded source class, repository whitelist, or resolver provenance flag.
- Validation target: ensure OA measurement captures legally open or repository-hosted availability rather than any accessible copy.
- Empirical signature: copies on academic social networks or pirate services are excluded even if a reader could access them.

## Uses in Science of Science

- Adds a source-boundary validation to [open access route typology](../datasets/open_access_route_typology.md).
- Clarifies [open access evidence locations](../representations/open_access_evidence_locations.md) and [open access resolver workflows](../methods/open_access_resolver_workflows.md).
- Supports [open access detection validation](open_access_detection_validation.md) by making source inclusion rules auditable.
- Helps prevent inflated OA prevalence estimates from unstable or non-compliant copies.

## Operationalization

- Define which source classes count as OA evidence, such as publisher pages, institutional repositories, subject repositories, or trusted aggregators.
- Exclude or separately label academic social network-only copies and known pirate sources.
- Preserve source provenance for every detected open URL.
- Report whether the measurement target is legal OA, free-to-read availability, or reader access regardless of legality.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) excludes ResearchGate-only and Academia.edu-only availability from OA classification.
- The paper also excludes Sci-Hub and LibGen-style access because legality, copyright compliance, persistence, and takedown risk differ from OA repositories and publisher-hosted access.
- The boundary makes their OA estimates conservative relative to any-free-copy measures.

## Caveats

- Legal status can be hard to infer automatically and can vary by jurisdiction.
- Exclusion rules should be stated because some user-experience studies may intentionally measure access regardless of legality.
- Repository metadata can still contain rights errors.

## Links

- [open access route typology](../datasets/open_access_route_typology.md)
- [open access status](../datasets/open_access_status.md)
- [open access evidence locations](../representations/open_access_evidence_locations.md)
- [open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [open access detection validation](open_access_detection_validation.md)
- [open access prevalence measurement](../measures/open_access_prevalence_measurement.md)
- [OA platform-role boundary cases](oa_platform_role_boundary_cases.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `legal_open_copy_exclusion_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Dimensions ID: `pub.1101032124`
- SciSciNet ID: `W2741809807`
- Aliases: legal OA source boundary; nonlegal open-copy exclusion; academic social network OA exclusion; pirate copy exclusion boundary
