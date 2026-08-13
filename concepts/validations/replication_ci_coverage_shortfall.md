# Replication CI coverage shortfall

## Summary

Replication CI coverage shortfall tests whether original effect sizes fall inside replication confidence intervals less often than expected if original and replication studies estimate the same population effect.

## Canonical Form

- Unit of analysis: original-replication effect pair, replication confidence interval, original effect size, expected coverage probability, or coverage count.
- Typical representation: percent of original effects inside replication 95% CIs, expected-versus-observed coverage test, or effect-size compatibility table.
- Validation target: evaluate effect-size compatibility without relying only on whether the replication is significant.
- Empirical signature: observed coverage of original effects by replication intervals is substantially below nominal or expected coverage.

## Uses in Science of Science

- Splits a lower-level statistical criterion from [replication success indicator suite](../measures/replication_success_indicator_suite.md).
- Complements [replication effect-size shrinkage](../measures/replication_effect_size_shrinkage.md) by asking whether the original effect is compatible with the replication interval.
- Helps interpret [replication power expectation gap](replication_power_expectation_gap.md) and [replication p-value distribution diagnostic](replication_p_value_distribution_diagnostic.md) with uncertainty around effect estimates.
- Provides a caution for binary replication claims: wide intervals can include the original effect even when the replication estimate is near zero.

## Operationalization

- Convert original and replication effects to a common metric when possible.
- Compute the replication effect-size confidence interval.
- Count whether the original effect size lies within that replication interval.
- Compare observed coverage with the expected coverage under a same-population-effect assumption, using appropriate procedures for the effect statistic.
- Report exclusions where standard errors cannot be computed and test-statistic families require separate treatment.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) evaluates whether the original effect size was within the 95% confidence interval of the replication effect estimate.
- In the subset of 73 studies with computable standard errors for correlations, 30 replication confidence intervals contained the original effect size.
- OSC reports this 41.1% coverage as significantly below the expected 78.5%.
- Including studies requiring other statistical procedures led to an overall estimate of 47.4% replication success under this criterion.
- The paper notes both directions of limitation: the criterion can call a same-direction but smaller replication a failure, while a very imprecise near-zero replication can include the original effect.

## Caveats

- Coverage depends on the precision of the replication estimate and the chosen effect-size metric.
- Wide replication intervals can overstate compatibility, while very precise intervals can flag modest but meaningful shrinkage as failure.
- The expected coverage calculation depends on assumptions about shared population effects and valid standard errors.

## Links

- [replication success indicator suite](../measures/replication_success_indicator_suite.md)
- [replication effect-size shrinkage](../measures/replication_effect_size_shrinkage.md)
- [replication effect harmonization](../methods/replication_effect_harmonization.md)
- [replication power expectation gap](replication_power_expectation_gap.md)
- [replication p-value distribution diagnostic](replication_p_value_distribution_diagnostic.md)
- [replication meta-analytic recombination](../methods/replication_meta_analytic_recombination.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `replication_ci_coverage_shortfall`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: replication confidence-interval coverage shortfall; original effect in replication CI; CI compatibility replication test; replication interval coverage gap
