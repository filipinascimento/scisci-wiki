# Replication analysis reproduction audit

## Summary

Replication analysis reproduction audit independently reruns each replication analysis and rebuilds aggregate datasets so that replication results are computationally reproducible.

## Canonical Form

- Unit of analysis: replication study, analysis script, master data file, independent analyst, audit checklist, or aggregate result.
- Typical representation: independent reanalysis log, controller script, standardized analysis template, reproduced result flag, or public audit report.
- Method target: separate empirical replication from computational reproducibility of the replication project's own analyses.
- Empirical signature: an analyst outside the replication team can regenerate individual results and the master dataset from archived materials and code.

## Uses in Science of Science

- Adds a computational layer to [direct replication protocols](direct_replication_protocol.md).
- Supports [open science interventions](../validations/open_science_interventions.md) by making materials, data, code, and aggregate results inspectable.
- Strengthens [replication success indicator suites](../measures/replication_success_indicator_suite.md) because indicator values can be independently recomputed.
- Connects to [replication and reproducibility](../validations/replication_reproducibility.md): a replication project should itself be reproducible.

## Operationalization

- Require each replication team to share materials, data, and analysis code or sufficient analytic details.
- Assign an independent analyst to reproduce each study's results.
- Use a standardized analytic format where possible.
- Build a controller script that regenerates all individual analyses and the master dataset.
- Publish the audit description, scripts, and any discrepancies or corrections.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) reports that each replication team completed a checklist for sharing materials and data.
- Independent reviewers and analysts audited all individual projects, materials, data, and reports.
- The analyses for every replication study were reproduced by another analyst independent of the replication team using R and a standardized analytic format.
- The project created a controller R script to regenerate the entire analysis of every study and recreate the master data file, with scripts and audit descriptions made public.

## Caveats

- Computational reproduction verifies the reported analysis, not whether the replication design was theoretically adequate.
- Independent reanalysis is easier when data are simple, deidentified, and legally shareable.
- Standardized formats can miss study-specific complexities if the audit template is too rigid.

## Links

- [direct replication protocol](direct_replication_protocol.md)
- [replication effect harmonization](replication_effect_harmonization.md)
- [replication success indicator suite](../measures/replication_success_indicator_suite.md)
- [open science interventions](../validations/open_science_interventions.md)
- [replication and reproducibility](../validations/replication_reproducibility.md)
- [preregistration and registered reports](../validations/preregistration_registered_reports.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `replication_analysis_reproduction_audit`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: replication reanalysis audit; independent replication analysis reproduction; controller-script replication audit; replication project computational reproducibility
