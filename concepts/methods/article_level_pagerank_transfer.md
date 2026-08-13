# Article-level PageRank transfer

## Summary

PageRank-style prestige ranking can be transferred from journal-level citation flows to individual papers on a publication citation graph.

## Canonical Form

- Unit of analysis: journal, paper, citation edge, PageRank score, venue ranking, or article ranking.
- Typical representation: method transfer from journal citation graph to article citation graph.
- Mechanism, measurement, or validation target: article-level adaptation of recursive citation prestige.
- Empirical signature: journal nodes and journal-journal flows are replaced by article nodes and article-to-article citation edges..

## Uses in Science of Science

- Refines citation-ranking method by linking it to [citation pagerank](../measures/citation_pagerank.md) and [journal citation network mapping](../representations/journal_citation_network_mapping.md).
- Useful as a reusable check when [journal citation frequency](../measures/journal_citation_frequency.md) is interpreted from citation histories.
- Adds cross-links to [citation based source selection](citation_based_source_selection.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- Replace journal nodes and journal-journal citation flows with article nodes and article-to-article citation edges.
- Compute PageRank over papers rather than venues.
- Compare the article-level result with raw citations and journal-level prestige analogs.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) positions the paper after PageRank-style journal impact-factor work and explicitly shifts the target to individual Physical Review publications.
- The motif records the methodological transfer from venue rankings to publication rankings.

## Caveats

- Article-level PageRank is more sensitive to reference-list length, citation-window boundaries, and anomalous individual edges than journal-level ranking.
- The transfer requires a high-quality article citation graph.

## Links

- [Citation PageRank](../measures/citation_pagerank.md)
- [Journal citation network mapping](../representations/journal_citation_network_mapping.md)
- [Journal citation frequency](../measures/journal_citation_frequency.md)
- [Citation-based source selection](citation_based_source_selection.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; SciSciNet: W1539510218; WoS: unknown]

## Metadata

- Concept ID: `article_level_pagerank_transfer`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: paper-level PageRank transfer; journal-to-article prestige ranking; article citation PageRank adaptation
