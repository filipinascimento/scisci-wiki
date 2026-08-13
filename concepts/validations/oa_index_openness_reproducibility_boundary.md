# OA index openness reproducibility boundary

## Summary

OA prevalence studies depend on whether the underlying access index, code, and snapshots are open enough for reuse and independent replication.

## Canonical Form

- Unit of analysis: OA index, API, codebase, data dump, source snapshot, or measurement pipeline.
- Typical representation: source-openness manifest with API, dump, code, snapshot, and redistribution fields.
- Mechanism, measurement, or validation target: reproducibility boundary for OA measurement infrastructure.
- Empirical signature: independent users can rerun or audit the OA detection pipeline using released code and dated data..

## Uses in Science of Science

- Adds infrastructure openness to [open access resolver workflows](../methods/open_access_resolver_workflows.md).
- Useful for comparing free APIs, commercial indexes, and open snapshots.
- Connects OA measurement to [metric recomputability data access](metric_recomputability_data_access.md).

## Operationalization

- Record source openness, API and dump availability, code availability, snapshot dates, redistribution constraints, and upstream proprietary dependencies.
- Archive source snapshots where possible and rerun validation samples across versions.
- Separate open analysis code from proprietary or unstable upstream metadata.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) contrasts a prior automated OA database that became commercial with oaDOI's free API, open code, Zenodo data, and GitHub analysis code.
- The contrast makes index openness a reproducibility boundary.

## Caveats

- Open code cannot fully solve changing web availability or proprietary upstream metadata.
- OA labels can change after the snapshot even if the pipeline is reproducible.

## Links

- [Open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [Scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [Metric recomputability data access](metric_recomputability_data_access.md)
- [Bibliometric data access modes](../methods/bibliometric_data_access_modes.md)
- [Restricted-raw public-derived bibliometric release](../methods/restricted_raw_public_derived_bibliometric_release.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `oa_index_openness_reproducibility_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Dimensions ID: `pub.1101032124`
- SciSciNet ID: `W2741809807`
- Aliases: OA index reproducibility boundary; open-access measurement openness; OA resolver reproducibility audit
