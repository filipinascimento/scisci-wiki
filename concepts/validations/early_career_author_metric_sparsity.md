# Early-career author metric sparsity

## Summary

Early-career author metric sparsity is the validation caveat that author-level citation indicators are weak for researchers with short publication histories and little time for citations to accrue.

## Canonical Form

- Unit of analysis: early-career researcher, author record, citation window, publication history, field percentile, or evaluation portfolio.
- Typical representation: minimum-paper rule, first-publication year, citation-age caveat, early-career flag, or portfolio-review override.
- Validation target: whether author citation metrics contain enough accumulated evidence for comparison.
- Empirical signature: an author has few indexed papers, recent first publication year, short citation exposure, or unstable percentile rank.

## Uses in Science of Science

- Adds a career-stage guardrail to [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md) and [career-long and single-year author impact](../measures/career_long_single_year_author_impact.md).
- Supports [responsible metrics](../measures/responsible_metrics.md) by discouraging author-citation rankings for early-career decisions without portfolio review.
- Connects author metrics to [citation window selection](../methods/citation_window_selection.md), because recent papers have had less time to gather citations.
- Complements [h-index seniority benchmarks](../measures/h_index_seniority_benchmarks.md) and [m-quotient](../measures/m_quotient.md), which also encode career-stage sensitivity.

## Operationalization

- Report first publication year, last publication year, number of indexed papers, and citation-window end date.
- Apply minimum-paper and minimum-exposure rules before computing field percentiles or rankings.
- Use single-year indicators only as recent attention signals, not as complete evidence of early-career quality.
- Replace or supplement sparse citation indicators with selected-work reading, contribution statements, mentoring evidence, openness, and other portfolio evidence.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) states that very early-career scientists may have limited use for citation metrics because they have not published much and their papers have not had time to accrue citations.
- The paper includes first and last indexed publication years to help interpret career stage.
- Ioannidis et al. also use a universe of authors with at least five Scopus-indexed papers for field and subfield percentile reference standards, showing that eligibility rules matter for author-level comparisons.

## Caveats

- Some early-career researchers can have legitimate high early citation attention, especially through team science or methods papers.
- Minimum-paper thresholds can exclude nonstandard careers, slow-publishing fields, and interdisciplinary researchers.
- Sparse citation indicators should not be converted into negative judgments; absence of citations can reflect timing rather than low value.

## Links

- [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md)
- [career-long and single-year author impact](../measures/career_long_single_year_author_impact.md)
- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [citation window selection](../methods/citation_window_selection.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [m-quotient](../measures/m_quotient.md)
- [h-index seniority benchmarks](../measures/h_index_seniority_benchmarks.md)
- [portfolio-based researcher assessment](../methods/portfolio_based_researcher_assessment.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `early_career_author_metric_sparsity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: early-career citation sparsity; sparse early-career author metrics; short-publication-history metric caveat; early-career citation exposure caveat
