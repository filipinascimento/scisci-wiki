# Replication p-value distribution diagnostic

## Summary

Replication p-value distribution diagnostic compares the distribution of original and replication p-values to evaluate whether failures cluster near the significance threshold or spread broadly across nonsignificant values.

## Canonical Form

- Unit of analysis: original p-value, replication p-value, study pair, significance threshold, or p-value density.
- Typical representation: p-value density plot, original-replication p-value scatterplot, uniform-null comparison, or threshold-near-miss audit.
- Validation target: determine whether nonsignificant replications are mostly near misses, compatible with no effect, or evidence of mixed true and false effects.
- Empirical signature: original p-values cluster near zero while replication p-values are much larger and broadly distributed.

## Uses in Science of Science

- Refines [replication success indicator suite](../measures/replication_success_indicator_suite.md) beyond binary p < 0.05 counting.
- Complements [replication power expectation gap](replication_power_expectation_gap.md), because a broad nonsignificant distribution argues against low power as the only explanation.
- Supports [original-evidence reproducibility gradient](../mechanisms/original_evidence_reproducibility_gradient.md) by making original p-value strength visible.
- Links to [p-value diagnosticity and forking paths](p_value_diagnosticity_forking_paths.md) when original p-values may be selected or analytically flexible.

## Operationalization

- Extract original and replication p-values for the same focal effect.
- Plot density distributions for original and replication p-values separately.
- Count replications just above the threshold versus broadly nonsignificant replications.
- Compare nonsignificant replication p-values with the uniform distribution expected under no effect.
- Display original-versus-replication p-value scatterplots with threshold lines and power or sample-size annotations.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) reports mean original p-value of 0.028 and mean replication p-value of 0.302.
- The paper notes that 64 nonsignificant replication p-values were widely distributed rather than clustered just above 0.05.
- OSC compares nonsignificant replication p-values with a uniform null distribution and finds slight positive skew, suggesting at least one false negative but not enough to explain the overall failure rate.
- The paper concludes that the wide replication p-value distribution argues against insufficient power as the only explanation for failures to replicate.

## Caveats

- P-value distributions depend on effect sizes, sample sizes, analysis choices, and selection into the original published corpus.
- Uniform-null comparisons are suggestive when the set mixes true effects, null effects, and heterogeneous designs.
- P-values should be interpreted with effect sizes, confidence intervals, and preregistered analysis plans.

## Links

- [replication success indicator suite](../measures/replication_success_indicator_suite.md)
- [replication power expectation gap](replication_power_expectation_gap.md)
- [original-evidence reproducibility gradient](../mechanisms/original_evidence_reproducibility_gradient.md)
- [p-value diagnosticity and forking paths](p_value_diagnosticity_forking_paths.md)
- [replication effect-size shrinkage](../measures/replication_effect_size_shrinkage.md)
- [study power and false-positive risk](../measures/study_power_false_positive_risk.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `replication_p_value_distribution_diagnostic`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: replication p-value distribution; original replication p-value scatterplot; replication threshold-near-miss audit; nonsignificant p-value diagnostic
