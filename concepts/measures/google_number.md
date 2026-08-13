# Google number

## Summary

Google number is the PageRank score assigned to a scientific paper by recursively propagating citation weight through a directed citation network.

## Canonical Form

- Unit of analysis: paper, citation-network node, patent, journal, or scholarly object.
- Typical representation: PageRank probability, recursive centrality score, or rank derived from the score.
- Mechanism or measurement target: recursive citation influence after discounting citations from long reference lists.
- Empirical signature: Google number correlates with citation count on average but can rank some papers much higher than their direct citation counts.

## Uses in Science of Science

- Makes the scalar output of [citation PageRank](citation_pagerank.md) explicit.
- Supports outlier discovery through [citation PageRank hidden gems](../validations/citation_pagerank_hidden_gems.md).
- Provides a paper-level analogue for journal-level [Eigenfactor metrics](eigenfactor_metrics.md) and other random-walk citation indicators.

## Operationalization

- Build a directed citation network from citing papers to cited papers.
- Choose a damping or reinjection parameter.
- Initialize equal probability over nodes and iterate the PageRank recursion until convergence.
- Sort nodes by the resulting Google number and compare against direct citation rank.
- Use [Google-number citation scaling checks](../validations/google_number_citation_scaling_check.md), [PageRank citation-rank limit](../validations/pagerank_citation_rank_limit.md), [PageRank-citation rank divergence](pagerank_citation_rank_divergence.md), and [citing-child PageRank contribution](citing_child_pagerank_contribution.md) to distinguish average agreement with citation counts from exceptional outliers.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) defines the Google number with a PageRank recursion over a citation network.
- The paper interprets the score as a steady-state occupation probability of a random-walk-like process on papers.
- Chen et al. compare Google rank with citation rank in the Physical Review citation network and show that the two measures are positively correlated on average but can diverge for important outliers.
- The same full text explains these divergences through child contributions `Gj/kj` and shows that the score approaches citation rank as `d -> 1` under a narrow out-degree approximation.

## Caveats

- Google number is sensitive to graph coverage, edge direction, damping parameter, dangling-node handling, and citation-age structure.
- It remains an attention and network-position metric, not direct evidence of truth, quality, or social value.
- The score can reward papers cited by a small number of influential papers with short reference lists.

## Links

- [citation PageRank](citation_pagerank.md)
- [recursive citation weighting](../mechanisms/recursive_citation_weighting.md)
- [reference-list dilution](../mechanisms/reference_list_dilution.md)
- [PageRank-citation rank divergence](pagerank_citation_rank_divergence.md)
- [citing-child PageRank contribution](citing_child_pagerank_contribution.md)
- [Google-number citation scaling check](../validations/google_number_citation_scaling_check.md)
- [PageRank citation-rank limit](../validations/pagerank_citation_rank_limit.md)
- [citation-following damping calibration](../methods/citation_following_damping_calibration.md)
- [citation PageRank hidden gems](../validations/citation_pagerank_hidden_gems.md)
- [PageRank damping sensitivity](../validations/pagerank_damping_sensitivity.md)
- [PageRank age-bias check](../validations/pagerank_age_bias_check.md)
- [Physical Review citation network](../datasets/physical_review_citation_network.md)
- [Eigenfactor metrics](eigenfactor_metrics.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]

## Metadata

- Concept ID: `google_number`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: PageRank score; citation PageRank score; recursive citation score; Google rank score
