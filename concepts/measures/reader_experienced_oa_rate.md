# Reader-experienced OA rate

## Summary

Reader-experienced OA rate measures the share of articles that are open access among items readers actually try to access, rather than among all articles in a publication corpus.

## Canonical Form

- Unit of analysis: reader request, DOI access event, unique requested article, user sample, or access-tool log.
- Typical representation: OA share among requested DOIs, confidence interval, request window, user-base note, and article-age distribution.
- Measurement target: practical availability encountered by readers at the point of access.
- Empirical signature: reader-experienced OA can exceed corpus-level OA when readers disproportionately request newer articles with higher OA prevalence.

## Uses in Science of Science

- Complements corpus-level [open access prevalence measurement](open_access_prevalence_measurement.md) with a demand-weighted access measure.
- Turns [Unpaywall reader-demand sample](../datasets/unpaywall_reader_demand_sample.md) into an operational metric for reader-facing access.
- Supports library and policy analyses where the relevant denominator is requested literature rather than all DOI-assigned articles.
- Links OA monitoring to [article readership reach rate](article_readership_reach_rate.md) and legal [open access resolver workflows](../methods/open_access_resolver_workflows.md).

## Operationalization

- Collect DOI requests from an access tool, library link resolver, browser extension, or platform log over a stated window.
- Deduplicate or weight requests according to whether the target is unique articles or access attempts.
- Attach timestamped OA status and route labels to each requested article.
- Report experienced OA share with confidence intervals, user-base limitations, geography, field mix, and article-age distribution.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) uses DOI requests made through the Unpaywall browser extension to estimate the OA encountered by users.
- The paper reports 47.0% OA in the Unpaywall-accessed sample, higher than the 27.9% OA estimate for all DOI-assigned journal articles in the Crossref sample.
- Piwowar et al. interpret the gap largely as an age-composition effect because half of the requested articles were published in the prior two years.
- The authors caution that Unpaywall users are a convenience sample with unknown demographics and a known United States bias.

## Caveats

- Reader-experienced rates are sample-dependent and should not be generalized to all readers without validation.
- Tool adoption, field mix, institutional subscriptions, geography, and academic calendars can shape request logs.
- Unique-DOI rates and request-weighted rates answer different questions and should not be mixed silently.

## Links

- [open access prevalence measurement](open_access_prevalence_measurement.md)
- [Unpaywall reader-demand sample](../datasets/unpaywall_reader_demand_sample.md)
- [open access status](../datasets/open_access_status.md)
- [open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [OA resolver source fusion](../methods/oa_resolver_source_fusion.md)
- [article readership reach rate](article_readership_reach_rate.md)
- [OA-adjusted cost per access](oa_adjusted_cost_per_access.md)
- [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `reader_experienced_oa_rate`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Dimensions ID: `pub.1101032124`
- SciSciNet ID: `W2741809807`
- Aliases: user-experienced OA share; demand-weighted open access rate; reader-facing OA availability; accessed-article OA rate
