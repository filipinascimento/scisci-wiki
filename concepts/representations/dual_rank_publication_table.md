# Dual-rank publication table

## Summary

A ranked-table representation places PageRank score and rank beside citation count and rank for interpretive comparison.

## Canonical Form

- Unit of analysis: paper, Google rank, Google number, citation rank, citation count, venue, year, author, or title.
- Typical representation: publication-level crosswalk table over PageRank and citation metrics.
- Mechanism, measurement, or validation target: inspection of rank divergence between recursive prestige and citation volume.
- Empirical signature: side-by-side rank tables make hidden-gem and anomaly comparisons auditable..

## Uses in Science of Science

- Refines Citation PageRank representation by linking it to [pagerank citation rank divergence](../measures/pagerank_citation_rank_divergence.md) and [google number](../measures/google_number.md).
- Useful as a reusable check when [citation pagerank hidden gems](../validations/citation_pagerank_hidden_gems.md) is interpreted from citation histories.
- Adds cross-links to [physical review citation network](../datasets/physical_review_citation_network.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- Store google rank, Google number, citation rank, citation count, venue, year, title, and authors for each ranked paper.
- Derive rank gaps, ratios, and top-k overlap from the table.
- Use the table as an interpretive artifact rather than only a computed metric output.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) presents top PageRank papers with citation ranks and counts in Tables 1 and 2.
- Those tables enable comparisons such as Cabibbo, Kohn-Sham, Slater, and top-100 anomalies.

## Caveats

- Rank tables can imply excessive precision.
- Truncation to top-k lists hides denominator size, near-tie uncertainty, and lower-ranked behavior.

## Links

- [PageRank-citation rank divergence](../measures/pagerank_citation_rank_divergence.md)
- [Google number](../measures/google_number.md)
- [Citation PageRank hidden gems](../validations/citation_pagerank_hidden_gems.md)
- [Physical Review citation network](../datasets/physical_review_citation_network.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; SciSciNet: W1539510218; WoS: unknown]

## Metadata

- Concept ID: `dual_rank_publication_table`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: PageRank-citation crosswalk table; dual metric rank table; Google-rank citation-rank table; publication rank comparison table
