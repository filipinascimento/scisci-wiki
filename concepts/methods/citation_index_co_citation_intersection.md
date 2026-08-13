# Citation-index co-citation intersection

## Summary

Citation-index co-citation intersection is the procedural method of finding two cited documents in a citation index, retrieving their citing-document sets, and counting the overlap.

## Canonical Form

- Unit of analysis: pair of cited documents, books, papers, authors, journals, or references.
- Typical representation: two citing-document sets and their intersection count.
- Mechanism or measurement target: observable joint later use of two prior works.
- Empirical signature: the same citing document appears in both cited items' citation-index lists.

## Uses in Science of Science

- Supplies the audit trail for [co-citation strength](../measures/co_citation_strength.md).
- Converts citation-index records into pairwise edges for [co-citation](../representations/co_citation.md) networks and [specialty co-citation mapping](specialty_co_citation_mapping.md).
- Follows candidate generation steps such as [co-citation cycling seed expansion](co_citation_cycling_seed_expansion.md) when the cited-paper set is not known in advance.
- Supports normalized follow-on measures such as [relative co-citation frequency](../measures/relative_co_citation_frequency.md).
- Gives a database-native way to construct [co-cited core literature](../representations/co_cited_core_literature.md) and retrieval profiles.
- Makes data-source coverage and cited-reference matching explicit when moving from historical SCI workflows to Dimensions, OpenAlex, WoS, or other citation indexes.

## Operationalization

- Select two cited entities with resolved identifiers.
- Retrieve the set `A` of later documents that cite the first entity and the set `B` of later documents that cite the second entity.
- Harmonize citing-document identifiers, deduplicate records, and apply any time-window or source-index filter.
- Count the overlap `A intersection B`; this is the raw co-citation frequency.
- Store the citation-index snapshot, source database, cited-reference resolution rule, and time window for reproducibility.

## Evidence and Validations

- Verified full-text evidence from Small (1973) describes locating each of two papers in the Science Citation Index citation-index section and scanning the citing-paper lists.
- Small defines the strength of co-citation as the number of identical citing items found across those two lists.
- The same paper's formal note defines co-citation frequency with set notation: if `A` is the set of papers citing document `a` and `B` is the set citing document `b`, the number of elements in `A intersection B` is the co-citation frequency.
- This method is the operational bridge from a citation index to [thresholded co-citation networks](../representations/thresholded_co_citation_network.md).
- In Small's particle-physics example, the pairwise intersection step is applied after cycling has selected the candidate cluster.

## Caveats

- Results depend on citation-index coverage, cited-reference disambiguation, and whether books, proceedings, preprints, or non-source items are indexed.
- Recent papers may have unstable intersections because there has not been enough time for later citing documents to accumulate.
- Duplicate citing records or merged/split cited works can inflate or deflate the intersection.

## Links

- [co-citation](../representations/co_citation.md)
- [co-citation strength](../measures/co_citation_strength.md)
- [relative co-citation frequency](../measures/relative_co_citation_frequency.md)
- [thresholded co-citation network](../representations/thresholded_co_citation_network.md)
- [co-cited core literature](../representations/co_cited_core_literature.md)
- [specialty co-citation mapping](specialty_co_citation_mapping.md)
- [co-citation secondary indexing](co_citation_secondary_indexing.md)
- [co-citation cycling seed expansion](co_citation_cycling_seed_expansion.md)
- [citation-index research infrastructure](../datasets/citation_index_research_infrastructure.md)
- [full cited-reference indexing](../datasets/full_cited_reference_indexing.md)
- [Web of Science](../datasets/web_of_science.md)
- [Dimensions](../datasets/dimensions.md)
- [OpenAlex](../datasets/openalex.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `citation_index_co_citation_intersection`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: SCI co-citation scan; citing-list intersection; co-citation set intersection; citation-index overlap count
