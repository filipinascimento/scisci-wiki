# DOI denominator coverage bias

## Summary

DOI denominator coverage bias is the validity problem that DOI-assigned records do not cover all scholarly outputs uniformly across fields, regions, time periods, publishers, and document types.

## Canonical Form

- Unit of analysis: DOI-bearing record, non-DOI record, bibliographic denominator, field, region, publication year, or document type.
- Typical representation: DOI coverage rate, missing-DOI share, field/region/year coverage profile, and denominator caveat.
- Validation target: whether an estimate from DOI-bearing records can be generalized to the intended literature.
- Empirical signature: humanities, older literature, developing-world publications, books, and some local journals are underrepresented when a workflow starts from DOIs.

## Uses in Science of Science

- Qualifies DOI-first [open access resolver workflows](../methods/open_access_resolver_workflows.md), [open access prevalence measurement](../measures/open_access_prevalence_measurement.md), and [policy document mentions](../measures/policy_document_mentions.md).
- Explains why [Crossref DOI sampling frame](../datasets/crossref_doi_sampling_frame.md), Web of Science, Scopus, [OpenAlex](../datasets/openalex.md), and [Dimensions](../datasets/dimensions.md) can give different denominators.
- Has an OpenAlex-specific implementation in [OpenAlex work DOI coverage audit](openalex_work_doi_coverage_audit.md).
- Helps separate access detection error from bibliographic coverage error in [open access detection validation](open_access_detection_validation.md).
- Supports [responsible metrics](../measures/responsible_metrics.md) by requiring explicit population claims for DOI-based indicators.

## Operationalization

- State whether the target population is all scholarly outputs or DOI-assigned outputs.
- Compare DOI-bearing records with a broader index or domain-specific bibliography when available.
- Stratify DOI coverage by field, region, year, publisher, language, and document type.
- Keep non-DOI exclusions visible in index files, denominator tables, and figure captions.
- When recovering missing identifiers, apply [DOI recovery consistency checks](../methods/doi_recovery_consistency_checks.md) before expanding the joinable denominator.
- Treat DOI coverage as a source of selection bias rather than as random missingness.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) notes that DOI assignment is less frequent in some disciplines such as the humanities, in some geographic regions, especially the developing world, and among older articles.
- The paper uses Crossref DOI records as an open and expansive denominator but explicitly limits the broad prevalence claim to DOI-assigned journal articles.
- Piwowar et al. also note that Scopus and Web of Science underrepresent important literature segments, so switching indexes does not remove denominator bias.
- Their Web of Science sample is restricted to DOI-bearing articles and reviews from 2009 to 2015 and is not used to estimate total-literature OA prevalence because of sampling-frame differences.
- The paper excludes Humanities and Arts from some field-normalized citation reporting because they are underrepresented both in Web of Science and in DOI coverage.
- Verified full-text evidence from Haunschild and Bornmann (2017) adds a policy-mention case: their Web of Science and Altmetric merge was only possible via DOI, restricting the analysis to DOI-bearing papers.

## Caveats

- DOI coverage can improve over time, so coverage profiles are snapshot-dependent.
- DOI recovery from Crossref or OpenAlex can add records but may introduce false matches without title and metadata checks.
- [DOI recovery consistency checks](../methods/doi_recovery_consistency_checks.md) reduce this risk by making agreement rules and rejected candidates explicit.
- Subscription indexes and open indexes have different coverage biases; no single denominator should be treated as complete.
- DOI coverage bias can interact with language, field classification, document type, and citation indexing.

## Links

- [Crossref DOI sampling frame](../datasets/crossref_doi_sampling_frame.md)
- [DOI recovery consistency checks](../methods/doi_recovery_consistency_checks.md)
- [open access prevalence measurement](../measures/open_access_prevalence_measurement.md)
- [open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [open access detection validation](open_access_detection_validation.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [OpenAlex work DOI coverage audit](openalex_work_doi_coverage_audit.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [openalex](../datasets/openalex.md)
- [dimensions](../datasets/dimensions.md)
- [web of science](../datasets/web_of_science.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [policy mention DOI denominator loss](policy_mention_doi_denominator_loss.md)
- [policy document mentions](../measures/policy_document_mentions.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]
- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `doi_denominator_coverage_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Aliases: DOI coverage bias; DOI denominator bias; DOI-assigned literature bias; missing DOI selection bias
