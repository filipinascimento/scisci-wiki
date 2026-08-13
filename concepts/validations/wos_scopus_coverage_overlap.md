# WoS-Scopus Coverage Overlap

## Summary

WoS-Scopus coverage overlap is the validation task of measuring which publications, sources, fields, and citation links are shared or unique across Web of Science and Scopus.

## Canonical Form

- Unit of analysis: publication, journal, conference proceeding, source category, institution, country, field, or citation relation.
- Typical representation: matched and unmatched record sets, coverage-overlap rates, citation-count comparisons, rank correlations, or field-specific discrepancy tables.
- Validation target: determine whether Web of Science and Scopus yield comparable publication sets and citation indicators.
- Empirical signature: high overlap for some large units but meaningful divergence for fields, small units, conference proceedings, regional journals, and source-level denominators.

## Uses in Science of Science

- Specializes [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) for the most common proprietary database comparison.
- Qualifies indicators computed from [Web of Science](../datasets/web_of_science.md) or [Scopus](../datasets/scopus.md).
- Supports [reference set construction](../methods/reference_set_construction.md), [field-normalized citation impact](../measures/field_normalized_citation_impact.md), and [responsible metrics](../measures/responsible_metrics.md) by making the database denominator visible.
- Helps decide whether a Scopus subset, a WoS subset, or a cross-database reconciliation is appropriate for the evaluation question.

## Operationalization

- Match records by DOI, title, source, year, and author metadata when possible.
- Compare overlap by field, document type, language, source, and unit size.
- Report both coverage overlap and indicator sensitivity, because similar rankings can hide different publication denominators.
- Separate country- or field-level robustness from small-unit robustness.
- Track the database snapshot date because both databases change their coverage and matching algorithms.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) reports that Visser and Moed matched Scopus and Web of Science records and found that 97% of 2005 Web of Science publications were also covered by Scopus.
- Waltman reviews multiple studies showing that Scopus often has broader source coverage than Web of Science, including conference proceedings, social sciences, humanities, engineering, technology, and science, technology, and medicine journals.
- Waltman also notes reciprocal gaps: each database can contain publications not indexed by the other.
- The review reports that both Web of Science and Scopus underrepresent social sciences, arts, humanities, and non-English or regional journals.
- The underrepresentation of books, local-language journals, and regional SSH outputs is split out as [SSH bibliometric coverage gap](ssh_bibliometric_coverage_gap.md).
- Waltman describes mixed sensitivity findings: country-level Web of Science and Scopus results are often highly correlated, while journals, conference proceedings, institutions, departments, and other smaller units can differ substantially.
- Scopus citation counts tend to be higher than Web of Science citation counts, making direct indicator comparisons source-dependent.

## Caveats

- Coverage overlap is field- and year-specific.
- High overlap for publications does not imply identical reference coverage, citation links, source classifications, or citation counts.
- Broader Scopus coverage can lower average impact for some units if added records are lower-cited or more nationally oriented.
- Older comparison results can become stale as both databases evolve.

## Links

- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [Web of Science](../datasets/web_of_science.md)
- [Scopus](../datasets/scopus.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [reference set construction](../methods/reference_set_construction.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [bibliographic database staleness caveat](bibliographic_database_staleness_caveat.md)
- [SSH bibliometric coverage gap](ssh_bibliometric_coverage_gap.md)
- [conference-proceedings coverage gap](conference_proceedings_coverage_gap.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `wos_scopus_coverage_overlap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: Web of Science Scopus overlap; WoS Scopus comparison; proprietary citation database overlap
