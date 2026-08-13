# Open access prevalence measurement

## Summary

Open access prevalence measurement estimates how much of a scholarly corpus is freely readable, usually stratified by access route, publication year, discipline, publisher, or reader population.

## Canonical Form

- Unit of analysis: article, DOI, publication year, field, publisher, user-access sample, or bibliographic database slice.
- Typical representation: OA share, route-specific OA share, confidence interval, population denominator, and resolver coverage note.
- Measurement target: the prevalence of free-to-read scholarly access in a defined sampling frame.
- Empirical signature: estimates differ across Crossref, Web of Science, user-access logs, fields, publishers, and publication years.

## Uses in Science of Science

- Turns [open access status](../datasets/open_access_status.md) into an aggregate measure suitable for monitoring scholarly communication.
- Separates corpus-level availability from user-experienced availability, including [reader-experienced OA rate](reader_experienced_oa_rate.md) and [Unpaywall reader-demand sample](../datasets/unpaywall_reader_demand_sample.md) estimates that can be higher when readers disproportionately request recent literature.
- Provides denominators for policy evaluation, library cancellation analysis, and [responsible metrics](responsible_metrics.md).
- Needs route labels from [open access route typology](../datasets/open_access_route_typology.md), evidence fields from [open access evidence locations](../representations/open_access_evidence_locations.md), and declared denominators such as [Crossref DOI sampling frame](../datasets/crossref_doi_sampling_frame.md).
- For Green OA time series, requires [Green OA backfill temporal bias](../validations/green_oa_backfill_temporal_bias.md) checks before treating publication-year curves as deposit growth.
- Residual measurement guardrails now include [reader-demand recency skew](../validations/reader_demand_recency_skew.md), [legal open-copy exclusion boundary](../validations/legal_open_copy_exclusion_boundary.md), [OA platform-role boundary cases](../validations/oa_platform_role_boundary_cases.md), and [OA growth route decomposition](oa_growth_route_decomposition.md).

## Operationalization

- Define the sampling frame first: all DOI-assigned journal articles, recent indexed citable items, a publisher portfolio, or a set of actual reader requests.
- Resolve each item through an audited [open access resolver workflow](../methods/open_access_resolver_workflows.md).
- Report overall OA prevalence and route-specific shares, with confidence intervals and date of measurement.
- Keep the bibliographic denominator explicit, because [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md), database inclusion, and document-type filters shape the estimate.
- Interpret estimates through [open access detection validation](../validations/open_access_detection_validation.md), especially when resolver recall is less than perfect.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) uses three 100,000-article samples: Crossref DOI journal articles, recent Web of Science DOI articles, and DOI requests made by Unpaywall users.
- The Crossref DOI sample estimates that 27.9% of DOI-assigned journal articles are OA, corresponding to 18.6 million OA articles identifiable by the prototype oaDOI resolver.
- The Unpaywall-user sample estimates much higher experienced availability: 47.0% of requested articles were OA, largely because readers requested newer articles.
- The paper separates total-literature prevalence from discipline and citation-impact questions by using the Crossref sample for broad prevalence and the Web of Science sample for field and citation analyses.
- The study treats prevalence as a lower-bound estimate because its resolver validation found high precision but lower recall.
- A later residual pass separates why user-demand samples differ from corpus-level samples, why legal source inclusion matters, why some OA platforms blur route roles, and how route-specific growth should be decomposed.

## Caveats

- Prevalence estimates are snapshot-dependent; repository deposits, embargoes, takedowns, and publisher access changes can alter the same article later.
- DOI-first denominators underrepresent fields and regions where DOI assignment is less complete.
- User-access samples measure availability experienced by a specific user base, not the whole literature.
- Exclusive route labels can undercount repository availability when [Green OA](../datasets/open_access_route_typology.md) is shadowed by [publisher-hosted route precedence](../validations/publisher_hosted_route_precedence.md).

## Links

- [open access status](../datasets/open_access_status.md)
- [open access route typology](../datasets/open_access_route_typology.md)
- [Crossref DOI sampling frame](../datasets/crossref_doi_sampling_frame.md)
- [Unpaywall reader-demand sample](../datasets/unpaywall_reader_demand_sample.md)
- [reader-experienced OA rate](reader_experienced_oa_rate.md)
- [OA-adjusted cost per access](oa_adjusted_cost_per_access.md)
- [open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [OA resolver source fusion](../methods/oa_resolver_source_fusion.md)
- [open access evidence locations](../representations/open_access_evidence_locations.md)
- [open access detection validation](../validations/open_access_detection_validation.md)
- [bronze open access ambiguity](../validations/bronze_open_access_ambiguity.md)
- [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md)
- [publisher-hosted route precedence](../validations/publisher_hosted_route_precedence.md)
- [Green OA backfill temporal bias](../validations/green_oa_backfill_temporal_bias.md)
- [Hidden Gold journal detection](../validations/hidden_gold_journal_detection.md)
- [legal open-copy exclusion boundary](../validations/legal_open_copy_exclusion_boundary.md)
- [OA platform-role boundary cases](../validations/oa_platform_role_boundary_cases.md)
- [reader-demand recency skew](../validations/reader_demand_recency_skew.md)
- [OA growth route decomposition](oa_growth_route_decomposition.md)
- [open access citation selection bias](../validations/open_access_citation_selection_bias.md)
- [open access citation advantage](../mechanisms/open_access_citation_advantage.md)
- [openalex](../datasets/openalex.md)
- [web of science](../datasets/web_of_science.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `open_access_prevalence_measurement`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Aliases: OA prevalence; open access share; route-specific OA prevalence; free-to-read coverage
