# Open access status

## Summary

Open access status classifies whether and how a scholarly work is freely readable online, distinguishing access routes such as Gold, Green, Hybrid, Bronze, and Closed access.

## Canonical Form

- Unit of analysis: article, DOI, landing page, repository copy, publisher copy, or access event.
- Typical representation: categorical OA label, best open URL, license field, repository/publisher provenance, or time-varying access state.
- Mechanism or measurement target: legal availability, reader access, publishing model, self-archiving, and discoverability.
- Empirical signature: access prevalence varies by publication year, field, publisher, article age, and user population.

## Uses in Science of Science

- Supports studies of scholarly communication, open science, access inequality, publishing markets, and public reach.
- Provides a covariate for [citation impact indicators](../measures/citation_impact_indicators.md), because OA status can be associated with citation differences.
- Helps interpret open scholarly indexes such as [OpenAlex](openalex.md), which expose OA status and best OA URLs at work level.
- Connects article-level access labels to [open access route typology](open_access_route_typology.md), [open access prevalence measurement](../measures/open_access_prevalence_measurement.md), [open access resolver workflows](../methods/open_access_resolver_workflows.md), [OA resolver source fusion](../methods/oa_resolver_source_fusion.md), [open access evidence locations](../representations/open_access_evidence_locations.md), and [open access detection validation](../validations/open_access_detection_validation.md).
- Residual route-validation motifs include [legal open-copy exclusion boundary](../validations/legal_open_copy_exclusion_boundary.md), [OA platform-role boundary cases](../validations/oa_platform_role_boundary_cases.md), [reader-demand recency skew](../validations/reader_demand_recency_skew.md), and [OA growth route decomposition](../measures/oa_growth_route_decomposition.md).

- A residual Piwowar pass separates [OA mandate diffusion pressure](../mechanisms/oa_mandate_diffusion_pressure.md), [legal access-discovery infrastructure feedback](../mechanisms/legal_access_discovery_infrastructure_feedback.md), [gratis-libre rights gradient](../representations/gratis_libre_rights_gradient.md), [Crossref journal-article type noise](../validations/crossref_journal_article_type_noise.md), [publisher OA portfolio profile](../measures/publisher_oa_portfolio_profile.md), [discipline-specific OA route ecology](../representations/discipline_specific_oa_route_ecology.md), [open-access route citation heterogeneity](../measures/open_access_route_citation_heterogeneity.md), [Gold OA citation maturation discount](../hypotheses/gold_oa_citation_maturation_discount.md), [OA subscription substitution threshold](../mechanisms/oa_subscription_substitution_threshold.md), and [OA index openness reproducibility boundary](../validations/oa_index_openness_reproducibility_boundary.md).
## Operationalization

- Resolve a DOI or other article identifier to publisher-hosted and repository-hosted copies.
- Classify mutually exclusive categories such as Gold, Green, Hybrid, Bronze, and Closed.
- Record legal/open URL, license, source of access evidence, and the date when status was checked.
- Analyze OA status separately from citation impact and online attention to avoid treating availability as impact.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) uses oaDOI across 67 million articles and three 100,000-article samples: Crossref DOI articles, recent Web of Science DOI articles, and articles viewed by Unpaywall users.
- The paper estimates that at least 27.9% of DOI-assigned journal articles are OA, about 18.6 million Crossref DOI articles in their snapshot, and that 47.0% of articles accessed by Unpaywall users were OA.
- Piwowar et al. define a five-category article-level classification: Gold, Green, Hybrid, Bronze, and Closed. Bronze captures free-to-read publisher-hosted articles without a clearly identifiable open license.
- The full text reports that the most recent year analyzed, 2015, had the highest OA share at 44.7%, with growth driven largely by Gold and Hybrid OA.
- The study also corroborates an open-access citation advantage: after accounting for age and discipline, OA articles receive 18% more citations than average, with the effect driven primarily by Green and Hybrid OA.
- The paper validates oaDOI against manual checks, reporting high precision and lower recall, so OA prevalence estimates should be interpreted with detection uncertainty.
- A residual pass separates legal-source exclusions, ambiguous publisher/repository platform roles, demand-weighted recency skew, and route-level growth decomposition from the broader OA-status definition.

## Caveats

- OA status is time-varying; repository deposits, embargoes, takedowns, and publisher policy changes can alter labels.
- Free-to-read is not the same as openly licensed reuse; Bronze OA is especially ambiguous.
- OA citation advantages can be confounded by author selection, field, age, repository practices, and publisher policies.

## Links

- [openalex](openalex.md)
- [open access route typology](open_access_route_typology.md)
- [Crossref DOI sampling frame](crossref_doi_sampling_frame.md)
- [Unpaywall reader-demand sample](unpaywall_reader_demand_sample.md)
- [open access prevalence measurement](../measures/open_access_prevalence_measurement.md)
- [open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [OA resolver source fusion](../methods/oa_resolver_source_fusion.md)
- [open access evidence locations](../representations/open_access_evidence_locations.md)
- [open access detection validation](../validations/open_access_detection_validation.md)
- [legal open-copy exclusion boundary](../validations/legal_open_copy_exclusion_boundary.md)
- [OA platform-role boundary cases](../validations/oa_platform_role_boundary_cases.md)
- [reader-demand recency skew](../validations/reader_demand_recency_skew.md)
- [OA growth route decomposition](../measures/oa_growth_route_decomposition.md)
- [bronze open access ambiguity](../validations/bronze_open_access_ambiguity.md)
- [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md)
- [publisher-hosted route precedence](../validations/publisher_hosted_route_precedence.md)
- [open access citation advantage](../mechanisms/open_access_citation_advantage.md)
- [open access citation selection bias](../validations/open_access_citation_selection_bias.md)
- [web of science](web_of_science.md)
- [altmetrics](altmetrics.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)

- [OA mandate diffusion pressure](../mechanisms/oa_mandate_diffusion_pressure.md)
- [gratis-libre rights gradient](../representations/gratis_libre_rights_gradient.md)
- [open-access route citation heterogeneity](../measures/open_access_route_citation_heterogeneity.md)
- [OA index openness reproducibility boundary](../validations/oa_index_openness_reproducibility_boundary.md)
## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `open_access_status`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Aliases: OA status; Gold OA; Green OA; Hybrid OA; Bronze OA; Unpaywall status
