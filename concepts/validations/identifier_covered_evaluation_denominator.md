# Identifier-covered evaluation denominator

## Summary

Identifier-covered evaluation denominator is the validation motif that disambiguation benchmarks based on persistent identifiers evaluate only the subset of authors and publications covered by those identifiers.

## Canonical Form

- Unit of analysis: author mention, identifier-linked profile, benchmark record, publication, author cluster, or evaluated denominator.
- Typical representation: ResearcherID coverage, ORCID coverage, identifier-linked author sample, recent-active author filter, or denominator restriction.
- Validation target: make benchmark coverage explicit before generalizing disambiguation performance.
- Empirical signature: an algorithm is evaluated on identifier-covered authors, while many real application records lack those identifiers.

## Uses in Science of Science

- Adds denominator scope to [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md).
- Connects author-disambiguation validation to [OpenAlex author ORCID coverage audit](openalex_author_orcid_coverage_audit.md) and [unique identifier inclusion gate](unique_identifier_inclusion_gate.md).
- Helps interpret [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md) when the gold standard is not a random sample of all author mentions.
- Supports robust use of [author name disambiguation](../methods/author_name_disambiguation.md) in career and mobility studies.

## Operationalization

- Report the identifier source, snapshot, inclusion criteria, and matching rule for benchmark construction.
- Measure coverage by year, field, country, journal, seniority, and publication count if metadata allow.
- Compare benchmark name-block sizes and metadata completeness with the full target corpus.
- Avoid applying benchmark scores to uncovered populations without coverage caveats.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) uses ResearcherID-linked Web of Science author mentions to compare disambiguation approaches.
- The paper notes low identifier coverage and limits transfer from the evaluated sample to larger application settings.
- It also focuses on authors with recent activity, which can further shape the evaluated denominator.

## Caveats

- Identifier-covered authors may be more active, internationally visible, institutionally supported, or metadata-rich than uncovered authors.
- Persistent IDs can contain profile errors, missing works, and unclaimed publications.
- Coverage improves over time, so denominator caveats are snapshot-specific.

## Links

- [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md)
- [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [unique identifier inclusion gate](unique_identifier_inclusion_gate.md)
- [OpenAlex author ORCID coverage audit](openalex_author_orcid_coverage_audit.md)
- [common-name block bias](common_name_block_bias.md)
- [metric-dependent disambiguation ranking](metric_dependent_disambiguation_ranking.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `identifier_covered_evaluation_denominator`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: identifier benchmark denominator; ResearcherID coverage denominator; ID-covered disambiguation sample; persistent-ID evaluation scope
