# OA-adjusted cost per access

## Summary

OA-adjusted cost per access estimates subscription value after accounting for how much reader-demanded literature is already available through open access routes.

## Canonical Form

- Unit of analysis: journal, subscription package, library collection, access request, OA status, or cancellation scenario.
- Typical representation: subscription cost divided by non-OA accesses, cost per paywalled access, OA-substitutable access share, or package negotiation dashboard.
- Measurement target: the marginal subscription value of access that is not already legally available through OA.
- Empirical signature: packages with high reader-requested OA availability have lower marginal paywalled access value than raw usage counts imply.

## Uses in Science of Science

- Extends [subscription cost citation-value analysis](../methods/subscription_cost_citation_value_analysis.md) from citation value to reader-access substitution.
- Uses [reader-experienced OA rate](reader_experienced_oa_rate.md) and [open access prevalence measurement](open_access_prevalence_measurement.md) to inform library cancellation and negotiation decisions.
- Links access-infrastructure metrics to [open access resolver workflows](../methods/open_access_resolver_workflows.md), because substitution depends on reliable legal OA discovery.
- Provides a policy-relevant measure for comparing Big Deal packages, journal bundles, and local collection needs.

## Operationalization

- Define a journal, package, or collection and collect subscription cost plus local or tool-mediated access requests.
- Resolve requested items to timestamped OA status and route labels.
- Estimate the share of requested items that are legally available without the subscription.
- Compute cost per access under raw usage and OA-adjusted scenarios, preserving caveats for article version, embargoes, licenses, and user friction.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) argues that high OA availability, especially among readers, has implications for academic libraries under pressure from Big Deal subscription prices.
- The paper notes that around half of literature requested through Unpaywall was OA and that this could affect cancellation or negotiation decisions.
- Piwowar et al. explicitly describe OA-adjusted Cost Per Access as a way to negotiate better subscription rates when OA availability is not enough to support outright cancellation.
- They call for journal- and package-level OA analysis tools to help librarians make cancellation choices.

## Caveats

- OA availability does not guarantee equivalent access quality, version, preservation, licensing, or workflow convenience.
- Local usage and field needs can diverge from browser-extension request samples.
- Cancellation decisions should include teaching, equity, preservation, interlibrary loan, embargo, and author-rights considerations.

## Links

- [reader-experienced OA rate](reader_experienced_oa_rate.md)
- [open access prevalence measurement](open_access_prevalence_measurement.md)
- [Unpaywall reader-demand sample](../datasets/unpaywall_reader_demand_sample.md)
- [open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [OA resolver source fusion](../methods/oa_resolver_source_fusion.md)
- [subscription cost citation-value analysis](../methods/subscription_cost_citation_value_analysis.md)
- [open access status](../datasets/open_access_status.md)
- [bronze open access ambiguity](../validations/bronze_open_access_ambiguity.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `oa_adjusted_cost_per_access`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Dimensions ID: `pub.1101032124`
- SciSciNet ID: `W2741809807`
- Aliases: OA-adjusted CPA; open-access-adjusted subscription value; cost per non-OA access; OA substitution cost per access
