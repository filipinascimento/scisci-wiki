# Aging-aware CiteRank extension

## Summary

Citation PageRank needs an aging-aware extension because citation links are fixed after publication and citation networks drift backward in time.

## Canonical Form

- Unit of analysis: paper, citation edge, publication age, PageRank score, CiteRank score, damping parameter, or citation network.
- Typical representation: age-adjusted PageRank-family ranking over directed citation networks.
- Mechanism, measurement, or validation target: age bias correction in recursive citation ranking.
- Empirical signature: standard PageRank favors old papers in a time-directed citation network unless aging or traffic dynamics are modeled..

## Uses in Science of Science

- Refines citation-ranking method extension by linking it to [citation pagerank](../measures/citation_pagerank.md) and [pagerank age bias check](../validations/pagerank_age_bias_check.md).
- Useful as a reusable check when [time directed citation walk drift](../mechanisms/time_directed_citation_walk_drift.md) is interpreted from citation histories.
- Adds cross-links to [static citation edge lifecycle](../representations/static_citation_edge_lifecycle.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- Add publication-age or citation-age weighting to the Citation PageRank random-walk model.
- Compare standard PageRank ranks with age-adjusted ranks across cohorts.
- Report whether age-aware ranking changes top lists, hidden-gem outliers, and cohort-level bias.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) argues that citation links are fixed after publication, unlike web links, and that aging effects should be incorporated into PageRank-style citation ranking.
- The paper points to a later network-traffic ranking model as future work.

## Caveats

- Chen et al. do not implement or name CiteRank in this paper.
- This motif is a residual bridge from their stated limitation and future-work note.

## Links

- [Citation PageRank](../measures/citation_pagerank.md)
- [PageRank age-bias check](../validations/pagerank_age_bias_check.md)
- [Time-directed citation-walk drift](../mechanisms/time_directed_citation_walk_drift.md)
- [Static citation edge lifecycle](../representations/static_citation_edge_lifecycle.md)
- [Citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; SciSciNet: W1539510218; WoS: unknown]

## Metadata

- Concept ID: `aging_aware_citerank_extension`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: CiteRank precursor; age-aware citation PageRank; aging-corrected PageRank; citation traffic aging model
