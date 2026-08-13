# Bibliographic database staleness caveat

## Summary

The bibliographic database staleness caveat is the warning that database-comparison and coverage findings can become outdated because citation indexes continuously change their source coverage, metadata, and matching systems.

## Canonical Form

- Unit of analysis: database snapshot, citation source, coverage study, indicator calculation, or review claim.
- Typical representation: snapshot date, database version, coverage-change note, or stale-comparison warning.
- Validation target: keep conclusions about [Web of Science](../datasets/web_of_science.md), [Scopus](../datasets/scopus.md), [Google Scholar](../datasets/google_scholar.md), [OpenAlex](../datasets/openalex.md), [Dimensions](../datasets/dimensions.md), and related sources tied to their observation dates.
- Empirical signature: older database-comparison results may no longer match current source coverage or citation counts.

## Uses in Science of Science

- Strengthens [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) by making time a first-class part of source provenance.
- Links to [citation data census dates](../methods/citation_data_census_dates.md) and [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md).
- Helps avoid overgeneralizing old [WoS-Scopus coverage overlap](wos_scopus_coverage_overlap.md) and [Google Scholar transparency limitations](google_scholar_transparency_limitations.md) studies.
- Applies to recent open sources as well: OpenAlex and Dimensions are fresher options for many current analyses, but their snapshots still need dates and versioning.

## Operationalization

- Record the database, extraction date, snapshot date, source list version, and API or web-interface route.
- When citing prior coverage studies, record the study period and database vintage.
- Recheck important coverage claims when the current analysis depends on them.
- Report whether a database is being used as a historical source, a current source, or a validation comparison.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) states that Web of Science, Scopus, and Google Scholar are all in continuous development.
- Waltman cautions that coverage results reported in the literature, especially older work, may no longer be up to date.
- The same review illustrates why this matters: Google Scholar coverage improved over time in some studies, while Web of Science and Scopus coverage, source indexes, document types, and citation matching were active subjects of evaluation.

## Caveats

- Staleness is not the same as invalidity; older snapshots are valid for historical questions if clearly dated.
- Broader or newer coverage does not automatically improve an indicator if added records change denominators or metadata quality.
- Database updates can change both coverage and entity-resolution behavior, so versioning should include identifiers and matching rules where possible.

## Links

- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [WoS-Scopus coverage overlap](wos_scopus_coverage_overlap.md)
- [Google Scholar transparency limitations](google_scholar_transparency_limitations.md)
- [Web of Science](../datasets/web_of_science.md)
- [Scopus](../datasets/scopus.md)
- [Google Scholar](../datasets/google_scholar.md)
- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `bibliographic_database_staleness_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: database coverage staleness; stale citation database comparison; citation source vintage caveat; bibliographic snapshot staleness
