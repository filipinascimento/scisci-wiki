# Conference-proceedings coverage gap

## Summary

The conference-proceedings coverage gap is the validation problem that citation databases differ in whether and how they index conference papers, especially in fields where proceedings are central research outputs.

## Canonical Form

- Unit of analysis: conference paper, proceedings series, database source list, field, citation indicator, or document-type denominator.
- Typical representation: cross-database proceedings coverage comparison, missing-conference audit, or proceedings inclusion rule.
- Validation target: determine whether citation analyses capture field-relevant proceedings literature.
- Empirical signature: important conferences or proceedings records are missing, unevenly indexed, or covered differently across databases.

## Uses in Science of Science

- Specializes [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) for conference-heavy fields.
- Qualifies [citation impact indicators](../measures/citation_impact_indicators.md), [h-index](../measures/h_index.md), and field-normalized measures in computer science, engineering, and related domains.
- Links to [document-type citation filtering](../methods/document_type_citation_filtering.md), because proceedings can be either target outputs or excluded document types depending on the question.
- Pairs with [conference/journal double counting](conference_journal_double_counting.md) when the same work appears in both proceedings and journals.

## Operationalization

- Identify important conference venues for the target field.
- Compare coverage across Web of Science, Scopus, Google Scholar, OpenAlex, Dimensions, and local field databases when feasible.
- Track whether proceedings are indexed as articles, proceedings papers, conference papers, books, or series records.
- Report coverage gaps before interpreting low citation counts or publication counts in conference-heavy fields.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) states that conference proceedings are especially important in computer science and engineering.
- Waltman reports that including proceedings in citation analysis is difficult because little is known about coverage in Web of Science, Scopus, and Google Scholar, and few studies compare the three databases.
- The review notes evidence that Scopus can cover more conference proceedings than Web of Science in human-computer interaction, while Google Scholar can have broader proceedings coverage in library and information science.
- Waltman also cites work observing gaps in Web of Science coverage of important conferences.

## Caveats

- Coverage can differ by field, venue, year, and database index layer.
- Google Scholar may improve recall but introduces transparency and cleaning problems.
- Proceedings coverage should be interpreted with document-type and duplicate-publication rules, not only source counts.

## Links

- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [document-type citation filtering](../methods/document_type_citation_filtering.md)
- [conference/journal double counting](conference_journal_double_counting.md)
- [WoS-Scopus coverage overlap](wos_scopus_coverage_overlap.md)
- [Google Scholar transparency limitations](google_scholar_transparency_limitations.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [Web of Science](../datasets/web_of_science.md)
- [Scopus](../datasets/scopus.md)
- [Google Scholar](../datasets/google_scholar.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `conference_proceedings_coverage_gap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: proceedings coverage gap; conference paper database coverage; conference literature coverage bias; proceedings indexing sensitivity
