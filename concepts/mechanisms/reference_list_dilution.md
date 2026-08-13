# Reference-list dilution

## Summary

Reference-list dilution is the mechanism by which a citation from a paper with many references contributes less weight than a citation from a paper with a short reference list.

## Canonical Form

- Unit of analysis: citing paper, reference list, citation edge, cited paper, or recursive ranking system.
- Typical representation: edge contribution divided by the out-degree or reference-list length of the citing node.
- Mechanism: a citing paper's influence is distributed across its references rather than transferred in full to each cited item.
- Empirical signature: papers cited by influential papers with short bibliographies can receive high recursive rank even with modest raw citation counts.

## Uses in Science of Science

- Provides the out-degree normalization component of [citation PageRank](../measures/citation_pagerank.md) and [Google number](../measures/google_number.md).
- Explains why review articles and long-reference papers can be treated differently from concise papers in recursive citation metrics.
- Connects citation impact measurement to [citation contexts and functions](../representations/citation_contexts.md), because reference-list length alone does not reveal why a citation was made.

## Operationalization

- Count the number of outgoing references from each citing paper within the chosen citation graph.
- Divide the citing paper's recursive score by that out-degree before distributing it to cited papers.
- Compare results with and without out-degree normalization when reference-list length is highly field- or document-type-dependent.
- Audit review articles or unusually long bibliographies as possible sensitivity cases through [review-article out-degree-tail caveat](../validations/review_article_outdegree_tail_caveat.md).

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) states that citations from papers with long reference lists should count less than citations from papers with short lists.
- The PageRank recursion divides each citing paper's Google number by its out-degree before transferring credit to cited papers.
- Chen et al. use this mechanism to explain why a paper cited by an influential child with few references can receive an unusually high Google rank.
- Their Physical Review analysis also shows that review-article tails can broaden the out-degree distribution, making document-type sensitivity part of the dilution audit.

## Caveats

- Out-degree normalization can penalize fields or article types where longer bibliographies are standard.
- The number of references is a crude proxy for citation specificity and should not replace citation-function analysis.
- Missing references outside the database boundary can distort out-degree and therefore transferred weight.

## Links

- [citation PageRank](../measures/citation_pagerank.md)
- [Google number](../measures/google_number.md)
- [recursive citation weighting](recursive_citation_weighting.md)
- [citing-child PageRank contribution](../measures/citing_child_pagerank_contribution.md)
- [citation PageRank hidden gems](../validations/citation_pagerank_hidden_gems.md)
- [review-article out-degree-tail caveat](../validations/review_article_outdegree_tail_caveat.md)
- [Physical Review citation network](../datasets/physical_review_citation_network.md)
- [citation contexts and functions](../representations/citation_contexts.md)
- [citation function classification](../methods/citation_function_classification.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]

## Metadata

- Concept ID: `reference_list_dilution`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: out-degree citation dilution; reference-list normalization; citation credit dilution; bibliography-length dilution
