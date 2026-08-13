# Open access evidence locations

## Summary

Open access evidence locations represent the concrete URLs, hosts, and license traces used to justify an article's OA status and route.

## Canonical Form

- Unit of analysis: DOI, publisher page, repository copy, license URL, best OA URL, host type, or resolver result.
- Typical representation: best OA location, publisher-or-repository provenance, license field, evidence URL, route label, and query timestamp.
- Data-representation target: make article-level access labels auditable and reusable instead of storing only a binary OA flag.
- Empirical signature: the same article can have multiple open copies, and route assignment depends on which location is chosen as the evidence-bearing copy.

## Uses in Science of Science

- Supplies the audit trail behind [open access status](../datasets/open_access_status.md) and [open access route typology](../datasets/open_access_route_typology.md).
- Lets [open access resolver workflows](../methods/open_access_resolver_workflows.md) expose why a work was classified as Gold, Green, Hybrid, Bronze, or Closed.
- Supports [open access prevalence measurement](../measures/open_access_prevalence_measurement.md) by preserving source provenance and access dates.
- Helps diagnose [bronze open access ambiguity](../validations/bronze_open_access_ambiguity.md), [publisher-hosted route precedence](../validations/publisher_hosted_route_precedence.md), shadowed Green copies, and repository coverage gaps.

## Operationalization

- For each DOI or work identifier, store the selected open URL and the host type: publisher, repository, archive, or other legal source.
- Preserve license evidence separately from readability evidence.
- Record alternative locations when they affect interpretation, such as repository copies shadowed by publisher-hosted access.
- Keep resolver query dates and source-version metadata because OA status can change.
- When using [OpenAlex](../datasets/openalex.md), treat work-level OA fields as derived evidence that should remain connected to the underlying best OA URL and license/source fields when available.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) describes oaDOI as returning links to legally available OA versions and aggregating evidence from sources including PMC, BASE, DOAJ, repositories, and publishers.
- The paper's manual validation procedure distinguishes publisher-page full text from repository or archive copies and excludes academic social-network-only copies from its OA definition.
- Piwowar et al. make route assignment depend on evidence location: Green requires a repository copy with toll access on the publisher page, while Gold, Hybrid, and Bronze are publisher-hosted forms.
- The paper notes that publisher-hosted copies can shadow repository-hosted copies under its exclusive route rules, so evidence locations matter for both measurement and interpretation.
- The study's limitations identify missing repositories, personal-web-page coverage, and absent repository-deposit dates as data-representation gaps for future OA monitoring.

## Caveats

- A best OA URL is not the same as complete location coverage; alternative legal copies may exist.
- Host classification can be unstable for platforms that mix publisher, repository, and aggregator roles.
- License metadata can be absent even when reading access is present.
- Academic social networks and pirate access sources should be recorded separately if studied, but not silently merged into legal OA evidence.

## Links

- [open access status](../datasets/open_access_status.md)
- [open access route typology](../datasets/open_access_route_typology.md)
- [open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [OA resolver source fusion](../methods/oa_resolver_source_fusion.md)
- [open access detection validation](../validations/open_access_detection_validation.md)
- [open access prevalence measurement](../measures/open_access_prevalence_measurement.md)
- [bronze open access ambiguity](../validations/bronze_open_access_ambiguity.md)
- [publisher-hosted route precedence](../validations/publisher_hosted_route_precedence.md)
- [openalex](../datasets/openalex.md)
- [dimensions](../datasets/dimensions.md)
- [scholarly identifier spine](scholarly_identifier_spine.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `open_access_evidence_locations`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Aliases: OA location; best OA URL; repository evidence; publisher OA evidence
