# SciSciNet precomputed metric bundle

## Summary

The SciSciNet precomputed metric bundle is a dataset layer that attaches commonly used science-of-science measures to primary paper, author, and institution records.

## Canonical Form

- Unit of analysis: primary paper, paper-field pair, author, institution, or derived metric row.
- Typical representation: table columns for citation windows, normalized citation impact, disruption, novelty, sleeping beauty, WSB parameters, team size, institution count, h-index, and external-use counts.
- Mechanism or measurement target: reusable benchmark measures that reduce duplicated computation across science-of-science studies.
- Empirical signature: a data lake ships with computed indicators alongside raw linkage tables and documents how each indicator was calculated.

## Uses in Science of Science

- Lowers the entry cost for analyses of [citation impact indicators](../measures/citation_impact_indicators.md), [disruption index](../measures/disruption_index.md), [median conventionality](../measures/median_conventionality.md), [tail novelty](../measures/tail_novelty.md), and [beauty coefficient](../measures/beauty_coefficient.md).
- Provides benchmark features for replication studies before researchers recompute measures from raw citation networks.
- Supports quick descriptive checks over paper, author, institution, field, and external-use layers.
- Should be treated as snapshot-specific and paired with [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md).

## Operationalization

- Preserve both raw input tables and precomputed output columns.
- Document the source snapshot, citation census date, field definition, citation window, and inclusion rules for each metric.
- Record eligibility windows, field or domain restrictions, threshold choices, and source-table filters before reusing precomputed values.
- Recompute metrics when using newer Dimensions/OpenAlex snapshots or changed field taxonomies.
- Validate derived indicators by reproducing canonical results and by comparing against raw source counts.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) states that SciSciNet computes commonly used measurements of scientific ideas, impacts, careers, and collaborations.
- The paper lists publication-level measures including c5, c10, normalized citation `cf`, hit-paper flags, WSB parameters, sleeping-beauty coefficients, novelty/conventionality z-scores, disruption, team size, institution count, and external-use counts.
- Lin et al. also compute author- and institution-level productivity, h-index, and average impact measures.
- The authors frame these measures as examples that can facilitate further investigation and show how future researchers can extend the data lake.
- Their reported examples include explicit year windows, field/domain subsets, citation thresholds, and top-percentile definitions, so the bundle should be reused with those eligibility assumptions visible.

## Caveats

- Precomputed metrics are convenient, but their assumptions may not match a new project's citation window, field definition, or source snapshot.
- SciSciNet's MAG-based source snapshot is stale for recent-paper coverage; use current Dimensions or OpenAlex when recency matters.
- Derived indicators should not be used in evaluation without exposing their component definitions and validation status.

## Links

- [SciSciNet-v2](sciscinet_v2.md)
- [scholarly data lakes](scholarly_data_lakes.md)
- [community-extensible measure layer](../methods/community_extensible_measure_layer.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [paper-family canonicalization](../methods/paper_family_canonicalization.md)
- [disruption index](../measures/disruption_index.md)
- [median conventionality](../measures/median_conventionality.md)
- [tail novelty](../measures/tail_novelty.md)
- [beauty coefficient](../measures/beauty_coefficient.md)
- [citation immediacy parameter](../measures/citation_immediacy_parameter.md)
- [citation longevity parameter](../measures/citation_longevity_parameter.md)
- [h-index](../measures/h_index.md)
- [transparent metric construction](../methods/transparent_metric_construction.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `sciscinet_precomputed_metric_bundle`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: precomputed science-of-science measures; SciSciNet metric columns; benchmark metric bundle; derived indicator bundle
