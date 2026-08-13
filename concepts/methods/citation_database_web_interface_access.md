# Citation Database Web-Interface Access

## Summary

Citation database web-interface access is the method of collecting bibliometric records and citation counts through a database's interactive search and export interface.

## Canonical Form

- Unit of analysis: query session, search result, export file, citation report, author profile, or downloaded record batch.
- Typical representation: query log, exported records, result-count screenshot, citation report, or platform provenance note.
- Method target: make small-scale or exploratory citation analysis possible through institutional or public web access.
- Empirical signature: feasible manual or semi-manual extraction with interface restrictions on scale, fields, export volume, and reproducibility.

## Uses in Science of Science

- Provides the basic access route for many institutional uses of [Web of Science](../datasets/web_of_science.md), [Scopus](../datasets/scopus.md), and [Google Scholar](../datasets/google_scholar.md).
- Serves as a lightweight alternative to [full-database bibliometric access](full_database_bibliometric_access.md) when the study is small or exploratory.
- Should be documented through [bibliometric data access modes](bibliometric_data_access_modes.md), [citation data census dates](citation_data_census_dates.md), and [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md).
- Provides a reproducibility boundary for Google Scholar work because Google Scholar does not offer direct full-database access.

## Operationalization

- Record the database, interface, account or entitlement type, query string, filters, date, result count, export format, and platform-imposed limits.
- Store exported records and any manual cleaning or merge rules.
- Record whether citation counts come from a live interface, an exported field, or a platform analytics report.
- Avoid treating web-interface outputs as full-database extracts unless the interface explicitly supports that scope.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) states that institutions with Web of Science or Scopus subscriptions usually access these databases through a web interface.
- Waltman notes that Web of Science and Scopus web interfaces can support simple citation analyses at a relatively small scale.
- The same review states that Google Scholar can only be accessed through its web interface and does not provide direct full-database access.
- Waltman mentions Publish or Perish as a tool sometimes used for Google Scholar-based citation analyses, making software-assisted web-interface collection part of the access-mode landscape.

## Caveats

- Web interfaces can impose result limits, field limits, export limits, throttling, and undocumented ranking or deduplication behavior.
- Reproducibility can be weak when search results and citation counts update continuously.
- Interface access is not a substitute for direct full-database access when denominator control, large-scale linkage, or complete citation graphs are required.

## Links

- [bibliometric data access modes](bibliometric_data_access_modes.md)
- [full-database bibliometric access](full_database_bibliometric_access.md)
- [Web of Science](../datasets/web_of_science.md)
- [Scopus](../datasets/scopus.md)
- [Google Scholar](../datasets/google_scholar.md)
- [Google Scholar transparency limitations](../validations/google_scholar_transparency_limitations.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [citation data census dates](citation_data_census_dates.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `citation_database_web_interface_access`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: platform web access; citation database web export; search-interface bibliometrics
