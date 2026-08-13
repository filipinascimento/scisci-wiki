# Physical Review internal-citation coverage

## Summary

Physical Review internal-citation coverage validates how much of a paper's citation environment is captured when an APS-only citation network includes only citations from Physical Review papers to other Physical Review papers.

## Canonical Form

- Unit of analysis: journal-family citation graph, focal paper, highly cited paper set, or database boundary.
- Typical representation: internal-citation share, missing external-citation share, coverage ratio, or coverage caveat attached to a benchmark network.
- Validation target: whether a bounded citation network is complete enough for ranking, aging, and impact analyses.
- Empirical signature: internal citation counts explain only a fraction of all citations to prominent papers, so indicator results are boundary-dependent.

## Uses in Science of Science

- Provides a dataset-specific coverage check for the [Physical Review citation network](../datasets/physical_review_citation_network.md).
- Adds a concrete example to [citation database coverage sensitivity](citation_database_coverage_sensitivity.md).
- Guards interpretation of [citation PageRank](../measures/citation_pagerank.md), [Google number](../measures/google_number.md), and [PageRank-citation rank divergence](../measures/pagerank_citation_rank_divergence.md).

## Operationalization

- Build the internal APS citation network and compute citations received from inside the journal family.
- Compare internal citation counts with a broader citation source for matched highly cited papers.
- Report the internal share and discuss which fields, years, or article types are most likely to be undercovered.
- Treat downstream ranks as valid for the bounded network unless broader-coverage robustness checks support wider claims.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) states that the Physical Review network contains 353,268 nodes and 3,110,839 internal citation links.
- The same paper reports that these internal citations represent about one-fifth to one-third of all citations for highly cited papers.
- Chen et al. explicitly use that range as a sense of the completeness of the Physical Review citation network.

## Caveats

- Coverage estimates for highly cited papers may not generalize to ordinary papers or to recent papers.
- Internal coverage can vary across subfields that cite outside the APS journal family at different rates.
- Adding external citations can change both in-degree and out-degree normalization, so PageRank changes may not equal simple citation-count changes.

## Links

- [Physical Review citation network](../datasets/physical_review_citation_network.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [citation networks](../representations/citation_networks.md)
- [citation PageRank](../measures/citation_pagerank.md)
- [Google number](../measures/google_number.md)
- [PageRank-citation rank divergence](../measures/pagerank_citation_rank_divergence.md)
- [PageRank damping sensitivity](pagerank_damping_sensitivity.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]

## Metadata

- Concept ID: `physical_review_internal_citation_coverage`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: APS internal citation coverage; Physical Review boundary coverage; internal citation share audit; bounded citation-network completeness
