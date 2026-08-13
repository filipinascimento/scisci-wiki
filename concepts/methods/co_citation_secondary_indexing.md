# Co-citation secondary indexing

## Summary

Co-citation secondary indexing is an information-retrieval method that uses highly co-cited papers as additional entry points for searching citation indexes.

## Canonical Form

- Unit of analysis: cited paper, co-cited paper pair, citation-index entry, query session, or specialty corpus.
- Typical representation: secondary index keyed by highly co-cited papers or co-citation neighborhoods.
- Mechanism or measurement target: retrieval expansion through documents that later authors repeatedly associate with the initial query item.
- Empirical signature: a user can move from one cited entry point to co-cited entry points and retrieve additional recent documents at each step.

## Uses in Science of Science

- Turns [co-citation](../representations/co_citation.md) from a descriptive map into a search workflow.
- Provides an early document-neighborhood analogue of scholarly recommender systems.
- Helps build specialty corpora around related key papers rather than a single seed paper.
- Connects citation-index navigation to later similarity-based recommendation, field-normalization, and research-front monitoring workflows.

## Operationalization

- Build a co-citation matrix among candidate cited papers.
- Select highly co-cited neighbors for a focal seed paper or literature core.
- Expose those neighbors as secondary citation-index entry points.
- Retrieve newer documents that cite each co-cited entry point, then iterate or filter by field, year, and citation context.

## Evidence and Validations

- Verified full-text evidence from Small (1973) proposes a secondary index based on highly co-cited papers.
- The proposed index would support sequential searching through a citation index by retrieving new documents at each co-cited entry point.
- This makes co-citation a method for literature discovery, not only a measure of intellectual association.

## Caveats

- Sequential expansion can drift toward high-degree general-method papers unless thresholds and topical filters are used.
- Recent or sparse literatures may not have enough co-citations to support stable secondary entry points.
- Co-cited papers can be associated through controversy, shared methods, or canonical background rather than direct topical substitutability.

## Links

- [co-citation](../representations/co_citation.md)
- [co-citation strength](../measures/co_citation_strength.md)
- [co-cited core literature](../representations/co_cited_core_literature.md)
- [specialty co-citation mapping](specialty_co_citation_mapping.md)
- [key-paper concept proxy](../representations/key_paper_concept_proxy.md)
- [citation networks](../representations/citation_networks.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [citation triplet supervision](citation_triplet_supervision.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `co_citation_secondary_indexing`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: secondary co-citation index; co-cited entry-point search; sequential co-citation search; co-citation retrieval expansion
