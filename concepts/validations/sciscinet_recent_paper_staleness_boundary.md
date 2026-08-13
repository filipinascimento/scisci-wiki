# SciSciNet recent-paper staleness boundary

## Summary

SciSciNet should be treated as a MAG-final-edition snapshot whose coverage is stale for recent papers after the December 2021 MAG release.

## Canonical Form

- Unit of analysis: paper, citation count, author profile, external link, data vintage, MAG release, or current-source replacement.
- Typical representation: data-vintage warning keyed to MAG final snapshot and external linkage windows.
- Mechanism, measurement, or validation target: recency boundary for using SciSciNet in current science-of-science analyses.
- Empirical signature: post-2021 papers, citations, authors, and external links require refresh through OpenAlex, Dimensions, or another current source.

## Uses in Science of Science

- Refines SciSciNet recency validation by linking it to [sciscinet v2](../datasets/sciscinet_v2.md) and [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md).
- Useful as a reusable check when [bibliographic database staleness caveat](bibliographic_database_staleness_caveat.md) is used in science-of-science inference.
- Creates cross-links to [mag to openalex migration audit](mag_to_openalex_migration_audit.md) so the motif is not interpreted in isolation.

## Operationalization

- Add a data-vintage check before using SciSciNet for recent publications or current indicators.
- Flag post-2021 paper coverage, citation counts, author profiles, and external links as incomplete unless refreshed.
- Prefer current OpenAlex or Dimensions extracts when recency matters, using SciSciNet as a historical replication layer.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) says SciSciNet primarily draws from MAG's final December 6, 2021 edition and that future work should update the data lake.
- This makes the release a historical MAG-based snapshot rather than a current scholarly index.

## Caveats

- SciSciNet is useful for historical analyses but outdated for recent papers.
- External linkage layers have additional source windows that can be older than the publication backbone.

## Links

- [SciSciNet-v2](../datasets/sciscinet_v2.md)
- [Scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [Bibliographic database staleness caveat](bibliographic_database_staleness_caveat.md)
- [MAG-to-OpenAlex migration audit](mag_to_openalex_migration_audit.md)
- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `sciscinet_recent_paper_staleness_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: MAG-final snapshot caveat; SciSciNet freshness boundary; post-2021 coverage warning
