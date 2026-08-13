# Replication outcome master dataset

## Summary

The replication outcome master dataset is the study-pair table that stores original and replication outcomes, effect sizes, p-values, power estimates, moderators, and subjective judgments for a coordinated replication project.

## Canonical Form

- Unit of analysis: original-study and replication-study pair, focal effect, replication attempt, outcome metric, or moderator rating.
- Typical representation: open table with original results, replication results, standardized effect sizes, confidence intervals, power, p-values, and metadata.
- Measurement target: reproducibility of a sampled research literature under a common direct-replication protocol.
- Empirical signature: several replication-success indicators can be recomputed from the same archived study-pair dataset.

## Uses in Science of Science

- Provides the reusable evidence layer behind [direct replication protocol](../methods/direct_replication_protocol.md), [replication success indicator suite](../measures/replication_success_indicator_suite.md), and [replication effect-size shrinkage](../measures/replication_effect_size_shrinkage.md).
- Anchors moderator analyses from [replication moderator battery](../methods/replication_moderator_battery.md) and [replication moderator-index aggregation](../methods/replication_moderator_index_aggregation.md).
- Turns [open science interventions](../validations/open_science_interventions.md) into auditable data rather than only a procedural norm.
- Supports denominator and scope checks against the [2008 psychology journal replication sampling frame](psychology_reproducibility_sampling_frame.md).

## Operationalization

- Store one row per focal original-replication effect pair or a normalized equivalent with stable study-pair identifiers.
- Include original effect size, replication effect size, original p-value, replication p-value, confidence intervals, sample sizes, and estimated replication power.
- Attach protocol fidelity, feasibility, challenge, subfield, and subjective-reproducibility fields.
- Release the dataset with analysis scripts and archived study materials.
- Make all variable definitions and transformations explicit enough for independent recomputation.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) reports 100 completed replications and analyzes original and replication p-values, effect sizes, confidence intervals, power, direction of effects, and subjective replication judgments.
- The paper states that materials, data, and analysis scripts were made publicly available through OSF.
- OSC also reproduced all replication analyses with a standardized R workflow, giving the master dataset an internal computational audit.

## Caveats

- Dataset fields inherit selection limits from the sampling frame and completed-replication denominator.
- A master dataset can standardize outcomes without resolving which replication-success indicator is substantively preferred.
- Subjective and moderator fields require coder judgment and may not be transportable across domains.
- Direct replication data do not fully identify whether failures reflect false positives, contextual moderators, implementation differences, or low power.

## Links

- [direct replication protocol](../methods/direct_replication_protocol.md)
- [2008 psychology journal replication sampling frame](psychology_reproducibility_sampling_frame.md)
- [replication success indicator suite](../measures/replication_success_indicator_suite.md)
- [replication effect-size shrinkage](../measures/replication_effect_size_shrinkage.md)
- [replication moderator battery](../methods/replication_moderator_battery.md)
- [replication moderator-index aggregation](../methods/replication_moderator_index_aggregation.md)
- [open science interventions](../validations/open_science_interventions.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `replication_outcome_master_dataset`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: replication study-pair dataset; reproducibility outcomes table; OSC replication dataset; replication outcome table
