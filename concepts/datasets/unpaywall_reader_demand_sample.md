# Unpaywall reader-demand sample

## Summary

Unpaywall reader-demand sample uses DOI requests made through the Unpaywall browser extension as a convenience sample of articles that readers actually try to access.

## Canonical Form

- Unit of analysis: DOI request, browser-extension access event, unique DOI, user IP, or sampled requested article.
- Typical representation: request timestamp, DOI, unique DOI count, unique IP count, sampled DOI set, and matched OA status.
- Data target: estimate user-experienced access rather than corpus-level access.
- Empirical signature: reader-request samples can have higher OA prevalence than all-article samples because users disproportionately request newer and more salient articles.

## Uses in Science of Science

- Complements [Crossref DOI sampling frame](crossref_doi_sampling_frame.md) by shifting from a literature denominator to a reader-demand denominator.
- Provides an empirical route for separating corpus-level [open access prevalence measurement](../measures/open_access_prevalence_measurement.md) from [reader-experienced OA rate](../measures/reader_experienced_oa_rate.md).
- Links [open access resolver workflows](../methods/open_access_resolver_workflows.md) to behavioral traces created by access tools.
- Supports studies of access inequality, library discovery systems, and public reach when combined with [open access status](open_access_status.md).

## Operationalization

- Collect DOI requests routed through the Unpaywall browser extension or a comparable legal OA discovery tool.
- Deduplicate or sample unique DOIs according to the study question.
- Attach OA status using a timestamped resolver snapshot.
- Report the sampling window, request counts, unique DOI counts, user or IP counts, and known user-base biases.
- Do not generalize directly to the whole literature without comparing against corpus-level denominators.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) constructs an Unpaywall-DOI sample from DOI requests made through the Unpaywall browser extension during June 5-11, 2017.
- The paper reports 374,703 total accesses, 213,323 unique DOIs, and 42,894 unique IP addresses in that week, from which 100,000 unique DOIs were randomly sampled.
- Piwowar et al. use this sample to estimate OA availability experienced by Unpaywall users, finding that 47.0% of requested articles were OA.
- The paper interprets the higher experienced availability partly as an age effect because readers disproportionately request newer articles, and newer articles in their data had higher OA shares.
- The authors caution that the sample is a convenience sample with unknown user demographics and a known bias toward users from the United States.

## Caveats

- Browser-extension users are not representative of all readers.
- IP-based user counts are approximate and can obscure shared networks, VPNs, or multiple devices.
- Requested DOI streams omit non-DOI literature and can overweight fields or institutions where the extension is adopted.
- A short sampling window can confound access estimates with news cycles, academic calendars, and adoption campaigns.

## Links

- [open access status](open_access_status.md)
- [open access prevalence measurement](../measures/open_access_prevalence_measurement.md)
- [reader-experienced OA rate](../measures/reader_experienced_oa_rate.md)
- [OA-adjusted cost per access](../measures/oa_adjusted_cost_per_access.md)
- [open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [OA resolver source fusion](../methods/oa_resolver_source_fusion.md)
- [Crossref DOI sampling frame](crossref_doi_sampling_frame.md)
- [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md)
- [open access citation selection bias](../validations/open_access_citation_selection_bias.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `unpaywall_reader_demand_sample`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Aliases: Unpaywall DOI request sample; reader-demand OA sample; access-event DOI sample; user-experienced OA sample
