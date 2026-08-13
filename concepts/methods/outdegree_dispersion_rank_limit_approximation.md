# Out-degree-dispersion rank-limit approximation

## Summary

High-damping PageRank collapses toward citation count under a narrow reference-list-length approximation.

## Canonical Form

- Unit of analysis: citing paper, reference list length, out-degree distribution, PageRank limit, in-degree, or review article.
- Typical representation: derivation condition linking high-damping PageRank to citation rank.
- Mechanism, measurement, or validation target: boundary condition for recursive citation weighting.
- Empirical signature: when citing-paper out-degree is relatively narrow, PageRank near d approaching one is approximately proportional to in-degree..

## Uses in Science of Science

- Refines Citation PageRank method by linking it to [pagerank citation rank limit](../validations/pagerank_citation_rank_limit.md) and [review article outdegree tail caveat](../validations/review_article_outdegree_tail_caveat.md).
- Useful as a reusable check when [reference list dilution](../mechanisms/reference_list_dilution.md) is interpreted from citation histories.
- Adds cross-links to [citation pagerank](../measures/citation_pagerank.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- Estimate the out-degree distribution of citing papers.
- Optionally exclude review-article tails before evaluating the approximation.
- Test whether PageRank near high damping is approximately proportional to citation count.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) derives the citation-rank limit using a narrow out-degree approximation and notes mean in- and out-degree near 9.
- The paper notes much smaller out-degree dispersion after excluding Reviews of Modern Physics.

## Caveats

- The approximation weakens in corpora with broad reference-list heterogeneity, incomplete edges, or many review articles.
- It should not be assumed for fields with very long or very short reference lists.

## Links

- [PageRank citation-rank limit](../validations/pagerank_citation_rank_limit.md)
- [Review-article out-degree-tail caveat](../validations/review_article_outdegree_tail_caveat.md)
- [Reference-list dilution](../mechanisms/reference_list_dilution.md)
- [Citation PageRank](../measures/citation_pagerank.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; SciSciNet: W1539510218; WoS: unknown]

## Metadata

- Concept ID: `outdegree_dispersion_rank_limit_approximation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: narrow out-degree PageRank limit; reference-length dispersion approximation; high-damping citation-rank approximation
