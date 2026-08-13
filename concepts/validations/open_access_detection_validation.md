# Open access detection validation

## Summary

Open access detection validation tests whether automated OA resolvers correctly identify legal open copies and route labels compared with manual or higher-confidence checks.

## Canonical Form

- Unit of analysis: resolver result, DOI, article, publisher page, repository copy, access route, or validation sample.
- Typical representation: precision, recall, confusion matrix, false-positive rate, false-negative rate, or route-specific audit table.
- Validation target: reliability of automated OA status and route labels.
- Empirical signature: resolver-reported OA status is compared against manual web search and publisher/repository inspection.

## Uses in Science of Science

- Audits [open access resolver workflows](../methods/open_access_resolver_workflows.md) and [OA resolver source fusion](../methods/oa_resolver_source_fusion.md).
- Qualifies estimates of [open access status](../datasets/open_access_status.md), [open access route typology](../datasets/open_access_route_typology.md), [open access prevalence measurement](../measures/open_access_prevalence_measurement.md), and [open access citation advantage](../mechanisms/open_access_citation_advantage.md).
- Checks whether stored [open access evidence locations](../representations/open_access_evidence_locations.md) support the assigned route, especially for [bronze open access ambiguity](bronze_open_access_ambiguity.md).
- Supports [responsible metrics](../measures/responsible_metrics.md) by making access-status uncertainty and [DOI denominator coverage bias](doi_denominator_coverage_bias.md) explicit.

## Operationalization

- Draw a validation sample from the same bibliographic universe used in the main OA analysis.
- Manually inspect DOI landing pages, publisher copies, repositories, and other legal open locations.
- Compare resolver OA labels against manual labels to estimate precision and recall.
- Interpret prevalence estimates as conservative or liberal depending on the balance of false positives and false negatives.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) validates the prototype oaDOI system against manual searches of a random subsample.
- The paper reports 77.0% recall and 96.6% precision for identifying open articles, meaning the system was optimized for few false positives rather than maximum recall.
- Piwowar et al. use the high precision to interpret OA prevalence estimates as conservative lower bounds, while acknowledging that imperfect recall misses some OA articles.
- The paper also notes DOI-coverage limitations and manual checks of Crossref metadata, making bibliographic coverage part of validation rather than a separate nuisance.

## Caveats

- Manual validation can still miss legal copies or misread ambiguous licenses.
- Resolver accuracy can drift as sources, repositories, publishers, and web pages change.
- Precision and recall for binary OA status do not guarantee accurate route labels, especially for Bronze and shadowed Green cases.

## Links

- [open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [OA resolver source fusion](../methods/oa_resolver_source_fusion.md)
- [open access status](../datasets/open_access_status.md)
- [open access route typology](../datasets/open_access_route_typology.md)
- [open access prevalence measurement](../measures/open_access_prevalence_measurement.md)
- [open access evidence locations](../representations/open_access_evidence_locations.md)
- [bronze open access ambiguity](bronze_open_access_ambiguity.md)
- [DOI denominator coverage bias](doi_denominator_coverage_bias.md)
- [publisher-hosted route precedence](publisher_hosted_route_precedence.md)
- [open access citation advantage](../mechanisms/open_access_citation_advantage.md)
- [open access citation selection bias](open_access_citation_selection_bias.md)
- [openalex](../datasets/openalex.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [replication reproducibility](replication_reproducibility.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `open_access_detection_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Aliases: OA resolver validation; oaDOI precision recall; Unpaywall validation; OA detection audit
