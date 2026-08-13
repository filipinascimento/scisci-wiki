# Citation-index reverse-lookup prerequisite

## Summary

Co-citation requires an index that can retrieve the later citing set for each earlier work, not just a corpus of reference lists.

## Canonical Form

- Unit of analysis: citation index, cited reference, and citing-document set.
- Typical representation: reverse lookup table from cited work to citing documents.
- Dataset target: infrastructure needed for co-citation reconstruction.
- Empirical signature: each cited work can be resolved to a set of later documents that cite it.

## Uses in Science of Science

- Adds a data-readiness layer to [citation-index co-citation intersection](../methods/citation_index_co_citation_intersection.md).
- Connects co-citation mapping to [citation-index research infrastructure](citation_index_research_infrastructure.md).
- Useful when comparing full cited-reference indexes with article-level reference-list dumps.

## Operationalization

- Audit whether the source supports reverse lookup, cited-reference resolution, citing-document IDs, date coverage, and snapshot provenance.
- Create or materialize cited-work-to-citing-document sets before pairwise intersection.
- Record unresolved reference strings and duplicate cited-work identifiers.

## Evidence and Validations

- Verified full-text evidence from Small (1973) locates each cited paper in the Science Citation Index and scans its list of citing papers.
- This manual workflow makes reverse lookup a prerequisite for co-citation counting.

## Caveats

- A corpus of reference lists can be inverted, but only after reference resolution and source coverage decisions.
- Reverse lookup quality depends on cited-reference normalization.

## Links

- [Citation-index research infrastructure](citation_index_research_infrastructure.md)
- [Full cited-reference indexing](full_cited_reference_indexing.md)
- [Web of Science](web_of_science.md)
- [Citation-index co-citation intersection](../methods/citation_index_co_citation_intersection.md)
- [Citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `citation_index_reverse_lookup_prerequisite`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: co-citation reverse lookup; cited-reference lookup prerequisite; citation index co-citation data requirement
