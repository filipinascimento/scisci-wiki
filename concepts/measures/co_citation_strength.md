# Co-citation strength

## Summary

Co-citation strength measures how often two earlier works are cited together by later documents, treating repeated joint citation as evidence of perceived intellectual association.

## Canonical Form

- Unit of analysis: pair of cited papers, books, authors, journals, references, or concepts.
- Typical representation: raw co-citation count from a citing-set intersection, normalized association strength, cosine similarity, or weighted edge in a [co-citation](../representations/co_citation.md) network.
- Mechanism or measurement target: downstream community perception of how strongly two prior works belong together.
- Empirical signature: a pair accumulates high co-citation strength when many later documents cite both members of the pair.

## Uses in Science of Science

- Supplies the weighted-edge measure underlying co-citation clusters, [science maps](../representations/science_maps.md), and [research fronts](../mechanisms/research_fronts.md).
- Complements [bibliographic coupling](../representations/bibliographic_coupling.md): co-citation strength is produced by later citing authors, while shared-reference coupling is fixed by focal papers' reference lists.
- Supports novelty and conventionality measures when cited pairs are compared against field-year baselines.
- Helps distinguish direct popularity from relational proximity: two highly cited items are not necessarily strongly co-cited with one another.
- Can be validated against [direct-citation co-citation overlap](../validations/direct_citation_co_citation_overlap.md) and contrasted with [co-citation bibliographic-coupling divergence](../validations/co_citation_bibliographic_coupling_divergence.md).

## Operationalization

- Choose the cited entities and citing corpus.
- For each pair of cited entities, use [citation-index co-citation intersection](../methods/citation_index_co_citation_intersection.md) to count later citing documents that include both entities in their reference lists.
- Normalize if needed with [relative co-citation frequency](relative_co_citation_frequency.md), cosine similarity, association strength, field-size controls, reference-list length controls, or entity-age controls.
- Use the resulting weights as edges for clustering, mapping, or longitudinal comparison.
- For surprising high-weight edges, apply [co-citation edge-context interpretation](../methods/co_citation_edge_context_interpretation.md) before assuming the edge means simple topical similarity.

## Evidence and Validations

- Verified full-text evidence from Small (1973) defines the strength of co-citation between two cited papers or books by scanning citation-index entries and counting identical citing items.
- Small explicitly interprets the measure as a relationship established by citing authors, so it captures perceived association rather than an intrinsic property of the earlier documents.
- Small's formal note defines the raw count as the size of the intersection between the two sets of citing papers and suggests a relative co-citation frequency based on the union denominator.
- The same paper distinguishes co-citation from [bibliographic coupling](../representations/bibliographic_coupling.md): co-citation links cited documents through later use, while bibliographic coupling links source documents through shared references.
- In the particle-physics example, Small represents stronger co-citation relationships as stronger links among key papers and uses a threshold to draw the network.
- Small interprets particular strong edges by reading the cited papers, showing that edge weights sometimes need textual explanation.

## Caveats

- Raw co-citation strength is biased by citation volume, paper age, database coverage, and reference-list length.
- Strong co-citation can reflect method use, review articles, controversy, or textbook canonization, not only topical similarity.
- Sparse or recent literatures may lack enough downstream citing papers for stable estimates.

## Links

- [co-citation](../representations/co_citation.md)
- [citation-index co-citation intersection](../methods/citation_index_co_citation_intersection.md)
- [relative co-citation frequency](relative_co_citation_frequency.md)
- [thresholded co-citation network](../representations/thresholded_co_citation_network.md)
- [citing-community perceived association](../mechanisms/citing_community_perceived_association.md)
- [co-cited core literature](../representations/co_cited_core_literature.md)
- [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md)
- [temporal co-citation drift](../mechanisms/temporal_co_citation_drift.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [key-paper concept proxy](../representations/key_paper_concept_proxy.md)
- [direct-citation co-citation overlap](../validations/direct_citation_co_citation_overlap.md)
- [co-citation bibliographic-coupling divergence](../validations/co_citation_bibliographic_coupling_divergence.md)
- [co-citation edge-context interpretation](../methods/co_citation_edge_context_interpretation.md)
- [research fronts](../mechanisms/research_fronts.md)
- [science maps](../representations/science_maps.md)
- [tail novelty](tail_novelty.md)
- [median conventionality](median_conventionality.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `co_citation_strength`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: co-citation count; co-citation frequency; co-citation association strength; co-citation edge weight
