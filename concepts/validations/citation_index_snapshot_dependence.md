# Citation-index snapshot dependence

## Summary

Co-citation maps are time-stamped database products because the citing set grows as new citing documents enter the index.

## Canonical Form

- Unit of analysis: citation-index release or query snapshot.
- Typical representation: co-citation network with index release, covered years, and query date.
- Validation target: temporal dependence of co-citation counts and maps.
- Empirical signature: edge weights and core papers change across adjacent snapshots.

## Uses in Science of Science

- Connects [temporal co-citation drift](../mechanisms/temporal_co_citation_drift.md) to data snapshot provenance.
- Useful for reconstructing historical co-citation examples or comparing maps across time.
- Extends [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md) to co-citation workflows.

## Operationalization

- Store citation-index release, query date, covered years, source edition, and update cycle.
- Rerun co-citation maps across adjacent snapshots when stability matters.
- Report whether a map is a historical reconstruction or a current retrospective map.

## Evidence and Validations

- Verified full-text evidence from Small (1973) uses a specific first-quarter 1971 Science Citation Index snapshot for the particle-physics example.
- This ties the worked co-citation network to a dated source release.

## Caveats

- Snapshot drift can be substantive, not merely noise, when specialties are emerging.
- Historical index coverage may be incomplete or revised in modern databases.

## Links

- [Scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [Bibliographic database staleness caveat](bibliographic_database_staleness_caveat.md)
- [Temporal co-citation drift](../mechanisms/temporal_co_citation_drift.md)
- [Co-citation core sampling boundary](co_citation_core_sampling_boundary.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `citation_index_snapshot_dependence`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: co-citation snapshot dependence; citation-index temporal provenance; co-citation source-date sensitivity
