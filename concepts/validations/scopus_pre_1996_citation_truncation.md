# Scopus pre-1996 citation truncation

## Summary

Scopus pre-1996 citation truncation is the validation caveat that career-long author citation metrics built from Scopus can omit citations received before the database's reliable citation window.

## Canonical Form

- Unit of analysis: author, paper, citation window, Scopus snapshot, career-long indicator, or historical publication cohort.
- Typical representation: citation-window note, pre-window citation omission flag, career-long versus indexed-window distinction, or sensitivity analysis by first publication year.
- Validation target: whether "career-long" author indicators capture the full citation history or only citations observed after a source-specific start date.
- Empirical signature: older papers are included in the publication portfolio, but citations they received before the indexed citation window are absent from the metric.

## Uses in Science of Science

- Qualifies [career-long and single-year author impact](../measures/career_long_single_year_author_impact.md) when the source window starts after an author's early career.
- Adds an author-level source-window case to [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) and [career-spanning citation-source coverage](../methods/career_spanning_citation_source_coverage.md).
- Helps users interpret the [standardized author citation database](../datasets/standardized_author_citation_database.md) as a Scopus-windowed resource rather than a complete historical citation ledger.
- Supports [responsible metrics](../measures/responsible_metrics.md) by requiring citation-window caveats before using author rankings.

## Operationalization

- Record the citation source and exact citation-count window for each author-metric snapshot.
- Identify authors with first publications before the citation-count start date.
- Distinguish papers published before the start date from citations to those papers that were received inside the observed window.
- Avoid labeling source-windowed indicators as complete career histories unless the citation source covers the author's full active period.
- For historically active cohorts, compare with sources or archives that include older cited-reference data when available.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) states that the career-long database uses Scopus citation data from January 1, 1996 through December 31, 2017.
- The paper includes papers published from 1960 through 1995, but only citations to those papers received during 1996-2017 enter the calculations.
- Ioannidis et al. explicitly caution that citations from before 1996 are missing, so whole-career metrics are better understood as career-long approximations for many active scientists rather than complete lifetime citation histories.

## Caveats

- The practical importance of the truncation depends on author age, field citation half-life, and how much influential work predates the indexed window.
- Later Scopus snapshots can add records or correct links, but they do not automatically recover all pre-window citation history.
- A single-year metric avoids part of the historical citation problem but still depends on the existing stock of citable work.

## Links

- [career-long and single-year author impact](../measures/career_long_single_year_author_impact.md)
- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [career-spanning citation-source coverage](../methods/career_spanning_citation_source_coverage.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [Scopus](../datasets/scopus.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `scopus_pre_1996_citation_truncation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: pre-1996 citation omission; Scopus citation-window truncation; indexed-window career metric caveat; historical citation truncation
