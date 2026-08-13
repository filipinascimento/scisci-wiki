# Citation-conditioned PageRank dispersion

## Summary

Recursive prestige can vary widely among papers with the same citation count.

## Canonical Form

- Unit of analysis: paper, citation count bin, Google number, PageRank score, dispersion, or residual outlier.
- Typical representation: citation-binned dispersion of PageRank or Google number.
- Mechanism, measurement, or validation target: residual prestige variation beyond raw citation count.
- Empirical signature: average Google number rises with citations while outliers deviate strongly within citation-count bins..

## Uses in Science of Science

- Refines Citation PageRank measure by linking it to [google number citation scaling check](../validations/google_number_citation_scaling_check.md) and [pagerank citation rank divergence](pagerank_citation_rank_divergence.md).
- Useful as a reusable check when [citation pagerank hidden gems](../validations/citation_pagerank_hidden_gems.md) is interpreted from citation histories.
- Adds cross-links to [google number](google_number.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- Bin papers by citation count k.
- Compute mean and dispersion of Google number within each bin.
- Identify high-residual papers against the citation-conditioned baseline.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) shows average Google number rising roughly linearly with citations, with low dispersion at small k and extreme outliers at larger k.
- The motif operationalizes the scatter around the citation-PageRank relationship.

## Caveats

- High-citation bins are sparse, so apparent outliers can depend on binning and smoothing.
- Dispersion does not by itself indicate which outliers are substantive landmarks.

## Links

- [Google-number citation scaling check](../validations/google_number_citation_scaling_check.md)
- [PageRank-citation rank divergence](pagerank_citation_rank_divergence.md)
- [Citation PageRank hidden gems](../validations/citation_pagerank_hidden_gems.md)
- [Google number](google_number.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; SciSciNet: W1539510218; WoS: unknown]

## Metadata

- Concept ID: `citation_conditioned_pagerank_dispersion`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: PageRank residual dispersion; conditional Google-number variance; citation-binned PageRank spread; rank residual scatter
