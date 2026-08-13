# Altmetric identifier matching loss

## Summary

Altmetric identifier matching loss is the coverage loss introduced when provider records cannot be linked to a bibliographic database because identifiers are missing, malformed, duplicated, or outside the database scope.

## Canonical Form

- Unit of analysis: provider record, DOI, PubMed ID, arXiv ID, bibliographic work, matched record, or unmatched record.
- Typical representation: match rate, unmatched share, duplicate DOI rule, identifier-cleaning log, and denominator after matching.
- Validation target: determine whether an altmetric-bibliographic join preserves the intended scholarly population.
- Empirical signature: a large provider export can shrink substantially after DOI cleaning and matching to Web of Science, PubMed, OpenAlex, Dimensions, or another index.

## Uses in Science of Science

- Qualifies [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md), because nonzero attention records can be lost before analysis if identifiers do not match.
- Connects [altmetrics](../datasets/altmetrics.md) to [scholarly identifier spine](../representations/scholarly_identifier_spine.md), [DOI denominator coverage bias](doi_denominator_coverage_bias.md), and bibliographic database coverage.
- Supports reproducible [altmetric-citation association](altmetric_citation_association.md) and [altmetric highly cited filtering](altmetric_highly_cited_filtering.md) by making the post-join denominator explicit.
- Provides an audit trail for source-specific analyses such as [Twitter mention counts](../measures/twitter_mention_counts.md) and [blog and news mention counts](../measures/blog_and_news_mention_counts.md).

## Operationalization

- Start from the provider export and count records, unique identifiers, duplicate identifiers, malformed identifiers, and missing identifiers.
- Normalize DOI strings and apply a documented duplicate rule before joining.
- Match to the target bibliographic index and report both provider-side and index-side denominators.
- Keep unmatched provider records and unmatched bibliographic records separately.
- Report whether unmatched records reflect non-journal outputs, non-English/local journals, missing DOIs, index coverage limits, or provider errors.

## Evidence and Validations

- Verified full-text evidence from Costas et al. (2015) downloads 1,589,440 Altmetric.com records with a DOI or other identifier and finds 1,380,143 unique DOIs after cleaning duplicate and wrong DOI strings.
- The paper matches these DOIs to a CWTS in-house Web of Science database and retains 718,315 matched DOIs, equal to 52% of the original DOI set.
- Costas et al. report that only 7% of all DOI-bearing Web of Science papers without time restriction had an Altmetric.com score.
- The paper notes that unmatched provider records may include scholarly articles outside Web of Science, such as local journals and non-English-language publications.
- It also states that about 30% of 2011 Web of Science publications lacked DOI codes and therefore could not be matched to altmetric scores in their DOI-based workflow.

## Caveats

- A low match rate does not necessarily mean provider error; it can reflect the bibliographic index's scope.
- DOI-based matching excludes non-DOI outputs and can underrepresent fields, regions, and older literature.
- Summing scores across duplicate DOI records can be defensible but should be recorded because it changes count distributions.
- Matching losses can bias field, language, source, and year comparisons if unmatched records are not random.

## Links

- [altmetrics](../datasets/altmetrics.md)
- [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [altmetric zero-score semantics](altmetric_zero_score_semantics.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [DOI denominator coverage bias](doi_denominator_coverage_bias.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [web of science](../datasets/web_of_science.md)
- [openalex](../datasets/openalex.md)
- [dimensions](../datasets/dimensions.md)

## References

- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `altmetric_identifier_matching_loss`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Costas et al. (2015) (2015)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Aliases: altmetric DOI match loss; online-attention join loss; provider-bibliographic matching loss; altmetric linkage coverage
