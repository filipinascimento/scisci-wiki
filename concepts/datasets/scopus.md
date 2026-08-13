# Scopus

## Summary

Scopus is a subscription-based multidisciplinary citation database used for publication, source, author, and citation analysis.

## Canonical Form

- Unit of analysis: publication, cited reference, source, author profile, affiliation, field, or citation relation.
- Typical representation: indexed bibliographic metadata and citation links.
- Mechanism or measurement target: scholarly output and citation impact with broad source coverage.
- Empirical signature: broader coverage than Web of Science in several domains, but with database-specific quality and source-selection issues.

## Uses in Science of Science

- Provides a source layer for [citation impact indicators](../measures/citation_impact_indicators.md), [field-normalized citation impact](../measures/field_normalized_citation_impact.md), and bibliometric evaluation.
- Serves as a comparison database for [Web of Science](web_of_science.md), [Google Scholar](google_scholar.md), [OpenAlex](openalex.md), and [Dimensions](dimensions.md).
- Makes [WoS-Scopus coverage overlap](../validations/wos_scopus_coverage_overlap.md) and [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md) explicit when source choice affects results.
- Can be accessed through [citation database web-interface access](../methods/citation_database_web_interface_access.md), [full-database bibliometric access](../methods/full_database_bibliometric_access.md), or Scopus-based tools such as SciVal.

## Operationalization

- Record the Scopus snapshot or extraction date, access route, source list or subject filter, document types, fields, and citation census date.
- Track whether the analysis uses all Scopus records or a deliberately restricted subset.
- Audit DOI fields, author identifiers, duplicate records, missing citation links, and document-type coding when indicators are sensitive to those fields.
- In cross-database comparisons, align years, publication types, source categories, and citation windows before comparing indicator values.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) identifies Scopus, Web of Science, and Google Scholar as the three most important databases for citation analysis.
- Waltman describes Scopus as subscription-based, Elsevier-owned, launched in 2004, and covering journals, trade publications, book series, conference proceedings, and books.
- Waltman reviews Scopus-specific data-quality concerns including incorrect DOIs, author identifier accuracy, duplicate publications, missing citation relations, journal classification differences, and DOI availability.
- The review reports that Scopus often has broader coverage than Web of Science, especially for conference proceedings and several fields, and that Scopus citation counts often exceed Web of Science counts.
- Waltman also warns that broader Scopus coverage can change evaluation denominators because Scopus-only journals may be more nationally oriented or lower impact in some fields.

## Caveats

- Broader coverage is not automatically better for every evaluation question.
- Coverage, metadata quality, and source lists change over time, so older comparison studies may be stale.
- Subscription and access-mode constraints can limit reproducibility.
- Scopus-based results should not be mixed with Web of Science, Google Scholar, OpenAlex, or Dimensions results without source-provenance and coverage checks.

## Links

- [Web of Science](web_of_science.md)
- [Google Scholar](google_scholar.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [WoS-Scopus coverage overlap](../validations/wos_scopus_coverage_overlap.md)
- [citation database web-interface access](../methods/citation_database_web_interface_access.md)
- [full-database bibliometric access](../methods/full_database_bibliometric_access.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation data census dates](../methods/citation_data_census_dates.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `scopus`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: Elsevier Scopus; Scopus citation database; Scopus index
