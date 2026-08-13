# PageRank Teleportation Regularizer

## Summary

PageRank teleportation regularizer is the uniform reinjection term in citation PageRank that restarts random walks and prevents influence from concentrating entirely on the oldest reachable papers.

## Canonical Form

- Unit of analysis: citation network node, random walk, PageRank parameter, or recursive citation score.
- Typical representation: damping or teleportation term in the PageRank recursion.
- Mechanism or measurement target: regularized recursive influence propagation.
- Empirical signature: each node receives a uniform baseline probability and only a fraction of the walk follows citation links.

## Uses in Science of Science

- Operationalizes [citation PageRank](../measures/citation_pagerank.md).
- Gives a mechanism for [PageRank damping sensitivity](../validations/pagerank_damping_sensitivity.md).
- Helps interpret [PageRank age-bias check](../validations/pagerank_age_bias_check.md) and [time-directed citation-walk drift](../mechanisms/time_directed_citation_walk_drift.md).
- Complements [citation-following damping calibration](citation_following_damping_calibration.md).

## Operationalization

- Specify the damping or teleportation parameter.
- Add a uniform reinjection term to the recursive score equation.
- Report whether the parameter is borrowed from web PageRank, empirically calibrated, or sensitivity-tested.
- Check how ranks change when the regularizer is weakened or strengthened.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) defines the citation PageRank recursion with a propagation term and a uniform probability injection term.
- The paper explains that the damping parameter controls the fraction of random walks that follow links versus being uniformly reinjected.
- Chen et al. state that a positive reinjection parameter prevents all influence from concentrating on the oldest papers.

## Caveats

- The regularizer is a modeling choice rather than a directly observed author behavior.
- Different citation databases and field structures may need different parameter choices.
- Teleportation can reduce age concentration while also adding a uniform baseline unrelated to scholarly relevance.

## Links

- [citation PageRank](../measures/citation_pagerank.md)
- [PageRank damping sensitivity](../validations/pagerank_damping_sensitivity.md)
- [PageRank age-bias check](../validations/pagerank_age_bias_check.md)
- [time-directed citation-walk drift](../mechanisms/time_directed_citation_walk_drift.md)
- [citation-following damping calibration](citation_following_damping_calibration.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; SciSciNet: W1539510218; WoS: unknown]

## Metadata

- Concept ID: `pagerank_teleportation_regularizer`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: PageRank restart term; citation PageRank teleportation; uniform reinjection regularizer; damping restart regularizer
