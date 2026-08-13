# Undifferentiated archive search

## Summary

Undifferentiated archive search represents a digital journal collection as one searchable corpus of papers rather than as historically arranged journal issues or shelves.

## Canonical Form

- Unit of analysis: digital archive, journal collection, search index, article metadata field, full-text field, or retrieval result.
- Typical representation: all-archive keyword index, relevance/date-ranked results, merged title/abstract/full-text corpus, or platform-wide search space.
- Representation target: collapse journal, issue, shelf, and historical arrangement into a single queryable record set.
- Empirical signature: researchers can search across many journals at once, making direct query retrieval easier than serial issue browsing.

## Uses in Science of Science

- Provides the archive-level representation behind [search-first interface affordance](../mechanisms/search_first_interface_affordance.md).
- Explains why [online search-browse substitution](../mechanisms/online_search_browse_substitution.md) changes exposure: the unit of navigation becomes the archive query, not the journal issue.
- Contrasts with [forced-browsing serendipity](../mechanisms/forced_browsing_serendipity.md), where physical and issue-level arrangement exposes adjacent work.
- Helps design platform experiments that compare all-archive search, within-journal search, issue browsing, citation following, and recommendation paths.

## Operationalization

- Identify which metadata and full-text fields are indexed by the platform.
- Record whether searches run across all available journals or are constrained to a source, issue, discipline, or date window.
- Track result sorting by relevance, date, citation count, or platform-specific rank.
- Compare the cited or downloaded work produced by all-archive search with work found through issue-level browsing.

## Evidence and Validations

- Verified full-text evidence from Evans (2008) contrasts print holdings arranged by journal, topic, and historical order with online archives that allow searching the entire archive of available journals.
- Evans states that when searched as an undifferentiated archive of papers, titles, abstracts, and sometimes full text can be searched by relevance and date.
- The paper argues that richer electronic indexing makes online search the dominant expert discovery mode even when experts still browse in print.
- Evans links this shift to empirical narrowing in reference age, distinct cited sources, and citation concentration after online availability expands.

## Caveats

- Treating an archive as undifferentiated can hide field boundaries, journal context, special issues, and historical sequencing.
- All-archive search can broaden discovery if ranking and query design surface peripheral sources.
- Platform indexes differ in field coverage, full-text availability, metadata quality, and ranking defaults.

## Links

- [search-first interface affordance](../mechanisms/search_first_interface_affordance.md)
- [online search-browse substitution](../mechanisms/online_search_browse_substitution.md)
- [forced-browsing serendipity](../mechanisms/forced_browsing_serendipity.md)
- [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md)
- [CI-FSO online availability panel](../datasets/ci_fso_online_availability_panel.md)
- [online backfile depth](../measures/online_backfile_depth.md)

## References

- Evans, J. A. (2008). Electronic publication and the narrowing of science and scholarship. *Science*, 321(5887), 395-399. https://doi.org/10.1126/science.1150473 [OpenAlex: W2125660293; Dimensions: pub.1062457136; WoS: unknown]

## Metadata

- Concept ID: `undifferentiated_archive_search`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Evans (2008) (2008)
- Latest seen paper: Evans (2008) (2008)
- Primary reference DOI: `10.1126/science.1150473`
- OpenAlex ID: `W2125660293`
- Dimensions ID: `pub.1062457136`
- SciSciNet ID: `W2125660293`
- Aliases: all-archive search; full-archive keyword search; undifferentiated digital archive; corpus-level journal search
