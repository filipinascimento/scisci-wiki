# PageRank citation-rank limit

## Summary

PageRank citation-rank limit is the validation result that citation PageRank approaches ordinary citation-count ranking as the reinjection parameter approaches one, under narrow out-degree assumptions.

## Canonical Form

- Unit of analysis: PageRank parameter, citation-network node, citation count, out-degree distribution, or ranking comparison.
- Typical representation: limiting derivation, rank-correlation check, parameter sweep, or citation-rank convergence test.
- Validation target: show when a recursive citation metric adds little information beyond direct citation counts.
- Empirical signature: high damping or reinjection makes PageRank nearly equivalent to in-degree ranking.

## Uses in Science of Science

- Complements [PageRank damping sensitivity](pagerank_damping_sensitivity.md) by identifying a parameter regime where [citation PageRank](../measures/citation_pagerank.md) collapses toward direct citations.
- Supports responsible use of [Google number](../measures/google_number.md) by making the added value of recursion an empirical question.
- Connects [Google-number citation scaling check](google_number_citation_scaling_check.md) to a formal limiting case.
- Helps distinguish local outlier discovery from a global re-labeling of citation counts.

## Operationalization

- Compute PageRank across a grid of reinjection or damping parameters.
- Compare each PageRank rank vector with direct citation rank using Spearman correlation, top-k overlap, and residuals from citation-count baselines.
- Inspect the out-degree distribution; narrow reference-list distributions make the citation-rank limit a better approximation.
- Report whether the chosen parameter produces materially different outlier lists or nearly duplicates citation counts.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) shows analytically that as `d -> 1`, the Google rank becomes identical to citation rank under an approximation that ignores out-degree dispersion.
- The paper explains that the leading correction to the uniform score is proportional to in-degree, which is the number of received citations.
- Chen et al. justify this approximation by noting that the out-degree distribution is relatively narrow once the broad tail from Reviews of Modern Physics is excluded.
- This result explains why PageRank and citation count can be highly correlated globally even while some papers have large local rank divergences.

## Caveats

- The limit depends on the paper's parameter convention; implementations may define damping and teleportation oppositely.
- Broad or field-dependent out-degree distributions weaken the simple citation-rank approximation.
- A high global correlation does not eliminate the need to inspect top-k outliers and hidden-gem cases.

## Links

- [citation PageRank](../measures/citation_pagerank.md)
- [Google number](../measures/google_number.md)
- [PageRank damping sensitivity](pagerank_damping_sensitivity.md)
- [Google-number citation scaling check](google_number_citation_scaling_check.md)
- [PageRank-citation rank divergence](../measures/pagerank_citation_rank_divergence.md)
- [review-article out-degree-tail caveat](review_article_outdegree_tail_caveat.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]

## Metadata

- Concept ID: `pagerank_citation_rank_limit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: PageRank-to-citation limit; high-damping citation-rank convergence; recursive-rank collapse; d-to-one citation limit
