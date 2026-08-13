# Replication moderator-index aggregation

## Summary

Replication moderator-index aggregation combines related moderator variables into standardized summary indices so replication-outcome analyses do not rely on many fragile single-predictor tests.

## Canonical Form

- Unit of analysis: replication attempt, moderator item, standardized predictor, summary index, or reproducibility outcome.
- Typical representation: z-scored moderator variables averaged into challenge, effect, context, or study-quality indices.
- Method target: reduce multiple-testing burden and stabilize exploratory moderator analysis.
- Empirical signature: individual moderator ratings are grouped into interpretable indices before being associated with replication success.

## Uses in Science of Science

- Refines the [replication moderator battery](replication_moderator_battery.md) into lower-dimensional predictors for reproducibility studies.
- Uses the [replication outcome master dataset](../datasets/replication_outcome_master_dataset.md) as the outcome and feature store.
- Helps interpret [replication execution-challenge gradient](../validations/replication_execution_challenge_gradient.md) without overemphasizing isolated noisy ratings.
- Supports sensitivity analysis for [replication success indicator suite](../measures/replication_success_indicator_suite.md).

## Operationalization

- Define moderator families before outcome modeling, such as original-study strength, replication difficulty, effect surprisingness, or implementation fidelity.
- Standardize component variables so scales are comparable.
- Average or otherwise aggregate conceptually related items into summary indices.
- Use the indices to predict or stratify replication outcomes across several success indicators.
- Report component variables, aggregation rules, and missing-data handling.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) describes many potential moderators of replication success and notes that related variables were standardized and averaged into indices for analysis.
- The aggregation is used to limit the interpretive risk from many separate moderator tests in a 100-replication dataset.
- This motif captures the methodological layer between collecting moderator ratings and claiming a reproducibility gradient.

## Caveats

- Summary indices can hide heterogeneous component effects.
- Post hoc grouping can still overfit if the index families were not specified before outcome inspection.
- Moderator ratings may be subjective or inconsistently observable across studies.
- Small replication portfolios limit power for detecting moderator effects even after aggregation.

## Links

- [replication moderator battery](replication_moderator_battery.md)
- [replication outcome master dataset](../datasets/replication_outcome_master_dataset.md)
- [replication execution-challenge gradient](../validations/replication_execution_challenge_gradient.md)
- [replication success indicator suite](../measures/replication_success_indicator_suite.md)
- [direct replication protocol](direct_replication_protocol.md)
- [single replication truth-status boundary](../validations/single_replication_truth_status_boundary.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `replication_moderator_index_aggregation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: replication moderator index; standardized moderator aggregation; reproducibility moderator summary index; moderator family averaging
