# Science-map source-title spine

## Summary

A science-map source-title spine is the unified set of journals or source titles that defines the publication universe for a journal-based map of science.

## Canonical Form

- Unit of analysis: source title, journal, database-year source list, matched source record, or map version.
- Typical representation: cleaned source-title table with database provenance, source-year coverage, map cluster assignment, and title lookup keys.
- Data target: the source universe from which journal similarities, map coverage, and overlay lookup tables are built.
- Empirical signature: every mapped record can be traced to a source title in a documented source-title spine.

## Uses in Science of Science

- Provides the data spine for [journal similarity mapping](../methods/journal_similarity_mapping.md), [science maps](../representations/science_maps.md), and [science map update workflows](../methods/science_map_update_workflows.md).
- Makes [science-location lookup tables](../methods/science_location_lookup_tables.md) reproducible because the lookup table inherits source-title cleaning and matching decisions.
- Supports coverage comparison across [Web of Science](web_of_science.md), [Scopus](scopus.md), [OpenAlex](openalex.md), and [Dimensions](dimensions.md) source layers.
- Separates source-title coverage from article-volume coverage through [source-title article-volume decoupling](../measures/source_title_article_volume_decoupling.md).
- Helps diagnose [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md) before interpreting map overlays.

## Operationalization

- Extract source titles from each bibliographic database and source year used for the map.
- Normalize source names, abbreviations, ISSNs, and title variants, using [cited journal title normalization](../methods/cited_journal_title_normalization.md) where citation strings are the input.
- Match and unify source titles across databases before computing similarity matrices.
- Record which map version, source years, and database layers each source title supports.
- Preserve unmatched, retired, renamed, and newly added source titles for map update audits.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) describes the original UCSD map as using 7.2 million papers and references from Elsevier Scopus and Thomson Reuters Web of Science.
- The paper reports roughly 15,000 Scopus source titles for 2001-2005 and roughly 9,000 WoS source titles for 2001-2004, unified into about 16,000 unique source titles.
- The updated map adds later WoS and Scopus data, increasing the source-title universe to about 25,000 titles.
- Borner et al. explicitly treat source-title matching and unification as the first step before building journal-journal similarity matrices.

## Caveats

- A source-title spine is not a paper-level field assignment; multidisciplinary journals can still mix several topical distributions.
- Source-title coverage changes over time, so field growth can be confounded with database expansion.
- Current analyses should prefer fresh Dimensions and OpenAlex source metadata when available, while treating older SciSciNet source coverage as auxiliary.

## Links

- [science maps](../representations/science_maps.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [science map update workflows](../methods/science_map_update_workflows.md)
- [source-title article-volume decoupling](../measures/source_title_article_volume_decoupling.md)
- [science-location lookup tables](../methods/science_location_lookup_tables.md)
- [discipline-subdiscipline map hierarchy](../representations/discipline_subdiscipline_map_hierarchy.md)
- [field classifications](../measures/field_classifications.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [Web of Science](web_of_science.md)
- [Scopus](scopus.md)
- [OpenAlex](openalex.md)
- [Dimensions](dimensions.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `science_map_source_title_spine`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: source-title universe; journal spine; map source-title list; unified source titles
