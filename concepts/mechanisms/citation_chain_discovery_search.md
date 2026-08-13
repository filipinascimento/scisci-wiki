# Citation Chain Discovery Search

## Summary

Citation chain discovery search is the mechanism by which scientists find relevant literature by following citation links from one paper to earlier papers.

## Canonical Form

- Unit of analysis: researcher search session, citation chain, reference list, or citation network.
- Typical representation: behavioral search process over citation edges.
- Mechanism: references act as navigational links through the literature, not only as credit or evidence.
- Empirical signature: reference-list structures and author behavior indicate that citation links are followed to discover further sources.

## Uses in Science of Science

- Provides behavioral grounding for [citation-following damping calibration](../methods/citation_following_damping_calibration.md).
- Links citation networks to [reference-age search depth](../measures/reference_age_search_depth.md) and [reference popularity search](../measures/reference_popularity_search.md).
- Complements [citation-aware search summarization](../methods/citation_aware_search_summarization.md).
- Helps interpret [citation PageRank](../measures/citation_pagerank.md) as a discovery model as well as a ranking model.

## Operationalization

- Detect feed-forward citation triads or clickstream paths through cited references.
- Compare reference-list construction with search logs where available.
- Estimate how far authors appear to follow citation chains.
- Distinguish citation-chain search from keyword search, browsing, and recommendation systems.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) states that scientists commonly discover relevant publications by following chains of citation links from other papers.
- The paper uses this behavior to justify a random-surfer model for the popularity or citability of papers.
- Earlier in the methods, Chen et al. interpret feed-forward reference loops as evidence of authors following references from one cited paper to another.

## Caveats

- Citation-chain topology is an indirect proxy for search behavior unless paired with user logs or interviews.
- Citation chains can reflect rhetorical genealogy rather than actual discovery.
- The mechanism is sensitive to database coverage and availability of older references.

## Links

- [citation-following damping calibration](../methods/citation_following_damping_calibration.md)
- [reference-age search depth](../measures/reference_age_search_depth.md)
- [reference popularity search](../measures/reference_popularity_search.md)
- [citation-aware search summarization](../methods/citation_aware_search_summarization.md)
- [feed-forward reference triad rate](../measures/feed_forward_reference_triad_rate.md)
- [citation PageRank](../measures/citation_pagerank.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; SciSciNet: W1539510218; WoS: unknown]

## Metadata

- Concept ID: `citation_chain_discovery_search`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: citation-link discovery; reference-chain search; citation-following literature search; citation navigation behavior
