# Intercitation Source-Universe Boundary

## Summary

Intercitation source-universe boundary is the caveat that direct inter-citation maps can only locate sources inside the citing journal universe, while co-citation maps can include cited-only sources when reference lists are available.

## Canonical Form

- Unit of analysis: source journal list, cited-only venue, journal map, direct inter-citation matrix, or co-citation matrix.
- Typical representation: source-universe inclusion rule, cited-only exclusion flag, or inter-citation versus co-citation coverage comparison.
- Validation target: identify which scholarly sources are structurally invisible in a direct inter-citation map.
- Empirical signature: books, conferences, non-indexed journals, or source-year gaps are absent from direct inter-citation maps but can appear in co-citation representations.

## Uses in Science of Science

- Qualifies [IC-Jaccard intercitation relatedness](../methods/ic_jaccard_intercitation_relatedness.md) and other direct journal-citation measures.
- Connects [SCI/SSCI journal-map corpus 2000](../datasets/sci_ssci_journal_map_corpus_2000.md) to broader [citation database coverage sensitivity](citation_database_coverage_sensitivity.md).
- Helps decide when [K50 co-citation relatedness](../methods/k50_cocitation_relatedness.md) is preferable to direct inter-citation mapping.
- Links science-map construction to [conference-proceedings coverage gap](conference_proceedings_coverage_gap.md) and other non-journal source omissions.

## Operationalization

- Define the indexed source universe used to build direct inter-citation counts.
- Identify source types that can appear only as cited references, such as books, proceedings, reports, or journals outside the source list.
- Compare maps built from direct inter-citation and co-citation matrices for missing or repositioned sources.
- Report whether a focal source absence reflects true inactivity, non-source status, or a coverage-year artifact.

## Evidence and Validations

- Verified full-text evidence from Boyack, Klavans, and Borner (2005) states that inter-citation maps can only map science within the boundaries of the ISI journal list.
- The paper contrasts this with co-citation-based maps, which can include journals, conferences, books, and other venues outside the ISI citing journal list.
- Boyack et al. give an information-science example where a source is absent from the 2000 citing journal data because of indexing-year protocol, while a co-citation map with expanded cited titles could include it.

## Caveats

- Co-citation expansion depends on reference parsing and cited-source normalization quality.
- Including cited-only sources can improve coverage but may reduce comparability with source-journal indicators.
- The boundary is source-year specific; a venue can enter or leave the source universe over time.

## Links

- [SCI/SSCI journal-map corpus 2000](../datasets/sci_ssci_journal_map_corpus_2000.md)
- [journal inter-citation and co-citation matrices](../representations/journal_intercitation_cocitation_matrices.md)
- [IC-Jaccard intercitation relatedness](../methods/ic_jaccard_intercitation_relatedness.md)
- [K50 co-citation relatedness](../methods/k50_cocitation_relatedness.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [conference-proceedings coverage gap](conference_proceedings_coverage_gap.md)
- [science maps](../representations/science_maps.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown; SciSciNet: W2100484636]

## Metadata

- Concept ID: `intercitation_source_universe_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Boyack et al. (2005) (2005)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Dimensions ID: `pub.1011403274`
- SciSciNet ID: `W2100484636`
- Aliases: direct-citation source boundary; inter-citation coverage limit; cited-only source caveat; source-list map boundary
