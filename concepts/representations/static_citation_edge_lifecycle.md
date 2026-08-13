# Static Citation Edge Lifecycle

## Summary

Static citation edge lifecycle represents citation links as fixed after publication, unlike web hyperlinks, producing different aging and update dynamics in scholarly networks.

## Canonical Form

- Unit of analysis: citation edge, paper, citation network, or time-directed scholarly graph.
- Typical representation: lifecycle distinction between fixed citation edges and mutable online links.
- Mechanism or measurement target: edge immutability and accelerated aging in citation networks.
- Empirical signature: citation edges do not update after publication even as newer papers and citations arrive.

## Uses in Science of Science

- Grounds [time-directed citation-walk drift](../mechanisms/time_directed_citation_walk_drift.md).
- Qualifies [PageRank age-bias check](../validations/pagerank_age_bias_check.md).
- Links to [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md) and [citation window selection](../methods/citation_window_selection.md).
- Helps explain why web-search analogies for citation networks need lifecycle adjustments.

## Operationalization

- Treat reference links as immutable after publication unless corrections or retractions alter the record.
- Model new citation edges as arriving through later papers rather than updates to older papers.
- Include aging or time-window adjustments when applying web-derived ranking algorithms.
- Avoid assuming hyperlink-like update behavior in citation graphs.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) contrasts citation networks with the World Wide Web.
- The paper notes that citation links cannot be updated after publication, while web hyperlinks evolve with webpages.
- Chen et al. argue that scientific papers and their citations therefore tend to age more rapidly than active webpages and may require explicit aging in PageRank-like algorithms.

## Caveats

- Citation records can be corrected or retracted, but the original cited-reference structure is normally fixed.
- Static edges do not imply static influence; later citations can revive older papers.
- Different databases may update metadata even when the underlying reference relation is unchanged.

## Links

- [time-directed citation-walk drift](../mechanisms/time_directed_citation_walk_drift.md)
- [PageRank age-bias check](../validations/pagerank_age_bias_check.md)
- [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation window selection](../methods/citation_window_selection.md)
- [citation networks](citation_networks.md)
- [citation PageRank](../measures/citation_pagerank.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; SciSciNet: W1539510218; WoS: unknown]

## Metadata

- Concept ID: `static_citation_edge_lifecycle`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: immutable citation edges; fixed citation link lifecycle; citation edge aging; non-updatable citation links
