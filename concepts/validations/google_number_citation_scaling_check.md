# Google-number citation scaling check

## Summary

Google-number citation scaling check tests whether recursive citation scores scale with direct citation counts on average while preserving outliers as the main substantive signal.

## Canonical Form

- Unit of analysis: paper, citation count bin, citation-network node, or PageRank parameter setting.
- Typical representation: average Google number by citation count, scatterplot of score versus citations, binned trend line, or rank correlation.
- Validation target: whether a recursive citation metric is broadly aligned with direct popularity while identifying meaningful deviations.
- Empirical signature: the average recursive score rises roughly linearly with citation count for highly cited papers, but individual papers can sit far above or below the trend.

## Uses in Science of Science

- Validates [Google number](../measures/google_number.md) and [citation PageRank](../measures/citation_pagerank.md) against direct [citation impact indicators](../measures/citation_impact_indicators.md).
- Provides the baseline curve for [PageRank-citation rank divergence](../measures/pagerank_citation_rank_divergence.md) and [citation PageRank hidden gems](citation_pagerank_hidden_gems.md).
- Helps separate global metric similarity from local outlier discovery.

## Operationalization

- Compute citation counts and Google number for every paper in the same directed citation graph.
- Plot average Google number by citation count, preferably with binned averages and individual high-impact outliers.
- Estimate correlation, scaling slope, or residuals over relevant citation-count ranges.
- Interpret outliers relative to the average scaling relation, then audit their citing neighborhoods, [citing-child PageRank contribution](../measures/citing_child_pagerank_contribution.md), and database coverage.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) plots average Google number against citation count for Physical Review papers.
- The paper reports that the average Google number increases smoothly and approximately linearly with citation count for papers with at least about 50 citations.
- Chen et al. also report high rank correlation between PageRank and citation count, while using outliers from the Google-number-citation relation to identify scientific gems.
- The paper's limiting analysis shows why this broad alignment is expected when PageRank approaches the citation-rank regime.

## Caveats

- A high aggregate correlation can hide important top-k or field-specific differences.
- Scaling estimated in one bounded citation network may not transfer to broader databases, younger fields, or interdisciplinary corpora.
- The expected relation depends on the damping parameter and on the distribution of reference-list lengths.

## Links

- [Google number](../measures/google_number.md)
- [citation PageRank](../measures/citation_pagerank.md)
- [PageRank-citation rank divergence](../measures/pagerank_citation_rank_divergence.md)
- [citing-child PageRank contribution](../measures/citing_child_pagerank_contribution.md)
- [PageRank citation-rank limit](pagerank_citation_rank_limit.md)
- [citation PageRank hidden gems](citation_pagerank_hidden_gems.md)
- [PageRank damping sensitivity](pagerank_damping_sensitivity.md)
- [Physical Review citation network](../datasets/physical_review_citation_network.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]

## Metadata

- Concept ID: `google_number_citation_scaling_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: PageRank citation scaling; Google-number citation correlation; recursive-score citation baseline; citation PageRank scaling check
