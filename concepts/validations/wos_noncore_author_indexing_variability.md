# WoS non-core author-indexing variability

## Summary

Author coverage is complete for WoS Core Collection but varies across other platform resources, so author and team analyses need collection-specific checks.

## Canonical Form

- Unit of analysis: WoS record, author field, affiliation link, collection, or team-analysis denominator.
- Typical representation: author-field availability matrix by WoS source collection.
- Mechanism, measurement, or validation target: source-coverage limits for author, team, and mobility analyses.
- Empirical signature: author fields or author-affiliation links are available in some collections but missing or inconsistent in others..

## Uses in Science of Science

- Adds a collection-scope layer to [WoS author-affiliation linking onset](wos_author_affiliation_linking_onset.md).
- Connects source coverage to [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md).
- Useful before author metric or mobility analyses on non-core records.

## Operationalization

- Build an author-field availability matrix by collection.
- Run author/team/mobility analyses with and without non-core resources.
- Flag records where full author indexing or author-affiliation linkage is not guaranteed.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) states that Core Collection indexes all authors and links authors to affiliations from 2008 onward, while author indexing varies in other resources.

## Caveats

- This is source-coverage validation, not author disambiguation.
- Complete author names do not imply complete author IDs or affiliation histories.

## Links

- [WoS author-affiliation linking onset](wos_author_affiliation_linking_onset.md)
- [Paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [Affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md)
- [WoS collection-specific schema completeness](wos_collection_specific_schema_completeness.md)
- [Proprietary author-ID auditability gap](proprietary_author_id_auditability_gap.md)
- [Author-metric single-affiliation caveat](author_metric_single_affiliation_caveat.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_noncore_author_indexing_variability`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: non-core author coverage; collection-specific author indexing; WoS author-index availability matrix; platform author-field heterogeneity
