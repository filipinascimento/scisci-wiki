# Citation-following damping calibration

## Summary

Citation-following damping calibration sets a PageRank damping or reinjection parameter from evidence about how authors follow citation chains while assembling reference lists.

## Canonical Form

- Unit of analysis: citation triad, reference list, PageRank parameter, citing paper, or citation network.
- Typical representation: estimated citation-following probability, feed-forward citation-loop rate, or calibrated damping value.
- Method target: replace a borrowed web-search damping parameter with one grounded in scholarly citation behavior.
- Empirical signature: citation triads in which a paper cites both a source and one of that source's references provide evidence about indirect citation following.

## Uses in Science of Science

- Provides an empirical parameter-choice method for [citation PageRank](../measures/citation_pagerank.md) and [Google number](../measures/google_number.md).
- Complements [PageRank damping sensitivity](../validations/pagerank_damping_sensitivity.md) by giving a behavioral reason for the baseline parameter.
- Links citation-network ranking to [citation contexts and functions](../representations/citation_contexts.md), because following a reference path is one mechanism that creates a citation.

## Operationalization

- For each focal paper, inspect pairs of references where one referenced paper cites another referenced paper.
- Treat these feed-forward loops as evidence that the author may have followed a citation path from one reference to another.
- Estimate the fraction of references reachable through such loops and set the continuation probability near that fraction.
- Translate continuation probability into the PageRank parameter convention used by the implementation, and still report sensitivity around the chosen value.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) rejects simply reusing the original web PageRank value of `d = 0.15` for citation networks.
- The paper argues for `d = 0.5` because approximately half of the articles in a focal paper's reference list have at least one citation relationship to another article in that same reference list.
- Chen et al. report actual followed-citation fractions of 42 percent for the whole Physical Review dataset and 51 percent for papers from the last four years.

## Caveats

- Feed-forward citation loops are only a proxy for author search behavior; they do not prove that the later author actually followed the chain.
- The estimate can vary by field, paper age, database coverage, and reference-list completeness.
- Parameter calibration should be paired with sensitivity tests, age-bias checks, and a clear definition of the PageRank convention being used.

## Links

- [citation PageRank](../measures/citation_pagerank.md)
- [Google number](../measures/google_number.md)
- [PageRank damping sensitivity](../validations/pagerank_damping_sensitivity.md)
- [PageRank age-bias check](../validations/pagerank_age_bias_check.md)
- [citation networks](../representations/citation_networks.md)
- [citation contexts and functions](../representations/citation_contexts.md)
- [Physical Review citation network](../datasets/physical_review_citation_network.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]

## Metadata

- Concept ID: `citation_following_damping_calibration`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: citation PageRank parameter calibration; feed-forward citation damping; reference-chain damping choice; citation-following probability calibration
