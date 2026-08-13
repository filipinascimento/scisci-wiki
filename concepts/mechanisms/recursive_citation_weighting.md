# Recursive citation weighting

## Summary

Recursive citation weighting is the mechanism in which a citation contributes more when it comes from a citing paper that is itself important in the citation network.

## Canonical Form

- Unit of analysis: citation edge, cited paper, citing paper, journal, or recursive ranking system.
- Typical representation: edge contribution weighted by the score of the citing node.
- Mechanism: influence propagates through citation paths, so prestige is recursively inherited from influential descendants.
- Empirical signature: papers with similar citation counts can receive different recursive ranks because their citing neighborhoods differ in importance.

## Uses in Science of Science

- Provides the main mechanism behind [citation PageRank](../measures/citation_pagerank.md), [Google number](../measures/google_number.md), and [Eigenfactor metrics](../measures/eigenfactor_metrics.md).
- Helps explain why recursive citation indicators can find [citation PageRank hidden gems](../validations/citation_pagerank_hidden_gems.md) that raw counts under-rank.
- Links paper-level impact measurement to broader prestige, attention, and cumulative-advantage motifs.

## Operationalization

- Assign each node an initial score.
- Repeatedly update each cited node's score from the scores of nodes that cite it.
- Combine recursive weighting with [reference-list dilution](reference_list_dilution.md) so long bibliographies do not transfer all influence to every cited item.
- Use [citing-child PageRank contribution](../measures/citing_child_pagerank_contribution.md) to decompose which citing children transfer the most recursive score.
- Iterate until scores converge, then compare recursive rank with citation-count rank.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) states that a citation from a more important paper should contribute more than a citation from a less popular paper.
- Their PageRank implementation makes each citing paper export its Google number to cited papers, creating a self-consistent recursive influence score.
- The paper shows that this mechanism helps explain why some Physical Review papers with modest citation counts obtain very high Google ranks.
- Chen et al. make this explanation concrete with child contribution terms `Gj/kj`, comparing high-Google-rank papers whose citing children differ in influence and reference-list length.

## Caveats

- Recursive weighting can amplify existing visibility hierarchies.
- It depends on the citation graph boundary and can change when missing fields, journals, or external citation sources are added.
- It should be paired with field, age, and responsible-metrics checks before evaluation use.

## Links

- [citation PageRank](../measures/citation_pagerank.md)
- [Google number](../measures/google_number.md)
- [reference-list dilution](reference_list_dilution.md)
- [citing-child PageRank contribution](../measures/citing_child_pagerank_contribution.md)
- [citation PageRank hidden gems](../validations/citation_pagerank_hidden_gems.md)
- [PageRank damping sensitivity](../validations/pagerank_damping_sensitivity.md)
- [PageRank age-bias check](../validations/pagerank_age_bias_check.md)
- [Eigenfactor metrics](../measures/eigenfactor_metrics.md)
- [cumulative advantage](cumulative_advantage.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]

## Metadata

- Concept ID: `recursive_citation_weighting`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: recursive citation prestige; influential-citer weighting; citation prestige propagation; network-weighted citation credit
