# SciSciNet open pipeline release

## Summary

A science-of-science data lake can release source code for curation, linkage, and metric computation as part of its reproducibility affordance.

## Canonical Form

- Unit of analysis: data pipeline, source code release, curation script, linkage script, metric script, or snapshot.
- Typical representation: open curation-linkage-metrics code bundle paired with documented preprocessing choices.
- Mechanism, measurement, or validation target: auditability and rerun potential of derived scholarly data tables.
- Empirical signature: the data release includes code that can reconstruct or audit selection, linkage, and metric steps..

## Uses in Science of Science

- Adds a code-release layer to [scholarly data lakes](../datasets/scholarly_data_lakes.md).
- Supports [canonical result reproduction validation](../validations/canonical_result_reproduction_validation.md).
- Provides a practical mechanism for [community-extensible measure layer](community_extensible_measure_layer.md).

## Operationalization

- Publish code for data selection, table curation, linkage, and metric calculation.
- Pair code with preprocessing documentation and snapshot metadata.
- Record dependency and raw-source availability limits.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) gives source-code availability and frames documented preprocessing as part of the data lake's value.

## Caveats

- Code availability does not guarantee raw snapshot availability or exact rerun feasibility.
- External services and source schemas can drift after release.

## Links

- [Scholarly data lakes](../datasets/scholarly_data_lakes.md)
- [Research-ready table curation](research_ready_table_curation.md)
- [Community-extensible measure layer](community_extensible_measure_layer.md)
- [Canonical result reproduction validation](../validations/canonical_result_reproduction_validation.md)
- [Replication and reproducibility](../validations/replication_reproducibility.md)
- [Bibliometric data access modes](bibliometric_data_access_modes.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `sciscinet_open_pipeline_release`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: open SciSciNet pipeline; data-lake reproducibility code; SciSciNet GitHub release; curation-linkage-metrics code release
