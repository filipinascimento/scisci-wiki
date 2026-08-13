# Cited journal citation profile

## Summary

A cited journal citation profile represents each cited journal by who cites it, how often, and how cited references distribute across publication years.

## Canonical Form

- Unit of analysis: cited journal title within a source citation index.
- Typical representation: cited journal row with total received citations, cited-year distribution, and citing-journal breakdown.
- Mechanism or measurement target: the age structure and source composition of attention received by a journal.
- Empirical signature: journals differ in whether their citations come from many weakly connected sources, a few strong citing journals, recent issues, or older archival literature.

## Uses in Science of Science

- Adds structure to raw [journal citation frequency](../measures/journal_citation_frequency.md) by showing where a journal's citations come from.
- Provides a journal-level projection of [citation networks](citation_networks.md) and a building block for [journal citation network mapping](journal_citation_network_mapping.md).
- Supplies cited-age evidence for [citation-age backfile retention](../methods/citation_age_backfile_retention.md).
- Helps interpret [journal impact factor](../measures/journal_impact_factor.md) by separating total count, citing-source concentration, and cited-age profile.

## Operationalization

- Normalize cited journal titles with [cited journal title normalization](../methods/cited_journal_title_normalization.md) and merge agreed title variants.
- For each cited journal, count total received citations in the selected source set and window.
- Split received citations by cited publication year or age.
- Tabulate citing journals, optionally thresholding low-frequency citing journals into an "all other" category.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) describes a second SCI-derived listing that gives a detailed citation history for each cited title, with citation totals and subtotals by publication year.
- Garfield also reports a breakdown of how frequently each SCI-covered journal cited the title, and a figure that identifies citing journals referring to a cited journal at least five times while grouping lower-frequency sources.
- This profile turns a journal's raw citation total into a more interpretable age-and-source representation.
- Garfield later uses the chronological distribution of cited items as evidence for journal-specific backfile and retention decisions.
- Comparing this inward profile with the outward [source journal reference profile](source_journal_reference_profile.md) supports [citing-cited journal asymmetry](../measures/citing_cited_journal_asymmetry.md).

## Caveats

- Thresholding small citing sources simplifies the profile but can hide diffuse cross-field attention.
- Abbreviation, translation, section, merger, and title-change decisions can alter cited-journal profiles.
- Profiles are only as complete as the source journal set used to collect references.

## Links

- [journal citation frequency](../measures/journal_citation_frequency.md)
- [cited journal title normalization](../methods/cited_journal_title_normalization.md)
- [citation-age backfile retention](../methods/citation_age_backfile_retention.md)
- [source journal reference profile](source_journal_reference_profile.md)
- [citing-cited journal asymmetry](../measures/citing_cited_journal_asymmetry.md)
- [journal citation network mapping](journal_citation_network_mapping.md)
- [citation networks](citation_networks.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]

## Metadata

- Concept ID: `cited_journal_citation_profile`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Garfield (1972) (1972)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: cited-journal profile; journal citation history; citing-source profile; cited-title profile
