# Oldest-cohort PageRank floor

## Summary

Citation PageRank age advantage is not monotonic for the very oldest Physical Review papers.

## Canonical Form

- Unit of analysis: publication year, PageRank score, citation count, cohort, damping value, or Physical Review paper.
- Typical representation: cohort-level PageRank and citation comparison by publication year.
- Mechanism, measurement, or validation target: age-bias validation for recursive citation ranking.
- Empirical signature: very old papers can have below-average PageRank and citations despite PageRank's backward time drift..

## Uses in Science of Science

- Refines Citation PageRank validation by linking it to [pagerank age bias check](pagerank_age_bias_check.md) and [time directed citation walk drift](../mechanisms/time_directed_citation_walk_drift.md).
- Useful as a reusable check when [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md) is interpreted from citation histories.
- Adds cross-links to [physical review citation network](../datasets/physical_review_citation_network.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- Plot normalized PageRank and normalized citation counts by publication year.
- Compare early, middle-old, and recent cohorts across damping settings.
- Flag nonmonotonic age effects before calling PageRank simply old-paper biased.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) finds that lower damping increases weight for 1920-1960 papers, but papers before about 1920 have below-average PageRank and citation counts.
- The motif adds a floor caveat to the PageRank age-bias diagnosis.

## Caveats

- Early Physical Review coverage, small cohort sizes, and field growth may confound the apparent floor.
- The result may not transfer to databases with different backfile coverage.

## Links

- [PageRank age-bias check](pagerank_age_bias_check.md)
- [Time-directed citation-walk drift](../mechanisms/time_directed_citation_walk_drift.md)
- [Citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [Physical Review citation network](../datasets/physical_review_citation_network.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; SciSciNet: W1539510218; WoS: unknown]

## Metadata

- Concept ID: `oldest_cohort_pagerank_floor`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: pre-1920 PageRank floor; oldest-paper underweight check; nonmonotonic age-bias check
