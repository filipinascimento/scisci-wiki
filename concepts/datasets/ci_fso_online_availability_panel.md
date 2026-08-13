# CI-FSO online availability panel

## Summary

The CI-FSO online availability panel links citation-index records to journal online-availability histories so researchers can study how digitized access changes citation behavior.

## Canonical Form

- Unit of analysis: journal-year, subfield-year, cited article, citing article, ISSN-linked source, or access-route state.
- Typical representation: citation-index article and reference tables joined to source-year availability depth, commercial archive flags, and free journal-web flags.
- Data target: reconstruct when prior journal issues were electronically available before they could be cited.
- Empirical signature: within-source changes in online availability can be aligned with reference age, cited-source breadth, and citation concentration outcomes.

## Uses in Science of Science

- Provides the data substrate for [online availability panel identification](../validations/online_availability_panel_identification.md).
- Makes [online backfile depth](../measures/online_backfile_depth.md) measurable as a source-year exposure rather than a post hoc article attribute.
- Supports [commercial-free access channel contrast](../methods/commercial_free_access_channel_contrast.md) by preserving route-specific availability.
- Links [Web of Science](web_of_science.md)-style citation data to interface and access histories, making discovery infrastructure part of the research design.
- Gives a historical template for modern Dimensions, OpenAlex, Unpaywall, publisher-log, and platform-log panels.

## Operationalization

- Start with citation-index records containing source identifiers, publication years, cited references, journal or subfield labels, and citation years.
- Link source records to Fulltext Sources Online or another availability registry by ISSN, title, or source identifier.
- For each source-year, encode commercial archive availability, free journal-web availability, and depth of available back issues.
- Lag availability so the measured exposure precedes the citing articles' likely drafting and publication process.
- Aggregate outcomes such as [reference-age search depth](../measures/reference_age_search_depth.md), [citation breadth via distinct cited sources](../measures/citation_breadth_distinct_sources.md), and [citation concentration Herfindahl](../measures/citation_concentration_herfindahl.md).
- Preserve snapshot dates, source-title histories, ISSN changes, document-type rules, and citation-window definitions.

## Evidence and Validations

- Verified full-text evidence from Evans (2008) links Thomson Scientific Science Citation Index, Social Sciences Citation Index, and Arts and Humanities Citation Index records to Fulltext Sources Online by ISSN.
- Evans describes the linked data as 34 million articles, their citations from 1945 to 2005, and online availability from 1998 to 2005.
- Fulltext Sources Online records whether journals were available through commercial electronic archives or freely on journal websites, along with how many back issues were available.
- The merged data produced 26,002,796 articles whose journals came online by 2006 and 8,090,813 additional articles that referenced them.
- The panel supports within-journal and within-subfield models of whether electronic availability changed citation age, distinct cited articles or journals, and citation concentration.

## Caveats

- Availability is a proxy for potential access, not observed reading or search behavior.
- ISSN joins can miss title changes, supplements, series splits, and platform-specific source histories.
- Historical CI-FSO coverage does not capture newer scholarly media, preprints, blogs, wikis, recommendation systems, or modern open-access discovery layers; see [new scholarly-media scope caveat](../validations/new_scholarly_media_scope_caveat.md).
- Citation-index records can omit references placed in supporting online material, motivating [supporting-online-material reference omission](../validations/supporting_online_material_reference_omission.md) checks.
- Current replications should prefer fresh Dimensions/OpenAlex metadata for entity resolution and recent coverage, while documenting any stale SciSciNet-v2 linkages separately.

## Links

- [online availability panel identification](../validations/online_availability_panel_identification.md)
- [online backfile depth](../measures/online_backfile_depth.md)
- [commercial-free access channel contrast](../methods/commercial_free_access_channel_contrast.md)
- [citation breadth via distinct cited sources](../measures/citation_breadth_distinct_sources.md)
- [citation concentration Herfindahl](../measures/citation_concentration_herfindahl.md)
- [reference-age search depth](../measures/reference_age_search_depth.md)
- [Web of Science](web_of_science.md)
- [citation-index research infrastructure](citation_index_research_infrastructure.md)
- [bibliometric data access modes](../methods/bibliometric_data_access_modes.md)
- [supporting-online-material reference omission](../validations/supporting_online_material_reference_omission.md)
- [new scholarly-media scope caveat](../validations/new_scholarly_media_scope_caveat.md)

## References

- Evans, J. A. (2008). Electronic publication and the narrowing of science and scholarship. *Science*, 321(5887), 395-399. https://doi.org/10.1126/science.1150473 [OpenAlex: W2125660293; Dimensions: pub.1062457136; WoS: unknown]

## Metadata

- Concept ID: `ci_fso_online_availability_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Evans (2008) (2008)
- Latest seen paper: Evans (2008) (2008)
- Primary reference DOI: `10.1126/science.1150473`
- OpenAlex ID: `W2125660293`
- Dimensions ID: `pub.1062457136`
- SciSciNet ID: `W2125660293`
- Aliases: CI-FSO panel; Fulltext Sources Online linkage; online availability panel dataset; citation index availability panel
