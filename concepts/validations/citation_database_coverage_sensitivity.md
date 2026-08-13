# Citation database coverage sensitivity

## Summary

Citation database coverage sensitivity is the validation problem that citation indicators can change when calculated from Web of Science, Scopus, Google Scholar, OpenAlex, Dimensions, or other databases.

## Canonical Form

- Unit of analysis: publication set, author, journal, institution, field, citation database, or indicator calculation.
- Typical representation: cross-database indicator comparison, coverage overlap, missing-citation analysis, rank correlation, or database-choice caveat.
- Validation target: determine whether a citation-based result is robust to the source database and its coverage, metadata, and citation-linking rules.
- Empirical signature: indicator values or rankings differ across databases, especially for small units, undercovered fields, non-English literature, books, conferences, and regional journals.

## Uses in Science of Science

- Qualifies [citation impact indicators](../measures/citation_impact_indicators.md), [field normalized citation impact](../measures/field_normalized_citation_impact.md), [h-index](../measures/h_index.md), and author rankings.
- Links data-source choice to [responsible metrics](../measures/responsible_metrics.md).
- Provides a validation bridge between [Web of Science](../datasets/web_of_science.md), [Scopus](../datasets/scopus.md), [Google Scholar](../datasets/google_scholar.md), [OpenAlex](../datasets/openalex.md), [Dimensions](../datasets/dimensions.md), and other scholarly indexes.
- Supports [reference set construction](../methods/reference_set_construction.md) by making source coverage part of the denominator definition.
- Requires source-layer and access-route provenance such as [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md), [bibliometric data access modes](../methods/bibliometric_data_access_modes.md), and [citation data census dates](../methods/citation_data_census_dates.md).
- Includes field-purpose audits such as [retrieval-to-quantitative reuse mismatch](retrieval_to_quantitative_reuse_mismatch.md) when source-native metadata were not designed for counting or modeling.
- Specializes into [career-spanning citation-source coverage](../methods/career_spanning_citation_source_coverage.md) for author-level h-index and m-quotient calculations.
- Includes author-metric source-window cases such as [Scopus pre-1996 citation truncation](scopus_pre_1996_citation_truncation.md).
- Specializes to mobility designs through [journal-article mobility coverage bias](journal_article_mobility_coverage_bias.md), where indexed publication-affiliation coverage affects observed movement.

## Operationalization

- Compute the same indicator from multiple citation databases when licensing and coverage permit.
- Compare publication coverage, reference coverage, citation counts, document types, fields, languages, and source lists.
- Report rank correlations for large units and direct discrepancies for small units.
- Treat database choice as part of the methods, not as an implementation detail.
- For recent work, prefer current sources such as OpenAlex or Dimensions when appropriate, and document when older or stale datasets are used.
- Include [locally relevant research metrics](locally_relevant_research_metrics.md) when source coverage affects non-English, regional, book, policy, or community-engaged outputs.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) frames database choice as foundational for citation indicators and reviews Web of Science, Scopus, and Google Scholar as the main multidisciplinary citation sources.
- Waltman reports that Scopus often has broader coverage than Web of Science, while both underrepresent social sciences, arts, humanities, and non-English or regional literature; the specific comparison is split out as [WoS-Scopus coverage overlap](wos_scopus_coverage_overlap.md).
- Waltman's field-specific caveats are split into [SSH bibliometric coverage gap](ssh_bibliometric_coverage_gap.md), [conference-proceedings coverage gap](conference_proceedings_coverage_gap.md), and [conference/journal double counting](conference_journal_double_counting.md).
- The review reports mixed evidence on indicator sensitivity: country-level results from Web of Science and Scopus can be highly correlated, while smaller units such as departments, journals, conference proceedings, and institutions can differ substantially.
- Waltman also notes that [Google Scholar](../datasets/google_scholar.md) has broader and less transparent web-scale coverage, limited metadata, and no direct full-database access, making large-scale citation analysis harder to audit through [Google Scholar transparency limitations](google_scholar_transparency_limitations.md).
- Waltman explicitly warns that older database-comparison findings can become stale because citation databases continue to develop; this is split out as [bibliographic database staleness caveat](bibliographic_database_staleness_caveat.md).
- Verified full-text evidence from Birkle et al. (2020) adds a WoS-specific sensitivity case: Core Collection, broader platform indexes, subject categories, author-affiliation linking, product integrations, times-cited source provenance, and custom/API extracts differ in coverage, citation sources, and quantitative-use constraints.

## Caveats

- Broader coverage is not automatically better; it can introduce lower-impact local journals, duplicates, weak metadata, or document types not suited to the evaluation question.
- Cross-database differences change over time as source coverage and matching algorithms evolve.
- Database-comparison results from older studies may not describe current snapshots.
- Robustness to database choice at country or field level does not prove robustness for individual authors, journals, or small institutions.

## Links

- [citation impact indicators](../measures/citation_impact_indicators.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [h-index](../measures/h_index.md)
- [author citation composite indicator](../measures/author_citation_composite_indicator.md)
- [reference set construction](../methods/reference_set_construction.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [locally relevant research metrics](locally_relevant_research_metrics.md)
- [evaluated-party data verification](evaluated_party_data_verification.md)
- [Web of Science](../datasets/web_of_science.md)
- [Scopus](../datasets/scopus.md)
- [Google Scholar](../datasets/google_scholar.md)
- [openalex](../datasets/openalex.md)
- [dimensions](../datasets/dimensions.md)
- [scholarly data lakes](../datasets/scholarly_data_lakes.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md)
- [selective core-journal coverage](../methods/selective_core_journal_coverage.md)
- [full cited-reference indexing](../datasets/full_cited_reference_indexing.md)
- [subfield reference coverage filter](subfield_reference_coverage_filter.md)
- [retrieval-to-quantitative reuse mismatch](retrieval_to_quantitative_reuse_mismatch.md)
- [WoS subject category fractionalization](wos_subject_category_fractionalization.md)
- [bibliometric data access modes](../methods/bibliometric_data_access_modes.md)
- [citation database web-interface access](../methods/citation_database_web_interface_access.md)
- [full-database bibliometric access](../methods/full_database_bibliometric_access.md)
- [WoS-Scopus coverage overlap](wos_scopus_coverage_overlap.md)
- [Google Scholar transparency limitations](google_scholar_transparency_limitations.md)
- [bibliographic database staleness caveat](bibliographic_database_staleness_caveat.md)
- [SSH bibliometric coverage gap](ssh_bibliometric_coverage_gap.md)
- [conference-proceedings coverage gap](conference_proceedings_coverage_gap.md)
- [conference/journal double counting](conference_journal_double_counting.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [career-spanning citation-source coverage](../methods/career_spanning_citation_source_coverage.md)
- [Scopus pre-1996 citation truncation](scopus_pre_1996_citation_truncation.md)
- [journal-article mobility coverage bias](journal_article_mobility_coverage_bias.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]
- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `citation_database_coverage_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: citation database sensitivity; citation coverage sensitivity; WoS Scopus Google Scholar comparison; database-choice robustness
