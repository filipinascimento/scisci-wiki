# Field-subfield author percentile ranks

## Summary

Field-subfield author percentile ranks compare an author's citation indicators with other authors assigned to the same field or subfield.

## Canonical Form

- Unit of analysis: author, field, subfield, citation metric, or ranked reference set.
- Typical representation: rank, percentile, top-percentile indicator, field label, subfield label, and denominator of eligible authors.
- Measurement target: field-relative author citation standing rather than cross-field raw citation totals.
- Empirical signature: the same raw citation count maps to different percentiles across fields and subfields.

## Uses in Science of Science

- Extends [field normalized citation impact](field_normalized_citation_impact.md) from paper-level citation normalization to author-level comparison.
- Uses [field classifications](field_classifications.md) as the reference-set boundary for author rankings.
- Adds author-level context to [citation percentile indicators](citation_percentile_indicators.md).
- Supports [responsible metrics](responsible_metrics.md) by making like-with-like comparison more explicit.
- Provides a percentile layer for the [standardized author citation database](../datasets/standardized_author_citation_database.md).
- Depends on a clearly stated [minimum-paper author universe](../methods/minimum_paper_author_universe.md) before ranks are interpreted.

## Operationalization

- Assign each author to a primary field and one or more subfields using a documented classification system.
- Define the eligible author universe and its denominator, such as all authors with at least a minimum number of indexed papers.
- Rank authors within fields and subfields using a chosen component metric or composite indicator.
- Convert ranks to percentiles and publish the denominator so users can interpret scale.
- Keep field/subfield assignment shares visible when authors span multiple specialties.
- Treat [early-career author metric sparsity](../validations/early_career_author_metric_sparsity.md) and very small sub-subfield citation-density differences as limits on percentile interpretation.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) assigns scientists to 22 fields and 176 subfields using the Science-Metrix journal classification.
- The paper reports the total number of Scopus authors with at least five papers across fields and subfields, with 6,880,389 eligible scientists in the all-field author universe.
- Ioannidis et al. provide an example where rank 256 among 120,051 immunology authors corresponds to approximately the top 0.21% in that subfield.
- The paper reports percentile thresholds for total citations and the composite indicator, allowing users to compare authors within field-specific reference sets.
- The authors caution that field/subfield labels should be used to limit comparisons to similar scientific areas rather than to justify raw cross-field ranking.

## Caveats

- Author-field assignment can be unstable for interdisciplinary or field-switching scientists.
- Journal-based classification may misclassify paper-level or author-level specialties.
- Percentiles depend on the eligible author universe, minimum-paper rule, database coverage, and snapshot date.
- Very small subfields can make percentile ranks noisy.

## Links

- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [field classifications](field_classifications.md)
- [field normalized citation impact](field_normalized_citation_impact.md)
- [citation percentile indicators](citation_percentile_indicators.md)
- [author citation composite indicator](author_citation_composite_indicator.md)
- [career-long and single-year author impact](career_long_single_year_author_impact.md)
- [citation impact indicators](citation_impact_indicators.md)
- [responsible metrics](responsible_metrics.md)
- [early-career author metric sparsity](../validations/early_career_author_metric_sparsity.md)
- [minimum-paper author universe](../methods/minimum_paper_author_universe.md)
- [author-metric single-affiliation caveat](../validations/author_metric_single_affiliation_caveat.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `field_subfield_author_percentile_ranks`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: author field percentiles; subfield author ranks; field-relative author ranks; author citation percentile ranks
