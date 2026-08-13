# Replication execution-challenge gradient

## Summary

The replication execution-challenge gradient tests whether studies rated as harder to replicate are less likely to reproduce successfully.

## Canonical Form

- Unit of analysis: replication attempt, challenge rating, implementation-difficulty item, moderator index, or replication success indicator.
- Typical representation: association between rated challenge and replication p-values, effect-size ratios, confidence-interval coverage, or subjective success.
- Validation target: distinguish reproducibility of findings from difficulty of faithfully recreating the original study.
- Empirical signature: higher execution challenge predicts weaker replication outcomes under at least some success indicators.

## Uses in Science of Science

- Interprets reproducibility results alongside [replication feasibility attrition](replication_feasibility_attrition.md) and [original-author fidelity review](../methods/original_author_fidelity_review.md).
- Uses moderator data from [replication moderator battery](../methods/replication_moderator_battery.md) and [replication moderator-index aggregation](../methods/replication_moderator_index_aggregation.md).
- Helps bound claims from [single replication truth-status boundary](single_replication_truth_status_boundary.md), because difficult execution can weaken a direct replication without proving the original effect false.
- Adds an implementation-validity layer to [replication success indicator suite](../measures/replication_success_indicator_suite.md).

## Operationalization

- Rate each replication attempt for expected or observed challenge using standardized moderator items.
- Aggregate related challenge items if the study uses a moderator-index approach.
- Estimate associations between challenge ratings and several replication-success indicators.
- Compare results with fidelity review and feasibility attrition to separate non-completion from completed difficult replications.
- Report uncertainty and avoid treating challenge as a post hoc excuse for failed replication.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) includes challenge and moderator ratings for the completed direct replications.
- The paper reports that more challenging replications were less reproducible by some measures, while also warning that single replications cannot definitively diagnose why an effect did or did not recur.
- Treating execution challenge as a gradient keeps implementation difficulty visible inside reproducibility inference.

## Caveats

- Challenge ratings can be subjective and may be affected by knowledge of outcomes if not blinded.
- Difficulty can correlate with theoretical domain, effect type, cost, or sample constraints.
- A difficult replication that fails does not automatically validate the original effect.
- A low-challenge replication that succeeds does not prove broad generalizability.

## Links

- [replication feasibility attrition](replication_feasibility_attrition.md)
- [original-author fidelity review](../methods/original_author_fidelity_review.md)
- [replication moderator battery](../methods/replication_moderator_battery.md)
- [replication moderator-index aggregation](../methods/replication_moderator_index_aggregation.md)
- [single replication truth-status boundary](single_replication_truth_status_boundary.md)
- [replication success indicator suite](../measures/replication_success_indicator_suite.md)
- [replication outcome master dataset](../datasets/replication_outcome_master_dataset.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `replication_execution_challenge_gradient`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: replication challenge gradient; implementation difficulty moderator; replication difficulty validation; execution challenge reproducibility
