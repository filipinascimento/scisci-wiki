# Top-Scientist Status Stability Check

## Summary

Top-scientist status stability check verifies whether a percentile-defined elite author label remains stable enough to support longitudinal career analyses.

## Canonical Form

- Unit of analysis: author, discipline-year, citation percentile, career year, or elite-status label.
- Typical representation: transition or persistence rate after first attaining top status.
- Validation target: whether top-scientist status is a transient annual fluctuation or a durable career state.
- Empirical signature: once authors enter the top-status category, most remain there across later years.

## Uses in Science of Science

- Validates [top-cited scientist status](../measures/top_cited_scientist_status.md).
- Connects author-level percentile labels to [citation percentile indicators](../measures/citation_percentile_indicators.md).
- Adds temporal persistence context to [author metric update-rank persistence](author_metric_update_rank_persistence.md).

## Operationalization

- Define top status within field and year, such as the top 5% by citations.
- Track authors after first classification as top.
- Report the share who remain top through subsequent career years.
- Test whether stability differs by field, cohort, and citation window.

## Evidence and Validations

- Verified full-text evidence from Li et al. (2019) defines a top scientist as an author in the top 5% of cited authors in a discipline and year.
- The paper reports that in more than 95% of cases in the dataset, once a researcher becomes a top scientist, they remain one until the end of the career.
- This stability supports using top-scientist status as a longitudinal career marker.

## Caveats

- Stability partly follows from cumulative citation measures.
- A stable label can still encode early advantage, field size, and citation database coverage.
- Annual top-percentile labels may be less stable for short citation windows or smaller fields.

## Links

- [top-cited scientist status](../measures/top_cited_scientist_status.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [author metric update-rank persistence](author_metric_update_rank_persistence.md)
- [twentieth-career-year success endpoint](../measures/twentieth_career_year_success_endpoint.md)
- [early top-coauthor dose gradient](../measures/early_top_coauthor_dose_gradient.md)

## References

- Li, W., Aste, T., Caccioli, F., & Livan, G. (2019). Early coauthorship with top scientists predicts success in academic careers. *Nature Communications*, 10, 5170. https://doi.org/10.1038/s41467-019-13130-4 [OpenAlex: W2949684159; Dimensions: pub.1122584827; SciSciNet: W2949684159; WoS: unknown]

## Metadata

- Concept ID: `top_scientist_status_stability_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li et al. (2019) (2019)
- Latest seen paper: Li et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-13130-4`
- OpenAlex ID: `W2949684159`
- Dimensions ID: `pub.1122584827`
- SciSciNet ID: `W2949684159`
- Aliases: elite author status persistence; top-cited status stability; top-scientist label persistence; citation-elite stability check
