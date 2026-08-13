# SCI journal citation report listings

## Summary

SCI journal citation report listings are Science Citation Index-derived journal-citation extracts that tabulate cited-title counts, cited-title histories, and source-journal reference profiles.

## Canonical Form

- Unit of analysis: cited journal title, source journal, reference, citation year, cited-item year, or listing table.
- Typical representation: cited-title frequency table, citation-history table, and source-journal reference table.
- Dataset target: reusable journal-level citation data for source selection, journal evaluation, and journal-network mapping.
- Empirical signature: the same quarterly citation sample can be reorganized by cited title or by citing source journal.

## Uses in Science of Science

- Provides a historical data wrapper for [Web of Science](web_of_science.md) and [citation-index research infrastructure](citation_index_research_infrastructure.md).
- Supplies source data for [journal citation frequency](../measures/journal_citation_frequency.md), [cited journal citation profile](../representations/cited_journal_citation_profile.md), and [source journal reference profile](../representations/source_journal_reference_profile.md).
- Supports [journal citation network mapping](../representations/journal_citation_network_mapping.md).
- Connects early SCI products to later [JCR 2006 journal citation network](jcr_2006_journal_citation_network.md) and [WoS analytics product integrations](wos_analytics_product_integrations.md).

## Operationalization

- Extract references from a defined SCI source-journal and time-window sample.
- Aggregate references by cited title and cited-item year.
- Build a cited-title history table with source-journal breakdowns.
- Build a source-journal profile table with cited-title frequencies and cited-year breakdowns.
- Publish the table definitions with the source journal set and citation-window metadata.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) describes extracting references from the last quarter of 1969 across SCI-covered journals.
- Garfield reports three listings: an accumulation of cited-title counts, a detailed citation history for each cited title, and a source-journal-organized reference listing.
- The listings are framed as a new view of scientific journal information-transfer networks.

## Caveats

- The sample is time-windowed and source-set dependent.
- Cited-title normalization and journal title changes affect table quality.
- A historical listing product is not equivalent to a complete modern WoS or JCR panel.

## Links

- [Web of Science](web_of_science.md)
- [citation-index research infrastructure](citation_index_research_infrastructure.md)
- [journal citation frequency](../measures/journal_citation_frequency.md)
- [cited journal citation profile](../representations/cited_journal_citation_profile.md)
- [source journal reference profile](../representations/source_journal_reference_profile.md)
- [journal citation network mapping](../representations/journal_citation_network_mapping.md)
- [JCR 2006 journal citation network](jcr_2006_journal_citation_network.md)
- [WoS analytics product integrations](wos_analytics_product_integrations.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; SciSciNet: W2053549370; WoS: unknown]

## Metadata

- Concept ID: `sci_journal_citation_report_listings`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Garfield (1972) (1972)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: SCI journal citation listings; journal citation report tables; cited-title source-journal listings; SCI cited-title histories
