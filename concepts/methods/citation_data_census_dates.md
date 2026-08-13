# Citation data census dates

## Summary

Citation data census dates record the exact date or version at which citation counts, reference links, publication lists, and historical records were extracted.

## Canonical Form

- Unit of analysis: citation count, publication record, data extract, snapshot, API response, field assignment, or derived indicator.
- Typical representation: census date column, extraction timestamp, source snapshot version, API updated date, or citation-count-as-of note.
- Method target: prevent analyses from silently comparing records observed at different citation-count or metadata states.
- Empirical signature: counts and even historical records can change when the same source is refreshed later.

## Uses in Science of Science

- Specializes [scholarly snapshot versioning](scholarly_snapshot_versioning.md) for citation indicators and citation networks.
- Supports [citation window selection](citation_window_selection.md), [reference set construction](reference_set_construction.md), [field normalized citation impact](../measures/field_normalized_citation_impact.md), and [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md).
- Pairs with [career-spanning citation-source coverage](career_spanning_citation_source_coverage.md) when author metrics must represent a full career rather than only a source's available window.
- Adds provenance to comparisons across [Web of Science](../datasets/web_of_science.md), [OpenAlex](../datasets/openalex.md), [Dimensions](../datasets/dimensions.md), and stale secondary tables such as [SciSciNet-v2](../datasets/sciscinet_v2.md).
- Uses source-specific refresh metadata such as [WoS update-service cadence](wos_update_service_cadence.md) to separate source updates from derived-table rebuilds.
- Makes regenerated [research-ready table curation](research_ready_table_curation.md) auditable.

## Operationalization

- Store the date and source version for every citation-count extract and derived indicator.
- Distinguish publication date, citation-window end date, data-download date, source-updated date, and derived-table build date.
- Recompute dependent measures when refreshed source data add new papers, revise historical records, merge entities, or update citation links.
- When comparing snapshots, report whether differences reflect science dynamics, database refreshes, or both.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) states that data can be required as current at a point in time, historical over a period, or regularly updated.
- The paper emphasizes that citation counts accumulate and publication lists grow, making the census date for each download significant.
- Birkle et al. also note that refreshed data sets can contain more records and revised historical records, so a later extract is not just the same table with extra recent papers.
- Their discussion of update services shows why cadence must be recorded alongside the citation-count census date.
- Verified full-text evidence from Priem et al. (2022) and Lin et al. (2023) makes the same issue visible in open data sources: OpenAlex has snapshot/API update cadences, while SciSciNet-v2 is tied to a fixed MAG release.
- This split update cadence motivates [MAG-to-OpenAlex migration audit](../validations/mag_to_openalex_migration_audit.md) when replacing MAG-derived citation counts or citation networks with current OpenAlex snapshots.
- Verified full-text evidence from Redner (1998) reports citation counts for an ISI 1981 cohort and a Physical Review D panel as observed through June 1997, showing why paper-level citation distributions need explicit census dates.

## Caveats

- Citation windows and census dates are different design choices; both must be recorded.
- Freezing a census date improves reproducibility but can make recent-paper coverage stale.
- Historical revisions can change past-year counts even when the focal publication year is unchanged.

## Links

- [scholarly snapshot versioning](scholarly_snapshot_versioning.md)
- [bibliometric data access modes](bibliometric_data_access_modes.md)
- [WoS update-service cadence](wos_update_service_cadence.md)
- [research-ready table curation](research_ready_table_curation.md)
- [citation window selection](citation_window_selection.md)
- [reference set construction](reference_set_construction.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [career-spanning citation-source coverage](career_spanning_citation_source_coverage.md)
- [Web of Science](../datasets/web_of_science.md)
- [ISI 1981 citation-distribution cohort](../datasets/isi_1981_citation_distribution_cohort.md)
- [Physical Review D citation-distribution panel](../datasets/physical_review_d_citation_distribution_panel.md)
- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)
- [SciSciNet-v2](../datasets/sciscinet_v2.md)
- [MAG-to-OpenAlex migration audit](../validations/mag_to_openalex_migration_audit.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]
- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]
- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]
- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; WoS: unknown]

## Metadata

- Concept ID: `citation_data_census_dates`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: citation count as-of date; data census date; extraction timestamp; citation snapshot date
