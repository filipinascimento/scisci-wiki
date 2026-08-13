# Author metric update rank persistence

## Summary

Author metric update rank persistence checks whether author-level citation rankings remain broadly stable when the citation database is updated with a new timestamp.

## Canonical Form

- Unit of analysis: author profile, ranking snapshot, metric update, database timestamp, or percentile rank.
- Typical representation: rank-over-time comparison, top-list retention rate, percentile-change table, or update discrepancy audit.
- Validation target: whether a public author-metric release can be used for a reasonable period before a new snapshot materially changes rankings.
- Empirical signature: most authors retain similar percentile positions across adjacent updates, while larger shifts are traced to data corrections or profile changes.

## Uses in Science of Science

- Extends [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md) to author-level metric rankings.
- Provides temporal validation for the [standardized author citation database](../datasets/standardized_author_citation_database.md).
- Complements [composite indicator replication stability](composite_indicator_replication_stability.md) by checking update-to-update persistence rather than same-snapshot recomputation.
- Helps [responsible metrics](../measures/responsible_metrics.md) users distinguish slow rank drift from sudden source-record corrections.

## Operationalization

- Recompute the same author indicators from a later timestamped database snapshot.
- Match authors across releases using stable author-profile identifiers and manual checks for changed records.
- Compare top-list retention, rank changes, percentile changes, and field-specific movement.
- Audit large rank shifts for author-profile splits, merges, paper additions, deleted records, or citation accrual.
- State the update interval and snapshot date in any downstream use.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) repeats the career-long author-metric analysis with an annual update to the end of 2018.
- The updated analysis uses a timestamped Scopus dataset released on April 22, 2019.
- In a random sample of 100 authors from the top 100,000, 93 remain in the top 100,000 in both assessments.
- The paper reports that the two modestly larger percentile changes in the sample were due to corrections in which papers were included in the author record rather than ordinary citation accrual.
- Ioannidis et al. conclude that for most scientists, percentile ranking is likely to take many years to change substantially.

## Caveats

- Rank persistence can be weaker near threshold cutoffs, in fast-growing fields, or for early-career authors.
- Stability does not imply construct validity or fairness.
- Corrections to author profiles can matter more than citation accrual for individual cases.
- Snapshot persistence should be reassessed when the database changes disambiguation algorithms, source coverage, or field classification.

## Links

- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [composite indicator replication stability](composite_indicator_replication_stability.md)
- [Scopus author profile disambiguation audit](scopus_author_profile_disambiguation_audit.md)
- [author citation composite indicator](../measures/author_citation_composite_indicator.md)
- [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `author_metric_update_rank_persistence`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: author rank update stability; citation ranking persistence; annual author-metric update check; metric snapshot rank drift
