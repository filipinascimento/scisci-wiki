# Minimum-paper author universe

## Summary

Minimum-paper author universe defines the denominator for author-level bibliometric comparisons by including only authors with at least a specified number of indexed publications of selected document types.

## Canonical Form

- Unit of analysis: author profile, publication-count threshold, document type, field denominator, or comparison universe.
- Typical representation: minimum-paper rule, eligible-author count, document-type filter, field/subfield denominator, or exclusion caveat.
- Mechanism or measurement target: making author comparisons more stable by excluding sparse profiles while documenting who leaves the denominator.
- Empirical signature: field percentiles, top-author shares, or author rankings are computed only among authors passing the threshold.

## Uses in Science of Science

- Supplies the denominator for [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md).
- Provides a construction rule for the [standardized author citation database](../datasets/standardized_author_citation_database.md).
- Connects to [early-career author metric sparsity](../validations/early_career_author_metric_sparsity.md), because low-output and early-career authors are most affected.
- Complements [low-output author exclusion conservative bias](../validations/low_output_author_exclusion_conservative_bias.md) for inequality and elite-tail analyses.

## Operationalization

- Choose a minimum indexed-publication threshold before computing author-level percentiles or rankings.
- Specify eligible document types, such as articles, reviews, and conference papers.
- Count eligible authors overall and within each field or subfield.
- Report excluded-author implications for early-career, low-output, undercovered, or non-journal-centered fields.
- Recompute sensitivity to alternate thresholds when the denominator materially affects conclusions.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) reports field and subfield percentile standards for all Scopus authors with at least five papers.
- The paper states that 6,880,389 scientists meet this at-least-five-paper eligibility rule.
- Its Table 1 includes authors who have published at least five items classified by Scopus as articles, reviews, or conference papers.
- The same design lets a top author's rank be interpreted against a field-specific denominator, such as the immunology example with 120,051 eligible authors.

## Caveats

- Minimum-paper thresholds improve stability but exclude early-career, intermittent, and low-output researchers.
- Document-type filters can disadvantage fields where books, datasets, software, or other outputs matter.
- Thresholds interact with database coverage and author disambiguation.
- A threshold chosen for percentile stability is not automatically appropriate for evaluation.

## Links

- [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md)
- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [early-career author metric sparsity](../validations/early_career_author_metric_sparsity.md)
- [low-output author exclusion conservative bias](../validations/low_output_author_exclusion_conservative_bias.md)
- [author citation composite indicator](../measures/author_citation_composite_indicator.md)
- [Scopus](../datasets/scopus.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `minimum_paper_author_universe`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: minimum publication author denominator; five-paper author universe; eligible author threshold; author percentile denominator filter
