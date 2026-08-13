# Reader-demand recency skew

## Summary

Reader-demand recency skew is the validation motif that user-request samples can show higher open-access availability than corpus samples because readers disproportionately request newer articles.

## Canonical Form

- Unit of analysis: reader request, article, publication year, OA status, access sample, or demand-weighted denominator.
- Typical representation: requested-article age distribution, reader-experienced OA rate, corpus OA rate, or recency-adjusted comparison.
- Validation target: separate user-experienced access from literature-wide prevalence.
- Empirical signature: an access-log sample has a newer publication-year distribution and higher OA share than the whole DOI corpus.

## Uses in Science of Science

- Provides a denominator guardrail for [reader-experienced OA rate](../measures/reader_experienced_oa_rate.md).
- Explains why [Unpaywall reader-demand sample](../datasets/unpaywall_reader_demand_sample.md) estimates can exceed [open access prevalence measurement](../measures/open_access_prevalence_measurement.md).
- Connects OA measurement to article-age effects and publication-year route growth.
- Helps prevent demand-weighted estimates from being reported as corpus-level OA prevalence.

## Operationalization

- Compare the publication-year distribution of reader requests with the target article corpus.
- Estimate OA share in both the demand-weighted sample and the corpus-level sample.
- Decompose differences by article age, route, field, and user population if possible.
- Label estimates as reader-experienced, demand-weighted, or corpus-level.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) reports that 47.0% of articles requested by Unpaywall users were OA, compared with 27.9% in the Crossref DOI sample.
- The paper attributes much of this difference to recency: a large share of requested articles came from the prior two years, and recent articles were more likely to be OA.
- This supports treating reader-demand samples as a different denominator rather than a corrected corpus prevalence estimate.

## Caveats

- Reader demand varies by user base, tool adoption, institution, language, and field.
- Recency is not the only source of skew; highly cited or classroom-assigned articles may also be overrepresented.
- Demand-weighted access can be the right estimand for reader experience, but it should not be conflated with all-literature prevalence.

## Links

- [reader-experienced OA rate](../measures/reader_experienced_oa_rate.md)
- [Unpaywall reader-demand sample](../datasets/unpaywall_reader_demand_sample.md)
- [open access prevalence measurement](../measures/open_access_prevalence_measurement.md)
- [open access status](../datasets/open_access_status.md)
- [OA growth route decomposition](../measures/oa_growth_route_decomposition.md)
- [open access resolver workflows](../methods/open_access_resolver_workflows.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `reader_demand_recency_skew`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Dimensions ID: `pub.1101032124`
- SciSciNet ID: `W2741809807`
- Aliases: demand-weighted OA recency bias; Unpaywall request recency skew; reader sample age skew; user-demand OA denominator bias
