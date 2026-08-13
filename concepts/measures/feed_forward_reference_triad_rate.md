# Feed-Forward Reference Triad Rate

## Summary

Feed-forward reference triad rate measures how often a citing paper references two papers where one also cites the other, providing a proxy for authors following citation chains.

## Canonical Form

- Unit of analysis: reference list, citation triad, citing paper, or citation network.
- Typical representation: share of reference-list pairs forming an A-cites-B, A-cites-C, B-cites-C triad.
- Mechanism or measurement target: citation-chain following within bibliography construction.
- Empirical signature: a nontrivial fraction of references form feed-forward loops through cited papers.

## Uses in Science of Science

- Calibrates [citation-following damping calibration](../methods/citation_following_damping_calibration.md).
- Connects citation-network topology to [citation contexts](../representations/citation_contexts.md).
- Treats [citation networks](../representations/citation_networks.md) as evidence about discovery paths as well as influence.
- Supports the [citation chain discovery search](../mechanisms/citation_chain_discovery_search.md) mechanism.

## Operationalization

- For each focal citing paper A, enumerate cited papers B and C in its reference list.
- Count cases where B cites C or C cites B within the same citation database.
- Divide by eligible reference-list relationships to estimate the feed-forward rate.
- Use the rate as a behavioral proxy only after checking database coverage and citation direction.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) uses feed-forward loops to justify citation PageRank's damping choice.
- They describe a pattern where a paper A cites both B and C, while B also cites C, and interpret such loops as evidence that authors follow references.
- The paper reports that the actual fraction of followed citations is 42 percent in the full dataset and 51 percent for papers published in the last four years.

## Caveats

- A feed-forward triad does not prove the author found C through B.
- Database boundary truncation can undercount triads.
- The measure depends on reference-list completeness and citation direction conventions.

## Links

- [citation-following damping calibration](../methods/citation_following_damping_calibration.md)
- [citation contexts](../representations/citation_contexts.md)
- [citation networks](../representations/citation_networks.md)
- [citation chain discovery search](../mechanisms/citation_chain_discovery_search.md)
- [citation PageRank](citation_pagerank.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; SciSciNet: W1539510218; WoS: unknown]

## Metadata

- Concept ID: `feed_forward_reference_triad_rate`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: feed-forward citation loop rate; followed-citation fraction; reference triad following rate; A-B-C citation-chain proxy
