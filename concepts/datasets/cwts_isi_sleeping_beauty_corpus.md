# CWTS-ISI sleeping-beauty corpus

## Summary

The CWTS-ISI sleeping-beauty corpus is the large citation-index data system used by van Raan to perform the first broad measurement of sleeping beauties across scientific literature.

## Canonical Form

- Unit of analysis: indexed article, publication year, annual citation count, self-citation-excluded citation count, sleeping-period class, or awakening-period class.
- Typical representation: Science Citation Index, Social Science Citation Index, Arts and Humanities Citation Index, and related ISI indexes in a long-window citation-history database.
- Data target: rare delayed-recognition trajectories at scale, including deep sleep, less-deep sleep, and post-sleep awakening intensity.
- Empirical signature: millions of publication records and hundreds of millions of citation links are needed to observe extreme sleeping-beauty cells.

## Uses in Science of Science

- Supplies the original data substrate for [sleeping-beauty threshold grids](../methods/sleeping_beauty_threshold_grid.md), [awakening probability function](../measures/awakening_probability_function.md), and [sleeping-beauty population rarity](../measures/sleeping_beauty_population_rarity.md).
- Extends [Web of Science](web_of_science.md) and [citation-index research infrastructure](citation_index_research_infrastructure.md) into delayed-recognition measurement.
- Provides a historical predecessor to later long-window datasets such as the [APS-WoS sleeping-beauty panel](aps_wos_sleeping_beauty_panel.md).

## Operationalization

- Use a publication-citation database with enough longitudinal depth to observe five- to ten-year sleep periods and a post-sleep awakening window.
- Exclude self-citations when constructing sleep and awakening counts, or document a sensitivity analysis.
- Record the cited-side publication cohort size and the later citing-side opportunity set.
- Preserve source-index scope because SCI, SSCI, AHCI, and related indexes differ in field and document coverage.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) describes a CWTS scientific publication data system with about 20,000,000 articles from 1980 onward and about 300,000,000 citations.
- The paper states that the system is based on the Science Citation Index, Social Science Citation Index, Arts and Humanities Citation Index, and related indexes produced by ISI.
- van Raan uses this corpus to perform approximately `5 * 10^8` citation analyses across sleep-length, sleep-depth, and awakening-intensity cells.
- The paper reports annual publication growth from 656,991 publications in 1980 to 1,046,839 in 2000, motivating [citation-volume growth normalization](../methods/citation_volume_growth_normalization.md).

## Caveats

- The corpus is index-scoped and historical; coverage of books, regional journals, conference proceedings, and non-English literature is incomplete.
- Citation-index backfiles and source coverage can affect old-paper trajectories.
- Later OpenAlex, Dimensions, and WoS snapshots can update identifiers and coverage, but this page describes the specific data substrate used in van Raan's 2004 analysis.

## Links

- [Web of Science](web_of_science.md)
- [citation-index research infrastructure](citation_index_research_infrastructure.md)
- [sleeping-beauty threshold grid](../methods/sleeping_beauty_threshold_grid.md)
- [awakening probability function](../measures/awakening_probability_function.md)
- [sleeping-beauty population rarity](../measures/sleeping_beauty_population_rarity.md)
- [citation-volume growth normalization](../methods/citation_volume_growth_normalization.md)
- [APS-WoS sleeping-beauty panel](aps_wos_sleeping_beauty_panel.md)
- [sleeping beauty](../mechanisms/sleeping_beauty.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; WoS: unknown]

## Metadata

- Concept ID: `cwts_isi_sleeping_beauty_corpus`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: van Raan (2004) (2004)
- Primary reference DOI: `10.1023/B:SCIE.0000018543.82441.F1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: CWTS ISI delayed-recognition corpus; van Raan sleeping-beauty corpus; SCI SSCI AHCI sleeping-beauty data system; historical CWTS citation corpus
