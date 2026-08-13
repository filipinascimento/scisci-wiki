# Selective core-journal coverage

## Summary

Selective core-journal coverage is the source-construction method of indexing a curated set of influential journals rather than attempting to cover every scholarly source equally.

## Canonical Form

- Unit of analysis: journal, source title, citation index, field, regional source, or source-selection rule.
- Typical representation: curated source list, core journal set, selection criteria, coverage manifest, or source-selection audit.
- Method target: balance high-quality citation indexing and broad scientific coverage under practical constraints.
- Empirical signature: a relatively small core of journals supplies a large share of cross-field citations, while regional and local journals require explicit expansion choices.

## Uses in Science of Science

- Explains the source-design logic behind [Web of Science](../datasets/web_of_science.md) and [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md).
- Supplies historical context for [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md).
- Connects to [Bradford-Lotka elite-zone law](bradford_lotka_elite_zone_law.md) and [citation-based source selection](citation_based_source_selection.md).
- Helps interpret source-list differences across [Scopus](../datasets/scopus.md), [OpenAlex](../datasets/openalex.md), [Dimensions](../datasets/dimensions.md), and [Google Scholar](../datasets/google_scholar.md).

## Operationalization

- Define source-selection criteria, covered journals, field balance, language coverage, regional coverage, and update rules.
- Preserve source-title inclusion and exclusion histories when reconstructing longitudinal corpora.
- Report whether local, regional, emerging, conference, book, and non-English sources are inside or outside the core.
- Compare indicators under core-only and expanded-coverage source sets.
- Treat coverage expansion as a methodological change, not only a data-volume change.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) describes the Science Citation Index and later Web of Science as selective citation indexes.
- The paper attributes early source selection to Garfield's focus on internationally influential journals, informed by Bradford's Law of Scattering and Garfield's Law of Concentration.
- Birkle et al. note that the original Science Citation Index covered about 700 journals, expanded rapidly, and later retained selectivity even as computing and dissemination costs changed.
- The paper also describes later expansion through the Emerging Sources Citation Index to improve coverage of influential local and regional research while maintaining balance across subjects and regions.

## Caveats

- Selective source coverage improves curation and historical continuity but can underrepresent local, regional, non-English, book, and conference outputs.
- Coverage expansion can alter time trends if new sources are compared directly with older core-only snapshots.
- Core-source selection should not be mistaken for a complete census of science.

## Links

- [Web of Science](../datasets/web_of_science.md)
- [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [science map coverage expansion audit](../validations/science_map_coverage_expansion_audit.md)
- [citation-based source selection](citation_based_source_selection.md)
- [Bradford-Lotka elite-zone law](bradford_lotka_elite_zone_law.md)
- [journal citation frequency](../measures/journal_citation_frequency.md)
- [source-journal selection efficiency](../measures/source_journal_selection_efficiency.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `selective_core_journal_coverage`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: curated core source coverage; selective citation-index coverage; core journal source selection; influential-journal indexing
