# Community-extensible measure layer

## Summary

Community-extensible measure layer is a data-lake design in which researchers can add new measures or linkages by publishing tables keyed to shared scholarly identifiers.

## Canonical Form

- Unit of analysis: shared ID, paper-level measure, author-level measure, linkage row, data contribution, or extension table.
- Typical representation: external table keyed by PaperID, AuthorID, DOI, OpenAlex ID, Dimensions ID, grant ID, or another documented identifier.
- Method target: make new measurements reusable without rebuilding the entire data lake.
- Empirical signature: a new paper can release a derived measure file that joins to the existing data lake through stable IDs.

## Uses in Science of Science

- Turns [scholarly data lakes](../datasets/scholarly_data_lakes.md) into living infrastructure rather than static one-off datasets.
- Supports reproducible reuse of measures such as disruption, novelty, citation dynamics, role classifications, or external-use counts.
- Requires [scholarly identifier spine](../representations/scholarly_identifier_spine.md) design and [scholarly table primary keys](../representations/scholarly_table_primary_keys.md).
- Complements [SciSciNet precomputed metric bundle](../datasets/sciscinet_precomputed_metric_bundle.md) by defining how later measures can be appended.

## Operationalization

- Publish extension tables with one row per entity or relation and an explicit primary key.
- Include source snapshot, metric definition, computation code, and provenance metadata.
- Preserve compatibility with source-native IDs and crosswalk identifiers.
- Use [identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md) when extension tables add external-source linkages rather than only within-lake measures.
- Validate that extension rows join cleanly to the target data-lake snapshot.
- Version extension tables separately from the base data lake.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) says SciSciNet is not meant to be exhaustive and should be improved continuously through new data, measurements, and linkages.
- The paper gives the example that authors of a new measurement can publish a data file linking the measurement with SciSciNet IDs so future researchers can build on it.
- Lin et al. describe this as effectively adding a new column to the data lake, which makes the keyed-file contract part of the infrastructure design.
- This design makes the shared identifier layer a mechanism for cumulative infrastructure, not just a one-time release.

## Caveats

- Extension tables inherit the staleness and entity-resolution choices of the base snapshot unless crosswalks are updated.
- Community extensions can conflict if they use different metric definitions, source dates, or inclusion rules.
- A joinable measure is not automatically validated; metric construction and intended use still need independent documentation.

## Links

- [scholarly data lakes](../datasets/scholarly_data_lakes.md)
- [SciSciNet-v2](../datasets/sciscinet_v2.md)
- [SciSciNet precomputed metric bundle](../datasets/sciscinet_precomputed_metric_bundle.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [scholarly table primary keys](../representations/scholarly_table_primary_keys.md)
- [identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md)
- [research-ready table curation](research_ready_table_curation.md)
- [scholarly snapshot versioning](scholarly_snapshot_versioning.md)
- [transparent metric construction](transparent_metric_construction.md)
- [indicator lifecycle review](indicator_lifecycle_review.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `community_extensible_measure_layer`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: extensible data-lake measures; community measure extensions; joinable metric contributions; identifier-keyed measure layer
