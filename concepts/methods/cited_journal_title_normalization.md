# Cited journal title normalization

## Summary

Cited journal title normalization is the data-cleaning method of consolidating journal-title variants, abbreviations, translations, sections, and title changes before counting journal citations or constructing journal citation networks.

## Canonical Form

- Unit of analysis: cited journal title, title variant, abbreviation, translated journal, section, supplement, or citation record.
- Typical representation: authority table mapping raw cited-title strings to canonical journal titles.
- Method target: prevent journal citation counts and rankings from being split or merged by inconsistent bibliographic strings.
- Empirical signature: many raw cited-title strings collapse into fewer canonical journals after normalization.

## Uses in Science of Science

- Supplies the data-cleaning layer behind [journal citation frequency](../measures/journal_citation_frequency.md), [cited journal citation profile](../representations/cited_journal_citation_profile.md), and [journal citation network mapping](../representations/journal_citation_network_mapping.md).
- Makes [citation-based source selection](citation_based_source_selection.md) auditable by documenting how source titles were merged.
- Connects journal-level analysis to broader [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md).

## Operationalization

- Build a canonical journal-title authority file with abbreviations, ISSNs where available, title histories, sections, supplements, and translations.
- Map raw cited-title strings to canonical titles before aggregation.
- Record ambiguous strings separately when multiple journals share the same abbreviation.
- Keep reversible mappings so alternative decisions about title changes, sections, or translations can be rerun.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) reports more than 100,000 different abbreviations for 12,000 individual journal titles in a three-month SCI citation sample.
- Garfield describes cases where the same abbreviation referred to multiple different journals and where ambiguity could not be resolved without disproportionate cost.
- The paper states that variants of the same titles and abbreviations were standardized and that arbitrary decisions were made about sections, translations, title changes, absorbed journals, and supplements.
- Garfield also notes that raw citation data could later be manipulated to distinguish changed titles, sections, and translations when needed.

## Caveats

- Normalization choices can materially change journal ranks, network edges, and field coverage.
- Ambiguous abbreviations should not be silently forced into a single title when evidence is weak.
- Historical title changes, translations, and supplements often require domain expertise beyond string matching.

## Links

- [journal citation frequency](../measures/journal_citation_frequency.md)
- [cited journal citation profile](../representations/cited_journal_citation_profile.md)
- [source journal reference profile](../representations/source_journal_reference_profile.md)
- [journal citation network mapping](../representations/journal_citation_network_mapping.md)
- [citation-based source selection](citation_based_source_selection.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]

## Metadata

- Concept ID: `cited_journal_title_normalization`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Garfield (1972) (1972)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: journal title authority control; cited-title standardization; journal abbreviation normalization; cited journal name disambiguation
