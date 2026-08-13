# Replication power expectation gap

## Summary

Replication power expectation gap compares the number of successful replications expected from nominal replication power with the number actually observed.

## Canonical Form

- Unit of analysis: original-replication study pair, replication power, significant original effect, expected positive replication count, or observed positive replication count.
- Typical representation: expected-versus-observed success count, power-weighted success baseline, binomial gap, or replication shortfall table.
- Validation target: test whether replication failures can plausibly be explained only by low replication power.
- Empirical signature: expected positive replications under original-effect assumptions greatly exceed observed significant replications.

## Uses in Science of Science

- Adds a power-aware validation layer to [replication success indicator suite](../measures/replication_success_indicator_suite.md).
- Connects [study power and false-positive risk](../measures/study_power_false_positive_risk.md) to direct replication outcomes.
- Helps interpret [replication effect-size shrinkage](../measures/replication_effect_size_shrinkage.md) by showing whether the planned replications should have detected original-sized effects.
- Provides evidence for [original-evidence reproducibility gradient](../mechanisms/original_evidence_reproducibility_gradient.md) when original estimates are treated as the power target.

## Operationalization

- Restrict to original effects treated as positive or significant under the project's criteria.
- Compute replication power for each study based on the original effect size and planned replication sample size.
- Sum or average expected successful replications under the assumption that all original effects are true and accurately estimated.
- Compare the expected count with the observed number of significant replications in the original direction.
- Report that the baseline depends on original effect sizes, which may themselves be inflated.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) reports average replication power of 0.92 and median power of 0.95 for 97 original significant effects.
- On that basis, the paper states that approximately 89 positive replication results would be expected if all original effects were true and accurately estimated.
- Only 35 replications were significant in the original direction, a large and statistically significant reduction.
- OSC interprets this gap as evidence that insufficient power alone cannot explain the observed failures to replicate.

## Caveats

- The expectation uses original effect sizes as targets; if those are inflated, nominal power overstates expected success.
- Power does not address hidden moderators, implementation differences, measurement changes, or sample differences.
- Significance-based success is only one replication criterion and should be paired with effect-size and confidence-interval checks.

## Links

- [replication success indicator suite](../measures/replication_success_indicator_suite.md)
- [replication effect-size shrinkage](../measures/replication_effect_size_shrinkage.md)
- [study power and false-positive risk](../measures/study_power_false_positive_risk.md)
- [original-evidence reproducibility gradient](../mechanisms/original_evidence_reproducibility_gradient.md)
- [replication p-value distribution diagnostic](replication_p_value_distribution_diagnostic.md)
- [positive predictive value of findings](../measures/positive_predictive_value_findings.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `replication_power_expectation_gap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: expected replication success gap; replication power shortfall; power-predicted replication gap; observed expected replication significance gap
