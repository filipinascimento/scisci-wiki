# Citing-child PageRank contribution

## Summary

Citing-child PageRank contribution measures how much each paper that cites a focal work transfers to that focal work after dividing the citing paper's recursive score by its reference-list length.

## Canonical Form

- Unit of analysis: cited paper, citing child, citation edge, out-degree, PageRank score, or citing-neighborhood average.
- Typical representation: edge contribution `Gj/kj`, average child contribution, contribution distribution, or child-level explanation table.
- Measurement target: explain why a paper's recursive rank differs from its direct citation count.
- Empirical signature: a paper with fewer citations can outrank a more cited paper when its citing children are influential and have shorter reference lists.

## Uses in Science of Science

- Decomposes [citation PageRank](citation_pagerank.md) and [Google number](google_number.md) into citing-neighborhood evidence.
- Bridges [recursive citation weighting](../mechanisms/recursive_citation_weighting.md) and [reference-list dilution](../mechanisms/reference_list_dilution.md) by showing their combined edge-level effect.
- Provides an interpretation layer for [PageRank-citation rank divergence](pagerank_citation_rank_divergence.md) and [citation PageRank hidden gems](../validations/citation_pagerank_hidden_gems.md).
- Helps audit whether an outlier is supported by a broad influential citing neighborhood or by one unusually strong citing child.

## Operationalization

- Compute PageRank or Google number for every node in a directed citation network.
- For each citing child `j` of focal paper `i`, divide the child's score `Gj` by its out-degree or reference-list length `kj`.
- Summarize the focal paper's child contributions using the mean, median, maximum, and concentration of `Gj/kj`.
- Compare contribution distributions for papers with similar citation counts or for high-PageRank outliers and high-citation baselines.
- Inspect whether contribution concentration reflects substantive influence, review-article behavior, missing graph coverage, or a single famous child.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) explains that a citing publication contributes `Gj/kj` to the Google number of its cited parent.
- The paper compares Cabibbo and Kohn-Sham papers and reports that Cabibbo's high Google rank comes from much larger average child contribution despite far fewer direct citations.
- Chen et al. further attribute Slater's high rank to influential citing children, with the child-contribution mechanism making visible a paper that direct citation counts under-rank.
- The Rosenstock-Marquardt example shows the caveat: one famous child with a short reference list can transfer enough score to create an extreme PageRank outlier.

## Caveats

- Child contribution explains PageRank mechanics; it does not by itself validate historical importance.
- Contribution concentration can make a result fragile to graph-boundary errors or one misclassified citation edge.
- The diagnostic depends on damping parameter, out-degree definition, and whether references outside the database boundary are counted.

## Links

- [citation PageRank](citation_pagerank.md)
- [Google number](google_number.md)
- [PageRank-citation rank divergence](pagerank_citation_rank_divergence.md)
- [recursive citation weighting](../mechanisms/recursive_citation_weighting.md)
- [reference-list dilution](../mechanisms/reference_list_dilution.md)
- [citation PageRank hidden gems](../validations/citation_pagerank_hidden_gems.md)
- [review-article out-degree-tail caveat](../validations/review_article_outdegree_tail_caveat.md)
- [Physical Review citation network](../datasets/physical_review_citation_network.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]

## Metadata

- Concept ID: `citing_child_pagerank_contribution`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: child contribution; Gj over kj contribution; PageRank edge contribution; citing-neighborhood contribution
