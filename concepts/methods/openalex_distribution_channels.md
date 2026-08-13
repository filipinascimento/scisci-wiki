# OpenAlex distribution channels

## Summary

OpenAlex distribution channels are the coordinated access modes for the OpenAlex scholarly graph: periodic full dumps, a daily REST API, and a web GUI backed by the API.

## Canonical Form

- Unit of analysis: dataset snapshot, API query, GUI query, update cadence, access policy, or extraction workflow.
- Typical representation: access-mode choice with update frequency, query volume, reproducibility, and provenance fields.
- Method target: choose the right OpenAlex access route for science-of-science analysis.
- Empirical signature: high-volume reproducible analyses use dumps, while fresh lookup and interactive exploration use API or GUI routes.

## Uses in Science of Science

- Operationalizes [OpenAlex](../datasets/openalex.md) as a current open data source rather than only a conceptual graph.
- Connects access mode to [scholarly snapshot versioning](scholarly_snapshot_versioning.md), [research-ready table curation](research_ready_table_curation.md), and [bibliometric data access modes](bibliometric_data_access_modes.md).
- Provides a practical alternative to stale MAG-derived sources when current publication coverage matters.

## Operationalization

- Use the full data dump for large scans, reproducible extraction, and local joins.
- Use the REST API for targeted lookup, DOI resolution, and recently changed records.
- Use the web GUI for quick inspection, manual triage, and record-level sanity checks.
- Record access route, snapshot date or API access date, query parameters, and any rate or volume threshold that shaped extraction.

## Evidence and Validations

- Verified full-text evidence from Priem, Piwowar, and Orr (2022) states that OpenAlex data can be obtained through a full data dump, REST API, and web GUI.
- The same paper reports that the dump is updated fortnightly, the REST API is updated daily, and the GUI is built on the REST API.
- Priem et al. state that these routes are free and require no registration or permission.
- The full text recommends the data dump rather than the API for high query loads above roughly 100,000 queries per day.

## Caveats

- API-date and dump-date analyses can disagree if records changed between releases.
- Interactive GUI inspection is useful for triage but should not substitute for reproducible extraction code.
- Current OpenAlex behavior can evolve after the 2022 paper, so analyses should record the exact access date and local snapshot path.

## Links

- [OpenAlex](../datasets/openalex.md)
- [OpenAlex source-ingestion mix](openalex_source_ingestion_mix.md)
- [OpenAlex open-infrastructure governance](openalex_open_infrastructure_governance.md)
- [scholarly snapshot versioning](scholarly_snapshot_versioning.md)
- [research-ready table curation](research_ready_table_curation.md)
- [bibliometric data access modes](bibliometric_data_access_modes.md)
- [scholarly data lakes](../datasets/scholarly_data_lakes.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `openalex_distribution_channels`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: OpenAlex dump API GUI; OpenAlex access modes; OpenAlex data distribution; OpenAlex API dump workflow
