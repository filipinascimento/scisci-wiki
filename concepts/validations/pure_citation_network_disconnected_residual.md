# Pure citation-network disconnected residual

## Summary

Pure citation-network disconnected residual is the small but important set of papers that cannot be reached through citation edges because they neither cite prior indexed work nor receive citations from later indexed work.

## Canonical Form

- Unit of analysis: paper, citation-network node, field corpus, uncited paper, no-reference paper, or disconnected component.
- Typical representation: lower-bound share of papers disconnected in a directed citation network.
- Validation target: identify the residual literature that citation-only retrieval and mapping cannot see.
- Empirical signature: papers with no outgoing references and no incoming citations form isolated nodes in a pure citation graph.

## Uses in Science of Science

- Adds a coverage caveat to [citation networks](../representations/citation_networks.md) and [citation-index research infrastructure](../datasets/citation_index_research_infrastructure.md).
- Links [uncited-paper mass](../measures/uncited_paper_mass.md) to graph reachability rather than only impact counting.
- Explains why topical indexing, text search, subject classification, and metadata search remain necessary even with citation indexes.
- Provides a diagnostic for citation-only knowledge maps, recommender systems, and historical specialty reconstructions.

## Operationalization

- Define a citation-network corpus with indexed references and citations.
- Count papers with no outgoing indexed references and no incoming indexed citations.
- Report the residual as a lower bound, because missing references and database truncation can inflate apparent isolation.
- Inspect whether residual nodes concentrate in document types, languages, journals, fields, or early database years.
- Preserve isolated nodes in network summaries instead of silently dropping them.

## Evidence and Validations

- Verified full-text evidence from Price (1965) reasons that if about 10% of papers contain no bibliographic references and about 10% are never cited, an independent-overlap calculation implies a lower bound near 1% disconnected in a pure citation network.
- Price argues that this residual would be found only through topical indexing or similar non-citation methods.
- The same discussion treats the residual as small relative to the full scientific literature, but still methodologically important for retrieval.
- The paper's argument distinguishes total citation-network connectedness from complete document discoverability.

## Caveats

- The 1% figure is an early conjectural lower bound, not a modern universal estimate.
- No outgoing or incoming citation edges can reflect database coverage, reference indexing policy, source type, or OCR failure rather than intellectual isolation.
- Disconnected nodes may still be connected through text, authorship, funding, institution, data, software, or informal knowledge flows.

## Links

- [citation networks](../representations/citation_networks.md)
- [citation-index research infrastructure](../datasets/citation_index_research_infrastructure.md)
- [uncited-paper mass](../measures/uncited_paper_mass.md)
- [reference-citation balance](../representations/reference_citation_balance.md)
- [annual citation-incidence distribution](../measures/annual_citation_incidence_distribution.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [field classifications](../measures/field_classifications.md)

## References

- Price, D. J. de Solla. (1965). Networks of scientific papers. *Science*, 149(3683), 510-515. https://doi.org/10.1126/science.149.3683.510 [OpenAlex: W2088209891; Dimensions: pub.1062485810; WoS: unknown]

## Metadata

- Concept ID: `pure_citation_network_disconnected_residual`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Price (1965) (1965)
- Latest seen paper: Price (1965) (1965)
- Primary reference DOI: `10.1126/science.149.3683.510`
- OpenAlex ID: `W2088209891`
- Dimensions ID: `pub.1062485810`
- SciSciNet ID: `W2088209891`
- Aliases: citation-network isolates; disconnected citation residual; no-reference no-citation nodes; topical-indexing residual
