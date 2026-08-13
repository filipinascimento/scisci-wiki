# Original-evidence reproducibility gradient

## Summary

The original-evidence reproducibility gradient is the pattern that findings with stronger initial statistical evidence tend to replicate more often than findings with weaker initial evidence.

## Canonical Form

- Unit of analysis: original-replication study pair, original p-value, original effect size, replication power, focal effect type, or replication outcome.
- Typical representation: binned original p-value table, indicator correlation table, p-value scatterplot, or logistic replication-success model.
- Mechanism: stronger original evidence is less likely to be a chance or selected extreme estimate and is therefore more likely to remain detectable in a confirmatory replication.
- Empirical signature: lower original p-values, larger original effect sizes, or simpler focal effects predict higher replication success.

## Uses in Science of Science

- Links [positive predictive value of findings](../measures/positive_predictive_value_findings.md) to observed replication outcomes.
- Helps interpret [replication effect-size shrinkage](../measures/replication_effect_size_shrinkage.md) without treating all original findings as equally fragile.
- Provides a mechanism-level bridge between [publication bias and selective reporting](publication_bias_selective_reporting.md), [study power and false-positive risk](../measures/study_power_false_positive_risk.md), and [replication success indicator suites](../measures/replication_success_indicator_suite.md).
- Warns evaluation systems not to treat nominally significant findings as equal units of evidence.

## Operationalization

- Extract the original focal p-value, original effect size, test type, and sample size.
- Code the replication outcome under explicit success criteria.
- Estimate the relationship between original evidence strength and replication outcome while documenting replication power, effect type, challenge, and team-quality covariates.
- Use [replication p-value distribution diagnostic](../validations/replication_p_value_distribution_diagnostic.md) to visualize the original and replication p-value relationship directly.
- Report correlations or binned success rates separately for statistical significance, effect-size similarity, and subjective success.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) reports that replication success was more consistently related to original evidence strength than to the characteristics of the replication teams.
- The paper reports that 63% of original studies with p-values below 0.001 had significant replication p-values, compared with 26% for original p-values between 0.02 and 0.04 and 18% for original p-values above 0.04.
- Larger original effect sizes were associated with greater likelihood of achieving significance in the replication, while replication power predicted significance success but not the effect-size difference.
- The paper also reports less reproducibility for more surprising effects and more challenging replications under some indicators.

## Caveats

- The gradient is correlational and cannot by itself distinguish original truth, publication bias, hidden moderators, or replication implementation differences.
- Strong original evidence can still fail under changed conditions or misspecified theory.
- Weak original evidence can replicate when the original effect is real but initially imprecise.

## Links

- [replication and reproducibility](../validations/replication_reproducibility.md)
- [replication success indicator suite](../measures/replication_success_indicator_suite.md)
- [replication effect-size shrinkage](../measures/replication_effect_size_shrinkage.md)
- [replication p-value distribution diagnostic](../validations/replication_p_value_distribution_diagnostic.md)
- [replication power expectation gap](../validations/replication_power_expectation_gap.md)
- [positive predictive value of findings](../measures/positive_predictive_value_findings.md)
- [study power and false-positive risk](../measures/study_power_false_positive_risk.md)
- [research bias parameter](../measures/research_bias_parameter.md)
- [publication bias and selective reporting](publication_bias_selective_reporting.md)
- [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `original_evidence_reproducibility_gradient`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: original evidence strength predictor; p-value reproducibility gradient; initial-evidence replication predictor
