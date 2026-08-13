# Online backfile depth

## Summary

Online backfile depth measures how many prior years of a journal's issues are available electronically before researchers cite from that archive.

## Canonical Form

- Unit of analysis: journal-year, subfield-year, archive-source-year, or cited-source availability history.
- Typical representation: count of online years available, first-year online depth, commercial/free depth split, or lagged availability measure.
- Measurement target: electronic access to older published issues before a citing paper is written.
- Empirical signature: deeper online backfiles alter citation age, cited-source breadth, or citation concentration after field and source controls.

## Uses in Science of Science

- Operationalizes the infrastructure side of [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md).
- Provides a treatment-like measure for [online availability panel identification](../validations/online_availability_panel_identification.md).
- Is stored in source-year data structures such as the [CI-FSO online availability panel](../datasets/ci_fso_online_availability_panel.md).
- Feeds [commercial-free access channel contrast](../methods/commercial_free_access_channel_contrast.md) when archive route matters.
- Helps distinguish access expansion from actual [reference-age search depth](reference_age_search_depth.md).
- Can be generalized to open-access archives, publisher platforms, preprint servers, books, data repositories, and search-index backfills.
- Connects [Web of Science](../datasets/web_of_science.md), [open access status](../datasets/open_access_status.md), and [open access route typology](../datasets/open_access_route_typology.md) to user-facing discovery behavior.

## Operationalization

- Record, for each journal and year, whether issues are electronically available through commercial portals, free journal websites, or other access routes.
- Count how many years backward the available issues reach in the previous year, so availability is measured before the citing work is plausibly drafted.
- Merge availability records to citation data by ISSN, journal title, or source identifier.
- Preserve access-route distinctions because commercial aggregators, free publisher pages, and open repositories may expose different browsing and search interfaces.
- For subfields, aggregate the depth from the first available journal or from field-specific source coverage, documenting the denominator.

## Evidence and Validations

- Verified full-text evidence from Evans (2008) links Thomson Scientific citation-index records to Fulltext Sources Online data by ISSN.
- Evans uses Fulltext Sources Online because it records which journals were available in commercial electronic archives or freely on journal websites, and how many back issues were available.
- The paper measures depth as the number of years of journal issues electronically available during the previous year.
- Evans reports an average online availability depth of 1.85 years, with substantial dispersion and a maximum above 60 years in the linked CI-FSO data.
- Backfile depth predicts more recent citations, fewer distinct cited articles and journals, and stronger citation concentration in the Evans panel models.

## Caveats

- Availability is not the same as usage; researchers may still rely on print, personal PDFs, interlibrary loans, or search engines outside the measured archive.
- Backfile depth can be confounded with publisher quality, journal size, platform adoption, and field-specific digitization priorities.
- ISSN/title matching and source history changes can introduce measurement error.

## Links

- [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md)
- [online availability panel identification](../validations/online_availability_panel_identification.md)
- [CI-FSO online availability panel](../datasets/ci_fso_online_availability_panel.md)
- [commercial-free access channel contrast](../methods/commercial_free_access_channel_contrast.md)
- [reference-age search depth](reference_age_search_depth.md)
- [citation breadth via distinct cited sources](citation_breadth_distinct_sources.md)
- [citation concentration Herfindahl](citation_concentration_herfindahl.md)
- [open access status](../datasets/open_access_status.md)
- [open access route typology](../datasets/open_access_route_typology.md)
- [Web of Science](../datasets/web_of_science.md)

## References

- Evans, J. A. (2008). Electronic publication and the narrowing of science and scholarship. *Science*, 321(5887), 395-399. https://doi.org/10.1126/science.1150473 [OpenAlex: W2125660293; Dimensions: pub.1062457136; WoS: unknown]

## Metadata

- Concept ID: `online_backfile_depth`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Evans (2008) (2008)
- Latest seen paper: Evans (2008) (2008)
- Primary reference DOI: `10.1126/science.1150473`
- OpenAlex ID: `W2125660293`
- Dimensions ID: `pub.1062457136`
- SciSciNet ID: `W2125660293`
- Aliases: online availability depth; electronic backfile depth; online issue depth; digital archive depth
