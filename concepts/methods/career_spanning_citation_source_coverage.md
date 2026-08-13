# Career-spanning citation-source coverage

## Summary

Career-spanning citation-source coverage is the method requirement that author-level citation indicators use a database whose publication and citation coverage spans the focal researcher's full relevant career period.

## Canonical Form

- Unit of analysis: author metric, career portfolio, citation database, publication list, or evaluation extract.
- Typical representation: source-coverage window, first-publication coverage check, missing-year audit, and citation-count census date.
- Method target: prevent h-index, m-quotient, and other author metrics from being biased by database start dates or incomplete historical coverage.
- Empirical signature: early publications, older citation links, books, proceedings, or field-specific outlets are missing from the source used to compute the author metric.

## Uses in Science of Science

- Adds a source-coverage guardrail to [h-index](../measures/h_index.md), [m-quotient](../measures/m_quotient.md), and author citation composites.
- Specializes [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md) for career-level indicators.
- Works with [citation data census dates](citation_data_census_dates.md) and [bibliometric data access modes](bibliometric_data_access_modes.md) to make author-metric extracts reproducible.
- Helps compare current sources such as [OpenAlex](../datasets/openalex.md) and [Dimensions](../datasets/dimensions.md) with older or frozen derived datasets such as [SciSciNet-v2](../datasets/sciscinet_v2.md).

## Operationalization

- Identify the author's first relevant publication year and the intended career window.
- Verify that the selected citation source covers publication records and citation links over that full window.
- Record the source version, extraction route, and citation census date.
- Audit missing early records, non-journal outputs, name changes, author-disambiguation splits, and source-specific document-type exclusions.
- When coverage is incomplete, report the affected years and avoid interpreting the metric as a full-career indicator.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) notes that the database used for h-index calculation must be complete enough to cover the full period spanned by the individual's publications.
- The same paper computes m-quotients using a defined scientific-age window, showing why source start dates and early-career coverage affect seniority-adjusted metrics.
- Verified full-text evidence from Birkle et al. (2020) broadens the guardrail by showing that citation counts, publication lists, and historical records depend on data source scope and extraction date.
- For this wiki, Dimensions and current OpenAlex metadata should be preferred for recent coverage when available, while SciSciNet-v2 is useful mainly as a historical or crosswalk layer.

## Caveats

- Complete database coverage does not solve author disambiguation, contribution attribution, or field-normalization problems.
- A source can cover the time span but still underrepresent books, conferences, non-English venues, or regional journals.
- Refreshing a source can revise historical records, so coverage checks need both a time span and a census date.

## Links

- [h-index](../measures/h_index.md)
- [m-quotient](../measures/m_quotient.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [citation data census dates](citation_data_census_dates.md)
- [bibliometric data access modes](bibliometric_data_access_modes.md)
- [scholarly snapshot versioning](scholarly_snapshot_versioning.md)
- [Web of Science](../datasets/web_of_science.md)
- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)
- [SciSciNet-v2](../datasets/sciscinet_v2.md)
- [author name disambiguation](author_name_disambiguation.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]
- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]
- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `career_spanning_citation_source_coverage`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: full-career citation database coverage; career-window source coverage; author-metric source coverage; h-index database coverage requirement
