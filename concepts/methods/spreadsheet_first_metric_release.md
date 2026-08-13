# Spreadsheet-first metric release

## Summary

Spreadsheet-first metric release publishes bibliometric indicators as downloadable tables rather than only as a fixed website, so users can search, filter, audit, and recombine the data for their own analyses.

## Canonical Form

- Unit of analysis: public metric dataset, spreadsheet, release file, author table, or evaluation user.
- Typical representation: downloadable table, versioned file, accompanying documentation, persistent repository link, and explicit reuse instructions.
- Mechanism or measurement target: making metric infrastructure inspectable and reusable instead of only queryable through a closed interface.
- Empirical signature: users can download the full table, inspect columns, apply field filters, recompute derived quantities, and tailor analyses outside the source platform.

## Uses in Science of Science

- Operationalizes [research-ready table curation](research_ready_table_curation.md) for public metric releases.
- Supports [responsible metrics](../measures/responsible_metrics.md) by exposing components, denominators, and caveats rather than only ranks.
- Provides a distribution design for the [standardized author citation database](../datasets/standardized_author_citation_database.md).
- Complements [scholarly snapshot versioning](scholarly_snapshot_versioning.md) when each spreadsheet has a release date and source snapshot.

## Operationalization

- Publish the full metric table in a stable repository with a persistent identifier.
- Include column definitions, metric formulas, source database dates, and field-classification rules.
- Preserve raw component metrics alongside any composite score.
- Provide separate files for alternative windows, self-citation choices, and update snapshots when needed.
- Avoid making the only access route a formulaic website that prevents bulk inspection.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) releases author citation metrics through Mendeley Data spreadsheets.
- The paper states that spreadsheets can be downloaded, searched, and tailored for analyses by scientists in whatever fashion they prefer.
- Ioannidis et al. explicitly contrast this with creating a formulaic website.
- Their release design makes career-long data, single-year data, field percentiles, and update files inspectable as separate tabular resources.

## Caveats

- Spreadsheets are easy to misuse if users ignore metadata, versioning, or caveats.
- Large tables may exceed ordinary spreadsheet-tool limits or encourage manual editing without provenance.
- A downloadable release should still provide machine-readable schemas and stable identifiers.
- Public metric tables can intensify ranking misuse if governance and context are weak.

## Links

- [research-ready table curation](research_ready_table_curation.md)
- [scholarly snapshot versioning](scholarly_snapshot_versioning.md)
- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [author citation composite indicator](../measures/author_citation_composite_indicator.md)
- [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [bibliometric data access modes](bibliometric_data_access_modes.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `spreadsheet_first_metric_release`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: downloadable metric spreadsheet; spreadsheet metric release; Mendeley Data metric table; bulk metric table release
