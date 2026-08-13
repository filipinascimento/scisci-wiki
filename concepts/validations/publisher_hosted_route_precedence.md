# Publisher-hosted route precedence

## Summary

Publisher-hosted route precedence is the classification rule in which publisher-hosted open access labels take priority over repository-hosted copies when assigning a single exclusive OA route.

## Canonical Form

- Unit of analysis: article, DOI, publisher copy, repository copy, OA route label, or route-assignment rule.
- Typical representation: exclusive route hierarchy, publisher-hosted flag, repository-copy flag, shadowed Green indicator, and route-specific counts.
- Validation target: whether a route taxonomy measures access locations or an exclusive best-route label.
- Empirical signature: Green OA counts are lower when publisher-hosted Gold, Hybrid, or Bronze copies shadow repository copies.

## Uses in Science of Science

- Qualifies [open access route typology](../datasets/open_access_route_typology.md) and [open access prevalence measurement](../measures/open_access_prevalence_measurement.md).
- Explains why studies can disagree about Green OA prevalence even when they observe similar repository availability.
- Connects [open access evidence locations](../representations/open_access_evidence_locations.md) to route-label construction.
- Helps interpret [bronze open access ambiguity](bronze_open_access_ambiguity.md), because Bronze publisher access can hide repository-hosted legal copies under an exclusive route rule.
- Separates route-label shadowing from [Green OA backfill temporal bias](green_oa_backfill_temporal_bias.md), where repository deposit timing makes publication-year curves hard to interpret.

## Operationalization

- Decide whether route labels are mutually exclusive or multi-label.
- If labels are exclusive, define the precedence order before counting route shares.
- Preserve alternate open locations even when a single best route is reported.
- Report shadowed Green counts or sensitivity checks when repository availability is substantively important.
- Compare route-specific results under exclusive and multi-label alternatives when policy conclusions depend on Green OA.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) defines Gold, Green, Hybrid, Bronze, and Closed as a five-category exclusive classification system.
- The paper states that publisher-hosted content takes precedence over self-archived content, so an article in both an OA journal and a repository is classified as Gold rather than Green.
- Piwowar et al. explicitly note that this rule can undercount Green OA compared with studies that allow an article to be both Gold and Green.
- In the results, the paper interprets the relatively small Green share partly as a consequence of Green articles being shadowed by Gold, Bronze, or Hybrid copies.
- The paper's Bronze discussion makes route precedence especially important because publisher-hosted free-to-read articles without license information can still dominate the exclusive route label.

## Caveats

- Exclusive route labels simplify reporting but can erase useful multi-location evidence.
- A publisher-hosted copy can be temporary, delayed, or license-ambiguous even when it shadows a durable repository copy.
- Route precedence rules should not be changed silently across time-series or cross-study comparisons.
- Multi-label route storage is often better for reuse, even when figures report one exclusive class.

## Links

- [open access route typology](../datasets/open_access_route_typology.md)
- [open access prevalence measurement](../measures/open_access_prevalence_measurement.md)
- [open access evidence locations](../representations/open_access_evidence_locations.md)
- [open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [OA resolver source fusion](../methods/oa_resolver_source_fusion.md)
- [bronze open access ambiguity](bronze_open_access_ambiguity.md)
- [Green OA backfill temporal bias](green_oa_backfill_temporal_bias.md)
- [open access detection validation](open_access_detection_validation.md)
- [open access citation selection bias](open_access_citation_selection_bias.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `publisher_hosted_route_precedence`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Aliases: publisher-hosted precedence; shadowed Green OA; exclusive OA route hierarchy; OA route precedence
