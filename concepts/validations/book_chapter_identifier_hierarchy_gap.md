# Book-chapter identifier hierarchy gap

## Summary

Book-chapter identifier hierarchy gap is the problem that chapter-level identifiers may not reliably connect to parent-book identifiers, making aggregation and coverage checks difficult.

## Canonical Form

- Unit of analysis: book, book chapter, DOI, ISBN, source record, or parent-child publication relation.
- Typical representation: chapter DOI, book DOI, ISBN, source-title field, and hierarchy link.
- Validation target: prevent book chapters from being double counted, orphaned, or incorrectly aggregated in publication and citation analyses.
- Empirical signature: DOI-bearing chapter records exist without reliable links to the containing book record.

## Uses in Science of Science

- Extends [doi denominator coverage bias](doi_denominator_coverage_bias.md) from simple DOI presence to identifier hierarchy completeness.
- Supports [Dimensions publication data spine](../datasets/dimensions_publication_data_spine.md), [scholarly identifier spine](../representations/scholarly_identifier_spine.md), and [research-ready table curation](../methods/research_ready_table_curation.md).
- Matters for humanities, social sciences, edited-volume fields, and other domains where books and chapters are first-class research outputs.
- Helps document source-specific differences before comparing Dimensions, OpenAlex, WoS Book Citation Index, or library-derived records.

## Operationalization

- Store chapter-level and parent-book identifiers separately.
- Audit the share of chapter records with book DOI, ISBN, source-title, publisher, and volume metadata.
- Decide whether the analysis counts chapters, books, or both, and document the deduplication rule.
- Recalculate publication and citation counts after resolving parent-child relationships.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) notes that Dimensions contains substantial book and book-chapter information.
- The paper identifies the lack of an easy route from a chapter DOI to the DOI of the containing book as a remaining normalization challenge.

## Caveats

- A valid chapter DOI does not guarantee a valid parent-book link.
- Aggregating chapters into books can erase chapter-level authorship and citation information.
- Counting both parent books and chapters can inflate output counts if the hierarchy is not explicit.

## Links

- [doi denominator coverage bias](doi_denominator_coverage_bias.md)
- [Dimensions](../datasets/dimensions.md)
- [Dimensions publication data spine](../datasets/dimensions_publication_data_spine.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)
- [external identifier registry authority](external_identifier_registry_authority.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `book_chapter_identifier_hierarchy_gap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: chapter parent-book DOI gap; book-chapter hierarchy caveat; parent publication identifier gap; chapter DOI aggregation gap
